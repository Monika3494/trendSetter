const express=require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const User = require('./models/user');

const url="mongodb+srv://monikabahuguna68:Itk8ePRN1PJbfpo8@cluster0.bg2ng.mongodb.net/"
const server=express();

mongoose.connect(url)

const conn = mongoose.connection

conn.on("open",function() {
    console.log("Database Connected")
})


const userRoute = require("./routes/user_routes")

server.use(cors({credentials: true, origin: "http://localhost:3001"}))

server.use(express.json())

server.post("/login", async function (req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        if (password !== user.password) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
    }
})

server.post("/register", async function (req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = new User({ email, password });
        await user.save();
        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        console.error(error);
    }
})

server.listen(5000, function() {
    console.log("Server started on port 5000")
})


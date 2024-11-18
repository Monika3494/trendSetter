import React from "react";
import "./WearOptions.css";
import Header from "../components/HeaderL";
import Footer from "../components/Footer";

const UpperWear = () => {
  const upperWearOptions = [
    { id: 1, name: " SquareNeck Top", img: "1top.jpeg" },
    { id: 2, name: "Shirt", img: "Shirt.jpeg" },
    { id: 3, name: "Halter Neck Top", img: "Halter Neck.jpeg" },
    { id: 4, name: "One shoulder Top", img: "oneshoulder.jpeg" },
    { id: 4, name: "Tourtle Neck Top", img: "Highneck.jpeg" },
    { id: 4, name: "Tube Top", img: "Blacktube.jpeg" },

    

  ];

  return (
    <div>
      <Header hideLogin />
      <div className="grid-container">
        {upperWearOptions.map((item) => (
          <div key={item.id} className="photo-card">
            <img src={item.img} alt={item.name} className="photo-image" />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default UpperWear;

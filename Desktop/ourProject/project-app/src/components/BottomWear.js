import React from "react";
import "./WearOptions.css";
import Header from "../components/HeaderL";
import Footer from "../components/Footer";

const BottomWear = () => {
  const bottomWearOptions = [
    { id: 1, name: "Straight Fit Jeans", img: "Straightfit.jpeg" },
    { id: 2, name: "Bootcut Jeans", img: "Bootcut.jpeg" },
    { id: 3, name: "Wide Leg Jeans", img: "WideLeg.jpeg" },
    { id: 4, name: "Pants", img: "Pants.jpeg" },
    { id: 4, name: "Trousers", img: "Trousers.jpeg" },
    { id: 4, name: "Shorts", img: "Shorts.jpeg" },
  ];

  return (
    <div>
      <Header hideLogin />
      <div className="grid-container">
        {bottomWearOptions.map((item) => (
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

export default BottomWear;

import React, { useState } from "react";

const Slider = () => {
    const images = [
        
        "https://www.fgear.in/cdn/shop/files/1_d4aed5d4-acca-463e-b904-bd41dfa2436c.jpg?v=1700192046&width=713",
        "https://images.unsplash.com/photo-1625598853001-a4edddf2440c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1550253594-356b2f788907?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ textAlign: "center" }} className="h-[90%] w-[87%]">
            <img
                src={images[currentImageIndex]}
                alt="Slider"
                style={{ width: "50%", height: "10%" }}
            />
            <div>
                <button onClick={handlePrevImage} className="border-black border px-3">Left</button>
                <button onClick={handleNextImage} className="ml-2 border-black border px-3">Right</button>
            </div>
        </div>
    );
};

export default Slider;

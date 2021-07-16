import React, { useState } from "react";
import PNC from "./pnc";
import Auto from "./auto";
import Health from "./health";

export default function Registration() {
    const [activeItem, setActiveItem] = useState("");
    var value;
    const handleItemClick = (value) => {
        setActiveItem(value); 
    }
    
    const pnc = (
        <PNC 
        handleItemClick={handleItemClick}
        value={value}
        />
    )

    const auto = (
        <Auto 
        handleItemClick={handleItemClick}
        value={value}
        />
    )

    const health = (
        <Health 
        handleItemClick={handleItemClick}
        value={value}
        />
    )

    return activeItem === "Property and Casualty" ? pnc
    : activeItem === "Auto" ? auto
    : health
}
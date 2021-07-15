import React, { useState } from "react";
import PNC from "./pnc";
import Auto from "./auto";
import Health from "./health";

export default function Registration({ account, contract, web3 }) {
    const [activeItem, setActiveItem] = useState("");
    var value;
    const handleItemClick = (value) => {
        setActiveItem(value); 
    }
    
    const pnc = (
        <PNC
        account={account}
        contract={contract}
        web3={web3} 
        handleItemClick={handleItemClick}
        value={value}
        />
    )

    const auto = (
        <Auto
        account={account}
        contract={contract}
        web3={web3} 
        handleItemClick={handleItemClick}
        value={value}
        />
    )

    const health = (
        <Health
        account={account}
        contract={contract}
        web3={web3} 
        handleItemClick={handleItemClick}
        value={value}
        />
    )

    return activeItem === "Property and Casualty" ? pnc
    : activeItem === "Auto" ? auto
    : health
}
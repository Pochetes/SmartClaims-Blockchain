import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

export default function HeaderSection() {
    const [activeItem, setActiveItem] = useState("");
    
    return (
        <>
        <Menu>
            <Menu.Item header>SmartClaims</Menu.Item>
            <Menu.Item
            header
            name='aboutUs'
            active={activeItem === 'aboutUs'}
            onClick={(e) => {setActiveItem(e.target.active)}}
            />
        </Menu>
        </>
    )
}
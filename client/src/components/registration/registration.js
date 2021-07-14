import React, { useState } from "react";
import { Header, Message, Menu } from "semantic-ui-react";
import { SSL_OP_PKCS1_CHECK_1 } from "constants";

export default function Registration() {
    const [activeItem, setActiveItem] = useState("");
    var value;
    const handleItemClick = (value) => {
        setActiveItem(value); 
    }

    const pnc = (


        <>
            <Header style={{fontSize: 50}} as='h1'>SmartClaims</Header>
            <Header style={{marginTop: -20}} as='h3'>A new way of insurance.</Header>
            <Message info style={{marginTop: 30}}>
                <b>Directions:</b> Choose the claim that corresponds most to you. 
            </Message>
            <Menu color={"black"} widths={3}>
                <Menu.Item
                name='Property and Casualty'
                onClick={() => {handleItemClick(value = "Property and Casualty")}}
                />
                <Menu.Item
                name='Auto'
                onClick={() => {handleItemClick(value = "Auto")}}
                />
                <Menu.Item
                name='Health'
                onClick={() => {handleItemClick(value = "Health")}}
                />
            </Menu>
            <h1>PNC</h1>
        </>
    )

    const auto = (


        <>
            <Header style={{fontSize: 50}} as='h1'>SmartClaims</Header>
            <Header style={{marginTop: -20}} as='h3'>A new way of insurance.</Header>
            <Message info style={{marginTop: 30}}>
                <b>Directions:</b> Choose the claim that corresponds most to you. 
            </Message>
            <Menu color={"black"} widths={3}>
                <Menu.Item
                name='Property and Casualty'
                onClick={() => {handleItemClick(value = "Property and Casualty")}}
                />
                <Menu.Item
                name='Auto'
                onClick={() => {handleItemClick(value = "Auto")}}
                />
                <Menu.Item
                name='Health'
                onClick={() => {handleItemClick(value = "Health")}}
                />
            </Menu>
            <h1>Auto</h1>
        </>
    )

    const health = (


        <>
            <Header style={{fontSize: 50}} as='h1'>SmartClaims</Header>
            <Header style={{marginTop: -20}} as='h3'>A new way of insurance.</Header>
            <Message info style={{marginTop: 30}}>
                <b>Directions:</b> Choose the claim that corresponds most to you. 
            </Message>
            <Menu color={"black"} widths={3}>
                <Menu.Item
                name='Property and Casualty'
                onClick={() => {handleItemClick(value = "Property and Casualty")}}
                />
                <Menu.Item
                name='Auto'
                onClick={() => {handleItemClick(value = "Auto")}}
                />
                <Menu.Item
                name='Health'
                onClick={() => {handleItemClick(value = "Health")}}
                />
            </Menu>
            <h1>Health</h1>
        </>
    )

    return activeItem === "Property and Casualty" ? pnc
    : activeItem === "Auto" ? auto
    : health
}
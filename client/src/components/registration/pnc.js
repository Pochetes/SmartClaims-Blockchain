import React from "react";
import { Header, Message, Menu } from "semantic-ui-react";


export default function PNC({ handleItemClick, value }) {
    return (
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
}
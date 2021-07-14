import React, { useState, useEffect } from "react";
import { Header, Message, Menu, Accordion, Icon, Form, Button } from "semantic-ui-react";

export default function Auto({ handleItemClick, value }) {
    const [activeIndex, setActiveIndex] = useState(0);
    var index;
    
    return (

        // Header with all the different types of insurance claims
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

        {/* Policyholder User Input Field Section for Auto Insurance */}

        
        <Accordion styled>
            {/* FIRST SECTION ------- */}
            <Accordion.Title
            onClick={() => {setActiveIndex(index = 0)}}
            >
            <Icon name='dropdown' />
            Policyholder Information
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
            
            {/* FIRST CONTENT ------- */}
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
            </Form>
            </Accordion.Content>

            {/* SECOND SECTION ------- */}
            <Accordion.Title
            onClick={() => {setActiveIndex(index = 1)}}
            >
            <Icon name='dropdown' />
            PolicyHolder Vehicle
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
            
            {/* SECOND CONTENT ------- */}
            <Form>
                <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                </Form.Field>                
            </Form>
            </Accordion.Content>

            {/* THIRD SECTION ------- */}
            <Accordion.Title
            onClick={() => {setActiveIndex(index = 2)}}
            >
            <Icon name='dropdown' />
            Accident Information
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
            
            {/* THIRD CONTENT ------- */}
            <Form>
                <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                </Form.Field>             
            </Form>
            </Accordion.Content>

            {/* FOURTH SECTION ------- */}
            <Accordion.Title
            onClick={() => {setActiveIndex(index = 3)}}
            >
            <Icon name='dropdown' />
            Other Driver and Vehicle Information
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>

            {/* FOURTH CONTENT ------- */}
            <Form>
                <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                </Form.Field>             
            </Form>
            </Accordion.Content>

            {/* FIFTH SECTION ------- */}
            <Accordion.Title
            onClick={() => {setActiveIndex(index = 4)}}
            >
            <Icon name='dropdown' />
            Explnation of Accident
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>

            {/* FIFTH CONTENT ------- */}
            <Form>
                <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                </Form.Field>             
            </Form>
            </Accordion.Content>
        </Accordion>
        </>
    )
}
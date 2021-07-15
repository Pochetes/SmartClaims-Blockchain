import React, { useState } from "react";
import { Header, Message, Menu, Accordion, Icon, Form, Button, Container, Checkbox } from "semantic-ui-react";


export default function PNC({ handleItemClick, value }) {
    const [activeIndex, setActiveIndex] = useState();
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
                header
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

            {/* Policyholder User Input Field Section for P&C Insurance */}

            <Container style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50
            }}>
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
                    <Form.Field>
                    <label>Gender</label>
                    <input placeholder='Gender' />
                    </Form.Field>
                    <Form.Field>
                    <label>Date of Birth</label>
                    <input placeholder='Date of Birth' />
                    </Form.Field>
                    <Form.Field>
                    <label>Phone Number</label>
                    <input placeholder='Phone Number' />
                    </Form.Field>
                    <Form.Field>
                    <label>Policy Number</label>
                    <input placeholder='Policy Number' />
                    </Form.Field>
                    <Form.Field>
                    <label>City</label>
                    <input placeholder='City' />
                    </Form.Field>
                    <Form.Field>
                    <label>State</label>
                    <input placeholder='State' />
                    </Form.Field>
                    <Form.Field>
                    <label>ZipCode</label>
                    <input placeholder='Zipcode' />
                    </Form.Field>
                </Form>
                </Accordion.Content>

                {/* SECOND SECTION ------- */}
                <Accordion.Title
                onClick={() => {setActiveIndex(index = 1)}}
                >
                <Icon name='dropdown' />
                Damage Information
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>

                {/* SECOND CONTENT ------- */}
                <Form>
                    <Form.Field>
                        <label>Estimated Amount of Loss</label>
                        <input placeholder='Loss Amount' />
                    </Form.Field>
                    <Form.Field>
                        <label>Description of Loss</label>
                        <input placeholder='Description of Loss' />
                    </Form.Field>
                    <Form.Field>
                        <label>Description of Damage</label>
                        <input placeholder='Description of Damage' />
                    </Form.Field>                  
                </Form>
                </Accordion.Content>

                {/* THIRD SECTION ------- */}
                <Accordion.Title
                onClick={() => {setActiveIndex(index = 2)}}
                >
                <Icon name='dropdown' />
                Reporting Details
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>

                {/* THIRD CONTENT ------- */}
                <Form>
                    <Form.Field>
                            <label>Authority Contacted</label>
                            <input placeholder='Authority Contacted' />
                    </Form.Field>
                    <Form.Field>
                            <label>Report Number</label>
                            <input placeholder='Report Number' />
                    </Form.Field>
                    <Form.Field>
                            <label>Name of Person Responsible for Damage</label>
                            <input placeholder='Name' />
                    </Form.Field>
                    <Form.Field>
                            <label>Phone Number of Person Responsible for Damage</label>
                            <input placeholder='Driver Name' />
                    </Form.Field>
                    <Form.Field>
                            <label>Name of Witness</label>
                            <input placeholder='Name' />
                    </Form.Field>
                    <Form.Field>
                            <label>Phone Number of Witness</label>
                            <input placeholder='Phone Number' />
                    </Form.Field>
                    <Form.Field>
                            <label>Other Comments</label>
                            <input placeholder='Comments...' />
                    </Form.Field>           
                </Form>
                </Accordion.Content>

                {/* FOURTH SECTION ------- */}
                <Accordion.Title
                onClick={() => {setActiveIndex(index = 3)}}
                >
                <Icon name='dropdown' />
                Person Reporting Incident Information
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
                    <Form.Field>
                            <label>Phone Number</label>
                            <input placeholder='Phone Number' />
                    </Form.Field>
                    <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                            <label>Date Reported</label>
                            <input placeholder='Date' />
                    </Form.Field>             
                </Form>
                </Accordion.Content>
                </Accordion>
            </Container>
            <Container style={{
                marginTop: 30
            }}>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit' style={{ marginTop: 15 }}>Submit</Button>
        </Container>
        </>
    )
}
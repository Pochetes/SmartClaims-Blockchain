import React, { useState } from "react";
import { Header, Message, Menu, Accordion, Icon, Form, Button, Container, Checkbox } from "semantic-ui-react";

export default function Health({ handleItemClick, value, account, contract, web3 }) {
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
				style={{ fontSize: 17 }}
                name='Property and Casualty'
                onClick={() => {handleItemClick(value = "Property and Casualty")}}
                />
                <Menu.Item
				style={{ fontSize: 17 }}
                name='Auto'
                onClick={() => {handleItemClick(value = "Auto")}}
                />
                <Menu.Item
				style={{ fontSize: 17 }}
				header
                name='Health'
                onClick={() => {handleItemClick(value = "Health")}}
                />
            </Menu>
            
        {/* Policyholder User Input Field Section for Health Insurance */}    


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
			Primary Customer Info
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
				    <label>Account Number</label>
				    <input placeholder='Account Number' />
				</Form.Field>
                <Form.Field>
				    <label>Social Security</label>
				    <input placeholder='Social Security' />
				</Form.Field>
                <Form.Field>
				    <label>Employer</label>
				    <input placeholder='Employer' />
				</Form.Field>
                <Form.Field>
				    <label>Work Status</label>
				    <input placeholder='Employed, Retired, etc.' />
				</Form.Field>
				<Form.Field>
                    <label>Effective Date of Status, if any</label>
				    <input placeholder='Date' />
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
			Patient Information (If Different from Primary Customer)
			</Accordion.Title>
			<Accordion.Content active={activeIndex === 1}>

			{/* SECOND CONTENT ------- */}
			<Form>
				<Form.Field>
						<label>Make</label>
						<input placeholder='Make' />
				</Form.Field>
				<Form.Field>
						<label>Model</label>
						<input placeholder='Model' />
				</Form.Field>
				<Form.Field>
						<label>Year</label>
						<input placeholder='Year' />
				</Form.Field> 
				<Form.Field>
						<label>Color</label>
						<input placeholder='Color' />
				</Form.Field> 
				<Form.Field>
						<label>License Plate Number</label>
						<input placeholder='Plate Number' />
				</Form.Field>                 
			</Form>
			</Accordion.Content>

			{/* THIRD SECTION ------- */}
			<Accordion.Title
			onClick={() => {setActiveIndex(index = 2)}}
			>
			<Icon name='dropdown' />
			Accident/Occupational Claim Information
			</Accordion.Title>
			<Accordion.Content active={activeIndex === 2}>

			{/* THIRD CONTENT ------- */}
			<Form>
				<Form.Field>
						<label>Date of Accident</label>
						<input placeholder='Date' />
				</Form.Field>
				<Form.Field>
						<label>Time of Accident</label>
						<input placeholder='Time' />
				</Form.Field>
				<Form.Field>
						<label>Location</label>
						<input placeholder='Location' />
				</Form.Field>
				<Form.Field>
						<label>Driver Name</label>
						<input placeholder='Driver Name' />
				</Form.Field>
				<Form.Field>
						<label>Was the vehicle towed?</label>
						<input placeholder='Vehicles Towed' />
				</Form.Field>
				<Form.Field>
						<label>How many passengers were in the car, if any?</label>
						<input placeholder='Number of Passengers' />
				</Form.Field>
				<Form.Field>
						<label>How many cars were involved?</label>
						<input placeholder='Number of Cars' />
				</Form.Field>
				<Form.Field>
						<label>Where on the car is there damage?</label>
						<input placeholder='Car Damage' />
				</Form.Field>             
			</Form>
			</Accordion.Content>

			{/* FOURTH SECTION ------- */}
			<Accordion.Title
			onClick={() => {setActiveIndex(index = 3)}}
			>
			<Icon name='dropdown' />
			Family/Other Coverage Information
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
						<label>Vehicle Make</label>
						<input placeholder='Make' />
				</Form.Field>
				<Form.Field>
						<label>Vehicle Model</label>
						<input placeholder='Model' />
				</Form.Field>
				<Form.Field>
						<label>Vehicle Year</label>
						<input placeholder='Year' />
				</Form.Field>             
			</Form>
			</Accordion.Content>

			{/* FIFTH SECTION ------- */}
			<Accordion.Title
			onClick={() => {setActiveIndex(index = 4)}}
			>
			<Icon name='dropdown' />
			Explanation of Accident
			</Accordion.Title>
			<Accordion.Content active={activeIndex === 4}>

			{/* FIFTH CONTENT ------- */}
			<Form>
				<Form.Field>
						<label>Explanation</label>
						<input placeholder='Explain the incident...' />
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
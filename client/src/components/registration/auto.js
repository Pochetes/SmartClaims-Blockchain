import React, { useState, useEffect } from "react";
import { Header, Message, Menu, Accordion, Icon, Form, Button, Container, Checkbox } from "semantic-ui-react";
import Web3 from "web3";
import { isContractAddressInBloom } from "web3-utils";

export default function Auto({ handleItemClick, value, account, contract, web3 }) {
	const [activeIndex, setActiveIndex] = useState();
	const [inputs, setInputs] = useState({});
	var index;

	const handleChange = async (e) => {
		setInputs({...inputs, indexPos: e.target.index, [e.target.name]: e.target.value });
		console.log(inputs)
	}

	const handleSubmit = async () => {
		const accounts = await web3.eth.getAccounts
		// first section

		// here we will fire the functions from our smart contracts
		// and pass in all of the parameters based on user input

		// contract.methods.fileAutoClaimfirst(
		// 	accounts[0],
			
		// )
	}
    
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
            onClick={() => {handleItemClick(value = `Property and Casualty`)}}
            />
            <Menu.Item
			style={{ fontSize: 17 }}
			header
            name='Auto'
            onClick={() => {handleItemClick(value = "Auto")}}
            />
            <Menu.Item
			style={{ fontSize: 17 }}
            name='Health'
            onClick={() => {handleItemClick(value = "Health")}}
            />
        </Menu>

        {/* Policyholder User Input Field Section for Auto Insurance */}

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
				<input
				index= {0}
				name="First Name" 
				onChange={handleChange}
				placeholder='First Name' />
				</Form.Field>
				<Form.Field>
				<label>Last Name</label>
				<input
				index={0}
				name="Last Name" 
				onChange={handleChange}
				placeholder='Last Name' />
				</Form.Field>
				<Form.Field>
				<label>Gender</label>
				<input
				index={0}
				name="Gender"  
				onChange={handleChange}
				placeholder='Gender' />
				</Form.Field>
				<Form.Field>
				<label>Date of Birth</label>
				<input
				index={0}
				name="Date of Birth" 
				onChange={handleChange}
				placeholder='Date of Birth' />
				</Form.Field>
				<Form.Field>
				<label>License Number</label>
				<input 
				index={0}
				name="License Number"
				onChange={handleChange}
				placeholder='License Number' />
				</Form.Field>
				<Form.Field>
				<label>Phone Number</label>
				<input
				index={0}
				name="Phone Number" 
				onChange={handleChange}
				placeholder='Phone Number' />
				</Form.Field>
				<Form.Field>
				<label>Policy Number</label>
				<input
				index={0}
				name="Policy Number" 
				onChange={handleChange}
				placeholder='Policy Number' />
				</Form.Field>
				<Form.Field>
				<label>City</label>
				<input
				index={0}
				name="City" 
				onChange={handleChange}
				placeholder='City' />
				</Form.Field>
				<Form.Field>
				<label>State</label>
				<input
				index={0}
				name="State" 
				onChange={handleChange}
				placeholder='State' />
				</Form.Field>
				<Form.Field>
				<label>ZipCode</label>
				<input
				index={0}
				name="ZipCode" 
				onChange={handleChange}
				placeholder='Zipcode' />
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
						<label>Make</label>
						<input
						index={1}
						name="Make" 
						onChange={handleChange}
						placeholder='Make' />
				</Form.Field>
				<Form.Field>
						<label>Model</label>
						<input
						index={1}
						name="Model" 
						onChange={handleChange}
						placeholder='Model' />
				</Form.Field>
				<Form.Field>
						<label>Year</label>
						<input
						index={1}
						name="Year" 
						onChange={handleChange}
						placeholder='Year' />
				</Form.Field> 
				<Form.Field>
						<label>Color</label>
						<input
						index={1} 
						name="Color"
						onChange={handleChange}
						placeholder='Color' />
				</Form.Field> 
				<Form.Field>
						<label>License Plate Number</label>
						<input
						index={1}
						name="License Plate Number" 
						onChange={handleChange}
						placeholder='Plate Number' />
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
						<label>Date of Accident</label>
						<input
						index={2}
						name="Date of Accident" 
						onChange={handleChange}
						placeholder='Date' />
				</Form.Field>
				<Form.Field>
						<label>Time of Accident</label>
						<input
						index={2}
						name="Time of Accident" 
						onChange={handleChange}
						placeholder='Time' />
				</Form.Field>
				<Form.Field>
						<label>Location</label>
						<input
						index={2} 
						name="Location"
						onChange={handleChange}
						placeholder='Location' />
				</Form.Field>
				<Form.Field>
						<label>Driver Name</label>
						<input
						index={2}
						name="Driver Name" 
						onChange={handleChange}
						placeholder='Driver Name' />
				</Form.Field>
				<Form.Field>
						<label>Was the vehicle towed?</label>
						<input
						index={2}
						name="Was the vehicle towed" 
						onChange={handleChange}
						placeholder='Vehicles Towed' />
				</Form.Field>
				<Form.Field>
						<label>How many passengers were in the car, if any?</label>
						<input
						index={2}
						name="How many passengers" 
						onChange={handleChange}
						placeholder='Number of Passengers' />
				</Form.Field>
				<Form.Field>
						<label>How many cars were involved?</label>
						<input
						index={2}
						name="How many cars" 
						onChange={handleChange}
						placeholder='Number of Cars' />
				</Form.Field>
				<Form.Field>
						<label>Where on the car is there damage?</label>
						<input
						index={2}
						name="Car damage" 
						onChange={handleChange}
						placeholder='Car Damage' />
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
						<input
						index={3}
						name="First Name" 
						onChange={handleChange}
						placeholder='First Name' />
				</Form.Field>
				<Form.Field>
						<label>Last Name</label>
						<input
						index={3}
						name="Last Name" 
						onChange={handleChange}
						placeholder='Last Name' />
				</Form.Field>
				<Form.Field>
						<label>Phone Number</label>
						<input
						index={3} 
						name="Phone Number"
						onChange={handleChange}
						placeholder='Phone Number' />
				</Form.Field>
				<Form.Field>
						<label>Vehicle Make</label>
						<input
						index={3}
						name="Vehicle Make" 
						onChange={handleChange}
						placeholder='Make' />
				</Form.Field>
				<Form.Field>
						<label>Vehicle Model</label>
						<input
						index={3}
						name="Vehicle Model" 
						onChange={handleChange}
						placeholder='Model' />
				</Form.Field>
				<Form.Field>
						<label>Vehicle Year</label>
						<input
						index={3}
						name="Vehicle Year" 
						onChange={handleChange}
						placeholder='Year' />
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
						<input 
						index={4}
						name="Explanation"
						onChange={handleChange}
						placeholder='Explain the incident...' />
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
			<Button
			onClick={() => {handleSubmit()}} 
			type='submit' 
			style={{ marginTop: 15 }}>Submit</Button>
		</Container>
        </>
    )
}
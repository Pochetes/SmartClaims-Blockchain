import React, { useState, useEffect, Component } from "react";
import SmartClaimsContract from "./contracts/SmartClaims.json";
import getWeb3 from "./getWeb3";
import HeaderSection from "./components/header/header";
import Registration from "./components/registration/registration";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      let deployedNetwork = SmartClaimsContract.networks[networkId];
      const storageInstance = new web3.eth.Contract(
        SmartClaimsContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
   
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, storageContract: storageInstance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, storageContract } = this.state;

    // Stores a given value, 5 by default.
    await storageContract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const storageResponse = await storageContract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: storageResponse });
  };


  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <HeaderSection />
        <Registration />
        <div>
           {/* {<h1>The stored data is: {solidityMethods.storageContract}</h1>} */}
        </div>
        {/* <div>The stored value is: {this.state.storageValue}</div> */}
        <div>The first name for claim of address is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;

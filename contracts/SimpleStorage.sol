// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
    struct AutoClaim {
        string firstName;
        address add;
    }

    mapping(address => AutoClaim) public claims;
    address[] public addresses;

    function fileClaim(address _address, string memory _firstName) public {
        addresses.push(_address);
        claims[_address] = AutoClaim(_firstName, _address);
    }

    function getClaim(address _address) public view returns (string memory) {
      return claims[_address].firstName;
    }

    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}

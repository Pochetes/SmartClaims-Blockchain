pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract SmartClaims {
    struct AutoClaim 
    {
        string firstName;
        /*
        string lastName;
        string gender;  
        string dob;
        string licenseNumber;
        string phoneNumber;
        uint policyNumber;
        string city;
        string state;
        string zip;
        
        string vehicleMake;
        string vehicleModel;
        string vehicleYear;
        string vehicleColor;
        string licensePlate;
        
        string accidentDate;
        string accidentTime;
        string accidentLocation;
        string driverName;
        bool towed;
        uint passengerNum;
        uint carsNum;
        string damagedArea;
        
        string accidentExplanation; 
        */
    }
    
    struct PersonW 
    {
        string name;
        string phoneNum;
    }
    
    struct PropertyClaim 
    {
        string firstName;
        /*
        string lastName;
        string gender;
        uint estimateLoss;
        string lossExp;
        string damagedDescription;
        string personContacted;
        uint reportNum;
        string personResponsible;
        string comments;
        PersonW[] witnesses;
        string personReportName;
        string personReportPhone;
        string personReportEmail;
        string personReportDate;
        */
    }
    
    struct HealthClaim
    {
        string firstName;
        /*
        string lastName;
        string gender;
        string dob;
        string city;
        string state;
        string zip;
        string phoneNumber;
        uint accountNumber;
        uint socialSecurity;
        string employerName;
        string status;
        
        bool employmentRelated;
        string description;
        bool autoAccident;
        bool medicareCovered;
        string insuranceCompanyName;
        uint dateAccident;
        
        string signature;
        */
    }
	
  	
  	// AutoClaim autoClaims[] = new AutoClaim[](3);
    // HealthClaim healthClaims[] = new HealthClaim[](3);
    // PropertyClaim propClaims[] = new PropertyClaim[](3);

	//mapping is kind of like creating a dict
    mapping(address => AutoClaim) public autoMap;    
    // address[] public autoFilers; // addresses of auto claim filers --> all addresses in autoMap
    
    function fileAutoClaim(address _address, AutoClaim memory _claim) public {  // puts in autoMap
        autoMap[_address] = _claim;
        // autoFilers.push(_address) - 1;
    }
    
    /*
    function getAutoFilers() public view returns (address[] memory a) { 
        return autoFilers;  // returns all addresses
    }
    */ 

    function getAutoClaim(address _address) public view returns (AutoClaim memory b) { // gets address 
        return autoMap[_address];   // returns AutoClaim
    }

    function createAutoClaim(string memory _firstName) public{
  
        AutoClaim memory insertAC;
        insertAC.firstName = _firstName;
        fileAutoClaim(msg.sender, insertAC);  
    }
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}



















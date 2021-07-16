pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract SmartClaims {
    // struct AutoClaim 
    // {
    //     string memory firstName;
    //     /*
    //     string lastName;
    //     string gender;  
    //     string dob;
    //     string licenseNumber;
    //     string phoneNumber;
    //     uint policyNumber;
    //     string city;
    //     string state;
    //     string zip;
        
    //     string vehicleMake;
    //     string vehicleModel;
    //     string vehicleYear;
    //     string vehicleColor;
    //     string licensePlate;
        
    //     string accidentDate;
    //     string accidentTime;
    //     string accidentLocation;
    //     string driverName;
    //     bool towed;
    //     uint passengerNum;
    //     uint carsNum;
    //     string damagedArea;
        
    //     string accidentExplanation; 
    //     */
    // }
    
    // struct PersonW 
    // {
    //     string name;
    //     string phoneNum;
    // }
    
    // struct PropertyClaim 
    // {
    //     string firstName;
    //     /*
    //     string lastName;
    //     string gender;
    //     uint estimateLoss;
    //     string lossExp;
    //     string damagedDescription;
    //     string personContacted;
    //     uint reportNum;
    //     string personResponsible;
    //     string comments;
    //     PersonW[] witnesses;
    //     string personReportName;
    //     string personReportPhone;
    //     string personReportEmail;
    //     string personReportDate;
    //     */
    // }
    
    // struct HealthClaim
    // {
    //     string firstName;
    //     /*
    //     string lastName;
    //     string gender;
    //     string dob;
    //     string city;
    //     string state;
    //     string zip;
    //     string phoneNumber;
    //     uint accountNumber;
    //     uint socialSecurity;
    //     string employerName;
    //     string status;
        
    //     bool employmentRelated;
    //     string description;
    //     bool autoAccident;
    //     bool medicareCovered;
    //     string insuranceCompanyName;
    //     uint dateAccident;
        
    //     string signature;
    //     */
    // }

    struct firsteighta{
    
        string firstName;
        string lastName;
        string gender;
        string dob;
        string licenseNumber;
        string phoneNumber;
        uint policyNumber;
        
    
    }
    struct secondeighta{
    
        string state;
        string zip;
        
        string vehicleMake;
        string vehicleModel;
        string vehicleYear;
        string vehicleColor;
        string licensePlate;
    
    }
    
    struct thirdeighta
   {
        string accidentDate;
        string accidentTime;
        string accidentLocation;
        string driverName;
        bool towed;
        uint passengerNum;
        uint carsNum;
        string damagedArea;
       


    }
    struct fourtha
   {
        string city;
        string accidentExplanation;
    }
   
   
   //property claim parts
   
    struct first8p
    {
        string firstName;
        string lastName;
        string gender;
        uint estimateLoss;
        string lossExp;
        string damagedDescription;
        string personContacted;
        uint reportNum;
    }
    struct second8p
   {
        string personResponsible;
        string comments;
   
        string personReportName;
        string personReportPhone;
        string personReportEmail;
        string personReportDate;

    }
   
   //health claim parts
   
    struct health1{
       
        string firstName;
        string lastName;
        string gender;
        string dob;
        string city;
        string state;
        string zip;

       
    }
    struct health2{
       
        string phoneNumber;
        uint accountNumber;
        uint socialSecurity;
        string employerName;
        string status;
        bool employmentRelated;
        string description;
        bool autoAccident;

       
    }
    struct health3{
       
        bool medicareCovered;
        string insuranceCompanyName;
        uint dateAccident;
        string signature;

    }
   
    mapping(address => firsteighta) public firstsa;
    mapping (address => secondeighta) public secondsa;
    mapping (address => thirdeighta) public thirdsa;
    mapping (address => fourtha) public fourthsa;


    mapping(address => first8p) public firstsp;
    mapping (address => second8p) public secondsp;


    mapping(address => health1) public firstsh;
    mapping (address => health2) public secondsh;
    mapping (address => health3) public thirdsh;







	
  	
  	// AutoClaim autoClaims[] = new AutoClaim[](3);
    // HealthClaim healthClaims[] = new HealthClaim[](3);
    // PropertyClaim propClaims[] = new PropertyClaim[](3);

	//mapping is kind of like creating a dict


    function fileAutoClaimfirst(
        address _address,  
        string memory _firstName,
        string memory _lastName,
        string memory _gender,
        string memory _dob,
        string memory _licenseNumber,
        string memory _phoneNumber,
        uint _policyNumber
        
) public {
    
        firstsa[_address] = firsteighta(_firstName, _lastName, _gender, _dob, _licenseNumber, _phoneNumber, _policyNumber);
       
       
    }
    
    function fileAutoClaimsecond(address _address, string memory _state, string memory _zip, string memory _vehicleMake, string memory _vehicleModel, string memory _vehicleYear, string memory _vehicleColor, string memory _licensePlate) public {
            
    
        secondsa[_address] = secondeighta(_state, _zip, _vehicleMake, _vehicleModel, _vehicleYear, _vehicleColor, _licensePlate);
    
            
        
        
    }
    
    function fileAutoClaimsthird(address _address, string memory _accidentDate, string memory _accidentTime, string memory _accidentLocation, string memory _driverName, bool _towed,  uint _passengerNum, uint _carsNum, string memory _damagedArea) public {
            
            
            
        thirdsa[_address] = thirdeighta(_accidentDate, _accidentTime, _accidentLocation, _driverName, _towed, _passengerNum, _carsNum, _damagedArea);

    }
     
     
     
    function fileAutoClaimsfourth(address _address, string memory _city, string memory _accidentExplanation) public {
            
            
            
        fourthsa[_address] = fourtha(_city,_accidentExplanation);

    }
     
     
    function filePropertyClaimfirst(address _address, string memory _firstName, string memory _lastName, string memory _gender, uint _estimateLoss, string memory _lossExp, string memory _damagedDescription, string memory _personContacted, uint _reportNum) public {
        
        
        firstsp[_address] = first8p(_firstName, _lastName,  _gender,  _estimateLoss,  _lossExp,  _damagedDescription,  _personContacted, _reportNum);
       
    }
    
    
    
    
    function filePropertyClaimsecond(address _address, string memory personResponsible, string memory comments, string memory personReportName, string memory personReportPhone, string memory personReportEmail, string memory personReportDate ) public {
                     
                     
        secondsp[_address] = second8p(personResponsible, comments, personReportName, personReportPhone, personReportEmail, personReportDate );
        
    }
    
    
    
    
    function fileHealthClaimfirst(address _address,  string memory _firstName,string memory _lastName, string memory _gender, string memory _dob, string memory _city, string memory _state, string memory _zip) public {
        firstsh[_address] = health1(_firstName, _lastName,  _gender,  _dob,  _city,  _state, _zip);
       
    }
    function fileHealthClaimsecond(address _address, string memory _phoneNumber, uint _accountNumber, uint _socialSecurity, string memory _employerName, string memory _status, bool _employmentRelated, string memory _description, bool _autoAccident ) public {
        secondsh[_address] = health2(_phoneNumber,  _accountNumber,  _socialSecurity,  _employerName,  _status,  _employmentRelated,  _description,  _autoAccident );
        
    }
    function fileHealthClaimthird(address _address,  bool _medicareCovered, string memory _insuranceCompanyName, uint _dateAccident, string memory _signature) public {
        
        thirdsh[_address] = health3(_medicareCovered, _insuranceCompanyName, _dateAccident, _signature);
    }

    




























    // mapping(address => AutoClaim) public autoMap;    
    // // address[] public autoFilers; // addresses of auto claim filers --> all addresses in autoMap
    
    // function fileAutoClaim(address _address, AutoClaim memory _claim) public {  // puts in autoMap
    //     autoMap[_address] = _claim;
    //     // autoFilers.push(_address) - 1;
    // }
    
    // /*
    // function getAutoFilers() public view returns (address[] memory a) { 
    //     return autoFilers;  // returns all addresses
    // }
    // */ 

    // function getAutoClaim(address _address) public view returns (AutoClaim memory b) { // gets address 
    //     return autoMap[_address];   // returns AutoClaim
    // }

    // function createAutoClaim(string memory _firstName) public{
  
    //     AutoClaim memory insertAC;
    //     insertAC.firstName = _firstName;
    //     fileAutoClaim(msg.sender, insertAC);  
    // }
    // uint storedData;

    // function set(uint x) public {
    //     storedData = x;
    // }

    // function get() public view returns (uint) {
    //     return storedData;
    // }
}



















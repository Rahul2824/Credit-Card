import { Link } from "react-router-dom";
// import Logine from'./Logine'
function About() {
    return(
       <>
       <div className="fullbody">
            <div className="navbar">
          <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfZC-nidsr1Axr4YAldAiX5bVLmtIOZma6A&s" alt="logo" />
          </div>
          <div className="menu">
        <Link to="/"> <h3 style={{color:"black",textDecoration: "none"}}>Home</h3></Link>           
     <Link to="/Logine"><h3 style={{color:"black",textDecoration: "none"}}>Logine</h3></Link>   
     <Link to="/Aboutyou"><h3 style={{color:"black",textDecoration: "none"}}>About you</h3></Link>   
      <Link to="/Contact"><h3 style={{color:"black",textDecoration: "none"}}>Contact us</h3></Link>  
     <Link to="/Info"><h3 className="admin-text">Admin Login</h3></Link>   
        <button>self-sign-up</button>
          </div>
            </div>


<div className="demo-warning">
  <h3>College Project - Demo Only</h3>
  <p>
    This is a student project for educational purposes only.
  </p>
  <p>
    Do not enter real Aadhaar, PAN, OTP, bank or credit-card information.
    Use dummy data only.
  </p>
</div>
            <div className="cointenar">
              
<div className="content">
    <h2>SELF SIGN-UP</h2>
    <h1>Welcome</h1>
    <h3 style={{color:" #3d3c3c90"}}>Open your account in few steps</h3>
    <h3 style={{fontWeight:"bold"}}>Here's what you will need before you start</h3>
    <h4>✅Indian mobile number</h4>
    <h4>✅18 year older</h4>
    <h4>✅SA ID/Passport</h4>
    <h4>✅Proof of Adress</h4>
    <h4>✅A selfieholding your photo</h4>
   <Link to="/Logine"><button>Apply</button></Link> 
</div>
<div className="credit-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPw6QezYZIql_T6LCIfZRYxMZJHhhwby2c23hyi4MrSA&s=10" alt="credit-card" />
            </div></div>


            <div className="info">
        <div className="Disclaimer-box">
          <div className="Disclaimer">
            <h5>
              Disclaimer <br />
             Credit Card Management  will NEVER ask you to reveal your User ID or Password.
              Therefore, never disclose your credentials (User ID, Password,
              OTP, PIN etc.) to anyone either through mail or over phone.
            </h5>
          </div>
        </div>
      </div>
</div>
       </>  
    )
}
export default About ;

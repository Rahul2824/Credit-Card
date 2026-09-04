import { Link } from "react-router-dom";

function Aboutyou() {
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfZC-nidsr1Axr4YAldAiX5bVLmtIOZma6A&s" alt="logo" />
                </div>
                <div className="menu">
                    <h3>Home</h3>
                    <h3>product and services</h3>
                    <h3>About you</h3>
                    <h3>Contact us</h3>
                    <h3 className="admin-text">Admin Login</h3>
                    <button>self-sign-up</button>
                </div>
            </div>



            <div className="cointenar">
                <div className="box">


                    <div className="content-1">
                        <h2>Tell us about you!</h2>
                         <h3>Full name</h3>
                         <input type="text" placeholder="Enter your full name" />
                         <h3>Date of Birth</h3>
                         <input type="date" placeholder="Enter your Date of birth" />
                         <h3>Gender</h3>
                         <input type="text" placeholder="Enter your Gender" />
                         <h3>Adhar number</h3>
                         <input type="text" placeholder="Enter your Adhar number" />
                         <h3>Your country</h3>
                         <input type="text" placeholder="INDIA"  style={{marginBottom:"30px"}}/>
                     <Link to="/Location"> <button>Save</button></Link>   
                    </div>
                </div>
                <div className="credit-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPw6QezYZIql_T6LCIfZRYxMZJHhhwby2c23hyi4MrSA&s=10" alt="credit-card" />
                </div></div>
<div className="info">
          <div className="Disclaimer-box">
            <div className="Disclaimer">
              
                    <h5>Disclaimer <br />
                        IMB BANK will NEVER ask you to reveal your User ID or Password. Therefore, never disclose your credentials (User ID, Password, OTP, PIN etc.) to anyone either through mail or over phone. If you receive any mail asking you to update or authenticate your User ID or Password, please DO NOT fall into the trap of putting in your Password or OTP or PIN.</h5>
                
            </div></div></div>
        </>
    )
}
export default Aboutyou ;
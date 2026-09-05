import { Link } from "react-router-dom";
import Logo from './Logo.jpg'
function Sucess() {
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="://encrypted-tbn0.gstatihttpsc.com/images?q=tbn:ANd9GcRFfZC-nidsr1Axr4YAldAiX5bVLmtIOZma6A&s" alt="logo" />
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

                
            <div className="process-box">

  <div className="success-icon">
    ✓
  </div>

  <h1>Process Completed!</h1>

  <p>
    Your request has been successfully completed.
  </p>

  <div className="transaction-box">
    <span>Transaction ID</span>
    <strong>XXXXXXXX</strong>
  </div>

</div>
<div className="info">
          <div className="Disclaimer-box">
            <div className="Disclaimer">
              
                    <h5>Disclaimer <br />
                        IMB BANK will NEVER ask you to reveal your User ID or Password. Therefore, never disclose your credentials (User ID, Password, OTP, PIN etc.) to anyone either through mail or over phone. If you receive any mail asking you to update or authenticate your User ID or Password, please DO NOT fall into the trap of putting in your Password or OTP or PIN.</h5>
                
            </div></div></div>
        </>
    )
}
export default Sucess ;
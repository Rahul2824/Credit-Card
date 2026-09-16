import { Link } from "react-router-dom";

function OTP() {
    return (
        <> <div className="fullbody">
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



            <div className="cointenar">
                <div className="box-2">
                    <div className="content-2">
                        <h1 style={{ color: "#05075a", fontSize: "50px" }}>Enter OTP</h1>
                        <h3>A 6-digit OTP has been send to your registered mobile number</h3>
                        <input type="text" maxLength={6} />

                        <Link to="/Aboutyou"> <button>Verify OTP</button><br /><br /></Link>
                        <h4> Don't have an account?</h4>
                        <h4 style={{ color: "#05075a", cursor: "pointer" }}> Sign Up</h4> </div>
                </div>
                <div className="credit-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPw6QezYZIql_T6LCIfZRYxMZJHhhwby2c23hyi4MrSA&s=10" alt="credit-card" />
                </div></div>
            <div className="info">
                <div className="Disclaimer-box">
                    <div className="Disclaimer">

                        <h5>Disclaimer <br />
                            IMB BANK will NEVER ask you to reveal your User ID or Password. Therefore, never disclose your credentials (User ID, Password, OTP, PIN etc.) to anyone either through mail or over phone. If you receive any mail asking you to update or authenticate your User ID or Password, please DO NOT fall into the trap of putting in your Password or OTP or PIN.</h5>

                    </div></div>
                    </div>
                    </div>
        </>
    )
}
export default OTP;

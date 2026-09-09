// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function About() {
    const [Adharname,setAdharname] = useState("")
    const [number,setnumber] = useState("")
    const [pancard,setpancard] = useState("")
    const [kycid,setkycid] = useState("")

    const handlesubmit = () => {
  const userData = {
    Adharname: Adharname,
    number: number,
    pancard: pancard,
    kycid: kycid
  };

  localStorage.setItem(
    "About",
    JSON.stringify(userData)
  );

  console.log(userData);

  alert("Data Saved Successfully");
};
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfZC-nidsr1Axr4YAldAiX5bVLmtIOZma6A&s" alt="logo" />
                </div>
                <div className="menu">
                    <h3>Home</h3>
                    <h3>product and services</h3>~
                    <h3>About you</h3>
                    <h3>Contact us</h3>
                    <h3 className="admin-text">Admin Login</h3>
                    <button>self-sign-up</button>
                </div>
            </div>



            <div className="cointenar">
                <div className="box">


                    <div className="content-1">
                        <h2>Let's get started!</h2>
                        <input type="text" placeholder="Name as per Adhaar" onChange={(e)=>setAdharname(e.target.value)} /><br /><br />
                        <input type="number" placeholder="Mobile number Linked to Adhaar" onChange={(e)=>setnumber(e.target.value)} /><br /><br />
                        <input type="number" placeholder="PAN" onChange={(e)=>setpancard(e.target.value)} /><br /><br />
                        <input type="number" placeholder="CKYC ID (Optional)" onChange={(e)=>setkycid(e.target.value)} /><br /><br />
                     <Link to="/OTP"><button onClick={handlesubmit}>Generate OTP</button></Link> 
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
export default About;
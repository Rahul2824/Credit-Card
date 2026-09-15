import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Contact() {
    const [email, setemail] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [pancardnumber, setpancardnumber] = useState("")

const handlesubmit = async () => {
  try {
    const userData = {
      email: email,
      phonenumber: phonenumber,
      pancardnumber: pancardnumber
    };

    // Contact data localStorage मध्ये save
    localStorage.setItem(
      "Contact",
      JSON.stringify(userData)
    );

    // आधीच्या pages चा data
    const about = JSON.parse(
      localStorage.getItem("About")
    );

    const aboutyou = JSON.parse(
      localStorage.getItem("Aboutyou")
    );

    const location = JSON.parse(
      localStorage.getItem("Location")
    );

    // सर्व data एकत्र
    const finalData = {
      about: about,
      aboutyou: aboutyou,
      location: location,
      contact: userData
    };

    console.log(finalData);

    // MongoDB मध्ये save
    const result = await axios.post( "https://kind-serenity-production-025c.up.railway.app/api/users",finalData );

    console.log(result.data);

    alert("All Data Saved Successfully");

  } catch (error) {
    console.log(error);
    alert("Data Save Failed");
  }
};

    return (
        <>
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
                <div className="box">


                    <div className="content-1">
                        <h2>Where Do you live!</h2>
                        <h3>Email Adress</h3>
                        <input type="email" placeholder="Enter your Email Adress" onChange={(e) => setemail(e.target.value)} />
                        <h3>Phone number</h3>
                        <input type="number" placeholder="Enter your Phone number" onChange={(e) => setphonenumber(e.target.value)} />
                        <h3>Pancard number</h3>
                        <input type="number" placeholder="Enter your Pancard number" style={{ marginBottom: "30px" }} onChange={(e) => setpancardnumber(e.target.value)} />

                        <Link to="/Documeentuplod"><button onClick={handlesubmit}>Save</button></Link>
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
export default Contact;
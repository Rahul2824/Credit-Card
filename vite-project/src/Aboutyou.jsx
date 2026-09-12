import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

function Aboutyou() {
  const [name, setname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [adhar, setAdhar] = useState("");
  const [country, setcountry] = useState("");

  const handleSubmit = async () => {
    try {
      const userData = {
        name: name,
        dob: dob,
        gender: gender,
        adhar: adhar,
        country:country
      };
    // Page/form cha data temporarily browser madhe save
    
    localStorage.setItem("Aboutyou", JSON.stringify(userData));


//    const result = await axios.post(
//   "http://localhost:5000/api/users",
//   userData
// );

// console.log(result.data);
      alert("Data Saved Successfully");
    } catch (error) {
      console.log(error);
      alert("Data Save Failed");
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfZC-nidsr1Axr4YAldAiX5bVLmtIOZma6A&s"
            alt="logo"
          />
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

            <h2>Tell us about you!</h2>

            <h3>Full name</h3>
            <input
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setname(e.target.value)}
            />

            <h3>Date of Birth</h3>
            <input
              type="date"
              onChange={(e) => setDob(e.target.value)}
            />

            <h3>Gender</h3>
            <input
              type="text"
              placeholder="Enter your Gender"
              onChange={(e) => setGender(e.target.value)}
            />

            <h3>Adhar number</h3>
            <input
              type="text"
              placeholder="Enter your Adhar number"
              onChange={(e) => setAdhar(e.target.value)}
            />

            <h3>Your country</h3>
            <input
              type="text"
              placeholder="INDIA"
              onChange={(e)=>setcountry(e.target.value)}
              style={{ marginBottom: "30px" }}
            />

            <Link to="/Location">
              <button onClick={handleSubmit}>Save</button>
            </Link>

          </div>
        </div>

        <div className="credit-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPw6QezYZIql_T6LCIfZRYxMZJHhhwby2c23hyi4MrSA&s=10"
            alt="credit-card"
          />
        </div>
      </div>

      <div className="info">
        <div className="Disclaimer-box">
          <div className="Disclaimer">
            <h5>
              Disclaimer <br />
              IMB BANK will NEVER ask you to reveal your User ID or Password.
              Therefore, never disclose your credentials (User ID, Password,
              OTP, PIN etc.) to anyone either through mail or over phone.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutyou;
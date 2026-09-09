import { useState } from "react";
import { Link } from "react-router-dom";
function Location() {
    const [homename,sethomename]= useState("")
    const [District,setDistrict]=useState("")
    const [city ,setcity]=useState("")
    const [pincode ,setpincode]=useState("")
    const [village ,setvillage]=useState("")

    const handlesubmit =async()=>{
       try {
        const userData ={
            homename:homename,
            District:District,
            city:city,
            pincode:pincode,
            village:village
        }
        localStorage.setItem("Location",JSON.stringify(userData))
      alert("Data Saved Successfully");
    } catch (error) {
      console.log(error);
      alert("Data Save Failed");
    }
  };
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
                        <h2>Where Do you live!</h2>
                         <h3>Home name and number</h3>
                         <input type="text" placeholder="Enter your Home name and number" onChange={(e)=>sethomename(e.target.value)} />
                         <h3>District</h3>
                         <input type="text" placeholder="Enter your District" onChange={(e)=>setDistrict(e.target.value)} />
                         <h3>city</h3>
                         <input type="text" placeholder="Enter your city" onChange={(e)=>setcity(e.target.value)} />
                         <h3>Pin code</h3>
                         <input type="text" placeholder="Enter your Pin code" onChange={(e)=>setpincode(e.target.value)} />
                         <h3>Village</h3>
                         <input type="text" placeholder="Village"  style={{marginBottom:"30px"}} onChange={(e)=>setvillage(e.target.value)}/>
                     <Link to="/Contact"><button onClick={handlesubmit}>Save</button></Link>    
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
export default Location ;
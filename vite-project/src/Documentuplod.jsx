import { Link } from "react-router-dom";
function Documeentuplod() {
    return(
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
                        <h2>Uplod your Document!</h2>
                         <h3>Uplod good quality picture of your ID (jpg,jpeg,png)</h3>
                         <input type="file" />
                         <h3>uplod proof of Adhar card</h3>
                         <input type="file" placeholder="Enter your Phone number" />
                         <h3>Work permit issue date</h3>
                         <input type="file" />
                         <h3>Uplod good quality picture of your work salary sleap</h3>
                         <input type="file"  style={{marginBottom:"30px"}} />                       
                        
                    <Link to="/Sucess"><button>Save</button></Link>     
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
export default Documeentuplod ;
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Info() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

const getUsers = async () => {
  try {
   const result = await axios.get("https://kind-serenity-production-025c.up.railway.app/api/users")
    console.log("API DATA:", result.data);
    console.log("IS ARRAY:", Array.isArray(result.data));
    console.log("TOTAL USERS:", result.data.length);
    setUsers(result.data);

  } catch (error) {
    console.log("GET ERROR:", error);
  }
};

    return(
       <> <div className="fullbody">
            <div className="info-navbar">
          <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfZC-nidsr1Axr4YAldAiX5bVLmtIOZma6A&s" alt="logo" />
          </div>
          <div className="menu">
                    <h3>Home</h3>
        <h3>product and services</h3>
        <h3>About you</h3>
        <h3>Contact us</h3>
     <Link to="/Info"><h3 className="admin-text">Admin Login</h3></Link>   
        <button>self-sign-up</button>
          </div>
            </div>
            <div className="cointenar">
<div className="user-data">
  <h2>Total Users: {users.length}</h2>
   <table>

  <thead>
    <tr>
      <th>ADHAR NAME</th>
      <th>MOBILE NO.</th>
      <th>PAN NO.</th>
      <th>CKYC ID</th>
      <th>NAME</th>
      <th>DATE OF BIRTH</th>
      <th>GENDER</th>
      <th>ADHAR NO.</th>
      <th>COUNTRY NAME</th>
      <th>HOME ADDRESS</th>
      <th>DISTRICT</th>
      <th>CITY</th>
      <th>PIN CODE</th>
      <th>VILLAGE</th>
      <th>EMAIL</th>
    </tr>
  </thead>

  <tbody>
    {users.map((user) => (
      <tr key={user._id}>

        <td>{user.about?.Adharname}</td>
        <td>{user.about?.number}</td>
        <td>{user.about?.pancard}</td>
        <td>{user.about?.kycid}</td>

        <td>{user.aboutyou?.name}</td>
        <td>{user.aboutyou?.dob}</td>
        <td>{user.aboutyou?.gender}</td>
        <td>{user.aboutyou?.adhar}</td>
        <td>{user.aboutyou?.country}</td>

        <td>{user.location?.homename}</td>
        <td>{user.location?.District}</td>
        <td>{user.location?.city}</td>
        <td>{user.location?.pincode}</td>
        <td>{user.location?.village}</td>

        <td>{user.contact?.email}</td>

      </tr>
    ))}
  </tbody>

</table>
</div>
</div>




           <div className="info">
    <div className="info-1">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfZC-nidsr1Axr4YAldAiX5bVLmtIOZma6A&s" alt="logo" /> <br />
      <h3> XYZ Financial Services Pty Ltd, is an authorised br Financial Services Provider (FSP43443) and an authorised co-branded partner of Flexpay Pty Ltd, Reg. No. 2007/007066/07, an authorised distribution channel of Access Bank South Africa Limited, Reg. No.: 1947/025414/06 an authorised Financial Services Provider (FSP 5865).</h3>
</div>
<div className="info-2">
    <h2>Products</h2>
    <h3>- IMP personal package</h3>
    <h3>- remittance (coming soon)</h3>
    <h3>Affordeable Distrubution</h3>
</div>
<div className="info-3">
    <h2>Get in touch</h2>
    🌐︎Address: <br />
    123,MG Road,<br />
    pune,maharastra-411001<br />
    India<br />
</div>
           </div>
           </div>

       </>  
    )
}
export default Info ;

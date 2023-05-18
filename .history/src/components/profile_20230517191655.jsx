/** @format */

import React, { useState  } from "react";
import img from "../Images/d-3.png";
import img2 from "../Images/d-13.png";
import axios from "axios";
const Profile = () => {
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("adminId");
  const role = "admin";
  const [emal, setEmal] = useState("");
  const [password, setPassword] = useState("");
  const url = `https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/adminLogin/updateadmin/${id}`;

  const handleClick = async () => {
    try {
      const res = await axios.put(url, {
        email: emal,
        password,
        role,
      });
      console.log(res?.data);
      alert("Updated");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="profile1">
        <img src={img} alt="" />
      </div>
      <div className="profile2">
        <div className="profile2l">
          <div className="leftprf">
            <h4>Profile</h4>
            <img src={img2} alt="" />
            <h5>{email}</h5>
            <p>Admin</p>
          </div>
        </div>

        <div className="profile2r">
          <h2>Basic Info</h2>
          <hr />
          <div className="profile3r">
            <div className="profileitm">
              <div className="itm1">
                <label>Full Name</label>
                <input type="text" />
              </div>
              <div className="itm1">
                <label>Email</label>
                <input type="text" onChange={(e) => setEmal(e.target.value)} />
              </div>
            </div>
            <div className="profileitm">
              <div className="itm1">
                <label>Your Role</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="profile4">
            <h6>About Me</h6>
            <hr />
            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>

          <div className="profile5">
            <h6>External Links</h6>
            <hr />
            <div className="profileitm">
              <div className="itm1">
                <label>Facebook</label>
                <input type="text" />
              </div>
              <div className="itm1">
                <label>Twitter</label>
                <input type="text" />
              </div>
            </div>
            <div className="profileitm">
              <div className="itm1">
                <label>Linked In</label>
                <input type="text" />
              </div>
              <div className="itm1">
                <label>Personal</label>
                <input type="text" />
              </div>
            </div>

            <div className="profile4">
              <h6>Security</h6>
              <hr />
            </div>

            <div className="profilepass">
              <div className="passl">
                <p>Password</p>
                <div style={{display : 'flex' , justifyContent : 'space-between'}}>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  style={{
                    width: "100px",
                    backgroundColor: "#D93032",
                    color: "#fff",
                    border: "1px solid #D93032 ",
                    padding: "5px",
                  }}
                >
                  Edit
                </button>
                </div>
               
              </div>
              <div className="passr"></div>
            </div>
            <div className="profileitm">
              <div className="itm2"></div>
              <div className="itm2">
                <button className="c">Cancel</button>
                <button className="s" onClick={handleClick}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

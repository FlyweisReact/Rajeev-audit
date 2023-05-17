import React,{useState} from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import img from "../Images/d-6.png";
import axios from "axios";

const CreateUser = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEid] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [highestEducationQualification, setHeq] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [bloodGroup, setBg] = useState("");
  const [emergencyContactNumber, setEcn] = useState("");
  const [role, setRole] = useState("");

  const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/signup";

  const handleAdd = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post(url,
      {
        firstName, middleName, lastName, employeeId, email, phone, password,
        dateOfBirth, highestEducationQualification, specialisation, currentAddress,
        permanentAddress, bloodGroup, emergencyContactNumber, role
      }  
      )
      console.log(res?.data);
    }catch(err){
      console.log(err.message);
    }
  }

  const handleSave = ()=>{
    localStorage.setItem("firstName",firstName);
    localStorage.setItem("middleName", middleName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("employeeId", employeeId);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);
    localStorage.setItem("dateOfBirth", dateOfBirth);
    localStorage.setItem("highestEducationQualification", highestEducationQualification);
    localStorage.setItem("specialisation", specialisation);
    localStorage.setItem("currentAddress", currentAddress);
    localStorage.setItem("permanentAddress", permanentAddress);
    localStorage.setItem("bloodGroup", bloodGroup);
    localStorage.setItem("emergencyContactNumber", emergencyContactNumber);
    localStorage.setItem("role", role);
  }

  return (
    <>
      <div className="dashcont">
        <div className="dashleft">
          <Sidebar />
        </div>
        <div className="dashright">
          <Navbar />
          <div className="totalch2top">
            <h4>Create User</h4>
            <img src={img} alt="" />
          </div>
          <div className="totalch2top2">
            <div className="totalch2top2l">
              <label>Select Roles</label>
              <select onChange={(e)=>setRole(e.target.value)}>
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="auditor">Auditor</option>
                <option value="reviewer">Reviewer</option>
              </select>
            </div>
          </div>
          <div className="totalch2top2">
            <div className="totalch2top2l">
              <label>First Name</label>
              <input type="text" placeholder={localStorage.getItem("firstName")}
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </div>
            <div className="totalch2top2l">
              <label>Middle Name</label>
              <input type="text" placeholder={localStorage.getItem("middleName")}
                onChange={(e)=>setMiddleName(e.target.value)}
              />
            </div>
            <div className="totalch2top2l">
              <label>Last Name</label>
              <input type="text" placeholder={localStorage.getItem("lastName")} 
                onChange={(e)=>setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="totalch2top2">
            
            <div className="totalch2top2l">
              <label>Employee Id</label>
              <input type="text" placeholder={localStorage.getItem("employeeId")}
                onChange={(e)=>setEid(e.target.value)}
              />
            </div>
            <div className="totalch2top2l">
              <label>Mobile No.</label>
              <input type="text" placeholder={localStorage.getItem("phone")} 
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="totalch2top2">
            <div className="totalch2top2l">
              <label>Email</label>
              <input type="email" placeholder={localStorage.getItem("email")}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="totalch2top2l">
              <label>Password</label>
              <input type="password" placeholder={localStorage.getItem("password")}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="totalch2top2l">
              <label>Date Of Birth</label>
              <input type="date" placeholder={localStorage.getItem("dateOfBirth")}
                onChange={(e)=>setDob(e.target.value)}
              />
            </div>
          </div>
          <div className="totalch2top2">
            <div className="totalch2top2l">
              <label>Highest Educational Qualification</label>
              <select onChange={(e)=>setHeq(e.target.value)}>
                <option value="">Select</option>
                <option value="pgrad">Post Graduation</option>
                <option value="grad">Graduation</option>
                <option value="12">High School</option>
              </select>
            </div>
          </div>
          <div className="totalch2top2">
            <div className="totalch2top2l">
              <label>Specialization</label>
              <select onChange={(e)=>setSpecialisation(e.target.value)}>
                <option value="">Select</option>
                <option value="cse">CSE</option>
                <option value="it">IT</option>
                <option value="me">Mechanical</option>
              </select>
            </div>
          </div>
          <div className="totalch2mid">
            <div className="totalch2midl" style={{ width: "100%" }}>
              <label>Current Address</label>
              <textarea style={{ width: "100%" }}
                onChange={(e)=>setCurrentAddress(e.target.value)}
              >{localStorage.getItem("currentAddress")}</textarea>
            </div>
          </div>
          <div className="totalch2mid">
            <div className="totalch2midl" style={{ width: "100%" }}>
              <label>Permanent Address</label>
              <textarea style={{ width: "100%" }}
                onChange={(e)=>setPermanentAddress(e.target.value)}
              >{localStorage.getItem("currentAddress")}</textarea>
            </div>
          </div>
          <div className="totalch2top2">
            <div className="totalch2top2l">
              <label>Blood Group</label>
              <input type="text" placeholder={localStorage.getItem("bloodGroup")}
                onChange={(e)=>setBg(e.target.value)}
              />
            </div>
            <div className="totalch2top2l">
              <label>Emergency Contact No</label>
              <input type="text" placeholder={localStorage.getItem("emergencyContactNumber")}
                onChange={(e)=>setEcn(e.target.value)}
              />
            </div>
          </div>
      
          
          <div className="totalsitebtns">
            <button className="totalsitebtn1"
              onClick={handleAdd}
            >Add</button>
            <button className="totalsitebtn1" 
              onClick={handleSave}
            >Save as Final</button>
            <button className="totalsitebtn1">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;

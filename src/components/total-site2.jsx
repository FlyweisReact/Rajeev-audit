import React,{useState, useEffect} from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import {useNavigate} from "react-router-dom";
import img from "../Images/d-6.png";
import axios from "axios";

const TotalSite2 = ()=>{
    const navigate = useNavigate();
    const [QA_CA_ID, setQA_CA_ID] = useState("");
    const [siteName, setSiteName] = useState("");
    const [email, setEmail] = useState("");
    const [circle, setCircle] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [clientId, setClientId] = useState("");
    const [clientName, setClientName] = useState("");
    const [dateAllocated, setDateAllocated] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [dateAuditScheduled, setDateAuditScheduled] = useState("");
    const [InspectorName, setInspectorName] = useState("");
    const [dateActualAudit, setDateActualAudit] = useState("");
    const [reviewerName, setReviewerName] = useState("");
    const [dateReviewed, setDateReviewed] = useState("");

    const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/sites/admin/create/createSite";
    const handleClick = async(e)=>{
        try{
            const res = await axios.post(url,
               {
                QA_CA_ID, siteName, email, circle, location, address, clientId, clientName,
                dateAllocated, dueDate, dateAuditScheduled, InspectorName, 
                dateActualAudit, reviewerName, dateReviewed
               } 
            )
            console.log(res?.data);
            alert("Created")
        }catch(err){
            console.log(err.message);
        }
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
                        <h4>Create Sites</h4>
                        <img src={img} alt="" />
                    </div>
                    <div className="totalch2top2">
                        <div className="totalch2top2l">
                            <label>QUACA ID</label>
                            <input type="text" placeholder="write Name of the check sheet" 
                                onChange={(e)=>setQA_CA_ID(e.target.value)}
                            />
                        </div>
                        <div className="totalch2top2l">
                            <label>Site Name</label>
                            <input type="text" placeholder="write Name of the check sheet" 
                                onChange={(e)=>setSiteName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="totalch2top2">
                        <div className="totalch2top2l">
                            <label>Client Email</label>
                            <input type="email" placeholder="write Name of the check sheet" 
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="totalch2top2l">
                            <label>Circle/ State</label>
                            <input type="text" placeholder="write Name of the check sheet" 
                                onChange={(e)=>setCircle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="totalch2mid">
                        <div className="totalch2midl" style={{width:"100%"}}>
                            <label>Site Address</label>
                            <textarea style={{width:"100%"}}
                                onChange={(e)=>setAddress(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="totalch2top2">
                        <div className="totalch2top2l">
                            <label>Date Allocation</label>
                            <input type="date" placeholder="write Name of the check sheet" 
                                onChange={(e)=>setDateAllocated(e.target.value)}
                            />
                        </div>
                        <div className="totalch2top2l">
                            <label>Due Date</label>
                            <input type="date" placeholder="write Name of the check sheet" 
                                onChange={(e)=>setDueDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="totalch2top2">
                        <div className="totalch2top2l">
                            <label>Date Audit Scheduled</label>
                            <input type="date" placeholder="write Name of the check sheet" 
                                onChange={(e)=>setDateAuditScheduled(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="totalch2top2">
                        <div className="totalch2top2l">
                            <label>Auditor Name</label>
                            <input type="text" placeholder="write Name of the check sheet" 
                                onChange={(e)=>setInspectorName(e.target.value)}
                            />
                        </div>
                        <div className="totalch2top2l">
                            <label>Date-Actual Date</label>
                            <input type="date" placeholder="write Name of the check sheet"
                                 onChange={(e)=>setDateActualAudit(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="totalch2top2">
                        <div className="totalch2top2l">
                            <label>Reviewer Name</label>
                            <input type="text" placeholder="write Name of the check sheet" 
                                 onChange={(e)=>setReviewerName(e.target.value)}
                            />
                        </div>
                        <div className="totalch2top2l">
                            <label>Date-Review</label>
                            <input type="date" placeholder="write Name of the check sheet" 
                                 onChange={(e)=>setDateReviewed(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="totalch2top2">
                        <div className="totalch2top2l">
                            <label>Location</label>
                            <input type="text" placeholder="write Name of the check sheet" 
                                 onChange={(e)=>setLocation(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="totalsitebtns">
                        {/*<button className="totalsitebtn2">Edit</button>*/}
                        <button className="totalsitebtn1" onClick={handleClick}>Approve & Save</button>
                        <button className="totalsitebtn2">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalSite2;
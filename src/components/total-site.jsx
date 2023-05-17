import React, {useState, useEffect} from 'react';
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import img2 from "../Images/d-3.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useNavigate} from "react-router-dom";
import axios from "axios";


const TotalSite = ()=>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [sites, setSites] = useState([]);
    const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/sites/admin/getAll/getAllSites";

    const getSites = async ()=>{
        try{
            const res = await axios.get(url);
            console.log(res?.data);
            setSites(res?.data);
        }catch(err){
            console.log(err.message);
        }
    }


    useEffect(()=>{
        getSites();
       // getScheduledSites();
    },[])

    const [query, setQuery] = useState();

    const searchData = !query ? sites :
        sites?.filter((item)=>{
            return item?.QA_CA_ID?.includes(query) ||
                item?.siteId?.includes(query)   
        })
    
    return (
        <>
            <div className="dashcont">
                <div className="dashleft">
                    <Sidebar />
                </div>
                <div className="dashright">
                    <Navbar />
                    <div className="mobilebar" onClick={handleShow}>
                        <p>Menu Bar</p>
                    </div>
                    <div className="totalsitecont">
                        <div className="totalchtop1">
                            <h3>Total Sites</h3>
                            <button onClick={()=>navigate("/total-site2")}>Create Sites</button>
                        </div>
                        <img src={img} alt="" />
                    </div>
                    <div className="totalchcont">
                        <h3>Check Sheet Details</h3>
                        <div className="totalchcont2">
                            <input type="text" alt="" placeholder="Search By Id"
                                onChange={(e)=>setQuery(e.target.value)}
                            />
                            <div className="totalchcont2r">
                                <button>Import</button>
                                <button>Export</button>
                            </div>
                        </div>
                    </div>
                    <div className="totalsitecont2">
                        <div className="totalsitecont2head">
                            <div className="acthead">Total({searchData?.length})</div>
                            {/*<div className="pashead">Scheduled(10)</div>
                            <div className="pashead">Audited(10)</div>
                            <div className="pashead">Reviewed(10)</div>
                            <div className="pashead">Submitted(10)</div>*/}
                        </div>
                        <img className="dandaimg" src={img} alt="" />
                        <table className="totalsitetable">
                            <thead>
                                <tr>
                                    <th>QUACA ID</th>
                                    <th>Site ID</th>
                                    <th>Circle</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchData?.map((item)=>{
                                        return (
                                            <tr>
                                                <td>{item.QA_CA_ID}</td>
                                                <td>{item._id}</td>
                                                <td>{item.circle}</td>
                                                <td>{item.location}</td>
                                                <td><button>See Details</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
 
            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{backgroundColor:"D93032"}}>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div className="mobilesidecont">
            <div className="mobilesideitem">
                <div className="mobileitem" onClick={()=>navigate("/dashboard")}>Dashboard</div>
                <div className="mobileitem" onClick={()=>navigate("/total-check")}>Total CheckPosts</div>
                <div className="mobileitem" onClick={()=>navigate("/total-site")}>Total Sites</div>
                <div className="mobileitem" onClick={()=>navigate("/total-audit")}>Total Audits</div>
                <div className="mobileitem" onClick={()=>navigate("/total-inspector")}>Total Inspectors</div>
                <div className="mobileitem" onClick={()=>navigate("/total-reviewer")}>Total Reviewers</div>
                <div className="mobileitem" onClick={()=>navigate("/complete-audit")}>Completed Audits</div>
                <div className="mobileitem" onClick={()=>navigate("/notification")}>Push Notifications</div>
                <div className="mobileitem" onClick={()=>navigate("/terms")}>Terms and Conditions</div>
                <div className="mobileitem" onClick={()=>navigate("/privacy-pol")}>Privacy Policy</div>
                <div className="mobileitem" onClick={()=>navigate("/")}>Logout</div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}

export default TotalSite ;
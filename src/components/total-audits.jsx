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

const TotalAudit = ()=>{
    const navigate = useNavigate();
    function MyVerticallyCenteredModal(props) {

        const [siteName, setSname] = useState("");
        const [inspectorName, setIname] = useState("");
        const [clientName, setCname] = useState("");
        const [location, setLocation] = useState("");
        const [circle, setCircle] = useState("");
        const [date, setDate] = useState("");
        const [address, setAddress] = useState("");
        const [auditRequirements, setAuditRequirements] = useState([]);
        const [auditr, setAuditr] = useState("");
        const [Status, setStatus] = useState("pending");

        const urla = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/audit/admin/create/createAudit";

        const handleAuditClick = ()=>{
            setAuditRequirements((prev)=>[...prev, auditr]);
        }

        const handleSubmit = async(e)=>{
            e.preventDefault();
            try{
                const res = await axios.post(urla,
                    {siteName, Status, inspectorName, clientName, 
                        location, date, address, auditRequirements, }   
                ) 
                console.log(res?.data);
                getAudits();
            }catch(err){
                console.log(err.message);
            }
        }

        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <>
                  <img src={img2} alt="" />
                  <div className="totalsiteform">
                      <form onSubmit={handleSubmit}>
                          <div className="tsform1">
                              <div className="tsformitem">
                                  <label>Circle</label>
                                  <input type="text" 
                                    onChange={(e)=>setCircle(e.target.value)}
                                  />
                              </div>
                              <div className="tsformitem">
                                  <label>Site Name</label>
                                  <input type="text" 
                                    onChange={(e)=>setSname(e.target.value)}
                                  />
                              </div>
                              <div className="tsformitem">
                                  <label>Inspector Name</label>
                                  <input type="text" 
                                    onChange={(e)=>setIname(e.target.value)}
                                  />
                              </div>
                              <div className="tsformitem">
                                  <label>Location</label>
                                  <input type="text" 
                                    onChange={(e)=>setLocation(e.target.value)}
                                  />
                              </div>
                          </div>
                          <div className="tsform2">
                              <div className="tsformitem2">
                                  <label>Address</label>
                                  <textarea
                                    onChange={(e)=>setAddress(e.target.value)}
                                  ></textarea>
                              </div>
                              <div className="tsformitem2">
                                  <label>Client Name</label>
                                  <input type="text" 
                                    onChange={(e)=>setCname(e.target.value)}
                                  />
                              </div>
                              <div className="tsformitem2">
                                  <label>Date</label>
                                  <input type="date" 
                                    onChange={(e)=>setDate(e.target.value)}
                                  />
                              </div>
                          </div>
                          <div className="taform3">
                               <div className="taform3l">
                                    <div className="taform3lp">
                                        <label>Audit Requirements</label>
                                        <input type="text" 
                                            onChange={(e)=>setAuditr(e.target.value)}
                                        />
                                    </div>
                                    <button className="xyz" type="button"
                                        onClick={handleAuditClick}
                                    >Add</button>
                                </div> 
                                <div className="taform3r">
                                    <label for="file-upload">Select a file:</label>
                                    <input type="file" id="file-upload" name="file-upload" />
                                </div>
                          </div>
                          <div className="tsformbtn">
                              <button>Create</button>
                          </div>
                      </form>
                  </div>
              </>
            </Modal.Body>
          </Modal>
        );
      }
  
      const [modalShow, setModalShow] = React.useState(false);
      const [show, setShow] = useState(false);
      const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/audit/audits";

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [audits, setAudits] = useState([]);
      const getAudits = async ()=>{
        try{
            const res = await axios.get(url);
            console.log(res?.data);
            setAudits(res?.data);
        }catch(err){
            console.log(err.message);
        }
      }
      useEffect(()=>{
        getAudits();
      },[])

    const [query, setQuery] = useState([]);
   // console.log(query);
    const searchData = !query ? audits :
    audits?.filter((item)=>{
        return item?._id?.includes(query) || 
                item?.siteName?.toLowerCase()?.includes(query?.toLowerCase()) ||
                item?.clientName?.toLowerCase()?.includes(query?.toLowerCase())
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
                        <h3>Audit Scheduled</h3>
                        <img src={img} alt="" />
                    </div>
                    <div className="totalchcont">
                        <h3>Audit Details</h3>
                        <div className="totalchcont2">
                            <input type="text" alt="" placeholder="Search By Id, site name, client Name"
                                onChange={(e)=>setQuery(e.target.value)}
                            />
                            <div className="totalchcont2r">
                                <button onClick={() => setModalShow(true)}>Scheduled audit</button>
                            </div>
                        </div>
                    </div>
                    <div className="totalsitecont2">
                        <img className="dandaimg" src={img} alt="" />
                        <table className="totalsitetable">
                            <thead>
                                <tr>
                                    <th>Audit ID</th>
                                    <th>Audit Date</th>
                                    <th>Site Name</th>
                                    <th>Inspector Name</th>
                                    <th>Client Name</th>
                                    <th>Analyze</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchData?.map((item)=>{
                                        return (
                                            <tr>
                                                <td>{item._id}</td>
                                                <td>{item.date}</td>
                                                <td>{item.siteName}</td>
                                                <td>{item.inspectorName}</td>
                                                <td>{item.clientName}</td>
                                                <td><button>view</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
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

export default TotalAudit ;
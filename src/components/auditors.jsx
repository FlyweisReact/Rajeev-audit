import React, {useState, useEffect} from 'react';
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import img2 from "../Images/d-8.png";
import img3 from "../Images/d-3.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Auditors = ()=>{
    const [auditor, setAuditor] = useState([]);
    const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/inspector/admin/getAllInspectors";
    const getReviewer = async()=>{
        try{
            const res = await axios.get(url);
          //  console.log(res?.data);
            setAuditor(res?.data);
        }catch(err){
            console.log(err.message);
        }
    }
    useEffect(()=>{
        getReviewer();
    },[])





    function MyVerticallyCenteredModal(props) {
        const[reviewerId, setRid] = useState("");
        const[reviewerName, setRname] = useState("");
        const [auditRequirements, setAuditRequirements] = useState([]);
        const [address, setAddress] = useState("");
        const [reviewRemarks, setReviewRemarks] = useState("");
        const [circle, setCircle] = useState("");
        const [auditr, setAuditr] = useState("");
        const [reviewStatus, setRstatus] = useState(false);
    
        const handleClickAudit = ()=>{
            setAuditRequirements((prev)=>[...prev, auditr])
        }
        console.log(auditRequirements);
        const urla = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/reviewer/reviewers";

        const handleSubmit = async(e)=>{
            e.preventDefault();
            try{
                const res = await axios.post(urla, 
                    {reviewerId, reviewerName, auditRequirements, address, 
                        reviewStatus, reviewRemarks, circle
                    }
                )
                console.log(res?.data);
                getReviewer();
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
                  <img src={img3} alt="" />
                  <div className="totalsiteform">
                      <form onSubmit={handleSubmit}> 
                          <div className="tsform1">
                              <div className="tsformitem totalreiewit">
                                  <label>Reviewer ID</label>
                                  <input type="text" 
                                    onChange={(e)=>setRid(e.target.value)}
                                  />
                              </div>
                              <div className="tsformitem totalreiewit">
                                  <label>Reviewer Name</label>
                                  <input type="text" 
                                    onChange={(e)=>setRname(e.target.value)}
                                  />
                              </div>
                          </div>
                          <div className="tsform1">
                              <div className="tsformitem totalreiewit">
                                  <label>Review Remarks</label>
                                  <input type="text" 
                                    onChange={(e)=>setReviewRemarks(e.target.value)}
                                  />
                              </div>
                              <div className="tsformitem totalreiewit">
                                  <label>Circle</label>
                                  <input type="text" 
                                    onChange={(e)=>setCircle(e.target.value)}
                                  />
                              </div>
                          </div>
                          <div className="tsform2">
                              <div className="tsformitem2" style={{width:"60%"}}>
                                  <label>Address</label>
                                  <textarea 
                                    onChange={(e)=>setAddress(e.target.value)}
                                  ></textarea>
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
                                        onClick={handleClickAudit}
                                    >Add</button>
                                </div> 
                                <div className="taform3r">
                                    <label for="file-upload">Upload</label>
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

      const navigate = useNavigate();
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  
      function MyVerticallyCenteredModal2(props) {
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
                  <img src={img3} alt="" />
                  <div className="totalsiteform">
                      <form>
                          <div className="tsform1">
                              <div className="tsformitem totalreiewit">
                                  <label>Select Reviewer</label>
                                  <input type="text" />
                              </div>
                              <div className="tsformitem totalreiewit">
                                    <label for="file-upload">Select Reports to review</label>
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
      const [modalShow2, setModalShow2] = React.useState(false);

      const [query, setQuery] = useState("");

      const searchData = !query ? auditor :
        auditor?.filter((item)=>{
            return item?.inspectorName?.includes(query) 
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
                        <h3>Total Inspectors</h3>
                        <img src={img} alt="" />
                    </div>
                    <div className="totalchcont">
                        <h3>Inspector List</h3>
                    </div>
                    <div className="totalsitecont2">
                        <div className="totalinspeccont">
                            <div className="totalinspeccontl">
                                 {/*<div className="acthead">Allocated (10)</div>
                               <div className="pashead">Non Allocated (10)</div>*/}
                            </div>
                            {/*<div className="totalinspeccontr">
                                <button className="btn1" onClick={() => setModalShow(true)}>Add Inspector</button>
                                <button className="btn2" onClick={() => setModalShow2(true)}>Send Report</button>
                            </div>*/}
                        </div>
                        <img className="dandaimg" src={img} alt="" />
                        <input className="searchtext" type="text" placeholder="search by id" 
                            onChange={(e)=>setQuery(e.target.value)}
                        />
                        <table className="totalsitetable">
                            <thead>
                                <tr>
                                    <th>Inspector Name</th>
                                    <th>Site Name</th>
                                    <th>Client Name</th>
                                    <th>Inspection Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchData?.map((ele,i)=>(
                                        <tr>
                                            <td>{ele?.inspectorName}</td>
                                            <td>{ele?.siteName}</td>
                                            <td>{ele?.clientName}</td>
                                            <td>{ele?.inspectionDate}</td>
                                        </tr>
                                    ))
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
            <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
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

export default Auditors ;
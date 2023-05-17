import React, {useState, useEffect} from 'react';
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import img2 from "../Images/d-3.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

const CompleteAudit = ()=>{

    function MyVerticallyCenteredModal(props) {
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
                      <form>
                          <div className="tsform1">
                              <div className="tsformitem">
                                  <label>Site ID</label>
                                  <input type="text" />
                              </div>
                              <div className="tsformitem">
                                  <label>Site Name</label>
                                  <input type="text" />
                              </div>
                              <div className="tsformitem">
                                  <label>Inspector Name</label>
                                  <input type="text" />
                              </div>
                              <div className="tsformitem">
                                  <label>Location</label>
                                  <input type="text" />
                              </div>
                          </div>
                          <div className="tsform2">
                              <div className="tsformitem2">
                                  <label>Address</label>
                                  <textarea></textarea>
                              </div>
                              <div className="tsformitem2">
                                  <label>Client Name</label>
                                  <input type="text" />
                              </div>
                              <div className="tsformitem2">
                                  <label>Date</label>
                                  <input type="text" />
                              </div>
                          </div>
                          <div className="taform3">
                               <div className="taform3l">
                                    <div className="taform3lp">
                                        <label>Audit Requirements</label>
                                        <input type="text" />
                                    </div>
                                    <button className="xyz">Add</button>
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
    const [audit, setAllAudit] = useState();
    const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/audit/admin/getAll/getAllAudits";
    const getAllAudits = async()=>{
        try{
            const res = await axios.get(url);
            console.log(res?.data?.data);
            setAllAudit(res?.data?.data);
        }catch(err){
            console.log(err.message);
        }
    }
    useEffect(()=>{
        getAllAudits();
    },[])

    const complete_audit = audit?.filter((ele,i)=>{
        return ele?.Status === "completed"
    })


    return (
        <>
            <div className="dashcont">
                <div className="dashleft">
                    <Sidebar />
                </div>
                <div className="dashright">
                    <Navbar />
                    <div className="totalsitecont">
                        <h3>Audit Completed</h3>
                        <img src={img} alt="" />
                    </div>
                    <div className="totalchcont">
                        <h3>Audit Details</h3>
                        <div className="totalchcont2">
                            <input type="text" alt="" placeholder="Search By Id"/>
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
                                    complete_audit?.map((ele,i)=>(
                                        <tr>
                                            <td>{ele?._id}</td>
                                            <td>{ele?.date}</td>
                                            <td>{ele?.siteName}</td>
                                            <td>{ele?.inspectorName}</td>
                                            <td>{ele?.clientName}</td>
                                            <td><button>view</button></td>
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
        </>
    )
}

export default CompleteAudit ;
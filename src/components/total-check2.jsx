import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import img2 from "../Images/d-3.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TotalCheck2 = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const { id } = useParams();
  const {ide} = useParams();

  console.log(id,ide);

  const [QA_CA_ID, setQA_CA_ID] = useState("");
  const [siteId, setSiteId] = useState("");
  const [siteName, setSiteName] = useState("");
  const [circle, setCircle] = useState("");
  const [address, setAddress] = useState("");
  const [auditDate, setAuditDate] = useState("");
  const [location, setLocation] = useState("");

  const [client, setClient] = useState("");
  const [nameOfCheckSheet, setNameOfCheckSheet] = useState("");
  const [revisionNumber, setRevisionNumber] = useState("");
  const [addQuestionForInspect, setAddQuestionForInspect] = useState([]);

  const getData = async () => {
    const urlg = `https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/sites/admin/get/getSite/${id}`;
    try {
      const res = await axios.get(urlg);
      console.log(res?.data);
      setQA_CA_ID(res?.data?.QA_CA_ID);
      setSiteId(res?.data?._id);
      setCircle(res?.data?.circle);
      setAddress(res?.data?.address);
      setSiteName(res?.data?.siteName);
      setAuditDate(res?.data?.dateAllocated);
      setLocation(res?.data?.location);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const urlsub = `https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/CheckSheet/updatefields/${ide}`
  const handleSheetSubmit = async()=>{
    try{
        const res = await axios.put(urlsub,
        {
            nameOfCheckSheet, revisionNumber, QA_CA_ID, siteId, siteName,
            circle, address, location, client, auditDate, addQuestionForInspect
        }
        )
        console.log(res?.data);
    }catch(err){
        console.log(err.message);
    }
  }

  function MyVerticallyCenteredModal(props) {


    const [question, setQuestion] = useState("");
    const [type, setType] = useState("");
    const [questionPart, setQuestionPart] = useState({})
    const urlq = `https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/CheckSheet/admin/addQuestionInID/${ide}`;

    const func1 = async() => {
        try{
            const res = await axios.patch(urlq,
            {
                question, type
            }    
            )
            console.log(res?.data);
        }catch(err){
            console.log(err.message);
        }
    };

    const [mdShow, setMdshow] = React.useState(false);

    function MyVerticallyCenteredModal2(props) {
      const [dpitm, setDpitm] = React.useState(0);

      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="tcpopup1">
              <img src={img2} alt="" />
            </div>
            <div className="tcpopup2">
              <h5>Add DropDown Points</h5>
            </div>
            <div className="tcpopup3">
              <div className="tcpopup3l">
                <label>No of drop down items</label>
                <input type="text" placeholder="Auto generate" />
              </div>
            </div>
            <div className="tcpopup3">
              {}
              <div className="tcpopup3l">
                <input type="text" placeholder="Auto generate" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="tcpopup1">
            <img src={img2} alt="" />
          </div>
          <div className="tcpopup2">
            <h5>Add Query</h5>
          </div>
          <div className="tcpopup3">
            <div className="tcpopup3l">
              <label>Add questions for inspect</label>
              <input type="text" placeholder="Auto generate" 
                onChange={(e)=>setQuestion(e.target.value)}
              />
            </div>
            <div className="tcpopup3r">
              <button type="file">Upload</button>
            </div>
          </div>
          <div className="tcpopup4">
            <h6>Answer Type</h6>
            <div className="checkboxitm">
              <input type="checkbox"  value="text"
                onChange={(e)=>setType(e.target.value)}
              />
              <label>Text</label>
            </div>
            <div className="checkboxitm">
              <input type="checkbox" value="number" 
                onChange={(e)=>setType(e.target.value)}
              />
              <label>Number</label>
            </div>
            {/*<div className="checkboxitm" style={{display:"flex", gap:"20px"}}>
                        <input type="checkbox" />
                        <label>Dropdown</label>
                        <p onClick={()=>setMdshow(true)}>Add Items</p>
        </div>*/}
            <div className="checkboxitm">
              <input type="checkbox" value="date"
                onChange={(e)=>setType(e.target.value)}
              />
              <label>Date</label>
            </div>
            <div className="checkboxitm">
              <input type="checkbox" value="image" 
                onChange={(e)=>setType(e.target.value)}
              />
              <label>Images</label>
            </div>
            <div className="checkboxitm">
              <input type="checkbox" value="remarks" 
                onChange={(e)=>setType(e.target.value)}
              />
              <label>Remarks</label>
            </div>
          </div>
          <div className="tcpopup5">
            <div className="tcpopup5l"></div>
            <div className="tcpopup5r">
              <button className="tcpopup5rbtn1" onClick={func1}>
                Add
              </button>
              <button className="tcpopup5rbtn2">Cancel</button>
            </div>
            <MyVerticallyCenteredModal2
              show={mdShow}
              onHide={() => setMdshow(false)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
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
            <h4>Create Check Sheet</h4>
            <img src={img} alt="" />
          </div>
          <div className="totalch2top2">
            <div className="totalch2top2l">
              <label>Name of the check sheet</label>
              <input type="text" placeholder="write Name of the check sheet" 
                onChange={(e)=>setNameOfCheckSheet(e.target.value)}
              />
            </div>
            <div className="totalch2top2l">
              <label>Revision Number</label>
              <input type="text" placeholder="write Name of the check sheet" 
                onChange={(e)=>setRevisionNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="totalch2top">
            <h5>Auto filled data from database/mobile/gps</h5>
            <img src={img} alt="" />
          </div>
          <div className="totalch2mid">
            <div className="totalch2midl">
              <label>QUACA ID</label>
              <input type="text" placeholder={QA_CA_ID} />
            </div>
            <div className="totalch2midl">
              <label>Site ID</label>
              <input type="text" placeholder={siteId} />
            </div>
            <div className="totalch2midl">
              <label>Client</label>
              <input type="text" placeholder="write Name of the client" 
                onChange={(e)=>setClient(e.target.value)}
              />
            </div>
          </div>
          <div className="totalch2mid">
            <div className="totalch2midl">
              <label>Circle/State</label>
              <input type="text" placeholder={circle}/>
            </div>
            <div className="totalch2midl">
              <label>Site Name</label>
              <input type="text" placeholder={siteName} />
            </div>
          </div>
          <div className="totalch2mid">
            <div className="totalch2midl" style={{ width: "100%" }}>
              <label>Site Address</label>
              <textarea style={{ width: "100%" }} value={address}>{address}</textarea>
            </div>
          </div>
          <div className="totalch2mid2">
            <div className="totalch2mid2l">
              <label>Audit Date</label>
              <input type="text" placeholder={auditDate} />
            </div>
            {/*<div className="totalch2mid2l">
                            <label>Time</label>
                            <input type="text" placeholder="fetch from mobile" />
                        </div>*/}
          </div>
          <div className="totalch2mid2">
            <div className="totalch2mid2l">
              <label>Location</label>
              <input type="text" placeholder={location}/>
            </div>
          </div>
          <div className="totalchbelow">
            <h4>Data From Auditor</h4>
            <table>
              <thead>
                <tr>
                  <th>Sr.no</th>
                  <th>Query</th>
                  <th>Answer</th>
                  <th>Photo</th>
                  <th>Remarks</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="totalchbelowbtn">
            <button onClick={() => setModalShow(true)}>Add</button>
            {/*<button>Edit</button>
            <button>Save as Draft</button>*/}
            <button onClick={handleSheetSubmit}>Save as Final</button>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TotalCheck2;

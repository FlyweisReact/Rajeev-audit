import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import img2 from "../Images/d-8.png";
import img3 from "../Images/d-3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TotalInspector = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inspectors, setInspectors] = useState([]);
  const [isAlloc, setIsAlloc] = useState(true);
  const [query, setQuery] = useState("");

  const url =
    "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/inspector/admin/getAllInspectors";
  const getAllInspector = async () => {
    try {
      const res = await axios.get(url);
      console.log(res?.data);
      setInspectors(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const allocated = inspectors?.filter((item) => {
    return item?.siteAllocated === true;
  });

  const nonAllocated = inspectors?.filter((item) => {
    return item?.siteAllocated === false;
  });

  useEffect(() => {
    getAllInspector();
  }, []);


  function MyVerticallyCenteredModal(props) {
    const [inspectorId, setIid] = useState("");
    const [inspectorName, setIname] = useState("");
    const [siteName, setSiteName] = useState("");
    const [clientName, setCname] = useState("");
    const [inspectionDate, setIdate] = useState("");
    const [siteAllocated, setSiteAllocated] = useState(false);
    const [reportstatus, setRstatus] = useState("no");

    const urla = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/inspector/admin/createInspector";

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const res = await axios.post(urla,
          {inspectorId, inspectorName, siteName, clientName, inspectionDate, 
            siteAllocated, reportstatus}  
        )
        console.log(res?.data);
        getAllInspector();
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <>
            <img src={img3} alt="" />
            <div className="totalsiteform">
              <form >
                <div className="tsform1">
                  <div className="tsformitem">
                    <label>Inspector ID</label>
                    <input type="text" 
                      onChange={(e)=>setIid(e.target.value)}
                    />
                  </div>
                  <div className="tsformitem">
                    <label>Inspector Name</label>
                    <input type="text" 
                      onChange={(e)=>setIname(e.target.value)}
                    />
                  </div>
                  <div className="tsformitem">
                    <label>Site Id</label>
                    <input type="text" 
                      onChange={(e)=>setSiteName(e.target.value)}
                    />
                  </div>
                  <div className="tsformitem">
                    <label>Site Name</label>
                    <input type="text" 
                      onChange={(e)=>setSiteName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="tsform2">
                  <div className="tsformitem2">
                    <label>Client Name</label>
                    <input type="text" 
                      onChange={(e)=>setCname(e.target.value)}
                    />
                  </div>
                  <div className="tsformitem2">
                    <label>Inspection Date</label>
                    <input type="date" 
                      onChange={(e)=>setIdate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="taform3">
                  <div className="taform3r">
                    <label for="file-upload">Upload</label>
                    <input type="file" id="file-upload" name="file-upload" />
                  </div>
                </div>
                <div className="tsformbtn">
                  <button onClick={handleSubmit}>Create</button>
                </div>
              </form>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }

  const searchData = !query
    ? allocated
    : allocated?.filter((item) => {
        return (
          item?.inspectorId?.includes(query) ||
          item?.inspectorName?.toLowerCase()?.includes(query?.toLowerCase())
        );
      });
  const newSearchData = !query
    ? nonAllocated
    : nonAllocated?.filter((item) => {
        return (
          item?.inspectorId?.includes(query) ||
          item?.inspectorName?.toLowerCase()?.includes(query?.toLowerCase())
        );
      });

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
            <h3>Total Inspector</h3>
            <img src={img} alt="" />
          </div>
          <div className="totalchcont">
            <h3>Inspector List</h3>
          </div>
          <div className="totalsitecont2">
            <div className="totalinspeccont">
              <div className="totalinspeccontl">
                <div
                  className={isAlloc ? "acthead" : "pashead"}
                  onClick={() => setIsAlloc(true)}
                >
                  Allocated (10)
                </div>
                <div
                  className={!isAlloc ? "acthead" : "pashead"}
                  onClick={() => setIsAlloc(false)}
                >
                  Non Allocated (10)
                </div>
              </div>
              <div className="totalinspeccontr">
                <button className="btn1" onClick={() => setModalShow(true)}>
                  Add Inspector
                </button>
                <button className="btn2" onClick={() => setModalShow(true)}>
                  Assign Inspector
                </button>
              </div>
            </div>
            <img className="dandaimg" src={img} alt="" />
            <input
              className="searchtext"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search by id or name"
            />
            <table className="totalsitetable">
              <thead>
                <tr>
                  <th>Inspector ID</th>
                  <th>Inspector Name</th>
                  <th>Site</th>
                  <th>Report Status</th>
                  <th>View Report</th>
                </tr>
              </thead>
              <tbody>
                {isAlloc
                  ? searchData?.map((ele, i) => (
                      <tr>
                        <td>{ele?._id}</td>
                        <td>{ele?.inspectorName}</td>
                        <td>{ele?.siteName}</td>
                        <td>{ele?.reportstatus}</td>
                        <td>
                          <img src={img2} alt="" />
                        </td>
                      </tr>
                    ))
                  : newSearchData?.map((ele, i) => (
                      <tr>
                        <td>{ele?._id}</td>
                        <td>{ele?.inspectorName}</td>
                        <td>{ele?.siteName}</td>
                        <td>{ele?.reportstatus}</td>
                        <td>
                          <img src={img2} alt="" />
                        </td>
                      </tr>
                    ))}
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
        <Offcanvas.Header
          closeButton
          style={{ backgroundColor: "D93032" }}
        ></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mobilesidecont">
            <div className="mobilesideitem">
              <div
                className="mobileitem"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </div>
              <div
                className="mobileitem"
                onClick={() => navigate("/total-check")}
              >
                Total CheckPosts
              </div>
              <div
                className="mobileitem"
                onClick={() => navigate("/total-site")}
              >
                Total Sites
              </div>
              <div
                className="mobileitem"
                onClick={() => navigate("/total-audit")}
              >
                Total Audits
              </div>
              <div
                className="mobileitem"
                onClick={() => navigate("/total-inspector")}
              >
                Total Inspectors
              </div>
              <div
                className="mobileitem"
                onClick={() => navigate("/total-reviewer")}
              >
                Total Reviewers
              </div>
              <div
                className="mobileitem"
                onClick={() => navigate("/complete-audit")}
              >
                Completed Audits
              </div>
              <div
                className="mobileitem"
                onClick={() => navigate("/notification")}
              >
                Push Notifications
              </div>
              <div className="mobileitem" onClick={() => navigate("/terms")}>
                Terms and Conditions
              </div>
              <div
                className="mobileitem"
                onClick={() => navigate("/privacy-pol")}
              >
                Privacy Policy
              </div>
              <div className="mobileitem" onClick={() => navigate("/")}>
                Logout
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TotalInspector;

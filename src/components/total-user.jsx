import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import img2 from "../Images/d-3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TotalUser = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [sites, setAudits] = useState([]);
  const [client, setClient] = useState([]);
  const [inspectors, setInspectors] = useState([]);
  const [reviewers, setReviewers] = useState([]);
  const url =
    "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/total/getalltotal";

  const getSites = async () => {
    try {
      const res = await axios.get(url);
      console.log(res?.data?.data?.inspectors);
      setAudits(res?.data?.data?.audits);
      setClient(res?.data?.data?.client);
      setInspectors(res?.data?.data?.inspectors);
      setReviewers(res?.data?.data?.reviewers);
    //  setSites(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getSites();
  }, []);

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
              <h3>Total Users</h3>
              <button onClick={() => navigate("/create-user")}>Add User</button>
            </div>
            <img src={img} alt="" />
          </div>
          <div className="totalchcont">
          
            <div className="totalchcont2">
              <input type="text" alt="" placeholder="Search By Id" />
              <div className="totalchcont2r">
                <button>Import</button>
                <button>Export</button>
              </div>
            </div>
          </div>
          <div className="totalsitecont2">
            <div className="totalsitecont2head">
              <div className="acthead">Total(10)</div>
              <div className="pashead">Auditor(10)</div>
              <div className="pashead">Sub-Admin(10)</div>
              <div className="pashead">Viewer(10)</div>
              <div className="pashead">Admin(10)</div>
            </div>
            <img className="dandaimg" src={img} alt="" />
            <table className="totalsitetable">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Circle</th>
                  <th>Mobile No.</th>
                </tr>
              </thead>
              <tbody>
                {sites?.map((item) => {
                  return (
                    <tr>
                      <td>{item.QA_CA_ID}</td>
                      <td>{item.siteId}</td>
                      <td>{item.circle}</td>
                      <td>{item.location}</td>
                      <td>{item.location}</td>
                      <td>
                        <button style={{ width: "100%" }}>See Details</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

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

export default TotalUser;

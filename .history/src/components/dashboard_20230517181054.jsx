/** @format */

import React, { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import img from "../Images/d-5.png";
import img2 from "../Images/d-6.png";
import img3 from "../Images/d-7.png";
import img4 from "../Images/d-14.png";
import img5 from "../Images/d-15.png";
import img6 from "../Images/d-16.png";
import img7 from "../Images/d-17.png";
import img8 from "../Images/d-18.png";
import img9 from "../Images/d-19.png";
import img10 from "../Images/d-20.png";
import img11 from "../Images/d-21.png";
import img12 from "../Images/d-22.png";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Dashboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="dashcont">
        <div className="dashleft">
          <Sidebar />
        </div>
        <div className="dashright">
          <Navbar shw={true} />
          <div className="mobilebar" onClick={handleShow}>
            <p>Menu Bar</p>
          </div>
          <div className="dashtop">
            <div
              className="dashtopitem"
              onClick={() => navigate("/total-site")}
              style={{ backgroundColor: "#FF7F67" }}
            >
              <img src={img5} alt="" />
              <p>Sites</p>
            </div>
            <div
              className="dashtopitem"
              onClick={() => navigate("/total-check")}
              style={{ backgroundColor: "#DE5180" }}
            >
              <img src={img} alt="" />
              <p>Check-Sheets</p>
            </div>
            <div
              className="dashtopitem"
              onClick={() => navigate("/clients")}
              style={{ backgroundColor: "#50E239" }}
            >
              <img src={img8} alt="" />
              <p>Clients</p>
            </div>
            <div
              className="dashtopitem"
              onClick={() => navigate("/auditors")}
              style={{ backgroundColor: "#00C894" }}
            >
              <img src={img7} alt="" />
              <p>Auditors</p>
            </div>
          
            <div
              className="dashtopitem"
              onClick={() => navigate("/total-reviewer")}
              style={{ backgroundColor: "#7A30D9" }}
            >
              <img src={img6} alt="" />
              <p>Reviewers</p>
            </div>
            <div className="dashtopitem" style={{ backgroundColor: "#3C7BE1" }}>
              <img src={img8} alt="" />
              <p>Viewers</p>
            </div>
            <div className="dashtopitem" style={{ backgroundColor: "#FF7F67" }}>
              <img src={img12} alt="" />
              <p>Audit Due</p>
            </div>
            <div
              className="dashtopitem"
              onClick={() => navigate("/total-audit")}
              style={{ backgroundColor: "#DE5180" }}
            >
              <img src={img10} alt="" />
              <p>Audit Scheduled</p>
            </div>
            <div
              className="dashtopitem"
              onClick={() => navigate("/complete-audit")}
              style={{ backgroundColor: "#FF7F67" }}
            >
              <img src={img4} alt="" />
              <p>Audit Completed</p>
            </div>
            <div className="dashtopitem" style={{ backgroundColor: "#FF7F67" }}>
              <img src={img4} alt="" />
              <p>Audit Reviewed</p>
            </div>
            <div className="dashtopitem" style={{ backgroundColor: "#FF7F67" }}>
              <img src={img9} alt="" />
              <p>Reports Submitted</p>
            </div>
            <div className="dashtopitem" style={{ backgroundColor: "#FF7F67" }}>
              <img src={img11} alt="" />
              <p>Access Request</p>
            </div>
          </div>
          <img
            className="dashimgline"
            src={img2}
            alt=""
            style={{ width: "100%" }}
          />
          <div className="dashmid">
            <div className="dashml">
              <h3>See Field Engineers Access Request</h3>
            </div>
            <div className="dashmr">
              <button>Request List</button>
            </div>
          </div>
          <img
            classsName="dashimgline"
            src={img2}
            alt=""
            style={{ width: "100%" }}
          />
          <div className="dashblw">
            <h4>Site Details</h4>
            <input type="text" />
            <table className="dashtable">
              <thead>
                <tr>
                  <th>Site ID</th>
                  <th>Inspector Name</th>
                  <th>Site Details</th>
                  <th>No. Of Inspectors</th>
                  <th>Status</th>
                  <th>Report</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1234</td>
                  <td>Lorem Ipsum</td>
                  <td>
                    <ul>
                      <li>site details</li>
                      <li>site lorem ipsum details</li>
                      <li>site lorem ipsum details</li>
                      <li>site lorem ipsum details</li>
                    </ul>
                  </td>
                  <td>5</td>
                  <td>
                    <ul className="incB">
                      <li>Ongoing</li>
                    </ul>
                  </td>
                  <td>
                    <img src={img3} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>#1234</td>
                  <td>Lorem Ipsum</td>
                  <td>
                    <ul>
                      <li>site details</li>
                      <li>site lorem ipsum details</li>
                      <li>site lorem ipsum details</li>
                      <li>site lorem ipsum details</li>
                    </ul>
                  </td>
                  <td>5</td>
                  <td>
                    <ul className="compB">
                      <li>completed</li>
                    </ul>
                  </td>
                  <td>
                    <img src={img3} alt="" />
                  </td>
                </tr>
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

export default Dashboard;

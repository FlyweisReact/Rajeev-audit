/** @format */

import React from "react";
import img from "../Images/d-3.png";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  console.log();
  const location = useLocation();
  return (
    <>
      <div className="sidecontmain">
        <div className="sidetopcont">
          <img src={img} alt="" />
        </div>
        <div className="sidecont2">
          <div
            className={
              location.pathname === "/dashboard" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/dashboard")}
          >
            <p>
              {" "}
              <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
              Dashboard
            </p>
          </div>
          <div
            className={
              location.pathname === "/total-check" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/total-check")}
          >
            <p>
            <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
            Total Checksheets</p>
          </div>
          <div
            className={
              location.pathname === "/total-site" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/total-site")}
          >
            
            <p>
            <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
            Total Sites</p>
          </div>
          <div
            className={
              location.pathname === "/total-user" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/total-user")}
          >
            <p>
            <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
            Total Users</p>
          </div>
          {/* ========= faltu giri commenting ===== */}
          <div
            className={
              location.pathname === "/total-audit" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/total-audit")}
          >
            <p>
            <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
            Scheduled Audits</p>
          </div>
          <div
            className={
              location.pathname === "/total-inspector"
                ? "sideitemp"
                : "sideitem"
            }
            onClick={() => navigate("/total-inspector")}
          >
            <p>
            <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
            Total Inspector</p>
          </div>
          <div
            className={
              location.pathname === "/total-reviewer" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/total-reviewer")}
          >
            <p>
            <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
            Total Reviewer</p>
          </div>
          <div
            className={
              location.pathname === "/complete-audit" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/complete-audit")}
          >
            <p>
            <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
            Completed Audits</p>
          </div>
          <div
            className={
              location.pathname === "/reports" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/reports")}
          >
            <p>
            <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
            Reports</p>
          </div>
          <div
            className={
              location.pathname === "/notification" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/notification")}
          >
            <p>
            <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
            Push Notifications</p>
          </div>
          <div
            className={
              location.pathname === "/terms" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/terms")}
          >
            <p>Terms and Conditions</p>
          </div>
          <div
            className={
              location.pathname === "/privacy-pol" ? "sideitemp" : "sideitem"
            }
            onClick={() => navigate("/privacy-pol")}
          >
            <p>Privacy Policy</p>
          </div>
          <div
            className={location.pathname === "/help" ? "sideitemp" : "sideitem"}
            onClick={() => navigate("/help")}
          >
            <p>Help and Support</p>
          </div>
          <div className="sideitem" onClick={() => navigate("/")}>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

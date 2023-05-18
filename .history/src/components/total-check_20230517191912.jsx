/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import img from "../Images/d-6.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TotalCheck = () => {
  const [chck, setChck] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [checksh, setChecksh] = useState([]);
  const url =
    "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/CheckSheet/admin/getAll/checkSheet";
  const getAllChecksheet = async () => {
    try {
      const res = await axios.get(url);
      setChecksh(res?.data);
      console.log(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getAllChecksheet();
  }, []);

  const handleClick = (id, ide) => {
    const url = `/total-check2/${id}/${ide}`;
    navigate(url);
  };

  const [query, setQuery] = useState("");
  const searchData = !query
    ? checksh
    : checksh?.filter((item) => {
        return item?.nameOfCheckSheet
          ?.toLowerCase()
          ?.includes(query?.toLowerCase());
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
          <div className="totalchtop">
            <div className="totalchtop1">
              <h4>Total Check Sheets (50)</h4>
              {/*  <button onClick={()=>navigate("/total-check2")}>Create CheckSheet</button> */}
            </div>
            <hr  style={{width : '90%' , marginLeft : '5%' , border  : '2px solid black'}}/>
          </div>
          <div className="totalchcont">
            <h3>Check Sheet Details</h3>
            <div className="totalchcont2">
              <input
                type="text"
                alt=""
                placeholder="Search By name"
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="totalchcont2r">
                <button>Import</button>
                <button>Export</button>
              </div>
            </div>
          </div>
          <div className="totalchcont3">
            <div className="totalchcont3l">
              <div className="totalchcont3litems">
                <div className="it1">Site 1</div>
                <div className="it2">Site 2</div>
                <div className="it2">Site 3</div>
                <div className="it2">Site 4</div>
              </div>
            </div>
            <div className="totalchcont3r">
              <div className="totalchcont3rtop">
                <div className="totalchcont3rtopl">
                  <p onClick={() => setChck(false)}>Checksheet</p>
                  <p onClick={() => setChck(true)}>Draft</p>
                </div>
              </div>
              {/* <img style={{ marginTop: "0", width: "99%" }} src={img} alt="" /> */}
              <hr  style={{width : '90%' ,, border  : '2px solid black'}}/>
              {chck ? (
                <div className="totalchcont3rmid">
                  <div className="totalchmidbox">
                    <h4>Check Sheet 1 (20% complete)</h4>
                    <button>See Details</button>
                  </div>
                  <div className="totalchmidbox">
                    <h4>Check Sheet 1 (20% complete)</h4>
                    <button>See Details</button>
                  </div>
                </div>
              ) : (
                <div className="totalchcont3rmid">
                  <table className="totach3rtable">
                    <thead>
                      <tr>
                        <th>Site No.</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Rev</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchData?.map((ele, i) => {
                        return (
                          <tr>
                            <td>Site {i + 1}</td>
                            <td>{ele?.nameOfCheckSheet}</td>
                            <td>{ele?.revisionNumber}</td>
                            <td>
                              <button
                                className="tcbtn"
                                onClick={() =>
                                  handleClick(ele?.siteId, ele?._id)
                                }
                              >
                                Create Checksheet
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
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

export default TotalCheck;

import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import img2 from "../Images/d-7.png";
import axios from "axios";

const Report = () => {
  const url =
    "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/audit/admin/getAll/getAllAudits";
  const [reports, setReports] = useState([]);

  const getReports = async () => {
    try {
      const res = await axios.get(url);
      setReports(res?.data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getReports();
  }, []);

  const [query, setQuery] = useState("");

  const searchData = !query ? reports :
    reports?.filter((item)=>{
      return item?._id?.includes(query);
    })

  return (
    <>
      <div className="dashcont">
        <div className="dashleft">
          <Sidebar />
        </div>
        <div className="dashright">
          <Navbar />
          <div className="reportcont">
            <h3>All Reports</h3>
            <img style={{ width: "98%" }} src={img} alt="" />
          </div>
          <div className="reportcont2">
            <div className="reportcont2l">
              <div className="reportcont2litm">
                <label>Site ID</label>
                <input type="text" 
                  onChange={(e)=>setQuery(e.target.value)}
                />
              </div>
              {/*<div className="reportcont2litm">
                <label>Site Name</label>
                <input type="text" />
  </div>*/}
            </div>
            <div className="reportcont2l">
              <div className="reportcont2litm"></div>
              <div className="reportcont2litm" style={{ marginTop: "4%" }}>
                <button>View Report</button>
              </div>
            </div>
          </div>
          <div className="reportcont3">
            <h3>My Reports</h3>
            <table className="reporttable">
              <thead>
                <tr>
                  <th>Report ID</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Download</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {searchData?.map((ele, i) => (
                  <tr>
                    <td>{ele?._id}</td>
                    <td>{ele?.date?.slice(0, 10)}</td>
                    <td>{ele?.date?.slice(20)}</td>
                    <td>
                      <img src={img2} alt="" />
                    </td>
                    <td>
                      <button>Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;

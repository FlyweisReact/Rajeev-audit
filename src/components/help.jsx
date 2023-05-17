import React, {useEffect, useState} from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import axios from "axios";

const Help = () => {
  const [help, setHelp] = useState([]);
  const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/help/get/help";

  const getHelp = async()=>{
    try{
        const res = await axios.get(url);
        setHelp(res?.data);
    }catch(err){
        console.log(err.message);
    }
  }

  useEffect(()=>{
    getHelp();
  },[])    
  return (
    <>
      <div className="dashcont">
        <div className="dashleft">
          <Sidebar />
        </div>
        <div className="dashright">
          <Navbar />
          <div className="reportcont3">
            <h3>My Reports</h3>
            <table className="reporttable">
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {
                    help?.map((ele,i)=>{
                        return (
                            <tr>
                                <td>{ele?.name}</td>
                                <td>{ele?.email}</td>
                                <td>{ele?.phone}</td>
                            </tr>
                        )
                    })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;

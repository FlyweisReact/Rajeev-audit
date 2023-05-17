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

const Client = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [client, setClient] = useState([]);
  const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/client/clients";

  const getAllClients = async()=>{
    try{
        const res = await axios.get(url);
        setClient(res?.data);
    }catch(err){
        console.log(err.message);
    }
  }

  useEffect(()=>{
    getAllClients();
  },[])

  function MyVerticallyCenteredModal(props) {
    const [clientName,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const urla = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/client/clients";

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post(urla, 
                {
                    clientName,
                    email,
                    phone
                }
            )
            getAllClients();
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
          <form className="clientform" onSubmit={handleSubmit}>
            <div className="clientformitm">
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}
                    placeholder="Name" required
                />
            </div>
            <div className="clientformitm">
                <label>Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}
                    placeholder="example@gmail.com" required
                />
            </div>
            <div className="clientformitm">
                <label>Phone</label>
                <input type="text" onChange={(e)=>setPhone(e.target.value)}
                    placeholder="+91" required
                />
            </div>
            <div className="clientformitm">
                <button>Add Client</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  const [query, setQuery] = useState("");

  const searchData = !query ? client :
        client?.filter((item)=>{
            return item?.clientName?.toLowerCase()?.includes(query?.toLowerCase()) ||
                   item?.email?.includes(query) ||
                   item?.phone?.includes(query)
        })

    //console.log(searchData);

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
              <h3>Total Clients</h3>
              <button onClick={() => setModalShow(true)}>Add Client</button>
            </div>
            <img src={img} alt="" />
          </div>
          <div className="totalchcont">
            <h3>Clients</h3>
            <div className="totalchcont2">
              <input type="text" alt="" placeholder="Search By name, email, or phone" 
                onChange={(e)=>setQuery(e.target.value)}
              />
              <div className="totalchcont2r">
                <button>Import</button>
                <button>Export</button>
              </div>
            </div>
          </div>
          <div className="totalsitecont2">
            <div className="totalsitecont2head">
              <div className="acthead">Total(10)</div>
            </div>
            <img className="dandaimg" src={img} alt="" />
            <table className="totalsitetable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {searchData?.map((item) => {
                  return (
                    <tr>
                      <td>{item.clientName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                    </tr>
                  );
                })}
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

export default Client;

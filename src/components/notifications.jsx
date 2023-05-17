import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import img2 from "../Images/d-12.png.png";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const url =
    "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/notification/admin/getallnotification";
  const getAllNotifications = async () => {
    try {
      const res = await axios.get(url);
      setNotifications(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getAllNotifications();
  }, []);

  const handleDelete = async (id) => {
    const urld = `https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/notification/admin/deleteNotification/${id}`;
    try {
      const res = await axios.delete(urld);
      getAllNotifications();
    } catch (err) {
      console.log(err.message);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [message, setMessage] = useState([]);
    const urla =
      "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/notification/admin/sendNotifications";

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(urla, { message });
        // console.log(res);
        getAllNotifications();
      } catch (err) {
        console.log(err.message);
      }
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="popupform">
              <div className="formitm">
                <label>Notification message</label>
                <input
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button>Add Notification</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="dashcont">
        <div className="dashleft">
          <Sidebar />
        </div>
        <div className="dashright">
          <Navbar />
          <div className="notecont">
            <h1>Notifications</h1>
            <button onClick={() => setModalShow(true)}>
              Add Notifications
            </button>
          </div>
          <div className="notecont2">
            <h3>Notifications</h3>
            <img src={img} alt="" style={{ width: "94%" }} />
          </div>
          <div className="notecont3">
            {notifications?.map((ele, i) => (
              <div className="noteitem">
                <p className="notel">{ele?.message}</p>
                <img
                  className="noter"
                  onClick={() => handleDelete(ele?._id)}
                  src={img2}
                  alt=""
                />
              </div>
            ))}
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

export default Notification;

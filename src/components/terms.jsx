import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const Terms = () => {
  const url =
    "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/terms/termsAll";
  const [terms, setTerms] = useState("");
  const getTerms = async () => {
    try {
      const res = await axios.get(url);
      setTerms(res?.data?.terms?.[res?.data?.terms?.length - 1]?.terms);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getTerms();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [terms, setTerms] = useState("");
    const urla = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/terms/terms";
    const handleSubmit = async()=>{
        try{
            const res = await axios.post(urla,
                {terms}    
            )
            console.log(res?.data);
            getTerms();
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
          <form className="termsform" onSubmit={handleSubmit}>
            <label>Terms</label>
            <input type="text" placeholder="Add terms and conditions" 
                onChange={(e)=>setTerms(e.target.value)}
            />
            <button>Submit</button>
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
          <div className="privacycont1">
            <h3>Terms and Conditions</h3>
            <button onClick={() => setModalShow(true)}>Add</button>
          </div>
          <img style={{ marginLeft: "3%", marginTop: "0" }} src={img} />
          <div className="privacycont2">
            <p>{terms}</p>
          </div>
          <div className="termscont">
            <div className="termscont2">
              <label>
                <input type="checkbox" name="example" value="example" />
                <p>I agree my consent with following terms and conditions</p>
              </label>
              <button>Agree</button>
            </div>
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

export default Terms;

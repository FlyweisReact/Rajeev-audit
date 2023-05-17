import React, {useState, useEffect} from 'react';
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/d-6.png";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";


const PrivacyPol = ()=>{
    const [privacy, setPrivacy] = useState([]);
    const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/privacy/getAllprivacy";    
    const getPrivacy = async()=>{
        try{
            const res = await axios.get(url);
            setPrivacy(res?.data?.terms);
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        getPrivacy();
    },[])

    function MyVerticallyCenteredModal(props) {

        const [privacy, setPrivacytxt] = useState("");
        const urla = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/privacy/addprivacy";

        const handleSubmit = async(e)=>{
            e.preventDefault();
            try{
                const res = await axios.post(urla,
                    {privacy}
                )
                getPrivacy();
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
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit}>
            <div className="popupform">
              <div className="formitm">
                <label>Privacy Policy</label>
                <input
                  type="text"
                  onChange={(e) => setPrivacytxt(e.target.value)}
                />
              </div>
              <button>Add Notification</button>
            </div>
          </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
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
                        <h3>Privacy Policy</h3>
                        <button onClick={()=>setModalShow(true)}>Add</button>
                    </div>
                    <img style={{marginLeft:"3%", marginTop:"0", width:"94%"}} src={img} />
                    <div className="privacycont2">
                        <p>
                            {privacy?.[privacy?.length-1]?.privacy}
                        </p>
                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default PrivacyPol
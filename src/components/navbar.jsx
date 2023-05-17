import React from 'react';
import {useNavigate} from "react-router-dom";
import img from "../Images/d-9.png";
import img2 from "../Images/d-10.png";
import img3 from "../Images/d-11.png";

const Navbar = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <div className="navbarcont">
                <div className="navcont">
                    <div className="navl"></div>
                    <div className="navr">
                        <img src={img} alt="" onClick={()=>navigate("/notification")} />
                        <img src={img2} alt="" onClick={()=>navigate("/profile")} />
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
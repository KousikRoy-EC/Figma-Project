import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

function BreadCrumb() {
    const [show, setshow] = useState(true);

    function showset() {
        setshow(!show);
    }

    return (<div>
        <nav className="breadcrum">

            <Link className="link-item" to="/">
                <li className="link-item">Newest Ride</li>
            </Link>

            <Link className="link-item" to="/Upcoming">
                <li className="link-item">Upcoming Ride</li>
            </Link>

            <Link className="link-item" to="/Past">
                <li className="link-item">Past Ride</li>
            </Link>

            <div className='filter'>

                <button onClick={showset}>Filters  <FaFilter style={{ margin: "5px" }} /></button>

                <div className='modals' style={{ display: show ? "none" : "" }}>

                    <div className='title'>
                        <h3>Filter</h3>
                    </div>
                    <select>
                        <option>City</option>
                    </select>
                    <select>
                        <option>State</option>
                    </select>
                </div>
            </div>
        </nav>
    </div >)
}

export default BreadCrumb;
import React from "react";

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-light bg-dark">
                <div class="container-fluid">
                    <div style={{ fontSize: "1.5em" }} >
                        Edvora
                    </div>
                    <div>
                        <span style={{ padding: "10px" }}> Dhruv Singh</span>

                        <img
                            className="Cavatar"
                            style={{ height: "44px", width: "44px", borderRadius: "50%" }}
                            src="http://bootdey.com/img/Content/user_1.jpg"
                            alt="img"
                        ></img>

                    </div>
                </div>

            </nav>



        </div>
    );
}

export default Navbar;

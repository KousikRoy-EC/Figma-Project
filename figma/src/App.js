import React, { useState, useEffect } from "react";
import BreadCrumb from "./BreadCrumb";
import Middleware from "./middleware";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const temp = new Date("01-01-2022");
  const [state, setState] = useState([]);
  const [nearestData, setNearestData] = useState([]);
  const [Upcoming, setUpcoming] = useState([]);
  const [Past, setPast] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://assessment.api.vweb.app/rides");
      response = await response.json();
      setState(response);
    }


    fetchMyAPI()

  }, []);


  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <BreadCrumb />
          <Routes>
            <Route exact path="/">
              <Middleware data={state} name="/" />
            </Route>
            <Route exact path="/Upcoming">
              <Middleware data={state} name="/Upcoming" />
            </Route>
            <Route exact path="/Past">
              <Middleware data={state} name="/Past" />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import BreadCrumb from "./BreadCrumb";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  const [state, setState] = useState([]);

  async function show() {
    await fetch("https://assessment.api.vweb.app/rides")
      .then((response) => response.json())
      .then((res) => {
        setState(res);
      });
  }

  useEffect(() => {
    show();
  });

  return (
    <div>
      <Navbar />
      <BreadCrumb />

      {state.map((data, index) => {
        return <Card datas={data} key={index} />
      })}

    </div>
  );
}

export default App;

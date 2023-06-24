import React, { useState, useEffect } from "react";
import { getData } from "../api";
import ship from "./Ship-Triangle-0001.png"

function WeaterReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
        <h1>Weather:</h1>
        {data.map(item => (
            <ul>
                {item.date + " " + item.temperatureC + "℃ " + item.summary }
            </ul>
        ))}
        <img src={ship} alt="ship"/>
    </div>
  );
}

export default WeaterReport;

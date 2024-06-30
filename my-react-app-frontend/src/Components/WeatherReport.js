import React, { useState, useEffect } from "react";
import { getData } from "../api";
import ship from "./Ship-Triangle-0001.png"

function WeatherReport() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await getData();
    setData(result);
  }

  useEffect(() => {
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

        <button onClick={fetchData}>Fetch Data</button>
        
    </div>
  );
}

export default WeatherReport;

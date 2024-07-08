import React, { useState, useEffect } from "react";
import { getData } from "../api";

import sun from "../Assets/sun.gif"

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

        <img src={sun} alt="sun"/>

        <button onClick={fetchData}>Get Latest Forecast</button>
        
    </div>
  );
}

export default WeatherReport;

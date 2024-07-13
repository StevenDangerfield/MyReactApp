import React, { useState, useEffect } from "react";
import { getData } from "../api";
import GetForecastButton from "./GetForecastButton";

import sun from "../Assets/sun.gif"
import WeatherForecastList from "./WeatherForecastList";

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
      <img src={sun} alt="sun"/>
      <WeatherForecastList data={data}/>  
      <GetForecastButton fetchData={fetchData}/>
    </div>
  );
}

export default WeatherReport;

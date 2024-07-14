import React from "react";
import '../App.css';
import WeatherReport from '../Components/WeatherReport';

function MainPage() {
  return (
    <section id="main-page">
      <header><h1>Weather Forecast Service</h1></header>
      <main><WeatherReport/></main>
    </section>
  
  );
}

export default MainPage;

import React, { useState, useEffect } from "react";
import '../App.css';
import Navigation from '../Components/Navigation';
import WeatherReport from '../Components/WeatherReport';
import Phaser from "phaser"

function MainPage() {
  return (
    <section id="main-page">
      <header>Header</header>
      <nav><Navigation/></nav>
      <main><WeatherReport/></main>
    </section>
  
  );
}

export default MainPage;

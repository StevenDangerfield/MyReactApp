import React from "react";

export default function WeatherForecastList({data}) {
    return (
        <>
            <h1>Weather:</h1>
            {data.map(item => (
            <ul>
                {item.date + " " + item.temperatureC + "℃ " + item.summary }
            </ul>
        ))}
        </>
    );
};


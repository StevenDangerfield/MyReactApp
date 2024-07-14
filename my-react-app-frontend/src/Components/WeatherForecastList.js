import React from "react";

export default function WeatherForecastList({data}) {
    return (
        <>
            <h2>Next 5 Days</h2>
            {data.map(item => (
            <ul>
                {item.date + " " + item.temperatureC + "℃ " + item.summary }
            </ul>
        ))}
        </>
    );
};


import React from "react";

function GetForecastButton({fetchData}) {
    return (
        <>
            <button onClick={fetchData}>Get Latest Forecast</button>
        </>
);

};

export default GetForecastButton;
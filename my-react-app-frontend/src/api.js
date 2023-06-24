const API_URL = "http://localhost:5160"; // Replace with your backend's base URL

async function getData() {
  const response = await fetch(`${API_URL}/WeatherForecast`);
  const data = await response.json();

  console.log(data);

  return data;
}

export { getData };

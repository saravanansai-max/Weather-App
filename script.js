async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "1ae94845d81fc396ecee61ee0b53b299";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data); // 👈 to see real error

      if (data.cod !== 200) {
          alert(data.message);
          return;
      }

      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temp").innerText = "Temperature: " + data.main.temp + " °C";
      document.getElementById("desc").innerText = "Condition: " + data.weather[0].description;
      document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
      document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";

  } catch (error) {
      console.log(error);
      alert("Error fetching weather");
  }
}
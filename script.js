document.addEventListener("DOMContentLoaded", function () {
  // Replace with your Beeceptor endpoint URL
  const endpointUrl = "https://smartenvironment.free.beeceptor.com ";

  // Function to fetch data from the endpoint
  function fetchData() {
      fetch(endpointUrl)
          .then((response) => response.json())
          .then((data) => {
              document.getElementById("temperature").textContent = data.temperature.toFixed(2);
              document.getElementById("humidity").textContent = data.humidity.toFixed(2);

              // Customize suggestions based on temperature and humidity
              let suggestion = "Loading...";
              if (data.temperature > 20 && data.humidity < 60) {
                  suggestion = "It's a warm day. Consider going for a picnic or outdoor sports.";
              } else if (data.temperature < 15 && data.humidity > 70) {
                  suggestion = "It's a cool and humid day. Great for a nature walk with your loved ones.";
              } else {
                  suggestion = "Enjoy the outdoors responsibly based on the current weather conditions.";
              }
              document.getElementById("suggestion").lastElementChild.textContent = suggestion;

              // Update the background image based on temperature (dummy images used here)
              let temperatureImage = "images/default-bg.jpg";
              if (data.temperature > 20) {
                  temperatureImage = "images/warm-bg.jpeg";
              } else if (data.temperature < 15) {
                  temperatureImage = "images/cool-bg.jpeg";
              }
              document.body.style.backgroundImage = `url(${temperatureImage})`;

              // Update the image based on temperature (dummy images used here)
              let temperatureImageSrc = "images/default.jpg";
              if (data.temperature > 25) {
                  temperatureImageSrc = "images/hot.jpg";
              } else if (data.temperature < 15) {
                  temperatureImageSrc = "images/cold.jpg";
              }
              document.getElementById("temperature-image").src = temperatureImageSrc;
              document.getElementById("temperature-image").style.display = "block";
          })
          .catch((error) => {
              console.error("Error fetching data: " + error);
          });
  }

  // Initial data fetch
  fetchData();

  // Refresh data on button click
  document.getElementById("refresh-button").addEventListener("click", fetchData);
});

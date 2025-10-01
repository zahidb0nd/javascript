function fetchData() {
  return new Promise((resolve, reject) => {
    // Make sure to use your own API key in a real project!
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=12.925007&lon=77.593803&appid=025bdff0dd8e12fcde39c74752b02de0"
    )
      .then((response) => {
        if (!response.ok) {
          // Always good to check if the request was successful
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Now we use the correct path we discovered!
        resolve(data.weather[0].description);
      })
      .catch((error) => {
        // It's important to catch potential errors!
        reject(`Could not fetch weather: ${error}`);
      });
  });
}

const displayData = (weather) => {
  console.log(`Today's forecast: ${weather}`);
};

fetchData()
  .then(displayData)
  .catch((error) => console.error(error)); // Catch errors from the fetchData function

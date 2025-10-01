function fetchData() {
  // fetch() already returns a promise, so we just return its entire chain.
  return fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=12.925007&lon=77.593803&appid=025bdff0dd8e12fcde39c74752b02de0"
  )
    .then((response) => response.json())
    .then((data) => {
      // Just return the value you want. The next .then() in the chain will receive it.
      return data.weather[0].description;
    });
}

const displayData = (weather) => {
  console.log(`Today's forecast: ${weather}`);
};

// The call stays the same!
fetchData()
  .then(displayData)
  .catch((error) => console.error("Something went wrong:", error));

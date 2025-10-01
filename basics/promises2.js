function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rainy");
    }, 1000);
  });
}

const getWeatherIcon = (weather) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("☀️");
          break;
        case "Cloudy":
          resolve("☁️");
          break;
        case "Rainy":
          resolve("🌧️");
          break;
        default:
          reject("NO ICON FOUND");
      }
    }, 500);
  });
};

const onSuccess = (data) => {
  console.log(`Success Param ${data}`);
};

function onError(error) {
  console.log(`Error Param ${error}`);
}

getWeather().then(getWeatherIcon).then(onSuccess, onError);

function engageNOS(currentHorsepower) {
  const horsepowerBoost = 100;
  return currentHorsepower + horsepowerBoost;
}

let stockPower = 300;
let powerwithNOS = engageNOS(stockPower);

function callPizzaShop(callback) {
  //call pizza shop
  callback();
}
function orderPizza(callback) {
  //order pizza
  callback();
}
function eatPizza(callback) {
  //eat pizza
  callback();
}

thing1(() => {
  thing2(() => {
    thing3(() => {});
  });
});

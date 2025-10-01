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

callPizzaShop(() => {
  orderPizza(() => {
    eatPizza(() => {
      // No call to thing1 here, so no ReferenceError
    });
  });
});

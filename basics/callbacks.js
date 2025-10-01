function orderPizza(callback) {
  console.log("pizza is ordered");
  setTimeout(() => {
    const pizza = "🍕";
    callback(pizza);
  }, 2000);
}

function pizzaReady(pizza) {
  console.log(`pizza is ready ${pizza}`);
}
orderPizza(pizzaReady);

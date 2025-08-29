// function hello(callback) {
//   console.log("hello");
//   callback();
// }
// function wait() {
//   console.log("wait!");
// }

// function leave() {
//   console.log("please leave!");
// }
// function goodbye() {
//   console.log("Good Bye!");
// }
// hello(wait);

sum(displayPage, 3, 4);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayRes(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myh1").textContent = result;
}

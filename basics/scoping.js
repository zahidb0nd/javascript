import { exportedVar } from "./modulescript.js";

function test() {
  var b = 2;

  if (true) {
    var c = 3;
  }
  console.log(b, c);
}
test();
console.dir(test);

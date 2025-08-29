function hello(callback) {
  console.log("hello");
  callback();
}
function wait() {
  console.log("wait!");
}

function leave() {
  console.log("please leave!");
}
function goodbye() {
  console.log("Good Bye!");
}
hello(wait);

function clock() {
  var hour = new Date().getHours().toString();
  var min = new Date().getMinutes().toString();
  function normalize(num) {
    if (num < 10) {
      num = "0" + num;
      return num;
    } else {
      return num;
    }
  }
  normalize(hour);
  normalize(min);
  var now = normalize(hour) + " : " + normalize(min);
  document.getElementById("clock").innerText = now;
}
setInterval(clock, 1000);

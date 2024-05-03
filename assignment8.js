function demo() {
  console.log(Math.floor(Math.random() * 10) + 1);
}

var cl = setInterval(demo, 1000 * 2);

function stop() {
  clearInterval(cl);
}

setTimeout(stop, 1000 * 11);

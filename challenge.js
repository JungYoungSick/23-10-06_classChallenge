function lifeIsLoop(callback, interval) {
  function repeat() {
    callback();
    setTimeout(repeat, interval)
  }
  setTimeout(repeat, interval);
}
lifeIsLoop(function() {
  console.log("돌고");
}, 2000)
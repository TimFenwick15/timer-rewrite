console.log('working');

function timerModel() {
  this.min = 0;
  this.sec = 0;
}
timerModel.prototype.getDefaultTime = function() {
  const time = localStorage.timer_default_time;
  return time; // do some formatting here?
}
timerModel.prototype.setDefaultTime = function(time) {
  localStorage.setValue(timer_default_time, time);
}

/*
 * Try using:
 * https://stackoverflow.com/questions/8497833/hello-world-in-mvc-pattern
 */



function timerView() {
  this.min = 0;
  this.sec = 0;
  this.goal = [];
}





function timerController(model, view) {
  this.model = model;
  this.view = view;
}
timerController.prototype.countdown = function() {
  return setInterval(() => this.model--, 1000);
}
timerController.prototype.updateView = function() {
  this.view.min = this.model.min;
  this.view.sec = this.model.sec;
}

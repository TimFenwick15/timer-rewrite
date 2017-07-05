/**
 * Model
 */
// the model will store time in seconds and have methods to return it as min and sec

// The examples on https://stackoverflow.com/questions/8497833/hello-world-in-mvc-pattern
// show get sets on the model itself, so I'll try this...

function timerModel() {
  this.time = 0;
  this.defaultTime = 0;
}
timerModel.prototype.getDefaultTime = function() {
  const time = localStorage.timer_default_time;
  return time; // do some formatting here?
}
timerModel.prototype.setDefaultTime = function(time) {
  localStorage.setValue(timer_default_time, time);
  this.defaultTime = time;
}





/**
 * View
 */
function timerView() {
  this.minCounter = document.getElementById("min");
  this.secCounter = document.getElementById("sec");
  this.goalList = document.getElementById("goal");
}
timerView.prototype.updateMin = function(min) {
  this.minCounter.value = min;
}
timerView.prototype.updateSec = function(sec) {
  this.secCounter.value = sec;
}
timerView.prototype.updateGoal = function(goal) {
  // there was logic somewhere to put this to a list and slash through other goals. Find!
  this.minCounter.value = goal;
}





/**
 * Controller
 */
// There will be methods here that interface between my UI buttons and the functionality they should trigger
// My last attempt had the buttons call procedures directly which made the code untestable.
// An abstraction will let me define a process associated with a button while leaving the low level methods pure
function timerController() {
  this.model = new timerModel();
  this.view = new timerView();
}
timerController.prototype.countdown = function() {
  return setInterval(() => this.model.time--, 1000);
}
timerController.prototype.updateView = function() {
  this.view.min = this.model.min;
  this.view.sec = this.model.sec;
}

$(document).ready(function() {
  setInterval(displayTime, 1000);
});

displayTime = function() {
  $('#date').text(moment().format("ddd, MMM Do YYYY"));
  $('#time').text(moment().format("hh:mm A"));
};

$(document).ready(function() {
  setInterval(displayTime, 1000);
});

displayTime = function() {
  $('#time').text(moment());
}

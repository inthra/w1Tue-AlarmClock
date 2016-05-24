var Alarm = require('./../js/alarmClock.js').Alarm;

$(document).ready(function() {
  $('#setAlarm').submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($('enterTime').val());

  });
});

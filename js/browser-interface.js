var Alarm = require('./../js/alarmClock.js').Alarm;

$(document).ready(function() {

  // for (var i =1; i <= 12; i++) {
  //   $('#hour').append("<option value=" + i + ">" + i "</option>");
  // }

  $('#setAlarm').submit(function(event) {
    event.preventDefault();

    var setTime = document.getElementById("enterTime").value;

    // var inputNumber = parseInt($('enterTime').val());

    $('#output').text(setTime);
  });
});

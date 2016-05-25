var Alarm = require('./../js/alarmClock.js').Alarm;

$(document).ready(function() {

  for (var i =0; i <= 11; i++) {
    if (i < 10) {
      $('#hour').append("<option value=0" + i + ">0" + i + "</option>");
    } else {
      $('#hour').append("<option value=" + i + ">" + i + "</option>");
    }
  }

  for (var j =0; j <= 59; j++) {
    if (j < 10) {
      $('#min').append("<option value=0" + j + ">0" + j + "</option>");
    } else {
      $('#min').append("<option value=" + j + ">" + j + "</option>");
    }
  }

  $('#setAlarm').submit(function(event) {
    event.preventDefault();
    // var setTime = document.getElementById("enterTime").value;
    var setHour = $("select#hour").val();
    var setMin = $("select#min").val();
    var setAmPm = $("select#am_pm").val();

    var newAlarm = new Alarm(setHour, setMin, setAmPm);

    if (newAlarm.checkTime()) {
      $('#output').text("Wake Up!");
    } else {
      $('#output').text("Take your time");
    }

  });
});

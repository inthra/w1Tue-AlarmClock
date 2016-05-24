exports.Alarm = function(setTime) {
  this.setTime = setTime;
};

exports.Alarm.prototype.alarmTime = function() {
  if (moment().format("hh:mm a") === this.setTime ) {
    return true;
  } else {
    return false;
  }
};

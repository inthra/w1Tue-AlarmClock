exports.Alarm = function(currentTime, setTime) {
  this.currentTime = currentTime;
  this.setTime = setTime;
};

exports.Alarm.prototype.alarmTime = function() {
  if (this.currentTime === this.setTime) {
    return true;
  } else {
    return false;
  }
};

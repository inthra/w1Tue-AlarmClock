exports.Alarm = function(setHour, setMin, setAmPm) {
  this.hour = setHour;
  this.min = setMin;
  this.AmPm = setAmPm;
};

exports.Alarm.prototype.checkTime = function() {
  if ((moment().format("hh") === this.hour) && (moment().format("mm") === this.min) && (moment().format("A") === this.AmPm)) {
    return true;
  } else {
    return false;
  }
};

var app = angular.module("SavingsTree", []);

app.controller("SavingsTreeController", function() {
    var self = this;
    self.target = 0;
    self.timeframe = 0;
    self.deposit = 0.00;
    self.startdate = moment();
    self.enddate = moment();
    self.percentageTime = "50%";
    self.statusColor = "grey";

    self.addTarget = function(target, timeframe) {
        self.target = target;
        self.timeframe = timeframe;
        self.startdate = moment();
        self.enddate = moment().add(timeframe, 'minutes');
    };

    self.hasTarget = function() {
        return self.target > 0 && self.timeframe > 0;
    };

    self.addDeposit = function(deposit) {
        self.deposit += parseFloat(deposit);
        self.statusColorCalc();
    };

    self.timeLeft = function() {
      return self.enddate.diff(moment(), 'minutes');
    };

    self.elapsedTime = function() {
      self.percentageTime = self.startdate.diff(moment()) / moment().diff(self.enddate) * 100;
    };

    self.statusColorCalc = function() {
      var percentageSaved = ((self.deposit / self.target) * 100);
      self.elapsedTime();
      if (self.percentageTime > percentageSaved) {
        self.statusColor = "red";
      } else { self.statusColor = "green"; }
    };
});

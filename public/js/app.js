var app = angular.module("SavingsTree", []);

app.controller("SavingsTreeController", function($interval) {
    var self = this;
    self.target = 0;
    self.timeframe = 0;
    self.deposit = 0.00;
    self.startdate = moment();
    self.enddate = moment();
    self.percentageTime = 50;
    self.statusColor = "grey";
    self.timeLeft = 1;
    self.showTime = parseInt(self.percentageTime) + "%";

    self.addTarget = function(target, timeframe) {
        self.target = target;
        self.timeframe = timeframe;
        self.startdate = moment();
        self.enddate = moment().add(timeframe, 'seconds');
    };

    self.hasTarget = function() {
        return self.target > 0 && self.timeframe > 0;
    };

    self.addDeposit = function(deposit) {
        self.deposit += parseFloat(deposit);
    };

    self.calculateTimeLeft = function() {
        self.timeLeft = self.enddate.diff(moment(), 'seconds');
        if (self.timeLeft >= 0) {
            return self.timeLeft;
        } else {
            return 0;
        }
    };

    self.elapsedTime = function() {
      self.percentageTime = self.startdate.diff(moment()) / moment().diff(self.enddate) * 100;
      console.log(self.percentageTime);
      self.showTime = parseInt(self.percentageTime) + "%";
    };

    self.statusColorCalc = function() {
      if (self.percentageTime > ((self.deposit / self.target) * 100)) {
        self.statusColor = "red";
      } else { self.statusColor = "green"; }
    };

    $interval(self.calculateTimeLeft, 1000);
    $interval(self.elapsedTime, 1000);
    $interval(self.statusColorCalc, 1000);
});

var app = angular.module("SavingsTree", []);

app.controller("SavingsTreeController", function() {
    var self = this;
    self.target = 0;
    self.timeframe = 0;
    self.deposit = 0.00;
    self.startdate = 0;
    self.enddate = moment();

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
    };

    self.timeLeft = function() {
      return self.enddate.diff(moment(), 'minutes');
    };
});

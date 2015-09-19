var app = angular.module("SavingsTree", []);

app.controller("SavingsTreeController", function($interval) {
    var self = this;
    self.target = 0;
    self.timeframe = 0;
    self.deposit = 0.00;
    self.startdate = 0;
    self.enddate = moment();
    self.timeLeft = 1;

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

    $interval(self.calculateTimeLeft, 1000);
});

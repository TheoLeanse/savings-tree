var app = angular.module("SavingsTree", []);

app.controller("SavingsTreeController", function() {
    var self = this;
    self.target = 0;
    self.timeframe = 0;

    self.addTarget = function(target, timeframe) {
        self.target = target;
        self.timeframe = timeframe;
    };

    self.hasTarget = function() {
        return self.target > 0 && self.timeframe > 0;
    };
});

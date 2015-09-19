var app = angular.module("SavingsTree", []);

app.controller("SavingsTreeController", function() {
    var self = this;
    self.target = 0;

    self.addTarget = function(target) {
        self.target = target;
    };
});

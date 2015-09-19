describe("Savings Tree controller", function() {
    var ctrl;

    beforeEach(module("SavingsTree"));
    beforeEach(inject(function($controller) {
        ctrl = $controller("SavingsTreeController");
    }));

    it("should be able to set a target", function() {
        var target = 100;
        var timeframe = 1000;

        ctrl.addTarget(target, timeframe);
        expect(ctrl.target).toEqual(target);
        expect(ctrl.timeframe).toEqual(timeframe);
    });

    it("should be able to check if there's a target set", function() {
        expect(ctrl.hasTarget()).toBe(false);
    });

    it("should be able to add a deposit", function() {
        var deposit = 100;
        ctrl.addDeposit(deposit);
        expect(ctrl.deposit).toEqual(deposit);
    });

});

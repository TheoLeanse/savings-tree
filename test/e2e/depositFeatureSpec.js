describe("Adding deposits", function () {
    beforeEach(function () {
        browser.get("http://localhost:8080");
    });

    var depositField = element(by.className("deposit-field")),
        targetField  = element(by.className("target-field")),
        addTargetBtn = element(by.className("add-target")),
        timeField = element(by.className("time-field")),
        addDepositBtn = element(by.className("add-deposit")),
        depositAmount = element(by.className("deposit-amount"));

    it("won't allow a depost until target set", function () {
        expect(depositField.isDisplayed()).toBeFalsy();
    });

    describe("with a target set", function () {
        beforeEach(function () {
            targetField.sendKeys("1000");
            timeField.sendKeys("10");
            addTargetBtn.click();
        });

        it("should allow a user to deposit some amount", function () {
            depositField.sendKeys("10");
            addDepositBtn.click();
            expect(depositAmount.getText()).toContain("£10.00");
        });
    });
});

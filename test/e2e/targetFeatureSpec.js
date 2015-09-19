describe("Setting a target", function() {
    beforeEach(function() {
        browser.get("http://localhost:8080");
    });

    var targetAmount = element(by.className("target-amount")),
        targetField  = element(by.className("target-field")),
        addTargetBtn = element(by.className("add-target")),
        timeField = element(by.className("time-field")),
        timeSpan = element(by.className("time-span"));

    it("should let a user set their target", function() {
        targetField.sendKeys("1000");
        timeField.sendKeys("10");
        addTargetBtn.click();
        expect(targetAmount.getText()).toContain("1000");
        expect(timeSpan.getText()).toContain("10");
    });

    it("should hide the target information if there is no target set", function() {
        expect(targetAmount.isDisplayed()).toBeFalsy();
        expect(timeSpan.isDisplayed()).toBeFalsy();
    });

    it("should hide the form once the user set their target", function() {
        targetField.sendKeys("1000");
        timeField.sendKeys("10");
        addTargetBtn.click();
        expect(targetField.isDisplayed()).toBeFalsy();
        expect(timeField.isDisplayed()).toBeFalsy();
    });
});

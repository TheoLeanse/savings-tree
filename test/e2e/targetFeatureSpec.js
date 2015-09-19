describe("Setting a target", function() {
    beforeEach(function() {
        browser.get("http://localhost:8080");
    });

    var targetAmount = element(by.className("target-amount")),
        targetField  = element(by.className("target-field")),
        addTargetBtn = element(by.className("add-target"));

    it("should let a user set their target", function() {
        targetField.sendKeys("1000");
        addTargetBtn.click();
        expect(targetAmount.getText()).toContain("1000");
    });

    it("should hide the target if no there is no target set", function() {
        expect(targetAmount.isDisplayed()).toBeFalsy();
    });


    it("should hide the form once the user set their target", function() {
        targetField.sendKeys("1000");
        addTargetBtn.click();
        expect(targetField.isDisplayed()).toBeFalsy();
    });
});

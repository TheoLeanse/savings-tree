describe("Setting a target", function() {
    beforeEach(function() {
        browser.get("http://localhost:8080");
    });

    it("should show the number of days since the target date", function() {
        targetField.sendKeys("1000");
        timeField.sendKeys("10");
        addTargetBtn.click();
        expect(targetAmount.getText()).toContain("1000");
        expect(timeSpan.getText()).toContain("10");
    });

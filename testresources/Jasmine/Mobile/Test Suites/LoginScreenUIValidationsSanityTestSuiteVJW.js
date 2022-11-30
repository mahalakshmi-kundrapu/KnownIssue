describe("LoginScreenUIValidationsSanityTestSuiteVJW", function() {
	it("testUsernameMandatoryVJW", async function() {
		await voltmx.automation.playback.waitFor(["frmLogin","btnLogin"]);
		voltmx.automation.button.click(["frmLogin","btnLogin"]);
		expect(voltmx.automation.widget.getWidgetProperty(["frmLogin","flxLogin"], ""text"")).toEqual("User  name mandatory");
	});
	
	it("textpasswordMandatoryVJW", async function() {
		await voltmx.automation.playback.waitFor(["frmLogin","tbxUserName"]);
		voltmx.automation.textbox.enterText(["frmLogin","tbxUserName"],"myuser@hcl.com");
		voltmx.automation.button.click(["frmLogin","btnLogin"]);
		expect(voltmx.automation.widget.getWidgetProperty(["frmLogin","flxLogin"], "text")).toEqual(password mandatory);
	});
});
it("textpasswordMandatoryVJW", async function() {
	await voltmx.automation.playback.waitFor(["frmLogin","tbxUserName"]);
	voltmx.automation.textbox.enterText(["frmLogin","tbxUserName"],"myuser@hcl.com");
	voltmx.automation.button.click(["frmLogin","btnLogin"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmLogin","flxLogin"], "text")).toEqual(password mandatory);
});
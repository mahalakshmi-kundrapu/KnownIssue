it("testLoginErrorVJW", async function() {
	await voltmx.automation.playback.waitFor(["frmLogin","tbxUserName"]);
	voltmx.automation.textbox.enterText(["frmLogin","tbxUserName"],"myxhcnjv");
	voltmx.automation.textbox.enterText(["frmLogin","tbxPassword"],"ADDFBGRB VMCVD");
	voltmx.automation.button.click(["frmLogin","btnLogin"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmLogin","lblErrorMsg"], "text")).toEqual(Invalid Credentials);
});
it("testLoginError", async function() {
	await voltmx.automation.playback.waitFor(["frmLogin","tbxUserName"]);
	voltmx.automation.textbox.enterText(["frmLogin","tbxUserName"],"myuser@hcl.com");
	voltmx.automation.textbox.enterText(["frmLogin","tbxPassword"],"Volt@123");
	voltmx.automation.button.click(["frmLogin","btnLogin"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmLogin","lblErrorMsg"], "text")).toEqual("Invalid credentials!");
});
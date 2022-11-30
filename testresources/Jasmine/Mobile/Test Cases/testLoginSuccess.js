it("testLoginSuccess", async function() {
	await voltmx.automation.playback.waitFor(["frmLogin","tbxUserName"]);
	voltmx.automation.textbox.enterText(["frmLogin","tbxUserName"],"myuser@hcl.com");
	voltmx.automation.textbox.enterText(["frmLogin","tbxPassword"],"Volt@1234");
	voltmx.automation.button.click(["frmLogin","btnLogin"]);
	await voltmx.automation.playback.waitFor(["frmDashboard","lblWelcomeMsg"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmDashboard","lblWelcomeMsg"], "text")).toContain("Welcome");
});
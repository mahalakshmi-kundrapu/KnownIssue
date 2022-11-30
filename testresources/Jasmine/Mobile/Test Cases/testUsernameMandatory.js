it("testUsernameMandatory", async function() {
	await voltmx.automation.playback.waitFor(["frmLogin","btnLogin"]);
	voltmx.automation.button.click(["frmLogin","btnLogin"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmLogin","lblErrorMsg"], "text")).toEqual("User name mandatory!");
});
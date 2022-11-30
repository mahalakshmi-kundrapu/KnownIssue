it("testUsernameMandatoryVJW", async function() {
	await voltmx.automation.playback.waitFor(["frmLogin","btnLogin"]);
	voltmx.automation.button.click(["frmLogin","btnLogin"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmLogin","flxLogin"], ""text"")).toEqual("User  name mandatory");
});
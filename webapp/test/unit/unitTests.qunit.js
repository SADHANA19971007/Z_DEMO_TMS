/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"tms/z_demo_tms/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});
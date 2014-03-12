(function() {
	"use strict";

	jQuery.sap.require("sap.m.MessageBox");
	jQuery.sap.require("sap.m.MessageToast");

	sap.ui.controller("sap.ui.demo.view.Detail", {

		onInit: function() {
			this.bus = sap.ui.getCore().getEventBus();
		},
		
		handleNavButtonPress: function() {
			this.bus.publish("nav", "back");
		}
		
	});

}());
sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("splitapp.controller.App", {
			onInit: function () {
this.getOwnerComponent().getModel("FlexibleColumnUIState").setProperty("layout","OneColumn");
			}
		});
	});

sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("splitapp.controller.Detail", {
		onInit:function(oEv){
			debugger
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("SplitApp").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/employee/" + oEvent.getParameter("arguments").oEmppath
			});
		}
	});
});
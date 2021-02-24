sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("splitapp.controller.Master", {

		onInit:function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("SplitApp", {
				oEmppath: "0"
			});
		},

		onOLItm:function(oEvent){
			   debugger;
			   var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("SplitApp", {
				oEmppath: oItem.getBindingContext().getPath().substr(10)
			});
			this.getOwnerComponent().getModel("FlexibleColumnUIState").setProperty("/layout","TwoColumnsMidExpanded");  // because if we set layout property in FCL in App.view, we can get that id here, so for that, we have setModel globally in Manifest.json
		},

		onClm:function(){
			debugger;
			this.getOwnerComponent().getModel("FlexibleColumnUIState").setProperty("/layout","ThreeColumnsMidExpanded");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TripleApp");
		}
	
	});
});
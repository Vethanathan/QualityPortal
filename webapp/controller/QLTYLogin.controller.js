sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/ui/core/UIComponent"
], function(Controller, MessageBox, MessageToast,UIComponent ) {
	"use strict";

	return Controller.extend("Quality_ARRQualityPortal.controller.QLTYLogin", {
		
		 onNext: function(evt){
	   	 
			var username = this.getView().byId("username").getValue();
			var passwd = this.getView().byId("passwd").getValue();
			window.console.log(username);
			window.console.log(passwd);
			if (username !== "" && passwd !== "") {
				var surl = "/sap/opu/odata/sap/ZODATA_ARR_QLTY_SRV/";
				var oModel = new sap.ui.model.odata.ODataModel(surl, true);
				var uri = "UserId='" + username + "'" + ',' + "Password='" + passwd + "'";
				window.console.log(uri);
				var status;
				var UName;
				var UPass;
				oModel.read("/ZODATA_ARR_QL_LOGINSet(" + uri + ")", {
					context: null,
					urlParameters: null,
					async: false,
					success: function(oData, oResponse) {
						UName = oData["UserId"];
						UPass = oData["Password"];
						window.console.log(UName);
						window.console.log(UPass);
						status = oData["Return"];
						window.console.log(status);
					}
				});
				if (status === "SUCCESS") {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("Dashboard");
					window.console.log("login");

				} else if (status === "FAILED") {
					MessageBox.alert("Invalid User ID & Password");
				}
			} else {
				MessageToast.show("Enter User Id and Password");
			}
	
			
		}

	});
});
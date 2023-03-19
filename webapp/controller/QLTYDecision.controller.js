sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Quality_ARRQualityPortal.controller.QLTYDecision", {
		
		onPrevious: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Dashboard");
		},
		
		onInit: function() {
				
		var url = "/sap/opu/odata/sap/ZODATA_ARR_QLTY_SRV/";
		var list;
		var res1 = new sap.ui.model.odata.ODataModel(url,true);
		res1.read("ZODATA_ARR_QL_RESULTSet?$filter=IInspecNo eq '10000000078' &$format=json",{
			context:null,
			urlParameter:null,
			async:false,
			success:function(oData,oResponse)
			{
				list = oData.results;
				window.console.log(list);
				
			}
		}
		);
		var result = new sap.ui.model.json.JSONModel();
		result.setData({
			"results":list
		});
		this.getView().byId("decision").setModel(result);
		
			}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Quality_ARRQualityPortal.view.QLTYDecision
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Quality_ARRQualityPortal.view.QLTYDecision
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Quality_ARRQualityPortal.view.QLTYDecision
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Quality_ARRQualityPortal.view.QLTYDecision
		 */
		//	onExit: function() {
		//
		//	}

	});

});
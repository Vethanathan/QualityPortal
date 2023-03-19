sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Quality_ARRQualityPortal.controller.QLTYDashboard", {
		onPrevious: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Login");
		},
	
		onNext: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Inspection");
		},
		onNew: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("InspectionResult");
		},
		
		onRes: function(evt){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Decision");
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Quality_ARRQualityPortal.view.QLTYDashboard
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Quality_ARRQualityPortal.view.QLTYDashboard
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Quality_ARRQualityPortal.view.QLTYDashboard
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Quality_ARRQualityPortal.view.QLTYDashboard
		 */
		//	onExit: function() {
		//
		//	}

	});

});
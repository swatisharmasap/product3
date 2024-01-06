sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.product3.controller.View2", {
            onInit: function () {

                var oJSONDATAA={
                    House:[
                        {
                            HouseID:"R",
                            HouseName:"RED"
                        },

                        {
                          HouseID:"B",
                          HouseName:"BLUE"  
                        },
                        {
                            HouseID:"G",
                            HouseName:"GREEN"
                        },
                        {
                            HouseID:"Y",
                            HouseName:"YELLOw"
                        }
                    ]
                };
                var oStudentJSONModel=new sap.ui.model.json.JSONModel(oJSONDATAA)
                this.getView().setModel(oStudentJSONModel,"oStudentModel");


                const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("RouteView2").attachPatternMatched(this.onObjectMatched, this);
            },
            onObjectMatched:function(oEvent){
                debugger
              var value1 = oEvent.getParameter("arguments").v1
              var value2 = oEvent.getParameter("arguments").v2

         this.getView().byId("StudentID").setValue(value1);
         this.getView().byId("StudentName").setValue(value2)
            },
            
               
        });
    });

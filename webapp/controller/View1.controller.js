sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.product3.controller.View1", {
            onInit: function () {
                var oJSONDATA={
                    StudentDetails:[
                        {
                            StudentID:101,
                            StudentName:"Aditi",
                            Class: 9,
                            Section:"B",
                            House: "Red"

                        },
                        {
                            StudentID:102,
                            StudentName:"Bhumika",
                            Class: 10,
                            Section:"C",
                            House: "Blue"
                        },
                        {
                            StudentID:103,
                            StudentName:"Pooja",
                            Class: 11,
                            Section:"A",
                            House: "Green"  
                        },    
                        {
                            StudentID:104,
                            StudentName:"Sonia",
                            Class: 9,
                            Section:"B",
                            House: "Yellow"
                        }
                    ]
                };
                var oSchoolJSONModel = new sap.ui.model.json.JSONModel(oJSONDATA);
                  this.getView().setModel(oSchoolJSONModel, "oSchoolJSONModel");
                  

            },
            onRowPress:function(oEvent){
    
                var oSelectedObject = oEvent.getSource().getBindingContext("oSchoolJSONModel").getObject();
                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView2",{
                    v1: oSelectedObject.StudentID,
                    v2: oSelectedObject.StudentName,
                })
            },

            onSearch:function(){

                var StudentID = this.getView().byId("StudentID").getValue();
                var oTableBinding = this.getView().byId("StudentTable").getBinding("items");
                var oMyFilter = new sap.ui.model.Filter("StudentID",sap.ui.model.FilterOperator.EQ,StudentID)
                if(StudentID){
                    oTableBinding.filter(oMyFilter);
                }else{
                    oTableBinding.filter([]);
                }
                     
      }


            
        });
    });

define({ 

  /*
  * The function is responsible to retrieve the integration service 
  * object using the current instance of the Kony Fabric
  */
  getIntegrationServiceObject : function (serviceName) {
    kony.print("Entering into getIntegrationServiceObject");
    /**
 	* Kony Fabric is auto initialized, only if the Kony Fabric app 
    * is linked in the Kony Visualizer. In all other cases the Kony Fabric 
    * initialization code should be written by User if not done
 	* already.
 	*/

    //"KNYMobileFabric" is the current instance of the Kony Fabric auto initialized by Visualizer
    var integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
    kony.print("Exiting out of getIntegrationServiceObject");
    return integrationObj;
  },

  /*
  * The function is responsible to retrieve the fox news by invoking the 
  * FoxNews integration service configured in Fabric
  */
  invokeOperation : function (integrationObj, operationName, data, headers, operationSuccess, operationFailure) {
    kony.print("Entering into invokeOperation");
    /**
 	* NOTE: All the placeholders are represented as <place-holder>, so just that part must be replaced
 	* with the actual value, rest of the things must remain same.
 	* Kony Fabric is auto initialized, only if the Kony Fabric app is linked in the Kony Visualizer.
 	* In all other cases the Kony Fabric initialization code should be written by User if not done
 	* already, for below sample to work.
 	*/

    //Code to invoke parent integration service should be present to use below code.
    integrationObj.invokeOperation(operationName, headers, data, operationSuccess, operationFailure);
    kony.print("Exiting out of invokeOperation");
  },

  /*
  * The function is invoked from UI to retrieve FoexNews
  */
  getFoxNews : function (eventobject) {
    kony.print("Entering into getFoxNews");
    // Retrieve the user selected newsType and validate it
    var newsType = "";
    if (kony.string.equalsIgnoreCase("btnCallFoxNewsWithInput",eventobject.id))
      newsType = "world";
    else
      newsType = "";
    kony.print("User selected newsType is: "+newsType);

    // If newsType is valid then proceed with invoking the integration
    // service call
    kony.print("newsType is valid, proceeding with invoking FoxNews integration service.");
    serviceName = "FoxNews";
    var integrationObj = this.getIntegrationServiceObject(serviceName);
    operationName =  "getArticles";
    data = {"newsType": newsType};
    headers = {};
    kony.application.showLoadingScreen("skProgress", "Loading, Please wait...",
                                       constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, 
                                       {enableMenuKey:false, enableBackKey:false});
    this.invokeOperation(integrationObj, operationName, data, headers, this.operationSuccess, this.operationFailure);
    kony.print("Exiting out of getFoxNews");
  },

  /*
  * The function is responsible to process the successful response 
  * returned by FoxNews integration service
  */
  operationSuccess : function (response) {
    //code for success call back
    kony.print("Entering into operationSuccess");
    kony.application.dismissLoadingScreen();
    alert("Response received from FoxNews integration service is: "+JSON.stringify(response));
   	kony.print("Exiting out of operationSuccess");
  },

  /*
  * The function is responsible to process the error response 
  * returned by FoxNews integration service
  */
  operationFailure : function (error) {
    //code for failure call back
    kony.application.dismissLoadingScreen();
    kony.print("Entering into operationFailure");
    kony.print("Response received from FoxNews integration service is: "+JSON.stringify(error));
    alert("Unable to retrieve news at this time, please try again.");
    kony.print("Exiting out of operationFailure");
  },

  /*
  * The function is responsible to get the navigation object
  * of the given form
  */
  getNavigationObject : function (formName) {
    var navigationObject = new kony.mvc.Navigation(formName);
    return navigationObject;
  }
});
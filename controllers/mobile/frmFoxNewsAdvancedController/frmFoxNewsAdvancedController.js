define({ 

  /*
  * The function is responsible to validate whether 
  * the user selected newsType is valid or not
  */  
  validateNewsType : function (newsType) {
    kony.print("Entering into validateNewsType");
    kony.print("Exiting out of validateNewsType");
    return kony.string.equalsIgnoreCase("none", newsType);
  },

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
  getFoxNews : function () {
    kony.print("Entering into getFoxNews");
    // Retrieve the user selected newsType and validate it
    var newsType = this.view.lstNewsType.selectedKey;
    kony.print("User selected newsType is: "+newsType);
    var isValidNewsTypeSelected = this.validateNewsType(newsType);

    // If newsType is valid then proceed with invoking the integration
    // service call
    if (!isValidNewsTypeSelected) {
      kony.print("newsType is valid, proceeding with invoking FoxNews integration service.");
      serviceName = "FoxNews";
      var integrationObj = this.getIntegrationServiceObject(serviceName);

      operationName =  "getNewsArticles";
      data = {"newsType": newsType};
      headers = {};
      this.invokeOperation(integrationObj, operationName, data, headers, this.operationSuccess, this.operationFailure);
    } else {
      // If newsType is not valid then show the appropriate message
      kony.print("newsType is invalid, show messge to user to select a valid newType.");
      alert("Please select a valid newsType.");
    }
    kony.print("Exiting out of getFoxNews");
  },

  /*
  * The function is responsible to process the successful response 
  * returned by FoxNews integration service
  */
  operationSuccess : function (response) {
    //code for success call back
    kony.print("Entering into operationSuccess");
    kony.print("Response received from FoxNews integration service is: "+JSON.stringify(response));
    //If opstatus is 0, then proceed with processing the response
    if (response.opstatus === 0) {
      this.view.segNewsAtricles.widgetDataMap={"lblHeaderTitle":"title","lblFeedDescription":"description",
                                               "lblPubDate":"pubdate","lblTitle":"title","rtxDescription":"description"};
      // Prepare the section header data with template
      var sectionHeaderData={};
      sectionHeaderData.title=response.title;
      sectionHeaderData.description=response.description;
      sectionHeaderData.template="flexSegSectionHeader1";
      // Prepare the row data with template
      for(var i=0;i<response.articles.length;i++) {
        response.articles[i].template="flexSegSectionRow1";
      }
      var processedNewsArticles = [
                                    [
                                      sectionHeaderData,
                                      response.articles
                                    ]
                                  ];
      this.view.segNewsAtricles.setData(processedNewsArticles);
    } else {
      //If opstatus is not 0, then show the appropriate message
      alert("Unable to retrieve news at this time, please try again.");
    }
    kony.print("Exiting out of operationSuccess");
  },

  /*
  * The function is responsible to process the error response 
  * returned by FoxNews integration service
  */
  operationFailure : function (error) {
    //code for failure call back
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
  },

  /*
  * The function is responsible to show the details 
  * of the selected news article
  */
  showNewsDetails : function () {
    kony.print("Entering into showNewsDetails");
    var selectedNewsArticle=this.view.segNewsAtricles.selectedRowItems;
    kony.print("Selected new article is: "+JSON.stringify(selectedNewsArticle));
    var navigationContext=selectedNewsArticle[0];
    var navigateToForm="frmFoxNewsDetails";
    var navigationObject=this.getNavigationObject(navigateToForm);
    navigationObject.navigate(navigationContext);
    kony.print("Exiting out of showNewsDetails");
  }

});
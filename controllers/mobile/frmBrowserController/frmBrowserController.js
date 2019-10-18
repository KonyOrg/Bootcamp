define({ 

  //Type your controller code here 
  configureBrowserFromCode : function () {
    this.view.browserWidget.requestURLConfig = { URL:"https://basecamp.kony.com/s/",
                                                requestMethod: constants.BROWSER_REQUEST_METHOD_GET,
                                                requestData: [["param1","value1"],["param1","value1"]] };
  }
});
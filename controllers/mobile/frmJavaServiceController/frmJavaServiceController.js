define({ 

  //Type your controller code here 
  authenticateMFUsingUserStore:function(){
    kony.print (" ********** Entering into authenticateMFUsingUserStore ********** ");
    kony.model.ApplicationContext.showLoadingScreen("Authenticating using identity service !!!");
    authClient = KNYMobileFabric.getIdentityService("userstore");
    var authParams = {"userid": "venkata.bankapalli@kony.com", "password": "Kony@1234"};
    authClient.login(authParams, this.loginMFSuccess, this.loginMFFailure);
    kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");
  },

  loginMFSuccess:function(response){
    kony.print (" ********** Entering into loginMFSuccess ********** ");
    kony.print (" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    kony.model.ApplicationContext.dismissLoadingScreen();
    alert("Login Successful!: "+JSON.stringify(response));
    integrationObj = KNYMobileFabric.getIntegrationService("MyJavaService");
    var operationName = "getOptions";
    var headers= {};
    data= {};
    kony.model.ApplicationContext.showLoadingScreen("Invoking Java Service !!!");
    integrationObj.invokeOperation(operationName, headers, data, this.compositeServiceSuccessCallback, this.compositeServiceErrorCallback);
    kony.print (" ********** Exiting out of loginMFSuccess ********** ");
  },

  compositeServiceSuccessCallback:function(compositeResponse)
  {
    kony.model.ApplicationContext.dismissLoadingScreen();
    alert(JSON.stringify(compositeResponse));
  },

  compositeServiceErrorCallback:function(error)
  {
    kony.print (" ********** Entering into compositeServiceErrorCallback ********** ");
    kony.print (" ********** Failure in compositeServiceErrorCallback: " + JSON.stringify(error) + " ********** ");
    kony.model.ApplicationContext.dismissLoadingScreen();
    alert (" Failed to fetch options. Please try again. ");
    kony.print (" ********** Exiting out of compositeServiceErrorCallback ********** ");
  },

  loginMFFailure:function(error)
  {
    kony.print (" ********** Entering into loginMFFailure ********** ");
    kony.print (" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.model.ApplicationContext.dismissLoadingScreen();
    alert (" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print (" ********** Exiting out of loginMFFailure ********** ");
  },
});
define({ 

 //Type your controller code here 

  authenticateMFUsingUserStore: function() {
    kony.print(" ********** Entering into authenticateMFUsingUserStore ********** ");
    kony.model.ApplicationContext.showLoadingScreen("Invoking Identity !!!");
    authClient = kony.sdk.getCurrentInstance().getIdentityService("IdentityUserRepository");
    var authParams = {
      "userid": "venkata.bankapalli@kony.com",
      "password": "Kony@1234$"
    };
    //if(mobileFabricConfiguration.authClient)
    authClient.login(authParams, this.loginMFSuccess, this.loginMFFailure);
    kony.print(" ********** Exiting out of authenticateMFUsingUserStore ********** ");

  },

  loginMFSuccess: function(response) {
    kony.print(" ********** Entering into loginMFSuccess ********** ");
    alert(" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
    kony.model.ApplicationContext.dismissLoadingScreen();
    kony.print(" ********** Exiting out of loginMFSuccess ********** ");
  },

  loginMFFailure: function(error) {
    kony.print(" ********** Entering into loginMFFailure ********** ");
    kony.print(" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
    kony.model.ApplicationContext.dismissLoadingScreen();
    alert(" Unable to authenticate to Server, Login failed. Please try again. ");
    kony.print(" ********** Exiting out of loginMFFailure ********** ");
  },
  
 });
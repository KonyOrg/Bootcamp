define({ 
  //Type your controller code here 
  destroyfrmi18nForm : function () {
    kony.application.destroyForm("frmi18NForm");
  },
  
  navigateToi18nForm : function () {
    this.destroyfrmi18nForm();
   
    var navigationObject = new kony.mvc.Navigation("frmi18NForm");
    navigationObject.navigate();
  }
});
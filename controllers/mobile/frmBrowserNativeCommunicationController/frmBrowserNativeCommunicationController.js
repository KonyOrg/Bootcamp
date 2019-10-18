define({ 

  //Type your controller code here 
  invokeBrowserJavaScript:function()
  {
    var strRefNo = this.view.browserWidget.evaluateJavaScript("document.getElementsByName('firstname')[0].value");
    var strRefNo2 = this.view.browserWidget.evaluateJavaScript("document.getElementsByName('lastname')[0].value");
    alert("Message received from executing JS in Browser context: " + strRefNo+""+ strRefNo2);
    
    var strRefNo3 = this.view.browserWidget.evaluateJavaScript("sayHello();");
    alert("strRefNo3: "+strRefNo3);
  },

});
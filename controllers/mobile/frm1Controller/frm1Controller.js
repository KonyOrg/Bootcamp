define({ 

  //Type your controller code here 

  submitAction : function () {
	kony.print("Entering into submitAction");
    var userInput = this.view.tbxUserInput.text;
    var navObj = new kony.mvc.Navigation("frm2");
    navObj.navigate(userInput);
    kony.print("Exiting out of submitAction");
  }

});
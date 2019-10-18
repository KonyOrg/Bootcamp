define({ 

 //Type your controller code here 
	onNavigate : function (navContext) {
      kony.print("Entering into onNavigate of frm2Controller");
      kony.print("navContext is :"+JSON.stringify(navContext));
      this.view.lblUserInput.text = navContext;
      alert(navContext);
      kony.print("Exiting out of onNavigate of frm2Controller");
    }
 });
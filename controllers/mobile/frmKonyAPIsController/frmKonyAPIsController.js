define({ 

 //Type your controller code here 
  navigateToPhoneLibraryForm : function () {
    kony.print ("Entering into navigateToPhoneLibraryForm");
    
    var navigationObject = new kony.mvc.Navigation("frmPhoneLibrary");
    navigationObject.navigate();
        
    kony.print ("Exiting out of navigateToPhoneLibraryForm");
  }
  
 });
define({ 

 //Type your controller code here 

  /**
   * @function
   *
   */
  loggingAndDebugging : function () {
    kony.print("Entering into loggingAndDebugging");
    alert("This is loggingAndDebugging function: Text on button btnLogging is: "+this.view.btnLogging.text);
    kony.print("Exiting out of loggingAndDebugging");
  }
  
 });
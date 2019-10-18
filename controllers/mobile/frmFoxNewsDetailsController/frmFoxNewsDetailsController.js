define({ 

  //Type your controller code here 
  onNavigate : function (navigationContext) {
	this.view.lblTitle.text=navigationContext.title;
    this.view.lblDescription.text=navigationContext.description;
    this.view.lblPubDate.text=navigationContext.pubdate;
  }

});


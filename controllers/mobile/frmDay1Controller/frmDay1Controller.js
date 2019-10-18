define({ 

  //Type your controller code here 
  onPreparedCallback: function (){
    kony.application.dismissLoadingScreen();
    this.view.videoLecture.setVisibility(true);
    this.view.imgVideoPoster.setVisibility(false);
  }
});
define({ 

  //Type your controller code here 
  addGestureRecognizerToWidgets : function () {
    var tapID = this.view.flexClickGesture.addGestureRecognizer (
      constants.GESTURE_TYPE_TAP, 
      {fingers:1,taps:2}, 
      this.onGestureClosure);

    var swipeID = this.view.flexSwipeGesture.addGestureRecognizer (
      constants.GESTURE_TYPE_SWIPE, 
      {fingers:1}, 
      this.onGestureClosure);

    var longpressID = this.view.flexLongPressGesture.addGestureRecognizer (
      constants.GESTURE_TYPE_LONGPRESS, 
      {fingers:1,pressDuration:1}, 
      this.onGestureClosure);

    var panID = this.view.flexPanGesture.addGestureRecognizer (
      constants.GESTURE_TYPE_PAN, 
      {fingers:1,continuousEvents:true}, 
      this.onGestureClosure);

    var rotateID = this.view.flexRotateGesture.addGestureRecognizer (
      constants.GESTURE_TYPE_ROTATION, 
      {fingers:2,continuousEvents:true}, 
      this.onGestureClosure);

    var pinchID = this.view.flexPinchGesture.addGestureRecognizer (
      constants.GESTURE_TYPE_PINCH, 
      {fingers:2,continuousEvents:true}, 
      this.onGestureClosure);
  },

  onGestureClosure : function (mywidget, gestureInfo, context){
    alert("WidgetInfo: "+JSON.stringify(mywidget)+
          "\n\n"+"GestureInfo: "+JSON.stringify(gestureInfo)+
          "\n\n"+"Context: "+JSON.stringify(context));
  }
});
define({ 

  //Type your controller code here 
  onViewCreated:function(eObj)
  {
    try
    {	
      this.view.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,
                                     {fingers: 1},
                                     this.swipeGestureHandler);
    }
    catch(exc)
    {
      alert("exception in template!!!"+JSON.stringify(exc));
    }
  },

  //swipe gesture handler method
  swipeGestureHandler:function(widgetInfo,gestureInfo,context)
  {
    //alert(JSON.stringify(gestureInfo));
    var mswipeDirection = gestureInfo.swipeDirection;
    var secIndex = context.sectionIndex;
    var rowIndex = context.rowIndex;
    var myInfo =
        {
          section: secIndex,
          row: rowIndex,
          swipeDirection: mswipeDirection
        };	
    swipeDirectionTemp = mswipeDirection;
    this.executeOnParent("segmentRowLevelAnimation",myInfo);
  },

  onDeleteRow:function(eventobject,context)
  {
    var secIndex = context.sectionIndex;
    var rowIndex = context.rowIndex;
    var myInfo =
        {
          section: secIndex,
          row: rowIndex,
        };	
    this.executeOnParent("deleteRowDetected",myInfo);
  }  
});
define({ 

  //Type your controller code here 
  /*
   * This function is responsible for adding animation at the 
   * segment widget level
   */
  segmentWidgeLevelAnimation : function () {
    // Create a translate animation to move from one position to another
    // In the below code move each row from left 200 position to 
    // left 0
    var transformObject1 = kony.ui.makeAffineTransform();
    transformObject1.translate(200, 0);
    var transformObject2 = kony.ui.makeAffineTransform();
    transformObject2.translate(0, 0);
    var animationObject = kony.ui.createAnimation(
      {
        "0":{"transform":transformObject1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}, 
        "100":{"transform":transformObject2,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
    );
    var animationConfig = {duration:1,"iterationCount":1,"delay":0,fillMode:kony.anim.FILL_MODE_FORWARDS};
    var animationCallbacks = {"animationEnd":function(){}};
    var animationDefObject={definition:animationObject,config:animationConfig,callbacks:animationCallbacks};
    this.view.segCars.setAnimations({visible:animationDefObject});
  },

  segmentRowLevelAnimation : function (context) {
    //alert(swipeDirectionTemp);
    var transformObject1 = kony.ui.makeAffineTransform();
    transformObject1.translate(0, 0);
    var transformObject2 = kony.ui.makeAffineTransform();
    if (2 === swipeDirectionTemp) {
    	transformObject2.translate(0, 0);
    } else if (1 === swipeDirectionTemp) {
    	transformObject2.translate(-100, 0);
    }
    swipeDirectionTemp = null;
    var animationObject = kony.ui.createAnimation(
      {
        "0":{"transform":transformObject1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}, 
        "100":{"transform":transformObject2,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
    );
    var animationConfig = {duration: 0.5,"iterationCount":1,"delay":0,fillMode:kony.anim.FILL_MODE_FORWARDS};
    var animationCallbacks = {"animationEnd":function(){}};
    var animationDefObject={definition:animationObject,config:animationConfig,callbacks:animationCallbacks};     

    var row = {sectionIndex: context.selectedIndex[0],rowIndex: context.selectedIndex[1]};
    var rowList = [row];
    this.view.segCars1.animateRows({rows: rowList,widgets: ["flexMain"],animation:animationDefObject});
  },

  deleteRowDetected : function (context) {
    var transformObject1 = kony.ui.makeAffineTransform();
    transformObject1.scale(1,1);
    var transformObject2 = kony.ui.makeAffineTransform();
    transformObject2.scale(0,0);
    var animationObject = kony.ui.createAnimation(
      {
        "0":{"transform":transformObject1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}, 
        "100":{"transform":transformObject2,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      }
    );
    var animationConfig = {"duration":0.3,"iterationCount":1,"delay":0,"fillMode":kony.anim.FILL_MODE_FORWARDS};
    var animationCallbacks = {"animationEnd":function(){}};
    var animationDefObject = {definition: animationObject, config: animationConfig,callbacks:animationCallbacks};

    var rowIndex=context.selectedIndex[1];
    var secIndex=context.selectedIndex[0];
    this.view.segCars1.removeAt(rowIndex,secIndex,animationDefObject);
  }
});
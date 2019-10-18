define({ 

  //Type your controller code here 

  animationUsingCode : function () {

    kony.print("Entering into animationUsingCode");

    this.view.btnTest.animate(

      kony.ui.createAnimation(
        {
          "0":{"left":"0dp","top":"0dp","backgroundColor":"ff7f50", 
               "stepConfig":{"timingFunction":kony.anim.LINEAR}},
          "25":{"left":"50dp","top":"50dp","opacity":0.75, 
                "stepConfig":{"timingFunction":kony.anim.LINEAR}},
          "50":{"opacity":0.5,
                "stepConfig":{"timingFunction":kony.anim.LINEAR}},
          "100":{"opacity":0.0,
                 "stepConfig":{"timingFunction":kony.anim.LINEAR}}
        }
      ),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_NONE,"duration":3.0},    
      {"animationEnd":function(){}}
    ); 

    kony.print("Exiting out of animationUsingCode");

  },

  transformUsingCode : function () {

    var transformObj = kony.ui.makeAffineTransform();

    transformObj.translate(50,50);
    //transformObj.scale(1.5,1.5);
    //transformObj.rotate(90);

    this.view.btnTest.animate(

      kony.ui.createAnimation(
        {
          "0":{"left":"0dp","top":"0dp","backgroundColor":"ff7f50"},
          "25":{"left":"10dp","top":"10dp","opacity":0.75},
          "50":{"left":"30dp","top":"25dp","transform":transformObj},
          "100":{"opacity":0.0}
        }
      ),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_NONE,"duration":3.0},    
      {"animationEnd":function(){}}
    ); 
  },

  rotate3D : function () {
    kony.print("Entering into rotate3D");

    var transformObject= kony.ui.makeAffineTransform();
    transformObject.setPerspective(500);
    transformObject.rotate3D(45,1,0,0);

    var animationObject = kony.ui.createAnimation(    		
      {
        "100":{"transform":transformObject,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
      });
    var animationConfig = {duration:1,fillMode: kony.anim.FILL_MODE_FORWARDS};
    var animationCallbacks = {"animationEnd":function(){kony.print("animation END");}};

    this.view.btnTest.animate(animationObject , animationConfig, animationCallbacks);	
    
    kony.print (JSON.stringify(animationConfig));
    kony.print("Exiting out of rotate3D");
   
  }
});
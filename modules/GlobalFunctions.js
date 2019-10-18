//Type your code here

swipeDirectionTemp = null;

/**
 * @function
 *
 */
function sayHello (){
  alert ("Hello World!");
}


function addWidgetsfrmCameraOverlay() {
  frmCameraOverlay.setDefaultUnit(kony.flex.DP);
  var referenceImageToCrop = new kony.ui.Image2(
    {
      "centerX": "50%",
      "centerY": "50%", 
      "height": "300dp",
      "id": "referenceImageToCrop",
      "isVisible": true,
      "skin": "slImage",
      "src": "frame.png",
      "width": "200dp",
      "zIndex": 1
    }, {
      "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {}
  );
  frmCameraOverlay.add(referenceImageToCrop);
}

function createfrmCameraOverlay () {
  frmCameraOverlay = new kony.ui.Form2(
    {
      "id": "frmCameraOverlay",
      "enabledForIdleTimeout": false,
      "layoutType": kony.flex.FREE_FORM,
      "needAppMenu": false,
      "skin": "sknFrmBg3",
      "addWidgets": addWidgetsfrmCameraOverlay
    }, {
      "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
      "layoutType": kony.flex.FREE_FORM,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {
      "footerOverlap": false,
      "headerOverlap": false,
      "retainScrollPosition": false,
      "titleBar": false,
      "titleBarSkin": "slTitleBar",
      "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });  
}

function functionToEvaluateInNativeContext (data1, data2) {
  alert("In functionToEvaluateInNativeContext: Data received from Browser context is: "+data1+" "+data2);     
}

function setDynamicForm(){
      var userPref = kony.store.getItem("startupForm");
      kony.print("########## User prefernce is " + userPref);
      if(userPref == "frmFormOne") {
	  		return "frmFormOne";
	  }
	  else if (userPref == "frmFormTwo"){
			return "frmFormTwo";
	  }
	  else{
			return "frmHome";
	  }
}


define({ 

  //Type your controller code here 
  onCaptureEventHandler : function (eventObject) {
    this.view.imgCapturedImage.rawBytes=eventObject.rawBytes;
    //var navigationObj=new kony.mvc.Navigation("frmCameraWidget");
    //navigationObj.navigate();
  },

  setOverConfig : function () {
    this.view.camToCapturePhotosInPrivateMode.overlayConfig = {
      "captureButtonText": "Capture Photo",
      "startVideoButtonText": "",
      "stopVideoButtonText": "",
      "overlayForm": frmCameraOverlay,
      "referenceImageToCrop": frmCameraOverlay.referenceImageToCrop,
      "tapAnywhere": false
    };
  },
  
  onCaptureVideoEventHandler : function (eventObject) {
    this.view.video.setSource({"rawBytes": eventObject.rawBytes});
  }
});
define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onCapture defined for camToCapturePhotosInPublicMode **/
    AS_Camera_cfe60d0b583b42adacaae17768d886bd: function AS_Camera_cfe60d0b583b42adacaae17768d886bd(eventobject) {
        var self = this;
        return self.onCaptureEventHandler.call(this, eventobject);
    },
    /** onCapture defined for camToCapturePhotosInPrivateMode **/
    AS_Camera_a7dc95b664aa43c0bf2254ef9445ecd0: function AS_Camera_a7dc95b664aa43c0bf2254ef9445ecd0(eventobject) {
        var self = this;
        return self.onCaptureEventHandler.call(this, eventobject);
    },
    /** onCapture defined for camToCaptureVideo **/
    AS_Camera_a34d159b45f04d01b4eb79f5ae2383b4: function AS_Camera_a34d159b45f04d01b4eb79f5ae2383b4(eventobject) {
        var self = this;
        return self.onCaptureVideoEventHandler.call(this, eventobject);
    },
    /** init defined for frmCameraWidget **/
    AS_Form_h43d70000ccd4dfc9c8740002592bc46: function AS_Form_h43d70000ccd4dfc9c8740002592bc46(eventobject) {
        var self = this;
        createfrmCameraOverlay.call(this);
        self.setOverConfig.call(this);
    }
});
define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnEvaluateJSInBrowserContext **/
    AS_Button_e69275e8c5ef4eed9e303f6eef061922: function AS_Button_e69275e8c5ef4eed9e303f6eef061922(eventobject) {
        var self = this;
        return self.invokeBrowserJavaScript.call(this);
    },
    /** onClick defined for btnBackToBrowserWidget **/
    AS_Button_fb34957003e443cd9f20bcaa47b747f2: function AS_Button_fb34957003e443cd9f20bcaa47b747f2(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBrowser");
        ntf.navigate();
    }
});
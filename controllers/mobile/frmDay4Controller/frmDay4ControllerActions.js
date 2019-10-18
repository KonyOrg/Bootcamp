define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCameraBasics **/
    AS_Button_c09d4e81be5e417f9918e9fbc40266b4: function AS_Button_c09d4e81be5e417f9918e9fbc40266b4(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraWidget");
        ntf.navigate();
    },
    /** onClick defined for btnMapWidget **/
    AS_Button_d5d79fa4a27e4671abd76d55b8dd15e4: function AS_Button_d5d79fa4a27e4671abd76d55b8dd15e4(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMap");
        ntf.navigate();
    },
    /** onClick defined for btnBrowserWidget **/
    AS_Button_e1734c72974e4859952136d023d8e976: function AS_Button_e1734c72974e4859952136d023d8e976(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBrowser");
        ntf.navigate();
    },
    /** onClick defined for btnDynamicWidgets **/
    AS_Button_g4dbf1f06edb4ea4993230ef273bcbf3: function AS_Button_g4dbf1f06edb4ea4993230ef273bcbf3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDynamicWidgets");
        ntf.navigate();
    },
    /** onClick defined for btnApplicationProperties **/
    AS_Button_hef44ac6309842a8aa260e660b58ffbb: function AS_Button_hef44ac6309842a8aa260e660b58ffbb(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmApplicationProperties");
        ntf.navigate();
    },
    /** onClick defined for btnChangeTheStartUpForm **/
    AS_Button_c97db61be34841d0b7ac65f28a330eed: function AS_Button_c97db61be34841d0b7ac65f28a330eed(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmChangeStartupForm");
        ntf.navigate();
    },
    /** onClick defined for btnShowProgressIndicator **/
    AS_Button_deba8c96b7b2407ab3a18bc053feaba1: function AS_Button_deba8c96b7b2407ab3a18bc053feaba1(eventobject) {
        var self = this;
        kony.application.showLoadingScreen("skProgress", "   Loading, Please wait...   ", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {
            enableMenuKey: false,
            enableBackKey: false
        });
    },
    /** onClick defined for btnDismissProgressIndicator **/
    AS_Button_d22e7a0e914a4aa8bf531249ad17b5b0: function AS_Button_d22e7a0e914a4aa8bf531249ad17b5b0(eventobject) {
        var self = this;
        kony.application.dismissLoadingScreen();
    },
    /** onClick defined for btnGestures **/
    AS_Button_i4f49b4b524c4d5e8ac1fc272f59b1db: function AS_Button_i4f49b4b524c4d5e8ac1fc272f59b1db(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmGestureAPIs");
        ntf.navigate();
    },
    /** onClick defined for btnInternalization **/
    AS_Button_he43cb51f3f6452e8d6afa06b245e8ba: function AS_Button_he43cb51f3f6452e8d6afa06b245e8ba(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmInternationalization");
        ntf.navigate();
    }
});
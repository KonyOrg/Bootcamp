define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnConfigureBrowserFromCode **/
    AS_Button_c9f5cb5b1b964566ae9c4b5cd7503aa8: function AS_Button_c9f5cb5b1b964566ae9c4b5cd7503aa8(eventobject) {
        var self = this;
        return self.configureBrowserFromCode.call(this);
    },
    /** onClick defined for btnBrowserNAtiveCommunication **/
    AS_Button_b6bc4ff08065454cbe7f8073a884433f: function AS_Button_b6bc4ff08065454cbe7f8073a884433f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBrowserNativeCommunication");
        ntf.navigate();
    }
});
define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnMVC **/
    AS_Button_d45c683e07f647f2b552add751e8357d: function AS_Button_d45c683e07f647f2b552add751e8357d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMVC");
        ntf.navigate();
    },
    /** onClick defined for btnLogging **/
    AS_Button_e41c279b8949405ba3c1281b525a6f7a: function AS_Button_e41c279b8949405ba3c1281b525a6f7a(eventobject) {
        var self = this;
        return self.loggingAndDebugging.call(this);
    },
    /** onClick defined for btnKonyAPIs **/
    AS_Button_f34f1e9db69143bcb9db281e86a92730: function AS_Button_f34f1e9db69143bcb9db281e86a92730(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKonyAPIs");
        ntf.navigate();
    },
    /** onClick defined for btnAnimationAPI **/
    AS_Button_g8c71f747f1346c387dacaab974a84e6: function AS_Button_g8c71f747f1346c387dacaab974a84e6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAnimationAPI");
        ntf.navigate();
    },
    /** onClick defined for btnSegmentWidgetAPIs **/
    AS_Button_gb120c369ad4424b9ca11074ae81e426: function AS_Button_gb120c369ad4424b9ca11074ae81e426(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSegmentWidgetAPIs");
        ntf.navigate();
    }
});
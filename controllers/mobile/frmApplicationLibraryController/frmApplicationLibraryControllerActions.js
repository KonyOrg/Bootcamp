define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnApplicationOpenMediaURL **/
    AS_Button_e9a053291586445c8097bdc8ce2b51ea: function AS_Button_e9a053291586445c8097bdc8ce2b51ea(eventobject) {
        var self = this;
        kony.application.openMediaURL("http://www.html5videoplayer.net/videos/toystory.mp4");
    },
    /** onClick defined for btnApplicationOpenURL **/
    AS_Button_g10e094641b3413f9692105bb12c6303: function AS_Button_g10e094641b3413f9692105bb12c6303(eventobject) {
        var self = this;
        kony.application.openURL("https://www.kony.com/");
    },
    /** onClick defined for btnApplicationGetCurrentForm **/
    AS_Button_a08ae9681cfa4044942eb5ba0b81aa8f: function AS_Button_a08ae9681cfa4044942eb5ba0b81aa8f(eventobject) {
        var self = this;
        alert("Current form is: " + kony.application.getCurrentForm());
    },
    /** onClick defined for btnApplicationGetPreviousForm **/
    AS_Button_bf9c3a1329894e83829534593748b12e: function AS_Button_bf9c3a1329894e83829534593748b12e(eventobject) {
        var self = this;
        alert("Previous form is? " + kony.application.getPreviousForm());
    },
    /** onClick defined for btnApplicationExit **/
    AS_Button_deda946d69194e099bc2c60a9d81b129: function AS_Button_deda946d69194e099bc2c60a9d81b129(eventobject) {
        var self = this;
        kony.application.exit();
    }
});
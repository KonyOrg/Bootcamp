define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOSuserAgent **/
    AS_Button_g5ee8b938c344f5dbf1045ecd50b5dd8: function AS_Button_g5ee8b938c344f5dbf1045ecd50b5dd8(eventobject) {
        var self = this;
        alert("User-Agent is: " + JSON.stringify(kony.os.userAgent()));
    },
    /** onClick defined for btnOSdeviceInfo **/
    AS_Button_f7a0ef16237b4fda8fd3504b35732eb5: function AS_Button_f7a0ef16237b4fda8fd3504b35732eb5(eventobject) {
        var self = this;
        alert("Device-Info is: " + JSON.stringify(kony.os.deviceInfo()));
    },
    /** onClick defined for btnOShasCameraSupport **/
    AS_Button_ad59d433832e4b77b494581299b59e34: function AS_Button_ad59d433832e4b77b494581299b59e34(eventobject) {
        var self = this;
        alert("Is camera support available? " + JSON.stringify(kony.os.hasCameraSupport()));
    },
    /** onClick defined for btnOShasGPSSupport **/
    AS_Button_a82efc7f188a4abfaafdacfa50d9fdee: function AS_Button_a82efc7f188a4abfaafdacfa50d9fdee(eventobject) {
        var self = this;
        alert("Is GPS support available? " + JSON.stringify(kony.os.hasGPSSupport()));
    },
    /** onClick defined for btnOShasTouchSupport **/
    AS_Button_d4c75379c7e14380bbcccfb00ff1739a: function AS_Button_d4c75379c7e14380bbcccfb00ff1739a(eventobject) {
        var self = this;
        alert("Is touch support available? " + JSON.stringify(kony.os.hasTouchSupport()));
    },
    /** onClick defined for btnOShasAccelerometerSupport **/
    AS_Button_e58fe99384c84b5fb65dad1b379f9069: function AS_Button_e58fe99384c84b5fb65dad1b379f9069(eventobject) {
        var self = this;
        alert("Is accelerometer support available? " + JSON.stringify(kony.os.hasAccelerometerSupport()));
    },
    /** onClick defined for btnOSgetDeviceCurrentOrientation **/
    AS_Button_ec42158c42ee43cead791d6217cc1f14: function AS_Button_ec42158c42ee43cead791d6217cc1f14(eventobject) {
        var self = this;
        alert("Current device orientation is? " + JSON.stringify(kony.os.getDeviceCurrentOrientation()));
    }
});
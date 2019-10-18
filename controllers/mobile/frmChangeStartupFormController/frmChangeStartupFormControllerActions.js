define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSelectFormOne **/
    AS_Button_i74713452a024c0caf6b7fc99d59efc7: function AS_Button_i74713452a024c0caf6b7fc99d59efc7(eventobject) {
        var self = this;
        kony.store.setItem("startupForm", "frmFormOne");
    },
    /** onClick defined for btnSelectFormTwo **/
    AS_Button_bc99e45755b54bcda87bb0883a282d9a: function AS_Button_bc99e45755b54bcda87bb0883a282d9a(eventobject) {
        var self = this;
        kony.store.setItem("startupForm", "frmFormTwo");
    },
    /** onClick defined for btnSelectFormHome **/
    AS_Button_ceb61f48ff684e4f9f0afed42470230c: function AS_Button_ceb61f48ff684e4f9f0afed42470230c(eventobject) {
        var self = this;
        kony.store.setItem("startupForm", "frmFormHome");
    },
    /** onClick defined for btnExit **/
    AS_Button_ca07ddafb8874475ab71e88c34979f32: function AS_Button_ca07ddafb8874475ab71e88c34979f32(eventobject) {
        var self = this;
        kony.application.exit();
    }
});
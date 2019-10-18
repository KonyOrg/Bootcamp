define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnChangeText **/
    AS_Button_d42913278a634e4f919e6a117829192c: function AS_Button_d42913278a634e4f919e6a117829192c(eventobject) {
        var self = this;
        self.view.btnTest.text = "Hello World!";
    },
    /** onClick defined for btnChangeSkin **/
    AS_Button_ac63000525be4e129db2489567b5c3b3: function AS_Button_ac63000525be4e129db2489567b5c3b3(eventobject) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.btnTest.skin = "sknBtn1";
            }, null);
        } else {
            (function() {
                self.view.btnTest.skin = "sknBtn1";
            })();
        }
    },
    /** onClick defined for btnMakeInVisible **/
    AS_Button_c7077bd0a8564e2385041b37765ee479: function AS_Button_c7077bd0a8564e2385041b37765ee479(eventobject) {
        var self = this;
        self.view.btnTest.isVisible = false;
    },
    /** onClick defined for btnMakeVisible **/
    AS_Button_h3f5dbd73b364075b1f6052402704c0b: function AS_Button_h3f5dbd73b364075b1f6052402704c0b(eventobject) {
        var self = this;
        self.view.btnTest.isVisible = true;
    },
    /** onClick defined for btnShowAlert **/
    AS_Button_gd62aabb1b1047789e3bfdcfce926a5b: function AS_Button_gd62aabb1b1047789e3bfdcfce926a5b(eventobject) {
        var self = this;

        function SHOW_ALERT__j00969ee2b5143c9b0afa7eb0d3182a2_True() {
            self.view.btnTest.text = "User click OK on alert!";
        }
        function SHOW_ALERT__j00969ee2b5143c9b0afa7eb0d3182a2_False() {
            self.view.btnTest.text = "User click NO on alert!";
        }
        function SHOW_ALERT__j00969ee2b5143c9b0afa7eb0d3182a2_Callback(response) {
            if (response === true) {
                SHOW_ALERT__j00969ee2b5143c9b0afa7eb0d3182a2_True();
            } else {
                SHOW_ALERT__j00969ee2b5143c9b0afa7eb0d3182a2_False();
            }
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": "Alert Title",
            "yesLabel": "OK",
            "noLabel": "NO",
            "alertIcon": "option1.png",
            "message": "\nYou are about to logout?",
            "alertHandler": SHOW_ALERT__j00969ee2b5143c9b0afa7eb0d3182a2_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    },
    /** onClick defined for btnSendSMS **/
    AS_Button_c2956613ad2f4ce9af6f825c8e8a6f89: function AS_Button_c2956613ad2f4ce9af6f825c8e8a6f89(eventobject) {
        var self = this;
        kony.phone.sendSMS("9865429105", "Hello World!");
    },
    /** onClick defined for btnSendEmail **/
    AS_Button_a0aa5c4206884e07a828b3fd95e73d82: function AS_Button_a0aa5c4206884e07a828b3fd95e73d82(eventobject) {
        var self = this;
        kony.phone.openEmail(["customercare@kony.com"], [], [], 'Hello World!', "<h2>Hello World!</h2>\n<p>Welcome to the basecamp!</p>", true);
    }
});
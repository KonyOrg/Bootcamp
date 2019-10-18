define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSelectedOptions **/
    AS_Button_a89f56faf6104abc9643d89443328435: function AS_Button_a89f56faf6104abc9643d89443328435(eventobject) {
        var self = this;

        function SHOW_ALERT__gb5fdbeb1fa54aec9641cf173b3c0c69_True() {}
        function SHOW_ALERT__gb5fdbeb1fa54aec9641cf173b3c0c69_Callback() {
            SHOW_ALERT__gb5fdbeb1fa54aec9641cf173b3c0c69_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": "Selected options are: " + JSON.stringify(this.view.cbxGroup.selectedKeyValues),
            "alertHandler": SHOW_ALERT__gb5fdbeb1fa54aec9641cf173b3c0c69_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    },
    /** onSelection defined for lstBox **/
    AS_ListBox_c17469827c0f4a1ca04ebe8fd2a34435: function AS_ListBox_c17469827c0f4a1ca04ebe8fd2a34435(eventobject) {
        var self = this;

        function SHOW_ALERT__jb02882d9ee34d5f9c0c114eec78fe59_True() {}
        function SHOW_ALERT__jb02882d9ee34d5f9c0c114eec78fe59_Callback() {
            SHOW_ALERT__jb02882d9ee34d5f9c0c114eec78fe59_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": "Selected value from listbox is: " + JSON.stringify(eventobject.selectedKeyValue),
            "alertHandler": SHOW_ALERT__jb02882d9ee34d5f9c0c114eec78fe59_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    },
    /** onSelection defined for radioBtnGroup **/
    AS_RadioButtonGroup_gbc80a74d5614460b6666630f914127c: function AS_RadioButtonGroup_gbc80a74d5614460b6666630f914127c(eventobject) {
        var self = this;

        function SHOW_ALERT__b5b25dad76ef4666bad96a7f89d4dd58_True() {}
        function SHOW_ALERT__b5b25dad76ef4666bad96a7f89d4dd58_Callback() {
            SHOW_ALERT__b5b25dad76ef4666bad96a7f89d4dd58_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": "Selected value from radio button group is: " + JSON.stringify(eventobject.selectedKeyValue),
            "alertHandler": SHOW_ALERT__b5b25dad76ef4666bad96a7f89d4dd58_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    },
    /** onSelection defined for sliderWdgt **/
    AS_Slider_i4f0eeb64e6b4e83ada3709ed025b086: function AS_Slider_i4f0eeb64e6b4e83ada3709ed025b086(eventobject, selectedvalue) {
        var self = this;

        function SHOW_ALERT__hc5ca375d15e438fb8ac4f201f41857a_True() {}
        function SHOW_ALERT__hc5ca375d15e438fb8ac4f201f41857a_Callback() {
            SHOW_ALERT__hc5ca375d15e438fb8ac4f201f41857a_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": "Selected value from slider is: " + eventobject.selectedValue,
            "alertHandler": SHOW_ALERT__hc5ca375d15e438fb8ac4f201f41857a_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
});
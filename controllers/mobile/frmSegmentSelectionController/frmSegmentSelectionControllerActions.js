define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSingleSelectedData **/
    AS_Button_a8f937de0a334fc1b72534f07a63184d: function AS_Button_a8f937de0a334fc1b72534f07a63184d(eventobject) {
        var self = this;

        function SHOW_ALERT__gd2b989224624ab1934996e24a38dbad_True() {}
        function SHOW_ALERT__gd2b989224624ab1934996e24a38dbad_Callback() {
            SHOW_ALERT__gd2b989224624ab1934996e24a38dbad_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": "Selected row is: " + JSON.stringify(this.view.segSingleSelect.selectedRowItems),
            "alertHandler": SHOW_ALERT__gd2b989224624ab1934996e24a38dbad_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    },
    /** onClick defined for btnMultiSelect **/
    AS_Button_bdbf865800c44d9a99154c95e3a620a9: function AS_Button_bdbf865800c44d9a99154c95e3a620a9(eventobject) {
        var self = this;

        function SHOW_ALERT_ide_onClick_aa64516443f847be8ede1fb6ae518854_True() {}
        function SHOW_ALERT_ide_onClick_aa64516443f847be8ede1fb6ae518854_Callback() {
            SHOW_ALERT_ide_onClick_aa64516443f847be8ede1fb6ae518854_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": "Selected row is: " + JSON.stringify(this.view.segMultiSelect.selectedRowItems),
            "alertHandler": SHOW_ALERT_ide_onClick_aa64516443f847be8ede1fb6ae518854_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
});
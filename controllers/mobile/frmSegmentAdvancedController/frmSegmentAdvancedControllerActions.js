define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segWithSections **/
    AS_Segment_cc64a493f26940f9a83464f19b4ec6cd: function AS_Segment_cc64a493f26940f9a83464f19b4ec6cd(eventobject, sectionNumber, rowNumber) {
        var self = this;

        function SHOW_ALERT__i7daabe5c8224487b622ccd86280e681_True() {}
        function SHOW_ALERT__i7daabe5c8224487b622ccd86280e681_Callback() {
            SHOW_ALERT__i7daabe5c8224487b622ccd86280e681_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": "Selected row is: " + JSON.stringify(eventobject.selectedRowItems),
            "alertHandler": SHOW_ALERT__i7daabe5c8224487b622ccd86280e681_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
});
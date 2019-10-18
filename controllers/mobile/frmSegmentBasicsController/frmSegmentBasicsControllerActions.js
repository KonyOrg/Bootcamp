define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segWithRowTemplate **/
    AS_Segment_c9d52ee6a3aa4ce5bb3d4df9b4e0882c: function AS_Segment_c9d52ee6a3aa4ce5bb3d4df9b4e0882c(eventobject, sectionNumber, rowNumber) {
        var self = this;

        function SHOW_ALERT__dcc7e5dc8c5245bca3f905747c4be34a_True() {}
        function SHOW_ALERT__dcc7e5dc8c5245bca3f905747c4be34a_Callback() {
            SHOW_ALERT__dcc7e5dc8c5245bca3f905747c4be34a_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": "Selected row is: " + JSON.stringify(eventobject.selectedRowItems),
            "alertHandler": SHOW_ALERT__dcc7e5dc8c5245bca3f905747c4be34a_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
});
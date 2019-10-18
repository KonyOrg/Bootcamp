define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSelection defined for calOnScreenGrid **/
    AS_Calendar_c3c083fe12c647ea8f983e06fd764727: function AS_Calendar_c3c083fe12c647ea8f983e06fd764727(eventobject, isValidDateSelected) {
        var self = this;

        function SHOW_ALERT__c55d93d06ca74813b412798a82bc476b_True() {}
        function SHOW_ALERT__c55d93d06ca74813b412798a82bc476b_Callback() {
            SHOW_ALERT__c55d93d06ca74813b412798a82bc476b_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "message": "Selected date is: " + eventobject.formattedDate,
            "alertHandler": SHOW_ALERT__c55d93d06ca74813b412798a82bc476b_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
});
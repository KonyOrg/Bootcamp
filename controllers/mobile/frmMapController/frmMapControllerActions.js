define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnMapLocations **/
    AS_Button_b8f3334608ba47f8a62e3325ff880627: function AS_Button_b8f3334608ba47f8a62e3325ff880627(eventobject) {
        var self = this;
        return self.mapLocations.call(this);
    },
    /** onClick defined for btnNavigateToAPin **/
    AS_Button_h959e4c71b8741ac9964004b8e8a7a4b: function AS_Button_h959e4c71b8741ac9964004b8e8a7a4b(eventobject) {
        var self = this;
        return self.navigateToAPin.call(this);
    },
    /** onClick defined for btnNavigateToALocation **/
    AS_Button_aa20be2b413448c9a595210646dff7ba: function AS_Button_aa20be2b413448c9a595210646dff7ba(eventobject) {
        var self = this;
        return self.navigateToAGivenLocation.call(this);
    },
    /** onClick defined for btnMapWithCallout **/
    AS_Button_hf9c71ee7d95466c8be45f49f4011d88: function AS_Button_hf9c71ee7d95466c8be45f49f4011d88(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMapWithCustomCallout");
        ntf.navigate();
    }
});
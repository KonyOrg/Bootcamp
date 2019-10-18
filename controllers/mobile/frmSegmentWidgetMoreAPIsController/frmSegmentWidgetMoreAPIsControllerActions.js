define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnAddToSegCars **/
    AS_Button_dd858e40d4c047e1a0a18c6f4b92c200: function AS_Button_dd858e40d4c047e1a0a18c6f4b92c200(eventobject) {
        var self = this;
        return self.addCar.call(this);
    },
    /** onRowClick defined for segCars **/
    AS_Segment_a2b364e42f63493c80eb47154b261ff2: function AS_Segment_a2b364e42f63493c80eb47154b261ff2(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.removeCar.call(this);
    }
});
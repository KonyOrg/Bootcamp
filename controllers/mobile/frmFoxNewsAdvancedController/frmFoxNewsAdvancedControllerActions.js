define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSelection defined for lstNewsType **/
    AS_ListBox_c8a2198cc98847799af98fe900fe5cfb: function AS_ListBox_c8a2198cc98847799af98fe900fe5cfb(eventobject) {
        var self = this;
        return self.getFoxNews.call(this);
    },
    /** onRowClick defined for segNewsAtricles **/
    AS_Segment_jc4a24a751834d46a2c22058d45650ae: function AS_Segment_jc4a24a751834d46a2c22058d45650ae(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.showNewsDetails.call(this);
    }
});
define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSelection defined for lstNewsType **/
    AS_ListBox_gfc98cb3ee2845bf9f7cb36ef4040963: function AS_ListBox_gfc98cb3ee2845bf9f7cb36ef4040963(eventobject) {
        var self = this;
        return self.getFoxNews.call(this);
    },
    /** onRowClick defined for segNewsAtricles **/
    AS_Segment_b611e7d6bbf54f7e9b8b78e13995e28d: function AS_Segment_b611e7d6bbf54f7e9b8b78e13995e28d(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.showNewsDetails.call(this);
    }
});
define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segAccounts **/
    AS_Segment_a789a95daf85485a94d8ce3cdc057237: function AS_Segment_a789a95daf85485a94d8ce3cdc057237(eventobject, sectionNumber, rowNumber) {
        var self = this;
        alert("Selected row from segment is: " + JSON.stringify(this.view.segAccounts.selectedRowItems));
    },
    /** onClick defined for btnSegmentSetData **/
    AS_Button_h28829bd20654a01b5f489f423d73863: function AS_Button_h28829bd20654a01b5f489f423d73863(eventobject) {
        var self = this;
        return self.setDataToSegAccounts.call(this);
    },
    /** onClick defined for btnSegmentSetDataWithWidgetDataMap **/
    AS_Button_h85dcf51a83d40cbb765f0edee3d57d5: function AS_Button_h85dcf51a83d40cbb765f0edee3d57d5(eventobject) {
        var self = this;
        return self.setDataToSegAccountsUsingWidgetDataMap.call(this);
    },
    /** onClick defined for CopybtnSegmentSetData0f50a1d8f2c1949 **/
    AS_Button_c954fb6c01b541fbba21cf1eabe69b69: function AS_Button_c954fb6c01b541fbba21cf1eabe69b69(eventobject) {
        var self = this;
        return self.setDataWithSectionsToSegAccounts.call(this);
    },
    /** onClick defined for CopybtnSegmentSetData0de62665da3614c **/
    AS_Button_b75e9127dc3a45739b99b69a0ab1c1fb: function AS_Button_b75e9127dc3a45739b99b69a0ab1c1fb(eventobject) {
        var self = this;
        return self.setDataWithSectionsUsingTemplatesToSegAccounts.call(this);
    },
    /** init defined for frmSegmentWidgetAPIs **/
    AS_Form_b86991466e8947cfa424c70a0314185e: function AS_Form_b86991466e8947cfa424c70a0314185e(eventobject) {
        var self = this;
        this.view.segAccounts.enableReordering = true;
    }
});
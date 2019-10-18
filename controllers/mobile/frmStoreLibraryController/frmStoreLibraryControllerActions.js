define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSetItem **/
    AS_Button_c148ccef252d4b959fb0decc565f2b13: function AS_Button_c148ccef252d4b959fb0decc565f2b13(eventobject) {
        var self = this;
        kony.store.setItem("item1", "Hello World!");
    },
    /** onClick defined for btnStoreGetItem **/
    AS_Button_j60e24f32935425d867f248a27ccf8f9: function AS_Button_j60e24f32935425d867f248a27ccf8f9(eventobject) {
        var self = this;
        alert("Value of the item with key item1 is: " + kony.store.getItem("item1"));
    },
    /** onClick defined for btnStoreRemoveItem **/
    AS_Button_g44164281e274e6ea3b380e40a40865b: function AS_Button_g44164281e274e6ea3b380e40a40865b(eventobject) {
        var self = this;
        kony.store.removeItem("item1");
        alert("Removed the item with the key item1: " + kony.store.getItem("item1"));
    }
});
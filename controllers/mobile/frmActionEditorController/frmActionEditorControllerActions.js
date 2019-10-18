define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnConditions **/
    AS_Button_ed385f8683534705aba3b4739294c9d5: function AS_Button_ed385f8683534705aba3b4739294c9d5(eventobject) {
        var self = this;
        if (self.view.lblTest.text == "Test") {
            alert("Condition Satisfied!")
        }
    },
    /** onClick defined for btnInvokeFunction **/
    AS_Button_d665e51ef4194b9fa86430f64d94d5fd: function AS_Button_d665e51ef4194b9fa86430f64d94d5fd(eventobject) {
        var self = this;
        return sayHello.call(this);
    },
    /** onClick defined for btnChannelCondition **/
    AS_Button_h1dbce3e6ab64a758d13bfc9c319c378: function AS_Button_h1dbce3e6ab64a758d13bfc9c319c378(eventobject) {
        var self = this;
        //#ifdef android
        //#define CHANNEL_CONDITION__de0a538585c44ffb9e9a744fabceca2c_android
        //#endif
        //#ifdef CHANNEL_CONDITION__de0a538585c44ffb9e9a744fabceca2c_android
        alert("This is Android!");
        //#endif
    }
});
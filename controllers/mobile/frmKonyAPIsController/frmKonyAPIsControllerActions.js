define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnFormLifeCycleEvents **/
    AS_Button_g77e310c92154bb29d414503b5ba4ddf: function AS_Button_g77e310c92154bb29d414503b5ba4ddf(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmFormLifeCycleEvents");
        ntf.navigate();
    },
    /** onClick defined for btnDestroyFormLifeCycleEvents **/
    AS_Button_i2f4a575cd5f4f398279606cc215d163: function AS_Button_i2f4a575cd5f4f398279606cc215d163(eventobject) {
        var self = this;
        kony.application.destroyForm("frmFormLifeCycleEvents");
    },
    /** onClick defined for btnChannelCondition **/
    AS_Button_e7a5e0e65f284e289838aee678914d9a: function AS_Button_e7a5e0e65f284e289838aee678914d9a(eventobject) {
        var self = this;
        //#ifdef iphone
        this.view.btnChannelCondition.text = "This is iPhone"
        //#endif
        //#ifdef android
        this.view.btnChannelCondition.text = "This is Android"
        //#endif
    },
    /** onClick defined for btnStringLibrary **/
    AS_Button_ecd5fe65bc63488db69d4ab1a649b00b: function AS_Button_ecd5fe65bc63488db69d4ab1a649b00b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmStringLibrary");
        ntf.navigate();
    },
    /** onClick defined for btnPhoneLibrary **/
    AS_Button_e67e1088f3ec4322a8529a9d7e03d950: function AS_Button_e67e1088f3ec4322a8529a9d7e03d950(eventobject) {
        var self = this;
        return self.navigateToPhoneLibraryForm.call(this);
    },
    /** onClick defined for btnGeoLocationLibrary **/
    AS_Button_b726aff53c0847b0b76a1790e9993955: function AS_Button_b726aff53c0847b0b76a1790e9993955(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmGeoLocationLibrary");
        ntf.navigate();
    },
    /** onClick defined for btnOSLibrary **/
    AS_Button_ac22fff36a434e4eb07b4a294072d2d3: function AS_Button_ac22fff36a434e4eb07b4a294072d2d3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmOSLibrary");
        ntf.navigate();
    },
    /** onClick defined for btnApplicationLibrary **/
    AS_Button_eff7c7b1a52c471998037f3af7cf5270: function AS_Button_eff7c7b1a52c471998037f3af7cf5270(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmApplicationLibrary");
        ntf.navigate();
    },
    /** onClick defined for btnThemesLibrary **/
    AS_Button_f1cdf37c787e4f139bede7d7b2eba958: function AS_Button_f1cdf37c787e4f139bede7d7b2eba958(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmThemesLibrary");
        ntf.navigate();
    },
    /** onClick defined for btnStoreLibrary **/
    AS_Button_d5d003c3d5354e579c9383493844a90f: function AS_Button_d5d003c3d5354e579c9383493844a90f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmStoreLibrary");
        ntf.navigate();
    }
});
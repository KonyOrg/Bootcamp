define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnChangeLocaleToEnglish **/
    AS_Button_fb0b5afb4d924d3eace7466222d3536c: function AS_Button_fb0b5afb4d924d3eace7466222d3536c(eventobject) {
        var self = this;
        return self.changeCurrentLocale.call(this, "en_US");
    },
    /** onClick defined for btnChangeLocaleToFrench **/
    AS_Button_e748f635407a4db2a7173abbcb440c5b: function AS_Button_e748f635407a4db2a7173abbcb440c5b(eventobject) {
        var self = this;
        return self.changeCurrentLocale.call(this, "fr_FR");
    },
    /** onClick defined for btnChangeLocaleToSpanish **/
    AS_Button_e7d5a97ba2094b20a3e4a80e295b45b1: function AS_Button_e7d5a97ba2094b20a3e4a80e295b45b1(eventobject) {
        var self = this;
        return self.changeCurrentLocale.call(this, "es_ES");
    },
    /** onClick defined for btnChangeLocaleToArabic **/
    AS_Button_d334367c78cc40ba889ba144356c2fa8: function AS_Button_d334367c78cc40ba889ba144356c2fa8(eventobject) {
        var self = this;
        return self.changeCurrentLocale.call(this, "ar_AE");
    },
    /** onClick defined for btnBackToFormInternalization **/
    AS_Button_e3cb889083c2437288873679626329e4: function AS_Button_e3cb889083c2437288873679626329e4(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmInternationalization");
        ntf.navigate();
    }
});
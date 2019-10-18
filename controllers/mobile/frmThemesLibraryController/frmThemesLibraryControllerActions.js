define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSkinningGetAllThemes **/
    AS_Button_a77a3ca005564b85b4966cdb98061c48: function AS_Button_a77a3ca005564b85b4966cdb98061c48(eventobject) {
        var self = this;
        alert("Themes: " + JSON.stringify(kony.theme.getAllThemes()));
    },
    /** onClick defined for btnSkinningGetCurrentTheme **/
    AS_Button_d663f413ead64660bb3875c8ca55d427: function AS_Button_d663f413ead64660bb3875c8ca55d427(eventobject) {
        var self = this;
        alert("Current Theme: " + JSON.stringify(kony.theme.getCurrentTheme()));
    },
    /** onClick defined for btnChangeSkin **/
    AS_Button_af3a15dd04a447278dde1808f75fb709: function AS_Button_af3a15dd04a447278dde1808f75fb709(eventobject) {
        var self = this;
        this.view.btnChangeSkin.skin = sknBtn1;
    }
});
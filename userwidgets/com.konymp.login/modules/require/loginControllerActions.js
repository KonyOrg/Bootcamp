define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxTouchId **/
    AS_FlexContainer_id049103309b411b800ffd05d5782a31: function AS_FlexContainer_id049103309b411b800ffd05d5782a31(eventobject) {
        var self = this;
        this.invokeTouchID();
    },
    /** onClick defined for flxFacebook **/
    AS_FlexContainer_f6c79aa37a364a2287937392f238de34: function AS_FlexContainer_f6c79aa37a364a2287937392f238de34(eventobject) {
        var self = this;
        kony.store.setItem("konympLoginInputType", "social");
        this.invokeIdentityService("reusableFacebookLogin2", true);
    },
    /** onClick defined for flxLinkedin **/
    AS_FlexContainer_e21ac3e4f52849bcb8b02d28c0524890: function AS_FlexContainer_e21ac3e4f52849bcb8b02d28c0524890(eventobject) {
        var self = this;
        kony.store.setItem("konympLoginInputType", "social");
        this.invokeIdentityService("reusableLinkedinLogin", true);
    },
    /** onClick defined for flxGoogle **/
    AS_FlexContainer_ef3ef577859a49af89db624fe1c83af2: function AS_FlexContainer_ef3ef577859a49af89db624fe1c83af2(eventobject) {
        var self = this;
        kony.store.setItem("konympLoginInputType", "social");
        this.invokeIdentityService("reusableGoogleLogin");
    },
    /** onClick defined for flxOffice365 **/
    AS_FlexContainer_cd175313d5b74f7283f2b09758803d64: function AS_FlexContainer_cd175313d5b74f7283f2b09758803d64(eventobject) {
        var self = this;
        kony.store.setItem("konympLoginInputType", "social");
        this.invokeIdentityService("reusableOffice365Login", true);
    },
    /** onDone defined for tbxUsername **/
    AS_TextField_c1b1af8ac28e48aba837023b1e655d95: function AS_TextField_c1b1af8ac28e48aba837023b1e655d95(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblUsername);
    },
    /** onDone defined for tbxPassword **/
    AS_TextField_jbd7307f52be43fbaa93cad77afe6be9: function AS_TextField_jbd7307f52be43fbaa93cad77afe6be9(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblPassword);
    },
    /** onClick defined for flxRememberMe **/
    AS_FlexContainer_g327fba124f744f29da7b200fe9495af: function AS_FlexContainer_g327fba124f744f29da7b200fe9495af(eventobject) {
        var self = this;
        this.remembermeSelection();
    },
    /** onClick defined for btnLogin **/
    AS_Button_j0b9f7ba1d214aa2b59b92608b124dc1: function AS_Button_j0b9f7ba1d214aa2b59b92608b124dc1(eventobject) {
        var self = this;
        this.invokeButtonClick();
    },
    /** onClick defined for flxLblUsername **/
    AS_FlexContainer_b5652ceaf0a440cf948a9ba5f4044ac0: function AS_FlexContainer_b5652ceaf0a440cf948a9ba5f4044ac0(eventobject) {
        var self = this;
        if (this.view.lblUsername.top == "6%") {
            this.view.flxLblUsername.isVisible = false;
            this.invokeTouch(this.view.lblUsername, "-1%");
        }
        this.view.forceLayout();
    },
    /** onClick defined for flxLblPassword **/
    AS_FlexContainer_cd0f1b134fc84442938d3b6f12f50d3f: function AS_FlexContainer_cd0f1b134fc84442938d3b6f12f50d3f(eventobject) {
        var self = this;
        if (this.view.lblPassword.top == "23%") {
            this.view.flxLblPassword.isVisible = false;
            this.invokeTouch(this.view.lblPassword, "16%");
        }
        this.view.forceLayout();
    },
    /** onClick defined for btnEnable **/
    AS_Button_h0fc84d393be4c33b072deda69065f01: function AS_Button_h0fc84d393be4c33b072deda69065f01(eventobject) {
        var self = this;
        this.touchEnableAction();
    },
    /** onClick defined for btnCancel **/
    AS_Button_b62778af191247ae9cf1c164d8f9f9a7: function AS_Button_b62778af191247ae9cf1c164d8f9f9a7(eventobject) {
        var self = this;
        this.touchCancelAction();
    },
    /** onClick defined for btnTouchCancel **/
    AS_Button_d21017fdf0d44106b5378307938bfe90: function AS_Button_d21017fdf0d44106b5378307938bfe90(eventobject) {
        var self = this;
        this.cancelTouchID();
    },
    /** onClick defined for flxClose **/
    AS_FlexContainer_ee62f1b0671b4193ad7369cbf9f2429e: function AS_FlexContainer_ee62f1b0671b4193ad7369cbf9f2429e(eventobject) {
        var self = this;
        this.view.flxIdentity.isVisible = false;
        this.view.brwsrIdentity.htmlString = "<html>Please wait !!</html>";
    }
});
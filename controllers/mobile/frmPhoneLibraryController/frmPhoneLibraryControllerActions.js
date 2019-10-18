define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnPhoneopenEmail **/
    AS_Button_c07aa2b386ed43f09bcecea3fab9f951: function AS_Button_c07aa2b386ed43f09bcecea3fab9f951(eventobject) {
        var self = this;
        var to = ["training@kony.com"];
        var cc = ["myself@gmail.com"];
        var bcc = ["mymanager@gmail.com"];
        var sub = "Welcome to Kony training!!!";
        var msgbody = "This is a Bootcamp training";
        kony.phone.openEmail(to, cc, bcc, sub, msgbody, false);
    }
});
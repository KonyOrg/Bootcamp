define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnStringContainsCharacters **/
    AS_Button_dc883ef942914941b9d5dadc496205a8: function AS_Button_dc883ef942914941b9d5dadc496205a8(eventobject) {
        var self = this;
        alert("Are the characrers | and - available in the string abdcdADV: " + kony.string.containsChars("abdcdADV", ["|", "-"]));
    },
    /** onClick defined for btnStringisNumeric **/
    AS_Button_c95ea3896917463e92d95d2fb5f18ab2: function AS_Button_c95ea3896917463e92d95d2fb5f18ab2(eventobject) {
        var self = this;
        alert("Is 10.34 a numeric value: " + kony.string.isNumeric("10.34"));
    },
    /** onClick defined for btnStringtrim **/
    AS_Button_c5f5bc0103fe41b4833cc2c4cf38bf1a: function AS_Button_c5f5bc0103fe41b4833cc2c4cf38bf1a(eventobject) {
        var self = this;
        alert("Trimming the string removes the trailing spaces: " + kony.string.trim("    Hello JS user    "));
    },
    /** onClick defined for btnStringisValidEmail **/
    AS_Button_f38f8165c0554644850eb0fc27d32f60: function AS_Button_f38f8165c0554644850eb0fc27d32f60(eventobject) {
        var self = this;
        alert("Is abcd@abc.com a valid email? " + kony.string.isValidEmail("abcd@abc.com"));
    }
});
define({ 
  //Type your controller code here 
  changeCurrentLocale : function (locale) {
    if (kony.string.equalsIgnoreCase("fr_FR", locale)) {
      kony.i18n.setCurrentLocaleAsync("fr_FR",this.changeLocaleSuccessCallback,this.changeLocaleFailureCallback,{"type":"current"});          
    } else if (kony.string.equalsIgnoreCase("es_ES", locale)) {
      kony.i18n.setCurrentLocaleAsync("es_ES",this.changeLocaleSuccessCallback,this.changeLocaleFailureCallback,{"type":"current"});          
    } else if (kony.string.equalsIgnoreCase("en_US", locale)) {
      kony.i18n.setCurrentLocaleAsync("en_US",this.changeLocaleSuccessCallback,this.changeLocaleFailureCallback,{"type":"current"});          
    } else if (kony.string.equalsIgnoreCase("ar_AE", locale)) {
      kony.i18n.setCurrentLocaleAsync("ar_AE",this.changeLocaleSuccessCallback,this.changeLocaleFailureCallback,{"type":"current"});          
    }
  },
  
  changeLocaleSuccessCallback : function (oldLocale, newLocale, info) {
    kony.print("In changeLocaleSuccessCallback: oldLocale: "+oldLocale+" newLocale: "+newLocale+" info: "+info);
  },
  
  changeLocaleFailureCallback : function (errCode, errMsg, info) {
    kony.print("In changeLocaleFailureCallback: errCode: "+errCode+" errMsg: "+errMsg+" info: "+info);
  }
});
define({ 

  //Type your controller code here 
  setDataToSegAccounts : function () {
    var segAccountsData = [
      {"lblAccountName":"Checking Account","lblAccountBalance":"$ 15000"},
      {"lblAccountName":"Saving Account","lblAccountBalance":"$ 25000"},
      {"lblAccountName":"Loan Account","lblAccountBalance":"$ 35000"},
      {"lblAccountName":"External Account","lblAccountBalance":"$ 45000"},
      {"lblAccountName":"Rewards Account","lblAccountBalance":"$ 55000"}
    ];
    this.view.segAccounts.widgetDataMap = {"lblAccountName":"lblAccountName",
                                           "lblAccountBalance":"lblAccountBalance"};
    this.view.segAccounts.setData(segAccountsData);
  },

  setDataToSegAccountsUsingWidgetDataMap : function () {
    var segAccountsData = [
      {"accountName":"Checking Account","accountBalance":"$ 15000","accountID":1234},
      {"accountName":"Saving Account","accountBalance":"$ 25000","accountID":9944},
      {"accountName":"Loan Account","accountBalance":"$ 35000","accountID":5544},
      {"accountName":"External Account","accountBalance":"$ 45000","accountID":3322},
      {"accountName":"Rewards Account","accountBalance":"$ 55000","accountID":4433}
    ];
    this.view.segAccounts.widgetDataMap = {"lblAccountName":"accountName",
                                           "lblAccountBalance":"accountBalance"};
    this.view.segAccounts.setData(segAccountsData);
  },

  setDataWithSectionsToSegAccounts : function () {
    var segAccountsData = [
      [
        "Checking accounts",
        [	
          {"accountName":"Checking Account 1","accountBalance":"$ 15000","accountID":1234},
          {"accountName":"Checking Account 2","accountBalance":"$ 25000","accountID":2233}
        ]
      ],
      [
        "Saving accounts",
        [
          {"accountName":"Saving Account 1","accountBalance":"$ 35000","accountID":9944},
          {"accountName":"Saving Account 2","accountBalance":"$ 45000","accountID":3344}
        ]
      ]
    ];
    this.view.segAccounts.widgetDataMap = {"lblAccountName":"accountName","lblAccountBalance":"accountBalance"};
    this.view.segAccounts.setData(segAccountsData);
  },

  setDataWithSectionsUsingTemplatesToSegAccounts : function () {
    var segAccountsData = [
      [
        {"accountType":"Checking accounts",template:"flexSegHeader2"},
        [	
          {"accountName":"Checking Account 1","accountBalance":"$ 15000", "accountID":1234,template:"flexSegRow2"},
          {"accountName":"Checking Account 2","accountBalance":"$ 25000", "accountID":2233,template:"flexSegRow2"}
        ]
      ],
      [
        {"accountType":"Saving accounts",template:"flexSegHeader2"},
        [
          {"accountName":"Saving Account 1","accountBalance":"$ 35000","accountID":9944, metainfo:{clickable:false,skin:sknSegRowDisable},template:"flexSegRow2"},
          {"accountName":"Saving Account 2","accountBalance":"$ 45000","accountID":3344, template:"flexSegRow2"}
        ]
      ]
    ];
    this.view.segAccounts.widgetDataMap = {"lblAccountsType":"accountType","lblAccountName":"accountName", "lblAccountBalance":"accountBalance"};
    this.view.segAccounts.setData(segAccountsData);
  }


});
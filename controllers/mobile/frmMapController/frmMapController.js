define({ 

  //Type your controller code here 
  mapLocations : function () {
    locData = [
      {lat:"43.47591", lon:"-80.53964", name:"Fred's Q",desc:"best BBQ in town!", image:"pinb.png", 
       meta:{color:"green", label :"A" }, address:"123 Sesame St.", city:"New York", phone:"212-555-1212"},
      {lat:"43.4643", lon:"-80.51009", name:"Bob's Veggies",desc:"#1 rated farmers market!", image:"pinb.png", 
       meta:{color:"green", label :"B" }, address:"100 Wall St.", city:"New York", phone:"212-555-1313" }];
    this.view.mapLocations.locationData=locData;
  },

  navigateToAPin : function () {
    this.view.mapLocations.navigateTo(1, true);
  },

  navigateToAGivenLocation : function () {
    this.view.mapLocations.navigateToLocation(
      {lat:"32.876068", lon:"-96.898529", name:"Sam's Chai Point", desc:"#1 rated Chai Point", showcallout:true, 
       image:"pinb.png", meta:{color:"red",label :"A"}, 
       calloutData: {name:"Sam's Chai Point", address:"100 Wall St.", 	phone:"212-555-1313"}}, 
      true, true);
  }
});
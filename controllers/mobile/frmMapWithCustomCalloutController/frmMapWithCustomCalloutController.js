define({ 

  //Type your controller code here 
  mapLocations : function () {
    this.view.mapLocationsWithCallout.widgetDataMapForCallout = {lblName:"name",lblAddress:"address", lblPhone:"phone"};

    locData = [
      {lat:"43.47591", lon:"-80.53964", name:"Fred's BBQ",desc:"Best BBQ in town!", image:"pinb.png", 
       meta:{color:"green", label :"A" }, address:"9378 N Central Expy, Dallas  TX", city:"New York", phone:"212-555-1212",
       calloutData: {name:"Fred's BBQ", address:"9378 N Central Expy, Dallas  TX", phone:"212-555-1212"}},
      {lat:"43.4643", lon:"-80.51009", name:"Bob's Veggies",desc:"#1 rated farmers market!", image:"pinb.png", 
       meta:{color:"green", label :"B" }, address:"100 Wall St.", city:"New York", phone:"212-555-1313",
       calloutData: {name:"Bob's Veggies", address:"100 Wall St.", phone:"212-555-1313"}}];

    this.view.mapLocationsWithCallout.locationData=locData;
  },

  getLocation : function () {
    kony.print("Entering into getlocation");
    kony.location.getCurrentPosition(this.gpsworked, this.gpserror, {enableHighAccuracy:true, timeout:25000, maximumAge:2000});
    kony.print("Exiting out of getlocation");    
  },

  gpsworked:function(location) {
    kony.print("gpsworked: retrieved location is: "+JSON.stringify(location));
    this.getDirections(location);
  },

  gpserror:function(err){
    alert("gpserror: error occured while retriving the location: "+JSON.stringify(err));
  },

  getDirections : function (location) {
    var toPinLongitude = "25.1972";//"78.3428";
    var toPinLatitude = "55.2744";//"17.5169";
    kony.application.openURL("https://maps.google.com/?saddr="+location.coords.latitude+","+
                             location.coords.longitude+"&daddr="+toPinLatitude+","+toPinLongitude);
  }
});
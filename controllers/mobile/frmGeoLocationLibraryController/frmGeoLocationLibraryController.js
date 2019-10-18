define({ 

 //Type your controller code here 
  
  getlocation:function(){
    kony.print("Entering into getlocation");
    kony.location.getCurrentPosition(this.gpsworked, this.gpserror, 
                                     {enableHighAccuracy:true, timeout:25000, maximumAge:2000});
    kony.print("Exiting out of getlocation");    
  },
  
  gpsworked:function(location) {
    alert("gpsworked: retrieved location is: "+JSON.stringify(location));
  },
  
  gpserror:function(err){
    alert("gpserror: error occured while retriving the location: "+JSON.stringify(err));
  }

 });
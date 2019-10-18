define({ 

  //Type your controller code here 
  /*
   * This function is responsible to add the car into 
   * the existng data in the segment
   */
  addCar : function () {
    kony.print ("Entering into addCar");
    var make=this.view.tbxCarMake.text;
    var model=this.view.tbxCarModel.text;
    if (make !== null && make !== "" && model !== null && make !== "") {
      var cars=this.view.segCars.data;
      if (cars !== null && cars.length !== null) {
        kony.print (JSON.stringify(cars));
        var indexOfMake=-1;
        for(var i=0;i<cars.length;i++) {
          if (kony.string.equalsIgnoreCase(make,cars[i][0].lblSectionTitle)) {
            indexOfMake=i;
            break;
          }
        }
        if (-1 != indexOfMake) {
          kony.print("User entered make is already available in the existing cars list");
          kony.print("Adding the new model into the existing make at index: "+i);
          this.view.segCars.addDataAt({"lblTitle":model}, 0, indexOfMake);
        } else {
          kony.print("User entered make is unavailable in the existing cars list");
          kony.print("Adding the new make and model into the new section");
          this.view.segCars.addSectionAt([[{"lblSectionTitle":make},[{"lblTitle":model}]]], 0);
        }
      } else {
        this.view.segCars.setData([[{"lblSectionTitle":make},[{"lblTitle":model}]]]);
      }
    } else {
      alert ("Please enter valid Make and Model.");
    }
    kony.print ("Exiting out of addCar");    
  },

  /*
   * This function is responsible to remove cars from 
   * the existng data in the segment
   */
  removeCar : function () {
    kony.print ("Entering into removeCar");
    kony.print ("Removing the data at index: "+JSON.stringify(this.view.segCars.selectedRowIndex));
    var sectionIndex=this.view.segCars.selectedRowIndex[0];
    var rowIndex=this.view.segCars.selectedRowIndex[1];
    if (this.view.segCars.data[sectionIndex][1].length === 1) {
      this.view.segCars.removeSectionAt(sectionIndex);
    } else {
      this.view.segCars.removeAt(rowIndex, sectionIndex);
    }
    kony.print ("Exiting out of removeCar");    
  }
});
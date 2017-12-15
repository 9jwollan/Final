const Device = require("./Device.js")
function ChargingDock(){

//Instance variables
this.ports = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
this.leds = ["red", "red", "red", "red", "red", "red", "red", "red"];


//Instance Fucntions
    this.plug = function(dvc){

        for(let p=0; this.ports.length < 8; p++){
          if(this.led[p]="red"){
            this.ports[p]=dvc
            this.leds[p]= "yellow"
          }



        }
    };

    this.unplug = function(dvcIdx){
        if(this.leds[dvcIdx] == "yellow" || this.leds[dvcIdx] == "green")        this.ports[dvcIdx] = "undefined";
        this.leds[dvcIdx] = "red"
        return this.ports[dvcIdx];
}



    };

    this.chargeAll = function(min){
for(p = 0; p < this.ports.length; p++){
if (this.leds[p] == "yellow" || this.leds [p] == "green")
this.ports[p].charge(min)
}
if(this.ports[p].juice >= .99){
this.leds[p] = "green"
}

}

//defines the testing code

  function main(){



  function testdoc(){
      let cd = new ChargingDock();

      let d1 = new Device("phone",3000,10000);
      let d2 = new Device("laptop",3000,15000);
      let d3 = new Device("laptop",5000,15000);
      let d4 = new Device("tablet",3000,15000);

      d1.use(90);
      d2.use(120);
      d3.use(90);
      d4.use(240);

      cd.plug(d1);
      cd.plug(d2);
      cd.plug(d3);
      cd.plug(d4);

      cd.chargeAll(60);

      cd.unplug(0);
      cd.unplug(1);

  }



}

//runs the main code
main();

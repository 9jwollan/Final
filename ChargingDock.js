//defines how all charging stations work.
function ChargingDock(){

//Instance variables
    this.ports; ["undefined" "undefined" "undefined" "undefined" "undefined" "undefined" "undefined" "undefined"]
    this.leds; ["red" "red" "red" "red" "red" "red" "red" "red"]


//Instance Fucntions
    this.plug = function(dvc){

        for(let p=0 this.ports.length < 8 p++;){
          if(this.led[p]="red"){
            this.ports[p]=dvc
            this.leds[p]= "yellow"
          }



        }
    };

    this.unplug = function(dvcIdx){

    };

    this.chargeAll = function(min){

    };


}

//defines the testing code
function main(){}

//runs the main code
main();

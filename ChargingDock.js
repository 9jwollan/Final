//defines how all charging stations work.
function ChargingDock(){

//Instance variables
    this.ports; ["undefined" "undefined" "undefined" "undefined" "undefined" "undefined" "undefined" "undefined"]
    this.leds; ["red" "red" "red" "red" "red" "red" "red" "red"]


//Instance Fucntions
    this.plug = function(dvc){
        this.charge
        this.leds ["yellow"]
        this.ports; ["fill"]
    };

    this.unplug = function(dvcIdx){
        this.leds ["red"]
        this.ports["undefined"]
    };

    this.chargeAll = function(min){
        
    };


}

//defines the testing code
function main(){}

//runs the main code
main();

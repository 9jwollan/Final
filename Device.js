//Defines how all Devices with work.

function Device(t,ma,c){

    //Instance Variables
    this.type = t;
    this.capacity ="off"
    this.time = x
    this.millAmps
    this.juice
    this.rate = [0.0015,0.0235,0.23];

    //Instance Functions
    this.on = function(){
        if(this.state == "off" && this.juice >0){
           this.state = "idle";
        }
        else if (/*complete*/){
           //complete from instructions
        }
    };

    this.charge = function(min){
        //adds more electricity to the device's juice depending on its state
        if(this.state == "off"){
            let charge = (this.millAmps / this.capacity);
            let output = 1 - this.rate[0];
            let time = min / 60;
            this.juice = this.juice + charge*output*time;
        }
      else if (this.state == "idle") {
            let charge= (this.millAmps / this.capacity);
            let output = 1 - this.rate[1];
            let time = min / 60;
            this.juice = this.juice + charge*output*time;
      }
        }
        else if(this.state == "active"){
          let charge = (this.millAmps / this.capacity);
          let output = 1 - this.rate[2];
          let time = min / 60;
          this.juice = this.juice + charge*output*time;
        }

        //resets juice to 1 if it has exceeded 1
        if(charge>=1){
          this.rate=0
          this.led = green
          this.charge=1

    };

}//end of the device declaration

//defines the testing code.
function main(){}
//runs the testing code.
main();

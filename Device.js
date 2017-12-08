//Defines how all Devices with work.

function Device(t,ma,c){

    //Instance Variables
    this.type = t;
    this.capacity = c;
    this.state = "off"
    this.millAmps = m;
    this.juice = j;
    this.rate = [0.0015,0.0235,0.23];

    //Instance Functions
    this.on = function(){
        if(this.state == "off" && this.juice >0){
           this.state = "idle";
        }
        else if (this.state == "off" && this.juice <0
      ){
        this.state = "off";

        }
        this.wake = function(){}
          if(this.state == "off" || this.state == "idle")
          this.state = "active"

        }
    };

    this.charge = function(min){
      let time = min / 60;
      let charge = (this.millAmps / this.capacity);
        //adds more electricity to the device's juice depending on its state
        if(this.state == "off"){
            let output = 1 - this.rate[0];
            this.juice = this.juice + charge*output*time;
        }
      else if (this.state == "idle") {
            let output = 1 - this.rate[1];
            this.juice = this.juice + charge*output*time;
      }
        else if(this.state == "active"){
          let output = 1 - this.rate[2];

          this.juice = this.juice + charge*output*time;
        }

        //resets juice to 1 if it has exceeded 1
        if(charge>=1){
          this.rate=0
          this.led = green
          this.charge=1

    };

}//end of the device declaration

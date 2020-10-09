function SwitchButton() {
    this.status = true;
    this.lamp = ElectricLamp;
    this.getStatus = function () {
        return this.status;
    };
    this.setStatus = function (value) {
        this.status = value;
    };

    this.ConecttoLamp = function (lamp) {
        this.lamp = lamp;
    };
    this.Switch = function () {
        if (this.getStatus()) {
            this.setStatus(false);
            this.TurnOn();
        } else {
            this.setStatus(true);
            this.TurnOff();
        }
    };
    this.TurnOn = function () {
        this.lamp.turnOn();
    };
    this.TurnOff = function () {
        this.lamp.turnOff();
    }
}

function ElectricLamp() {
    this.status = true;
    this.getStatus = function () {
        return this.status;
    };
    this.setStatus = function (value) {
        this.status = value;
    };

    this.turnOn = function () {
        this.setStatus(true);
        this.ElecLamp();
    };
    this.turnOff = function () {
        this.setStatus(false);
        this.ElecLamp();
    };
    this.ElecLamp = function () {
        if (this.getStatus()){
            document.getElementById("den1").src="Anh/lightOff.gif";
        } else {
            document.getElementById('den1').src="Anh/lightOn.gif" ;
        }
    };
}
let Lamp = new ElectricLamp();
let switchbutton = new SwitchButton();
switchbutton.ConecttoLamp(Lamp);
switchbutton.Switch();
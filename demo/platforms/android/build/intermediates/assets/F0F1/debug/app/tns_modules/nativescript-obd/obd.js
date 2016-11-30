"use strict";
var OBD = (function () {
    function OBD() {
        this.bluetoothAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();
        console.log(this.bluetoothAdapter.isEnabled());
    }
    OBD.prototype.read = function () {
    };
    return OBD;
}());
exports.OBD = OBD;

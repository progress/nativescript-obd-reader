"use strict";
var OBDReader = (function () {
    function OBDReader() {
        this.bluetoothAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();
        console.log(this.bluetoothAdapter.isEnabled());
    }
    OBDReader.prototype.read = function () {
    };
    return OBDReader;
}());
exports.OBDReader = OBDReader;

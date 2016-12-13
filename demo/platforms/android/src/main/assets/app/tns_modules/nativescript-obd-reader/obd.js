"use strict";
var OBDReader = (function () {
    function OBDReader(app) {
        this.bluetoothAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();
        if (!this.bluetoothAdapter.isEnabled()) {
            console.log("OBDReader: Bluetooth is not enabled.");
            return;
        }
        var ObdGatewayService = com.github.pires.obd.reader.io.ObdGatewayService;
        this.service = new ObdGatewayService(app.android.foregroundActivity);
    }
    OBDReader.prototype.addProgressListener = function (callback) {
        var ObdProgressListener = com.github.pires.obd.reader.io.ObdProgressListener;
        console.log(this.service.addProgressListener);
        this.service.addProgressListener(new ObdProgressListener({
            stateUpdate: function (job) {
                callback(job);
            }
        }));
    };
    OBDReader.prototype.startService = function (remoteDevice) {
        var BOND_BONDED = android.bluetooth.BluetoothDevice.BOND_BONDED;
        try {
            if (typeof remoteDevice !== 'undefined') {
                this.service.startService(remoteDevice);
            }
            else {
                var devices = this.bluetoothAdapter.getBondedDevices().toArray();
                for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                    var device = devices_1[_i];
                    if (device.getBondState() === BOND_BONDED) {
                        this.service.startService(device.getAddress());
                        break;
                    }
                }
            }
        }
        catch (ex) {
            console.log("OBDError: Error Starting the Service.");
        }
    };
    OBDReader.prototype.stopService = function () {
        this.service.stopService();
    };
    return OBDReader;
}());
exports.OBDReader = OBDReader;

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
        try {
            if (typeof remoteDevice !== 'undefined') {
                this.service.startService(remoteDevice);
            }
            else {
                var devices = this.bluetoothAdapter.getBondedDevices().toArray();
                if (devices.length) {
                    this.service.startService(devices[0].getAddress());
                }
            }
        }
        catch (ex) {
            console.log("OBDError: Error Starting the Service.");
        }
    };
    return OBDReader;
}());
exports.OBDReader = OBDReader;

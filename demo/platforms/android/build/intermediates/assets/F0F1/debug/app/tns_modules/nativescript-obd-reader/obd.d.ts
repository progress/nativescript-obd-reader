declare module "nativescript-obd-reader" {
    export class OBDReader {
        constructor();
        addProgressListener(callback:any);
        startService(remoteDevice);
        stopService();
    }
}

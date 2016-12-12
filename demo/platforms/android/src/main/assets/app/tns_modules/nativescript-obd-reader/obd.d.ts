declare module "nativescript-obd-reader" {
    export class OBDReader {
        constructor();
        startService(remoteDevice);
        addProgressListener(callback:any);
    }
}

declare var com: any;
declare var java: any;
declare var android: any;


export class OBDReader {
   private bluetoothAdapter: any;

   private listener:any;

   private service:any;

   private serviceConn:any;

   constructor(context){
       this.bluetoothAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();

       if (!this.bluetoothAdapter.isEnabled()){
          console.log("OBDReader: Bluetooth is not enabled.");
          return;
       }

      let ObdGatewayService = com.github.pires.obd.reader.io.ObdGatewayService;

      this.service = new ObdGatewayService();
   }

   public addProgressListener(callback:any){
     let ObdProgressListener = com.github.pires.obd.reader.io.ObdProgressListener;
     this.service.addListener(new ObdProgressListener({
         stateUpdate: (job)=>{
             callback(job);
         }
     }));
   }

   public startService(remoteDevice){
      try {
        if (typeof remoteDevice !== 'undefined') {
          this.service.startService(remoteDevice);
        }
        else {
          var devices = this.bluetoothAdapter.getBondedDevices().toArray();
          if (devices.length){
            this.service.startService(devices[0].getAddress());
          }
        }
      } catch (ex){
          console.log("OBDError: Error Starting the Service.");
      }
   }
}

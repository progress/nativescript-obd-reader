declare var com: any;
declare var java: any;
declare var android: any;


export class OBDReader {
   private bluetoothAdapter: any;

   private listener:any;

   private service:any;

   private serviceConn:any;

   constructor(app){
       this.bluetoothAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();

       if (!this.bluetoothAdapter.isEnabled()){
          console.log("OBDReader: Bluetooth is not enabled.");
          return;
       }

      let ObdGatewayService = com.github.pires.obd.reader.io.ObdGatewayService;

      this.service = new ObdGatewayService(app.android.foregroundActivity);
   }

   public addProgressListener(callback:any){
     let ObdProgressListener = com.github.pires.obd.reader.io.ObdProgressListener;
     console.log(this.service.addProgressListener);
     this.service.addProgressListener(new ObdProgressListener({
         stateUpdate: (job)=>{
             callback(job);
         }
     }));
   }

   public startService(remoteDevice){
     let BOND_BONDED = android.bluetooth.BluetoothDevice.BOND_BONDED;

      try {
        if (typeof remoteDevice !== 'undefined') {
          this.service.startService(remoteDevice);
        }
        else {
          let devices = this.bluetoothAdapter.getBondedDevices().toArray();

          for (var device of devices){
            if (device.getBondState() === BOND_BONDED){
              this.service.startService(device.getAddress());
              break;
            }
          }
        }
      } catch (ex){
          console.log("OBDError: Error Starting the Service.");
      }
   }

   public stopService(){
     this.service.stopService();
   }
}

declare var com: any;
declare var java: any;
declare var android: any;


export class OBDReader {

   private bluetoothAdapter: any;

   private service:any;

   private serviceConn:any;

   constructor(context){
       this.bluetoothAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();

       if (!this.bluetoothAdapter.isEnabled()){
          console.log("OBDReader: Bluetooth is not enabled.");
          return;
       }

      //  this.serviceConn = android.content.ServiceConnection({
      //       onServiceConnected: function(className, binder){
      //           console.log(className);
      //       },
      //       onServiceDisconnected:function(className){
      //
      //       }
      //  });
      //
      //
      // let BIND_AUTO_CREATE = android.content.Context.BIND_AUTO_CREATE;
      //
      // console.log(BIND_AUTO_CREATE);
      //
      let ObdGatewayService = com.github.pires.obd.reader.io.ObdGatewayService;

      this.service = new ObdGatewayService();

      // let serviceIntent = android.content.Intent(context, ObdGatewayService.class)
      //
      // android.content.ContextWrapper.bindService(serviceIntent, this.serviceConn, BIND_AUTO_CREATE);
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

   public read(){

   }
}

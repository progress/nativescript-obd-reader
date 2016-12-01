declare var com: any;
declare var java: any;
declare var android: any;

export class OBDReader {

   private bluetoothAdapter: any;

   constructor(){
       this.bluetoothAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();
       console.log(this.bluetoothAdapter.isEnabled());
   }

   public read(){

   }
}

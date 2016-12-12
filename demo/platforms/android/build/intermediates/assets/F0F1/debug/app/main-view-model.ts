import frameModule = require('ui/frame');

import {Observable} from 'data/observable';
import {ObservableArray} from "data/observable-array";

import app = require("application");

var obdReaderModule = require("nativescript-obd-reader");

export class MainViewModel extends Observable {

  constructor() {
    super();

    let that = this;

    let obdReader = new obdReaderModule.OBDReader(app.android.context);

    objReader.addProgressListener((job)=>{
        console.log(job);
    });

    obdReader.startService();
  }
}

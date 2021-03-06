import frameModule = require('ui/frame');

import {Observable} from 'data/observable';
import {ObservableArray} from "data/observable-array";

import app = require("application");

var obdReaderModule = require("nativescript-obd-reader");

export interface Item {
    name : string,
    text : string
}

export class MainViewModel extends Observable {

  public stats:ObservableArray<Item>;
  private reader:any;

  constructor() {
    super();

    this.stats = new ObservableArray([]);

    let that = this;

    var items = [];

    this.reader = new obdReaderModule.OBDReader(app);

    this.reader.addProgressListener((job)=>{
        if (job){
          that.stats.push({
            name : job.getCommand().getName(),
            text: job.getCommand().getFormattedResult()
          });
        }
        else{
          console.log(job);
        }
    });
  }

  public start(){
    this.reader.startService();
  }

  public stop(){
    this.reader.stopService();
  }
}

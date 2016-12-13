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

  private _items:Array<Item>;
  private reader:any;

  constructor() {
    super();

    let that = this;

    var items = [];

    this.reader = new obdReaderModule.OBDReader(app);

    this.reader.addProgressListener((job)=>{
        if (job){
          items.push({
            name : job.getCommand().getName(),
            text: job.getCommand().getFormattedResult()
          });

          console.log(items);

          that.set("items", items);
        }
        else{
          console.log(job);
        }

    });
  }

  public start(){
    this.reader.startService();
  }

  get items() {
    return this._items;
  }

  set items(value: Array<Item>) {
    this.notifyPropertyChange("items", value);
  }
}

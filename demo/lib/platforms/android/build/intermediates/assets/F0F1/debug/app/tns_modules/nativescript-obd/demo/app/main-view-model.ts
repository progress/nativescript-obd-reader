import frameModule = require('ui/frame');

import {Observable} from 'data/observable';
import {ObservableArray} from "data/observable-array";

var obdModule = require("nativescript-obd");

export class MainViewModel extends Observable {

  private _invengo:any;

  private _counter: number;
  private _tag: string;
  private database:any;


  constructor() {
    super();

    let that = this;

  }
}

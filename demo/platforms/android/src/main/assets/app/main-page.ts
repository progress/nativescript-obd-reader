import frameModule = require('ui/frame');

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { MainViewModel } from './main-view-model';

var obdReaderModule = require("nativescript-obd-reader");


// Event handler for Page "navigatingTo" event attached in main-page.xml
export function pageLoaded(args: EventData) {
  // Get the event sender
  let page = <Page>args.object;

  var viewModel = new MainViewModel();

  page.bindingContext = viewModel;
}

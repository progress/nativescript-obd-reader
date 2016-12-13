# nativescript-obd-reader

NativeScript OBDII Reader Plugin.

The plugin is based on `obd-java-api` and includes the android from: [android-obd-reader](https://github.com/pires/android-obd-reader)

## Installation
To install type

```
tns plugin add nativescript-obd-reader

```

If you're using TypeScript and wish to make use of the type definitions for this plugin, add the following line to your project's **references.d.ts** file:

```
  /// <reference path="./node_modules/nativescript-obd-reader/obd.d.ts" />
```

Without the above line included, your TypeScript compiler may throw errors during the build.


## Methods

- reader.startService()
- reader.addListener(callback)

## Usage

Including the Plugin in Your Project

    var obdReaderModule = require("nativescript-obd-reader");


The plugin interface is simple. You have to do the following:

* Initialize the plugin listener
* Start the service.

The most simplest usage of the plugin:

```
  let reader = new obdReaderModule.OBDReader(app.android.context);

  reader.addProgressListener((job)=>{
      console.log(job);
  });

  reader.startService();
```
## Platform

Android + Bluetooth Elm327 compatible OBD reader

## License
This plugin is licensed under the Apache 2.0 by Progress Software

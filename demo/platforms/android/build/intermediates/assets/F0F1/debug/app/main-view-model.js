"use strict";
var observable_1 = require('data/observable');
var obdReaderModule = require("nativescript-obd-reader");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        var that = this;
        var obdReader = new obdReaderModule.OBDReader();
    }
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map
"use strict";
var observable_1 = require('data/observable');
var observable_array_1 = require("data/observable-array");
var app = require("application");
var obdReaderModule = require("nativescript-obd-reader");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        this.stats = new observable_array_1.ObservableArray([]);
        var that = this;
        var items = [];
        this.reader = new obdReaderModule.OBDReader(app);
        this.reader.addProgressListener(function (job) {
            if (job) {
                that.stats.push({
                    name: job.getCommand().getName(),
                    text: job.getCommand().getFormattedResult()
                });
            }
            else {
                console.log(job);
            }
        });
    }
    MainViewModel.prototype.start = function () {
        this.reader.startService();
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map
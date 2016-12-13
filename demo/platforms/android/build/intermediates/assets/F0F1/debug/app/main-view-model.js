"use strict";
var observable_1 = require('data/observable');
var app = require("application");
var obdReaderModule = require("nativescript-obd-reader");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        var that = this;
        var items = [];
        this.reader = new obdReaderModule.OBDReader(app);
        this.reader.addProgressListener(function (job) {
            if (job) {
                items.push({
                    name: job.getCommand().getName(),
                    text: job.getCommand().getFormattedResult()
                });
                console.log(items);
                that.set("items", items);
            }
            else {
                console.log(job);
            }
        });
    }
    MainViewModel.prototype.start = function () {
        this.reader.startService();
    };
    Object.defineProperty(MainViewModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this.notifyPropertyChange("items", value);
        },
        enumerable: true,
        configurable: true
    });
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map
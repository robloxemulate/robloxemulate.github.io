const window = self;
!function() {
    "use strict";
    var e = {}
      , t = {};
    function o(r) {
        var n = t[r];
        if (void 0 !== n)
            return n.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r](a, a.exports, o),
        a.exports
    }
    o.rv = function() {
        return "1.2.8"
    }
    ,
    o.ruid = "bundler=rspack@1.2.8";
    var r = !1;
    globalThis.onmessage = function(e) {
        !r && (setInterval(function() {
            globalThis.postMessage({})
        }, "number" == typeof e.data ? e.data : 2e4),
        r = !0)
    }
}(),
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("PageHeartbeatWorker");
//# debugId=76eefea7-94dc-4509-b790-a4db9bb6a66b
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/pageHeartbeatWorker-2dddf586759770ec.js.map

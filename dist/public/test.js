"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FetchFunction(method, credentials, body) {
    function FetchSet() {
        var token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("CSRF-Token", token);
        return myHeaders;
    }
    var Fetch = /** @class */ (function () {
        function Fetch(method, credentials, body) {
            this.method = method;
            this.credentials = credentials;
            this.headers = FetchSet();
            this.body = body;
        }
        return Fetch;
    }());
    var fetchObj = new Fetch(method, credentials, body);
    return fetchObj;
}
exports.default = FetchFunction;
//# sourceMappingURL=test.js.map
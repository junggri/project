"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = __importDefault(require("./register"));
var login_1 = __importDefault(require("./login"));
var estimate_1 = __importDefault(require("./estimate"));
var get_esimate_1 = __importDefault(require("./get_esimate"));
var mypqge_1 = __importDefault(require("./mypqge"));
var modified_estimate_1 = __importDefault(require("./modified_estimate"));
var findUserData_1 = __importDefault(require("./findUserData"));
var reset_1 = __importDefault(require("./reset"));
var oauth_1 = __importDefault(require("./oauth"));
var provide_1 = __importDefault(require("./provide"));
var p_index_1 = __importDefault(require("./p_index"));
var p_findAllRegister_1 = __importDefault(require("./p_findAllRegister"));
var p_showBeforeEstimate_1 = __importDefault(require("./p_showBeforeEstimate"));
var LoginmyBtn = document.querySelector(".nb-right_isLogined");
var mainName = document.querySelector(".nb-left-name");
var path = window.location.pathname;
var navigationBox = document.querySelector(".nb-navigation");
var logout = document.querySelector(".nb-profile-logout");
var logoutForm = document.querySelector(".logout-form");
var body = document.querySelector("#app");
if (window.location.href.includes("#")) {
    window.location.href = window.location.href.slice(0, -1);
}
if (path === "/provide/index") {
    p_index_1.default();
}
if (path === "/provide/findAllRegister") {
    p_findAllRegister_1.default();
}
if (path === "/provide/sympton_estimate") {
    p_showBeforeEstimate_1.default();
}
if (path === "/api/oauth_register") {
    oauth_1.default();
    register_1.default();
}
if (path.split("/")[2] === "reset") {
    reset_1.default();
}
if (path === "/api/find_user_email") {
    findUserData_1.default();
}
if (path === "/api/find_user_pwd") {
    findUserData_1.default();
}
if (path === "/api/login") {
    login_1.default();
}
if (path === "/api/register_previous") {
    register_1.default();
}
if (path === "/api/register/common") {
    register_1.default();
}
if (path === "/api/register/provide") {
    provide_1.default();
}
if (path === "/estimate") {
    estimate_1.default();
}
if (path === "/api/mypage") {
    mypqge_1.default();
}
if (path.split("/")[2] === "modified_estimate") {
    modified_estimate_1.default();
}
if (path === "/api/get_estimate") {
    get_esimate_1.default();
}
if (path === "/") {
    index();
}
if (LoginmyBtn !== null) {
    LoginmyBtn.addEventListener("click", function (e) {
        navigationBox.style.display = navigationBox.style.display === "" ? "block" : "";
    });
}
if (mainName !== null) {
    mainName.addEventListener("click", function () {
        if (path.split("/")[1] === "api") {
            location.href = "/";
        }
        else if (path.split("/")[1] === "provide") {
            location.href = "/provide/index";
        }
    });
}
if (logout !== null) {
    logout.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (confirm("로그아웃 하시겠습니까?")) {
                return [2 /*return*/, logoutForm.submit()];
            }
            else {
                return [2 /*return*/, false];
            }
            return [2 /*return*/];
        });
    }); });
}
function index() {
    var estimateBtn = document.querySelector(".mp-btn_estimate");
    estimateBtn.addEventListener("click", function (e) {
        location.href = "/estimate";
    });
}
//# sourceMappingURL=index.js.map
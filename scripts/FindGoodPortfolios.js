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
exports.__esModule = true;
exports.getPortfolioValue = void 0;
var axios_1 = require("axios");
function getPortfolioValue() {
    return __awaiter(this, void 0, void 0, function () {
        var chainId, address, api_key, items, data, team1PreviousPerformance, team1CurrentPerformance, team1PerfGrowth, team2PreviousPerformance, team2CurrentPerformance, team2PerfGrowth, team3PreviousPerformance, team3CurrentPerformance, team3PerfGrowth, getItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chainId = 1;
                    address = '0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de';
                    api_key = 'ckey_cd02df29f46247359d01414a144:';
                    team1PreviousPerformance = 340084;
                    team1CurrentPerformance = 0;
                    team1PerfGrowth = 0;
                    team2PreviousPerformance = 35452;
                    team2CurrentPerformance = 0;
                    team2PerfGrowth = 0;
                    team3PreviousPerformance = 2906;
                    team3CurrentPerformance = 0;
                    team3PerfGrowth = 0;
                    getItems = function (res) {
                        console.log("Calculating performances...\n");
                        setTimeout(function () { }, 2000);
                        items = res.data.data.items;
                        for (var i = 0; i < 2; i++) {
                            var value = items[i].holdings[0].close.quote;
                            team1CurrentPerformance += value;
                        }
                        for (var i = 2; i < 10; i++) {
                            var value = items[i].holdings[0].close.quote;
                            team2CurrentPerformance += value;
                        }
                        for (var i = 10; i < 20; i++) {
                            var value = items[i].holdings[0].close.quote;
                            team3CurrentPerformance += value;
                        }
                        team1PerfGrowth = ((team1CurrentPerformance - team1PreviousPerformance) / team1PreviousPerformance) * 100;
                        team2PerfGrowth = ((team2CurrentPerformance - team2PreviousPerformance) / team2PreviousPerformance) * 100;
                        team3PerfGrowth = ((team3CurrentPerformance - team3PreviousPerformance) / team3PreviousPerformance) * 100;
                        console.log("======================================================================= \n");
                        console.log("Team 1: mature pf, account: 0xe59Fc16f9933aaBe1a25aaa82E82bce3Aa1b2da8");
                        console.log("Team 2: Mid-mature pf, account: 0x7b45f0D9ccAb8a104365fF7c00C4111801c00CC1");
                        console.log("Team 3: Team 3: new/hyped pf, account: 0x3251E1Ee9F00EEf039d26E8F6068517bC0E136f2");
                        console.log("Current Bonus recipient: Team 1 \n");
                        console.log("=======================================================================");
                        console.log("Team 1 latest performance: " + team1CurrentPerformance.toFixed(2));
                        console.log("A delta of " + team1PerfGrowth.toFixed(2) + " % compared to last review. Needs 5% to get Bonus. \n");
                        console.log("Team 2 latest performance: " + team2CurrentPerformance.toFixed(2));
                        console.log("A delta of " + team2PerfGrowth.toFixed(2) + " % compared to last review. Needs 10% to get Bonus. \n");
                        console.log("Team 3 latest performance: " + team3CurrentPerformance.toFixed(2));
                        console.log("A delta of " + team3PerfGrowth.toFixed(2) + " % compared to last review. Needs 15% to get Bonus. \n");
                        // console.log('items:', items)
                    };
                    console.log("\nRetrieving portfolios data from Covalent...\n");
                    return [4 /*yield*/, axios_1["default"].get("https://api.covalenthq.com/v1/1/address/demo.eth/portfolio_v2/?key=ckey_cd02df29f46247359d01414a144").then(function (response) {
                            getItems(response);
                            // console.log(response.data.data);
                        })];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.getPortfolioValue = getPortfolioValue;
getPortfolioValue();

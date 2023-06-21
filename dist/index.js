"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trueData_1 = require("./lib/trueData");
const chatter_1 = __importDefault(require("./lib/trueData/chatter"));
const marketFeeds = new trueData_1.MarketFeeds("FYERS1888", "70goUByG", ["BANKNIFTY23062244800PE", "BANKNIFTY23062243600CE", "BANKNIFTY23062240900PE"], "live");
marketFeeds.connect();
chatter_1.default.on('tick', (data) => {
    console.log(data);
});

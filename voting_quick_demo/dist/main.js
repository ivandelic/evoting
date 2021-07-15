"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaincode_1 = require("./lib/chaincode");
const voting_quick_demo_controller_1 = require("./src/voting_quick_demo.controller");
chaincode_1.default({
    chainCodeName: 'voting_quick_demo',
    chainCode: voting_quick_demo_controller_1.Voting_quick_demoController,
});
//# sourceMappingURL=main.js.map
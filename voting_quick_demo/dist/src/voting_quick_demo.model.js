"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = exports.Party = void 0;
const tslib_1 = require("tslib");
const yup = require("yup");
const decorators_1 = require("../lib/decorators");
const ochain_model_1 = require("../lib/ochain-model");
let Party = (() => {
    let Party = class Party extends ochain_model_1.OchainModel {
        constructor() {
            super(...arguments);
            this.assetType = 'party';
        }
    };
    tslib_1.__decorate([
        decorators_1.Mandatory(),
        decorators_1.Validate(yup.string().min(11).max(11)),
        tslib_1.__metadata("design:type", String)
    ], Party.prototype, "partyId", void 0);
    tslib_1.__decorate([
        decorators_1.Mandatory(),
        decorators_1.Validate(yup.string()),
        tslib_1.__metadata("design:type", String)
    ], Party.prototype, "partyName", void 0);
    Party = tslib_1.__decorate([
        decorators_1.Id('partyId')
    ], Party);
    return Party;
})();
exports.Party = Party;
let Vote = (() => {
    let Vote = class Vote extends ochain_model_1.OchainModel {
        constructor() {
            super(...arguments);
            this.assetType = 'vote';
        }
    };
    tslib_1.__decorate([
        decorators_1.Mandatory(),
        decorators_1.Validate(yup.string()),
        tslib_1.__metadata("design:type", String)
    ], Vote.prototype, "validationNumber", void 0);
    tslib_1.__decorate([
        decorators_1.Mandatory(),
        decorators_1.Validate(yup.date()),
        tslib_1.__metadata("design:type", Date)
    ], Vote.prototype, "voteTimestamp", void 0);
    tslib_1.__decorate([
        decorators_1.Mandatory(),
        decorators_1.Validate(yup.string()),
        tslib_1.__metadata("design:type", String)
    ], Vote.prototype, "preferredPartyId", void 0);
    Vote = tslib_1.__decorate([
        decorators_1.Id('validationNumber')
    ], Vote);
    return Vote;
})();
exports.Vote = Vote;
//# sourceMappingURL=voting_quick_demo.model.js.map
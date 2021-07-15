"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voting_quick_demoController = void 0;
const tslib_1 = require("tslib");
const yup = require("yup");
const decorators_1 = require("../lib/decorators");
const ochain_controller_1 = require("../lib/ochain-controller");
const voting_quick_demo_model_1 = require("./voting_quick_demo.model");
const voting_quick_demo_model_2 = require("./voting_quick_demo.model");
let Voting_quick_demoController = (() => {
    class Voting_quick_demoController extends ochain_controller_1.OchainController {
        init(params) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return;
            });
        }
        createParty(asset) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield asset.save();
            });
        }
        getPartyById(id) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const asset = yield voting_quick_demo_model_1.Party.get(id);
                return asset;
            });
        }
        updateParty(asset) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield asset.update();
            });
        }
        deleteParty(id) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const result = yield voting_quick_demo_model_1.Party.delete(id);
                return result;
            });
        }
        getPartyHistoryById(id) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const result = yield voting_quick_demo_model_1.Party.history(id);
                return result;
            });
        }
        getPartyByRange(startId, endId) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const result = yield voting_quick_demo_model_1.Party.getByRange(startId, endId);
                return result;
            });
        }
        createVote(asset) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield asset.save();
            });
        }
        getVoteById(id) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const asset = yield voting_quick_demo_model_2.Vote.get(id);
                return asset;
            });
        }
        updateVote(asset) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield asset.update();
            });
        }
        deleteVote(id) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const result = yield voting_quick_demo_model_2.Vote.delete(id);
                return result;
            });
        }
        getVoteHistoryById(id) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const result = yield voting_quick_demo_model_2.Vote.history(id);
                return result;
            });
        }
        getVoteByRange(startId, endId) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const result = yield voting_quick_demo_model_2.Vote.getByRange(startId, endId);
                return result;
            });
        }
        executeQuery(query) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const result = yield this.query(query);
                return result;
            });
        }
        vote(validationNumber, preferredPartyId, voteTimestamp) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    let preferredParty = yield this.getPartyById(preferredPartyId);
                    var vote = new voting_quick_demo_model_2.Vote({
                        validationNumber: validationNumber,
                        preferredPartyId: preferredParty.partyId,
                        voteTimestamp: voteTimestamp
                    });
                    vote = yield vote.save();
                    return `Person with VN '${validationNumber}' voted successfully for party '${preferredParty.partyName}'`;
                }
                catch (error) {
                    throw new Error(error.message);
                }
            });
        }
    }
    tslib_1.__decorate([
        decorators_1.Validator(voting_quick_demo_model_1.Party),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [voting_quick_demo_model_1.Party]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "createParty", null);
    tslib_1.__decorate([
        decorators_1.Validator(voting_quick_demo_model_1.Party),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [voting_quick_demo_model_1.Party]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "updateParty", null);
    tslib_1.__decorate([
        decorators_1.Validator(yup.string()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "deleteParty", null);
    tslib_1.__decorate([
        decorators_1.Validator(yup.string()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "getPartyHistoryById", null);
    tslib_1.__decorate([
        decorators_1.Validator(yup.string(), yup.string()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "getPartyByRange", null);
    tslib_1.__decorate([
        decorators_1.Validator(voting_quick_demo_model_2.Vote),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [voting_quick_demo_model_2.Vote]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "createVote", null);
    tslib_1.__decorate([
        decorators_1.Validator(yup.string()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "getVoteById", null);
    tslib_1.__decorate([
        decorators_1.Validator(voting_quick_demo_model_2.Vote),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [voting_quick_demo_model_2.Vote]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "updateVote", null);
    tslib_1.__decorate([
        decorators_1.Validator(yup.string()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "deleteVote", null);
    tslib_1.__decorate([
        decorators_1.Validator(yup.string()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "getVoteHistoryById", null);
    tslib_1.__decorate([
        decorators_1.Validator(yup.string(), yup.string()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "getVoteByRange", null);
    tslib_1.__decorate([
        decorators_1.Validator(yup.string()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "executeQuery", null);
    tslib_1.__decorate([
        decorators_1.Validator(yup.string(), yup.string(), yup.date()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, String, Date]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Voting_quick_demoController.prototype, "vote", null);
    return Voting_quick_demoController;
})();
exports.Voting_quick_demoController = Voting_quick_demoController;
//# sourceMappingURL=voting_quick_demo.controller.js.map
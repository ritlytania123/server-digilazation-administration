"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KKSchema = exports.KK = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let KK = class KK {
};
exports.KK = KK;
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], KK.prototype, "full_name", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], KK.prototype, "address", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], KK.prototype, "birth_place", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", Date)
], KK.prototype, "birth_date", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], KK.prototype, "gender", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], KK.prototype, "nationality", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], KK.prototype, "support_document_identity", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String, enum: ['Pending', 'In Progress', 'Done', 'Reject'], default: 'Pending' }),
    __metadata("design:type", String)
], KK.prototype, "status", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String, required: function () { return this.status === 'Done' || this.status === 'Reject'; } }),
    __metadata("design:type", String)
], KK.prototype, "reason", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", String)
], KK.prototype, "user", void 0);
exports.KK = KK = __decorate([
    (0, mongoose_2.Schema)({ timestamps: true })
], KK);
exports.KKSchema = mongoose_2.SchemaFactory.createForClass(KK);
//# sourceMappingURL=kk.schema.js.map
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
exports.KTPSchema = exports.KTP = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../user/schemas/user.schema");
let KTP = class KTP {
};
exports.KTP = KTP;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], KTP.prototype, "full_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], KTP.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], KTP.prototype, "birth_place", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], KTP.prototype, "birth_date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], KTP.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], KTP.prototype, "nationality", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], KTP.prototype, "support_document_identity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", user_schema_1.User)
], KTP.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ['Pending', 'In Progress', 'Done', 'Reject'], default: 'Pending' }),
    __metadata("design:type", String)
], KTP.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: function () { return this.status === 'Done' || this.status === 'Reject'; } }),
    __metadata("design:type", String)
], KTP.prototype, "reason", void 0);
exports.KTP = KTP = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], KTP);
exports.KTPSchema = mongoose_1.SchemaFactory.createForClass(KTP);
//# sourceMappingURL=ktp.schema.js.map
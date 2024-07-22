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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KKService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const kk_schema_1 = require("./schemas/kk.schema");
let KKService = class KKService {
    constructor(kkModel) {
        this.kkModel = kkModel;
    }
    async create(createKKDto, userId) {
        const createdKK = new this.kkModel({ ...createKKDto, user: userId });
        return createdKK.save();
    }
    async findAll(user) {
        if (user && user.role === 'user') {
            return this.kkModel
                .find({ user: user._id })
                .sort({ updatedAt: -1 })
                .lean();
        }
        return this.kkModel
            .find()
            .sort({ updatedAt: -1 })
            .lean();
    }
    async findOne(id, user) {
        const kk = await this.kkModel.findById(id).lean();
        if (!kk) {
            throw new common_1.NotFoundException('KK registration not found');
        }
        if (user && user.role === 'user' && kk.user.toString() !== user._id.toString()) {
            throw new common_1.ForbiddenException('Forbidden: You can only access your own KK registrations');
        }
        return kk;
    }
    async update(id, updateKKDto, user) {
        const updatedKK = await this.kkModel.findByIdAndUpdate(id, updateKKDto, { new: true }).lean();
        if (!updatedKK) {
            throw new common_1.NotFoundException('KK registration not found');
        }
        if (user && user.role === 'user') {
            if (updatedKK.user && updatedKK.user.toString() !== user._id.toString()) {
                throw new common_1.ForbiddenException('Forbidden: You can only access your own KK registrations');
            }
        }
        return this.kkModel.findById(id).exec();
    }
    async remove(id, user) {
        const kk = await this.kkModel.findById(id).lean();
        if (!kk) {
            throw new common_1.NotFoundException('KK registration not found');
        }
        if (user && user.role === 'user') {
            const userId = user._id.toString();
            const kkUserId = kk.user.toString();
            if (kkUserId !== userId) {
                throw new common_1.ForbiddenException('Forbidden: You can only delete your own KK registrations');
            }
        }
        return this.kkModel.findByIdAndDelete(id).exec();
    }
};
exports.KKService = KKService;
exports.KKService = KKService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(kk_schema_1.KK.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], KKService);
//# sourceMappingURL=kk.service.js.map
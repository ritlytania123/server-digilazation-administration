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
exports.KTPService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ktp_schema_1 = require("./schemas/ktp.schema");
let KTPService = class KTPService {
    constructor(ktpModel) {
        this.ktpModel = ktpModel;
    }
    async create(createKTPDto, userId) {
        const newKTP = new this.ktpModel({
            ...createKTPDto,
            user: userId,
        });
        return newKTP.save();
    }
    async findAll(user) {
        if (user && user.role === 'user') {
            return this.ktpModel
                .find({ user: user._id })
                .sort({ updatedAt: -1 })
                .lean();
        }
        return this.ktpModel
            .find()
            .sort({ updatedAt: -1 })
            .lean();
    }
    async findOne(id, user) {
        const ktp = await this.ktpModel.findById(id).lean();
        if (!ktp) {
            throw new common_1.NotFoundException('KTP registration not found');
        }
        if (user && user.role === 'user' && ktp.user.toString() !== user._id.toString()) {
            throw new common_1.ForbiddenException('Forbidden: You can only access your own KTP registrations');
        }
        return ktp;
    }
    async update(id, updateKtpDto, user) {
        const updatedKtp = await this.ktpModel.findByIdAndUpdate(id, updateKtpDto, { new: true }).lean();
        if (!updatedKtp) {
            throw new common_1.NotFoundException('KTP registration not found');
        }
        if (user && user.role === 'user') {
            if (updatedKtp.user && updatedKtp.user.toString() !== user._id.toString()) {
                throw new common_1.ForbiddenException('Forbidden: You can only access your own KTP registrations');
            }
        }
        return this.ktpModel.findById(id).exec();
    }
    async remove(id, user) {
        const ktp = await this.ktpModel.findById(id).lean();
        if (!ktp) {
            throw new common_1.NotFoundException('KTP registration not found');
        }
        if (user && user.role === 'user' && ktp.user.toString() !== user._id.toString()) {
            throw new common_1.ForbiddenException('Forbidden: You can only delete your own KTP registrations');
        }
        return this.ktpModel.findByIdAndDelete(id).lean();
    }
};
exports.KTPService = KTPService;
exports.KTPService = KTPService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ktp_schema_1.KTP.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], KTPService);
//# sourceMappingURL=ktp.service.js.map
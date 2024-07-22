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
exports.LostReportService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lost_report_schema_1 = require("./schemas/lost-report.schema");
let LostReportService = class LostReportService {
    constructor(lostReportModel) {
        this.lostReportModel = lostReportModel;
    }
    async create(createLostReportDto, userId) {
        const newLostReport = new this.lostReportModel({
            ...createLostReportDto,
            user: userId,
        });
        return newLostReport.save();
    }
    async findAll(user) {
        if (user && user.role === 'user') {
            return this.lostReportModel.find({ user: user._id }).lean();
        }
        return this.lostReportModel.find().lean();
    }
    async findOne(id, user) {
        const lostReport = await this.lostReportModel.findById(id).lean();
        if (!lostReport) {
            throw new common_1.NotFoundException('Lost report not found');
        }
        if (user && user.role === 'user' && lostReport.user.toString() !== user._id.toString()) {
            throw new common_1.ForbiddenException('Forbidden: You can only access your own lost reports');
        }
        return lostReport;
    }
    async update(id, updateLostReportDto, user) {
        const updatedLostReport = await this.lostReportModel.findByIdAndUpdate(id, updateLostReportDto, { new: true }).lean();
        if (!updatedLostReport) {
            throw new common_1.NotFoundException('Lost report not found');
        }
        if (user && user.role === 'user') {
            if (updatedLostReport.user.toString() !== user._id.toString()) {
                throw new common_1.ForbiddenException('Forbidden: You can only update your own lost reports');
            }
        }
        return this.lostReportModel.findById(id).exec();
    }
    async remove(id, user) {
        const lostReport = await this.lostReportModel.findById(id).lean();
        if (!lostReport) {
            throw new common_1.NotFoundException('Lost report not found');
        }
        if (user.role === 'user' && lostReport.user.toString() !== user._id.toString()) {
            throw new common_1.ForbiddenException('Forbidden: You can only delete your own lost reports');
        }
        await this.lostReportModel.findByIdAndDelete(id).lean();
    }
};
exports.LostReportService = LostReportService;
exports.LostReportService = LostReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(lost_report_schema_1.LostReport.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LostReportService);
//# sourceMappingURL=lost-report.service.js.map
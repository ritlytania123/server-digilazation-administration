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
exports.LostReportController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lost_report_service_1 = require("./lost-report.service");
const create_lost_report_dto_1 = require("./dto/create-lost-report.dto");
const lost_report_schema_1 = require("./schemas/lost-report.schema");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const update_lost_report_dto_1 = require("./dto/update-lost-report.dto");
let LostReportController = class LostReportController {
    constructor(lostReportService) {
        this.lostReportService = lostReportService;
    }
    async create(createLostReportDto, req) {
        const user = req.user;
        if (!user || !user._id) {
            throw new common_1.UnauthorizedException('User not authenticated');
        }
        return this.lostReportService.create(createLostReportDto, user._id.toString());
    }
    async findAll(req) {
        const user = req.user;
        return this.lostReportService.findAll(user);
    }
    async findOne(id, req) {
        const user = req.user;
        return this.lostReportService.findOne(id, user);
    }
    async update(id, updateLostReportDto, req) {
        const user = req.user;
        return this.lostReportService.update(id, updateLostReportDto, user);
    }
    async remove(id, req) {
        const user = req.user;
        return this.lostReportService.remove(id, user);
    }
};
exports.LostReportController = LostReportController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new lost report' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The lost report has been successfully created.', type: lost_report_schema_1.LostReport }),
    (0, roles_decorator_1.Roles)('admin', 'user', 'superadmin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lost_report_dto_1.CreateLostReportDto, Object]),
    __metadata("design:returntype", Promise)
], LostReportController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all lost reports' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all lost reports', type: [lost_report_schema_1.LostReport] }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LostReportController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific lost report by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The lost report', type: lost_report_schema_1.LostReport }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Lost report not found' }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin', 'user'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LostReportController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a lost report by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The lost report has been successfully updated', type: lost_report_schema_1.LostReport }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Lost report not found' }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lost_report_dto_1.UpdateLostReportDto, Object]),
    __metadata("design:returntype", Promise)
], LostReportController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a specific lost report by ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'The lost report has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Lost report not found' }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LostReportController.prototype, "remove", null);
exports.LostReportController = LostReportController = __decorate([
    (0, swagger_1.ApiTags)('LostReport'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('lost-reports'),
    __metadata("design:paramtypes", [lost_report_service_1.LostReportService])
], LostReportController);
//# sourceMappingURL=lost-report.controller.js.map
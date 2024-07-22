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
exports.KKController = void 0;
const common_1 = require("@nestjs/common");
const kk_service_1 = require("./kk.service");
const create_kk_dto_1 = require("./dto/create-kk.dto");
const update_kk_dto_1 = require("./dto/update-kk.dto");
const swagger_1 = require("@nestjs/swagger");
const kk_schema_1 = require("./schemas/kk.schema");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
let KKController = class KKController {
    constructor(kkService) {
        this.kkService = kkService;
    }
    async create(createKKDto, req) {
        const user = req.user;
        if (!user || !user._id) {
            throw new common_1.UnauthorizedException('User not authenticated');
        }
        return this.kkService.create(createKKDto, String(user._id));
    }
    async findAll(req) {
        const user = req.user;
        return this.kkService.findAll(user);
    }
    async findOne(id, req) {
        const user = req.user;
        return this.kkService.findOne(id, user);
    }
    async update(id, updateKKDto, req) {
        const user = req.user;
        return this.kkService.update(id, updateKKDto, user);
    }
    async remove(id, req) {
        const user = req.user;
        return this.kkService.remove(id, user);
    }
};
exports.KKController = KKController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new KK registration' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The KK registration has been successfully created.', type: kk_schema_1.KK }),
    (0, roles_decorator_1.Roles)('admin', 'user', 'superadmin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kk_dto_1.CreateKKDto, Object]),
    __metadata("design:returntype", Promise)
], KKController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all KK registrations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all KK registrations', type: [kk_schema_1.KK] }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin', 'user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KKController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a KK registration by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The KK registration with the given ID', type: kk_schema_1.KK }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'KK registration not found' }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin', 'user'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], KKController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a KK registration by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The KK registration has been successfully updated', type: kk_schema_1.KK }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'KK registration not found' }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_kk_dto_1.UpdateKKDto, Object]),
    __metadata("design:returntype", Promise)
], KKController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a KK registration by ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'The KK registration has been successfully deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'KK registration not found' }),
    (0, roles_decorator_1.Roles)('admin', 'user', 'superadmin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], KKController.prototype, "remove", null);
exports.KKController = KKController = __decorate([
    (0, swagger_1.ApiTags)('kk'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('kk'),
    __metadata("design:paramtypes", [kk_service_1.KKService])
], KKController);
//# sourceMappingURL=kk.controller.js.map
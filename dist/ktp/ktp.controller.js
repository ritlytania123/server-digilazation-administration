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
exports.KTPController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ktp_service_1 = require("./ktp.service");
const create_ktp_dto_1 = require("./dto/create-ktp.dto");
const ktp_schema_1 = require("./schemas/ktp.schema");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const update_ktp_dto_1 = require("./dto/update-ktp.dto");
let KTPController = class KTPController {
    constructor(ktpService) {
        this.ktpService = ktpService;
    }
    async create(createKTPDto, req) {
        const user = req.user;
        if (!user || !user._id) {
            throw new common_1.UnauthorizedException('User not authenticated');
        }
        return this.ktpService.create(createKTPDto, user._id.toString());
    }
    async findAll(req) {
        const user = req.user;
        return this.ktpService.findAll(user);
    }
    async findOne(id, req) {
        const user = req.user;
        return this.ktpService.findOne(id, user);
    }
    async update(id, updateKtpDto, req) {
        const user = req.user;
        return this.ktpService.update(id, updateKtpDto, user);
    }
    async remove(id, req) {
        const user = req.user;
        return this.ktpService.remove(id, user);
    }
};
exports.KTPController = KTPController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new KTP registration' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The KTP registration has been successfully created.', type: ktp_schema_1.KTP }),
    (0, roles_decorator_1.Roles)('admin', 'user', 'superadmin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ktp_dto_1.CreateKTPDto, Object]),
    __metadata("design:returntype", Promise)
], KTPController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all KTP registrations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all KTP registrations', type: [ktp_schema_1.KTP] }),
    (0, roles_decorator_1.Roles)('admin', 'user', 'superadmin'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KTPController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific KTP registration by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The KTP registration', type: ktp_schema_1.KTP }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'KTP registration not found' }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin', 'user'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], KTPController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a KTP registration by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The KK registration has been successfully updated', type: ktp_schema_1.KTP }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'KK registration not found' }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ktp_dto_1.UpdateKTPDto, Object]),
    __metadata("design:returntype", Promise)
], KTPController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a specific KTP registration by ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'The KTP registration has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'KTP registration not found' }),
    (0, roles_decorator_1.Roles)('admin', 'superadmin', 'user'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], KTPController.prototype, "remove", null);
exports.KTPController = KTPController = __decorate([
    (0, swagger_1.ApiTags)('KTP'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('ktp'),
    __metadata("design:paramtypes", [ktp_service_1.KTPService])
], KTPController);
//# sourceMappingURL=ktp.controller.js.map
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
exports.CreateKTPDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateKTPDto {
}
exports.CreateKTPDto = CreateKTPDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', description: 'Full name of the user' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKTPDto.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Main St', description: 'Address of the user' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKTPDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'New York', description: 'Place of birth' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKTPDto.prototype, "birth_place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1990-01-01', description: 'Date of birth' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateKTPDto.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Male', description: 'Gender of the user' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKTPDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'American', description: 'Nationality of the user' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKTPDto.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ID123456789', description: 'Support document identity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKTPDto.prototype, "support_document_identity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pending', enum: ['Pending', 'In Progress', 'Done', 'Reject'] }),
    (0, class_validator_1.IsEnum)(['Pending', 'In Progress', 'Done', 'Reject']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKTPDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Additional information or reason', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateKTPDto.prototype, "reason", void 0);
//# sourceMappingURL=create-ktp.dto.js.map
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
exports.CreateLostReportDto = exports.DocumentType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var DocumentType;
(function (DocumentType) {
    DocumentType["KTP"] = "ktp";
    DocumentType["KK"] = "kk";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
class CreateLostReportDto {
}
exports.CreateLostReportDto = CreateLostReportDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', description: 'Full name of the user' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLostReportDto.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Main St', description: 'Address of the user' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLostReportDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Lost during travel', description: 'Reason for KTP loss' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLostReportDto.prototype, "lost_reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Report123', description: 'Police report document number for lost KTP' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLostReportDto.prototype, "police_lost_report_document", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-07-20', description: 'Date and time when the KTP was lost' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateLostReportDto.prototype, "lost_time_incident", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: DocumentType, description: 'Type of document lost' }),
    (0, class_validator_1.IsEnum)(DocumentType),
    __metadata("design:type", String)
], CreateLostReportDto.prototype, "document_lost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ID123456789', description: 'Support document identity' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLostReportDto.prototype, "support_document_identity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pending', enum: ['Pending', 'In Progress', 'Done', 'Reject'] }),
    (0, class_validator_1.IsEnum)(['Pending', 'In Progress', 'Done', 'Reject']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLostReportDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Additional information or reason', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLostReportDto.prototype, "reason", void 0);
//# sourceMappingURL=create-lost-report.dto.js.map
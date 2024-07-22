"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LostReportModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const lost_report_schema_1 = require("./schemas/lost-report.schema");
const lost_report_service_1 = require("./lost-report.service");
const lost_report_controller_1 = require("./lost-report.controller");
let LostReportModule = class LostReportModule {
};
exports.LostReportModule = LostReportModule;
exports.LostReportModule = LostReportModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: lost_report_schema_1.LostReport.name, schema: lost_report_schema_1.LostReportSchema }]),
        ],
        providers: [lost_report_service_1.LostReportService],
        controllers: [lost_report_controller_1.LostReportController],
        exports: [lost_report_service_1.LostReportService],
    })
], LostReportModule);
//# sourceMappingURL=lost-report.module.js.map
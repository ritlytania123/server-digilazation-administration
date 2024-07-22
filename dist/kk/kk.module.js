"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KKModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const kk_controller_1 = require("./kk.controller");
const kk_service_1 = require("./kk.service");
const kk_schema_1 = require("./schemas/kk.schema");
const user_module_1 = require("../user/user.module");
let KKModule = class KKModule {
};
exports.KKModule = KKModule;
exports.KKModule = KKModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: kk_schema_1.KK.name, schema: kk_schema_1.KKSchema }]),
            user_module_1.UsersModule,
        ],
        controllers: [kk_controller_1.KKController],
        providers: [kk_service_1.KKService],
    })
], KKModule);
//# sourceMappingURL=kk.module.js.map
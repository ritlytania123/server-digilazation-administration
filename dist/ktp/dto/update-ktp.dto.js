"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateKTPDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ktp_dto_1 = require("./create-ktp.dto");
class UpdateKTPDto extends (0, swagger_1.PartialType)(create_ktp_dto_1.CreateKTPDto) {
}
exports.UpdateKTPDto = UpdateKTPDto;
//# sourceMappingURL=update-ktp.dto.js.map
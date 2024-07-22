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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register(createUserDto) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        const newUser = {
            ...createUserDto,
            password: hashedPassword,
        };
        return this.usersService.create(newUser);
    }
    async validateUser(validateUserDto) {
        const { email, password } = validateUserDto;
        const user = await this.usersService.findOneByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = { email: user.email, sub: user._id, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async deleteAccount(userId, deleteUserDto) {
        const user = await this.usersService.findOne(userId);
        if (!user)
            throw new common_1.ForbiddenException('Insufficient permissions');
        if (user.role === 'superadmin') {
            return await this.deleteUser(deleteUserDto.user_id);
        }
        else if (user.role === 'admin') {
            if (user._id.toString() !== deleteUserDto.user_id) {
                return await this.deleteUser(deleteUserDto.user_id);
            }
            else {
                throw new common_1.ForbiddenException('Admins cannot delete their own account');
            }
        }
        else if (user.role === 'user') {
            if (user._id.toString() === deleteUserDto.user_id.toString()) {
                return await this.deleteUser(deleteUserDto.user_id.toString());
            }
            else {
                throw new common_1.ForbiddenException('Users can only delete their own account');
            }
        }
        else {
            throw new common_1.ForbiddenException('Insufficient permissions');
        }
    }
    async deleteUser(userId) {
        return await this.usersService.findByIdAndDelete(userId);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
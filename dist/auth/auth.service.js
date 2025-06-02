"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../auth/schema/user.schema");
const bcrypt = __importStar(require("bcrypt"));
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createUser(createUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const newUser = new this.userModel({
            email: createUserDto.email,
            password: hashedPassword,
        });
        return newUser.save();
    }
    async register(body) {
        const existing = await this.userModel.findOne({ email: body.email });
        if (existing) {
            throw new common_1.ConflictException('El email ya está registrado');
        }
        const hash = await bcrypt.hash(body.password, 10);
        const user = new this.userModel({
            email: body.email,
            password: hash,
            role: body.role,
        });
        await user.save();
        return { email: user.email, _id: user._id, role: user.role };
    }
    async validateUser(email, pass) {
        const user = await this.userModel.findOne({ email }).select('+password').lean().exec();
        if (!user)
            return null;
        const isPasswordValid = await bcrypt.compare(pass, user.password);
        if (!isPasswordValid)
            return null;
        const { password } = user, result = __rest(user, ["password"]);
        return Object.assign(Object.assign({}, result), { _id: user._id.toString() });
    }
    async login(user) {
        var _a;
        const payload = { email: user.email, sub: (_a = user._id) !== null && _a !== void 0 ? _a : '', role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    generateToken(user) {
        const payload = {
            email: user.email,
            sub: user._id.toString(),
            role: user.role
        };
        return this.jwtService.sign(payload);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
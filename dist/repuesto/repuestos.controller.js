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
exports.RepuestoController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const repuestos_service_1 = require("./repuestos.service");
const create_repuesto_dto_1 = require("./dto/create-repuesto.dto");
const update_repuesto_dto_1 = require("./dto/update-repuesto.dto");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
let RepuestoController = class RepuestoController {
    repuestoService;
    constructor(repuestoService) {
        this.repuestoService = repuestoService;
    }
    async createRepuesto(res, createRepuestoDto) {
        const newRepuesto = await this.repuestoService.create(createRepuestoDto);
        return res.status(common_1.HttpStatus.CREATED).json({
            message: 'Repuesto creado exitosamente',
            repuesto: newRepuesto
        });
    }
    async getRepuestos(res) {
        const repuestos = await this.repuestoService.findAll();
        return res.status(common_1.HttpStatus.OK).json(repuestos);
    }
    async getRepuesto(res, id) {
        const repuesto = await this.repuestoService.findOne(id);
        return res.status(common_1.HttpStatus.OK).json(repuesto);
    }
    async updateRepuesto(res, id, updateRepuestoDto) {
        const updatedRepuesto = await this.repuestoService.update(id, updateRepuestoDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Repuesto actualizado exitosamente',
            repuesto: updatedRepuesto
        });
    }
    async deleteRepuesto(res, id) {
        const deletedRepuesto = await this.repuestoService.delete(id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Repuesto eliminado exitosamente',
            repuesto: deletedRepuesto
        });
    }
};
exports.RepuestoController = RepuestoController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_repuesto_dto_1.CreateRepuestoDto]),
    __metadata("design:returntype", Promise)
], RepuestoController.prototype, "createRepuesto", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RepuestoController.prototype, "getRepuestos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RepuestoController.prototype, "getRepuesto", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_repuesto_dto_1.UpdateRepuestoDto]),
    __metadata("design:returntype", Promise)
], RepuestoController.prototype, "updateRepuesto", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RepuestoController.prototype, "deleteRepuesto", null);
exports.RepuestoController = RepuestoController = __decorate([
    (0, common_1.Controller)('repuesto'),
    __metadata("design:paramtypes", [repuestos_service_1.RepuestoService])
], RepuestoController);
//# sourceMappingURL=repuestos.controller.js.map
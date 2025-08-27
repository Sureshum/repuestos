import { Controller, Post, Get, Param, Body, Res, HttpStatus, Put, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RepuestoService } from './repuestos.service';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { UpdateRepuestoDto } from './dto/update-repuesto.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('repuesto')
export class RepuestoController {
  constructor(private readonly repuestoService: RepuestoService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @Post()
  async createRepuesto(@Res() res, @Body() createRepuestoDto: CreateRepuestoDto) {
    const newRepuesto = await this.repuestoService.create(createRepuestoDto);
    return res.status(HttpStatus.CREATED).json({
      message: 'Repuesto creado exitosamente',
      repuesto: newRepuesto
    });
  }

  @Get()
  async getRepuestos(@Res() res) {
    const repuestos = await this.repuestoService.findAll();
    return res.status(HttpStatus.OK).json(repuestos);
  }

  @Get(':id')
  async getRepuesto(@Res() res, @Param('id') id: string) {
    const repuesto = await this.repuestoService.findOne(id);
    return res.status(HttpStatus.OK).json(repuesto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @Put(':id')
  async updateRepuesto(@Res() res, @Param('id') id: string, @Body() updateRepuestoDto: UpdateRepuestoDto) {
    const updatedRepuesto = await this.repuestoService.update(id, updateRepuestoDto);
    return res.status(HttpStatus.OK).json({
      message: 'Repuesto actualizado exitosamente',
      repuesto: updatedRepuesto
    });
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @Delete(':id')
  async deleteRepuesto(@Res() res, @Param('id') id: string) {
    const deletedRepuesto = await this.repuestoService.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Repuesto eliminado exitosamente',
      repuesto: deletedRepuesto
    });
  }
}

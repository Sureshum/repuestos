import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { RepuestosService } from './repuestos.service';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('repuestos') 
export class RepuestosController {
  constructor(private readonly repuestosService: RepuestosService) {}

  @Get() 
  findAll() {
    return this.repuestosService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createRepuestoDto: CreateRepuestoDto) {
    return this.repuestosService.create(createRepuestoDto);
  }
}
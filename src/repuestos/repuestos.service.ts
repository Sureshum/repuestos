import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { UpdateRepuestoDto } from './dto/update-repuesto.dto';
import { Repuesto } from './schemas/repuesto.schema';

@Injectable()
export class RepuestosService {
  constructor(
    @InjectModel(Repuesto.name) private repuestoModel: Model<Repuesto>,
  ) {}

  async create(createRepuestoDto: CreateRepuestoDto): Promise<Repuesto> {
    const newRepuesto = new this.repuestoModel(createRepuestoDto);
    return await newRepuesto.save();
  }

  async findAll(): Promise<Repuesto[]> {
    return await this.repuestoModel.find().exec();
  }

  async findOne(id: string): Promise<Repuesto> {
    const repuesto = await this.repuestoModel.findById(id).exec();
    if (!repuesto) {
      throw new NotFoundException(`Repuesto con ID ${id} no encontrado`);
    }
    return repuesto;
  }

  async update(
    id: string,
    updateRepuestoDto: UpdateRepuestoDto,
  ): Promise<Repuesto> {
    const updatedRepuesto = await this.repuestoModel
      .findByIdAndUpdate(id, updateRepuestoDto, { new: true })
      .exec();
    if (!updatedRepuesto) {
      throw new NotFoundException(`Repuesto con ID ${id} no encontrado`);
    }
    return updatedRepuesto;
  }

  async delete(id: string): Promise<{ message: string; deletedRepuesto: Repuesto }> {
  const deletedRepuesto = await this.repuestoModel.findByIdAndDelete(id).exec();
    if (!deletedRepuesto) {
      throw new NotFoundException(`Repuesto con ID ${id} no encontrado`);
    }
    return {
      message: `Repuesto con ID ${id} eliminado correctamente`,
      deletedRepuesto,
    };
  }
}
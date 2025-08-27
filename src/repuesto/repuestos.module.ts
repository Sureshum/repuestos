import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RepuestoService } from './repuestos.service';
import { RepuestoController } from './repuestos.controller';
import { RepuestoSchema } from './schemas/repuesto.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Repuesto', schema: RepuestoSchema }]),
  ],
  controllers: [RepuestoController],
  providers: [RepuestoService],
})
export class RepuestosModule {}

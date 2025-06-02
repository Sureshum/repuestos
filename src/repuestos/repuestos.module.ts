import { Module } from '@nestjs/common';
import { RepuestosService } from './repuestos.service';
import { RepuestosController } from './repuestos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Repuesto, RepuestoSchema } from './schemas/repuesto.schema';
import { AuthModule } from '../auth/auth.module'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Repuesto.name, schema: RepuestoSchema }]),
    AuthModule, 
  ],
  controllers: [RepuestosController],
  providers: [RepuestosService],
})
export class RepuestosModule {}
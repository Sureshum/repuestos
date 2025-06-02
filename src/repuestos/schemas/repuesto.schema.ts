import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Repuesto {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  anio: number;

  @Prop({ required: true })
  precio: number;

  @Prop()
  foto: string;
}

export type RepuestoDocument = Repuesto & Document;
export const RepuestoSchema = SchemaFactory.createForClass(Repuesto);

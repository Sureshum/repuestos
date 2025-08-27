import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Repuesto extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  año: number;

  @Prop({ required: true })
  precio: number;

  @Prop({ required: true })
  foto: string;
}

export const RepuestoSchema = SchemaFactory.createForClass(Repuesto);
import { Document } from 'mongoose';

export interface Repuesto extends Document {
  nombre: string;
  marca: string;
  modelo: string;
  año: number;
  precio: number;
  foto: string;
}

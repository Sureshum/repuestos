import { Document } from 'mongoose';
export declare class Repuesto extends Document {
    nombre: string;
    marca: string;
    modelo: string;
    año: number;
    precio: number;
    foto: string;
}
export declare const RepuestoSchema: import("mongoose").Schema<Repuesto, import("mongoose").Model<Repuesto, any, any, any, Document<unknown, any, Repuesto, any, {}> & Repuesto & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Repuesto, Document<unknown, {}, import("mongoose").FlatRecord<Repuesto>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Repuesto> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;

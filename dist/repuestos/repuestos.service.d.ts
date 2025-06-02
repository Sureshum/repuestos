import { Model } from 'mongoose';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { UpdateRepuestoDto } from './dto/update-repuesto.dto';
import { Repuesto } from './schemas/repuesto.schema';
export declare class RepuestosService {
    private repuestoModel;
    constructor(repuestoModel: Model<Repuesto>);
    create(createRepuestoDto: CreateRepuestoDto): Promise<Repuesto>;
    findAll(): Promise<Repuesto[]>;
    findOne(id: string): Promise<Repuesto>;
    update(id: string, updateRepuestoDto: UpdateRepuestoDto): Promise<Repuesto>;
    delete(id: string): Promise<{
        message: string;
        deletedRepuesto: Repuesto;
    }>;
}

import { Model } from 'mongoose';
import { Repuesto } from './interfaces/repuestos.interfaces';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { UpdateRepuestoDto } from './dto/update-repuesto.dto';
export declare class RepuestoService {
    private readonly repuestoModel;
    constructor(repuestoModel: Model<Repuesto>);
    create(createRepuestoDto: CreateRepuestoDto): Promise<Repuesto>;
    findAll(): Promise<Repuesto[]>;
    findOne(id: string): Promise<Repuesto>;
    update(id: string, updateRepuestoDto: UpdateRepuestoDto): Promise<Repuesto>;
    delete(id: string): Promise<Repuesto>;
}

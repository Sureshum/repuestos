import { RepuestoService } from './repuestos.service';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { UpdateRepuestoDto } from './dto/update-repuesto.dto';
export declare class RepuestoController {
    private readonly repuestoService;
    constructor(repuestoService: RepuestoService);
    createRepuesto(res: any, createRepuestoDto: CreateRepuestoDto): Promise<any>;
    getRepuestos(res: any): Promise<any>;
    getRepuesto(res: any, id: string): Promise<any>;
    updateRepuesto(res: any, id: string, updateRepuestoDto: UpdateRepuestoDto): Promise<any>;
    deleteRepuesto(res: any, id: string): Promise<any>;
}

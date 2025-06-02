import { RepuestosService } from './repuestos.service';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
export declare class RepuestosController {
    private readonly repuestosService;
    constructor(repuestosService: RepuestosService);
    findAll(): Promise<import("./schemas/repuesto.schema").Repuesto[]>;
    create(createRepuestoDto: CreateRepuestoDto): Promise<import("./schemas/repuesto.schema").Repuesto>;
}

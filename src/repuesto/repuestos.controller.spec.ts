import { Test, TestingModule } from '@nestjs/testing';
import { RepuestoController } from './repuestos.controller';
import { RepuestoService } from './repuestos.service';

describe('RepuestosController', () => {
  let controller: RepuestoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepuestoController],
      providers: [RepuestoService],
    }).compile();

    controller = module.get<RepuestoController>(RepuestoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

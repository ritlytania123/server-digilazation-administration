import { Test, TestingModule } from '@nestjs/testing';
import { KKController } from './kk.controller';

describe('KkController', () => {
  let controller: KKController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KKController],
    }).compile();

    controller = module.get<KKController>(KKController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

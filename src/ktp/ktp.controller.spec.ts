import { Test, TestingModule } from '@nestjs/testing';
import { KtpController } from './ktp.controller';

describe('KtpController', () => {
  let controller: KtpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KtpController],
    }).compile();

    controller = module.get<KtpController>(KtpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

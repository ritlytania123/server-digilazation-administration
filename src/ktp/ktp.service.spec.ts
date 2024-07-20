import { Test, TestingModule } from '@nestjs/testing';
import { KtpService } from './ktp.service';

describe('KtpService', () => {
  let service: KtpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KtpService],
    }).compile();

    service = module.get<KtpService>(KtpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

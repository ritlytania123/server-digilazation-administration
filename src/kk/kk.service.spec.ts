import { Test, TestingModule } from '@nestjs/testing';
import { KkService } from './kk.service';

describe('KkService', () => {
  let service: KkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KkService],
    }).compile();

    service = module.get<KkService>(KkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

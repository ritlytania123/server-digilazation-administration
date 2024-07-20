import { Test, TestingModule } from '@nestjs/testing';
import { LostReportService } from './lost-report.service';

describe('LostReportService', () => {
  let service: LostReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LostReportService],
    }).compile();

    service = module.get<LostReportService>(LostReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

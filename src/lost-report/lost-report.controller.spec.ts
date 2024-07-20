import { Test, TestingModule } from '@nestjs/testing';
import { LostReportController } from './lost-report.controller';

describe('LostReportController', () => {
  let controller: LostReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LostReportController],
    }).compile();

    controller = module.get<LostReportController>(LostReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

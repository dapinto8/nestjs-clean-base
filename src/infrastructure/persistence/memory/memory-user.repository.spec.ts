import { Test, TestingModule } from '@nestjs/testing';
import { MemoryUserRepository } from './memory-user.repository';

describe('MemoryUserRepository', () => {
  let service: MemoryUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoryUserRepository]
    }).compile();

    service = module.get<MemoryUserRepository>(MemoryUserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CryptoServiceAbstract } from '@core/abstracts/crypto-service.abstract';

@Module({
  exports: [CryptoService],
  providers: [
    CryptoService,
    {
      provide: CryptoServiceAbstract,
      useClass: CryptoService
    }
  ]
})
export class CryptoModule {}

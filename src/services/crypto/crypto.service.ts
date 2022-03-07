import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

const saltRounds = 10;

@Injectable()
export class CryptoService {

  async hash(value: string): Promise<string> {
    return await bcrypt.hash(value, saltRounds);
  }

  async compare(value: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(value, hash);
  }
}

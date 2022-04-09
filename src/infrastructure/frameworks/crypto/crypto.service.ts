import { CryptoServiceAbstract } from '@core/abstracts/crypto-service.abstract';
import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32);
const DEFAULT_ALGORITHM = 'aes-256-cbc';

@Injectable()
export class CryptoService implements CryptoServiceAbstract {
  async encrypt(value: string, algorithm = DEFAULT_ALGORITHM): Promise<string> {
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let encryptedData = cipher.update(value, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');

    return encryptedData;
  }

  async decrypt(value: string, algorithm = DEFAULT_ALGORITHM): Promise<string> {
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    let decryptedData = decipher.update(value, 'hex', 'utf-8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
  }

  async hash(value: string, algorithm = DEFAULT_ALGORITHM): Promise<string> {
    return await crypto.createHash(algorithm).update(value, 'binary').digest('base64');
  }

  async compare(value: string, hashToCompare: string): Promise<boolean> {
    const hash = await this.hash(value);
    return hash === hashToCompare;
  }
}

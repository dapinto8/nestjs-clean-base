export abstract class CryptoServiceAbstract {
  abstract encrypt(value: string): Promise<string>;
  abstract decrypt(value: string): Promise<string>;
  abstract hash(value: string): Promise<string>;
  abstract compare(value: string, hashToCompare: string): Promise<boolean>;
}
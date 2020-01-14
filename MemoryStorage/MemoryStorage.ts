import { DataManager } from './DataManager';
import { AESCipher } from '../Cryptography/AESCipher';

export class MemoryStorage implements DataManager {
    public cash: Map<number, string> = new Map();
      
    public async setData(data: string) {
        const encrypter = new AESCipher();
        return this.cash[0] = await encrypter.encrypt(data);
    }

    public async getData() {
        const decrypter = new AESCipher();
        return await decrypter.decrypt(this.cash[0]);
    }
}

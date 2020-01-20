import { DataStorage } from './DataStorage';
import * as fs from 'fs';
import { Cryptography } from '../Cryptography/Cryptography';

export class MemoryStorage implements DataStorage {
      
    public async setData(data: string, file: string, encrypter: Cryptography) {
        const text = await encrypter.encrypt(data);
        fs.writeFile(file, text, (err) => err);
        return text;
    }

    public async getData(file: string, decrypter: Cryptography) {
        const res = await fs.promises.readFile(file, 'utf-8');
        const text = await decrypter.decrypt(res);
        fs.writeFile(file, text, (err) => err);
        return text;
    }
}

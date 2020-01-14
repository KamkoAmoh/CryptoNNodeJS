import * as fs from 'fs';
import { DataManager } from './DataManager';
import { AESCipher } from '../Cryptography/AESCipher';

export class FileStorage {
    
    public async setData(data: string, file: string): Promise<any> {
        
        const encrypter = new AESCipher();
        const text = await encrypter.encrypt(data);
        fs.writeFile(file, text, (err) => err);
    }    
    
    public async getData(file: string): Promise<any> {
        const decrypter = new AESCipher();
        const res = await fs.promises.readFile(file, 'utf8');
        return decrypter.decrypt(res);
    }

    
}
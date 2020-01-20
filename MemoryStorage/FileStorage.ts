import * as fs from 'fs';
import { DataStorage } from './DataStorage';
import { Cryptography } from '../Cryptography/Cryptography';
import * as path from 'path';

export class FileStorage implements DataStorage{
    
    public async setData(data: string, file: string, encrypter: Cryptography): Promise<any> {
        const dir = path.resolve(file);
        const text = await fs.promises.readFile(dir, 'utf-8');
        const res = await encrypter.encrypt(text);
        fs.writeFile(file, res, (err) => err);
    }    
    
    public async getData(file: string, decrypter: Cryptography): Promise<any> {
        const dir = path.resolve(file);
        const res = await fs.promises.readFile(dir, 'utf-8');
        const text = await decrypter.decrypt(res);
        fs.writeFile(dir, text, (err) => err);
    }
}

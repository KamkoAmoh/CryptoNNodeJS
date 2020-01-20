import * as fs from 'fs';
import { DataStorage } from './DataStorage';
import { Cryptography } from '../Cryptography/Cryptography';
import * as path from 'path';

export class FileStorage implements DataStorage{
    
    // private async encryptData(file: string, encrypter: Cryptography): Promise<string> {
    //     const text = await fs.promises.readFile(file, 'utf-8');
    //     const res = await encrypter.encrypt(text);
    //     return res;
    // }

    // private async decryptData(file: string, decrypted: Cryptography): Promise<string> {
    //     const text = await fs.promises.readFile(file, 'utf-8');
    //     const res = await decrypted.decrypt(text);
    //     return res;
    // }

    // public async setData(data: string, file: string, encrypter: Cryptography): Promise<any> {
    //     const dir = path.resolve(file);
    //     const res = await this.encryptData(dir, encrypter);
    //     fs.writeFile(file, res, (err) => err);
    // }    
    
    // public async getData(file: string, decrypter: Cryptography): Promise<any> {
    //     const dir = path.resolve(file);
    //     const res = await this.decryptData(dir, decrypter);
    //     fs.writeFile(dir, res, (err) => err);
    // }

    public async setData(data: string, file: string): Promise<any> {
        return await fs.writeFile(file, data, (err) => err);
    }

    public async getData(file: string): Promise<any> {
        return await fs.promises.readFile(file, 'utf-8');
    }
}

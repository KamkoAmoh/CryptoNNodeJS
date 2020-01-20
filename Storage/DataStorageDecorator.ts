import { DataStorage } from './DataStorage';
import { Cryptography } from '../Cryptography/Cryptography';
import * as fs from 'fs';

export class DataStorageDecorator implements DataStorage {
    constructor(private readonly storage: DataStorage, private readonly cipher: Cryptography) {}

    public async setData(data?: string, file?: string): Promise<any> {
        let enc;
        if (data) {
            enc = await this.cipher.encrypt(data);
        } else if (file) {
            const text = await this.storage.getData(file);
            enc = await this.cipher.encrypt(text);
        }
        return await this.storage.setData(enc, file);
    }

    public async getData(file?: string): Promise<any> {
        const text = await this.storage.getData(file);
        const res = await this.cipher.decrypt(text);
        return await this.storage.setData(res, file);
    }
}
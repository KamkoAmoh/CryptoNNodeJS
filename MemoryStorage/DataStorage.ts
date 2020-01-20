import { Cryptography } from '../Cryptography/Cryptography';

export interface DataStorage {
    setData(data?: string, file?: string, crypto?: Cryptography): Promise<any>;
    getData(file?: string, crypto?: Cryptography): Promise<any>;
}
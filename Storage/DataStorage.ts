import { Cryptography } from '../Cryptography/Cryptography';

export interface DataStorage {
    setData(data?: string, file?: string): Promise<any>;
    getData(file?: string): Promise<any>;
}
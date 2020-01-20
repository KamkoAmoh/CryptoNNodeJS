import { DataStorage } from '../MemoryStorage/DataStorage';
import { Cryptography } from '../Cryptography/Cryptography';


export interface CipherInterface {
    memoryStorage: DataStorage;
    fileStorage: DataStorage;
    helpOptions: string;

    encryptInMemory(data?: string, file?: string, cipher?: Cryptography): Promise<any>;
    decryptFromMemory(file?: string, cipher?: Cryptography): Promise<any>;
    encryptFile(file?: string, cipher?: Cryptography): Promise<any>;
    decryptFile(file?: string, cipher?: Cryptography): Promise<any>;
    commandInterface(inputArgs?: string[], file?: string);
}
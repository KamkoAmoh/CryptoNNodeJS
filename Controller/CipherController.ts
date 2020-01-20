import { CipherInterface } from './CipherInterface';
import { DataStorage } from '../MemoryStorage/DataStorage';
import { MemoryStorage } from '../MemoryStorage/MemoryStorage';
import { FileStorage } from '../MemoryStorage/FileStorage';
import { Cryptography } from '../Cryptography/Cryptography';
import { AESCipher } from '../Cryptography/AESCipher';
import { DESCipher } from '../Cryptography/DESCipher';

export class CipherController implements CipherInterface {
    public memoryStorage: DataStorage = new MemoryStorage();
    public fileStorage: DataStorage = new FileStorage();
    public helpOptions: string = `
    Cryptography:
        cipher <option> [option]: Encrypts/Decrypts with AES|DES.
    
    options:
        -e <option> [argument]: Encrypts the data.
        -d <option> [argument]: Decrypts the data.
        -h [argument]: Help.
    
    arguments:
        -aes <subArg> [data/file]: Encrypt [data/file] using AES.
        -des <subArg> [data/file]: Encrypt [data/file] using DES.
        -fm : Extract encrypted [data] from Memory:
        -ff [file] : Decrypt an encrypted [file]
    subArg:
        -m ["data"] : Store Encrypted ["data"] in Memory, data must be in "".
        -f [file] : Encrypt an [file].
    
    `

    public async encryptInMemory(data: string, file: string, cipher: Cryptography): Promise<any> {
        return await this.memoryStorage.setData(data, file, cipher);
    }

    public async decryptFromMemory(file: string, cipher: Cryptography): Promise<any> {
        return await this.memoryStorage.getData(file, cipher);
    }

    public async encryptFile(file: string, cipher: Cryptography): Promise<any> {
        return await this.fileStorage.setData(undefined, file, cipher);
    }

    public async decryptFile(file: string, cipher: Cryptography): Promise<any> {
        return await this.fileStorage.getData(file, cipher);
    }

    public commandInterface(inputArgs: string[], memory: string) {
        let cipher;
        if (inputArgs[0]) {
            switch (inputArgs[0]) {
                case '-e':
                    if (inputArgs[1]) {
                        switch (inputArgs[1]) {
                            case '-aes':
                                cipher = new AESCipher();
                                if (inputArgs[2]) {
                                    switch (inputArgs[2]) {
                                        case '-m':
                                            if (inputArgs[3]) {
                                                this.encryptInMemory(inputArgs[3], memory, cipher)
                                                    .catch(() => console.log(`Could not encrypt in memory: ${this.helpOptions}`));
                                                break;
                                            } else {
                                                console.log(`Argument not provided.`);
                                            }
                                        break;
                                        case '-f':
                                            if (inputArgs[3]) {
                                                this.encryptFile(inputArgs[3], cipher)
                                                    .catch(() => console.log(`could not find file, or encrypt: ${inputArgs[3]}`));
                                                    break;
                                            } else {
                                                console.log(`File Path not provided: ${inputArgs[3]}`);
                                            }
                                        break;
                                        default: console.log(this.helpOptions);
                                    }
                                }
                            break;
                            case '-des':
                                cipher = new DESCipher();
                                if (inputArgs[2]) {
                                    switch (inputArgs[2]) {
                                        case '-m':
                                            if (inputArgs[3]) {
                                                this.encryptInMemory(inputArgs[3], memory, cipher)
                                                    .catch(() => console.log(`Could not encrypt in memory: ${this.helpOptions}`));
                                                break;
                                            } else {
                                                console.log(`Argument not provided.`);
                                            }
                                        break;
                                        case '-f':
                                            if (inputArgs[3]) {
                                                this.encryptFile(inputArgs[3], cipher)
                                                    .catch(() => console.log(`Could not find file or encrypt: ${this.helpOptions}`));
                                                break;
                                            } else {
                                                console.log(`FIle Path not provided: ${inputArgs[3]}`);
                                            }
                                        break;
                                        default: console.log(this.helpOptions);
                                    }
                                }
                            break;
                            default: console.log(`Argument not provided, try: -h for help.`);
                        }
                    }
                break;
                case '-d':
                    if (inputArgs[1]) {
                        switch (inputArgs[1]) {
                            case '-fm':
                                cipher = new AESCipher();
                                this.decryptFromMemory(memory, cipher)
                                    .catch(() => {
                                        cipher = new DESCipher();
                                        this.decryptFromMemory(memory, cipher)
                                            .catch(() => console.log(`Could Not Decrypt from memory, try "-h".`));
                                    });
                            break;
                            case '-ff':
                                if (inputArgs[2]) {
                                    cipher = new AESCipher();
                                    this.decryptFile(inputArgs[2], cipher)
                                        .catch(() => {
                                            cipher = new DESCipher();
                                            this.decryptFile(inputArgs[2], cipher)
                                                .catch(() => console.log(`Could not decrypt or find file Path: ${inputArgs[2]} try "-h".`));
                                        });
                                    break
                                } else {
                                    console.log(`File Path not provided.`)
                                }
                            break;
                            default: console.log(this.helpOptions);
                        }
                    }
                break;
                case '-h': console.log(this.helpOptions); break;
                default: console.log(`Argument not provided, try: -h for help.`)
            }
        }
    }
}

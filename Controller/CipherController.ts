import { CipherInterface } from './CipherInterface';
import { FileStorage } from '../Storage/FileStorage';
import { MemoryStorage } from '../Storage/MemoryStorage';
import { DataStorage } from '../Storage/DataStorage';
import { DataStorageDecorator } from '../Storage/DataStorageDecorator';
import { Cryptography } from '../Cryptography/Cryptography';
import { AESCipher } from '../Cryptography/AESCipher';
import { DESCipher } from '../Cryptography/DESCipher';

export class CipherController implements CipherInterface {
    private helpOptions: string = `
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

    private create(storageType: string, cipher: string) {
        return new DataStorageDecorator(this.createStorage(storageType), this.createCipher(cipher));
    }

    private createStorage(storageType: string) {
        switch (storageType) {
            case '-m': 
                return new MemoryStorage();
            case '-f': 
                return new FileStorage();
            default: 
                console.log("Provide Valid Storage");
        }
    }

    private createCipher(cipher: string) {
        switch (cipher) {
            case '-aes': return new AESCipher();
            case '-des': return new DESCipher();
            default: console.log("Provide Correct Algorithm.");
        }
    }

    public commandInterface(inputArgs: string[]) {
        if (inputArgs[0]) {
            switch (inputArgs[0]) {
                case '-e':
                    if (inputArgs[1] && inputArgs[2]) {
                        switch (inputArgs[2]) {
                            case "-m":
                                this.create(inputArgs[2], inputArgs[1]).setData(inputArgs[3]).catch(() => "Arguments Not Provided.");
                                break;
                            case "-f":
                                this.create(inputArgs[2], inputArgs[1]).setData(undefined, inputArgs[3]).catch(() => "Arguments Not Provided.");
                                break;
                            }
                        }
                break;
                case '-d':
                    if (inputArgs[1]) {
                        switch (inputArgs[1]) {
                            case '-fm':
                                this.create("-m", "-aes").getData()
                                    .catch(() => {
                                        this.create("-m", "-des").getData()
                                            .catch(() => console.log(`Could Not Decrypt from memory, try "-h".`));
                                    });
                            break;
                            case '-ff':
                                if (inputArgs[2]) {
                                    this.create("-f", "-aes").getData(inputArgs[2])
                                        .catch(() => {
                                            this.create("-f", "-des").getData(inputArgs[2])
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

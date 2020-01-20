"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryStorage_1 = require("../MemoryStorage/MemoryStorage");
const FileStorage_1 = require("../MemoryStorage/FileStorage");
const AESCipher_1 = require("../Cryptography/AESCipher");
const DESCipher_1 = require("../Cryptography/DESCipher");
class CipherController {
    constructor() {
        this.memoryStorage = new MemoryStorage_1.MemoryStorage();
        this.fileStorage = new FileStorage_1.FileStorage();
        this.helpOptions = `
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
    
    `;
    }
    async encryptInMemory(data, file, cipher) {
        return await this.memoryStorage.setData(data, file, cipher);
    }
    async decryptFromMemory(file, cipher) {
        return await this.memoryStorage.getData(file, cipher);
    }
    async encryptFile(file, cipher) {
        return await this.fileStorage.setData(undefined, file, cipher);
    }
    async decryptFile(file, cipher) {
        return await this.fileStorage.getData(file, cipher);
    }
    commandInterface(inputArgs, memory) {
        let cipher;
        if (inputArgs[0]) {
            switch (inputArgs[0]) {
                case '-e':
                    if (inputArgs[1]) {
                        switch (inputArgs[1]) {
                            case '-aes':
                                cipher = new AESCipher_1.AESCipher();
                                if (inputArgs[2]) {
                                    switch (inputArgs[2]) {
                                        case '-m':
                                            if (inputArgs[3]) {
                                                this.encryptInMemory(inputArgs[3], memory, cipher)
                                                    .catch(() => console.log(`Could not encrypt in memory: ${this.helpOptions}`));
                                                break;
                                            }
                                            else {
                                                console.log(`Argument not provided.`);
                                            }
                                            break;
                                        case '-f':
                                            if (inputArgs[3]) {
                                                this.encryptFile(inputArgs[3], cipher)
                                                    .catch(() => console.log(`could not find file, or encrypt: ${inputArgs[3]}`));
                                                break;
                                            }
                                            else {
                                                console.log(`File Path not provided: ${inputArgs[3]}`);
                                            }
                                            break;
                                        default: console.log(this.helpOptions);
                                    }
                                }
                                break;
                            case '-des':
                                cipher = new DESCipher_1.DESCipher();
                                if (inputArgs[2]) {
                                    switch (inputArgs[2]) {
                                        case '-m':
                                            if (inputArgs[3]) {
                                                this.encryptInMemory(inputArgs[3], memory, cipher)
                                                    .catch(() => console.log(`Could not encrypt in memory: ${this.helpOptions}`));
                                                break;
                                            }
                                            else {
                                                console.log(`Argument not provided.`);
                                            }
                                            break;
                                        case '-f':
                                            if (inputArgs[3]) {
                                                this.encryptFile(inputArgs[3], cipher)
                                                    .catch(() => console.log(`Could not find file or encrypt: ${this.helpOptions}`));
                                                break;
                                            }
                                            else {
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
                                cipher = new AESCipher_1.AESCipher();
                                this.decryptFromMemory(memory, cipher)
                                    .catch(() => {
                                    cipher = new DESCipher_1.DESCipher();
                                    this.decryptFromMemory(memory, cipher)
                                        .catch(() => console.log(`Could Not Decrypt from memory, try "-h".`));
                                });
                                break;
                            case '-ff':
                                if (inputArgs[2]) {
                                    cipher = new AESCipher_1.AESCipher();
                                    this.decryptFile(inputArgs[2], cipher)
                                        .catch(() => {
                                        cipher = new DESCipher_1.DESCipher();
                                        this.decryptFile(inputArgs[2], cipher)
                                            .catch(() => console.log(`Could not decrypt or find file Path: ${inputArgs[2]} try "-h".`));
                                    });
                                    break;
                                }
                                else {
                                    console.log(`File Path not provided.`);
                                }
                                break;
                            default: console.log(this.helpOptions);
                        }
                    }
                    break;
                case '-h':
                    console.log(this.helpOptions);
                    break;
                default: console.log(`Argument not provided, try: -h for help.`);
            }
        }
    }
}
exports.CipherController = CipherController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lwaGVyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NvbnRyb2xsZXIvQ2lwaGVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtFQUErRDtBQUMvRCw4REFBMkQ7QUFFM0QseURBQXNEO0FBQ3RELHlEQUFzRDtBQUV0RCxNQUFhLGdCQUFnQjtJQUE3QjtRQUNXLGtCQUFhLEdBQWdCLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQ2pELGdCQUFXLEdBQWdCLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQzdDLGdCQUFXLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtCNUIsQ0FBQTtJQW9ITCxDQUFDO0lBbEhVLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxNQUFvQjtRQUN6RSxPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQVksRUFBRSxNQUFvQjtRQUM3RCxPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQVksRUFBRSxNQUFvQjtRQUN2RCxPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFZLEVBQUUsTUFBb0I7UUFDdkQsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsU0FBbUIsRUFBRSxNQUFj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
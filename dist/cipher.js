"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cipherAES = require("./Cryptography/AESCipher");
const cipherDES = require("./Cryptography/DESCipher");
const MemoryStorage_1 = require("./MemoryStorage/MemoryStorage");
const FileStorage_1 = require("./MemoryStorage/FileStorage");
const memoryStorage = new MemoryStorage_1.MemoryStorage();
const fileStorage = new FileStorage_1.FileStorage();
async function encryptInMemory(data, file = 'Memory.txt', cipher) {
    return await memoryStorage.setData(data, file, cipher);
}
async function decryptFromMemory(file = 'Memory.txt', cipher) {
    return await memoryStorage.getData(file, cipher);
}
async function encryptFile(file, cipher) {
    return await fileStorage.setData(undefined, file, cipher);
}
async function decryptFile(file, cipher) {
    return await fileStorage.getData(file, cipher);
}
const helpOption = `
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
let inputArgs = process.argv.slice(2);
console.log(inputArgs[0], inputArgs[1], inputArgs[2], inputArgs[3], inputArgs[4]);
switch (inputArgs[0]) {
    case '-e':
        if (inputArgs[1]) {
            let cipher;
            switch (inputArgs[1]) {
                case '-aes':
                    cipher = new cipherAES.AESCipher();
                    if (inputArgs[2]) {
                        switch (inputArgs[2]) {
                            case '-m':
                                if (inputArgs[3]) {
                                    encryptInMemory(inputArgs[3], undefined, cipher)
                                        .catch(() => console.log(`Could not encrypt in memory: ${helpOption}`));
                                    break;
                                }
                                else {
                                    console.log(`Argument not provided: ${helpOption}`);
                                }
                                break;
                            case '-f':
                                if (inputArgs[3]) {
                                    encryptFile(inputArgs[3], cipher)
                                        .catch(() => console.log(`Could not find file or encrypt: ${helpOption}`));
                                    break;
                                }
                                else {
                                    console.log(`File path not provided: ${helpOption}`);
                                }
                                break;
                            default: console.log(helpOption);
                        }
                    }
                case '-des':
                    cipher = new cipherDES.DESCipher();
                    if (inputArgs[2]) {
                        switch (inputArgs[2]) {
                            case '-m':
                                if (inputArgs[3]) {
                                    encryptInMemory(inputArgs[3], undefined, cipher)
                                        .catch(() => console.log(`Could not encrypt in memory: ${helpOption}`));
                                    break;
                                }
                                else {
                                    console.log(`Argument not provided: ${helpOption}`);
                                }
                                break;
                            case '-f':
                                if (inputArgs[3]) {
                                    encryptFile(inputArgs[3], cipher)
                                        .catch(() => console.log(`Could not find file or encrypt: ${helpOption}`));
                                    break;
                                }
                                else {
                                    console.log(`File path not provided: ${helpOption}`);
                                }
                                break;
                            default: console.log(helpOption);
                        }
                    }
                    break;
            }
        }
        break;
    case '-d':
        if (inputArgs[1]) {
            let cipher;
            switch (inputArgs[1]) {
                case '-fm':
                    cipher = new cipherAES.AESCipher();
                    decryptFromMemory(undefined, cipher)
                        .catch(() => {
                        cipher = new cipherDES.DESCipher();
                        decryptFromMemory(undefined, cipher)
                            .catch(() => console.log(`Could Not Decrypt from Memory: ${helpOption}`));
                    });
                    break;
                case '-ff':
                    if (inputArgs[2]) {
                        cipher = new cipherAES.AESCipher();
                        decryptFile(inputArgs[2], cipher)
                            .catch(() => {
                            cipher = new cipherDES.DESCipher();
                            decryptFile(inputArgs[2], cipher)
                                .catch(() => console.log(`Could not decrypt or find file Path: ${helpOption}`));
                        });
                        break;
                    }
                    else {
                        console.log(`File Path not provided: ${helpOption}`);
                    }
                    break;
                default: console.log(helpOption);
            }
        }
        break;
    case '-h': console.log(helpOption);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lwaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY2lwaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQXNEO0FBQ3RELHNEQUFzRDtBQUN0RCxpRUFBOEQ7QUFDOUQsNkRBQTBEO0FBSTFELE1BQU0sYUFBYSxHQUFnQixJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUN2RCxNQUFNLFdBQVcsR0FBZ0IsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFbkQsS0FBSyxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsT0FBZSxZQUFZLEVBQUUsTUFBb0I7SUFDMUYsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUzRCxDQUFDO0FBRUQsS0FBSyxVQUFVLGlCQUFpQixDQUFDLE9BQWUsWUFBWSxFQUFFLE1BQXFCO0lBQy9FLE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRUQsS0FBSyxVQUFVLFdBQVcsQ0FBQyxJQUFZLEVBQUUsTUFBb0I7SUFDekQsT0FBTyxNQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQsS0FBSyxVQUFVLFdBQVcsQ0FBQyxJQUFZLEVBQUUsTUFBb0I7SUFDekQsT0FBTyxNQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRCxNQUFNLFVBQVUsR0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0IxQixDQUFBO0FBRUQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FB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
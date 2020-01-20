"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileStorage_1 = require("../Storage/FileStorage");
const MemoryStorage_1 = require("../Storage/MemoryStorage");
const DataStorageDecorator_1 = require("../Storage/DataStorageDecorator");
const AESCipher_1 = require("../Cryptography/AESCipher");
const DESCipher_1 = require("../Cryptography/DESCipher");
class CipherController {
    constructor() {
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
    create(storageType, cipher) {
        return new DataStorageDecorator_1.DataStorageDecorator(this.createStorage(storageType), this.createCipher(cipher));
    }
    createStorage(storageType) {
        switch (storageType) {
            case '-m':
                return new MemoryStorage_1.MemoryStorage();
            case '-f':
                return new FileStorage_1.FileStorage();
            default:
                console.log("Provide Valid Storage");
        }
    }
    createCipher(cipher) {
        switch (cipher) {
            case '-aes': return new AESCipher_1.AESCipher();
            case '-des': return new DESCipher_1.DESCipher();
            default: console.log("Provide Correct Algorithm.");
        }
    }
    commandInterface(inputArgs) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lwaGVyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NvbnRyb2xsZXIvQ2lwaGVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUFxRDtBQUNyRCw0REFBeUQ7QUFFekQsMEVBQXVFO0FBRXZFLHlEQUFzRDtBQUN0RCx5REFBc0Q7QUFFdEQsTUFBYSxnQkFBZ0I7SUFBN0I7UUFDWSxnQkFBVyxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrQjdCLENBQUE7SUF1RUwsQ0FBQztJQXJFVyxNQUFNLENBQUMsV0FBbUIsRUFBRSxNQUFjO1FBQzlDLE9BQU8sSUFBSSwyQ0FBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRU8sYUFBYSxDQUFDLFdBQW1CO1FBQ3JDLFFBQVEsV0FBVyxFQUFFO1lBQ2pCLEtBQUssSUFBSTtnQkFDTCxPQUFPLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQy9CLEtBQUssSUFBSTtnQkFDTCxPQUFPLElBQUkseUJBQVcsRUFBRSxDQUFDO1lBQzdCO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFTyxZQUFZLENBQUMsTUFBYztRQUMvQixRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztZQUNwQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxxQkFBUyxFQUFFLENBQUM7WUFDcEMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztJQUVNLGdCQUFnQixDQUFDLFNBQW1CO1FBQ3ZDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxF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
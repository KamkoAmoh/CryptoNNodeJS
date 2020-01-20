import { DataStorageDecorator } from "./Storage/DataStorageDecorator";
import { AESCipher } from './Cryptography/AESCipher';
import { DataStorage } from './Storage/DataStorage';
import { MemoryStorage } from './Storage/MemoryStorage';
import { FileStorage } from './Storage/FileStorage';

import { CipherController } from './Controller/CipherController';

const inputArg: string[] = process.argv.slice(2);
const controller = new CipherController();

controller.commandInterface(inputArg);

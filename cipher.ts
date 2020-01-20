import { CipherController } from './Controller/CipherController';

const memory: string = "./Memory.txt";
const inputArg: string[] = process.argv.slice(2);
const controller = new CipherController();

controller.commandInterface(inputArg, memory);

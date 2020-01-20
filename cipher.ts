import { CipherController } from './Controller/CipherController';

const inputArg: string[] = process.argv.slice(2);
const controller = new CipherController();

controller.commandInterface(inputArg);

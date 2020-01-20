import { CipherClass } from './CipherClass';

export class AESCipher extends CipherClass {
    constructor() {
        super("aes-192-cbc", "Labs42", 24, 16);
    }
}

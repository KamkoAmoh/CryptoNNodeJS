import { CipherClass } from './CipherClass';

export class DESCipher extends CipherClass {
    constructor() {
        super("des-ede-cbc", "Labs42", 16, 8);
    }
}

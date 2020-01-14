import { CipherClass } from './CipherClass';

export class DESCipher extends CipherClass {
    constructor() {
        super("des-ede-cbc", "Lab42", 16, 8);
    }
}

import * as crypto from "crypto";
import { Cryptography } from "./Cryptography"

export class AESCipher implements Cryptography {
    private algorithm: string = "aes-192-cbc";
    private password: string = "Lab42";
    private key: Buffer = crypto.scryptSync(this.password, 'salt', 24);
    private iv: Buffer = Buffer.alloc(16, 0);
    private cipher: crypto.Cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    private decipher: crypto.Decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
    private data: string = "";

    public encrypt(data: string) {
        this.cipher.on('readable', () => {
            let chunk;
            while (null !== (chunk = this.cipher.read())) {
                this.data += chunk.toString('hex');
            }
        });

        this.cipher.on("end", () => {
            console.log(this.data);
        });

        this.cipher.write(data);
        return this.cipher.end();
    }

    public decrypt(data: string) {
        this.decipher.on('readable', () => {
            let chunk;
            while (null !== (chunk = this.decipher.read())) {
                this.data += chunk.toString('utf8');
            }
        });

        this.decipher.on('end', () => {
            console.log(this.data);
        });

        this.decipher.write(data, 'hex');
        return this.decipher.end();
    }
}

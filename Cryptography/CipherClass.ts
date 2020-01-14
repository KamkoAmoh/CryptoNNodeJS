import { Cryptography } from "./Cryptography";
import * as crypto from 'crypto';

export abstract class  CipherClass implements Cryptography {
    private key: Buffer;
    private iv: Buffer;
    private cipher: crypto.Cipher;
    private decipher: crypto.Decipher;
    private data: string = "";
    constructor(private algorithm: string, private password: string, private keySize: number, private ivSize: number) {
        this.key = crypto.scryptSync(this.password, 'salt', keySize);
        this.iv = Buffer.alloc(ivSize, 0);
        this.cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
        this.decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
    }

    public encrypt(data: string): Promise<string> {
        return new Promise((resolve, reject) => {
            let result = '';
            this.cipher.on('readable', () => {
                let chuck;
                while (null !== (chuck = this.cipher.read())) {
                    result += chuck.toString('hex');
                }
            });
    
            this.cipher.on('end', () => {
               resolve(result);
            });

            this.cipher.on('error', (err) => {
                reject(err);
            });
    
            this.cipher.write(data);
            this.cipher.end();
            
        });
    }

    public decrypt(data: string): Promise<string> {
         return new Promise((resolve, reject) => {
            let result = "";
            this.decipher.on('readable', () => {
                let chuck;
                while (null !== (chuck = this.decipher.read())) {
                    result += chuck.toString('utf8');
                }
            });

            this.decipher.on('end', () => {
                resolve(result);
            });

            this.decipher.on('error', (err) => {
                reject(err);
            });

            this.decipher.write(data, 'hex');
            this.decipher.end();
        });
    }
}
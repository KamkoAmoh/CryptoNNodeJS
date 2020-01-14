
export interface Cryptography {
    encrypt(data: string): Promise<string>;
    decrypt(data: string): Promise<string>;
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class FileStorage {
    // private async encryptData(file: string, encrypter: Cryptography): Promise<string> {
    //     const text = await fs.promises.readFile(file, 'utf-8');
    //     const res = await encrypter.encrypt(text);
    //     return res;
    // }
    // private async decryptData(file: string, decrypted: Cryptography): Promise<string> {
    //     const text = await fs.promises.readFile(file, 'utf-8');
    //     const res = await decrypted.decrypt(text);
    //     return res;
    // }
    // public async setData(data: string, file: string, encrypter: Cryptography): Promise<any> {
    //     const dir = path.resolve(file);
    //     const res = await this.encryptData(dir, encrypter);
    //     fs.writeFile(file, res, (err) => err);
    // }    
    // public async getData(file: string, decrypter: Cryptography): Promise<any> {
    //     const dir = path.resolve(file);
    //     const res = await this.decryptData(dir, decrypter);
    //     fs.writeFile(dir, res, (err) => err);
    // }
    async setData(data, file) {
        return await fs.writeFile(file, data, (err) => err);
    }
    async getData(file) {
        return await fs.promises.readFile(file, 'utf-8');
    }
}
exports.FileStorage = FileStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVN0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdG9yYWdlL0ZpbGVTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBS3pCLE1BQWEsV0FBVztJQUVwQixzRkFBc0Y7SUFDdEYsOERBQThEO0lBQzlELGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIsSUFBSTtJQUVKLHNGQUFzRjtJQUN0Riw4REFBOEQ7SUFDOUQsaURBQWlEO0lBQ2pELGtCQUFrQjtJQUNsQixJQUFJO0lBRUosNEZBQTRGO0lBQzVGLHNDQUFzQztJQUN0QywwREFBMEQ7SUFDMUQsNkNBQTZDO0lBQzdDLFFBQVE7SUFFUiw4RUFBOEU7SUFDOUUsc0NBQXNDO0lBQ3RDLDBEQUEwRDtJQUMxRCw0Q0FBNEM7SUFDNUMsSUFBSTtJQUVHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDM0MsT0FBTyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBWTtRQUM3QixPQUFPLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDSjtBQWpDRCxrQ0FpQ0MifQ==
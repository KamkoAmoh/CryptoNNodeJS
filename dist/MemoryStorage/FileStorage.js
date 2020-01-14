"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const AESCipher_1 = require("../Cryptography/AESCipher");
class FileStorage {
    async setData(data, file) {
        const encrypter = new AESCipher_1.AESCipher();
        const text = await encrypter.encrypt(data);
        fs.writeFile(file, text, (err) => err);
    }
    async getData(file) {
        const decrypter = new AESCipher_1.AESCipher();
        const res = await fs.promises.readFile(file, 'utf8');
        return decrypter.decrypt(res);
    }
}
exports.FileStorage = FileStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVN0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9NZW1vcnlTdG9yYWdlL0ZpbGVTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBRXpCLHlEQUFzRDtBQUV0RCxNQUFhLFdBQVc7SUFFYixLQUFLLENBQUMsT0FBTyxDQUFDLElBQVksRUFBRSxJQUFZO1FBRTNDLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQVk7UUFDN0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDbEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FHSjtBQWhCRCxrQ0FnQkMifQ==
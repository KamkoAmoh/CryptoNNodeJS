"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class MemoryStorage {
    async setData(data, file, encrypter) {
        const text = await encrypter.encrypt(data);
        fs.writeFile(file, text, (err) => err);
        return text;
    }
    async getData(file, decrypter) {
        const res = await fs.promises.readFile(file, 'utf-8');
        const text = await decrypter.decrypt(res);
        fs.writeFile(file, text, (err) => err);
        return text;
    }
}
exports.MemoryStorage = MemoryStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtb3J5U3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL01lbW9yeVN0b3JhZ2UvTWVtb3J5U3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlCQUF5QjtBQUd6QixNQUFhLGFBQWE7SUFFZixLQUFLLENBQUMsT0FBTyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsU0FBdUI7UUFDcEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLFNBQXVCO1FBQ3RELE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQWRELHNDQWNDIn0=
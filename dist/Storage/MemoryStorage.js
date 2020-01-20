"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class MemoryStorage {
    // public async setData(data: string, file: string, encrypter: Cryptography) {
    //     const text = await encrypter.encrypt(data);
    //     fs.writeFile(file, text, (err) => err);
    //     return text;
    // }
    // public async getData(file: string, decrypter: Cryptography) {
    //     const res = await fs.promises.readFile(file, 'utf-8');
    //     const text = await decrypter.decrypt(res);
    //     fs.writeFile(file, text, (err) => err);
    //     return text;
    // }
    constructor(memory = './Memory.txt') {
        this.memory = memory;
    }
    async setData(data) {
        return await fs.writeFile(this.memory, data, (err) => err);
    }
    async getData() {
        return await fs.promises.readFile(this.memory, 'utf-8');
    }
}
exports.MemoryStorage = MemoryStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtb3J5U3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0b3JhZ2UvTWVtb3J5U3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlCQUF5QjtBQUd6QixNQUFhLGFBQWE7SUFFdEIsOEVBQThFO0lBQzlFLGtEQUFrRDtJQUNsRCw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLElBQUk7SUFFSixnRUFBZ0U7SUFDaEUsNkRBQTZEO0lBQzdELGlEQUFpRDtJQUNqRCw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLElBQUk7SUFFSixZQUE2QixTQUFpQixjQUFjO1FBQS9CLFdBQU0sR0FBTixNQUFNLENBQXlCO0lBQUcsQ0FBQztJQUV6RCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQVk7UUFDN0IsT0FBTyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTztRQUNoQixPQUFPLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUU1RCxDQUFDO0NBQ0o7QUF6QkQsc0NBeUJDIn0=
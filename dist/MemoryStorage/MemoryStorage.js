"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AESCipher_1 = require("../Cryptography/AESCipher");
class MemoryStorage {
    constructor() {
        this.cash = new Map();
    }
    async setData(data) {
        const encrypter = new AESCipher_1.AESCipher();
        return this.cash[0] = await encrypter.encrypt(data);
    }
    async getData() {
        const decrypter = new AESCipher_1.AESCipher();
        return await decrypter.decrypt(this.cash[0]);
    }
}
exports.MemoryStorage = MemoryStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtb3J5U3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL01lbW9yeVN0b3JhZ2UvTWVtb3J5U3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlEQUFzRDtBQUV0RCxNQUFhLGFBQWE7SUFBMUI7UUFDVyxTQUFJLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7SUFXakQsQ0FBQztJQVRVLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBWTtRQUM3QixNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTztRQUNoQixNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNsQyxPQUFPLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNKO0FBWkQsc0NBWUMifQ==
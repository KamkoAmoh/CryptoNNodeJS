"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cipherAES = require("./Cryptography/AESCipher");
const cipherDES = require("./Cryptography/DESCipher");
const aesencrypt = new cipherAES.AESCipher().encrypt("Jora");
const aesdecrypt = new cipherAES.AESCipher().decrypt("173422f677f6aa0f89c3e48ca3bc1fef");
const desencrypt = new cipherDES.DESCipher().encrypt("Jora");
const desdecrypt = new cipherDES.DESCipher().decrypt("ecb507cfe2c1da46");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBc0Q7QUFDdEQsc0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3RCxNQUFNLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUN6RixNQUFNLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMifQ==
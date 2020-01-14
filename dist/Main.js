"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryStorage_1 = require("./MemoryStorage/MemoryStorage");
const FileStorage_1 = require("./MemoryStorage/FileStorage");
// const aesencrypt = new cipherAES.AESCipher().encrypt("Jora").then(res => console.log(res));
// const aesdecrypt = new cipherAES.AESCipher().decrypt("0e13514f3671485dd180bc13e21f55773809d507e994c9220a4432a9fb3a4fd2dc3db74023441ef215b18eb6155f54b3c75ab9169ac83dbce9d2d1f1d4b026e39c1e5beba586396f0bd3d07de318608b").then(res => console.log(res));
// const desencrypt = new cipherDES.DESCipher().encrypt("Jora");
// const desdecrypt = new cipherDES.DESCipher().decrypt("ecb507cfe2c1da46");
let memS = new MemoryStorage_1.MemoryStorage();
async function memStorage() {
    await memS.setData("Borea Juku");
    await memS.setData("Core");
    console.log(await memS.getData());
}
let fileWr = new FileStorage_1.FileStorage();
async function writeRead() {
    await fileWr.setData("Jemmie rettoretoo est demon est seption annot", "./Text.txt");
    console.log(await fileWr.getData("./Text.txt"));
}
memStorage();
writeRead();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxpRUFBOEQ7QUFDOUQsNkRBQTBEO0FBRTFELDhGQUE4RjtBQUM5RiwwUEFBMFA7QUFDMVAsZ0VBQWdFO0FBQ2hFLDRFQUE0RTtBQUk1RSxJQUFJLElBQUksR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUcvQixLQUFLLFVBQVUsVUFBVTtJQUNyQixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFL0IsS0FBSyxVQUFVLFNBQVM7SUFDcEIsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLCtDQUErQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVELFVBQVUsRUFBRSxDQUFDO0FBQ2IsU0FBUyxFQUFFLENBQUMifQ==
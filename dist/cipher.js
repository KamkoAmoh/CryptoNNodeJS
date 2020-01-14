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
var myArgs = process.argv.slice(2);
switch (myArgs[0]) {
    case '-e':
        console.log(myArgs[1], 'smells quite badly.');
        break;
    case '-d':
        console.log(myArgs[1], 'is really cool.');
        break;
    default: console.log("Something nor ptovided");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lwaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY2lwaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsaUVBQThEO0FBQzlELDZEQUEwRDtBQUUxRCw4RkFBOEY7QUFDOUYsMFBBQTBQO0FBQzFQLGdFQUFnRTtBQUNoRSw0RUFBNEU7QUFJNUUsSUFBSSxJQUFJLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7QUFHL0IsS0FBSyxVQUFVLFVBQVU7SUFDckIsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVELElBQUksTUFBTSxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRS9CLEtBQUssVUFBVSxTQUFTO0lBQ3BCLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRCxVQUFVLEVBQUUsQ0FBQztBQUNiLFNBQVMsRUFBRSxDQUFDO0FBRVosSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbkMsUUFBUSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDZixLQUFLLElBQUk7UUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQUMsTUFBTTtJQUNoRSxLQUFLLElBQUk7UUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQUMsTUFBTTtJQUM1RCxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7Q0FDakQifQ==
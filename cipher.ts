import * as cipherAES from "./Cryptography/AESCipher";
import * as cipherDES from "./Cryptography/DESCipher";
import { MemoryStorage } from './MemoryStorage/MemoryStorage';
import { FileStorage } from './MemoryStorage/FileStorage';

// const aesencrypt = new cipherAES.AESCipher().encrypt("Jora").then(res => console.log(res));
// const aesdecrypt = new cipherAES.AESCipher().decrypt("0e13514f3671485dd180bc13e21f55773809d507e994c9220a4432a9fb3a4fd2dc3db74023441ef215b18eb6155f54b3c75ab9169ac83dbce9d2d1f1d4b026e39c1e5beba586396f0bd3d07de318608b").then(res => console.log(res));
// const desencrypt = new cipherDES.DESCipher().encrypt("Jora");
// const desdecrypt = new cipherDES.DESCipher().decrypt("ecb507cfe2c1da46");



let memS = new MemoryStorage();


async function memStorage() {
    await memS.setData("Borea Juku");
    await memS.setData("Core");
    console.log(await memS.getData());
}

let fileWr = new FileStorage();

async function writeRead() {
    await fileWr.setData("Jemmie rettoretoo est demon est seption annot", "./Text.txt");
    console.log(await fileWr.getData("./Text.txt"));
}

memStorage();
writeRead();

var myArgs = process.argv.slice(2);

switch (myArgs[0]) {
    case '-e': console.log(myArgs[1], 'smells quite badly.'); break;
    case '-d': console.log(myArgs[1], 'is really cool.'); break;
    default: console.log("Something nor ptovided")
}

import * as cipherAES from "./Cryptography/AESCipher";
import * as cipherDES from "./Cryptography/DESCipher";

const aesencrypt = new cipherAES.AESCipher().encrypt("Jora");
const aesdecrypt = new cipherAES.AESCipher().decrypt("173422f677f6aa0f89c3e48ca3bc1fef");
const desencrypt = new cipherDES.DESCipher().encrypt("Jora");
const desdecrypt = new cipherDES.DESCipher().decrypt("ecb507cfe2c1da46");


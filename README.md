# CryptoNNodeJS  
https://github.com/KamkoAmoh/CryptoNNodeJS.git  
1. create a cryptography class (interfaces, inheritance)  
  
  https://nodejs.org/api/crypto.html  
 - Define an interface (encrypt, decrypt)  
 - Define an abstract class  
 - Define a `name` getter  
 - Define a `type` getter (Symetric, Asymetric)  
 - Write 2 implementations: DesCryptograpy (Triple DES) & AesCryptography (AES)  
   
2. Create a SecureStorage class (InMemory, FileSecureStorage)  
  
 - Define an interface/abstract (getData, setData)  
 - Write 2 implementations: InMemoryStorage (using Map), FileStorage (using `fs`)  
3. Create a command line utility to read/write secure data to files  
  
 - Define an Application class with run method  
 - CMD utility with 2 arguments (-e or -d)  
  
node crypto -e "Hello world" test.txt
node crypto -d test.txt

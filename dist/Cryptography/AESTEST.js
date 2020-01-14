"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherClass_1 = require("./CipherClass");
class AESTest extends CipherClass_1.CipherClass {
    constructor() {
        super("aes-192-cbc", "Lab42", 24, 16);
    }
    encrypt(data) {
        super.encrypt(data);
    }
    decrypt(data) {
        super.decrypt(data);
    }
}
exports.AESTest = AESTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUVTVEVTVC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NyeXB0b2dyYXBoeS9BRVNURVNULnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0NBQTRDO0FBRTVDLE1BQWEsT0FBUSxTQUFRLHlCQUFXO0lBQ3BDO1FBQ0ksS0FBSyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBWTtRQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxPQUFPLENBQUMsSUFBWTtRQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQVhELDBCQVdDIn0=
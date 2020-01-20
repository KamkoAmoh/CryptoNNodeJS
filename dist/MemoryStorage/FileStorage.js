"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class FileStorage {
    async setData(data, file, encrypter) {
        const dir = path.resolve(file);
        const text = await fs.promises.readFile(dir, 'utf-8');
        const res = await encrypter.encrypt(text);
        fs.writeFile(file, res, (err) => err);
    }
    async getData(file, decrypter) {
        const dir = path.resolve(file);
        const res = await fs.promises.readFile(dir, 'utf-8');
        const text = await decrypter.decrypt(res);
        fs.writeFile(dir, text, (err) => err);
    }
}
exports.FileStorage = FileStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVN0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9NZW1vcnlTdG9yYWdlL0ZpbGVTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBR3pCLDZCQUE2QjtBQUU3QixNQUFhLFdBQVc7SUFFYixLQUFLLENBQUMsT0FBTyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsU0FBdUI7UUFDcEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxNQUFNLEdBQUcsR0FBRyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFZLEVBQUUsU0FBdUI7UUFDdEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRCxNQUFNLElBQUksR0FBRyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFmRCxrQ0FlQyJ9
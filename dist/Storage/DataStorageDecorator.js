"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStorageDecorator {
    constructor(storage, cipher) {
        this.storage = storage;
        this.cipher = cipher;
    }
    async setData(data, file) {
        let enc;
        if (data) {
            enc = await this.cipher.encrypt(data);
        }
        else if (file) {
            const text = await this.storage.getData(file);
            enc = await this.cipher.encrypt(text);
        }
        return await this.storage.setData(enc, file);
    }
    async getData(file) {
        const text = await this.storage.getData(file);
        const res = await this.cipher.decrypt(text);
        return await this.storage.setData(res, file);
    }
}
exports.DataStorageDecorator = DataStorageDecorator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVN0b3JhZ2VEZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdG9yYWdlL0RhdGFTdG9yYWdlRGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBYSxvQkFBb0I7SUFDN0IsWUFBNkIsT0FBb0IsRUFBbUIsTUFBb0I7UUFBM0QsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUFtQixXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUcsQ0FBQztJQUVyRixLQUFLLENBQUMsT0FBTyxDQUFDLElBQWEsRUFBRSxJQUFhO1FBQzdDLElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxJQUFJLEVBQUU7WUFDTixHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QzthQUFNLElBQUksSUFBSSxFQUFFO1lBQ2IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBYTtRQUM5QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0o7QUFuQkQsb0RBbUJDIn0=
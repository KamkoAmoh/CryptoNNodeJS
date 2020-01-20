"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherController_1 = require("./Controller/CipherController");
const memory = "./Memory.txt";
const inputArg = process.argv.slice(2);
const controller = new CipherController_1.CipherController();
controller.commandInterface(inputArg, memory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENpcGhlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3Rlc3RDaXBoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvRUFBaUU7QUFFakUsTUFBTSxNQUFNLEdBQVcsY0FBYyxDQUFDO0FBQ3RDLE1BQU0sUUFBUSxHQUFhLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sVUFBVSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUUxQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDIn0=
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const prismaClient_1 = __importDefault(require("../database/prismaClient"));
class CreateUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, lojas } = request.body;
            const user = yield prismaClient_1.default.user.create({
                data: {
                    email,
                    name,
                    password,
                    lojas: lojas || []
                }
            });
            return response.json(user);
        });
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map
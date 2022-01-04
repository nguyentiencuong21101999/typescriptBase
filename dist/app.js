'use strict';
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
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appConf = JSON.parse(fs_1.default.readFileSync('config/app.config.json', 'utf8'));
        app.use((0, cors_1.default)({
            origin: '*',
            // credentials: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            // headers: [],
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'X-Access-Token',
            ],
            optionsSuccessStatus: 204
        }));
        app.listen(port, () => {
            console.log(` server on port ${port}`);
        });
    }
    catch (err) {
        process.exit(1);
    }
}))();
//# sourceMappingURL=app.js.map
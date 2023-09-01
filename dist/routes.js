"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/CreateUserController");
const router = (0, express_1.Router)();
const createUser = new CreateUserController_1.CreateUserController();
router.post('/user', createUser.handle);
exports.default = router;
//# sourceMappingURL=routes.js.map
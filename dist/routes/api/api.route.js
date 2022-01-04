'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ApiRoute {
    constructor() {
        if (!ApiRoute.instance) {
            this.route = this.route.bind(this);
            ApiRoute.instance = this;
        }
        return ApiRoute.instance;
    }
    route() {
        const router = (0, express_1.Router)();
        // router.use('/auth', AuthRoute.route())
        return router;
    }
}
ApiRoute.instance = new ApiRoute();
exports.default = new ApiRoute();
//# sourceMappingURL=api.route.js.map
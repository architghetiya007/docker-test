"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersEntity = exports.ProductEntity = exports.OrderEntity = void 0;
const order_entity_1 = require("./order.entity");
Object.defineProperty(exports, "OrderEntity", { enumerable: true, get: function () { return order_entity_1.OrderEntity; } });
const product_entity_1 = require("./product.entity");
Object.defineProperty(exports, "ProductEntity", { enumerable: true, get: function () { return product_entity_1.ProductEntity; } });
const users_entity_1 = require("./users.entity");
Object.defineProperty(exports, "UsersEntity", { enumerable: true, get: function () { return users_entity_1.UsersEntity; } });
const entities = [order_entity_1.OrderEntity, product_entity_1.ProductEntity, users_entity_1.UsersEntity];
exports.default = entities;
//# sourceMappingURL=index.js.map
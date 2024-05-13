"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("../typeorm");
let ProductService = class ProductService {
    constructor(usersRepository, productRepository) {
        this.usersRepository = usersRepository;
        this.productRepository = productRepository;
    }
    async create(userId, body) {
        let product;
        let createProduct = await this.productRepository.create(Object.assign({}, body));
        product = await this.productRepository.save(createProduct);
        return {
            status: true,
            message: 'Product added',
            data: product
        };
    }
    async update(userId, body) {
        let { id } = body, restBody = __rest(body, ["id"]);
        await this.productRepository.update(id, restBody);
        return {
            status: true,
            message: 'Product update',
        };
    }
    async get(userId, body) {
        let product;
        product = await this.productRepository.findOne({ where: { id: body.id } });
        return {
            status: true,
            message: 'Get product',
            data: product
        };
    }
    async delete(userId, body) {
        await this.productRepository.update(body.id, { isDeleted: true });
        return {
            status: true,
            message: 'Product deleted'
        };
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_3.UsersEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(typeorm_3.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map
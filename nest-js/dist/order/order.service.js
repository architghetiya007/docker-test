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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("../typeorm");
const crypto_1 = require("crypto");
let OrderService = class OrderService {
    constructor(usersRepository, productRepository, orderRepository) {
        this.usersRepository = usersRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }
    async availableProduct(userId) {
        let available;
        try {
            available = await this.productRepository.find({
                where: { isDeleted: false, inventory: (0, typeorm_2.MoreThan)(0) },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                status: false,
                message: 'Internal server error',
            });
        }
        return {
            status: true,
            message: 'Available product',
            data: available,
        };
    }
    async create(userId, body) {
        try {
            let check = [];
            let available = [];
            for (let i = 0; i < body.length; i++) {
                const element = body[i];
                let value = await this.productRepository.findOne({
                    where: {
                        id: element.productId,
                    },
                });
                available.push(value.inventory);
                check.push(value.inventory >= element.qty);
            }
            if (check.includes(false)) {
                throw new common_1.BadRequestException({
                    status: false,
                    message: "Available product is less than order"
                });
            }
            let orderId = (0, crypto_1.randomBytes)(10).toString('hex');
            for (let i = 0; i < body.length; i++) {
                const element = body[i];
                await this.orderRepository.insert({
                    orderId: orderId,
                    userId: userId,
                    price: element.price,
                    qty: element.qty,
                    productId: element.productId,
                });
                await this.productRepository.update(element.productId, { inventory: (available[i] - element.qty) });
            }
        }
        catch (error) {
            if (common_1.BadRequestException) {
                throw new common_1.BadRequestException({
                    status: false,
                    message: "Available product is less than order"
                });
            }
            throw new common_1.InternalServerErrorException({
                status: false,
                message: 'Internal server error',
            });
        }
        return {
            status: true,
            message: 'Order created successfully',
        };
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_3.UsersEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(typeorm_3.ProductEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(typeorm_3.OrderEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map
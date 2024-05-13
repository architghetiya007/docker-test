import { ProductEntity } from './product.entity';
import { UsersEntity } from './users.entity';
export declare class OrderEntity {
    id: number;
    orderId: string;
    qty: number;
    price: number;
    userId: UsersEntity;
    productId: ProductEntity;
    createdAt: Date;
    updatedAt: Date;
}

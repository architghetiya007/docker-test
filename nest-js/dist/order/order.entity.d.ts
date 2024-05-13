import { ProductEntity } from 'src/product/product.entity';
import { UsersEntity } from 'src/users/users.entity';
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

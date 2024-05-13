import { Repository } from 'typeorm';
import { OrderEntity, ProductEntity, UsersEntity } from 'src/typeorm';
import { OrderRequestDTO } from './dto/request.dto';
export declare class OrderService {
    private usersRepository;
    private productRepository;
    private orderRepository;
    constructor(usersRepository: Repository<UsersEntity>, productRepository: Repository<ProductEntity>, orderRepository: Repository<OrderEntity>);
    availableProduct(userId: any): Promise<{
        status: boolean;
        message: string;
        data: ProductEntity[];
    }>;
    create(userId: any, body: OrderRequestDTO[]): Promise<{
        status: boolean;
        message: string;
    }>;
}

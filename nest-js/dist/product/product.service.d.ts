import { Repository } from 'typeorm';
import { ProductEntity, UsersEntity } from 'src/typeorm';
import { CreateProductRequestDto, GetProductRequestDto, UpdateProductRequestDto } from './dto/request.dto';
export declare class ProductService {
    private usersRepository;
    private productRepository;
    constructor(usersRepository: Repository<UsersEntity>, productRepository: Repository<ProductEntity>);
    create(userId: string, body: CreateProductRequestDto): Promise<{
        status: boolean;
        message: string;
        data: ProductEntity;
    }>;
    update(userId: string, body: UpdateProductRequestDto): Promise<{
        status: boolean;
        message: string;
    }>;
    get(userId: string, body: GetProductRequestDto): Promise<{
        status: boolean;
        message: string;
        data: ProductEntity;
    }>;
    delete(userId: string, body: GetProductRequestDto): Promise<{
        status: boolean;
        message: string;
    }>;
}

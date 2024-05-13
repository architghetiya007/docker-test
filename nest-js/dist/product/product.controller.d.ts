import { ProductService } from './product.service';
import { CreateProductRequestDto, GetProductRequestDto, UpdateProductRequestDto } from './dto/request.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(req: any, body: CreateProductRequestDto): Promise<{
        status: boolean;
        message: string;
        data: import("../typeorm").ProductEntity;
    }>;
    update(req: any, body: UpdateProductRequestDto): Promise<{
        status: boolean;
        message: string;
    }>;
    get(req: any, body: GetProductRequestDto): Promise<{
        status: boolean;
        message: string;
        data: import("../typeorm").ProductEntity;
    }>;
    delete(req: any, body: GetProductRequestDto): Promise<{
        status: boolean;
        message: string;
    }>;
}

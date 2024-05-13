import { OrderService } from './order.service';
import { OrderRequestDTO } from './dto/request.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    availableProduct(req: any): Promise<{
        status: boolean;
        message: string;
        data: import("../typeorm").ProductEntity[];
    }>;
    create(req: any, body: OrderRequestDTO[]): Promise<{
        status: boolean;
        message: string;
    }>;
}

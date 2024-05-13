import { OrderEntity } from './order.entity';
import { ProductEntity } from './product.entity';
import { UsersEntity } from './users.entity';
declare const entities: (typeof OrderEntity | typeof ProductEntity | typeof UsersEntity)[];
export { OrderEntity, ProductEntity, UsersEntity };
export default entities;

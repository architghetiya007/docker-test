"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
process.env.AWS_NODEJS_CONNECTION_REUSE_ENABLED = '0';
const bodyParser = require("body-parser");
async function bootstrap() {
    const port = process.env.PORT ? Number(process.env.PORT) : 3001;
    const TCP_PORT = process.env.TCP_PORT ? Number(process.env.TCP_PORT) : 3002;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map
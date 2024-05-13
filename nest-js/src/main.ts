import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
process.env.AWS_NODEJS_CONNECTION_REUSE_ENABLED = '0';
import * as bodyParser from 'body-parser';
async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 3001;
  const TCP_PORT = process.env.TCP_PORT ? Number(process.env.TCP_PORT) : 3002;
  const app = await NestFactory.create(AppModule);
 // app.setGlobalPrefix('otau/mgmt');
  
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true }));
  await app.listen(port);
}
bootstrap();

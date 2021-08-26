import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(3000);
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'Content-Type, Authorization',});
  await app.listen(process.env.PORT || 8080);
  
}
bootstrap();


function cors(): any {
  throw new Error('Function not implemented.');
}


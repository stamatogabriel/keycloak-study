import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Keicloak Training')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  app.use(urlencoded({ extended: true }));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

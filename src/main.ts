import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
/* import * as path from 'path';
import * as express from 'express'; */
import * as dotenv from 'dotenv';
import { GlobalExceptionFilter } from './common/all-exceptions.filter';

// Loads .env file contents into process.env by default
dotenv.config();

async function bootstrap() {
  // Creates an instance of NestApplication.
  const app = await NestFactory.create(AppModule, { cors: true });

  // Apply global filter
  app.useGlobalFilters(new GlobalExceptionFilter());

  // Registers pipes as global pipes (will be used within every HTTP route handler)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strips unrecognized fields
    forbidNonWhitelisted: true, // throws error on extra fields
    transform: true, // auto-transform to DTO class
  }));

  // serve uploads statically
  /* const uploadDir = process.env.UPLOAD_DIR || './uploads';
  app.use('/uploads', express.static(path.join(process.cwd(), uploadDir))); */

  const config = new DocumentBuilder()
    .setTitle('AlNakheel API')
    .setDescription('AlNakheel Ecommerce backend API with JWT + RBAC')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    jsonDocumentUrl: 'api-json', // Exposes JSON at /api-json
  });

  // Starts the application.
  await app.listen(process.env.PORT || 3000);
  console.log('Server listening on', process.env.PORT || 3000);
}
bootstrap();

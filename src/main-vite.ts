import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const viteNodeApp = NestFactory.create(AppModule);

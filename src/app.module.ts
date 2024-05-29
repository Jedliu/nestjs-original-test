import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import * as config from './mikro-orm.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MikroOrmModule.forRoot(config.default)],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}

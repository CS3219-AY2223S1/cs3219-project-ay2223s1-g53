import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [DbModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

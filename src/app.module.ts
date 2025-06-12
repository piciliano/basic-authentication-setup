import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, TasksModule, UsersModule, AuthModule],
})
export class AppModule {}

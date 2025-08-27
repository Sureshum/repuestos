import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepuestosModule } from './repuesto/repuestos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/repuestos'), 
    RepuestosModule, UserModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

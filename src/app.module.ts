import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RepuestosModule } from './repuestos/repuestos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('DATABASE_URL'),
        retryAttempts: 5,
        connectTimeoutMS: 10000,
      }),
      inject: [ConfigService],
    }),
    AuthModule,        
    RepuestosModule, 
  ],
})
export class AppModule {}
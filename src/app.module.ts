import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StartupModule } from './startup/startup.module';
import { InvestorModule } from './investor/investor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseService,
      inject: [ConfigService],
    }),
    StartupModule,
    InvestorModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}

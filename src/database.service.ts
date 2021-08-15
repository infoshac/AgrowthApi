import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('TYPEORM_HOST'),
      port: +this.configService.get('TYPEORM_PORT') || 5432,
      username: this.configService.get('TYPEORM_USERNAME'),
      password: this.configService.get('TYPEORM_PASSWORD'),
      database: this.configService.get('TYPEORM_DATABASE'),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      useUTC: true,
      migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
      cli: {
        migrationsDir: __dirname + '/database/migrations',
      },
    };
  }
}

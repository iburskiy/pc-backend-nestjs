import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './typeorm/entities/Product';
import { ProductField } from './typeorm/entities/ProductField';
import { LkpProductBrand } from './typeorm/entities/LkpProductBrand';
import { LkpProductColor } from './typeorm/entities/LkpProductColor';
import { LkpProductCpu } from './typeorm/entities/LkpProductCpu';
import { LkpProductGraphics } from './typeorm/entities/LkpProductGraphics';
import { LkpProductOs } from './typeorm/entities/LkpProductOs';
import { LkpProductRamType } from './typeorm/entities/LkpProductRamType';
import { LkpProductResolution } from './typeorm/entities/LkpProductResolution';
import { LkpProductType } from './typeorm/entities/LkpProductType';
import { LkpProductYear } from './typeorm/entities/LkpProductYear';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [
        LkpProductBrand, LkpProductColor, LkpProductCpu, LkpProductGraphics,LkpProductOs,
        LkpProductRamType, LkpProductResolution, LkpProductType, LkpProductYear,
        ProductField, Product, User,
      ],
      synchronize: true,
  }),
    UserModule],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}

//Product, ProductField, LkpProductBrand, LkpProductColor, LkpProductCpu, LkpProductGraphics, LkpProductOs,
//         LkpProductRamType, LkpProductResolution, LkpProductType, LkpProductYear

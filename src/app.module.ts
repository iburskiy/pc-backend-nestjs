import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { CpuModule } from './lookups/cpu/cpu.module';
import { BrandModule } from './lookups/brand/brand.module';
import { ColorModule } from './lookups/color/color.module';
import { GraphicsModule } from './lookups/graphics/graphics.module';
import { OsModule } from './lookups/os/os.module';
import { RamTypeModule } from './lookups/ram-type/ram-type.module';
import { ResolutionModule } from './lookups/resolution/resolution.module';
import { TypeModule } from './lookups/type/type.module';
import { YearModule } from './lookups/year/year.module';
import { ProductFieldModule } from './product-field/product-field.module';
import { ProductModule } from './product/product.module';

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
      //autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    BrandModule,
    ColorModule,
    CpuModule,
    GraphicsModule,
    OsModule,
    RamTypeModule,
    ResolutionModule,
    TypeModule,
    YearModule,
    ProductFieldModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//Product, ProductField, LkpProductBrand, LkpProductColor, LkpProductCpu, LkpProductGraphics, LkpProductOs,
//         LkpProductRamType, LkpProductResolution, LkpProductType, LkpProductYear

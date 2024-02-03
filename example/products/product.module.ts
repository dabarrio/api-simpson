import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';

@Module({
  controllers: [ProductsController],
  exports: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService],
})
export class ProductModule {}

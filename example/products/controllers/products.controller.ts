import { Controller, Get } from '@nestjs/common';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { ProductsService } from '../services/products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get('')
  generateKey() {
    const products = this.productService.findAll();
    console.log(products);
    return randomStringGenerator();
  }
}

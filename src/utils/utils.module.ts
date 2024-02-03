import { Module } from '@nestjs/common';
import { PaginationService } from './service/utils.service';

@Module({
  providers: [PaginationService],
  exports: [PaginationService],
})
export class UtilsModule {}

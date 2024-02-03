import { Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { PaginationQueryDto } from '../dto/pagination.dto';

@Injectable()
export class PaginationService<T> {
  async findAll(
    paginationQuery: PaginationQueryDto,
    repo: Repository<T>,
    options?: FindManyOptions<T>,
  ): Promise<[T[], number]> {
    const { page, limit } = paginationQuery;

    const [data, totalCount] = await repo
      .createQueryBuilder('characters')
      .orderBy('characters.createdAt', 'ASC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return [data, totalCount];
  }
}

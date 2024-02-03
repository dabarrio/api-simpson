// Nest
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// Custom
import { CharacterDto } from '../dto/character.dto';
import { PaginationQueryDto } from 'src/utils/dto/pagination.dto';
import { Character } from '../entity/character.entity';
import { PaginationService } from 'src/utils/service/utils.service';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character) private repo: Repository<Character>,
    private paginationService: PaginationService<Character>,
  ) {}

  async findAll(paginationQuery: PaginationQueryDto) {
    const [characters, totalCount] = await this.paginationService.findAll(
      paginationQuery,
      this.repo,
    );

    const totalPages = Math.ceil(totalCount / paginationQuery.limit);

    const data = characters.map((char) => new CharacterDto(char));

    return {
      data,
      meta: {
        pagination: {
          totalItems: totalCount,
          itemCount: data.length,
          itemsPerPage: paginationQuery.limit,
          totalPages,
          currentPage: paginationQuery.page,
        },
      },
    };
  }

  async findOne(id: string) {
    const character = await this.repo.findOne({ where: { id: id } });

    const data = new CharacterDto(character);

    return data;
  }

  async findRandom(count: number) {
    const query = `SELECT * FROM characters
    ORDER BY RAND()
    LIMIT ${count}`;

    const characters = await this.repo.query(query);

    const data = characters.map((char) => new CharacterDto(char));
    console.log(data);
    return { data };
  }

  // async seed() {
  //   try {
  //     const data = [];

  //     await Promise.all(
  //       data.map(async (character: any) => {
  //         const char = await this.repo.create(character);
  //         return this.repo.save(char);
  //       }),
  //     );

  //     const all = await this.findAll();

  //     return all;
  //   } catch (error) {
  //     return error;
  //   }
  // }
}

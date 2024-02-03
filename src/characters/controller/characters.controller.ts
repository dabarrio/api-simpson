import { Controller, Get, Param, Query } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CharactersService } from '../service/characters.service';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { TransformInstanceToPlain } from 'class-transformer';
import { PaginationQueryDto } from 'src/utils/dto/pagination.dto';
import { CharacterDto, ResponseAllCharacters } from '../dto/character.dto';

@ApiTags('Characters')
@Controller('characters')
export class CharactersController {
  constructor(private characterService: CharactersService) {}

  @Get()
  @ApiOperation({ summary: 'Get The Simpsons characters :)' })
  @ApiQuery({ type: PaginationQueryDto })
  @ApiOkResponse({ type: [ResponseAllCharacters] })
  @ApiBody({ type: [ResponseAllCharacters] })
  @TransformInstanceToPlain()
  getAllCharacters(@Query() paginationQuery: PaginationQueryDto) {
    const characters = this.characterService.findAll(paginationQuery);
    return characters;
  }

  @Get('/random')
  getRandomCharacters() {
    const characters = this.characterService.findRandom(12);

    return characters;
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get one The Simpsons characters :)' })
  @ApiOkResponse({ type: CharacterDto })
  @ApiBody({ type: CharacterDto })
  getOneCharacter(@Param('id') id: string) {
    const character = this.characterService.findOne(id);

    return character;
  }
}

import { Module } from '@nestjs/common';
import { CharactersController } from './controller/characters.controller';
import { CharactersService } from './service/characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entity/character.entity';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService],
  imports: [TypeOrmModule.forFeature([Character]), UtilsModule],
})
export class CharactersModule {}

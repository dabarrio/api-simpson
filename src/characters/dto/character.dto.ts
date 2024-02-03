import { Exclude, Expose } from 'class-transformer';
import { PaginationDto } from 'src/utils/dto/pagination.dto';

@Exclude()
export class CharacterDto {
  @Expose()
  readonly id: string;

  @Expose()
  readonly name: string;

  @Expose()
  readonly description: string;

  @Expose()
  readonly image: string;

  @Expose()
  readonly gender: string;

  @Expose()
  readonly status: string;

  @Expose()
  readonly profession: string;

  constructor(partial: Partial<CharacterDto>) {
    Object.assign(this, partial);
  }
}

@Expose()
export class ResponseAllCharacters {
  @Expose()
  readonly data: CharacterDto[];

  @Expose()
  readonly meta: PaginationDto;
}

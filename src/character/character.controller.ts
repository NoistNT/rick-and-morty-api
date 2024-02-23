import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  getCharacters(
    @Query()
    queryParams: {
      page?: number;
      name?: string;
      status?: string;
      species?: string;
      gender?: string;
      type?: string;
    },
  ) {
    return this.characterService.getCharacters(queryParams);
  }

  @Get(':id')
  getCharacter(@Param('id') id: number) {
    return this.characterService.getCharacter(id);
  }
}

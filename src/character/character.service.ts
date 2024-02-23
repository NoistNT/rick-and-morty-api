import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import {
  Character,
  CharacterDetail,
  CharacterResponse,
} from './entities/character.entity';
dotenv.config();

const { BASE_URL } = process.env;

@Injectable()
export class CharacterService {
  /**
   * Retrieves a list of characters based on the specified page and optional filters.
   *
   * @param {Object} filters - The filters for character list
   * @param {number} [filters.page=1] - The page number for the character list
   * @param {string} [filters.name] - The name of the character
   * @param {string} [filters.status] - The status of the character
   * @param {string} [filters.species] - The species of the character
   * @param {string} [filters.gender] - The gender of the character
   * @param {string} [filters.type] - The type of the character
   * @return {Promise<Character[]>} A list of characters
   */
  async getCharacters(
    filters: {
      page?: number;
      name?: string;
      status?: string;
      species?: string;
      gender?: string;
      type?: string;
    } = {},
  ): Promise<Character[]> {
    try {
      const { page = 1, ...queryParams } = filters;
      const queryString = Object.entries(queryParams)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

      const response = await fetch(
        `${BASE_URL}/character/?page=${page}${queryString ? `&${queryString}` : ''}`,
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const { results: data }: { results: CharacterResponse[] } =
        await response.json();

      return data.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        image: character.image,
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Asynchronously retrieves a character detail by ID.
   *
   * @param {number} id - The ID of the character to retrieve
   * @return {Promise<CharacterDetail>} A promise that resolves to the character detail
   */
  async getCharacter(id: number): Promise<CharacterDetail> {
    try {
      const response = await fetch(`${BASE_URL}/character/${id}`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data: CharacterResponse = await response.json();

      return {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        type: data.type,
        gender: data.gender,
        origin: data.origin.name,
        location: data.location.name,
        image: data.image,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

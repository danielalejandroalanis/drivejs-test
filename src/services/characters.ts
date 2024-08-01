import axios from 'axios';
import { RickAndMorty } from '../interfaces';

export async function getCharacters(): Promise<RickAndMorty> {
    const response = await axios.get<RickAndMorty>('https://rickandmortyapi.com/api/character');
    return response.data;
}
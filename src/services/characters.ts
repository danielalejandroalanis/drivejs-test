import axios from 'axios';
import { Result, RickAndMorty } from '../interfaces';

export async function getCharacters(): Promise<RickAndMorty> {
    const response = await axios.get<RickAndMorty>('https://rickandmortyapi.com/api/character');
    return response.data;
}

export async function getCharacterById(id: number) {
    const response = await axios.get<Result>(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
}
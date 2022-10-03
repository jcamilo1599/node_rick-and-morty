import fetch, {Response} from 'node-fetch';
import {GenerateFileModel} from "../../models/generate_file/get";
import {Character, CharactersAPIResp} from "../../models/characters/characters";
import fs from "fs";

export class GenerateFileUseCases {
    private readonly name: string;
    private readonly status: string;

    /**
     * @param {string} name nombre del personaje
     * @param {string} status estado del personaje
     */
    constructor(name: string, status: string) {
        this.name = name;
        this.status = status;
    }

    private async getCharacters(): Promise<CharactersAPIResp | null> {
        try {
            const url: string = `https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.status}`;
            const request: Response = await fetch(url, {method: 'get'});
            return await request.json();
        } catch (error) {
            return null;
        }
    }

    private async generateCSV(characters: Character[]) {
        
    }

    /**
     * Instancia el caso de uso que obtiene los clientes de una empresa
     */
    public async instance(): Promise<GenerateFileModel> {
        const response: GenerateFileModel = {
            status: 200,
            message: '',
        };

        // Consume el api que obtiene los personajes
        const api: CharactersAPIResp | null = await this.getCharacters();

        // Si se produjo un error al consumir el api
        if (api == null) {
            response.status = 400;
            response.message = 'Se produjo un error, no se genero archivo.';
            return response;
        }

        // Si no se encontraron resultados
        if (api.error || api.results && api.results?.length === 0) {
            response.status = 206;
            response.message = 'No se encontraron personajes, no se genero archivo.';
            return response;
        }

        // Genera el archivo CSV
        await this.generateCSV(api.results!);

        return response;
    }
}
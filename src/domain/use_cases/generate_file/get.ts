import {GenerateFileModel} from "../../models/generate_file/get";

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

    /**
     * Instancia el caso de uso que obtiene los clientes de una empresa
     */
    public async instance(): Promise<GenerateFileModel> {
        const response: GenerateFileModel = {
            status: 200,
            message: '',
        };

        return response;
    }
}
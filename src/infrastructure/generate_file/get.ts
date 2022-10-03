import express from "express";
import {GenerateFileUseCases} from "../../domain/use_cases/generate_file/get";
import {GenerateFileModel} from "../../domain/models/generate_file/get";

export class GenerateFile {
    private static routeCallback = async (
        request: express.Request,
        response: express.Response,
    ) => {
        const name: string = request.query.name?.toString() ?? '';
        const status: string = request.query.status?.toString() ?? '';
        const useCase: GenerateFileUseCases = new GenerateFileUseCases(name, status);
        const useCaseResponse: GenerateFileModel = await useCase.instance();
        response.status(useCaseResponse.status).json(useCaseResponse);
    };

    /**
     * Instancia el objeto
     */
    public static instance(): express.Application {
        const app: express.Application = express();
        const routePath: string = '/generate_file';

        app.get(routePath, this.routeCallback);

        return app;
    }
}
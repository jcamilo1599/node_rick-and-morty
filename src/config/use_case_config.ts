import express from "express";
import {GenerateFile} from "../infrastructure/generate_file/get";

export class UseCaseConfig {
    private readonly app: express.Application;

    /**
     * Mapea la información requerida para instanciar todas las rutas
     */
    constructor() {
        this.app = express();
        this.addHandlers();
    }

    /**
     * Rutas
     */
    private addHandlers(): void {
        this.app.use(GenerateFile.instance());
    }

    /**
     * Instancia del objeto
     */
    public instance = (): express.Application => this.app;
}
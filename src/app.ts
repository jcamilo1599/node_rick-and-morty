import express from "express";
import {UseCaseConfig} from "./config/use_case_config";

const app = express();
const port = 8080;
const useCaseConfig = new UseCaseConfig();

app.use(useCaseConfig.instance());

app.listen(port, () => {
    console.log(`Ejecutando Rick and Morty en el puerto ${port}`)
})
import { RestAPI } from "@olula/lib/api/rest_api.ts";

export type TasaConversion = {
    date: string;
    base: string;
    quote: string;
    rate: number;
};

export const getTasasConversion = async (): Promise<TasaConversion[]> =>
    await RestAPI.get<TasaConversion[]>(
        "/comun/divisa/tasa-conversion",
        "Error al consultar las tasas de conversión"
    );
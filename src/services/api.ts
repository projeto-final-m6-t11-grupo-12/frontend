import { IProductCard } from "../components/ProductCardList";

import axios, { Axios } from "axios";

const API_PORT = import.meta.env.VITE_API_PORT;

const api: Axios = axios.create({
    baseURL: `http://localhost:${API_PORT}`,
});

export class APIRequests {
    static api: Axios = api;

    static async getProducts(): Promise<Array<IProductCard>> {
        const products: Array<IProductCard> = await this.api.get("/products");
        return products;
    }
}

export default api;

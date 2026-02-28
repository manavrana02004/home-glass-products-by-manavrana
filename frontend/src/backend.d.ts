import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    imagePath: string;
    name: string;
    specs: Array<[string, string]>;
    shortDescription: string;
    category: string;
    fullDescription: string;
}
export interface backendInterface {
    addProduct(id: bigint, name: string, category: string, shortDescription: string, fullDescription: string, specs: Array<[string, string]>, imagePath: string): Promise<void>;
    getAllProducts(): Promise<Array<Product>>;
    getProduct(id: bigint): Promise<Product>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
}

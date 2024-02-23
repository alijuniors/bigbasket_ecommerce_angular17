export interface Product {
    id: bigint;
    title: string;
    price: number;
    description: string;
    category: string;
    image:string;
    rating: Array<string>;
    results: Product[]
}

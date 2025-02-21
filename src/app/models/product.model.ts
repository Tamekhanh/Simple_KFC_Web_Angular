export interface productModel {
    title: string;
    id: number;
    image: string;
    items: itemModel[];
}

export interface itemModel {
    id: number;
    image: string;
    title: string;
    base_price: number;
    sale_price: number;
    description: string;
    isCus: boolean;
}
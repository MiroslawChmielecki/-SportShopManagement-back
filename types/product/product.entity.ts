import {ProductCategory} from "./product.category";

export interface NewProductEntity extends Omit<ProductEntity, 'id'> {
    id?: string;
}

export type CreateProductEntity = Omit<ProductEntity, 'id'>

export interface ProductEntity {
    id: string;
    name: string;
    imgPath: string;
    description: string;
    price: number;
    category: ProductCategory;
    brand: string;
    dateAdded: string;
    quantity: number;
}
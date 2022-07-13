import {FieldPacket} from "mysql2";
import {ProductCategory, ProductEntity} from "../../types";
import {pool} from "../../utils/dbMySql";

type ProductsShopResults = [ProductsShopRecord[], FieldPacket[]];

export class ProductsShopRecord {

    id: string;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    productKind: string;
    image: string;
    brand: string;
    dateAdded: string;
    quantity: number;

    constructor(obj: ProductEntity) {
        const {id, name, description, price, category, productKind, image, brand, dateAdded, quantity} = obj;


        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.productKind = productKind;
        this.image = image;
        this.brand = brand;
        this.dateAdded = dateAdded;
        this.quantity = quantity;
    }

    static async getAll(): Promise<ProductsShopRecord[] | null> {
        const [results] = await pool.execute("SELECT * FROM `products`") as ProductsShopResults;
        return results.map(obj => new ProductsShopRecord(obj));
    }
}
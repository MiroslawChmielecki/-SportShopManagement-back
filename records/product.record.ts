import {NewProductEntity, ProductCategory, ProductEntity} from '../types'
import {ValidationError} from "../utils/errors";
import {pool} from "../utils/dbMySql";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';

//metody statyczne dotyczą ogółu zbioru a nie statyczne, wykonywane na obiekcie dotyczą pojedynczego elementu
type ProductRecordResults = [ProductRecord[], FieldPacket[]];

export class ProductRecord implements ProductEntity {
    //domyślnie jest public

    id: string;
    name: string;
    imgPath: string;
    description: string;
    price: number;
    category: ProductCategory;
    brand: string;
    dateAdded: string;
    quantity: number;

    constructor(obj: NewProductEntity) {
        const {id, name, imgPath, description, price, category, brand, dateAdded, quantity} = obj;

        if (!name || name.length < 3 || name.length > 30) {
            throw new ValidationError("Nazwa produktu mieć od 3 do 25 znaków.")
        }

        if (!imgPath || imgPath.length > 150) {
            throw new ValidationError("Ścieżka do zdjęcia nie może być pusta ani dłuższa niż 150 znaków")
        }

        if (!description || description.length < 5 || description.length > 3000) {
            throw new ValidationError("Opis produktu mieć od 5 do 2000 znaków.")

        }
        if (!price || price < 0 || price > 999999) {
            throw new ValidationError("Cena produktu musi się zawierać między 0 a 999999")
        }

        if (!category || category.length < 3 || category.length > 30) {
            throw new ValidationError("Kategoria produktu musi zawierać między 3 a 30 znaków")
        }

        if (!brand) {
            throw new ValidationError("Podaj markę produktu");
        }

        if (!dateAdded) {
            throw new ValidationError("Brak daty")
        }

        if (!quantity || quantity < 0 || quantity > 200) {
            throw new ValidationError("Ilość sztuk musi zawierać się w przedziale od 0 do 200")
        }

        this.id = id;
        this.name = name;
        this.imgPath = imgPath;
        this.description = description;
        this.price = price;
        this.category = category;
        this.brand = brand;
        this.dateAdded = dateAdded;
        this.quantity = quantity;
    }

    //getOne
    static async getOne(id: string): Promise<ProductRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `products` WHERE id = :id", {
            id,
        }) as ProductRecordResults;
        return results.length === 0 ? null : new ProductRecord(results[0])
    }

    static async getAll(): Promise<ProductRecord[] | null> {
        const [results] = await pool.execute("SELECT * FROM `products`") as ProductRecordResults;
        return results.map(obj => new ProductRecord(obj));
    }

    //delete
    async delete(): Promise<void> {
        await pool.execute("DELETE FROM `products` WHERE `id` = :id", {
            id: this.id,
        })
    }

    //insert
    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid();
        } else {
            throw new Error('Juz istnieje produkt o takim id !!')
        }

        await pool.execute("INSERT INTO `products`(`id`, `name`, `imgPath`, `description`, `price`, `category`, `brand`, `dateAdded`, `quantity`) VALUES(:id, :name, :imgPath, :description, :price, :category, :brand, :dateAdded, :quantity)", this)
    }


    //update
    async update(): Promise<void> {
        await pool.execute('UPDATE `products` SET `name` = :name, `imgPath` = :imgPath, `description` = :description, `price` = :price, `category` = :category, `brand` = :brand, `dateAdded` = :dateAdded, `quantity` = :quantity WHERE `id` = :id ', {
            id: this.id,
            name: this.name,
            imgPath: this.imgPath,
            description: this.description,
            price: this.price,
            category: this.category,
            brand: this.brand,
            dateAdded: this.dateAdded,
            quantity: this.quantity,
        });
    }

    static async findSearched(name: string): Promise<ProductRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `products` WHERE `name` LIKE :search", {
            search: `%${name}%`,
        }) as ProductRecordResults;

        return results.map(result => new ProductRecord(result));
    }
}
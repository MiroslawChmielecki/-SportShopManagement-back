import {NewProductEntity, ProductCategory, ProductEntity} from '../../types'
import {NotFoundError, ValidationError} from "../../utils/errors";
import {pool} from "../../utils/dbMySql";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';

//metody statyczne dotyczą ogółu zbioru a nie statyczne, wykonywane na obiekcie dotyczą pojedynczego elementu
type ProductRecordResults = [ProductRecord[], FieldPacket[]];

export class ProductRecord implements ProductEntity {
    //domyślnie jest public

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

    constructor(obj: NewProductEntity) {
        const {id, name, description, price, category, productKind, image, brand, dateAdded, quantity} = obj;

        if (!name || name.length < 3 || name.length > 30) {
            throw new ValidationError("Nazwa produktu musi mieć od 3 do 30 znaków.")
        }

        if (!description || description.length < 5 || description.length > 3000) {
            throw new ValidationError("Opis produktu mieć od 5 do 2000 znaków.")
        }

        if (!price || price < 0 || price > 999999) {
            throw new ValidationError("Cena produktu musi się zawierać między 0,1 a 999999")
        }

        if (!category || category.length < 3 || category.length > 30) {
            throw new ValidationError("Kategoria produktu musi zawierać między 3 a 30 znaków")
        }

        if (!image) {
            throw new ValidationError("Dobierz zdjęcie do produktu")
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
        this.description = description;
        this.price = price;
        this.category = category;
        this.productKind = productKind;
        this.image = image;
        this.brand = brand;
        this.dateAdded = dateAdded;
        this.quantity = quantity;
    }

    //getOne
    static async getOne(id: string): Promise<ProductRecord | null> {
        if(!id) {
            throw new NotFoundError()
        }
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
            throw new ValidationError('Juz istnieje produkt o takim id !!')
        }

        await pool.execute("INSERT INTO `products`(`id`, `name`, `image`, `description`, `price`, `category`, `productKind`, `brand`, `dateAdded`, `quantity`) VALUES(:id, :name, :image, :description, :price, :category, :productKind, :brand, :dateAdded, :quantity)", this)
    }

    //wyszukaj po nazwie
    static async findSearched(name: string): Promise<ProductRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `products` WHERE `name` LIKE :search", {
            search: `%${name}%`,
        }) as ProductRecordResults;

        return results.map(result => new ProductRecord(result));
    }

    //update
    async update(): Promise<void> {

        if(!this.id) {
            throw new ValidationError('Nie można uaktualnić produktu który nie istnieje')
        }

        await pool.execute('UPDATE `products` SET `name` = :name, `image` = :image, `description` = :description, `price` = :price, `category` = :category, `productKind` = :productKind, `brand` = :brand, `dateAdded` = :dateAdded, `quantity` = :quantity WHERE `id` = :id', {
            id: this.id,
            name: this.name,
            image: this.image,
            description: this.description,
            price: this.price,
            category: this.category,
            productKind: this.productKind,
            brand: this.brand,
            dateAdded: this.dateAdded,
            quantity: this.quantity,
        });
    }
}
import {pool} from "../utils/dbMySql";
import {ProductRecord} from "../records/product.record";
import {ProductCategory} from "../types";

const defaultObj = {
    id: "8t7f8gf874f083740834f8034h3180fh",
    name: "piłka nożna",
    imgPath: "",
    description: "super piłka do gry na orliku",
    price: 89,
    productCategory: ProductCategory.soccer,
    brand: "Nike",
    dateAdded: "2022-01-12",
    quantity: 5,
}

afterAll(async () => {
    await pool.end();
})

test('ProductRecord.getOne returns data from database for one entry.', async () => {
//testujemy metodę statyczną, pobieranie pojedynczego elementu
    const product = await ProductRecord.getOne('4763846213846238476348');

    expect(product).toBeDefined();
    expect(product.id).toBe('4763846213846238476348');
    expect(product.name).toBe('piłka nożna lewy')

});

test('ProductRecord.getOne returns null from database for not existing entry.', async () => {
    const product = await ProductRecord.getOne('---');

    expect(product).toBeNull();
})
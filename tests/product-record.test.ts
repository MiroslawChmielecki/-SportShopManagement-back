import {pool} from "../utils/dbMySql";
import {ProductRecord} from "../records/product.record";
import {ProductCategory} from "../types";

const defaultObj = {
    id: "8t7f8gf874f083740834f8034h3180fhfsdfsdf",
    name: "rękawice",
    imgPath: "../",
    description: "super łapacze od Jurka Dudka",
    price: 89,
    category: ProductCategory.soccer,
    brand: "Nike",
    dateAdded: "2022-01-12",
    quantity: 5,
}

afterAll(async () => {
    await pool.end();
})

test('Can build Product Record', () => {
    const product = new ProductRecord(defaultObj);

    expect(product.name).toBe('rękawice');
    expect(product.price).toBe(89);
    expect(product.category).toBe('soccer');
    expect(product.id).toBe("8t7f8gf874f083740834f8034h3180fhfsdfsdf");
    expect(product.dateAdded).toBe("2022-01-12");
    expect(product.description).toBe("super łapacze od Jurka Dudka");
    expect(product.brand).toBe("Nike");
    expect(product.quantity).toBe(5);
});




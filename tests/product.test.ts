import {ProductCategory} from "../types";
import {pool} from "../utils/dbMySql";
import {ProductRecord} from "../records/admin/product.record";

const defaultObj = {
    name: "rękawice",
    imgPath: "../",
    description: "super łapacze od Jurka Dudka",
    price: 89,
    category: ProductCategory.soccer,
    brand: "Nike",
    dateAdded: "2022-01-12",
    quantity: 5,
};

const defaultObj2 = {
    name: "piłka do rugby",
    imgPath: "../../",
    description: "nie ma lepszej niż u nas, siniaki gwarantowane",
    price: 55,
    category: ProductCategory.rugby,
    brand: "Wilson",
    dateAdded: "2005-04-30",
    quantity: 3,
};

afterAll(async () => {
    await pool.end();
})

//getOne
test('ProductRecord.getOne returns data from database for one entry.', async () => {

    const product = await ProductRecord.getOne('4763846213846238476348');

    expect(product).toBeDefined();
    expect(product.id).toBe('4763846213846238476348');
    expect(product.name).toBe('piłka nożna lewy');
    expect(product.category).toBe('soccer');
    expect(product.brand).toBe('Nike');
    expect(product.price).toBe(67.00);
    expect(product.dateAdded).toBe("2022-06-17");
    expect(product.quantity).toBe(4);

});


test('ProductRecord.getOne returns null from database for not existing entry.', async () => {
    const product = await ProductRecord.getOne('000000');
    expect(product).toBeNull();
})

//getAll
test('ProductRecord.getAll returns array of found products.', async () => {
    const products = await ProductRecord.getAll();
    expect(products).toBeDefined();
    expect(products).not.toEqual('');
});


//insert
test("ProductRecord.insert returns new uuid.", async () => {
    const product = new ProductRecord(defaultObj2);
    await product.insert();

    expect(product.id).toBeDefined();
    expect(typeof product.id).toBe('string')

});

test("ProductRecord.insert inserts data to database", async () => {
    const product = new ProductRecord(defaultObj);
   await product.insert();

   const insertedProduct = await ProductRecord.getOne(product.id);

   expect(insertedProduct).toBeDefined();
   expect(insertedProduct.name).toEqual('rękawice');
})

//findSearched
test("ProductRecord.findSearched return array of found products", async () => {
    const foundProducts = await ProductRecord.findSearched('ręk');

    expect(foundProducts).not.toEqual([]);
    expect(Array.isArray(foundProducts)).toBe(true);
    expect(foundProducts[0].id).toBe('47bcb736-cfd1-4710-baf4-b044bcb08c9f');

})

test("ProductRecord.findSearched return array of found products", async () => {
    const foundProducts = await ProductRecord.findSearched('----');

    expect(foundProducts).toEqual([]);
})

test("ProductRecord.findSearched return empty array of found products not existing", async () => {
    const foundProducts = await ProductRecord.findSearched('----');

    expect(foundProducts).toEqual([]);
})

test("ProductRecord.findSearched with empty searching returns all products ", async () => {
    const foundProducts = await ProductRecord.findSearched('');

    expect(foundProducts).toBeDefined();
    expect(foundProducts[1].id).toEqual('38078320-c79b-461d-8b2f-31db882559b5');
});




// import {ProductCategory} from "../types";
// import {pool} from "../utils/dbMySql";
// import {AdminProductRecord} from "../records/admin/adminProduct.record";
//
// const defaultObj = {
//     name: "rękawice",
//     description: "super łapacze od Jurka Dudka",
//     image:'...........',
//     price: 89,
//     category: ProductCategory.soccer,
//     productKind: 'kdskgsahjdg',
//     brand: "Best",
//     dateAdded: "2022-01-12",
//     quantity: 5,
// };
//
// const defaultObj2 = {
//     id: '1b28ff12-603b-4671-7ebd-98d57afad5a4',
//     name: "rękawice",
//     description: "super łapacze od Jurka Dudka",
//     image:'...........',
//     price: 89,
//     category: ProductCategory.soccer,
//     productKind: 'kdskgsahjdg',
//     brand: "Best",
//     dateAdded: "2022-01-12",
//     quantity: 5,
// };
//
//
// afterAll(async () => {
//     await pool.end();
// })
//
// //getOne
// test('AdminProductRecord.getOne returns data from database for one entry.', async () => {
//
//     const product = await AdminProductRecord.getOne('4763846213846238476348');
//
//     expect(product).toBeDefined();
//     expect(product.name).toBe('piłka nożna lewy');
//     expect(product.category).toBe('soccer');
//     expect(product.brand).toBe('Nike');
//     expect(product.price).toBe(67.00);
//     expect(product.dateAdded).toBe("2022-06-17");
//     expect(product.quantity).toBe(4);
//
// });
//
//
// test('AdminProductRecord.getOne returns null from database for not existing entry.', async () => {
//     const product = await AdminProductRecord.getOne('000000');
//     expect(product).toBeNull();
// })
//
// //getAll
// test('AdminProductRecord.getAll returns array of found products.', async () => {
//     const products = await AdminProductRecord.getAll();
//     expect(products).toBeDefined();
//     expect(products).not.toEqual('');
// });


// test("AdminProductRecord.insert inserts data to database", async () => {
//     const product = new AdminProductRecord(defaultObj3);
//     await product.insert();
//
//    const insertedProduct = await AdminProductRecord.getOne(product.id);
//
//    expect(insertedProduct).toBeDefined();
//    expect(insertedProduct.name).toEqual('rękawice');
// })

//findSearched
// test("AdminProductRecord.findSearched return array of found products", async () => {
//     const foundProducts = await AdminProductRecord.findSearched('ręk');
//
//     expect(foundProducts).not.toEqual([]);
//     expect(Array.isArray(foundProducts)).toBe(true);
//     expect(foundProducts[0].id).toBe('47bcb736-cfd1-4710-baf4-b044bcb08c9f');
//
// })
//
// test("AdminProductRecord.findSearched return array of found products", async () => {
//     const foundProducts = await AdminProductRecord.findSearched('----');
//
//     expect(foundProducts).toEqual([]);
// })
//
// test("AdminProductRecord.findSearched return empty array of found products not existing", async () => {
//     const foundProducts = await AdminProductRecord.findSearched('----');
//
//     expect(foundProducts).toEqual([]);
// })
//
// test("AdminProductRecord.findSearched with empty searching returns all products ", async () => {
//     const foundProducts = await AdminProductRecord.findSearched('');
//
//     expect(foundProducts).toBeDefined();
//     expect(foundProducts[1].id).toEqual('38078320-c79b-461d-8b2f-31db882559b5');
// });




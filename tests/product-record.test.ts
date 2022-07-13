// import {pool} from "../utils/dbMySql";
// import {AdminProductRecord} from "../records/admin/adminProduct.record";
// import {ProductCategory} from "../types";
//
// const defaultObj3 = {
//     id: "8t7f8gf874f083740834f8034h3180fhfsdfsdf",
//     name: "rękawice",
//     description: "super łapacze od Jurka Dudka",
//     image:'...........',
//     price: 89,
//     category: ProductCategory.soccer,
//     productKind: 'kdskgsahjdg',
//     brand: "Best",
//     dateAdded: "2022-01-12",
//     quantity: 5,
// }
//
// afterAll(async () => {
//     await pool.end();
// })
//
// test('Can build Product Record', () => {
//     const product = new AdminProductRecord(defaultObj3);
//
//     expect(product.name).toBe('rękawice');
//     expect(product.price).toBe(89);
//     expect(product.category).toBe('soccer');
//     expect(product.id).toBe("8t7f8gf874f083740834f8034h3180fhfsdfsdf");
//     expect(product.dateAdded).toBe("2022-01-12");
//     expect(product.description).toBe("super łapacze od Jurka Dudka");
//     expect(product.brand).toBe("Nike");
//     expect(product.quantity).toBe(5);
// });




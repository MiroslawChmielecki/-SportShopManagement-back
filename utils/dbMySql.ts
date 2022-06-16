import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'xxxx',
    database: 'shop-management',
    namedPlaceholders: true,
    decimalNumbers: true,
})
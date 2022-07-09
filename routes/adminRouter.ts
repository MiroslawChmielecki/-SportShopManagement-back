import {Router} from "express";
import {ProductRecord} from "../records/admin/product.record";
import {AdminLoginEntity, CreateProductEntity} from "../types";
import {NotFoundError, ValidationError} from "../utils/errors";
import {AdminLoginRecord} from "../records/admin/adminLogin.record";

/*    * - POST/kolekcja/  - tworzenie nowego elementu (np. wstaw lisa)
* - GET/kolekcja/  - pobranie wszystkich elementów (np. pobranie wszystkich lisów)
*  - GET/kolekcja/1 - pobranie pojedynczego elementu (np. pobranie konkretnego lisa)
*  - DELETE/kolekcja/1 - usunięcie pojedynczego elementu (np. usunięcie pojedynczego lisa)
*  - PUT/kolekcja/1 - modyfikacja pojedynczego elementu (np. modyfikacja produktu przez zastąpienie go)
*  - PATCH/kolekcja/1 - modyfikacja pojedynczego elementu przez uzupełnienie (np. zmienianie pewnych parametrów konkretnego obiektu) */


export const adminRouter = Router()

    //logowanie do panelu administratora
    .post('/login', async (req, res) => {
        const login = new AdminLoginRecord(req.body as AdminLoginEntity).adminName;
        const password = new AdminLoginRecord(req.body as AdminLoginEntity).adminPassword;

        const admin = await AdminLoginRecord.getAdmin(login, password);

        res.json(admin)
    })

    //pobieranie wszystkich produktów
    .get('/product', async (req, res) => {
        const allProducts = await ProductRecord.getAll();

        if (!allProducts) {
            throw new NotFoundError()
        }

        res.json(allProducts)
    })

    //pobieranie szukanych produktów
    .get('/product/search/:name?', async (req, res) => {
        const productsSearched = await ProductRecord.findSearched(req.params.name ?? '')

        res.json(productsSearched);
    })

    //pobieranie pojedynczego produktu
    .get('/product/:id', async (req, res) => {
        const product = await ProductRecord.getOne(req.params.id ?? '');

        if (!product) {
            throw new NotFoundError()
        }

        res.json(product)
    })

    //dodanie produktu
    .post('/product', async (req, res) => {
        const newProduct = new ProductRecord(req.body as CreateProductEntity)
        await newProduct.insert();

        res
            .status(201)
            .json(newProduct)
    })

    //usuwanie produktu
    .delete('/product/:id', async (req, res) => {
        const product = await ProductRecord.getOne(req.params.id);

        if (!product) {
            throw new ValidationError('Nie możesz usunąć produktu który nie istnieje')
        }

        await product.delete();
        res.end();
    })

    //aktualizacja produktu
    .put('/product/:id', async (req, res) => {
        const product = await new ProductRecord(req.body);

        if (!product) {
            throw new ValidationError('Nie możesz zaktualizować produktu który nie istnieje');
        }
        await product.update()
        res.json(product);
    })







import {Router} from "express";
import {ProductRecord} from "../records/product.record";
import {CreateProductEntity} from "../types";

/*    * - POST/kolekcja/  - tworzenie nowego elementu (np. wstaw lisa)
* - GET/kolekcja/  - pobranie wszystkich elementów (np. pobranie wszystkich lisów)
*  - GET/kolekcja/1 - pobranie pojedynczego elementu (np. pobranie konkretnego lisa)
*  - DELETE/kolekcja/1 - usunięcie pojedynczego elementu (np. usunięcie pojedynczego lisa)
*  - PUT/kolekcja/1 - modyfikacja pojedynczego elementu (np. modyfikacja produktu przez zastąpienie go)
*  - PATCH/kolekcja/1 - modyfikacja pojedynczego elementu przez uzupełnienie (np. zmienianie pewnych parametrów konkretnego obiektu) */


export const productRouter = Router()


    //pobieranie wszystkich produktów
    .get('/', async (req, res) => {
        const allProducts = await ProductRecord.getAll();
        res.json(allProducts)
    })

    //pobieranie szukanych produktów
    .get('/search/:name?', async (req, res) => {
        const productsSearched = await ProductRecord.findSearched(req.params.name ?? '')

        res.json(productsSearched);
    })

    //pobieranie pojedynczego produktu
    .get('/:id', async (req, res) => {
        const product = await ProductRecord.getOne(req.params.id);
        res.json(product)
    })

    //dodanie produktu
    .post('/', async (req, res) => {
        const newProduct = new ProductRecord(req.body as CreateProductEntity)
        await newProduct.insert();

        res.json(newProduct)

        console.log(newProduct)
    })

    //aktualizacja produktu
    .put('/:id', async (req, res) => {
        // const product = new ProductRecord(req.body);
        // await product.update();
    })




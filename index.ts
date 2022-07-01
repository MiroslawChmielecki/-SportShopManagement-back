import express, {json} from 'express'
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/errors";
import {productRouter} from "./routes/product.router";

const app = express();

//middlewares
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(json());

//routes..
app.use('/product', productRouter);

//middleware obsługujący błędy
app.use(handleError)

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001');
})
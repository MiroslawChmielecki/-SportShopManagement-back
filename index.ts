import express, {json} from 'express'
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/errors";
import {productRouter} from "./routes/product.router";
import {LoginRouter} from "./routes/login.router";

const app = express();

//middlewares
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(json());

//routes..
app.use('/product', productRouter);
app.use('/login', LoginRouter);

//middleware obsługujący błędy
app.use(handleError)

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001');
})
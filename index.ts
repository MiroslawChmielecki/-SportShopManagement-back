import express, {json, Router} from 'express'
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/errors";
import {adminRouter} from "./routes/adminRouter";
import {ShopRouter} from "./routes/shopRouter";

const app = express();

//middlewares
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(json());

//routes..
const router = Router();
router.use('/admin', adminRouter);
router.use('/shop', ShopRouter);

app.use('/api', router);

//middleware obsługujący błędy
app.use(handleError)

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001');
})
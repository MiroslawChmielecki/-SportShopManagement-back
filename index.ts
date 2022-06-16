import express, {json} from 'express'
import cors from 'cors';
import 'express-async-errors';
import {handleError, ValidationError} from "./utils/errors";

const app = express();

//middlewares
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(json());

//routes..
app.get('/', async (req, res) => {
    throw new ValidationError('oh noo !!')
})

//middleware obsługujący błędy
app.use(handleError)

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001');
})
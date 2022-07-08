import {Router} from "express";
import {LoginRecord} from "../records/login.record";

export const LoginRouter = Router()

    .post('/', async (req, res) => {
        const user = new LoginRecord(req.body).adminName;
        const pass = new LoginRecord(req.body).adminPassword;

        const admin = await LoginRecord.getAdmin(user, pass);

        res.json(admin)
    })

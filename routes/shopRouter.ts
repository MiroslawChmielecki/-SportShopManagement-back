import {Router} from "express";
import {UserRegisterRecord} from "../records/shop/userRegister.record";
import {UserLoginEntity, UserRegisterEntity} from "../types";
import {UserLoginRecord} from "../records/shop/userLogin.record";

export const ShopRouter = Router()

    .post('/register', async (req, res) => {
        const newUser = new UserRegisterRecord(req.body as UserRegisterEntity);
        await newUser.insert();

        res
            .status(201)
            .json(newUser.userRegisterName)
    })

    .post('/login', async (req, res) => {
        const login = new UserLoginRecord(req.body as UserLoginEntity).userLoginName;
        const password = new UserLoginRecord(req.body as UserLoginEntity).userLoginPassword;

        const userName = await UserLoginRecord.getUser(login, password);

        res.json(userName);
    })


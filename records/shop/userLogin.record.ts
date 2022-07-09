import {FieldPacket} from "mysql2";
import {UserLoginEntity} from "../../types";
import {ValidationError} from "../../utils/errors";
import {pool} from "../../utils/dbMySql";
import bcrypt from "bcrypt";

interface UserLoginResult {
    userName: string;
    userPassword: string;
}

type UserLoginRecordResults = [UserLoginResult[], FieldPacket[]];

export class UserLoginRecord {
    userLoginName: string;
    userLoginPassword: string;

    constructor(obj: UserLoginEntity) {
        const {userLoginName, userLoginPassword} = obj;

        if(!userLoginName) {
            throw new ValidationError('Nazwa administratora nie może być pusta')
        }

        if(!userLoginPassword) {
            throw new ValidationError('Hasło nie może być puste')
        }

        this.userLoginName = userLoginName;
        this.userLoginPassword = userLoginPassword;
    }

    static async getUser(userLoginName: string, userLoginPassword: string): Promise<string | Error>{
        const [results] = await pool.execute("SELECT * FROM `users` WHERE `userName`= :userLoginName ", {userLoginName}) as UserLoginRecordResults;

        if(results.length === 0) {
            throw new ValidationError('Niepoprawny login !!')
        }

        const match = await bcrypt.compare(userLoginPassword, results[0].userPassword);
        if(match) {
            return results[0].userName
        } else {
            throw new ValidationError('Niepoprawne hasło')
        }
    }
}
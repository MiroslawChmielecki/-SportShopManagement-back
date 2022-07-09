import {ValidationError} from "../../utils/errors";
import {UserRegisterEntity} from "../../types";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid";
import {pool} from "../../utils/dbMySql";
import bcrypt from 'bcrypt';
const salt = 10;

type UserRegisterRecordResults = [UserRegisterRecord[], FieldPacket[]];

export class UserRegisterRecord {
    id: string;
    userRegisterName: string;
    userRegisterPassword: string;

    constructor(obj: UserRegisterEntity) {
        const {userRegisterName, userRegisterPassword} = obj;

        if (!userRegisterName) {
            throw new ValidationError('Nazwa użytkownika nie może być pusta')
        }

        if (!userRegisterPassword) {
            throw new ValidationError('Hasło nie może być puste')
        }

        this.userRegisterName = userRegisterName;
        this.userRegisterPassword = userRegisterPassword;
    }

    async insert(): Promise<void> {
        const [results] = await pool.execute("SELECT * FROM `users` WHERE `userName` = :userRegisterName", {
            userRegisterName: this.userRegisterName,
        }) as UserRegisterRecordResults;

        if (results.length > 0) throw new ValidationError('Podana nazwa użytkownika jest już zarejestrowana')

        bcrypt.hash(this.userRegisterPassword, salt, (err, hashPassword) => {
            if (err) throw new Error('Coś poszło nie tak, spróbuj ponownie za kilka chwil');

            this.id = uuid();
            this.userRegisterPassword = hashPassword;
            pool.execute("INSERT INTO `users`(`id`, `userName`, `userPassword`) VALUES(:id, :userRegisterName, :userRegisterPassword)", this)
        })
    }
}
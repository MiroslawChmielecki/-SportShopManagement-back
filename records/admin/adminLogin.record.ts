import {AdminLoginEntity} from "../../types";
import {FieldPacket} from "mysql2";
import {pool} from "../../utils/dbMySql";
import {ValidationError} from "../../utils/errors";
import bcrypt from 'bcrypt';

type LoginAdminRecordResults = [AdminLoginRecord[], FieldPacket[]];

export class AdminLoginRecord {
    adminName: string;
    adminPassword: string;

    constructor(obj: AdminLoginEntity) {
        const {adminName, adminPassword} = obj;

        if(!adminName) {
            throw new ValidationError('Nazwa administratora nie może być pusta')
        }

        if(!adminPassword) {
            throw new ValidationError('Hasło nie może być puste')
        }

        this.adminName = adminName;
        this.adminPassword = adminPassword;
    }

   //pobieram login admina i sprawdzam bcryptem czy hasło wpisane w formularz
    // odpowiada hasłu zapisanemu w bazie danych zakodowanemu w bcrypt
    static async getAdmin(adminName: string, adminPassword: string): Promise<string | Error>{
        const [results] = await pool.execute("SELECT * FROM `admin` WHERE `adminName`= :adminName ", {adminName}) as LoginAdminRecordResults;

        if(results.length === 0) {
            throw new ValidationError('Niepoprawny login !!')
        }
        const match = await bcrypt.compare(adminPassword, results[0].adminPassword);
        if(match) {
            return results[0].adminName
        } else {
            throw new ValidationError('Niepoprawne hasło')
        }
    }
}
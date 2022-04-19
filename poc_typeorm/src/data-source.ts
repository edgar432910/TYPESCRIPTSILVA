import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Car } from './entity/Car';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 4000,
    username: "root",
    password: "root",
    database: "nodepro",
    synchronize: true,
    logging: false,
    entities: [User, Car],
    migrations: [],
    subscribers: [],
})

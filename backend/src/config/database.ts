import { createConnection } from "typeorm";

export default () => {
    createConnection({
        "type": "mysql",
        "host": process.env.DB_HOST,
        "port": 3306,
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "synchronize": true,
        "migrationsRun": true,
        "logging": true,
        "logger": "file",
        "entities": [
           "dist/entity/**/*.js"
        ],
        "migrations": [
           "dist/migration/**/*.js"
        ],
        "subscribers": [
           "dist/subscriber/**/*.js"
        ],
        "cli": {
           "entitiesDir": "src/entity",
           "migrationsDir": "src/migration",
           "subscribersDir": "src/subscriber",
        }
    });
}
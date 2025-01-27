import { DataSource } from "typeorm";

import { Short } from "../modules/shorts/models/Short";

export const database = new DataSource({
    type: "mongodb",
    url: process.env.MONGO_URI,
    database: process.env.MONGO_DATABASE,
    entities: [Short]
});

database.initialize()
    .then(() => console.log("Database connected successfully"))
    .catch(error => console.error("Error connecting to database: ", error));
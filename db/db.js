import Sequelize from "sequelize";
import UserModel from "./User.js";

let db;
const User = UserModel(db);

// process.env.DATABASE_URL
// if it's not working try taking out the consts and add "let db;"
if (process.env.DATABASE_URL === undefined) {
    console.log("connected locally");
    db = new Sequelize("postgres://localhost:5432/capstone", {
        logging: false,
    });
} else {
    db = new Sequelize(process.env.DATABASE_URL, {
        logging: false,
    });
}

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected to db");

        db.sync();
    } catch (error) {
        console.error(error);
        console.error("DB Connection Failed");
    }
};

await connectToDB();

export { db };

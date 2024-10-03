import Sequelize from "sequelize";
import UserModel from "./User.js";
import ToggleModel from "./ToggleStatus.js";

const db = new Sequelize("postgres://localhost:5432/capstone", {
    logging: false,
});

const User = UserModel(db);
const ToggleStatus = ToggleModel(db);

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

connectToDB();

export { db, User, ToggleStatus };

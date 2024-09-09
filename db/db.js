import Sequelize from "sequelize";

const db = new Sequelize("postgres://localhost:5432/capstone");

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

export { db };

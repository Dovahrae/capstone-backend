import Sequelize from "sequelize";

const db = new Sequelize("postgres://localhost:5432/capstone");

// process.env.DATABASE_URL
// if it's not working try taking out the consts and add "let db;"
if (process.env.DATABASE_URL === undefinded) {
    console.log("connected locally");
    const db = new Sequelize("postgres://localhost:5432/capstone", {
        logging: false,
    });
} else {
    const db = new Sequelize(process.env.DATABASE_URL, {
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

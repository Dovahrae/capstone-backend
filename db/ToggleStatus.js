import { DataTypes } from "sequelize";

const ToggleModel = (db) => {
    return db.define("toggle", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: DataTypes.INTEGER,
        item: DataTypes.STRING,
        room: DataTypes.STRING,
    });
};

export default ToggleModel;

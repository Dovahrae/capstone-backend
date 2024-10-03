import express from "express";
import cors from "cors";
import { ToggleStatus, User, db } from "./db/db.js";
import bcrypt from "bcrypt";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send({ api: "online" });
});

server.post("/login", async (req, res) => {
    const matchingUser = await User.findOne({
        where: { email: req.body.email },
    });

    if (!matchingUser) {
        return res.send({
            error: true,
            message: "No account found with that email address",
        });
    }

    const validPassword = bcrypt.compareSync(
        req.body.password,
        matchingUser.password
    );
    if (!validPassword) {
        res.send({ error: true, message: "Wrong password" });
    } else {
        res.send({ error: false, userID: matchingUser.id });
    }
});

server.get("/toggleStatus/:room/:userId", async (req, res) => {
    res.send({
        statuses: await ToggleStatus.findAll({
            where: { userId: req.params.userId, room: req.params.room },
        }),
    });
});

server.post("/toggleStatus", async (req, res) => {
    await ToggleStatus.create(req.body);
    res.send({
        statuses: await ToggleStatus.findAll({
            where: { userId: req.body.userId, room: req.body.room },
        }),
    });
});
// if it's toggled, untoggle and delete from the database

server.listen(3001, () => {
    console.log("api server online");
});

const checkForExistingUser = await User.findOne({
    where: { email: "dovahrae36@gmail.com" },
});
if (!checkForExistingUser) {
    await User.create({
        email: "dovahrae36@gmail.com",
        password: bcrypt.hashSync("e2f10t11", 10),
        firstName: "Desirae",
        lastName: "Trumble",
    });
}
console.log(checkForExistingUser);

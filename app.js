const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize"); // = ORM


const env = process.env.NODE_ENV || "development";
const config = require(path.resolve(__dirname, "config", env));

const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.sequelize
);

module.exports = async  () => {
    const app = express();
    await sequelize.sync();
    app.use(bodyParser.json());

    // code here

    return app;
};

const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize"); // = ORM


const env = process.env.NODE_ENV || "development";
const config = require(path.resolve(__dirname, "config", env));

// Application configuration
const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.sequelize
);

// Application router
module.exports = async  () => {
    const app = express();
    await sequelize.sync();
    app.use(bodyParser.json());

    //API route to create a product
    app.post('/products', async (request, response) => {
        if(Object.keys(request.body).length === 0) {
            return response.status(400).send();
        }
    });

    return app;
};

const express = require("express");
const path = require("path");
const fs = require("fs");
const stream = require("stream");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const civilaztions = require("./routes/civilizations");

const app = express();
const port = 4000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Age of Empires 2: Definitive Edition",
      description: "Age of Empires Api",
      contact: {
        name: "lolwuz",
      },
      servers: ["http://localhost:4000"],
    },
  },
  // ['.routes/*.js']
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /civilizations:
 *  get:
 *    description: returns all civilizations
 *    responses:
 *      '200': A successfull response
 */
app.get("/civilizations", civilaztions.findAll);

/**
 * @swagger
 * /civilizations/:name:
 *  get:
 *    description: returns one civilizations
 *    responses:
 *      '200': A successfull response
 */
app.get("/civilizations/:name", civilaztions.findByName);

/**
 * @swagger
 * /images:
 *  get:
 *    description: returns images
 */
app.use("/images", express.static("images"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

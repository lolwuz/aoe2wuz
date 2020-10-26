const express = require("express");
const OAuthServer = require("express-oauth-server");

// server
const app = express();
const http = require("http").Server(app);

// swagger
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//routes
const civilaztions = require("./routes/civilizations");
const counters = require("./routes/counters");
const units = require("./routes/units");

// socket.io
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("a user connected");
});

// initialize app
const port = 4001;

// swagger options TODO: add to constants file somewhere
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Age of Empires 2: Definitive Edition",
      description: "Age of Empires Api",
      contact: {
        name: "lolwuz",
      },
      servers: ["http://localhost:4001"],
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
 * /units:
 *  get:
 *    description: returns one civilizations
 *    responses:
 *      '200': A successfull response
 */
app.get("/units", units.findAll);

/**
 * @swagger
 * /units/:id:
 *  get:
 *    description: returns one civilizations
 *    responses:
 *      '200': A successfull response
 */
app.get("/units/:id", units.findById);

/**
 * @swagger
 * /counters/:id:
 *  get:
 *    description: returns counter from id
 *    responses:
 *      '200': A successfull response
 */
app.get("/counters/:id", counters.findByUnitId);

/**
 * @swagger
 * /images:
 *  get:
 *    description: returns images
 */
app.use("/images", express.static("images"));

http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

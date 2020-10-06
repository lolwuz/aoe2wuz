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
 *    description: returns all civilizations
 *    responses:
 *      '200': A successfull response
 */
app.get("/civilizations/:name", civilaztions.findByName);

app.get("/gathering", (req, res) => {
  const raw = fs.readFileSync(
    path.resolve(__dirname, "./info/aoc_gathering.json")
  );
  const data = JSON.parse(raw);

  res.send(data);
});

app.get("/structues", (req, res) => {
  const raw = fs.readFileSync(
    path.resolve(__dirname, "./info/aoc_structures.json")
  );
  const data = JSON.parse(raw);

  res.send(data);
});

app.get("/technologies", (req, res) => {
  const raw = fs.readFileSync(
    path.resolve(__dirname, "./info/aoc_technologies.json")
  );
  const data = JSON.parse(raw);

  res.send(data);
});

app.get("/units", (req, res) => {
  const raw = fs.readFileSync(path.resolve(__dirname, "./info/aoc_units.json"));
  const data = JSON.parse(raw);

  res.send(data);
});

app.get("/images/:image", (req, res) => {
  const { image } = req.params;
  const r = fs.createReadStream(path.resolve(__dirname, `./images/${image}`)); // or any other way to get a readable stream
  const ps = new stream.PassThrough(); // <---- this makes a trick with stream error handling
  stream.pipeline(
    r,
    ps, // <---- this makes a trick with stream error handling
    (err) => {
      if (err) {
        console.log(err); // No such file or any other kind of error
        return res.sendStatus(400);
      }
    }
  );
  ps.pipe(res); // <---- this makes a trick with stream error handling
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

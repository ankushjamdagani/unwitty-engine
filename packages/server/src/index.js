const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./utils/mongodb');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectToDatabase()
  .then(({ db }) => {
    const collection = db.collection('projects');

    app.listen(3000, function () {
      console.log('listening on 3000');
    });

    app.get('/api/project/list', async function (req, res) {
      const projects = await collection.find({}).toArray();

      res.status(200).json({
        data: projects || null,
        status: 200
      });
    });

    app.get('/api/project/load', async function (req, res) {
      const projects = await collection
        .find({ slug: String(req.query.slug) })
        .toArray();

      res.status(200).json({
        data: projects[0] || null,
        status: 200
      });
    });

    app.get('/api/project/save', async function (req, res) {
      await collection.insertOne(config);
      res.status(200).json({
        data: { slug: config.slug }
      });
    });
  })
  .catch(error => console.error(error));

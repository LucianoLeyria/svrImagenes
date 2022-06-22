const express = require('express');
const router = express.Router();
var path = require('path');

router.post('/', (req, res) => {
  const { imagen } = req.files;
  try {
    imagen.mv(`${__dirname}/../Imagenes/${imagen.name}`, (err) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      return res.status(200).send({ url: `/imagen/${imagen.name}` });
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/:imagen', (req, res) => {
  const { imagen } = req.params;
  try {
    res.sendFile(path.resolve(`${__dirname}/../Imagenes/${imagen}`));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

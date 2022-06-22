const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const router = require('./Routes/Imagenes.routes.js');

dotenv.config();
const app = express();
const { PORT } = process.env;
app.use(cors());
app.use(morgan('dev'));
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use('/imagen', router);

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});

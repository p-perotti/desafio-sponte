const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const multer = require('multer');

const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;
      const filePath = `http://localhost:3333/uploads/${filename}`;
      const { images } = req.body;
      if (images) {
        req.body.images = [...images, filePath];
      } else {
        req.body.images = [filePath];
      }
      cb(null, filename);
    },
  }),
});

server.use(
  '/uploads',
  express.static(path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
);

server.post('/products', upload.array('images', 5));

server.use(router);
server.listen(3333);

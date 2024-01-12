import path from 'path';
import fs from 'fs';
import multer from 'multer';
import mime from 'mime-types';
import {photoFileValidator} from '../validators/index.js';

const photoStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadPath = './src/uploads/photos/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, {recursive: true});
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const extension = mime.extension(file.mimetype);
    const fileNameWithoutExtension = path.parse(file.originalname).name;
    const newFilename = fileNameWithoutExtension + '-' + Date.now() + `.${extension}`;
    cb(null, newFilename);
  },
});
const uploadPhoto = multer({storage: photoStorage, fileFilter: photoFileValidator});

export {uploadPhoto};

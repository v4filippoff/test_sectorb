import path from 'path';
import fs from 'fs';
import multer from 'multer';
import mime from 'mime-types';
import {photoFileValidator} from '../validators/index.js';

const photoUploadPath = './src/uploads/photos/';
const photoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, photoUploadPath);
  },
  filename: (req, file, cb) => {
    const extension = mime.extension(file.mimetype);
    const fileNameWithoutExtension = path.parse(file.originalname).name;
    const newFilename = fileNameWithoutExtension + '-' + Date.now() + `.${extension}`;
    cb(null, newFilename);
  },
});
const uploadPhoto = multer({storage: photoStorage, fileFilter: photoFileValidator});

if (!fs.existsSync(photoUploadPath)) {
  fs.mkdirSync(photoUploadPath, {recursive: true});
}

export {uploadPhoto};

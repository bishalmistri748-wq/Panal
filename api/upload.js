const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../database');

const router = express.Router();
const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + file.originalname;
    cb(null, unique);
  }
});
const upload = multer({ storage });

router.post('/', upload.single('mod_file'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');
  
  const { filename, path: filePath, size } = req.file;
  db.run(
    `INSERT INTO lib (file_name, file_path, file_size) VALUES (?, ?, ?)`,
    [filename, filePath, size],
    function(err) {
      if (err) return res.status(500).send('DB error: ' + err.message);
      res.send(`✅ Uploaded: ${filename} (ID: ${this.lastID})`);
    }
  );
});

module.exports = router;

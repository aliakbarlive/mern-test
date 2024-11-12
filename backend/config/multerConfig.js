const multur = require('multer');
const fs = require('fs');
const path = require('path');

const uploadDir = path.join(process.cwd(), 'uploads');

fs.mkdir(uploadDir, { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    }
});
const storage = multur.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multur({ storage });

module.exports = upload
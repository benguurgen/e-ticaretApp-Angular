const multer = req("multer");

const storage = mutler.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.orginalname)
    }
});

const upload = multer({ storage: storage });

module.exports = upload;

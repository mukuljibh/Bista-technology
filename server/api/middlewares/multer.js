import multer from "multer";
import fs from "fs-extra";
import path from "path";

const uploadWithDestination = (fields, uploadPath) => {
  const storage = multer.diskStorage({
    destination: uploadPath,
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        let ext = path.extname(file.originalname).toLowerCase();
        if (ext === ".jpg") {
            ext = ".jpeg";
        }
        cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },
});  
  const upload = multer({ storage }).fields(fields);
  return (req, res, next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        cleanupUploadedFiles(req.files);
        return res.status(400).send("Error uploading files: " + err.message);
      } else if (err) {
        cleanupUploadedFiles(req.files);
        return res.status(500).send("Error uploading files: " + err.message);
      }
      try {
        next();
      } catch (processErr) {
        cleanupUploadedFiles(req.files);
        return res.status(500).send("Error processing files: " + processErr.message);
      }
    });
  };
};

const cleanupTempFiles = (files) => {
  if (files) {
    for (const field in files) {
      files[field].forEach(file => {
        if (fs.existsSync(file.path)) {
          fs.unlink(file.path, (err) => {
            if (err) {
              console.log("Error removing temporary file", err);
            }
          });
        }
      });
    }
  }
};

const cleanupUploadedFiles = (files) => {
  if (files && Array.isArray(files)) {
    files.forEach((file) => {
      if (file && file.path) {
        fs.unlink(file.path, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      }
    });
  }
};

export default uploadWithDestination;

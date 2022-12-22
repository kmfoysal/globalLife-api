import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { urlencoded } from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import authRoute from './routes/auth.js';
import eventRoute from "./routes/event.js";
import usersRoute from "./routes/users.js";
// import path from "path";

const port = process.env.PORT || 5000 ;


const __dirname = path.resolve();


const app = express();
dotenv.config();

app.use("/images", express.static(path.join(__dirname, "/images")));




const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});



//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use(express.json());





// File Upload 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // const fileExt = path.extname(file.originalname);
    // const fileName =
    //   file.originalname
    //     .toLowerCase()

    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/uploads", upload.single("photos"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});



// Routes 
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/events", eventRoute);



// Error Handler 
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.get("/", (req, res) => {
    res.send("Global Life Server is Running");
});


app.listen(port, () => {
  connect();
  console.log("Connected to backend.");
});

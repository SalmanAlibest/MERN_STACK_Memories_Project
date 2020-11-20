import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
//initialize App
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

//Mongoose
const CONNECTION_URL =
  "mongodb+srv://salman:salman123@cluster0.s3kvj.mongodb.net/<dbname>?retryWrites=true&w=majority&ssl=true&replicaSet=-shard-0&readPreference=secondary";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connection Build Successfully! And Running  At ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
mongoose.set("useFindAndModify", false);

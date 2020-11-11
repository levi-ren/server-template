import mongoose from "mongoose";
import app from "./app.js";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

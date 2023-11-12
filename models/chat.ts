import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI ?? "MONGODB_URI is not defined");
mongoose.Promise = global.Promi
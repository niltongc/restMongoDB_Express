import mongoose from "mongoose";

mongoose.connect("mongodb+srv://suaSenha@cluster0.sbeuwsm.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
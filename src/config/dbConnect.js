import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://mariohcezar:5lrwsQQklpP4fYLu@node-express-mongodb.guk9xdp.mongodb.net/node-express-mongodb"
);

let db = mongoose.connection

export default db;
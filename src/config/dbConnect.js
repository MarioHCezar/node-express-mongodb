import mongoose from "mongoose";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const dbUser = await rl.question("Login: ");
const dbPassword = await rl.question("Password: ");

rl.close();

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@node-express-mongodb.guk9xdp.mongodb.net/node-express-mongodb`
);

let db = mongoose.connection

export default db;
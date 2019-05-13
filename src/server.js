import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { sendSecretMail } from "./utils";
import logger from "morgan";
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";

sendSecretMail("gaghiphop@naver.com", "1234");

const PORT = process.env.PORT || 1234;

const server = new GraphQLServer({ schema });
server.express.use(logger("dev"));

const serverStart = () => {
  console.log(`server running on http://localhost:${PORT}`);
};

server.start({ port: PORT }, serverStart);

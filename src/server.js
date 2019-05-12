require("dotenv").config();
import logger from "morgan";
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";

const PORT = process.env.PORT || 1234;

const server = new GraphQLServer({ schema });
server.express.use(logger("dev"));

const serverStart = () => {
  console.log(`server running on http://localhost:${PORT}`);
};

server.start({ port: PORT }, serverStart);

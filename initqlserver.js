import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema/index.js";

var dataObject = [];

const apolloserver = new ApolloServer({
  schema: schema,
  resolvers: dataObject,
});

export default apolloserver;

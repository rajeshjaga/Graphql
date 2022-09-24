import { GraphQLSchema, GraphQLObjectType } from "graphql";
import users from "./userquerie.js";
import usersMutations from "./usermutat.js";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      ...users,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
      ...usersMutations,
    }),
  }),
});

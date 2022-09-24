import { GraphQLObjectType, GraphQLBoolean } from "graphql";
import { statusEnum } from "./enum.js";
const loanerDevices = new GraphQLObjectType({
  name: "loaner",
  fields: () => ({
    issued: { type: GraphQLBoolean, defaultvalue: false },
    devices: { type: new GraphQLList(GraphQLString) },
    status: { type: new GraphQLNonNull(statusEnum) },
  }),
});
export default loanerDevices;

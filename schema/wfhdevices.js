import { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean } from "graphql";
import { statusEnum } from "./enum.js";

const wfhdevices = new GraphQLObjectType({
  name: "wfhdevices",
  fields: () => ({
    issued: { type: new GraphQLNonNull(GraphQLBoolean), defaultvalue: false },
    devices: { type: new GraphQLList(GraphQLString) },
    status: { type: statusEnum },
  }),
});
export default wfhdevices;

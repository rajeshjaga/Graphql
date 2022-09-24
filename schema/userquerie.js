import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from "graphql";
import { rawdata } from "./data.js";
import user from "./user.js";

const users = {
  users: {
    type: new GraphQLNonNull(new GraphQLList(user)),
    args: {
      user: { type: user },
    },
  },
  resolve: (parent, args) => {
    const result = rawdata();
    return result;
  },
};
export default users;

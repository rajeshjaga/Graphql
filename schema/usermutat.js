import user from "./user.js";

const userMutations = {
  createUser: {
    type: user,
    args: {
      user: { type: user },
    },
    resolve: (parent, args) => {
      const result = createNewUser(args.user);
      return result;
    },
  },
};
export default userMutations;

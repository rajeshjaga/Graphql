import data from "./rawdata.js";

import { v4 as uuidv4 } from "uuid";

export const createNewUser = (user) => {
  const newuser = {
    ...user,
    id: uuidv4,
  };
  data.unshift(newuser);
  return newuser;
};

export var rawdata = () => data;

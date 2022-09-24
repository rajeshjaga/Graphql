import { GraphQLObjectType, GraphQLEnumType } from "graphql";
import wfhdevices from "./wfhdevices.js";
import loanerdevices from "./loanerdevices.js";

export var statusEnum = new GraphQLEnumType({
  name: "Status",
  values: {
    logged: { value: "logged" },
    assgined: { value: "assigned" },
    await: { value: "awaiting-customer" },
    review: { value: "awaiting-internal-review" },
    collected: { value: "collected" },
    closed: { value: "closed" },
  },
});

export var Devices = new GraphQLObjectType({
  name: "Devices",
  values: {
    WFH: { wfhdevices },
    loaner: { loanerdevices },
  },
});

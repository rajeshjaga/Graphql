var data = [
  {
    user: {
      name: "Dev",
      username: "devd",
      id: 1,
      email: "Dev@gmail.com",
      role: "FTE",
      devices: {
        wfhdevices: {
          issued: false,
        },
        loaner: {
          issued: true,
          devices: ["mx masters", "mx keys"],
          status: "logged",
        },
      },
    },
  },
  {
    user: {
      name: "miz",
      username: "aminm",
      id: 3,
      email: "miz@gmail.com",
      role: "Contractor",
      devices: {
        wfhdevices: {
          issued: false,
        },
        loaner: {
          issued: true,
          devices: ["mx masters", "mx keys"],
          status: "logged",
        },
      },
    },
  },
  {
    user: {
      name: "raj",
      username: "jraaj",
      id: 1,
      email: "raj@tmail.com",
      role: "Contractor",
      devices: {
        wfhdevices: {
          issued: false,
        },
        loaner: {
          issued: true,
          devices: ["mx masters", "mx keys"],
          status: "logged",
        },
      },
    },
  },
];

export default data;

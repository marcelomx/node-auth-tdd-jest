const { User } = require("../src/app/models");
const faker = require("faker");

const factories = {
  User: async (data = {}) => {
    return await User.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...data,
    });
  },
};

module.exports = {
  create: async (factory, data = {}) => {
    return await factories[factory](data);
  },
};

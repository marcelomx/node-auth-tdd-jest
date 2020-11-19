const bcrypt = require("bcryptjs");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const password = "123123";
    const user = await User.create({
      name: "test",
      email: "test1@local.host",
      password,
    });

    const compareHash = await bcrypt.compare(password, user.password_hash);
    expect(compareHash).toBe(true);
  });
});

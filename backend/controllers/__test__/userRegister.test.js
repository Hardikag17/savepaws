const User = require("../../models/schemas/userSchema");
const { Register } = require("../userRegister");

describe("Creating User", () => {
  it("Should not create a user with same email and throw error when email is not unique", async () => {
    User.findOne = jest.fn().mockImplementation(() => {
      return {
        email: "test@gmail.com",
      };
    });

    User.save = jest.fn().mockImplementation(() => {});

    await expect(
      Register("test@gmail.com", "test2@gmail.com", "test3@gmail.com")
    ).rejects.toThrowError();
  });
});

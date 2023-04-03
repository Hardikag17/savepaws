const User = require("../../models/schemas/userSchema");
const { Register } = require("../userRegister");
const axios = require("axios");
const uniqid = require("uniqid");

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

describe("The router", () => {
  test("The login route with the user", async () => {
    const res = await axios.post("http://localhost:9000/user/login", {
      email: "adityagrover7oo@gmail.com",
      password: "123456",
    });

    expect(res.status).toBe(200);
  });
});

// describe("The router", () => {
//   test("The Register route with the user", async () => {
//     const res = await axios.post("http://localhost:9000/user/register", {
//       name: "test123",
//       email: "test123@gmail.com",
//       password: "test123",
//       userId: uniqid(),
//     });
//     expect(res.status).toBe(200);
//   });
// });

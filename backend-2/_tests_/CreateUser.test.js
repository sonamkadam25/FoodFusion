

const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../index"); // Ensure index.js exports your Express app
const User = require("../models/User");
const bcrypt = require("bcryptjs");


let mongoServer;

beforeAll(async () => {
  // Set the environment variable for testing
  process.env.NODE_ENV = "test";

  // Start in-memory MongoDB server
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true });
});

afterAll(async () => {
  // Disconnect and stop in-memory MongoDB server
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  // Clear database between tests
  await User.deleteMany();
});

const jwt = require("jsonwebtoken"); // Import jsonwebtoken

describe("POST /api/createuser", () => {
  it("should create a new user and return success: true", async () => {
    const res = await request(app)
      .post("/api/createuser") // Updated path to match routes
      .send({
        name: "Sonam Kadam",
        email: "sonamkadam@gmail.com",
        password: "123456",
        location: "Pune",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);

    const user = await User.findOne({ email: "sonamkadam@gmail.com" });
    expect(user).toBeTruthy();
    expect(user.name).toBe("Sonam Kadam");
  });

  it("should return 400 if validation fails", async () => {
    const res = await request(app)
      .post("/api/createuser")
      .send({
        name: "JD", // Invalid name
        email: "invalid-email", // Invalid email
        password: "123", // Invalid password
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toBeTruthy();
    expect(res.body.errors.length).toBeGreaterThan(0);
  });
});

// Add login tests
describe("POST /api/loginuser", () => {
  beforeEach(async () => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("123456", salt);
    await User.create({
      name: "Sonam Kadam",
      email: "sonamkadam@gmail.com",
      password: hashedPassword,
      location: "Pune",
    });
  });

  it("should login a user and return a valid authToken", async () => {
    const res = await request(app)
      .post("/api/loginuser") // Updated path to match routes
      .send({
        email: "sonamkadam@gmail.com",
        password: "123456",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("authToken");

    const decoded = jwt.verify(res.body.authToken, "mynameissonamkadam");
    expect(decoded).toHaveProperty("user");
    expect(decoded.user).toHaveProperty("id");
  });

  it("should return 400 for invalid credentials (wrong email)", async () => {
    const res = await request(app)
      .post("/api/loginuser")
      .send({
        email: "wrongemail@example.com",
        password: "123456",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("errors", "Try login with correct credentials");
  });

  it("should return 400 for invalid credentials (wrong password)", async () => {
    const res = await request(app)
      .post("/api/loginuser")
      .send({
        email: "sonamkadam@gmail.com",
        password: "wrongpassword",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("errors", "Try login with correct credentials");
  });
});

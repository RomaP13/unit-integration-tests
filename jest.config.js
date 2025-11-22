/** @type {import('jest').Config} */
const config = {
  verbose: true,
  reporters: [
    "default",
    [
      "./node_modules/@testomatio/reporter/lib/adapter/jest.js",
      { apiKey: process.env.TESTOMATIO },
    ],
  ],
  testPathIgnorePatterns: ["/node_modules/", "/e2e-screenshot-tests/"],
};
module.exports = config;

const sample = require("../data/sample.json");

it("sample json should match snapshot", () => {
  expect(sample).toMatchSnapshot();
  expect(sample).toHaveProperty("title");
  expect(sample).toHaveProperty("text");
});

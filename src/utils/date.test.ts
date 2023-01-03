import { convertToYYMMDD } from "./date";

describe("dateUtil", () => {
  describe("convertToYYMMDD", () => {
    it("should return a string in the format YYYY-MM-DD", () => {
      const date = new Date("2021-01-01");
      const result = convertToYYMMDD(date);
      expect(result).toEqual("2021-01-01");
    });
  });
});

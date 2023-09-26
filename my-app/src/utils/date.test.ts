import { formatDate, getYears, getMaxYear } from "./date";

describe("format date function", () => {
  it("should format a date correctly", () => {
    const formattedDate = formatDate("2023-09-07", "MMMM DD, YYYY");
    expect(formattedDate).toBe("September 07, 2023");
  });
});

describe('getYears function', () => {
    it('should calculate the number of years correctly', () => {
      const years = getYears('1990-01-15');
      expect(years).toBe(33); 
    });
});

describe('getMaxYear function', () => {
    it('should return the maximum year correctly', () => {
      const maxYear = getMaxYear('2023-09-07');
      expect(maxYear).toBe(2023);
    });
});
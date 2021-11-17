import apiData from "./apiData";
import { formatApiData } from "./formatApiData";

describe("#formatApiData", () => {
  it("is a function", () => {
    expect(typeof formatApiData).toBe("function");
  });

  it("returns formatted data", () => {
    const formattedData = formatApiData(apiData);

    expect(typeof formattedData).toBe("object");
  });
});

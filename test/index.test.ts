import main from "../src/index";

describe("main", () => {
  test("logs template message", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    main();
    expect(spy).toHaveBeenCalledWith("This is a template!");
    spy.mockRestore();
  });

  test("is a function", () => {
    expect(typeof main).toBe("function");
  });
});

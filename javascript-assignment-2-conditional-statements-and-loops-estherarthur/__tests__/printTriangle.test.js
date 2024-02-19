// Import the printTriangle function
const { printTriangle } = require("../printTriangle");

describe("printTriangle", () => {
	let consoleSpy;

	// Create a mock console object to capture console output
	beforeEach(() => {
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	// Restore the console object
	afterEach(() => {
		consoleSpy.mockRestore();
	});

	it("prints a triangle of height n=3", () => {
		// Call the printTriangle function with n = 3
		printTriangle(3);

		// Expect console output to match the expected sequence
		expect(consoleSpy.mock.calls[0][0]).toEqual("*");
		expect(consoleSpy.mock.calls[1][0]).toEqual("**");
		expect(consoleSpy.mock.calls[2][0]).toEqual("***");
	});

	it("prints a triangle of height n=7", () => {
		// Call the printTriangle function with n = 7
		printTriangle(7);

		// Expect console output to match the expected sequence
		expect(consoleSpy.mock.calls[0][0]).toEqual("*");
		expect(consoleSpy.mock.calls[1][0]).toEqual("**");
		expect(consoleSpy.mock.calls[2][0]).toEqual("***");
		expect(consoleSpy.mock.calls[3][0]).toEqual("****");
		expect(consoleSpy.mock.calls[4][0]).toEqual("*****");
		expect(consoleSpy.mock.calls[5][0]).toEqual("******");
		expect(consoleSpy.mock.calls[6][0]).toEqual("*******");
	});
});

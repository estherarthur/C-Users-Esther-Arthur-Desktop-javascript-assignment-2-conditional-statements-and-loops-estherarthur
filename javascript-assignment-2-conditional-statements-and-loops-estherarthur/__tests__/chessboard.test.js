// Import the chessboard function
const { chessboard } = require("../chessboard");

describe("chessboard", () => {
	let consoleSpy;

	// Create a mock console object to capture console output
	beforeEach(() => {
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	// Restore the console object
	afterEach(() => {
		consoleSpy.mockRestore();
	});

	it("prints a chessboard of size m=3, n=3", () => {
		// Call the chessboard function with m = 3, n = 3
		chessboard(3, 3);

		// Expected output:
		const expectedOutput = "# #" + "\n" + " # " + "\n" + "# #";

		// Expect console output to match the expected sequence
		expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
	});

	it("prints a chessboard of size m=5, n=7", () => {
		// Call the chessboard function with m = 5, n = 7
		chessboard(5, 7);

		// Expected output:
		const expectedOutput =
			"# # # #" +
			"\n" +
			" # # # " +
			"\n" +
			"# # # #" +
			"\n" +
			" # # # " +
			"\n" +
			"# # # #";
		// Expect console output to match the expected sequence
		expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
	});
});

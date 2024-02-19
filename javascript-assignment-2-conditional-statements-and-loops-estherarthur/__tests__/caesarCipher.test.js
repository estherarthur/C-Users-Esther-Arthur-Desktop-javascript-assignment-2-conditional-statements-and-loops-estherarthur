// Import the caesarCipher function
const { caesarCipher } = require("../caesarCipher");

describe("caesarCipher", () => {
	let consoleSpy;

	// Create a mock console object to capture console output
	beforeEach(() => {
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	// Restore the console object
	afterEach(() => {
		consoleSpy.mockRestore();
	});

	it("prints a string with the letters shifted by the integer", () => {
		// Call the caesarCipher function with str = "Hello" and shift = 1
		caesarCipher("Hello", 1);

		// Expect console output to match the expected sequence
		expect(consoleSpy).toHaveBeenCalledWith("Ifmmp");
	});

	it("preserves the case of each letter", () => {
		// Call the caesarCipher function with str = "HeLlO" and shift = 1
		caesarCipher("HeLlO", 1);

		// Expect console output to match the expected sequence
		expect(consoleSpy).toHaveBeenCalledWith("IfMmP");
	});

	it("wraps around the alphabet", () => {
		// Call the caesarCipher function with str = "Zoo" and shift = 1
		caesarCipher("Zoo", 1);

		// Expect console output to match the expected sequence
		expect(consoleSpy).toHaveBeenCalledWith("App");
	});

	it("preserves spaces and other nonalphabetic symbols", () => {
		// Call the caesarCipher function with str = "Hello, World!" and shift = 1
		caesarCipher("Hello, World!", 1);

		// Expect console output to match the expected sequence
		expect(consoleSpy).toHaveBeenCalledWith("Ifmmp, Xpsme!");
	});
});

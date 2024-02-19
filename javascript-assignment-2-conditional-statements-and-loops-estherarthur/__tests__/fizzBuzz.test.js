// Import the fizzBuzz function
const { fizzBuzz } = require("../fizzBuzz");

describe("fizzBuzz", () => {
	it("prints the correct output for numbers 1 to 100", () => {
		// Create a mock console object to capture console output
		const consoleSpy = jest.spyOn(console, "log").mockImplementation();

		// Call the fizzBuzz function
		fizzBuzz();

		// Expect console output to match the expected sequence
		expect(consoleSpy.mock.calls[0][0]).toEqual(1);
		expect(consoleSpy.mock.calls[2][0]).toEqual("Fizz");
		expect(consoleSpy.mock.calls[4][0]).toEqual("Buzz");
		expect(consoleSpy.mock.calls[14][0]).toEqual("FizzBuzz");
		expect(consoleSpy.mock.calls[29][0]).toEqual("FizzBuzz");
		expect(consoleSpy.mock.calls[66][0]).toEqual(67);
		expect(consoleSpy.mock.calls[98][0]).toEqual("Fizz");
		expect(consoleSpy.mock.calls[99][0]).toEqual("Buzz");

		// Restore the console object
		consoleSpy.mockRestore();
	});
});

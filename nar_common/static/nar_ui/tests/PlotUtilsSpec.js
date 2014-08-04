describe('nar.fullReport.PlotUtils', function() {
	describe('logTickFormatter', function() {
		var testFunc = nar.fullReport.PlotUtils.logTickFormatter;
		it('numbers greater than 0 should have no decimals', function() {
			expect(testFunc(1000)).toBe('1000');
			expect(testFunc(100)).toBe('100');
			expect(testFunc(10)).toBe('10');
			expect(testFunc(1)).toBe('1');
		});
		it('numbers less than zero should have the correct significance', function() {
			expect(testFunc(0.1)).toBe('0.1');
			expect(testFunc(0.01)).toBe('0.01');
			expect(testFunc(0.001)).toBe('0.001');
		});
		it('weird inputs should be handled properly', function() {
			expect(testFunc(1000.001)).toBe('1000');
			expect(testFunc(0.0100)).toBe('0.01');
		});
	});
	describe('utcDatePlotHoverFormatter', function() {
		var testFunc = nar.fullReport.PlotUtils.utcDatePlotHoverFormatter;
		it('should be ISO date with correct value', function() {
			expect(testFunc('01/01/2010', 17)).toBe('2010-01-01 : 17');
			expect(testFunc('12/11/1929', 0.13)).toBe('1929-12-11 : 0.13');
		});
	});
	describe('longTermMean', function() {
		var start = nar.fullReport.PlotUtils.YEAR_NINETEEN_HUNDRED;
		var end = nar.fullReport.PlotUtils.ONE_YEAR_IN_THE_FUTURE;
		it('start should be before end', function() {
			expect(start).toBeLessThan(end);
		});
		it('values should be reasonable', function() {
			expect(start).toBeLessThan(0);
			expect(end).toBeGreaterThan(0);
			// Now restrict further, these may need to change
			expect(start).toBe(-2208967200000);
			expect(end).toBeGreaterThan(1438723569000);
		});
	});
});
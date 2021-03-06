var nar = nar || {};
nar.fullReport = nar.fullReport || {};
(function(){
	/**
	 * This could be made into a webservice so the definitions can be
	 * modified in a database somewhere.
	 */
	nar.fullReport.terms = {
		humanNitrateBenchmark: {
			name: 'Human-health benchmark for Nitrate',
			shortDef: 'Maximum Contaminant level for nitrate',
			longDef: 'The human-health benchmark for nitrate is a USEPA Maximum Contaminant Level - MCL = 10 mg/L as N  http://water.epa.gov/drink/contaminants/index.cfm'
		},
		mcl: {
			name: 'MCL',
			shortDef: 'Maximum Contaminant Level',
			longDef: 'Maximum Contaminant Level for human health; National Primary Drinking Water Regulations (NPDWRs or primary standards) are legally enforceable standards that apply to public water systems. Primary standards protect public health by limiting the levels of contaminants in drinking water. http://water.epa.gov/drink/contaminants/'
		},
		humanPesticideBenchmark: {
			name: 'Human-health benchmark for Pesticides',
			shortDef: 'Level at or below which adverse health effects are not anticipated',
			longDef: 'Human Health Benchmark for Pesticides are levels of certain pesticides in water at or below which adverse health effects are not anticipated from one-day or lifetime exposures. http://iaspub.epa.gov/apex/pesticides/f?p=HHBP:home'
		},
		aquaticLifeBenchmark: {
			name: 'Aquatic-life benchmark',
			shortDef: 'Criteria which are intended to provide for the protection of aquatic life and recreation.',
			longDef: 'Nutrient criteria are meant to approximate reference conditions and to help prevent eutrophication. USEPA’s section 304(a) criteria are intended to provide for the protection and propagation of aquatic life and recreation. http://www2.epa.gov/sites/production/files/documents/ecoregions_jan03frnfs.pdf'
		},
		longTermMean: {
			name: 'Long-term mean',
			shortDef: 'Average for the period of record',
			longDef: 'Mathematical average of the constituent concentration or load for the period of record.'
		},
		periodOfRecord: {
			name: 'Period of Record',
			shortDef: 'Period of time included in the summary graphs',
			longDef: 'Defined in this report as the period of time (in water years) included in the summary graphs, and may not include all historic records available.'
		},
		waterYear: {
			name: 'Water Year',
			shortDef: '12-month period from October 1 to September 30',
			longDef: 'Defined in this report as the 12-month period October 1 through September 30, designated by the calendar year in which it ends.   http://water.usgs.gov/nwc/explain_data.html'
		},
		lowess: {
			name: 'Lowess curve',
			shortDef: 'Smooth line',
			longDef: '(Helsel and Hirsch, 2002) were provided (smoothing factor of 0.4) when at least five years of record were available and <25% of the data were censored. Lowess curves were not completed for streamflow. Lowess curves may or may not cover the entire period depending on variability in reporting levels (censored values). If sampling frequency was less than quarterly, lowess curves were typically not provided.'
		},
		censored: {
			name: 'Censored value',
			shortDef: 'Value less than reporting level',
			longDef: 'A value reported as less than a laboratory reporting level'
		},
		labReportingLevel: {
			name: 'Laboratory Reporting Level',
			shortDef: 'Value is equal to twice the yearly determined long-term method detection level.',
			longDef: 'Generally is equal to twice the yearly determined long-term method detection level (LT-MDL). The LRL controls false-negative error. The probability of falsely reporting a non-detection for a sample that contained an analyte at a concentration equal to or greater than the LRL is predicted to be less than or equal to 1 percent. The value of the LRL will be reported with a “less than” (<) remark code for samples in which the analyte was not detected. The National Water Quality Laboratory collects quality-control data from selected analytical methods on a continuing basis to determine LT-MDLs and to establish LRLs. These values are reevaluated annually based on the most current quality-control data and therefore may change. (Note: Previously, the LRL has been called the non-detection value or NDV—a term which is no longer used.)'
		},
		dissolvedAndTotal: {
			name: 'Dissolved and total',
			shortDef: 'Analysis on filtered and unfiltered water samples, respectively',
			longDef: 'Constituent concentrations listed in the accompanying figures and tables refer to dissolved concentrations unless specifically stated otherwise. Dissolved constituent concentrations are derived from laboratory analysis of water samples filtered through a 0.45 micrometer filter, whereas total constituent concentrations are determined from laboratory analysis of unfiltered water samples.'
		}
	};
}());

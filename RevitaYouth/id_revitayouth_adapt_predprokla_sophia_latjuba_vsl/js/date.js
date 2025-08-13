function dtime(
	locale = "in",
	daysBefore = 0,
	monthsBefore = 0,
	yearsBefore = 0,
	canDay = true,
	canMonth = true,
	canYear = true
) {
	var monthNames = {
		num: [
			"01",
			"02",
			"03",
			"04",
			"05",
			"06",
			"07",
			"08",
			"09",
			"10",
			"11",
			"12",
		],
	
		in: [
			"Januari",
			"Februari",
			"Maret",
			"April",
			"Mei",
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember",
		],
	};
	var date = new Date(new Date() - 24 * 3600 * 1000 * daysBefore);
	date.setFullYear(
		date.getFullYear() - yearsBefore + (locale === "th" ? 543 : 0)
	);
	var mnth = monthNames[locale][date.getMonth() - monthsBefore];
	var d = canDay ? date.getDate() : "";
	var m = canMonth ? mnth : "";
	var y = canYear ? date.getFullYear() : "";
	document.write(d + " " + m + " " + y);
}



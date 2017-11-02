//return array of all quotes with 12 words max
var filePath = "quotes.js";
$.getJSON(filePath).done(function (data) {
	return data.filter(function (o) {
		return o.quoteText.split(" ").length <= 12;
	});
});

//return array of all quotes of Buddha
var filePath = "quotes.js";
	$.getJSON(filePath).done(function (data) {
		return data.filter(function (o) {
			return o.quoteAuthor === "Buddha";
		});
	});
}
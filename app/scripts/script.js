// Script

// Get quotes with AJAX
$(document).ready(function() {
	var btn = document.getElementById('next');
	
  	btn.addEventListener("click", createQuote);

	var twURL = 'https://twitter.com/intent/tweet?text=' + theQuote + ' — ' + theAuthor;
	btn.addEventListener("click", tweetQuote(twURL));

	function createQuote() {
		// The following is the API call to the MashApe random quotes API server
	    var output = $.ajax({
	      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
	      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
	      data: {}, // Additional parameters here
	      dataType: 'json',
	      success: function(data) {
	        theQuote = data.quote;
	        theAuthor = data.author;

	        renderHTML(theQuote, theAuthor);
	      },
	      error: function() {
	        alert("Error");
	      },
	      beforeSend: function(xhr) {
	        xhr.setRequestHeader("X-Mashape-Authorization", "knxHrjq79rmsh8K9OPlVmIMrWPXxp1aaLNfjsnhuy3oC1OP3d6"); // Enter here your Mashape key
	      }
	    });
	  }

	  function renderHTML(theQuote, theAuthor) {
		var textContainer = document.getElementById("qText");
		var authorContainer = document.getElementById("qAuthor");

		textContainer.innerHTML = '"' + theQuote + '"';
		authorContainer.innerHTML = '"' + theAuthor + '"';
	  }

	  function tweetQuote(twURL) {
		$(".fa-twitter").attr("href", twURL);
	  }
	  
});
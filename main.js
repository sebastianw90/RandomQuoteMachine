var btnGetQuote = document.getElementById('get-quote-btn');
var quoteText = document.getElementById('quote-place');

var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://talaikis.com/api/quotes/random/');
myRequest.onload = function() {
	var quoteData = JSON.parse(myRequest.responseText);
	quoteText.innerHTML = '';
	quoteText.innerHTML = "<p>" + quoteData.quote + "</p>" + "<p class=\"author\">" + quoteData.author + "</p>"
};
myRequest.send();

btnGetQuote.addEventListener('click', function() {
	myRequest.open('GET', 'https://talaikis.com/api/quotes/random/');
	myRequest.onload = function() {
		var quoteData = JSON.parse(myRequest.responseText);
		quoteText.innerHTML = '';
		quoteText.innerHTML = "<p>" + quoteData.quote + "</p>" + "<p class=\"author\">" + quoteData.author + "</p>"
	};
	myRequest.send();
})

var ps = document.getElementsByTagName('p');

var btnTweet = document.getElementById('tweet-btn');
btnTweet.addEventListener('click', function() {

	var quoteToChange = ps[0].innerText;
	var authorToChange = ps[1].innerText;

	var quoteAdress = quoteToChange.replace(/ /g, "%20");
	var authorAdress = authorToChange.replace(/ /g, "%20");

	var tweetAdress = 'https://twitter.com/intent/tweet?text=' + "\"" + quoteAdress + "\"" + "%20" + authorAdress;
	
	window.open(tweetAdress, '_blank');
	
});







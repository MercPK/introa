var imageArray = [
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14956490_595140504026732_9047451617144161170_n.jpg?oh=ccb7a0ebab5d8827b8542f0f17504565&oe=588B5139",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/12294885_803055099803225_1753496077626980062_n.jpg?oh=a39a8d7b82de4a30e1d273ddaaf55fff&oe=58CF2061",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-0/p206x206/12733987_1967840493441025_4172856520855866935_n.jpg?oh=4b148401b48b56a75939377671776edf&oe=58C869B0","https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/485976_491677310883441_2109765528_n.jpg?oh=2a1d379eee96e27335c5332235af60d6&oe=58D3940F"
];
];
var currentIndex = 0;

function renderImage(){
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

function forwardImage(){
	currentIndex++;
	renderImage();
}

function backImage(){
	currentIndex--;
	renderImage();
}

$('#forwardBtn').on('click', forwardImage);
$('#backBtn').on('click', backImage);

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + "!";
$('h1').html(outputString);


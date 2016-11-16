var imageArray = [
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/485976_491677310883441_2109765528_n.jpg?oh=2a1d379eee96e27335c5332235af60d6&oe=58D3940F",
	"",
	""
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


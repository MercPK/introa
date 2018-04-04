var imageArray = [
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/25299177_1331702946973862_228908318722312710_n.jpg?_nc_cat=0&oh=5d582d57413df4b30a234e02fecfc4dc&oe=5B61627E"
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

var name = prompt("What is your name?");
var outputString = "THANKS, " + name + "!";
$('h1').html(outputString);

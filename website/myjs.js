var imageArray = [
	"https://www.facebook.com/photo.php?fbid=1331702946973862&set=a.102442203233282.3773.100004025078323&type=3&theater",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/26167866_1687702604628305_6087321719617207305_n.jpg?_nc_cat=0&oh=15bbd1adc8e40b28ee57e2a5a0148333&oe=5B2AA66E"

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


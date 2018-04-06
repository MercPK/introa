var imageArray = [
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/25299177_1331702946973862_228908318722312710_n.jpg?_nc_cat=0&oh=5d582d57413df4b30a234e02fecfc4dc&oe=5B61627E",
	"https://www.facebook.com/photo.php?fbid=1225116010930463&set=a.269713153137425.55615.100002962278582&type=3&theater",
	"https://www.facebook.com/photo.php?fbid=787267041480743&set=a.112545825619538.1073741826.100005923627989&type=3&theater",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/27867959_1096940480448697_1626215646239777148_n.jpg?_nc_cat=0&oh=4ef65959beaafddb2a16a6ed17ae9aa6&oe=5B301756"
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

var imageArray = [
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14956490_595140504026732_9047451617144161170_n.jpg?oh=ccb7a0ebab5d8827b8542f0f17504565&oe=588B5139",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/12294885_803055099803225_1753496077626980062_n.jpg?oh=a39a8d7b82de4a30e1d273ddaaf55fff&oe=58CF2061",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-0/p206x206/12733987_1967840493441025_4172856520855866935_n.jpg?oh=4b148401b48b56a75939377671776edf&oe=58C869B0","https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/485976_491677310883441_2109765528_n.jpg?oh=2a1d379eee96e27335c5332235af60d6&oe=58D3940F",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14702430_1127849843989485_361476168846698483_n.jpg?oh=94dab56ce3f568595887b5f7bc0398cb&oe=58D313CC",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-0/s261x260/11204955_666658053436457_2189076760658001456_n.jpg?oh=7854e0aead36b4e886bbcd318a66a98a&oe=58C6A93E",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14040172_739480929523073_1558780021460727080_n.jpg?oh=f18fa5b37a9effa68a54fbbab5bc253b&oe=58BB39B4",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14370422_1790089567894318_1427617439937180505_n.jpg?oh=bff6434502d12e22deaaff2de305d8c4&oe=58B85A63",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14639899_387012788355045_8061321139159095005_n.jpg?oh=dceae1bc7b7d1df86848c270ad5aa7a1&oe=58CC2DF3",
	"",
	"",
	"",
	"",
	"",
	"",
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


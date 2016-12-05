var imageArray = [
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14956490_595140504026732_9047451617144161170_n.jpg?oh=ccb7a0ebab5d8827b8542f0f17504565&oe=588B5139",
        "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/12294885_803055099803225_1753496077626980062_n.jpg?oh=a39a8d7b82de4a30e1d273ddaaf55fff&oe=58CF2061",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14702430_1127849843989485_361476168846698483_n.jpg?oh=94dab56ce3f568595887b5f7bc0398cb&oe=58D313CC",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/13886907_500219833508539_8672260014081212712_n.jpg?oh=e1786778cc7013084e0668efccbe16eb&oe=58B30CFB",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14040172_739480929523073_1558780021460727080_n.jpg?oh=f18fa5b37a9effa68a54fbbab5bc253b&oe=58BB39B4",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14370422_1790089567894318_1427617439937180505_n.jpg?oh=bff6434502d12e22deaaff2de305d8c4&oe=58B85A63",
	"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14639899_387012788355045_8061321139159095005_n.jpg?oh=dceae1bc7b7d1df86848c270ad5aa7a1&oe=58CC2DF3",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/10153675_948940781848629_1151599120766188992_n.jpg?oh=b32928ccef60c5316a6a1509fe59c6e2&oe=58C419B1",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/10440698_993405394019958_2707607733875702721_n.jpg?oh=ab9bf1118a4e8c446479014bc5361281&oe=58BBD006",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/12920506_1748964805322493_624681425521154530_n.jpg?oh=efb0c0af1ba3e10f30baa9955e631c96&oe=5886D701",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/13626543_835333146601886_6235932023558963822_n.jpg?oh=846e6dcbfec222a46a6e5abfe24691a2&oe=58B303C8",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/13627044_279704195721286_2509484056395693252_n.jpg?oh=aa6647d7953042c432cf2b64ed9d11a3&oe=58B42215",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/12065777_1702969416591499_1502796854794419924_n.jpg?oh=686104dad8bd175a3eea935328869d1e&oe=58F57ACD",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-0/p206x206/15232338_1780889845506352_4870386628113922485_n.jpg?oh=5be74c7e0817ef5989ca58ae18e09525&oe=58C3EB21",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/983802_671720332854655_244707144_n.jpg?oh=497057f753330ee19e7cb88384b7dfb8&oe=58CB6562",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/10154026_727400114072903_811741614376850811_n.jpg?oh=00569ae7bbb195067853ebae64355e22&oe=58CC657C",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/15056463_1001650516628436_5865923444703697100_n.jpg?oh=6672257bb2671aca6e25f7dfe317c245&oe=58C9EB7C",
    "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.0-9/14441057_1112790445475725_4308126203904174336_n.jpg?oh=061e17dd518e559ecfcc2c04449027be&oe=58B4678B"
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

var name = prompt("Gual e o seu nome?");
var outputString = "Em Homenagem a todos os meus amigos, " + name + "!";
$('h1').html(outputString);


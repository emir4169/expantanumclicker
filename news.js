news = {};

news.begin = function () {
	news.message();
};

news.message = function () {
	let rand = Math.floor(Math.random() * news.news.length);
	let msg = news.news[rand];
	let e = document.getElementById("news");
	e.innerHTML = msg;
	let textWidth = e.clientWidth;
	let parentWidth = e.parentElement.clientWidth;
	e.style.transition = "";
	e.style.transform = "translateX(" + (parentWidth + 10) + "px)";
	let dist = parentWidth + e.clientWidth;
	let rate = 100;
	let transformDuration = dist / rate;
	news.data = [(Math.ceil(transformDuration) * 1000)]

	e.style.transition = "transform " + transformDuration + "s linear";
	e.style.transform = "translateX(-" + textWidth + "px)";

	setTimeout(news.message, Math.ceil(transformDuration) * 1000);
};

news.news = [
	"The code for this news ticker is totally not stolen from Antimatter Dimensions.",
	"For saving please dm me in discord: AdamTheDumbPerson#7366",
	"Powered by ExpantaNum.js and my lack of sanity.",
	"No prestige layers?",
	"I still need more \"news\" for the news ticker, go crazy. it doesnt even have to be real news, take inspiration from Antimatter Dimensions.",
	"mfs after spamming the generate matter button with a autoclicker: \"I FOUND A BUG!!!!\"",
	"mfw when someone reports the same raise by two bug for the 5423561238th time (it is not possible to fix it)"
];
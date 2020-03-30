var titles = ["SideTitle1", "SideTitle2", "SideTitle3", "SideTitle4",
						"SideTitle5", "SideTitle6", "SideTitle7", "SideTitle8",
						"SideTitle9", "SideTitle10","SideTitle11"];

// Topnav頁面切換
function openWebtab(evt, webName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab-links");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(webName).style.display = "block";
	evt.currentTarget.className += " active";

	// When the page refreshed, it reset variables.
	scrollTo(0, 0);
	// When the page refreshed, it stops playing. 
	stopVideo();
	closeNav();
}
// Sidenav頁面切換
function openWebside(evt, webName) {
	var i, sidecontent, sidelinks;

	sidecontent = document.getElementsByClassName("sidenav-content");
	for (i = 0; i < sidecontent.length; i++) {
		sidecontent[i].style.display = "none";
	}
	sidelinks = document.getElementsByClassName("sidenav-links");
	for (i = 0; i < sidelinks.length; i++) {
		sidelinks[i].className = sidelinks[i].className.replace(" active", "");
	}
	document.getElementById(webName).style.display = "block";
	evt.currentTarget.className += " active";

	// When the page refreshed, it reset variables.
	scrollTo(0, 0);
	closeNav();
}

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player1, player2;

function onYouTubeIframeAPIReady() {
	player1 = new YT.Player('player1', {
		videoId: '3S2XnMDlqDQ'
	});
	
	player2 = new YT.Player('player2', {
		videoId: '5I1ZZScRLPg'
	});
}

function stopVideo() {
	player1.stopVideo();
	player2.stopVideo();
}
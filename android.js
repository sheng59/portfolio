function openNav() {
	document.getElementById("mySideMenu").style.width = "240px";
}

function closeNav() {
	document.getElementById("mySideMenu").style.width = "0";
}

function backNav() {
	document.getElementById("mySideProject").style.width = "0";
	document.getElementById("mySideMenu").style.width = "240px";
}

function openProject() {
	closeNav();
	document.getElementById("mySideProject").style.width = "240px";
}

function openWebProject(evt, webName) {
	var i, tabcontent, sidecontent, sidelinks;
	
	// close tab content
	tabcontent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	// open project menu
	document.getElementById("Menu3").style.display = "block";
	
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
	// When press closeBtn close sidenav
	document.getElementById("mySideProject").style.width = "0";
}
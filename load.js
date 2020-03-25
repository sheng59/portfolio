// 當頁面全部載入完成
window.addEventListener("load", function() {
	var i, sidecontent;
	var tabs, bg_img, btn;
	
	document.getElementById("loading").style.display = "none";
	
	tabs = $(".tabs");
	tabs.css("display", "block");
	bg_img = $(".bgImg");
	btn = $(".btnMenu");
	if (btn.css("display") === "block")
		bg_img.css("display", "none");
	else
		bg_img.css("display", "block");
	
	// tabnav
	document.getElementById("Menu1").style.display = "block";
	document.getElementById("StartPage").className += " active";
	// sidenav
	document.getElementById("ToolPage").style.display = "block";
	document.getElementById("SideTitle1").className += " active";
	
	sidecontent = document.getElementsByClassName("sidenav-content");
	for (i = 0; i < sidecontent.length; i++) {
		sidecontent[i].style.display = "none";
	}
	document.getElementById("ToolPage").style.display = "block";
});
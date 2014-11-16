//function to check whether or not browser is mobile.
	function isMobile(){
			nav = navigator.userAgent;
			return 	(nav.indexOf("Android") > -1) ||
					(nav.indexOf("webOS") > -1) ||
					(nav.indexOf("iPhone") > -1) ||
					(nav.indexOf("iPad") > -1) ||
					(nav.indexOf("Windows Phone") > -1);
		}
		
//sets the stylesheet based on whether or not browser is mobile.
	var fileref=document.createElement("link");
	var script =document.createElement("script");
	script.setAttribute("type","text/javascript");
	script.setAttribute("src","script/script.js");
	if(isMobile()){
		console.log("IS MOBILE");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", "style/mobile.css");
	}else{
		console.log("IS PC");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", "style/pc.css");
	}
	document.head.appendChild(script);
	document.head.appendChild(fileref);			

//All images and ads are loaded and put in lists
	var images =[];
	var ads = []

//Currently displayed Ad
	var curAd = 0;

//Subpages are loaded and their titles put in this list
	var iframes = [];

//loads all images and adds them to the images and ads lists
	function loadImages(){
		folder = "media/";
		var image = new Image();
			image.src= folder+"dice.png";
			image.onload=loadContent;
			images.push(image);			
		
		var image = new Image();
			image.src= folder+"controller.png";
			image.onload=loadContent;
			images.push(image);
		
		var image = new Image();
			image.src= folder+"contabout.png";
			image.onload=loadContent;
			images.push(image);
		
		var image = new Image();
			image.src= folder+"compass4.png";
			image.onload=loadContent;
			images.push(image);
		
		var image = new Image();
			image.src= folder+"itsasecrettoeverybody.png";
			image.onload=loadContent;
			images.push(image);
		
		//add ads
		var ad = new Image();
			ad.src = folder+"Adds_beard.png";
			ad.onload=loadContent;
			ads.push(ad);
			
		var ad = new Image();
			ad.src = folder+"ads_swine.png";
			ad.onload=loadContent;
			ads.push(ad);
	}

//sets the wheel center image.	
	function setImage(n){
		document.getElementById("compass").src = images[n-1].src;
	}
		
	
//current rotation
	var rotation = 0;
//target rotation
	var target = 0;
//speed of rotation
	var speed = 0.2;
//holds interval function for rotation
	var intervalFunc;

//rotates the wheel to target rotation.	
	function spin(){
		if(rotation < target-3 || rotation > target+5){
			rotation = parseInt(rotation + speed);
			if(speed < 6)
				speed +=0.2;
			if(rotation >= 360)
				rotation = 0;
			div = document.getElementById("wheel");
			div.style.webkitTransform = 'rotate('+rotation+'deg)'; 
			div.style.mozTransform    = 'rotate('+rotation+'deg)'; 
			div.style.msTransform     = 'rotate('+rotation+'deg)'; 
			div.style.oTransform      = 'rotate('+rotation+'deg)'; 
			div.style.transform       = 'rotate('+rotation+'deg)'; 
		}
		else{
			rotation = target;
			div = document.getElementById("wheel");
			div.style.webkitTransform = 'rotate('+rotation+'deg)'; 
			div.style.mozTransform    = 'rotate('+rotation+'deg)'; 
			div.style.msTransform     = 'rotate('+rotation+'deg)'; 
			div.style.oTransform      = 'rotate('+rotation+'deg)'; 
			div.style.transform       = 'rotate('+rotation+'deg)'; 
			clearInterval(intervalFunc);
		}
	}
	
//starts rotation of wheel, or instantly rotates it depending on whether this is a mobile
//or pc browser.
	function rotate(){	
		speed = 0.2;
		
		if(isMobile()){
			rotation = target;
			div = document.getElementById("wheel");
			div.style.webkitTransform = 'rotate('+rotation+'deg)'; 
			div.style.mozTransform    = 'rotate('+rotation+'deg)'; 
			div.style.msTransform     = 'rotate('+rotation+'deg)'; 
			div.style.oTransform      = 'rotate('+rotation+'deg)'; 
			div.style.transform       = 'rotate('+rotation+'deg)'; 
			clearInterval(intervalFunc);
			console.log(rotation);
		}else{
			clearInterval(intervalFunc);
			intervalFunc = setInterval(spin,15);
		}
	}
	
	//variable setting target
	var to = 0;
	var f = 0;
	
	//add rotation interval
	var addInterval;
//intialization
	window.onload = function(){
		if(isMobile()){
		//hide ads on mobile.
			document.getElementById('ads').style.visibility = "hidden";
		}
	//load all images
		loadImages();			
		
	//easter egg function.
		play = false;
		document.body.addEventListener("click",function(ev){
			x = ev.clientX;
			y = ev.clientY;
			console.log(x + "," + y);
			if(x < 185 && y < 185 && !play){
				audio = new Audio("media/catsound.mp3");
				step  = 0;
				interval = setInterval(function(){
				step+=2;
				//seemingly no equivalent for I.E and Firefox.
				//googling reveals it is not supported as of yet.
				document.getElementById("compass").style.webkitFilter = "hue-rotate("+ step +"deg)";
				},5);
				audio.addEventListener("ended", function(){
					play = false;
					document.getElementById("compass").style.border = "none";
					div = document.getElementById("ads");
					div.style.webkitTransform = 'rotatey('+0+'deg)'; 
					div.style.mozTransform    = 'rotatey('+0+'deg)'; 
					div.style.msTransform     = 'rotatey('+0+'deg)'; 
					div.style.oTransform      = 'rotatey('+0+'deg)'; 
					div.style.transform       = 'rotatey('+0+'deg)'; 
					clearInterval(interval);
					clearInterval(addInterval);
				});
				audio.play();
				play = true;
				setImage(5);
				
				//rotates ad.
				if(!addInterval){
				addInterval = setInterval(function(){
					div = document.getElementById("ads");
					div.style.webkitTransform = 'rotatey('+f+'deg)'; 
					div.style.mozTransform    = 'rotatey('+f+'deg)'; 
					div.style.msTransform     = 'rotatey('+f+'deg)'; 
					div.style.oTransform      = 'rotatey('+f+'deg)'; 
					div.style.transform       = 'rotatey('+f+'deg)'; 
					f++;
				},50);}
				else{
					clearInterval(addInterval);
					addInterval = false;
				}
			}
		
		});
	//end easter egg 
	
	//load all subpages
		loadAllIframes();
	//add eventlistener to credits section, displaying it on mousover and hiding it on mouseout.
		document.getElementById("footer").onmouseover = function(){
			document.getElementById("footer").innerHTML = footertext;
			window.scrollTo(0,document.body.scrollHeight);
			};
		document.getElementById("footer").onmouseout = function(){
			document.getElementById("footer").innerHTML = footertext_off;
			};
	//hide buttons not used in opening page
		for(i = 0; b = document.getElementsByTagName("button")[i]; i++){
					if(i > 5){
						break;
						}
					b.style.visibility="hidden";
				}
	/*	get main buttons and add listeners displaying or hiding subpage-buttons
		of the respective subpages they display.  They also set the respective image of subpages
		,display subpages and start rotation of wheel.
	*/

		buttons = document.getElementsByTagName('button');
		buttons[6].addEventListener('click',function(){
				goTo("tabletop");
			});
			
		buttons[7].addEventListener('click',function(){

				goTo("videogames");
		});
		
		buttons[8].addEventListener('click',function(){
				goTo("contact");
			});
		
		buttons[9].addEventListener('click',function(){
				goTo("about");
			});
		
//same as buttons, just for main logo image.
		document.images[0].onclick = function(){
				for(i = 0; b = document.getElementsByTagName("button")[i]; i++){
					if(i > 5){
						break;
						}
					b.style.visibility="hidden";
				}
				target = 0;
				setImage(4);
				goTo("home");
			};
	
		document.getElementById("but_1").addEventListener("click", function(){
			goTo(targets[5+2].split(".")[0]);
		});
		document.getElementById("but_2").addEventListener("click", function(){
			goTo(targets[5+1].split(".")[0]);
		});
		document.getElementById("but_3").addEventListener("click", function(){
			goTo(targets[5+0].split(".")[0]);
		});
		document.getElementById("but_4").addEventListener("click", function(){
			goTo(targets[5+3].split(".")[0]);
		});
		document.getElementById("but_5").addEventListener("click", function(){
			goTo(targets[5+4].split(".")[0]);
		});
		document.getElementById("but_6").addEventListener("click", function(){
			goTo(targets[5+5].split(".")[0]);
		});
	}

//target urls, used in goTo-function for displaying subpages and in loadIframes-function.
	var targets = ["contact.php","home.html","about.html","tabletop.html","videogames.html","tabletop/board.html","tabletop/dice.html","tabletop/rpg.html","videogames/pc.html","videogames/console.html","videogames/other.html"]
	var targetHeight = [];
	var loaded = 0;

//function for setting sub page and altering page height to contain sub page
	function goTo(name){
		name = name.toLowerCase();
		name = name.replace(" ", "");
		//the statements in the following if-clauses were individually placed in onclick listeners of buttons,
		//but were moved here due to how the sitemap had to be made.
		if(name.indexOf("tabletop") >= 0){
				target = 90;
				setImage(1);
				for(i = 0; b = document.getElementsByTagName("button")[i]; i++){
						if(i > 5){
							break;
							}
						if(i > 2)
							b.style.visibility="hidden";
						else
							b.style.visibility="visible";
					}
			}
		else if(name.indexOf("videogames") >= 0){
				target = 0;
				setImage(2);
				for(i = 0; b = document.getElementsByTagName("button")[i]; i++){
					if(i > 5)
						break;
					if(i < 3)
						b.style.visibility="hidden";
					else
						b.style.visibility="visible";
				}			
		}
		else if(name.indexOf("contact") >= 0 ){
				for(i = 0; b = document.getElementsByTagName("button")[i]; i++){
					if(i > 5){
						break;
						}
					b.style.visibility="hidden";
				}
				target = 180;
				setImage(3);
		}else if(name.indexOf("about") >= 0){
				for(i = 0; b = document.getElementsByTagName("button")[i]; i++){
					if(i > 5){
						break;
						}
					b.style.visibility="hidden";
				}
				target = 270;
				setImage(3);
		
		}
		console.log("Name = " + name);
		
		site = document.getElementsByTagName("iframe");
		var rightSite;
		for(i = 0; i < site.length; i++){
			a = site[i].name;
			if(a == name){
				rightSite = site[i];
				site[i].style.visibility = "visible";
			}
			else{
				site[i].style.visibility = "hidden";
			}
		}
		
		//increases text size if the sub page is to be displayed on a mobile browser.
		if(isMobile()){
			rightSite.contentWindow.document.body.style.fontSize="35pt";		
		}else{
			document.body.style.height = "0px";
		}
		document.getElementById("site").style.height=10+"px";
		height = rightSite.contentWindow.document.body.scrollHeight;
		if(isMobile()){
			document.getElementById("site").style.height=(parseInt(height)+10)+"px";
			rotate();
		}else{
			document.getElementById("site").style.height=(parseInt(height)+15)+"px";
			document.body.style.height = (250+height+ 20)+"px";
			rotate();
		}
	}

//loads all iframes and hides them	
	function loadAllIframes(){
		for(i = 0; i < targets.length; i++){
			iframe = document.createElement("IFRAME");
			iframe.setAttribute("src",targets[i]);
			iframe.name= targets[i].split(".")[0];

			iframe.style.position="absolute";
			iframe.style.top="0px";
			iframe.style.visibility="hidden";
			iframe.scrolling="no";
			document.getElementById("site").appendChild(iframe);
			iframe.onload=function(){	
				loadContent();
			}
		}			
	}

//function called whenever an object is loaded
//updates the loading bar.
	function loadContent(){
		loaded++;
		context = document.getElementById("canvas").getContext("2d");
		context.beginPath();			
		context.fillStyle = "rgba(90,90,90,0.2)";			
		context.rect(0,0,(loaded/17)*parseInt(document.getElementById("canvas").width),500);
		context.fill();
		context.stroke();
		if(loaded ==18){
				document.getElementById("canvas").style.visibility="hidden";
				if(!isMobile()){
					document.getElementById("ads").src = ads[curAd++%2].src;
					setInterval(function(){
					document.getElementById("ads").src = ads[curAd++%2].src;
					},15000);
			}
		}
	}

	//set iframe size to fit inner web-page.
	document.getElementsByTagName('iframe')[0].onload = function(){
		clearInterval(intervalFunc);
		document.getElementById("site").style.height=10 + "px";
		if(isMobile()){
			document.getElementsByTagName('iframe')[0].contentWindow.document.body.style.fontSize="35pt";		
			}
		height = document.getElementsByTagName('iframe')[0].contentWindow.document.body.scrollHeight;
		if(isMobile()){				
			rotate();
			document.getElementById("site").style.height=(parseInt(height)+15)+"px";
		}else{
			rotate();
			document.getElementById("site").style.height=(parseInt(height)+15)+"px";
			document.body.style.height = (250+height+ 20)+"px";
		}
	}
	
	
	
//self-explanatory	
	var footertext_off = "\
			<h3>\
			SOURCES & CREDITS\
			</h3>";

	var footertext = "\
	\
	<h3>\
	SOURCES & CREDITS\
	</h3>\
	Designed and Created by:<br/>\
		Lars Harald Skjong<br/>\
		Lars Sættem<br/>\
		Stian Hegerland Hagen\
	<br/>\
	<br/>\
	Compass source: http://fc04.deviantart.net/fs71/i/2013/296/7/9/compass_rose_by_draconicparagon-d6rjgqi.png <br/>\
	Bacon image source: http://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png <br/>\
	Button background source: http://www.magic4walls.com/wp-content/uploads/2014/02/texture-orange-copper-brown-dark-tone-stripes-glow-background.jpg <br/>\
	D20 image source: http://image9.spreadshirt.com/image-server/v1/compositions/111713986/views/1,width=235,height=235,appearanceId=1/D20-T-Shirt---Black-Dice.jpg <br>\
	Controller source: http://img1.123freevectors.com/wp-content/uploads/new/objects/420-game-controller-vector-set.png<br>\
	Home image source: http://i.telegraph.co.uk/multimedia/archive/02356/SomeLikeItHipHop_2356505b.jpg<br>\
	House baratheon source: http://upload.wikimedia.org/wikipedia/commons/f/fd/Coa_icefire_Baratheon.jpg<br>\
	Cave Story video: www.youtube.com/embed/mmGmHnTiiWw<br>\
	Lands of Lore video: www.youtube.com/embed/6GfOzmvd0Bg<br>\
	"
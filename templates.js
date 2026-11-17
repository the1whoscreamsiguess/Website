//https://stackoverflow.com/questions/36387676/is-it-possible-to-reuse-html-like-a-template-on-multiple-pages

//fancy script that loads elements that are the same for every page
//fun fact, i had another website once where the navigation buttons would change depending on which page you were on
//the buttons were hardcoded into every page separately...

var splashtext = [
"Now with 50% less sugar!",
"Now with 50% more sugar!",
"Insert funny tagline here",
"As seen on TV!",
"Limited edition!",
"May contain nuts",
"\"♥♥♥♥ you, Baltimore!\"",
"God is dead and we have killed him",
"Not a place of honor",
"//idk man",
"/// summon him to die instantly",
"//IL hooks (♥♥♥♥ THESE THINGS)",
"//IL hooks (it's ok i forgive them)",
"Guaranteed!",
"One of a kind!",
"No, don't eat the spiders!",
"Actually yes, eat the spiders",
"Might not actually scream",
"\"the one who screams i guess\"",
"Open source!",
"Tell your friends!",
"OMG EASTER EGG LOLOL!!!!!!111!!1",
"How much do you think waffles cost?",
"Not the longest text ever",
"Herald of what now?",
"Who the hell is Steve Jobs?",
"Also known as...",
"Some sort of bear creature",
"Some sort of rodent",
"Violence!",
"The screamer (eek!)",
"wawa",
"wawawawawawawawawawawawa",
"Hey there, little guy!",
"\"I don't even know if that's a ♥♥♥♥♥♥♥ cat\"",
"\"You have to be able to play the freakin' game\"",
"i think i have beefbrain now",
"I think it's raining",
"Do a flip!",
"Powering... uhh... i forgot",
"This is a reference to something, but you'll never know what it is",
"Really wishing I had some garlic bread rn",
"We taught a slugcat to use a keyboard",
"Green is not a creative color",
"Play Hypnospace Outlaw it's really good",
"Play CrossCode it's really good",
"Play Rain World it's really good",
"Play the Creatures series it's really good",
"Play 24 Killers it's really good",
"Play RIBBIT the Deltarune mod it's really good",
"Play Gimmiko it's really good",
"Play corru.observer it's really good",
"Play Undertale 2 by Zizou it's really good",
"Watch LUCIDS it's really good",
"Watch Paprika it's really good",
"I have no mouth and I'm screaming anyway",
"(screaming)",
"Insert phrase containing the word \"scream\" here",
"Home of challenge parsing!",
"Writing weird programs since 2017",
"Debug.Log(\"AAAAAAAA\");",
"Logger.LogMessage(\"aljkfsdghajhgrwerghner\");",
"//TODO make this suck less",
"//TODO: What the hell is causing this?",
"//TODO - review why the hell you're doing this?",
"Debug.LogError(\"WTF?\");",
"UnityEngine.Debug.Log(\"FAILED!!!!!!!!!!!!!!!!!!!!!\")",
"Blue carrots are bad for you!",
"Do NOT press T in the Remix config",
"Welcome to P- I mean Rain World",
"Contains infinite genders!",
"Not that Watcher, the other one"
]

if (document.getElementById("prefab-header") != null)
{
	let newElement = document.createElement('center')
newElement.innerHTML = `<img src="./images/logo.png" alt="T1WS in pixelated block letters with a weirdly dithered green gradient">`
	document.getElementById("prefab-header").replaceWith(newElement);
}

if (document.getElementById("prefab-marquee") != null)
{
	let newElement = document.createElement('div')
newElement.innerHTML = `<div style="height: 40px;
	border-image-source: url('./images/marqueething.png');   
	border-image-slice: 8 fill;	
	border-image-width: 8px;
	border-image-repeat: repeat;
	image-rendering: pixelated;
	text-align: center;
	padding-left: 6px;
	padding-right: 5px;">
<div class="marquee" style="height: 40px;"><span id="prefab-splashtext"></span></div>`
	document.getElementById("prefab-marquee").replaceWith(newElement);
}

if (document.getElementById("prefab-splashtext") != null)
document.getElementById("prefab-splashtext").innerHTML = splashtext[Math.random() * splashtext.length>>0];

if (document.getElementById("prefab-navigation") != null)
{
	let newElement = document.createElement('nav')
newElement.innerHTML = `<div><a href="./index.html">Home</a></div>
<div><a href="./about.html">About</a></div>
<div><a href="https://t1ws.tumblr.com/tagged/my%20art"><img src="./images/tumblr.png" alt="Tumblr"> Art</a></div>
<div><a href="./mods.html">Mods</a></div>
<div><a href="./commissions.html">Commissions</a></div>
<div><a href="https://t1ws.tumblr.com"><img src="./images/tumblr.png" alt="Tumblr"> Blog</a></div>
<div><a href="./credits.html">Credits</a></div>`
	document.getElementById("prefab-navigation").replaceWith(newElement);
}




if (document.getElementById("prefab-footerbuttons") != null)
{
	let buttons = [];
	let name = window.location.href.split("/").pop();
	
	
		buttons.push("notepad.gif");
	
	buttons.push("web14.gif");
	if (name == "credits.html"){
	buttons.push("stillusingbuttons.gif");
	} else {
	buttons.push("computermonitor.gif");
	}
	
	if (name == "about.html"){
		buttons.push("go2hell.gif");
	} else if (name == "index.html"){
		buttons.push("peace.gif");
	}
	else {
		buttons.push("noescape.gif");
	}
	
	if (name == "about.html" || name == "art.html"){
		buttons.push("queercoded.png");
	} else {
	buttons.push("transrights.png");
	}
	
	if (name == "mods.html")
	{
		buttons.push("dontclick.gif");
	} else {
		buttons.push("silicon.gif");
	}
	
	
	let newElement = document.createElement('div');
	
	for (let x of buttons) {
	
	if (x == "dontclick.gif")
	{
		newElement.innerHTML += "<img src=\"./buttons/" + x + "\" alt=\"An 88x31 button\" onclick=\"dontClickThis()\">";
	}else if (x == "notepad.gif")
	{
		newElement.innerHTML += "<img src=\"./buttons/" + x + "\" alt=\"An 88x31 button\" title=\"technically Notepad++ but shhhh\">";
	} else {
		newElement.innerHTML += "<img src=\"./buttons/" + x + "\" alt=\"An 88x31 button\">";
	}
}
	newElement.innerHTML += "<center><p style=\"font-size: 16px;\">© the1whoscreamsiguess 2026-2027</p></center>"
	document.getElementById("prefab-footerbuttons").replaceWith(newElement);
}

function dontClickThis(){
window.alert("Now you've gone and done it");
window.location.href = "https://www.youtube.com/watch?v=WY_-MK0XBGc"; //this is a reference to something
}
var json = `{
	"mods": [
    {
      "name": "Coral Grapple",
	  "icon": "./modicons/coralgrapple.png",
	  "year": "2026",
	  "link": "https://steamcommunity.com/sharedfiles/filedetails/?id=3820498084",
	  "github": "https://github.com/the1whoscreamsiguess/BetterGrappleWorms",
      "desc": "Allows grappling worms to shoot out in zero gravity and stick to climbable vines."
    },
	 {
      "name": "More Flora",
	  "icon": "./modicons/moreflora.png",
	  "year": "2025",
	  "link": "https://steamcommunity.com/sharedfiles/filedetails/?id=3466492305",
      "desc": "A custom entity pack with an emphasis on items. Will be updated with more entities... eventually."
    },
	 {
      "name": "Batfly Storage",
	  "icon": "./modicons/batflystorage.png",
	  "year": "2025",
	  "link": "https://steamcommunity.com/sharedfiles/filedetails/?id=3458358126",
      "desc": "Allows batflies to be hoarded in shelters between cycles. If Don't Eat the Spiders is enabled, edible spiders and leeches can also be stored in shelters."
    }, 
	{
      "name": "Gakvu",
	  "icon": "./modicons/gakvu.png",
	  "year": "2023",
	  "link": "https://steamcommunity.com/sharedfiles/filedetails/?id=2979460013",
      "desc": "Custom skin based on Gakvu from corru.observer, complete with a unique tail visual. Currently has an overly invasive implementation and is not compatible with other cosmetic mods."
    },
	{
      "name": "\\"No, don't eat the spiders!\\"",
	  "icon": "./modicons/donteatthespiders.png",
	  "year": "2023",
	  "link": "https://steamcommunity.com/sharedfiles/filedetails/?id=2922275985",
      "desc": "Makes spiders and leeches edible for one eighth of a food pip."
    }
  ]
 }`
 
var mods = JSON.parse(json);

var groups = [[], [], []]

//sort them into 3 columns
for (let i = 0; i < mods.mods.length; i++) {
	groups[i % 3].push(mods.mods[i]);
}

var loaded = ""
for (let i = 0; i < 3; i++){
	loaded += `<inner-container style="min-width:33%">`
	for (let j = 0; j < groups[i].length; j++){
		loaded += `<div><center>
	<span class="big-text">` + groups[i][j].name +  " (" + groups[i][j].year + `)</span><br>
	<a href=` + groups[i][j].link + ` target="_blank"><img src=` + groups[i][j].icon + `></a><br>`
	+ groups[i][j].desc;
	console.log(groups[i][j].github);
	if (groups[i][j].github != null){
		loaded += ` <a href="` + groups[i][j].github + `" target="_blank"><img src="./images/github.png" alt="Github"></a>`
	}
	loaded += `</center></div>`
	}
	loaded += `</inner-container>`
}

document.getElementById("modcontainer").innerHTML = loaded;
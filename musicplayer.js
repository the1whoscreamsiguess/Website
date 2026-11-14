let songs = [
"dQEmaj9C6ko",
"byD8EfroyoE",
"60RZbb8ace4",
"_ujO5XPHy7c",
"Whv4aZ2wtaE",
"lQPc_t8bAIk",
"tOU6QM9DQ3Q",
"H_7Ten6mi1g",
"8NOAyJNgyFo",
"Y-Oa-VDc8Ok",
"eSdbxybgJBQ",
"gEAOJxmBb0U",
"UDXRp7qBTx8",
"nZtn0QNbTrI",
"5qJtOi4ceug",
"18-7LRdXW-Q",
"ZBIbmi9dcT0",
"eXn_werPaDc",
"Vlk5UEXiGCo",
"OU3nwL0aRZ8",
"Ja3HjlAq3ho",
"ZE-O4b-Svvg",
"ZXVQiSNU57w",
"OKmhAbR-Bbo",
"HAX4CmjkdA4",
"fXvxnDmwB_I",
"iLW9jNo-Lq4",
"WpegB9rDNCY",
"B7BrLNEoupU",
//Creatures 2 OST
"ef4NXOEwnYQ", //Across the Bridge
"PF0Yqr_Cr1M", //Deep Ocean
"dm4VyRfv0dU", //Desert
"So7xt2LXOUw", //Ettin Garden
"pYSZl5Q9qow", //Incubator Room
"g58BvWhNpyU", //Magnificence of the Shee
"Ri7oF4f_-X0", //Norn Cellar
"kWtVU3a-pi0", //Swamp
"MFx1DLUmI5M", //Waterfalls and Biodomes
]

//https://www.geeksforgeeks.org/javascript/how-to-create-hash-from-string-in-javascript/
function createHash(string) {
    let hash = 0;

    if (string.length === 0) {
        return hash;
    }

    for (let i = 0; i < string.length; i++) {
        const char = string.charCodeAt(i);

        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }

    return hash;
}

//pseudo-random daily song selector: pick a song by generating a numerical hash from the current date
//the daily songs will all change every time a new song is added to the list so umm... don't try to do anything important with it
var today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);

var song = Math.abs(createHash(today.toString())) % songs.length;






if (document.getElementById("musicplayer") != null)
document.getElementById("musicplayer").href= "https://www.youtube.com/watch?v=" + songs[song];
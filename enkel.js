// Author: Johan Brink 2022
// Version: 1.1.1
// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

// Readme:
// länka denna fil med en <script> längst ned inom din <body> i HTML dokumentet.
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto_url

// Visa konsollen i webbläsaren när du testar din sida. F12 tangenten tar fram utvecklingsverktygen i de flesta Windows webbläsare.

// Några användbara funktioner
// Funktionerna ger ett svar när de anropas. https://www.w3schools.com/Jsref/jsref_return.asp
function obfuscateEmail(address) {
	address = address.replace("@", "&#64;");
	address = address.replace(".", "&#46;");
	address = address.replace("mailto", "m&#97;i&#108;to");
	return address;
}

function goodPasswordCheck(password) {
	var regexNum = /\d/g;
	if (password.length < 12 || password.toUpperCase() == password || password.toLowerCase() == password || !regexNum.test(password)) {
		return "Password must mix upper and lower-case letters, contain numbers and be at least 12 characters long.";
	} else {
		return "Password is fairly good.";
	}
}

function detectSmallScreen() {
	return ((window.innerWidth <= 800) && (window.innerHeight <= 600));
}


// checka av god praxis...
var bodyContent = document.getElementsByTagName("BODY")[0].innerHTML;
bodyContent = bodyContent.toLowerCase();
var headContent = document.getElementsByTagName("HEAD")[0].innerHTML;
headContent = headContent.toLowerCase();
var htmlContent = document.getElementsByTagName("HTML")[0].innerHTML;
htmlContent = htmlContent.toLowerCase();
if (bodyContent.includes("<center>")) {
	console.log("Att tänka på: <center> taggen är föråldrad idag och bör inte användas längre, det är en kvarleva från äldre versioner av HTML, innan CSS fanns. Positionering och centrering görs bättre med css. Med margin-left och margin-right auto exempelvis.");
}

if (!bodyContent.includes(" alt=") && bodyContent.includes("<img ")) {
	console.log("Att tänka på: Det är god praxis att sätta alt attribut på dina bildtaggar, med en förklarande text. Den visas då tex. om länken till bilden är bruten av någon anledning. Det används också av skärmläsare, så att blinda besökare kan få veta vad sidans bilder föreställer och inte missar något sammanhang.");
}

if (!bodyContent.includes("<!--")) {
	console.log("Att tänka på: Visa kommentarer i din kod. Som med dina egna ord visar god förståelse för vad koden gör.");
}

if (!headContent.includes("viewport") && !headContent.includes("width=device-width")) {
	console.log("Att tänka på: Kom ihåg att sätta viewport taggen i din <head>. Annars blir särskilt text i din sida oläsbar på många mobila webbläsare, där utzoomningsnivån blir för stor.");
}

if (headContent.includes("<title></title>")) {
	console.log("Att tänka på: <title> taggen är tom, sidan har nu inget namn. Title används till saker som fliknamnet, bokmärken och i sökresultat på Internet. Det är därför viktigt att den inte lämnas blank.");
} else if (!headContent.includes("<title>")) {
	console.log("Att tänka på: <title> taggen saknas i <head> sidan har nu inget namn. Title används till saker som fliknamnet, bokmärken och i sökresultat på Internet. Det är därför viktigt att den inte lämnas blank.");
}

if (!headContent.includes("utf-8") && !headContent.includes("meta charset")) {
	console.log("Att tänka på: <meta charset='UTF-8'> taggen i <head> saknas. Den behövs för att svenska bokstäver ska fungera i alla webbläsare.");
}

if (!headContent.includes("<link ") || !headContent.includes(".css")) {
	console.log("Att tänka på: <link> tagg saknas i <head> som kopplar dokumentet till sin CSS kod.");
}

if (document.doctype === null || document.doctype.name != "html") {
	console.log("Att tänka på: <!DOCTYPE html> taggen längst upp i HTML dokumentet saknas eller är felstavad. Den behöver vara på plats för att din kod ska tolkas konsekvent på samma sätt av alla webbläsare, enligt HTML 5 standard.");
}

if (!bodyContent.includes("<img")) {
	console.log("Att tänka på: Det finns inga bilder i din sida.");
}

var linkTags = document.getElementsByTagName("LINK");
Array.from(linkTags).forEach(checkLinkChars);
function checkLinkChars(value, index, array) {
	var linkFilename = document.getElementsByTagName("LINK")[index].getAttribute("href");
	if (linkFilename !== null) {
		linkFilename = linkFilename.toLowerCase();
		if (linkFilename.includes("å") || linkFilename.includes("ä") || linkFilename.includes("ö") || linkFilename.includes(" ")) {
			console.log("Att tänka på: Använd aldrig å, ä, ö eller mellanslag i variabel, funktions eller filnamn/mappnamn när du jobbar med programmering, oavsett språk och plattform. Problem med teckenkodning orsakar ofta problem vid bland annat filöverföring eller filhantering.");
		}
		if (!linkFilename.includes(".css")) {
			console.log("Att tänka på: CSS fil har felaktig eller saknad filändelse.");
		}
		if (linkFilename.includes("\\")) {
			console.log("Att tänka på: Filadresser kan använda olika standarder för att makera mappar. I windows används \\ (backslash). Men i internet adresser (URL), Linux system och även i HTML och CSS så används istället / (slash). För att dina adresser ska fungera konsekvent i alla webbläsare och serversystem behöver du använda / i adresser i koden.");
		}
	}
}

var scriptTags = document.getElementsByTagName("SCRIPT");
Array.from(scriptTags).forEach(checkScriptChars);
function checkScriptChars(value, index, array) {
	var scriptFilename = document.getElementsByTagName("SCRIPT")[index].getAttribute("src");
	if (scriptFilename !== null) {
		scriptFilename = scriptFilename.toLowerCase();
		if (scriptFilename.includes("å") || scriptFilename.includes("ä") || scriptFilename.includes("ö") || scriptFilename.includes(" ")) {
			console.log("Att tänka på: Använd aldrig å, ä, ö eller mellanslag i variabel, funktions eller filnamn/mappnamn när du jobbar med programmering, oavsett språk och plattform. Problem med teckenkodning orsakar ofta problem vid bland annat filöverföring eller filhantering.");
		}
		if (!scriptFilename.includes(".js")) {
			console.log("Att tänka på: JavaScript fil har felaktig eller saknad filändelse.");
		}
		if (scriptFilename.includes("\\")) {
			console.log("Att tänka på: Filadresser kan använda olika standarder för att makera mappar. I windows används \\ (backslash). Men i internet adresser (URL), Linux system och även i HTML och CSS så används istället / (slash). För att dina adresser ska fungera konsekvent i alla webbläsare och serversystem behöver du använda / i adresser i koden.");
		}
	}
}
var imgTags = document.getElementsByTagName("IMG");
Array.from(imgTags).forEach(checkImgFolder);
function checkImgFolder(value, index, array) {
	var imgFilename = document.getElementsByTagName("IMG")[index].getAttribute("src");
	if (imgFilename !== null) {
		imgFilename = imgFilename.toLowerCase();
		if (!imgFilename.includes("/")) {
			console.log("Att tänka på: Bildfiler ska vara i en separat mapp för att visa god mappstruktur, lägg inte alla dina arbetsfiler i samma mapp.");
		}
		if (imgFilename.includes("\\")) {
			console.log("Att tänka på: Filadresser kan använda olika standarder för att makera mappar. I windows används \\ (backslash). Men i internet adresser (URL), Linux system och även i HTML och CSS så används istället / (slash). För att dina adresser ska fungera konsekvent i alla webbläsare och serversystem behöver du använda / i adresser i koden.");
		}
	}
}

var htmlPath = window.location.pathname;
var htmlName = htmlPath.split("/").pop();
htmlName = htmlName.toLowerCase();
if (!htmlName.includes(".htm") && !htmlName.includes(".html") && !htmlName.includes(".php") && htmlName != "" || htmlName.includes(".html.html")) {
	console.log("Att tänka på: HTML dokumentet har en saknad eller felaktig filändelse.");
}

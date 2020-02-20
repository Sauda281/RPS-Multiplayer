var bandList = require("./band.js");
console.log(bandList);

for (var key in bandList) {
	console.log("A" + key + ' band is ' + bandList[key] + ".");
} 
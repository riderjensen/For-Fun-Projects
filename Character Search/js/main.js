/*jslint browser:true */
"use strict()";

var realmName;
var charName;

//Getting realm names
var askRealmList = new XMLHttpRequest();

function blizzAPI(){

		var requestURL = "https://us.api.battle.net/wow/character/" + realmName + "/" + charName + "?locale=en_US&apikey=ez9mqbh86f3sugau2fg4anumnjk67zmp";
		askRealmList.open('GET', requestURL, true);
		askRealmList.responseType = "text";
		askRealmList.send(null);
}

askRealmList.onload = function(){
		if (askRealmList.status == 200) {
			rObj = JSON.parse(askRealmList.responseText);
			console.log(rObj);

			//create row element
			var rowDiv = document.createElement("div");
			rowDiv.setAttribute("class", "row");
			//create column 1 tag
			var col1Div = document.createElement("div");
			col1Div.setAttribute("class", "col-lg-6");
			//create column 2 tag
			var col2Div = document.createElement("div");
			col2Div.setAttribute("class", "col-lg-6");

			var paraTag = document.createElement("p");
			var paraTextNode = document.createTextNode(rObj.name);

			paraTag.appendChild(paraTextNode);
			col1Div.appendChild(paraTag);
			rowDiv.appendChild(col1Div);
			
			var element = document.getElementById("dataDump");
			element.appendChild(rowDiv);

		}
};


function main(){
	charName = document.getElementById("charName").value;
	realmName = document.getElementById("realmName").value;
	blizzAPI();


}


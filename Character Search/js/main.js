/*jslint browser:true */
"use strict()";

var realmName;

//Getting realm names
var askRealmList = new XMLHttpRequest();

function blizzAPI(){
		var requestURL = "https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=ez9mqbh86f3sugau2fg4anumnjk67zmp";
		//var requestURL = "https://us.api.battle.net/wow/"+ realmName+"/status?locale=en_US&apikey=ez9mqbh86f3sugau2fg4anumnjk67zmp";
		askRealmList.open('GET', requestURL, true);
		askRealmList.responseType = "text";
		askRealmList.send(null);
}

askRealmList.onload = function(){
		if (askRealmList.status == 200) {
			rObj = JSON.parse(askRealmList.responseText);
			console.log(rObj);
			for (var i = 0; i < rObj.realms.length; i++) {
				var money = rObj.realms[i].next;
				console.log(money);
			}
			

		}
};


function main(){
	realmName = document.getElementById("realmName").value;
	blizzAPI();


}


// Gravitos' Gallery plugin
//v1.0 | 16.12.2020 | vk.com/cube_mentore
amount = 23;
// ^ the only module setting is image amount.
// Images should be named as i.png where i is
// image number w/o first zeroes (starting with 0.png),
// like 102.png, 8.png and so on.



vv = false;
k=0;

for (var i = amount-1; i >= 0; i--) {
	document.getElementById("wrap").innerHTML=document.getElementById("wrap").innerHTML+"<div class='card'><img src='images/"+i+".png' class='thimg' onclick='show("+i+")'></div>"
}

function show(image) {
if (vv) {
	document.getElementById('viewer').style.top = "-100%";
	vv = false;
}
else {document.getElementById('viewer').style.top = "0%";
//		document.getElementById('viewer').innerHTML = "<button id='prev' onclick='prev()'></button><button id='next' onclick='next()'></button><button id='close' onclick='show()'>X</button><div class='image'><img src='images/"+image+".png' class='image'></div>"
		document.getElementById('pic').style.background = "url(images/"+image+".png) no-repeat center center";
		vv = true;
	k=image;
}
}
function next(){
	if(k-1>=0){
		k=k-1;
//		document.getElementById('viewer').innerHTML = "<button id='prev' onclick='prev()'></button><button id='next' onclick='next()'></button><button id='close' onclick='show()'>X</button><div class='image'><img src='images/"+k+".png' class='image'></div>"
		document.getElementById('pic').style.background = "url(images/"+k+".png) no-repeat center center";
	} 
}
function prev(){
	if(k+1<amount){
		k=k+1
//	document.getElementById('viewer').innerHTML = "<button id='prev' onclick='prev()'></button><button id='next' onclick='next()'></button><button id='close' onclick='show()'>X</button><div class='image'><img src='images/"+k+".png' class='image'></div>"
	document.getElementById('pic').style.background = "url(images/"+k+".png) no-repeat center center";
	}
}
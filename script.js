//your JS code here. If required.
	// let body = document.getElementByTagName('body');
	let button = document.getElementById('enterBtn');
	let para = document.getElementByTagName('p');
    button.addEventListner("click",function() {
	let h1Tag = body.createElement("h1");
	let h1Tag.id = "status"
	// let bold = h1Tag.createElement("b");
	h1Tag.innerText= "Entered Metaverse"
	// let body = document.getElementByTagName('body');
		// let para = document.getElementByTagName('p');
	// body.appendChild('h1Tag');
document.body.insertBefore(h1Tag,para);
	para.remove('para');
	
})
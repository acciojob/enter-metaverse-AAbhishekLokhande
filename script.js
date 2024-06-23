//your JS code here. If required.
	let button = document.getElementById('enterBtn');
	let para = document.getElementById('status');
    button.addEventListner("click", () => {
	let h1Tag = body.createElement("h1");
	let h1Tag.innerText= "Entered Metaverse"
	let h1Tag.id = "status"
	
document.body.insertBefore(h1Tag , para);
	para.remove('para');
	 
})
var button = document.getElementById("button-addon2");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var del = document.getElementsByClassName("close");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("✔️"));
	button.classList.add("close");
	li.appendChild(button);
	button.onclick=underlineParent;

	var button = document.createElement("button"); 
	button.appendChild(document.createTextNode("🗑️"));
	button.classList.add("close");
	li.appendChild(button);

	button.onclick=removeParent;
}

function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}


function removeParent(evt){
	evt.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
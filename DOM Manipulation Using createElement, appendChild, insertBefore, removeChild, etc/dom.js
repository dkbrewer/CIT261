function remove() {
    var parent = document.getElementById("ulList");
    
    if (parent.hasChildNodes()) {
        parent.removeChild(parent.childNodes[0]);
    }
}

function append() {
    var newli = document.createElement("li");
	newli.style.background = "darkorange";
    var newItem = document.createTextNode("New List Item!");
    newli.appendChild(newItem);
    document.getElementById("ulList").appendChild(newli);
}

function before() {
	var newP = document.createElement("p");
    var text = document.createTextNode("New Paragraph!");
	newP.className = "before";
    newP.appendChild(text);

    var para = document.getElementById("div1");
    para.insertBefore(newP, para.childNodes[0]);
}

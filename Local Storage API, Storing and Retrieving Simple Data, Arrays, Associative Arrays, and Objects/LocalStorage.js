function store(){

    // Simple Data
    localStorage.setItem("name", "Barry");

    // Array
    localStorage.setItem("array", JSON.stringify([5, 6, 10, 50]));

    // Associative Array
    localStorage.setItem("associativeArray", JSON.stringify({ "id": 1, "name": "Barry", "age": 26 }));

    // Object
    var myObject = { 'id': 1, 'name': "Barry", 'age': 26 };
    localStorage.setItem('myObject', JSON.stringify(myObject));
    var retrievedObject = localStorage.getItem('myObject');
}

function retrive() {

    console.log("name: ", localStorage.getItem("name"));

    console.log("array: ", localStorage.getItem("array"));

    console.log("associativeArray: ", JSON.parse(localStorage.getItem("associativeArray")));

    console.log('myObject: ', JSON.parse(localStorage.getItem('myObject')));
	
    document.getElementById("message").innerHTML = "Check the console to see the data."
}

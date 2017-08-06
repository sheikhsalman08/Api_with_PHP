var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById('btn')


btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	// ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
	ourRequest.open('GET','http://localhost:8000/api/api.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData[1].id);
		renderHTML(ourData[1].name);
		renderHTML(ourData[1].email);
	};
	ourRequest.send();
	
});

function renderHTML(data){
	animalContainer.insertAdjacentHTML('beforeend',data);
}

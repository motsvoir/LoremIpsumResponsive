var oldTexte;
var element;
var article;
var init=true;
var canvasLateral;
var y = 0;


function setup(){ // dimensionner aussi l'article en hauteur
	canvasLateral = createCanvas(windowWidth/4-10,windowHeight-160);
	canvasLateral.parent("canvasAnim");
	background(255,217,204);
	frameRate(15);
	initialiser();
	article = document.getElementById ("article");
	article.style.height = (windowHeight-170)+"px";
}

function draw(){
	background (255,217,204);
	rect(50,y,50,50);
	y++;
}
function windowResized(){
	resizeCanvas(windowWidth/4-10,windowHeight-160);
	article.style.height = (windowHeight-170)+"px";
}
function initialiser(){
	element = document.getElementById("textInit");
	//oldTexte = element.textContent||element.innerText||"erreur";
	oldTexte = element.innerHTML;
}
function generer(){ // appellé par bouton générer
	if (init){
		element.innerHTML = "Je ne suis pas un lorem ipsum";		
	} else {
		element.innerHTML = oldTexte;
	}
	init=!init;
}
var dog, happyDog;
var database;
var foodS,foodStock;
function preload()
{
 dog=loadImage("dogImg.png");
 happyDog=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250);
  dog.addImage('dog', dog);
  foodStock=database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  
  text("Press UP_ARROW to feed the dog", 250, 20);
  if(Key_Down(UP_ARROW)){
    writeStocks(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS-data.val;
}

function writeStocks(x){
  database.ref('/').update({
    food:x
  })
}



//changed variable to constant
const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Constraint= Matter.Constraint;
 
var particles = [];
var plinkos = [];
// divisions error was coming since divisions was not declared
//Also declared divisions, Particle, Plinko.js files in index.html
var divisions = [];

var divisionHeight=300;
var particle;
var count=0;
var gameState="start";
var score =0;
var mousereleased=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375));
    }
   Engine.run(engine);
}
 


function draw() {
  background("black");
  Engine.update(engine);
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,525);
  text("300",100,525);
  text("200",180,525);
  text("100",260,525);
  text("400",340,525);
  text("500",420,525);
  text("300",500,525);
  text("200",580,525);
  text("100",660,525);
  text("400",740,525);

  if (count > 5) {
    gameState="end";
    textSize(50);
    fill ("red")
    text("GAME OVER!!!",250,230);
    mousereleased=0;
  }

   for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
   }
  
   // if(frameCount%60===0){
     //changed new particle to new Particle with higher case letter P
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
  // }
 
 // for (var j = 0; j < particles.length; j++) {
 //  particles[j].display();
 //   }
 
if (gameState!="end" && mousereleased === 1) {
 
 if(particle!=null)
 {
    particle.display();
    if (particle.body.position.y>700)
    {
         //console.log ("x pos: " + particle.body.position.x);
         if (particle.body.position.x > 10 && particle.body.position.x < 60 ){
         score=score+500;
         particle=null;
         if ( count> 5) gameState ="end";   
         }
        else if (particle.body.position.x > 94 && particle.body.position.x < 130) {
          score=score+300;
          particle=null;
          if ( count> 5) gameState ="end";   
         }
         else if (particle.body.position.x > 174 && particle.body.position.x < 225) {
          score=score+200;
          particle=null;
          if ( count> 5) gameState ="end";   
         }
         else if (particle.body.position.x > 254 && particle.body.position.x < 305) {
          score=score+100;
          particle=null;
          if ( count> 5) gameState ="end";   
         }
         else if (particle.body.position.x > 334 && particle.body.position.x < 385) {
          score=score+400;
          particle=null;
          if ( count> 5) gameState ="end";   
         }
         else if (particle.body.position.x > 430 && particle.body.position.x < 465) {
          score=score+500;
          particle=null;
          if ( count> 5) gameState ="end";   
         }
         else if (particle.body.position.x > 504 && particle.body.position.x < 545) {
          score=score+300;
          particle=null;
          if ( count> 5) gameState ="end";   
         }
         else if (particle.body.position.x > 584 && particle.body.position.x < 625) {
          score=score+200;
          particle=null;
          if ( count> 5) gameState ="end";   
         }
         else if (particle.body.position.x > 664 && particle.body.position.x < 705) {
          score=score+100;
          particle=null;
          if ( count> 5) gameState ="end";   
         }
         else if (particle.body.position.x > 744 && particle.body.position.x < 785) {
          score=score+400;
          particle=null;
          if ( count> 5) gameState ="end";   
         }
    }
       
    }
 }
  
 for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  ground.display(600,600,10,10);
  drawSprites();
  }

function mouseReleased (){
  mousereleased=1;
  if(gameState!=="end")
  {
    particle= new Particle(mouseX,10,10,10);
    count=count+1;
  }
 
}
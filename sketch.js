var cloud
var trex ,trex_running;
var ground , groundImage
var invisibleground
var cloudImage
var ob1,ob2,ob3,ob4,ob5,ob6
var gamestate="play"
var og,cg
var gameOverImage,restartImage
var rs,gs
var score=0

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage= loadImage("ground2.png")
cloudimage=loadImage("cloud.png")
  ob1=loadImage("obstacle1.png")
  ob2=loadImage("obstacle2.png")
  ob3=loadImage("obstacle3.png")
  ob4=loadImage("obstacle4.png")
  ob5=loadImage("obstacle5.png")
  ob6=loadImage("obstacle6.png")
  gameOverImage=loadImage("gameOver.png")
  restartImage=loadImage("restart.png")
}

function setup(){
  createCanvas(600,200)
  trex = createSprite(30,150,1,1)
  trex.addAnimation ("trex dor rha hai",trex_running)
  trex.scale = 0.5
  ground = createSprite(300,180,600,10)
  ground.addImage("ground kuch nhi kr rha",groundImage)
 invisibleground=createSprite(300,190,600,5)
  invisibleground.visible=false
  console.log("Adesh ")
  og = createGroup();
  cg=createGroup();
  trex.setCollider("circle",0,0,50)
  trex.debug=false
  rs=createSprite(250,100)
  gs=createSprite(250,40)
   gs.addImage(gameOverImage)
  rs.addImage(restartImage)
}

function draw(){
  background("black")
  text("score"+score,500,20)
  if(gamestate=="play")
  {
    score=score=+1
    rs.visible=false
    gs.visible=false
     ground.velocityX=-7
if(keyDown("space")&&trex.y>120){
  trex.velocityY=-12
}
  if(ground.x<0)
{
  ground.x=300
}
    Acloud();
    Pobstacle()
    
trex.velocityY=trex.velocityY+1   
if(trex.isTouching(og)) 
  {
    gamestate="end"
  }
  } 
 if(gamestate=="end")
   {
ground.velocityX=0
og.setVelocityXEach(0)
     cg.setVelocityXEach(0)
  og.setLifetimeEach(-1)
     cg.setLifetimeEach(-1)
     rs.visible=true
     gs.visible=true
     if(mousePressedOver(rs))
       {
      gamestate="play"
         og.destroyEach()
         cg.destroyEach()
         
       }
}
  trex.collide(invisibleground)
  drawSprites()
}
function Acloud()
{
if(frameCount%60==0)  
{
  

cloud=createSprite(550,20,10,10)
  cloud.addImage(cloudimage)
  cloud.velocityX=-5
  cg.add(cloud)
}

  }
function Pobstacle() 
{
  if(frameCount%60==0)
    {
      
    
  ob=createSprite(550,160,10,10)
  ob.velocityX=-9
  var A=Math.round(random(1,6))
  switch(A)
{
  case 1:ob.addImage(ob1)
  break
  case 2:ob.addImage(ob2)
  break
  case 3:ob.addImage(ob3)
    break
    case 4:ob.addImage(ob4)
    break
    case 5:ob.addImage(ob5)
    break
    case 6:ob.addImage(ob6)
                    
}
  ob.lifetime=210
 ob.scale=0.5 
 og.add(ob)
    }
      
      
} 
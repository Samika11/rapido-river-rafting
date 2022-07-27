var ground, ground_image;
var beach, beach_image,rulebg,loadingbg;
var jake, jake_animation;
var logo,logo_img;
var playButton,playButton_img
var friends, cubby, izzy, friendsgroup;
var treasure, treasuregroup, box1;
var money, moneygroup, rupees;
var jewellery, jewellerygroup, box2;
var bomb, bombgroup, blast;
var missile, missilegroup, miss;
var raft1,raft1_img,raft2,raft2_img,raft3,raft3_img,raft4,raft4_img,raft5,raft5_img,raft6,raft6_img;
var loading,loading_img;
var loadingRaft,loadingRaft_img;
var gameState = "splash screen";
var score = 0;
var blastsound, win, checkPoint;
var gameover, gameoverImg, Restart, RestartImg;
var a=0,timer=0;
var rulesbg,nextbutton,storyBg,story,storyimg;
var easyButton,hardButton,raftsprite,raftspriteImg,raftbg;
var scoreboard,scoreboardImg,gamewin,gamewinImg;
var jumpImg,deadImg,gamelevel,thememusic,rulesImg;

function preload() {

  //ground_image
  ground_image = loadImage("splash_3.png");
  rulebg = loadImage("rules screen.jpg");
  loadingbg = loadImage("loading screen.jpg");
  nextbuttonimg =loadImage("next button.gif");
  storyBg =loadImage("story screen.jpg")
  easyButtonimg=loadImage("easybutton.png")
  hardButtonimg=loadImage("hardbutton.png")
  raftbg=loadImage("raftbg.gif")
  scoreboardImg=loadImage("scoreboard.png")
  gamewinImg=loadImage("gamewin.png")
  jumpImg=loadImage("templerun/Jump__000.png","templerun/Jump__001.png","templerun/Jump__002.png","templerun/Jump__003.png","templerun/Jump__043.png","templerun/Jump__005.png","templerun/Jump__006.png","templerun/Jump__007.png","templerun/Jump__008.png");
  deadImg=loadImage("templerun/Dead__000.png","templerun/Dead__001.png","templerun/Dead__002.png","templerun/Dead__003.png","templerun/Dead__004.png","templerun/Dead__005.png","templerun/Dead__006.png","templerun/Dead__007.png","templerun/Dead__008.png","templerun/Dead__009.png");
  storyimg=loadImage("storybg.png")
  rulesImg=loadImage("rules.png")

  //logo 
  logo_img = loadImage("logo.png");
  
  //play button 
  playButton_img =loadImage("play button.gif")

  //loading image
  loading_img= loadImage("loading.gif")  

  //loading Raft
  loadingRaft_img= loadImage("loading-raft.gif")

  //beach_image
  beach_image = loadImage("beach.png");

  //jake_aniamtion
  jake_animation = loadAnimation("templerun/Idle__000.png","templerun/Idle__001.png","templerun/Idle__002.png","templerun/Idle__003.png");

  //cubby
  cubby = loadImage("octopus.gif");

  //Izzy
  izzy = loadImage("urchin.gif");

  //box1
  box1 = loadImage("perl.png");

  //rupees
  rupees = loadImage("coin.png");

  //box2
  box2 = loadImage("ruby2.png");

  //blast
  blast = loadImage("enemy4.gif");

  //miss
  miss = loadImage("shark.gif");

  //blastsound
  blastsound = loadSound("Bombblast.mp3");

  //win
  win = loadSound("Winning.mp3");

  //checkPoint
  checkPoint = loadSound("checkPoint.mp3");

  thememusic = loadSound("thememusic.mp3");


  //gameOver_image
  gameOver_image = loadImage("gameOver.png");

  //Restart_image
  Restart_image = loadImage("Restartbutton.png");
  raftspriteImg = loadImage("raft1.gif");

}

function setup() {

  createCanvas(windowWidth,windowHeight);

  
  //logo
  logo= createSprite(width/2,150,70,0);
  logo.addImage("logo",logo_img)
  logo.scale = 0.6
  
  nextbutton= createSprite(width-100,height-100,70,0);
  nextbutton.addImage(nextbuttonimg);
  nextbutton.scale=0.3
  nextbutton.visible = false;

  nextbutton1= createSprite(width-200,200,70,0);
  nextbutton1.addImage(nextbuttonimg);
  nextbutton1.scale=0.3
  nextbutton1.visible = false;

  //loading
  loading=createSprite(width/2,height/2)
  loading.addImage("loading",loading_img)
  loading.visible = false;

  //story
  story=createSprite(width/2,height/2)
  story.visible=false
 

  //loading
  loading = createSprite(750,570);
  loading.addAnimation("loading",loading_img);
  loading.visible=false;

  //loading raft
  loadingRaft= createSprite(width/2,height/2)
  loadingRaft.addAnimation("loadingRaft",loadingRaft_img)
  loadingRaft.visible=false;

  //buttons for levels
  easyButton=createSprite(width/2 -200,height/2 +200)
  easyButton.addImage(easyButtonimg)
  easyButton.scale=0.2
  easyButton.visible=false

  hardButton=createSprite(width/2 +200,height/2 +200)
  hardButton.addImage(hardButtonimg)
  hardButton.scale=0.2
  hardButton.visible=false


  //playButton
  playButton=createSprite(width/2,550);
  playButton.addImage(playButton_img)
  playButton.scale=0.6
  
  //gameOver
  gameOver = createSprite(width/2, height/2);
  gameOver.addImage("gameOver", gameOver_image);
  gameOver.scale = 0.25;
  gameOver.visible = false;
  gameOver.setCollider("circle",-40,170,130);

   //gamewin
   gamewin = createSprite(width/2, height/2);
   gamewin.addImage("gamewin", gamewinImg);
   gamewin.scale = 0.25;
   gamewin.visible = false;
   gamewin.setCollider("circle",-70,500,150);

  raftsprite = createSprite(300, height-150);
  raftsprite.addImage(raftspriteImg);
  raftsprite.scale = 0.85;
  raftsprite.visible = false;
  raftsprite.setCollider("rectangle",0,120,raftsprite.width-100,80);

   //jake
   jake = createSprite(280,height-185,0,0);
   jake.addAnimation("jake", jake_animation);
   jake.addAnimation("jump", jumpImg);
   jake.addAnimation("dead", deadImg);

   jake.visible = false;
   jake.scale = 0.4;
   jake.setCollider("rectangle",0,0,jake.width-100,jake.height-10);

   scoreboard = createSprite(100,60);
   scoreboard.addImage(scoreboardImg);
   scoreboard.scale = 0.08;
   scoreboard.visible = false;

   story = createSprite(width/2,height/2+30);
   story.addImage(storyimg);
   story.scale = 0.4;
   story.visible = false;

   rules = createSprite(width/2,height/2-100);
   rules.addImage(rulesImg);
   rules.scale = 0.25;
   rules.visible = false;

  treasuregroup = new Group();
  friendsgroup = new Group();
  moneygroup = new Group();
  jewellerygroup = new Group();
  bombgroup = new Group();
  missilegroup = new Group();

}

function draw() {

  

  if (gameState === "splash screen") {
  background(ground_image)

  if (mousePressedOver(playButton) ){
    playButton.visible=false;
    logo.visible=false;
    gameState = "story screen";
    thememusic.play();
    thememusic.setVolume(0.1);
  }
  }
  else if  (gameState === "story screen") {
    background(storyBg);
    story.visible=true;
    nextbutton.visible = true;
    if (mousePressedOver(nextbutton) ){
      nextbutton.visible=false;
      gameState = "rules screen";
    }

  }

  else if  (gameState === "rules screen") {
    background(rulebg);
    story.visible = false;
    easyButton.visible=true;
    hardButton.visible=true;
    rules.visible = true;
    if (mousePressedOver(easyButton) ){
      easyButton.visible=false;
      hardButton.visible=false;
      rules.visible = false;
      gameState = "loading screen";
      gamelevel="easy";
    }
    if (mousePressedOver(hardButton) ){
      easyButton.visible=false;
      hardButton.visible=false;
      rules.visible = false;
      gameState = "loading screen";
      gamelevel="hard";
    }
  }

  else if  (gameState === "loading screen") {
    timer++;
    background(loadingbg);
    loading.visible = true;
    loadingRaft.visible = true;
    if(timer===200)
    {
      if(gamelevel==="easy")
      {
        gameState = "play";
        
      }
      else if(gamelevel==="hard")
      {
        gameState = "level2";
       
      }
    }

  }

  else if  (gameState === "play") {
    background(raftbg);
    loading.visible = false;
    loadingRaft.visible = false;
    jake.visible = true;
    scoreboard.visible = true;
    raftsprite.visible = true;

    if (jake.isTouching(treasuregroup)) {
      a=0;
      score = score + 1;
      treasuregroup.setLifetimeEach(0);
      win.play();
    }

    if (jake.isTouching(moneygroup)) {
      a=0;
      score = score + 5;
      moneygroup.setLifetimeEach(0);
      win.play();
    }


    if (jake.isTouching(bombgroup)) {
      a=0;
      bombgroup.setLifetimeEach(0);
      gameState = "end";
      blastsound.play();
    }

    if (jake.isTouching(missilegroup)) {
      a=0;
      missilegroup.setLifetimeEach(0);
      gameState = "end";
      blastsound.play();
    }

    if (a===0 && score != 0 && score % 10 === 0){
      checkPoint.play();
      a=1;
    }
    

    if (frameCount % 250 === 0) {

      var rand = Math.round(random(1, 2));


      if (rand == 1) {
        spawnBomb();
      } else if (rand == 2) {
        spawnMissile();
      } 
    }
    if (frameCount % 200 === 0) {
    var rand = Math.round(random(1, 2));

    if (rand == 1) {
      spawnMoney();
    } 
      else if (rand == 2) {
      spawnTreasure();
    } 
      
  }
  if(score>=10)
  {
    gameState = "win";
  }
  }

  else if  (gameState === "level2") {
    background(raftbg);
    loading.visible = false;
    loadingRaft.visible = false;
    jake.visible = true;
    scoreboard.visible = true;
    raftsprite.visible = true;

    if (jake.isTouching(treasuregroup)) {
      a=0;
      score = score + 1;
      treasuregroup.setLifetimeEach(0);
      win.play();
    }

    if (jake.isTouching(moneygroup)) {
      a=0;
      score = score + 2;
      moneygroup.setLifetimeEach(0);
      win.play();
    }

    if (jake.isTouching(jewellerygroup)) {
      a=0;
      score = score + 5;
      jewellerygroup.setLifetimeEach(0);
      win.play();
    }

    if (jake.isTouching(friendsgroup)) {
      a=0;
      friendsgroup.setLifetimeEach(0);
      gameState = "end";
      blastsound.play();
    }

    if (jake.isTouching(bombgroup)) {
      a=0;
      bombgroup.setLifetimeEach(0);
      gameState = "end";
      blastsound.play();
    }

    if (jake.isTouching(missilegroup)) {
      a=0;
      missilegroup.setLifetimeEach(0);
      gameState = "end";
      blastsound.play();
    }

    if (a===0 && score != 0 && score % 10 === 0){
      checkPoint.play();
      a=1;
    }
    

    if (frameCount % 200 === 0) {

      var rand = Math.round(random(1, 3));


      if (rand == 1) {
        spawnBomb();
      } else if (rand == 2) {
        spawnMissile();
      } else if (rand == 3) {
        spawnFriends();
      }
    }
    if (frameCount % 60 === 0) {
    var rand = Math.round(random(1, 3));

    if (rand == 1) {
      spawnMoney();
    } 
      else if (rand == 2) {
      spawnTreasure();
    } 
      else if (rand == 3) {
      spawnJewellery();
    }
  }
  if(score>=10)
  {
    gameState = "win";
  }
  }

  if (gameState === "end") {
    background(raftbg);

    gameOver.visible = true;
    jake.changeAnimation("dead", deadImg);

    treasuregroup.setVelocityXEach(0);
    treasuregroup.setLifetimeEach(-1);

    friendsgroup.setVelocityXEach(0);
    friendsgroup.setLifetimeEach(-1);

    moneygroup.setVelocityXEach(0);
    moneygroup.setLifetimeEach(-1);

    jewellerygroup.setVelocityXEach(0);
    jewellerygroup.setLifetimeEach(-1);

    bombgroup.setVelocityXEach(0);
    bombgroup.setLifetimeEach(-1);

    missilegroup.setVelocityXEach(0);
    missilegroup.setLifetimeEach(-1);
  }

  if (gameState === "win") {
    background(raftbg);

    gamewin.visible = true;

    treasuregroup.setVelocityXEach(0);
    treasuregroup.setLifetimeEach(-1);

    friendsgroup.setVelocityXEach(0);
    friendsgroup.setLifetimeEach(-1);

    moneygroup.setVelocityXEach(0);
    moneygroup.setLifetimeEach(-1);

    jewellerygroup.setVelocityXEach(0);
    jewellerygroup.setLifetimeEach(-1);

    bombgroup.setVelocityXEach(0);
    bombgroup.setLifetimeEach(-1);

    missilegroup.setVelocityXEach(0);
    missilegroup.setLifetimeEach(-1);
  }

  if (mousePressedOver(gameOver)) {
    reset();
  }


  if(keyDown("space"))
  {
    jake.velocityY = -10;
    jake.changeAnimation("jump", jumpImg);

  }
  jake.velocityY = jake.velocityY +1;
  jake.collide(raftsprite);
  if(keyDown("right_arrow"))
  {
    jake.x = jake.x+2;
    raftsprite.x = raftsprite.x +2;
  }
  if(keyDown("left_arrow"))
  {
    jake.x = jake.x-2;
    raftsprite.x = raftsprite.x-2;
  }
  if(jake.isTouching(raftsprite)) {
  jake.changeAnimation("jake", jake_animation);
  }
  drawSprites();
  if(gameState==="play"||gameState==="level2"){
  fill("white");
  textSize(35);
  textFont("Georgia");
  text(score, 90, 70);
  }
}

function spawnTreasure() {
  //treasure
  treasure = createSprite(width, random(height-60, height-150), 10, 10);
  treasure.addImage("box", box1);
  treasure.velocityX = -4;
  treasure.scale = 0.15;
  treasure.lifetime = width/4;
  treasuregroup.add(treasure);
}

function spawnFriends() {
  //friends
  friends = createSprite(width+50, random(60, 340), 10, 10);
  friends.velocityX = -4;
  friends.lifetime = width/4;
  friendsgroup.add(friends);

  //rand
  var rand = Math.round(random(1, 2));

  switch (rand) {
    case 1:
      friends.addImage("cubby", cubby);
      friends.scale = 0.3;
      break;

    case 2:
      friends.addImage("Izzy", izzy);
      friends.scale = 0.2;
      break;
  }
}

function spawnMoney() {
  //money
  money = createSprite(width+20, random(60, 340), 10, 10);
  money.addImage(rupees);
  money.scale = 0.1;
  money.velocityX = -4;
  money.lifetime = width/4;
  moneygroup.add(money);
}

function spawnJewellery() {
  //jewellery
  jewellery = createSprite(width, random(60, 340), 10, 10);
  jewellery.addImage(box2);
  jewellery.scale = 0.1;
  jewellery.velocityX = -4;
  jewellery.lifetime = width/4;
  jewellerygroup.add(jewellery);
}

function spawnBomb() {
  //bomb
  bomb = createSprite(width+30, random(60, height/2), 10, 10);
  bomb.addImage(blast);
  bomb.scale = 0.3;
  bomb.velocityX = -4;
  bomb.lifetime = width/4;
  bombgroup.add(bomb);
}

function spawnMissile() {
  //missile
  missile = createSprite(width+20, random(height-60, height-150), 10, 10);
  missile.addImage(miss);
  missile.scale = 0.3;
  missile.velocityX = -4;
  missile.lifetime = width/4;
  
  missilegroup.add(missile);
}

function reset() {
  score = 0;
  gameState = "play";
  jake.changeAnimation("jake", jake_animation);
  treasuregroup.destroyEach();
  friendsgroup.destroyEach();
  moneygroup.destroyEach();
  jewellerygroup.destroyEach();
  bombgroup.destroyEach();
  missilegroup.destroyEach();

  gameOver.visible = false;
  gamewin.visible = false;

}


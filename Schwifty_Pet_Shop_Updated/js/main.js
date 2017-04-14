window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/v2.6.2/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 1000, 600, Phaser.AUTO, 'game', false, false, false);
    
    var background, animatedcat, animecat, animdog, animpig, animfox, animredpanda, animpanda, animham, animturtle, animbunny; 
    var cageArray, cagetopleft, cagetopmiddle, cagetopright, cagemiddleleft, cagemiddlemiddle, cagemiddleright, cagebottomleft, cagebottommiddle, cagebottomright; 
    var chibiArray, chibi1, chibi2, chibi3, chibi4, chibi5, chibi6, chibi7, chibi8, chibi9, chibi10; 
    var animalArray, bubble, cat, dog, pig, hamster, turtle, fox, redpanda, panda, bunny; 
    var gameTimer, charTimer, animalTimer;
    var lives, life, heart, angry, helpText, startText, speech, speech2; 
    var countLives = 0; 
    var money = 0; 
    var chibiRandom, cageRandom, animalRandom;
    var tlTimer = 0;
    var tmTimer = 1;
    var trTimer = 2;
    var mlTimer = 3; 
    var mmTimer = 4; 
    var mrTimer = 5;
    var blTimer = 6; 
    var bmTimer = 7; 
    var brTimer = 8;
    var loseText, messageTimer, finText, winText;
    var message = false; 
    var cageTimerArray;
    var booleanArray;
    var cageHandling = game.rnd.integerInRange(200, 1000); 
    var start = true; 
    var notRandom = false; 
    var checking = false; 
    var correct = true;
    var prevent = false; 
    var gameActive = true; 
    var moneyImg, moneyText; 
	var topleft, topmiddle, topright, middlemiddle, middleright, middleleft, bottomleft, bottommiddle, bottomright; 
	var top7left, top8middle, top9right, middle5middle, middle6right, middle4left, bottom1left, bottom2middle, bottom3right;  
	var bgAudio;
	var entranceAudio; 
	var audioActive; 
	var open = true; 
	var cont = false; 
	var next = false; 
	var justStarted = false; 
	var message1 = false; 
	var message2 = false; 
	var tutorial = true; 
	var correctKey = false; 
	var startGame = true; 
	var think1, think2; 
    function createChar()
    {
    	heart.alpha = 0; 
    	angry.alpha = 0; 
    	chibiRandom.alpha = 0; 
    	animalRandom.alpha = 0; 
		chibiRandom = Phaser.ArrayUtils.getRandomItem(chibiArray); 
		entranceAudio.play();		
		chibiRandom.alpha = 1; 
		bubble.alpha = 1; 
		animalTimer = game.time.now + 4000; 
		charTimer = game.time.now + 10000;
		prevent = false; 
	}
	function createAnimal()
	{
		heart.alpha = 0; 
		angry.alpha = 0; 
    	animalRandom.alpha = 0; 
		animalRandom = Phaser.ArrayUtils.getRandomItem(animalArray); 
		animalRandom.alpha = 1; 
		if(start == true)
		{
			notRandom = false; 
			openCage();
			cageHandling += game.time.now; 
			start = false; 
		}
		animalTimer = game.time.now + 6000; 
		//console.log(animalArray.indexOf(animalRandom)); 
		
	}
	
	function fadeOut()
	{
		if(tutorial == true)
		{
			helpText.alpha = 0; 
			speech2.alpha = 0; 
			cageArray[0].alpha = 1; 
			money = 50; 
			moneyText.text = ": " + money.toString(); 
			helpText.fontSize = 20; 
			helpText.text = "<---- YOU'VE GAINED MONEY! "
			helpText.x = 180; 
			helpText.y = 40; 
			helpText.alpha = 1; 
			animalArray[0].alpha = 0; 
			heart.alpha = 1; 
			next = false; 
			game.time.events.add(Phaser.Timer.SECOND * 3, displayMessage); 
			game.time.events.add(Phaser.Timer.SECOND * 6, startThisGame); 
		}

		
	}
	function displayMessage()
	{
		if(tutorial == true)
		{
			startText.alpha = 1; 
		}
			
			
	}
	function startThisGame()
	{
		if(tutorial == true)
		{
			heart.alpha = 0;
			money = 0; 
			helpText.alpha = 0; 
			moneyText.text = ": " + money.toString(); 
			tutorial = false; 
			justStarted = true; 
		}
		
 
	}
	
	function openCage()
	{
		//true is open false is closed
		//set the state, timer, and visual of corresp. cage
		if(tutorial == true && open == true || tutorial == true && cont == true)
		{
			if(cont == true)
			{
				animalArray[0].alpha = 1; 
				cageArray[0].alpha = 0; 
				speech.alpha = 0; 
				speech2.alpha = .8; 
				helpText.text = "DON'T SHUT    >\n OR YOU LOSE >\n A CUSTIE    >";
				helpText.x = 15; 
				helpText.y = 130; 
				helpText.alpha = 1; 
				cont = false;
				next = true; 
			}
			else if(open == true)
			{
				cageArray[2].alpha = 0; 
				helpText.alpha = 1; 				
			}

		}
		else
		{
			var cageIndex; 
			if(notRandom == true) 
			{
				cageIndex = animalArray.indexOf(animalRandom); 
				prevent = true; 
			}
			else
			{
				cageIndex = Math.floor((Math.random() * 9));
			}
			if(booleanArray[cageIndex] == false && cageArray[cageIndex].alpha == 1)
			{
				cageArray[cageIndex].alpha = 0; 	
				cageTimerArray[cageIndex] = game.time.now + 3000;				
				booleanArray[cageIndex] = true; 	
			}				
		}

		
		//the door is open, the game knows the door is open, there is a 1.5s timer
	}
	function closeCage(location)
	{
		if(tutorial == true)
		{
			if(correctKey == true)
			{
				cageArray[2].alpha = 1; 
				helpText.alpha = 0; 
				cont = true;				
			}
 
		}
		else
		{
			if(checking == true)
			{
				checkGameState(location); 
				location.alpha = 1; 
				var tempCageIndex = cageArray.indexOf(location); 
				cageTimerArray[tempCageIndex] = -5; 
				booleanArray[tempCageIndex] = false;	
				checking = false; 
			}
			else
			{
				location.alpha = 1; 
				var tempCageIndex = cageArray.indexOf(location); 
				cageTimerArray[tempCageIndex] = -5; 
				booleanArray[tempCageIndex] = false;
				checkGameState(location); 			
			}			
		}

	}
    
	function checkGameState(location)
	{
		if(countLives < 3)
		{
			var tCageIndex = cageArray.indexOf(location); 
			console.log(tCageIndex); 
			console.log("boolean" + booleanArray[tCageIndex]); 
	
			if(animalRandom.alpha == 1 && gameActive == true)
			{
				if(tCageIndex == animalArray.indexOf(animalRandom) && booleanArray[tCageIndex] == true)
				{
					animalRandom.alpha = 0; 
					heart.alpha = 1; 
					correct = true; 
					//console.log("correct1" + correct); 	
					money += 50; 
					moneyText.text = ": " + money.toString();
					moneyText.anchor.setTo(0.5, 0.5); 
					
					
	 
				}
				else if(tCageIndex == animalArray.indexOf(animalRandom) && booleanArray[tCageIndex] == false)
				{
					if(gameActive == true)
					{
						animalRandom.alpha = 0; 
						angry.alpha = 1; 
						correct = false; 
						//console.log("correct1" + correct); 			
						message1 = true;
						messageTimer = game.time.now + 1000; 
						message = true; 					
					}
	 
	 
				}			
				else if(tCageIndex != animalArray.indexOf(animalRandom) && booleanArray[tCageIndex] == false)
				{ 
					if(gameActive == true)
					{
						correct = true; 	
					}
			//console.log("correct2" + correct); 			
					
				}                                             
				else if(tCageIndex != animalArray.indexOf(animalRandom) && booleanArray[tCageIndex] == true)
				{
					if(gameActive == true)
					{
						correct = false; 
						message2 = true; 
						messageTimer = game.time.now + 1000; 										
						message = true; 					
					}				
				}
			}
			else if(animalRandom.alpha == 0 && gameActive == true)
			{
				if(booleanArray[tCageIndex] == false)
				{
					correct = true;
				}
				else if(booleanArray[tCageIndex] == true) 
				{
					if(gameActive == true)
					{
						correct = false; 
						message2 = true;
						messageTimer = game.time.now + 1000; 										
						money -= 20; 
						moneyText.text = ": " + money.toString();
						moneyText.anchor.setTo(0.5, 0.5); 
						message = true; 
					}
	
					
				}
			//console.log("correct3" + correct); 			
			}		
		console.log(correct); 
		console.log("boolean" + booleanArray[tCageIndex]); 			
		}



		
	}
	
	function updateAudio()
	{
		if(!bgAudio.isPlaying)
		{
			bgAudio.play(); 
		}
	}
	
    var BasicGame = function (game) {};
    BasicGame.Boot = function (game) {};
    BasicGame.Boot.prototype = 
    {
		preload: function () 
		{
			game.load.image('background', 'assets/background.png');
			
			
			//loading gif animals in cages
			game.load.spritesheet('animpig', 'assets/animpig.png', 91.3, 70); 
			game.load.spritesheet('animdog', 'assets/animedog.png', 105, 66); 
			game.load.spritesheet('animcat', 'assets/animcat.png', 111, 80); 
			game.load.spritesheet('animturtle', 'assets/animeturtle.png', 100, 100);
			game.load.spritesheet('animfox', 'assets/animfox.png', 83.7, 80);  
			game.load.spritesheet('animham', 'assets/animham.png', 59, 60); 
			game.load.spritesheet('animredpanda', 'assets/animredpanda.png', 84, 92); 
			game.load.spritesheet('animpanda', 'assets/animpanda.png', 90, 90); 
			game.load.spritesheet('animbunny', 'assets/animbunny.png', 50, 50);
			game.load.spritesheet('animatedcat', 'assets/animatedcat.png', 243, 123); 
			game.load.spritesheet('animecat', 'assets/animecat.png', 150, 150);
			
			//loading cage doors
			game.load.image('cagetop', 'assets/cagetop.png');
			game.load.image('cagemiddle', 'assets/cagemiddle.png');
			game.load.image('cagebottom', 'assets/cagebottom.png');
			
			
			//loading chibis
			game.load.image('chibi1', 'assets/chibi1.png'); 
			game.load.image('chibi2', 'assets/chibi2.png'); 
			game.load.image('chibi3', 'assets/chibi3.png'); 
			game.load.image('chibi4', 'assets/chibi4.png'); 
			game.load.image('chibi5', 'assets/chibi5.png'); 
			game.load.image('chibi6', 'assets/chibi6.png'); 
			game.load.image('chibi7', 'assets/chibi7.png'); 
			game.load.image('chibi8', 'assets/chibi8.png'); 
			game.load.image('chibi9', 'assets/chibi9.png'); 
			game.load.image('chibi10', 'assets/chibi10.png'); 
	
			//loading customer request & images
			game.load.image('bubble', 'assets/speechbubble.png');
			game.load.image('cat', 'assets/cat.png');
			game.load.image('dog', 'assets/dog.png');
			game.load.image('pig', 'assets/pig.png');
			game.load.image('hamster', 'assets/hamster.png');
			game.load.image('turtle', 'assets/turtle.png');
			game.load.image('fox', 'assets/fox.png');
			game.load.image('panda', 'assets/panda.png');
			game.load.image('redpanda', 'assets/redpanda.png');
			game.load.image('bunny', 'assets/bunny.png');
	   
			game.load.image('life', 'assets/life.png'); 
			game.load.image('moneyImg', 'assets/money.png'); 
			game.load.image('heart', 'assets/heart.png'); 
			game.load.image('angry', 'assets/angry.png'); 
			game.load.image('speech', 'assets/speech.png'); 
			game.load.image('speech2', 'assets/speech2.png'); 

			
			game.load.audio('bgAudio', ['assets/backgroundaudio.mp3', 'assets/backgroundaudio.ogg']);
			game.load.audio('entranceAudio', ['assets/entranceaudio.mp3', 'assets/entranceaudio.ogg']);
			game.load.audio('think1', ['assets/think1.mp3', 'assets/think1.ogg']);
			game.load.audio('think2', ['assets/think2.mp3', 'assets/think2.ogg']); 
		
		
		
		
		
		
		
		},
		
		
		create: function () 
		{
			
			bgAudio = game.add.audio('bgAudio');
			bgAudio.play();
			entranceAudio = game.add.audio('entranceAudio'); 
			game.physics.startSystem(Phaser.Physics.P2JS); 

			background = game.add.sprite(0, 0, 'background');
			
			//Loading the animal gifs that go behind the cages. 
			animpig = game.add.sprite(235, 108, 'animpig');
			animpig.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 8, true); 
			animpig.frame = 1; 
			animpig.animations.play('constant'); 
			
			animdog = game.add.sprite(235, 225, 'animdog');
			animdog.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, true); 
			animdog.frame = 1; 
			animdog.animations.play('constant');
			
			/*animturtle = game.add.sprite(235, 355, 'animturtle'); 
			animturtle.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 8, true); 
			animturtle.frame = 1; 
			animturtle.animations.play('constant');*/
			
			animturtle = game.add.sprite(235, 310, 'animturtle'); 
			animturtle.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8], 4, true); 
			animturtle.frame = 1; 
			animturtle.animations.play('constant');
			
			animfox = game.add.sprite(355, 333, 'animfox');
			animfox.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 18, true);
			animfox.frame = 1;
			animfox.animations.play('constant');
			
			animham = game.add.sprite(145, 125, 'animham');
			animham.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12, true);
			animham.frame = 1; 
			animham.animations.play('constant');
			
			animredpanda = game.add.sprite(357, 200, 'animredpanda');
			animredpanda.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8], 4, true);
			animredpanda.frame = 1; 
			animredpanda.animations.play('constant');
			
			animpanda = game.add.sprite(135, 325, 'animpanda');
			animpanda.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 8, true);
			animpanda.frame = 1; 
			animpanda.animations.play('constant');
	 
			animatedcat = game.add.sprite(340, 56, 'animatedcat'); 
			animatedcat.animations.add('constant', [1, 2, 3], 2, true); 
			animatedcat.frame = 1; 
			animatedcat.animations.play('constant'); 
			
			animbunny = game.add.sprite(145, 240, 'animbunny'); 
			animbunny.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 10, true); 
			animbunny.frame = 1; 
			animbunny.animations.play('constant'); 
			
			
			

			
			//attaching cages to variables
			cagetopleft = game.add.sprite(117, 100, 'cagetop');
			cagetopmiddle = game.add.sprite(229, 100, 'cagetop'); 
			cagetopright = game.add.sprite(344, 100, 'cagetop'); 
			cagemiddleleft = game.add.sprite(116, 215, 'cagemiddle'); 
			cagemiddlemiddle = game.add.sprite(228, 215, 'cagemiddle'); 
			cagemiddleright = game.add.sprite(343, 215, 'cagemiddle'); 
			cagebottomleft = game.add.sprite(118, 327, 'cagebottom'); 
			cagebottommiddle = game.add.sprite(230, 327, 'cagebottom'); 
			cagebottomright = game.add.sprite(347, 327, 'cagebottom'); 
	
			cageArray = [cagetopleft, cagetopmiddle, cagetopright, cagemiddleleft, cagemiddlemiddle, cagemiddleright, cagebottomleft, cagebottommiddle, cagebottomright];
			


			cageTimerArray = [-5, -5, -5, -5, -5, -5, -5, -5, -5];
			//updateTimer(); 
			

			
			booleanArray = [false, false, false, false, false, false, false, false, false]; 

			
			//creating chibis
			chibi1 = game.add.sprite(530, 120, 'chibi1'); 
			chibi2 = game.add.sprite(545, 120, 'chibi2'); 
			chibi3 = game.add.sprite(545, 120, 'chibi3');     	
			chibi4 = game.add.sprite(520, 140, 'chibi4'); 
			chibi5 = game.add.sprite(540, 145, 'chibi5'); 
			chibi6 = game.add.sprite(545, 145, 'chibi6'); 
			chibi7 = game.add.sprite(510, 120, 'chibi7'); 
			chibi8 = game.add.sprite(530, 165, 'chibi8'); 
			chibi9 = game.add.sprite(525, 145, 'chibi9'); 
			chibi10 = game.add.sprite(480, 120, 'chibi10');
			chibi1.alpha = 0; 
			chibi2.alpha = 0; 
			chibi3.alpha = 0; 
			chibi4.alpha = 0; 
			chibi5.alpha = 0; 
			chibi6.alpha = 0; 
			chibi7.alpha = 0; 
			chibi8.alpha = 0; 
			chibi9.alpha = 0; 
			chibi10.alpha = 0; 
	
			//display chibi
			chibiArray = [chibi1, chibi2, chibi3, chibi4, chibi5, chibi6, chibi7, chibi8, chibi9, chibi10];
			charTimer = 10000;
		    chibiRandom = Phaser.ArrayUtils.getRandomItem(chibiArray); 
		    chibiRandom.alpha = 1; 
		    entranceAudio.play();
					
			//creating requests
			bubble = game.add.sprite(407, 70, 'bubble'); 
			//bubble.alpha = 0; 
			cat = game.add.sprite(460, 110, 'cat'); 
			dog = game.add.sprite(455, 80, 'dog');
			hamster = game.add.sprite(475, 120, 'hamster'); 
			pig = game.add.sprite(470, 120, 'pig'); 
			bunny = game.add.sprite(467, 120, 'bunny'); 
			turtle = game.add.sprite(460, 125, 'turtle'); 
			fox = game.add.sprite(478, 110, 'fox'); 
			panda = game.add.sprite(475, 110, 'panda');
			redpanda = game.add.sprite(473, 110, 'redpanda');
			cat.alpha = 0; 
			dog.alpha = 0; 
			hamster.alpha = 0; 
			pig.alpha = 0;
			turtle.alpha = 0; 
			fox.alpha = 0; 
			panda.alpha = 0; 
			redpanda.alpha = 0; 
			bunny.alpha = 0;
			
			animalArray = [hamster, pig, cat, bunny, dog, redpanda, panda, turtle, fox];
		    animalRandom = Phaser.ArrayUtils.getRandomItem(animalArray); 
			animalTimer = 4000; 

			
			gameTimer = game.time.create(); 
			gameTimer.start(); 
			game.physics.startSystem(Phaser.Physics.ARCADE);     
		
		
			
			topleft = game.input.keyboard.addKey(Phaser.Keyboard.W); 
			topmiddle = game.input.keyboard.addKey(Phaser.Keyboard.E); 
			topright = game.input.keyboard.addKey(Phaser.Keyboard.R); 
			middleleft = game.input.keyboard.addKey(Phaser.Keyboard.S); 
			middlemiddle = game.input.keyboard.addKey(Phaser.Keyboard.D); 
			middleright = game.input.keyboard.addKey(Phaser.Keyboard.F); 
			bottomleft = game.input.keyboard.addKey(Phaser.Keyboard.X); 
			bottommiddle = game.input.keyboard.addKey(Phaser.Keyboard.C); 
			bottomright = game.input.keyboard.addKey(Phaser.Keyboard.V); 
			
			top7left = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_7);
			top8middle = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_8); 
			top9right = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_9); 
			middle4left = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_4); 
			middle5middle = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_5); 
			middle6right = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_6); 
			bottom1left = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1); 
			bottom2middle = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2); 
			bottom3right = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_3); 
			
			topleft.onDown.add(function() {closeCage(cagetopleft); checking = false;});
			topmiddle.onDown.add(function() {closeCage(cagetopmiddle); checking = false;});
			topright.onDown.add(function() {correctKey = true; closeCage(cagetopright);  checking = false;});
			middleleft.onDown.add(function() {closeCage(cagemiddleleft); checking = false;});
			middlemiddle.onDown.add(function() {closeCage(cagemiddlemiddle); checking = false;});
			middleright.onDown.add(function() {closeCage(cagemiddleright); checking = false;});
			bottomleft.onDown.add(function() {closeCage(cagebottomleft); checking = false;});
			bottommiddle.onDown.add(function() {closeCage(cagebottommiddle); checking = false;});
			bottomright.onDown.add(function() {closeCage(cagebottomright); checking = false;});

			top7left.onDown.add(function() {closeCage(cagetopleft); checking = false;});
			top8middle.onDown.add(function()  {closeCage(cagetopmiddle); checking = false;});
			top9right.onDown.add(function() {closeCage(cagetopright); checking = false;});
			middle4left.onDown.add(function() {closeCage(cagemiddleleft); checking = false;});
			middle5middle.onDown.add(function() {closeCage(cagemiddlemiddle); checking = false;});
			middle6right.onDown.add(function() {closeCage(cagemiddleright); checking = false;});
			bottom1left.onDown.add(function() {closeCage(cagebottomleft); checking = false;});
			bottom2middle.onDown.add(function() {closeCage(cagebottommiddle); checking = false;});
			bottom3right.onDown.add(function() {closeCage(cagebottomright); checking = false;});

			
			audioActive = setInterval(updateAudio, 144000); 
			
			lives = game.add.group();
			for(var i = 0; i < 3; i++)
			{
				lives.create(900, 0, 'life'); 
			}
			lives.children[0].x = 790; 
			lives.children[1].x = 845;
			countLives = 0; 
			var livesText = game.add.text(875, 0, "LIVES", { font: "25px Covered By Your Grace", fill: "#00000", align: "center"}); 
			
			
			moneyImg = game.add.sprite(25, 10, 'moneyImg');  
			moneyText = game.add.text((moneyImg.x + 110), (game.world.centerY - 245), ": " + money.toString(), { font: "30px Covered By Your Grace", fill: "#00000", align: "center"}); 
			moneyText.anchor.setTo(0.5, 0.5); 
			
			loseText = game.add.text(game.world.centerX, (game.world.centerY-240), "", { font: "30px Covered By Your Grace", fill: "#00000", align: "center"}); 
		
			heart = game.add.sprite(467, 128, 'heart'); 
			angry = game.add.sprite(465, 140, 'angry'); 			
			heart.alpha = 0;
			angry.alpha = 0; 
			
			
			
			finText = game.add.text(game.world.centerX, (game.world.centerY-240), "UH OH ! ! !  YOU'VE GONE OUT OF BUSINESS. . .", { font: "30px Covered By Your Grace", fill: "#00000", align: "center"}); 				
			finText.anchor.setTo(0.5, 0.5);
			finText.alpha = 0; 
 			
			winText = game.add.text(game.world.centerX, (game.world.centerY-240), "YATTA ! ! !  ALL ANIMALS HAVE HOMES.", { font: "30px Covered By Your Grace", fill: "#00000", align: "center"}); 
			winText.anchor.setTo(0.5, 0.5); 		
			winText.alpha = 0; 
			
			speech = game.add.sprite(240, 0, 'speech'); 
			speech.alpha = .5; 
			speech2 = game.add.sprite(-20, 80, 'speech2'); 
			speech2.alpha = 0; 			
			helpText = game.add.text((game.world.centerX - 200), (game.world.centerY-283), "SHUT THIS CAGE MEOW! ! \n BEFORE YOU LOSE A LIFE/MONEY! \n V V V ", { font: "15px Covered By Your Grace", fill: "#00000", align: "center"}); 
			helpText.alpha = 0; 
			
			startText = game.add.text((game.world.centerX + 50), (game.world.centerY-240), "GAME IS STARTING SOON", { font: "30px Covered By Your Grace", fill: "#00000", align: "center"}); 
			startText.anchor.setTo(0.5, 0.5); 		
			startText.alpha = 0;			
		},
		
		update: function () 
		{
			
			if(tutorial == true)
			{
				if(open == true)
				{
					openCage(); 
					open = false; 
				}
				if(cont == true)
				{
					openCage(); 
				}
				else if(next == true)
				{
					game.time.events.add(Phaser.Timer.SECOND * 6, fadeOut); 
					
				}					
			}

			else
			{
				if(justStarted == true)
				{						
					game.add.tween(startText).to( { alpha: 0 }, 400, Phaser.Easing.Linear.None, true, 800, 0, false);								
					charTimer = game.time.now + 10000;
					chibiRandom.alpha = 0; 
					chibiRandom = Phaser.ArrayUtils.getRandomItem(chibiArray); 
					chibiRandom.alpha = 1; 
					entranceAudio.play();	
					animalRandom = Phaser.ArrayUtils.getRandomItem(animalArray); 
					animalTimer = game.time.now + 4000; 					
					justStarted = false; 
				}
				var item = Phaser.ArrayUtils.getRandomItem(cageArray); 
	
				
				if(game.time.now >= charTimer && gameActive == true)
				{
					createChar();
				}
				if(game.time.now >= animalTimer && gameActive == true)
				{
					createAnimal();
				}
				
				//If the cage has been opened for 2.4s
				if(game.time.now >= cageTimerArray[tlTimer] && cageTimerArray[tlTimer] != -5)
				{
					checking = true; 
					closeCage(cagetopleft);					
				}
				if(game.time.now >= cageTimerArray[tmTimer] && cageTimerArray[tmTimer] != -5)
				{
					checking = true;
					closeCage(cagetopmiddle);						
				}
				if(game.time.now >= cageTimerArray[trTimer] && cageTimerArray[trTimer] != - 5)
				{
					checking = true;
					closeCage(cagetopright);									
				}
				if(game.time.now >= cageTimerArray[mlTimer] && cageTimerArray[mlTimer] != - 5)
				{
					checking = true;
					closeCage(cagemiddleleft);					
				}
				if(game.time.now >= cageTimerArray[mmTimer] && cageTimerArray[mmTimer] != - 5)
				{
					checking = true; 
					closeCage(cagemiddlemiddle);										
				}
				if(game.time.now >= cageTimerArray[mrTimer] && cageTimerArray[mrTimer] != - 5)
				{
					checking = true; 
					closeCage(cagemiddleright);					
				}
				if(game.time.now >= cageTimerArray[blTimer] && cageTimerArray[blTimer] != - 5)
				{
					checking = true; 
					closeCage(cagebottomleft);										
				}
				if(game.time.now >= cageTimerArray[bmTimer] && cageTimerArray[bmTimer] != - 5)
				{
					checking = true; 
					closeCage(cagebottommiddle);					
				}
				if(game.time.now >= cageTimerArray[brTimer] && cageTimerArray[brTimer] != - 5)
				{
					checking = true; 
					closeCage(cagebottomright);
				}
				/*//temp here, remove after testing
			if(start == true)
			{
				openCage();
				cageHandling += game.time.now; 
				start = false; 
			}*/
				if(start == false && gameActive == true)
				{
					notRandom = false; 
					if(game.time.now >= cageHandling)
					{
						openCage(); 
					}
					cageHandling = game.rnd.integerInRange(0, 1000) + game.time.now; 
				}
				//openCage(); 
				
				if(game.time.now >= charTimer - 4000 && prevent == false && gameActive == true)
				{
					/*var count = 0; 
					for(var i = 0; i < booleanArray.length; i++)
					{
						if(booleanArray[i] == false) 
						{
							count++; 
						}
					}
					
					var rand = game.rnd.integerInRange(0, count-5); 
					for(var x = 0; x < rand; x++)
					{
						openCage(); 
					}*/
					notRandom = true; 
					openCage(); 
					notRandom = false; 
					prevent = true; 
				}
				if(message1 == true && gameActive == true)
				{
					lives.children[countLives].kill(); 
					loseText.text = "UH OH ! ! !  YOU'VE LOST A CUSTOMER. . . ";
					loseText.anchor.setTo(0.5, 0.5); 
					loseText.alpha = 1; 	
					game.add.tween(loseText).to( { alpha: 0 }, 400, Phaser.Easing.Linear.None, true, 400, 0, false);				
					message1 = false;
					countLives++; 
				}
				
				if(message2 == true && gameActive == true)
				{
					lives.children[countLives].kill(); 
					loseText.text = "UH OH ! ! !  AN ANIMAL HAS ESCAPED. . . ";
					loseText.anchor.setTo(0.5, 0.5); 	
					loseText.alpha = 1; 
					game.add.tween(loseText).to( { alpha: 0 }, 400, Phaser.Easing.Linear.None, true, 400, 0, false);								
					message2 = false; 
					countLives++; 
				}		
				
				if(countLives >= 3)
				{
					loseText.alpha = 0; 
					finText.alpha = 1; 
					gameActive = false; 
					animpig.animations.stop();
					animdog.animations.stop();
					animturtle.animations.stop();
					animfox.animations.stop();
					animham.animations.stop();
					animredpanda.animations.stop();
					animpanda.animations.stop();
					animatedcat.animations.stop();
					animbunny.animations.stop();			
					chibiRandom.alpha = 0; 
					animalRandom.alpha = 0; 
					bubble.alpha = 0; 
					heart.alpha = 0; 
					angry.alpha = 0; 
				}
				
				if(money >= 450)
				{
					loseText.alpha = 0; 
					winText.alpha = 1; 
					gameActive = false; 
					animpig.alpha = 0; 
					animdog.alpha = 0; 
					animturtle.alpha = 0; 
					animfox.alpha = 0; 
					animham.alpha = 0; 
					animredpanda.alpha = 0; 
					animpanda.alpha = 0; 
					animatedcat.alpha = 0; 
					animbunny.alpha = 0; 		
					chibiRandom.alpha = 0; 
					animalRandom.alpha = 0; 
					bubble.alpha = 0; 	
					heart.alpha = 0; 
					angry.alpha = 0; 
				}	
			}				
		}
    }

    
    game.state.add('Boot', BasicGame.Boot); 
    game.state.start('Boot'); 
};

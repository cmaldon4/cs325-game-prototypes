window.onload = function() 
{
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
    
    var game = new Phaser.Game( 1111, 589, Phaser.AUTO, 'game', false, false, false );
    

    
    var background, character, alert, heart, wasd, cursors, charCollisionGroup, alertCollisionGroup, landscape, blueflower, littleflower, flowers; 
    var stop = false; 
    var timer; 
    var timer2; 
    var timeCheck = 0; 
    var gameActive; 
    var velocityActive;
    var velTrack = 0;
    var temp = 10000; 
    var alerts; 
    var alertPresent = false;
    var bgAudio; 
    var audioActive; 
    var waterAudio; 
    var cTimer; 
    var fTimer; 
    var heartFade; 
    var cups, food, food2, ramen, pocky, pepsi, bag, lives, countLives, trash, last, overlay; 
    var cupsAudio, foodAudio, ramenAudio, pockyAudio, pepsiAudio, bagAudio, loseLife;
    
    var BasicGame = function (game) {}; 
    BasicGame.Boot = function (game) {};
    
    
    function clickEvent(sprite)
    {
    		
    	if(sprite == bag)
    	{
    		bagAudio.play();
    		bag.body.y = -100; 
    		bag.body.x = game.rnd.integerInRange(40, 870);
    		bag.body.velocity.y = game.rnd.integerInRange(20, 100);
    	}
    	else if(sprite == cups)
    	{
    		cupsAudio.play();
    		cups.body.y = -100; 
    		cups.body.x = game.rnd.integerInRange(15, 900);
    		cups.body.velocity.y = game.rnd.integerInRange(20, 100);
    	}
    	else if(sprite == food)
    	{
    		foodAudio.play();
    		food.body.y = -100; 
    		food.body.x = game.rnd.integerInRange(40, 880);
    		food.body.velocity.y = game.rnd.integerInRange(20, 100);
    	}
    	else if(sprite == food2)
    	{
    		foodAudio.play();
    		food2.body.y = -100; 
    		food2.body.x = game.rnd.integerInRange(40, 880);
    		food2.body.velocity.y = game.rnd.integerInRange(20, 100);
    	}
    	else if(sprite == ramen)
    	{
    		ramenAudio.play();
    		ramen.body.y = -100; 
    		ramen.body.x = game.rnd.integerInRange(50, 885);
    		ramen.body.velocity.y = game.rnd.integerInRange(20, 100);
    	}
    	else if(sprite == pocky)
    	{
    		pockyAudio.play();
    		pocky.body.y = -100; 
    		pocky.body.x = game.rnd.integerInRange(25, 890);
    		pocky.body.velocity.y = game.rnd.integerInRange(20, 100);
    	}
    	else if(sprite == pepsi)
    	{
    		pepsiAudio.play();
    		pepsi.body.y = -100; 
    		pepsi.body.x = game.rnd.integerInRange(15, 900);
    		pepsi.body.velocity.y = game.rnd.integerInRange(20, 100);
    	}
 
    	

    }
    function targetHit(spriteA, spriteB)
	{
			var boundsA = spriteA.getBounds(); 
			var boundsB = spriteB.getBounds(); 
			
			return Phaser.Rectangle.intersects(boundsA, boundsB); 
	}
	function createAlert()
	{
		if(stop == false && heart.alpha == 0)
		{
			var randomX = game.rnd.integerInRange(40, 930); 
			//alert = game.add.sprite(randomX, 353, 'alert'); 
			alert = alerts.create(randomX, 353, 'alert'); 
			game.physics.p2.enable(alert);
			alert.body.clearShapes(); 
			alert.body.setRectangle(); 
			alert.body.setZeroDamping();
			alert.body.fixedRotation = true; 
			timer = game.time.now + 4800;
			timer2 = game.time.now + temp; 
			alertPresent = true; 
		}
		if(timer != -5)
		{
		}
	
	}
		
	function updateTimer()
	{
		if(temp-800 >= 2000)
		{
			temp -= 800; 
		}

	
	}
			
	function updateVelocity()
	{
		trash.children[velTrack].body.velocity.y = 50; 
		velTrack++;
		
		
	}
		
	function updateAudio()
	{
		if(!bgAudio.isPlaying)
		{
			bgAudio.play(); 
		}
	}
    BasicGame.Boot.prototype = 
    {
    	preload: function () 
		{
			
			game.load.image('background', 'assets/Background.png' );
			game.load.spritesheet('char', 'assets/tempnewchar.png', 140, 158); 
			game.load.image('heart', 'assets/Heart.png'); 
			game.load.image('alert', 'assets/Alert.png');
			game.load.image('landscape', 'assets/landscape.png'); 
			game.load.image('blueflower', 'assets/blueflower.png'); 
			game.load.image('littleflower', 'assets/littleflower.png'); 
			game.load.image('flowers', 'assets/flowers.png'); 
			game.load.audio('bgAudio', ['assets/AlmostTooSerious.mp3', 'assets/AlmostTooSerious.ogg']); 
			game.load.audio('waterAudio', ['assets/WaterAudio.mp3', 'assets/WaterAudio.ogg']); 
			
			
			//loads for updated version of game
			game.load.image('cups', 'assets/cups.png');
			game.load.image('food', 'assets/food.png');
			game.load.image('food2', 'assets/food2.png');
			game.load.image('ramen', 'assets/instantramen.png'); 
			game.load.image('pepsi', 'assets/pepsi.png'); 
			game.load.image('pocky', 'assets/pocky.png');
			game.load.image('bag', 'assets/bag.png'); 
			game.load.image('life', 'assets/life.png'); 
			game.load.image('overlay', 'assets/bgcopy.png');
			
			game.load.audio('cupsAudio', ['assets/cupsAudio.mp3', 'assets/cupsAudio.ogg']); 
			game.load.audio('foodAudio', ['assets/foodAudio.mp3', 'assets/foodAudio.ogg']); 
			game.load.audio('ramenAudio', ['assets/ramenAudio.mp3', 'assets/ramenAudio.ogg']); 
			game.load.audio('pepsiAudio', ['assets/pepsiAudio.mp3', 'assets/pepsiAudio.ogg']); 
			game.load.audio('pockyAudio', ['assets/pockyAudio.mp3', 'assets/pockyAudio.ogg']); 
			game.load.audio('bagAudio', ['assets/bagAudio.mp3', 'assets/bagAudio.ogg']); 
			game.load.audio('loseLife', ['assets/loseLife.mp3', 'assets/loseLife.ogg']); 
			//game.load.physics('bagPhys', 'assets/bag.json'); 
		},
		
		
		//Physics from collision group phaser example. 
		create: function () 
		{
	
			bgAudio = game.add.audio('bgAudio'); 
			bgAudio.play(); 
			waterAudio = game.add.audio('waterAudio'); 
			
			cupsAudio = game.add.audio('cupsAudio');
			foodAudio = game.add.audio('foodAudio');
			ramenAudio = game.add.audio('ramenAudio'); 
			pepsiAudio = game.add.audio('pepsiAudio');
			pockyAudio = game.add.audio('pockyAudio');
			loseLife = game.add.audio('loseLife'); 
			bagAudio = game.add.audio('bagAudio');
			
	
			background = game.add.sprite( 0, 0, 'background' );
			
			lives = game.add.group();
			for(var i = 0; i < 3; i++)
			{
				lives.create(1000, 0, 'life'); 
			}
			lives.children[0].x = 890; 
			lives.children[1].x = 945;
			countLives = 0; 

			
			game.physics.startSystem(Phaser.Physics.P2JS); 
			game.physics.p2.setImpactEvents(true); 
			game.physics.p2.defaultRestitution = 0.8;
			charCollisionGroup = game.physics.p2.createCollisionGroup();
			alertCollisionGroup = game.physics.p2.createCollisionGroup(); 
			game.physics.p2.updateBoundsCollisionGroup();
			
			//var targetCollisionGroup = game.physics.p2.createCollisionGroup();
			
		   
			//in right direction, x = 885 is limit, in left x = 950
			character = game.add.sprite(440, 310, 'char'); 
			game.physics.p2.enable(character); 
			character.body.setZeroDamping(); 
			character.body.fixedRotation = true; 
			
			//character.body.setSize(character.body.width() *.80, character.height()); 
			//character.body.setOriginCenter(); 
			
			
			//Animation logic from Josh Morony HTML5 tutorials
			
			character.animations.add('left', [4, 0, 3, 5, 1, 2], 4, true); 
			character.animations.add('right', [7, 11, 8, 6, 10, 9], 4, true);
			character.body.setCollisionGroup(charCollisionGroup); 
			character.body.collides(alertCollisionGroup, targetHit, this); 
			character.frame = 11; 
			
			overlay = game.add.sprite(0, 0, 'overlay'); 
			
			
			alerts = game.add.group(); 
			alerts.enableBody = true; 
			alerts.physicsBodyType = Phaser.Physics.P2JS; 
			//var randomX = game.rnd.integerInRange(40, 930); 
			//alert = alerts.create(randomX, 353, 'alert'); 
			
			
			heart = game.add.sprite(700, 322, 'heart');
			heart.alpha = 0; 
			createAlert(); 
			//alert = game.add.sprite(800, 353, 'alert');
	
				

			
			
			
	

			
			
			//heart replaces alert, but must be adjusted -31 in the y axis
			//pop up limitation is 930 x axis
			
			
			/*game.physics.p2.enable(alert);
			alert.body.clearShapes(); 
			alert.body.setRectangle(); 
			alert.body.setZeroDamping();
			alert.body.fixedRotation = true; */
			//alert.body.setCollisionGroup(alertCollisionGroup); 
			//alert.body.collides(charCollisionGroup); 
			
			
			cursors = game.input.keyboard.createCursorKeys();

			//lewster32 on html5gamedevs forum
			wasd = {
				up: game.input.keyboard.addKey(Phaser.Keyboard.W),
				down: game.input.keyboard.addKey(Phaser.Keyboard.S),
				left: game.input.keyboard.addKey(Phaser.Keyboard.A),
				right: game.input.keyboard.addKey(Phaser.Keyboard.D),
					};
			//cursors = game.input.keyboard.createCursorKeys();
			
			cursors.left.onDown.add(function() { character.animations.play('left');}); 
			cursors.right.onDown.add(function() { character.animations.play('right');}); 
			wasd.left.onDown.add(function() { character.animations.play('left');}); 
			wasd.right.onDown.add(function() { character.animations.play('right');}); 
			gameActive = setInterval(updateTimer, 10000); 
			audioActive = setInterval(updateAudio, 7100);
			velocityActive = setInterval(updateVelocity, 10000);
			
			
			cTimer = game.time.create(); 
			cTimer.start(); 
			game.physics.startSystem(Phaser.Physics.ARCADE); 
			
			
			//updated portion of game
			cups = game.add.sprite(game.rnd.integerInRange(15, 900), -100, 'cups');
			food = game.add.sprite(game.rnd.integerInRange(40, 880), -100, 'food'); 
			food2 = game.add.sprite(game.rnd.integerInRange(40, 880), -100, 'food2');
			ramen = game.add.sprite(game.rnd.integerInRange(50, 885), -100, 'ramen');
			pepsi = game.add.sprite(game.rnd.integerInRange(15, 900), -100, 'pepsi'); 
			pocky = game.add.sprite(game.rnd.integerInRange(25, 890), -100, 'pocky'); 
			bag = game.add.sprite(game.rnd.integerInRange(40, 870), -100, 'bag'); 
			
			trash = game.add.group();
			trash.add(cups);
			trash.add(food);
			trash.add(food2);
			trash.add(ramen);
			trash.add(pocky);
			trash.add(pepsi);
			trash.add(bag); 
			
			game.physics.p2.enable(cups); 
			cups.body.clearShapes();
			cups.body.setZeroDamping();
			cups.body.fixedRotation = true; 
			
			game.physics.p2.enable(food); 
			food.body.clearShapes();
			food.body.setZeroDamping();
			food.body.fixedRotation = true; 
			
			game.physics.p2.enable(food2); 
			food2.body.clearShapes();
			food2.body.setZeroDamping();
			food2.body.fixedRotation = true; 
			
			game.physics.p2.enable(ramen); 
			ramen.body.clearShapes();
			ramen.body.setZeroDamping();
			ramen.body.fixedRotation = true; 
			
			game.physics.p2.enable(pepsi); 
			pepsi.body.clearShapes();
			pepsi.body.setZeroDamping();
			pepsi.body.fixedRotation = true; 
			
			game.physics.p2.enable(pocky); 
			pocky.body.clearShapes();
			pocky.body.setZeroDamping();
			pocky.body.fixedRotation = true; 
			
			game.physics.p2.enable(bag); 
			bag.body.clearShapes()
			bag.body.setZeroDamping();
			bag.body.fixedRotation =true; 

			
			//Pixel Perfect Detection example from Phaser
			cups.inputEnabled = true; 
			cups.input.pixelPerfectOver = true; 
			cups.events.onInputDown.add(function(cups){clickEvent(cups);}, this); 
			
			
			food.inputEnabled = true; 
			food.input.pixelPerfectOver = true; 
			food.events.onInputDown.add(function(food){clickEvent(food);}, this); 
			
			food2.inputEnabled = true; 
			food2.input.pixelPerfectOver = true; 
			food2.events.onInputDown.add(function(food2){clickEvent(food2);}, this); 
			
			
			ramen.inputEnabled = true; 
			ramen.input.pixelPerfectOver = true; 
			ramen.events.onInputDown.add(function(ramen){clickEvent(ramen);}, this); 
			
			
			pocky.inputEnabled = true; 
			pocky.input.pixelPerfectOver = true; 
			pocky.events.onInputDown.add(function(pocky){clickEvent(pocky);}, this); 
			
			pepsi.inputEnabled = true; 
			pepsi.input.pixelPerfectOver = true; 
			pepsi.events.onInputDown.add(function(pepsi){clickEvent(pepsi);}, this); 
			
			
			bag.inputEnabled = true; 
			bag.input.pixelPerfectOver = true; 
			bag.events.onInputDown.add(function(bag){clickEvent(bag);}, this);  
			
			//cups.body.velocity.y = 50; 
			
			
			landscape = game.add.sprite(35, 268, 'landscape'); 
			blueflower = game.add.sprite(150, 327, 'blueflower');
			littleflower = game.add.sprite(535, 375, 'littleflower'); 
			flowers = game.add.sprite(785, 338, 'flowers'); 

		
		},
		
		update: function () 
		{
			character.body.setZeroVelocity();
			alert.body.setZeroVelocity();

	
			if((cursors.left.isDown && character.body.x <= 950) || (wasd.left.isDown && character.body.x <= 950))
			{
				character.body.moveLeft(175);
			}
			else if ((cursors.right.isDown && character.body.x <= 872) || (wasd.right.isDown && character.body.x <= 872))
			{
				character.body.moveRight(175); 
			}
			else
			{
				character.animations.stop();
			}
			
			//inspired from overlapping image without physics phaser example
			if(stop == false && (cursors.down.isDown || wasd.down.isDown) && targetHit(character, alert) && alert.alpha == 1)
			{
				heart.alpha = 0; 
				heart.x = alert.x; 
				heart.y = alert.y - 33; 
				heart.alpha = 1; 
				heartFade = true; 
				waterAudio.play(); 
				alert.alpha = 0; 
				timeCheck = game.time.now; 
				timer = -5; 
				alertPresent = false; 
				
			}
			
			//Phaser example tweens fading in a sprite
			if(countLives == 3)
				{
					var loseText = game.add.text(game.world.centerX, (game.world.centerY - 100), "The plants are dying... We've lost.", { font: "50px Parisienne", fill: "#ffffff", align: "center"}); 
					loseText.anchor.setTo(0.5, 0.5); 
					cTimer.stop();
					stop = true; 
					alert.alpha = 0; 
					heart.alpha = 0; 
					character.body.setZeroVelocity(); 
					cups.body.setZeroVelocity()
					food.body.setZeroVelocity();
					food2.body.setZeroVelocity();
					ramen.body.setZeroVelocity();
					pocky.body.setZeroVelocity();
					bag.body.setZeroVelocity();
					
					lives.children[2].kill();
					character.kill();
					flowers.kill();
					blueflower.kill();
					landscape.kill();
					littleflower.kill();
					overlay.kill();
					cups.kill();
					food.kill();
					food2.kill();
					ramen.kill();
					pocky.kill();
					pepsi.kill();
					bag.kill();
					game.add.tween(background).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);

					clearInterval(gameActive); 
					
				}
				
			if(game.time.now >= timer && timer != -5)
			{
					lives.children[countLives].kill();
					loseLife.play();
					alert.alpha = 0; 
					timer = -5; 
					alertPresent = false; 
					countLives++;
					last = 	Math.round((cTimer.ms) / 1000); 

			}
			
			if(cups.body.y >= 355)
			{
				lives.children[countLives].kill();
				loseLife.play();
				countLives++;
				cups.body.y = -100; 
    		    cups.body.x = game.rnd.integerInRange(15, 900);
    		    cups.body.velocity.y = game.rnd.integerInRange(20, 100);
    		   	last = 	Math.round((cTimer.ms) / 1000); 


			}
			if(food.body.y >= 355)
			{
				lives.children[countLives].kill();
				loseLife.play();
				countLives++;
				food.body.y = -100; 
				food.body.x = game.rnd.integerInRange(40, 880);
				food.body.velocity.y = game.rnd.integerInRange(20, 100);
				last = 	Math.round((cTimer.ms) / 1000);
			}
			if(food2.body.y >= 362)
			{
				lives.children[countLives].kill();
				loseLife.play();
				countLives++;
				food2.body.y = -100; 
				food2.body.x = game.rnd.integerInRange(40, 880);
				food2.body.velocity.y = game.rnd.integerInRange(20, 100);
				last = 	Math.round((cTimer.ms) / 1000);
			}
			if(ramen.body.y >= 338)
			{
				lives.children[countLives].kill();
				loseLife.play();
				countLives++;
				ramen.body.y = -100; 
				ramen.body.x = game.rnd.integerInRange(50, 885);
				ramen.body.velocity.y = game.rnd.integerInRange(20, 100);
				last = 	Math.round((cTimer.ms) / 1000);
			}
			if(pepsi.body.y >= 355)
			{
				lives.children[countLives].kill();
				loseLife.play();
				countLives++;
				pepsi.body.y = -100; 
				pepsi.body.x = game.rnd.integerInRange(15, 900);
				pepsi.body.velocity.y = game.rnd.integerInRange(20, 100);
				last = 	Math.round((cTimer.ms) / 1000);
			}
			if(pocky.body.y >= 343)
			{
				lives.children[countLives].kill();
				loseLife.play();
				countLives++;
				pocky.body.y = -100; 
				pocky.body.x = game.rnd.integerInRange(25, 890);
				pocky.body.velocity.y = game.rnd.integerInRange(20, 100);
				last = 	Math.round((cTimer.ms) / 1000);
			}
			if(bag.body.y >= 315)
			{
				lives.children[countLives].kill();
				loseLife.play();
				countLives++;
				bag.body.y = -100; 
				bag.body.x = game.rnd.integerInRange(40, 870);
				bag.body.velocity.y = game.rnd.integerInRange(20, 100);
				last = 	Math.round((cTimer.ms) / 1000);
			}
					
			if(game.time.now >= timer2 && alertPresent == false)
			{
				createAlert();
			}
			//Phaser Example Tweens Fading in a Sprite
			if(game.time.now >= timeCheck + 50 && heart.alpha == 1 && heartFade == true)
			{
				game.add.tween(heart).to( { alpha: 0 }, 400, Phaser.Easing.Linear.None, true, 400, 0, false);
				heartFade = false; 
			}
			
			
	
		},
		
		//Timer functionality from Lewis Lane 
		render: function()
		{
			
			if (cTimer.running)
			{
				game.debug.text("Score: " + this.formatTime(Math.round((cTimer.ms) / 1000)), 20, 58, "#fff", '20px Parisienne'); 
			}
			else
			{
				game.debug.text("Score: " + this.formatTime(last), 20, 58, "#fff", '20px Parisienne'); 
			}

		},
		
		formatTime: function(s)
		{
			var minutes = "0" + Math.floor(s / 60);
			var seconds = "0" + (s-minutes * 60);
			return minutes.substr(-2) + ":" + seconds.substr(-2); 
		},
    }
    
game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');
    

};

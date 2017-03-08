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
    

    
    var background, character, alert, heart, cursors, charCollisionGroup, alertCollisionGroup, landscape, blueflower, littleflower, flowers; 
    var stop = false; 
    var timer; 
    var timer2; 
    var timeCheck = 0; 
    var gameActive; 
    var temp = 10000; 
    var alerts; 
    var alertPresent = false;
    var bgAudio; 
    var audioActive; 
    var waterAudio; 
    var cTimer; 
    var heartFade; 
    
    
    var BasicGame = function (game) {}; 
    BasicGame.Boot = function (game) {};
    
    
    function targetHit(spriteA, spriteB)
	{
			var boundsA = spriteA.getBounds(); 
			var boundsB = spriteB.getBounds(); 
			
			return Phaser.Rectangle.intersects(boundsA, boundsB); 
	}
	function createAlert()
	{
		if(stop == false)
		{
			var randomX = game.rnd.integerInRange(40, 930); 
			//alert = game.add.sprite(randomX, 353, 'alert'); 
			alert = alerts.create(randomX, 353, 'alert'); 
			game.physics.p2.enable(alert);
			alert.body.clearShapes(); 
			alert.body.setRectangle(); 
			alert.body.setZeroDamping();
			alert.body.fixedRotation = true; 
			timer = game.time.now + 3800;
			timer2 = game.time.now + temp; 
			alertPresent = true; 
		}
		if(timer != -5)
		{
		}
	
	}
		
	function updateTimer()
	{
		if(temp-800 >= 0)
		{
			temp -= 800; 
		}
		/*if(temp-1000 == 1000)
		{
			temp -= 500; 
		}*/
	
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
			// Load an image and call it 'logo'.
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
		},
		
		
		//Physics from collision group phaser example. 
		create: function () 
		{
	
			bgAudio = game.add.audio('bgAudio'); 
			bgAudio.play(); 
			waterAudio = game.add.audio('waterAudio'); 
			
			
			
	
			background = game.add.sprite( 0, 0, 'background' );
			
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
			
			alerts = game.add.group(); 
			alerts.enableBody = true; 
			alerts.physicsBodyType = Phaser.Physics.P2JS; 
			//var randomX = game.rnd.integerInRange(40, 930); 
			//alert = alerts.create(randomX, 353, 'alert'); 
			
			
			heart = game.add.sprite(700, 322, 'heart');
			heart.alpha = 0; 
			createAlert(); 
			//alert = game.add.sprite(800, 353, 'alert');
	
	
	
			landscape = game.add.sprite(35, 268, 'landscape'); 
			blueflower = game.add.sprite(150, 325, 'blueflower');
			littleflower = game.add.sprite(535, 375, 'littleflower'); 
			flowers = game.add.sprite(785, 338, 'flowers'); 
			
			
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
			
			cursors.left.onDown.add(function() { character.animations.play('left');}); 
			cursors.right.onDown.add(function() { character.animations.play('right');}); 
			gameActive = setInterval(updateTimer, 10000); 
			audioActive = setInterval(updateAudio, 7100);
			
			
			cTimer = game.time.create(); 
			cTimer.start(); 
			game.physics.startSystem(Phaser.Physics.ARCADE); 
		},
		
		update: function () 
		{
			character.body.setZeroVelocity();
			alert.body.setZeroVelocity();
	 
	
			if(cursors.left.isDown && character.body.x <= 950)
			{
				character.body.moveLeft(175);
			}
			else if (cursors.right.isDown && character.body.x <= 872)
			{
				character.body.moveRight(175); 
			}
			else
			{
				character.animations.stop();
			}
			
			//inspired from overlapping image without physics phaser example
			if(stop == false && cursors.down.isDown && targetHit(character, alert) && alert.alpha == 1)
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
			if(game.time.now >= timer && timer != -5)
			{
				var loseText = game.add.text(game.world.centerX, (game.world.centerY-100), "The plants are dying... We've lost.", { font: "30px Lucida Handwriting", fill: "#ffffff", align: "center"}); 
					loseText.anchor.setTo(0.5, 0.5); 
					cTimer.stop();
					stop = true; 
					alert.alpha = 0; 
					heart.alpha = 0; 
					character.kill();
					flowers.kill();
					blueflower.kill();
					landscape.kill();
					littleflower.kill();
					game.add.tween(background).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

					clearInterval(gameActive); 
					
			}
			if(game.time.now >= timer2 && alertPresent == false)
			{
				createAlert();
			}
			//Phaser Example Tweens Fading in a Sprite
			if(game.time.now >= timeCheck + 100 && heart.alpha == 1 && heartFade == true)
			{
				game.add.tween(heart).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 1000, 0, false);
				heartFade = false; 
			}
	
	
		},
		
		//Timer functionality from Lewis Lane 
		render: function()
		{
			
			if (cTimer.running)
			{
				game.debug.text("Score: " + this.formatTime(Math.round((cTimer.ms) / 1000)), 2, 14, "#fff"); 
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

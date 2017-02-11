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
    
var game = new Phaser.Game(550, 550, Phaser.AUTO, 'game', false, false, false);

var BasicGame = function (game) {};

BasicGame.Boot = function (game) {};

var timer, timerEvent, text, sprite, bullets, asteroids, circle, circleSprite, audio;
var fireRate = 100; 
var nextFire = 0;

function hitSprite(sprite)
{
	sprite.destroy();
}

BasicGame.Boot.prototype = 
{
    preload: function () 
    {
        game.load.image( 'background', 'assets/Earth.png' );
        game.load.image( 'cowboy', 'assets/cowboy.png' );
        game.load.image('gun', 'assets/gun.png'); 
        game.load.image('bullet', 'assets/bullet.png');
        game.load.image('asteroid', 'assets/asteroid.png');
        
        game.load.image('circle', 'assets/circle.png');
        game.load.audio('audio', ['assets/OmegaSector.mp3', 'assets/OmegaSector.ogg']);
        
    },
    
    create: function () 
    {
    	audio = game.add.audio('audio');
    	audio.play();
    	var background = game.add.sprite( 0, 0, 'background' );
        var sprite1 = game.add.sprite(0,0, 'cowboy' );
        sprite1.alignIn(background, Phaser.BOTTOM_LEFT, -50, -200);
        // Create a custom timer
        timer = game.time.create();
        
        // Create a delayed event 1m and 30s from now
        timerEvent = timer.add(Phaser.Timer.MINUTE * 2, this.endTimer, this);
        
        // Start the timer
        timer.start();
        game.physics.startSystem(Phaser.Physics.ARCADE);

		//game.stage.backgroundColor = '#313131';
	
		bullets = game.add.group();
		bullets.enableBody = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;
	
		bullets.createMultiple(75, 'bullet');
		bullets.setAll('checkWorldBounds', true);
		bullets.setAll('outOfBoundsKill', true);
				
		sprite = game.add.sprite(130, 300, 'gun');
		sprite.anchor.set(0.5);
	
		game.physics.enable(sprite, Phaser.Physics.ARCADE);
	
		sprite.body.allowRotation = false;
		
		asteroids = game.add.group();
		asteroids.enableBody = true;
		asteroids.physicsBodyType = Phaser.Physics.ARCADE;
			
		var delay = 0;
		for (var i = 0; i < 40; i++)
		{
			var sprite2 = game.add.sprite(550, 0, 'asteroid');
	
			sprite2.scale.set(game.rnd.realInRange(0.1, 0.6));
			
			game.physics.enable(sprite2, Phaser.Physics.ARCADE);
	
			sprite2.body.onCollide = new Phaser.Signal();
			
			sprite2.body.onCollide.add(function(sprite2){hitSprite(sprite2);}, this);
			
			var speed = game.rnd.between(5000, 15000);
	
			game.add.tween(sprite2).to({ x: game.rnd.between(0,225), y: game.rnd.between(350, 550) }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);
			
			delay += 1000;
			
			asteroids.add(sprite2);
		}
		
		/*
		circle = game.add.bitmapData(299, 299);
		circle.ctx.beginPath();
		circle.ctx.arc(300, 200, 100, 0, Math.PI*2, true);
		circle.ctx.fillStyle = '#000000'//'rgba(255,255,255, 0.5)';
		circle.ctx.fill();
		
		circle = game.add.graphics(299, 299);
		circle.lineStyle(1);
		circle.beginFill(0x000000, 0.5);
		circle.drawCircle(299, 299, 299);
		circle.endFill();
		*/
		circleSprite = game.add.sprite(-133, 350, 'circle');
		game.physics.enable(circleSprite, Phaser.Physics.ARCADE);
		circleSprite.alpha = 0;
		circleSprite.body.setCircle(200);//299
        circleSprite.body.onCollide = new Phaser.Signal();
		circleSprite.body.onCollide.add(function(circleSprite){this.hitEarth(circleSprite);}, this);
    },
    
    update: function () 
    {
		sprite.rotation = game.physics.arcade.angleToPointer(sprite);
	
		if (game.input.activePointer.isDown)
		{
			if (game.time.now > nextFire && bullets.countDead() > 0)
			{
				nextFire = game.time.now + fireRate;
		
				var bullet = bullets.getFirstDead();
		
				bullet.reset(sprite.x - 10, sprite.y - 10);
		
				game.physics.arcade.moveToPointer(bullet, 300);
				
				//game.physics.arcade.collide(this.bullets, this.asteroids);
			}
		}

		game.physics.arcade.collide(bullets, asteroids);
		game.physics.arcade.collide(asteroids, circleSprite);
    },
    
	
    render: function () 
    {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (timer.running) 
        {
        	//game.debug.geom(circle,'rgba(255,255,255, 0.5)');
            game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 2, 14, "#ff0");
        }
        else 
        {
            game.debug.text("Game Over! Earth is destroyed!", 2, 14, "#0f0");
        }
    },
    endTimer: function() 
    {
        // Stop the timer when the delayed event triggers
        timer.stop();
    },
    formatTime: function(s) 
    {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);   
    },
    hitEarth: function()
    {
    	console.log("HIT EARTH!!!");
    	this.endTimer();
    	game.debug.text("Game Over! Earth is destroyed!", 2, 14, "#0f0");
    }
    	
}

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');

};
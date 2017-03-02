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
    
    var game = new Phaser.Game( 1111, 589, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() 
    {
        // Load an image and call it 'logo'.
        game.load.image( 'background', 'assets/background.png' );
        game.load.spritesheet( 'char', 'assets/tempnewchar.png', 140, 158); 
        game.load.image( 'heart', 'assets/heart.png'); 
        game.load.image('alert', 'assets/alert.png');
        game.load.image('landscape', 'assets/landscape.png'); 
        game.load.image('blueflower', 'assets/blueflower.png'); 
        game.load.image('littleflower', 'assets/littleflower.png'); 
        game.load.image('flowers', 'assets/flowers.png'); 
    }
    
    var background, character, alert, heart, cursors, charCollisionGroup, alertCollisionGroup, landscape, blueflower, littleflower, flowers; 
    var stop = false; 
    
    function create() 
    {

        background = game.add.sprite( 0, 0, 'background' );
        
        game.physics.startSystem(Phaser.Physics.P2JS); 
        game.physics.p2.setImpactEvents(true); 
        game.physics.p2.defaultRestitution = 0.8;
        charCollisionGroup = game.physics.p2.createCollisionGroup();
        alertCollisionGroup = game.physics.p2.createCollisionGroup(); 
        game.physics.p2.updateBoundsCollisionGroup();
        
        //var targetCollisionGroup = game.physics.p2.createCollisionGroup();
        
       
        //in right direction, x = 885 is limit, in left x = 950
        character = game.add.sprite(100, 310, 'char'); 
        game.physics.p2.enable(character); 
        character.body.setZeroDamping(); 
        character.body.fixedRotation = true; 
        
        //character.body.setSize(character.body.width() *.80, character.height()); 
        //character.body.setOriginCenter(); 
        
        
        character.animations.add('left', [4, 0, 3, 5, 1, 2], 4, true); 
        character.animations.add('right', [7, 11, 8, 6, 10, 9], 4, true);
        character.body.setCollisionGroup(charCollisionGroup); 
        character.body.collides(alertCollisionGroup, targetHit, this); 
        character.frame = 11; 
        
        var alerts = game.add.group(); 
        alerts.enableBody = true; 
        alerts.physicsBodyType = Phaser.Physics.P2JS; 
        var randomX = game.rnd.integerInRange(40, 930); 
        alert = alerts.create(randomX, 353, 'alert'); 
        
        
        //alert = game.add.sprite(800, 353, 'alert');
        heart = game.add.sprite(700, 322, 'heart');
        heart.alpha = 0; 


        landscape = game.add.sprite(35, 268, 'landscape'); 
        blueflower = game.add.sprite(150, 325, 'blueflower');
        littleflower = game.add.sprite(535, 375, 'littleflower'); 
        flowers = game.add.sprite(785, 338, 'flowers'); 
        
        
        //heart replaces alert, but must be adjusted -31 in the y axis
        //pop up limitation is 930 x axis
        
        
        game.physics.p2.enable(alert);
        alert.body.clearShapes(); 
        alert.body.setRectangle(); 
        alert.body.data.sensor = true; 
        alert.body.setZeroDamping();
        alert.body.fixedRotation = true; 
        //alert.body.setCollisionGroup(alertCollisionGroup); 
        //alert.body.collides(charCollisionGroup); 
        
        cursors = game.input.keyboard.createCursorKeys();
        
        cursors.left.onDown.add(function() { character.animations.play('left');}); 
        cursors.right.onDown.add(function() { character.animations.play('right');}); 

        
    }
    
    function targetHit(spriteA, spriteB)
    {
    	var boundsA = spriteA.getBounds(); 
    	var boundsB = spriteB.getBounds(); 
    	
    	return Phaser.Rectangle.intersects(boundsA, boundsB); 
    }
    
    function update() 
    {
    	character.body.setZeroVelocity();
    	alert.body.setZeroVelocity();
 
    	if(cursors.left.isDown && character.body.x <= 950)
    	{
    		character.body.moveLeft(175);
    	}
    	else if (cursors.right.isDown && character.body.x <= 883)
    	{
    		character.body.moveRight(175); 
    	}
    	else
    	{
    		character.animations.stop();
    	}
    	
    	if(cursors.down.isDown && targetHit(character, alert))
    	{
    		heart.x = alert.x; 
    		heart.y = alert.y - 33; 
    		while(alert.alpha > 0 && heart.alpha < 1)
    		{
    			alert.alpha -= 1; 
    			heart.alpha += 1; 
    		}
    		//heart.alpha = 1; 
    	}
    }
};

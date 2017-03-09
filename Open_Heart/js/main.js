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
    
    var game = new Phaser.Game( 500, 686, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.audio('bgAudio', ['assets/background.mp3', 'assets/background.ogg']);
        game.load.image( 'background', 'assets/background.png' );
        game.load.image( 'heart', 'assets/heart.png');
        game.load.physics('physicsData', 'assets/heart-vector.json');
        game.load.image( 'hand', 'assets/NurseHand.png');
        game.load.physics('physicsData', 'assets/hand-vector.json');
        game.load.image( 'target', 'assets/circle.png');
        game.load.audio('captureAudio', ['assets/Squishy2.mp3', 'assets/Squishy2.ogg']);
        game.load.audio('targetAudio', ['assets/Squishy1.mp3', 'assets/Squishy1.ogg']);


       
    }
    
    var background;
    var heart; 
    var hand; 
    var cursors; 
    var target; 
    var bgAudio; 
    var captureAudio; 
    var targetAudio; 
    var gameActive; 
    
    function create() 
    {
    	bgAudio = game.add.audio('bgAudio');
    	bgAudio.play();
    
    	
        game.add.image(0, 0, 'background'); 

        
        captureAudio = game.add.audio('captureAudio');
        targetAudio = game.add.audio('targetAudio'); 

        
        
        //Physics initation (ALL PHYSICS/COLLISION BELOW INSPIRED FROM COLLISION GROUPS EXAMPLE) 
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.defaultRestitution = 0.8; 
        
        var targetCollisionGroup = game.physics.p2.createCollisionGroup();
        var heartCollisionGroup = game.physics.p2.createCollisionGroup();
        var handCollisionGroup = game.physics.p2.createCollisionGroup();
        game.physics.p2.updateBoundsCollisionGroup();
        
        
        
        //set invisible target for collision
        
        var targets = game.add.group();
        targets.enableBody = true; 
        targets.physicsBodyType = Phaser.Physics.P2JS;
        target = targets.create(290, 583, 'target'); 

        game.physics.p2.enable(target);

        target.body.setCircle(20);
        target.alpha = 0;

        target.body.fixedRotation = true; 
        target.body.setCollisionGroup(targetCollisionGroup);
        target.body.collides(heartCollisionGroup, hitTarget, this);
        
        
        // set heart and its collision
        heart = game.add.sprite(0, 0, 'heart');
        game.physics.p2.enable(heart);
        heart.body.clearShapes();
        heart.body.loadPolygon('physicsData', 'heart'); 
        heart.body.setZeroDamping(); 
        heart.body.fixedRotation = true; 
        heart.body.setCollisionGroup(heartCollisionGroup);
        heart.body.collides([handCollisionGroup, targetCollisionGroup]);


        
        
        var randomX = game.rnd.integerInRange(100, 200); 
        var randomY = game.rnd.integerInRange(100, 200); 
        
        //create hand on interval to show up randomly and allow collision with heart

        hand = game.add.sprite((heart.body.x + randomX) , (heart.body.y + randomY), 'hand');
        game.physics.p2.enable(hand); 
        hand.body.clearShapes();
        hand.body.loadPolygon('physicsData', 'heart');
        hand.body.setZeroDamping(); 
        hand.body.fixedRotation = true; 
        hand.body.setCollisionGroup(handCollisionGroup); 
        hand.body.collides(heartCollisionGroup, stopHeart, this); 
        
        

        //Keyboard movement borrowed from Basic Movement example in Phasor
        cursors = game.input.keyboard.createCursorKeys();
        
        gameActive = setInterval(moveHand, 1000);
        
        	
        

        

    }
    
    //change hands location based on heart and don't allow to go out of window
    function moveHand()
    {
    	//end game if heart gets to bottom of window
    	if(heart.y >= 630)
		{
			stopHeart();
		}
		else
		{    	
			var newRandomX = game.rnd.integerInRange(-100, 200); 
			while(newRandomX < 100 && newRandomX > -50)
				{
					newRandomX = game.rnd.integerInRange(-200, 200); 
				}
			var newRandomY = game.rnd.integerInRange(100, 200); 

			if((heart.body.y + newRandomY) <= 675 && (heart.body.x + newRandomX) <= 450 && (heart.body.x + newRandomX) >= 50)
			{
				hand.body.x = heart.body.x + newRandomX; 
				hand.body.y = heart.body.y + newRandomY;
				console.log(hand.y)
			}


		}



    }
    
    
    //end game if target hit, display message
    function hitTarget(body1, body2)
    {

    	if(target.alive)
    	{
    		targetAudio.play();
    		target.kill();
    		hand.kill();
    		heart.kill(); 
    		var newHeart = game.add.sprite(235, 520, 'heart');
    		var winText = game.add.text(game.world.centerX, (game.world.centerY-100), "Heart transplant successful! Congratulations ^ ^", { font: "30px Arial", fill: "#ffffff", align: "center"}); 
    		winText.anchor.setTo(0.5, 0.5); 
    		clearInterval(gameActive); 
    		
    	}
	}
	
	//end game if hand hit, display message
	function stopHeart(body1, body2)
	{
		captureAudio.play();
		heart.kill(); 
		hand.kill();
		var loseText = game.add.text(game.world.centerX, (game.world.centerY-100), "Heart has been stolen, oh nooo ): ", { font: "15px Synchro LET", fill: "#ffffff", align: "center"}); 
		loseText.anchor.setTo(0.5, 0.5); 
		clearInterval(gameActive);
	}
    
	
	//Keyboard movement borrowed from Basic Movement example in Phasor
    function update() 
    {
    	if(target.alive)
    	{
    		heart.body.setZeroVelocity();
    		heart.body.velocity.y = 60; 

    		if(cursors.left.isDown)
    		{
				heart.body.moveLeft(300); 
				heart.body.velocity.y = 60; 
	
			}
			
			else if (cursors.right.isDown)
			{
				heart.body.moveRight(300);
				heart.body.velocity.y = 60; 
	
			}
		}	
    }
};

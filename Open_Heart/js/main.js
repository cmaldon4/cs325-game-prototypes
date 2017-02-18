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
    
    function create() {
    	bgAudio = game.add.audio('bgAudio');
    	bgAudio.play();
    	//game.physics.startSystem(Phaser.Physics.ARCADE);
    	
    	/*hand = game.add.group(); 
    	
    	hand.enableBody = true; 
    	hand.physicsBodyType = Phaser.Physics.ARCADE; 
    	hand.setAll('checkWorldBounds', true); */
    	
        game.add.image(0, 0, 'background'); 

        
        captureAudio = game.add.audio('captureAudio');
        targetAudio = game.add.audio('targetAudio'); 

        
        
        //Physics initation
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.defaultRestitution = 0.8; 
        
        var targetCollisionGroup = game.physics.p2.createCollisionGroup();
        var heartCollisionGroup = game.physics.p2.createCollisionGroup();
        var handCollisionGroup = game.physics.p2.createCollisionGroup();
        game.physics.p2.updateBoundsCollisionGroup();
        
        
        
        //set target 
        
        var targets = game.add.group();
        targets.enableBody = true; 
        targets.physicsBodyType = Phaser.Physics.P2JS;
        target = targets.create(290, 583, 'target'); 
        //target = game.add.sprite(290, 583, 'target');
        game.physics.p2.enable(target);
        //target = game.add.sprite(290, 583, 'target'); 
        //game.physics.p2.enable(target, false);
        target.body.setCircle(20);

        target.body.fixedRotation = true; 
        target.body.setCollisionGroup(targetCollisionGroup);
        target.body.collides(heartCollisionGroup, hitTarget, this);
        
        
        heart = game.add.sprite(0, 0, 'heart');
        game.physics.p2.enable(heart);
        heart.body.clearShapes();
        heart.body.loadPolygon('physicsData', 'heart'); 
        heart.body.setZeroDamping(); 
        heart.body.fixedRotation = true; 
        heart.body.setCollisionGroup(heartCollisionGroup);
        heart.body.collides([handCollisionGroup, targetCollisionGroup]);


        
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.physics.arcade.gravity.y = 50; 
        //game.physics.arcade.enable(heart);

        //heart.velocity.y = 200; 
        //heart.body.velocity.setTo(200, 200);
        
        hand = game.add.sprite(290, (game.world.randomY + heart.body.y), 'hand');
        game.physics.p2.enable(hand); 
        hand.body.clearShapes();
        hand.body.loadPolygon('physicsData', 'heart');
        hand.body.setZeroDamping(); 
        hand.body.fixedRotation = true; 
        hand.body.setCollisionGroup(handCollisionGroup); 
        hand.body.collides(heartCollisionGroup, stopHeart, this); 
        
        //hand.alpha = 0; 
        

        
        cursors = game.input.keyboard.createCursorKeys();
        

        

    }
    
    function hitTarget(body1, body2)
    {

    	if(target.alive)
    	{
    		targetAudio.play();
    		target.kill();
    		heart.kill(); 
    		var newHeart = game.add.sprite(235, 520, 'heart');
    		var winText = game.add.text(game.world.centerX, (game.world.centerY-100), "Heart transplant successful! Congratulations ^ ^", { font: "15px Synchro LET", fill: "#ffffff", align: "center"}); 
    		winText.anchor.setTo(0.5, 0.5); 
    		
    	}
	}
	
	function stopHeart(body1, body2)
	{
		captureAudio.play();
		heart.kill(); 
		hand.kill();
		var loseText = game.add.text(game.world.centerX, (game.world.centerY-100), "Heart has been stolen, oh nooo ): ", { font: "15px Synchro LET", fill: "#ffffff", align: "center"}); 
    		loseText.anchor.setTo(0.5, 0.5); 
	}
    
    function update() 
    {

    	if(target.alive)
    	{
    		heart.body.setZeroVelocity();
    		heart.body.velocity.y = 80; 

    		if(cursors.left.isDown)
    		{
				heart.body.moveLeft(300); 
				heart.body.velocity.y = 80; 
	
			}
			
			else if (cursors.right.isDown)
			{
				heart.body.moveRight(300);
				heart.body.velocity.y = 80; 
	
			}
		}
		else
		{
			//heart.setZeroVelocity();
		}
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    }
};

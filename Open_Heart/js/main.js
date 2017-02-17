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
        game.load.image( 'background', 'assets/background.png' );
        game.load.image( 'heart', 'assets/heart.png');
        game.load.image( 'hand', 'assets/NurseHand.png');
       
    }
    
    var background;
    var heart; 
    var hand; 
    var cursors; 
    
    function create() {
    	//game.physics.startSystem(Phaser.Physics.ARCADE);
    	
    	/*hand = game.add.group(); 
    	
    	hand.enableBody = true; 
    	hand.physicsBodyType = Phaser.Physics.ARCADE; 
    	hand.setAll('checkWorldBounds', true); */
    	
        //background = game.add.sprite( 0, 0, 'background' );
        game.add.image(0, 0, 'background'); 
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.defaultRestitution = 0.8; 
        heart = game.add.sprite(0, 0, 'heart');
        game.physics.p2.enable(heart);
        heart.body.setZeroDamping(); 
        heart.body.fixedRotation = true; 

        
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.physics.arcade.gravity.y = 50; 
        //game.physics.arcade.enable(heart);

        //heart.velocity.y = 200; 
        //heart.body.velocity.setTo(200, 200);
        //hand = game.add.sprite(200, 200, 'hand');
        //hand.alpha = 0; 
        

        
        cursors = game.input.keyboard.createCursorKeys();
        

        

    }
    
    function update() 
    {

    	
    	heart.body.setZeroVelocity();
    	heart.body.velocity.y = 40; 

    	if(cursors.left.isDown)
    	{
    		heart.body.moveLeft(400); 
    		heart.body.velocity.y = 40; 

    	}
    	
    	else if (cursors.right.isDown)
    	{
    		heart.body.moveRight(400);
    		heart.body.velocity.y = 40; 

    	}
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    }
};

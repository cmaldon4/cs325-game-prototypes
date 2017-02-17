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
    var leftKey; 
    var rightKey; 
    var downKey; 
    
    function create() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);
    	
    	hand = game.add.group(); 
    	
    	hand.enableBody = true; 
    	hand.physicsBodyType = Phaser.Physics.ARCADE; 
    	hand.setAll('checkWorldBounds', true); 
    	
        // Create a sprite at the center of the screen using the 'logo' image.
        background = game.add.sprite( 0, 0, 'background' );
        heart = game.add.sprite(0, 0, 'heart');
        //hand = game.add.sprite(200, 200, 'hand');
        //hand.alpha = 0; 
        
        game.physics.enable(heart, Phaser.Physics.ARCADE);
        
        this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.Right, Phaser.Keyboard.Down ]);
        
        

        

    }
    
    function update() 
    {
    	heart.body.velocity.x = 0;
    	heart.body.velocity.y = 0;
    	
    	if (this.leftKey.isDown)
    	{
    		heart.body.velocity.x = -200; 
    	}
    	
    	if (this.rightKey.isDown)
    	{
    		heart.body.velocity.x = 200;
    	}
    	
    	if (this.downKey.isDown)
    	{
    	}

    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    }
};

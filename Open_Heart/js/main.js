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
       
    }
    
    var background;
    var cursor; 
    
    function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
        background = game.add.sprite( 0, 0, 'background' );
        cursor = game.add.sprite(0, 0, 'heart');
        game.physics.enable(cursor, Phaser.Physics.ARCADE);

    }
    
    function update() 
    {
    if(game.input.mousePointer.isUp)
    {
    	game.physics.arcade.moveToPointer(cursor, 400);
    	
    	if(Phaser.Rectangle.contains(cursor.body, game.input.x, game.input.y))
    	{
    		cursor.body.velocity.setTo(0, 0);
    	}
    	else
    	{
    		cursor.body.velocity.setTo(0, 0);
    	}
    }
    	

    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    }
};

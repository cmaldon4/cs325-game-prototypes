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
        game.load.spritesheet( 'char', 'assets/tempnewchar.png', 166, 159); 
        game.load.image( 'heart', 'assets/heart.png'); 
        game.load.image('alert', 'assets/alert.png');
    }
    
    var background, character;
    
    function create() 
    {
    	//in right direction, x = 665 is limit, in left x = 705
        background = game.add.sprite( 0, 0, 'background' );
        character = game.add.sprite(705, 227, 'char'); 
        character.frame = 4;
        character.animations.add('left', [4, 0, 3, 5, 1, 2], 5, true); 
        character.animations.add('right', [7, 11, 8, 6, 10, 9], 5, true); 

        character.play('left'); 
    }
    
    function update() 
    {

    }
};

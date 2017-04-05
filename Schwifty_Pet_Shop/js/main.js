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
    
    var game = new Phaser.Game( 1000, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    var background, animcat, animdog, animpig, animfox, animredpanda, animpanda, animham, animturtle, animbunny; 
    var chibi1; 
    function preload() 
    {
    	game.load.image('background', 'assets/background.png');
    	
    	game.load.spritesheet('animpig', 'assets/animpig.png', 91.3, 70); 
        game.load.spritesheet('animdog', 'assets/animdog.png', 82, 65); 
        game.load.spritesheet('animcat', 'assets/animcat.png', 111, 80); 
        game.load.spritesheet('animturtle', 'assets/animturtle.png', 90, 54);
        game.load.spritesheet('animfox', 'assets/animfox.png', 83.7, 80);  
        game.load.spritesheet('animham', 'assets/animham.png', 59, 60); 
        game.load.spritesheet('animredpanda', 'assets/animredpanda.png', 84, 92); 
        game.load.spritesheet('animpanda', 'assets/animpanda.png', 90, 90); 
        game.load.spritesheet('animbunny', 'assets/animbunny.png', 50, 50);
        game.load.spritesheet('animcat', 'assets/animcat.png', 100, 105); 
        //game.load.image('chibi1', 'assets/chibi1.png'); 
    }
    
    
    function create() 
    {
    	background = game.add.sprite(0, 0, 'background');
    	//animcat = game.add.sprite(200, 200, 'animcat'); 
    	//chibi1 = game.add.sprite(300, 300, 'chibi1'); 
    	animpig = game.add.sprite(230, 108, 'animpig');
    	animpig.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 8, true); 
    	animpig.frame = 1; 
    	animpig.animations.play('constant'); 
    	
    	animdog = game.add.sprite(240, 225, 'animdog');
    	animdog.animations.add('constant', [1, 2, 3, 4], 12, true); 
    	animdog.frame = 1; 
    	animdog.animations.play('constant');
    	
    	animturtle = game.add.sprite(235, 355, 'animturtle'); 
    	animturtle.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 8, true); 
    	animturtle.frame = 1; 
    	animturtle.animations.play('constant');
    	
    	animfox = game.add.sprite(355, 333, 'animfox');
    	animfox.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 18, true);
    	animfox.frame = 1;
    	animfox.animations.play('constant');
    	
    	animham = game.add.sprite(145, 125, 'animham');
    	animham.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12, true);
    	animham.frame = 1; 
    	animham.animations.play('constant');
    	
    	animredpanda = game.add.sprite(357, 200, 'animredpanda');
    	animredpanda.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8], 4, true);
    	animredpanda.frame = 1; 
    	animredpanda.animations.play('constant');
    	
    	animpanda = game.add.sprite(135, 325, 'animpanda');
    	animpanda.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 8, true);
    	animpanda.frame = 1; 
    	animpanda.animations.play('constant');
 
    	animcat = game.add.sprite(330, 30, 'animcat'); 
    	animcat.animations.add('constant', [1, 2, 3], 12, true); 
    	animcat.frame = 1; 
    	animcat.animations.play('constant'); 
    	
    	animbunny = game.add.sprite(145, 240, 'animbunny'); 
    	animbunny.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 10, true); 
    	animbunny.frame = 1; 
    	animbunny.animations.play('constant'); 
    }
    
    function update() 
    {

    }
};

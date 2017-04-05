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
    
    var background, animatedcat, animecat, animdog, animpig, animfox, animredpanda, animpanda, animham, animturtle, animbunny; 
    var cagetopleft, cagetopmiddle, cagetopright, cagemiddleleft, cagemiddlemiddle, cagemiddleright, cagebottomleft, cagebottommiddle, cagebottomright; 
    var chibi1, chibi2, chibi3, chibi4, chibi5, chibi6, chibi7, chibi8, chibi9, chibi10; 
    var bubble, cat, dog, pig, hamster, turtle, fox, redpanda, panda, bunny; 
    function preload() 
    {
    	game.load.image('background', 'assets/background.png');
    	
    	
    	//loading gif animals in cages
    	game.load.spritesheet('animpig', 'assets/animpig.png', 91.3, 70); 
        game.load.spritesheet('animdog', 'assets/animedog.png', 105, 66); 
        game.load.spritesheet('animcat', 'assets/animcat.png', 111, 80); 
        game.load.spritesheet('animturtle', 'assets/animturtle.png', 90, 54);
        game.load.spritesheet('animfox', 'assets/animfox.png', 83.7, 80);  
        game.load.spritesheet('animham', 'assets/animham.png', 59, 60); 
        game.load.spritesheet('animredpanda', 'assets/animredpanda.png', 84, 92); 
        game.load.spritesheet('animpanda', 'assets/animpanda.png', 90, 90); 
        game.load.spritesheet('animbunny', 'assets/animbunny.png', 50, 50);
        game.load.spritesheet('animatedcat', 'assets/animatedcat.png', 243, 123); 
        game.load.spritesheet('animecat', 'assets/animecat.png', 150, 150);
        
        //loading cage doors
        game.load.image('cagetop', 'assets/cagetop.png');
        game.load.image('cagemiddle', 'assets/cagemiddle.png');
        game.load.image('cagebottom', 'assets/cagebottom.png');
        
        
        //loading chibis
        game.load.image('chibi1', 'assets/chibi1.png'); 
        game.load.image('chibi2', 'assets/chibi2.png'); 
        game.load.image('chibi3', 'assets/chibi3.png'); 
        game.load.image('chibi4', 'assets/chibi4.png'); 
        game.load.image('chibi5', 'assets/chibi5.png'); 
        game.load.image('chibi6', 'assets/chibi6.png'); 
        game.load.image('chibi7', 'assets/chibi7.png'); 
        game.load.image('chibi8', 'assets/chibi8.png'); 
        game.load.image('chibi9', 'assets/chibi9.png'); 
        game.load.image('chibi10', 'assets/chibi10.png'); 

        //loading customer request & images
        game.load.image('bubble', 'assets/speechbubble.png');
        game.load.image('cat', 'assets/cat.png');
        game.load.image('dog', 'assets/dog.png');
        game.load.image('pig', 'assets/pig.png');
        game.load.image('hamster', 'assets/hamster.png');
        game.load.image('turtle', 'assets/turtle.png');
        game.load.image('fox', 'assets/fox.png');
        game.load.image('panda', 'assets/panda.png');
        game.load.image('redpanda', 'assets/redpanda.png');
        game.load.image('bunny', 'assets/bunny.png');
   
    
    
    
    
    
    
    
    
    
    
    }
    
    
    function create() 
    {
    	background = game.add.sprite(0, 0, 'background');
    	
    	//Loading the animal gifs that go behind the cages. 
    	animpig = game.add.sprite(235, 108, 'animpig');
    	animpig.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 8, true); 
    	animpig.frame = 1; 
    	animpig.animations.play('constant'); 
    	
    	animdog = game.add.sprite(235, 225, 'animdog');
    	animdog.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, true); 
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
 
    	animatedcat = game.add.sprite(340, 56, 'animatedcat'); 
    	animatedcat.animations.add('constant', [1, 2, 3], 2, true); 
    	animatedcat.frame = 1; 
    	animatedcat.animations.play('constant'); 
    	
    	animbunny = game.add.sprite(145, 240, 'animbunny'); 
    	animbunny.animations.add('constant', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 10, true); 
    	animbunny.frame = 1; 
    	animbunny.animations.play('constant'); 
    	
    	//attaching cages to variables
    	cagetopleft = game.add.sprite(117, 100, 'cagetop');
    	cagetopmiddle = game.add.sprite(229, 100, 'cagetop'); 
    	cagetopright = game.add.sprite(344, 100, 'cagetop'); 
    	cagemiddleleft = game.add.sprite(116, 215, 'cagemiddle'); 
        cagemiddlemiddle = game.add.sprite(228, 215, 'cagemiddle'); 
    	cagemiddleright = game.add.sprite(343, 215, 'cagemiddle'); 
    	cagebottomleft = game.add.sprite(118, 327, 'cagebottom'); 
    	cagebottommiddle = game.add.sprite(230, 327, 'cagebottom'); 
    	cagebottomright = game.add.sprite(347, 327, 'cagebottom'); 

    	//creating chibis
    	chibi1 = game.add.sprite(530, 120, 'chibi1'); 
    	//chibi2 = game.add.sprite(545, 120, 'chibi2'); 
    	//chibi3 = game.add.sprite(545, 120, 'chibi3');     	
    	//chibi4 = game.add.sprite(520, 140, 'chibi4'); 
    	//chibi5 = game.add.sprite(540, 145, 'chibi5'); 
    	//chibi6 = game.add.sprite(545, 145, 'chibi6'); 
    	//chibi7 = game.add.sprite(510, 120, 'chibi7'); 
    	//chibi8 = game.add.sprite(530, 165, 'chibi8'); 
    	//chibi9 = game.add.sprite(525, 145, 'chibi9'); 
    	//chibi10 = game.add.sprite(480, 120, 'chibi10'); 
    	
    	//creating requests
    	bubble = game.add.sprite(407, 70, 'bubble'); 
    	//cat = game.add.sprite(460, 110, 'cat'); 
    	//dog = game.add.sprite(455, 80, 'dog');
    	//hamster = game.add.sprite(475, 120, 'hamster'); 
    	//pig = game.add.sprite(470, 120, 'pig'); 
    	//bunny = game.add.sprite(467, 120, 'bunny'); 
    	//turtle = game.add.sprite(460, 125, 'turtle'); 
    	//fox = game.add.sprite(478, 110, 'fox'); 
    	//panda = game.add.sprite(475, 110, 'panda');
    	redpanda = game.add.sprite(473, 110, 'redpanda');
    	
    	
    	
    	
    }
    
    function update() 
    {

    }
};
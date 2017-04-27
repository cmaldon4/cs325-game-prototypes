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
    
    var game = new Phaser.Game( 1200, 1270, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    var cursors, page1, textbox, livesText, loseText;
    var counter = 1; 
    var life; 
    var lives = 3;
    var countLives = 0; 
    var page = [false, false, false, false, false, false, true, true, true, true, false, true, true, true, true, true, true, false, false, true, false, true, true, false, false, true, true, true, false, true, false, false, false, false, false, false, true, true, true, true, false, true, false, false, false, false, false, false, false, true, true] 
    var whichBox, tempb1, tempb2, tempb3, messageButton1, messageButton2, messageButton3, rate1, rate2, rate3, tween1, tween2, tween3; 
    var message6 = ["oww!", "cat!", "ow..."];
    var message7 = ["are lots of", "I was kinda", "the world."];
    var message8;
    var message9; 
    var message11; 
    var message12; 
    var message13; 
    var message14; 
    var message15; 
    var message16; 
    var message19; 
    var message21; 
    var message22; 
    var message25; 
    var message26; 
    var message27; 
    var message29; 
    var message36; 
    var message37; 
    var message38; 
    var message39; 
    var message41; 
    var message49;
    var message50; 
    var messages = [false, false, false, false, false, false, message6, message7, message8, message9, false, message11, message12, message13, message14, message15, message16, false, false, message19, false, message21, message22, false, false, message25, message26, message27, false, message29, false, false, false, false, false, false, message36, message37, message38, message39, false, message41, false, false, false, false, false, false, false, message49, message50];
    var bmd, match;
    var word = "";
    var x = 815; 
    var nextPage = true; 
    
    function preload() 
    {

        game.load.image( 'page1', 'assets/page1.jpg' );
        game.load.image( 'page2', 'assets/page2.jpg' );
        game.load.image( 'page3', 'assets/page3.jpg' );
        game.load.image( 'page4', 'assets/page4.jpg' );
        game.load.image( 'page5', 'assets/page5.jpg' );
        game.load.image( 'page6', 'assets/page6.jpg' );
        game.load.image( 'page7', 'assets/page7.jpg' );
        game.load.image( 'page8', 'assets/page8.jpg' );
        game.load.image( 'page9', 'assets/page9.jpg' );
        game.load.image( 'page10', 'assets/page10.jpg' );
        game.load.image( 'page11', 'assets/page11.jpg' );
        game.load.image( 'page12', 'assets/page12.jpg' );
        game.load.image( 'page13', 'assets/page13.jpg' );
        game.load.image( 'page14', 'assets/page14.jpg' );
        game.load.image( 'page15', 'assets/page15.jpg' );
        game.load.image( 'page16', 'assets/page16.jpg' );
        game.load.image( 'page17', 'assets/page17.jpg' );
        game.load.image( 'page18', 'assets/page18.jpg' );
        game.load.image( 'page19', 'assets/page19.jpg' );
        game.load.image( 'page20', 'assets/page20.jpg' );
        game.load.image( 'page21', 'assets/page21.jpg' );
        game.load.image( 'page22', 'assets/page22.jpg' );
        game.load.image( 'page23', 'assets/page23.jpg' );
        game.load.image( 'page24', 'assets/page24.jpg' );
        game.load.image( 'page25', 'assets/page25.jpg' );
        game.load.image( 'page26', 'assets/page26.jpg' );
        game.load.image( 'page27', 'assets/page27.jpg' );
        game.load.image( 'page28', 'assets/page28.jpg' );
        game.load.image( 'page29', 'assets/page29.jpg' );
        game.load.image( 'page30', 'assets/page30.jpg' );
        game.load.image( 'page31', 'assets/page31.jpg' );
        game.load.image( 'page32', 'assets/page32.jpg' );
        game.load.image( 'page33', 'assets/page33.jpg' );
        game.load.image( 'page34', 'assets/page34.jpg' );
        game.load.image( 'page35', 'assets/page35.jpg' );
        game.load.image( 'page36', 'assets/page36.jpg' );
        game.load.image( 'page37', 'assets/page37.jpg' );
        game.load.image( 'page38', 'assets/page38.jpg' );
        game.load.image( 'page39', 'assets/page39.jpg' );
        game.load.image( 'page40', 'assets/page40.jpg' );
        game.load.image( 'page41', 'assets/page41.jpg' );
        game.load.image( 'page42', 'assets/page42.jpg' );
        game.load.image( 'page43', 'assets/page43.jpg' );
        game.load.image( 'page44', 'assets/page44.jpg' );
        game.load.image( 'page45', 'assets/page45.jpg' );
        game.load.image( 'page46', 'assets/page46.jpg' );
        game.load.image( 'page47', 'assets/page47.jpg' );
        game.load.image( 'page48', 'assets/page48.jpg' );
        game.load.image( 'page49', 'assets/page49.jpg' );
        game.load.image( 'page50', 'assets/page50.jpg' );
        game.load.image( 'button', 'assets/button.png'); 
        game.load.image( 'textbox', 'assets/textbox.png'); 

    }
    
    function changePage()
    {
    	if(counter <= 49 && nextPage == true)
    	{
    		bmd.cls();
    		x = 815; 
 			counter++;
			page1 = game.add.sprite(0, 0, 'page' + counter);     		
			
			if(page[counter] == true)
    		{
    			nextPage = false; 
				game.time.events.add(Phaser.Timer.SECOND * 2, fadeTexts);        					
    		}

 
    	}
    	
    }
    
    function fadeTexts()
    {
    	
    	rate1 = game.rnd.integerInRange(3000, 8000); 
    	rate2 = game.rnd.integerInRange(3000, 8000); 
    	rate3 = game.rnd.integerInRange(3000, 8000); 

    	if(counter == 6)
    	{
    		messageButton1 = game.add.sprite(330, 135, 'button'); 
    		messageButton1.width = 80; 
    		messageButton1.height = 30; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(330, 135, 'button'); 
    		tempb1.width = 80; 
    		tempb1.height = 30; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(730, 120, 'button'); 
    		messageButton2.width = 60; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(730, 120, 'button'); 
    		tempb2.width = 60; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(725, 400, 'button'); 
    		messageButton3.width = 40; 
    		messageButton3.height = 30; 
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(725, 400, 'button'); 
    		tempb3.width = 40; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}
   	
      	
    }
    
    function chooseText(num)
    {
    	whichBox = num - 1; 
    	if(num == 1)
    	{
    		tween2.stop(); 
    		tween3.stop();     		    		
    		messageButton2.alpha = 0; 
    		messageButton3.alpha = 0; 
    		
    	}
    	if(num == 2)
    	{
    		tween1.stop();
    		tween3.stop();
    		messageButton1.alpha = 0; 
    		messageButton3.alpha = 0; 
    		
    	}
    	if(num == 3)
    	{
    		tween1.stop();
    		tween2.stop();
    		messageButton1.alpha = 0; 
    		messageButton2.alpha = 0; 
    		
    	}
    }
    
    function keyPress(char)
    {
    	bmd.context.fillText(char, x, 320); 
    	x += bmd.context.measureText(char).width; 
    	word += char; 
    	match = messages[counter][whichBox]
    	if(word.toUpperCase() === match.toUpperCase())
    	{
    		tween1.stop();
    		tween2.stop();
    		tween3.stop();
    		if(messageButton1.alpha != 1 && messageButton2.alpha != 1 && messageButton3.alpha != 1)
    		{
    			messageButton1.alpha = 0; 
    			messageButton2.alpha = 0; 
    			messageButton3.alpha = 0; 
    			bmd.cls();
    			x = 815; 
    			word = "CORRECT!"; 		    			
    			bmd.context.fillText(word, x, 320);
    		}
    		nextPage = true;
    	}
    	else if(word.length > match.length)
    	{
    		console.log(word.length);
    		console.log(match.length);       		
    		bmd.cls();
    		word = ""; 
    		x = 815; 
    		bmd.context.fillText(word, x, 320); 
    	}
    	
 	
    	
    	
    }
    function create() 
    {
    	
    	game.stage.backgroundColor = 0xffffff; 
    	textbox = game.add.sprite(800, 250, 'textbox');    	
    	page1 = game.add.sprite(0, 0, 'page1');
    	

    	cursors = game.input.keyboard.createCursorKeys();
    	//cursors.left.onDown.add(function() { changePage();});
    	cursors.right.onDown.add(function() { changePage();});
    	
    	/*bmd = game.make.bitmapData(1200, 250); 
    	bmd.context.font = '64px Covered By Your Grace';
    	bmd.context.fillStyle = '#ffffff';
    	bmd.context.fillText("Hello", 810, 250); 
    	bmd.addToWorld();    */
		bmd = game.make.bitmapData(1200, 1270);
		bmd.context.font = '30px Covered By Your Grace';
		bmd.context.fillStyle = '#000000';
		bmd.context.fillText("", 815, 320);
		bmd.addToWorld();    
		game.input.keyboard.addCallbacks(this, null, null, keyPress);
		livesText = game.add.text(900, 0, "LIVES: " + lives, { font: "65px Covered By Your Grace", fill: "#00000", align: "center"}); 
		
   		messageButton1 = game.add.sprite(330, 135, 'button'); 
   		messageButton2 = game.add.sprite(730, 120, 'button'); 
    	messageButton3 = game.add.sprite(725, 400, 'button'); 
    	messageButton1.alpha = 0; 
    	messageButton2.alpha = 0; 
    	messageButton3.alpha = 0; 
		loseText = game.add.text(830, 60, "", { font: "30px Covered By Your Grace", fill: "#00000", align: "center"}); 
    	


    }
    
    function update() 
    {
    	this.input.keyboard.removeKeyCapture(Phaser.Keyboard.BACKSPACE);    	
    	if(messageButton1.alpha == 1 || messageButton2.alpha == 1 || messageButton3.alpha == 1)
    	{
    		lives--; 
    		livesText.text = "LIVES: " + lives; 
    		messageButton1.alpha = 0; 
    		messageButton2.alpha = 0; 
    		messageButton3.alpha = 0; 
    		if(messageButton1.alpha == 0 && messageButton2.alpha == 0 && messageButton3.alpha == 0)
    		{
    			nextPage = true; 			
    		}
    	}    
    	if(lives <= 0)
    	{
    		nextPage = false; 
   		
			loseText.text = "THE WORM HAS CONSUMED\n TOO MUCH OF THE BOOK . . . \nGAME OVER . . .";
    		
    	}
    }
};

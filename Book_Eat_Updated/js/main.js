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
    
    var cursors, page1, textbox, livesText, loseText, spaceBar;
    var spaceTrue = false; 
    var bgAudio, fade, success, wrong, life, click, audioActive; 
    var apos;
    var spaceChar = " "; 
    var counter = 1; 
    var life; 
    var lives = 3;
    var countLives = 0; 
    var page = [false, false, false, false, false, false, true, true, true, true, false, true, true, true, true, true, true, false, false, true, false, true, true, false, false, true, true, true, false, true, false, false, false, false, false, false, true, true, true, true, false, true, false, false, false, false, false, false, false, true, true] 
    var whichBox, tempb1, tempb2, tempb3, messageButton1, messageButton2, messageButton3, rate1, rate2, rate3, tween1, tween2, tween3; 
    var message6 = ["oww!", "cat!", "ow..."];
    var message7 = ["are lots of", "I was kinda", "the world."];
    var message8 = ["turn the names.", "together, and", "the spirit..."];
    var message9 = ["great!", "good!", "you."];  
    var message11 = ["he was sealed", "set him free...", "when i die."]; 
    var message12 = ["stuck to it", "it's rice.", "rice?"]; 
    var message13 = ["forget about it.", "heart-less are you?!", "stuck to."];  
    var message14 = ["are you ok?", "kind of you.", "i'll take it."]; 
    var message15 = ["he's a god?", "stupid reiko...", "down here."]; 
    var message16 = ["i already have one.", "and flowers...?", "here to pray."]; 
    var message19 = ["he's sleeping again.", "get much sleep...", "what's that?"]; 
    var message21 = ["good.", "little.", "eh?!"]; 
    var message22 = ["ha ha,", "think...", "that I"]; 
    var message25 = ["a bad dream.", "on me!", "human's heart..."];
    var message26 = ["bulb-boy", "nozuka mountain", "a round mirror."]; 
    var message27 = ["will get away...", "care of it?", "spirits, too..."];  
    var message29 = ["hm?", "!!!", "This..."]; 
    var message36 = ["I managed", "names, but...", "counscious-ness."]; 
    var message37 = ["for it, though.", "better off as well.", "then I'm glad."];
    var message38 = ["huh?", "?!", "oh?"]; 
    var message39 = ["believe in you!", "matter what!", "you are my friend."];
    var message41 = ["you, you know.", "heard your voice.", "she heard me."]; 
    var message49 = ["have a fever!", "there's someone I", "today is resting."]; 
    var message50 = ["the", "continue", "I suppose"];  
    var messages = [false, false, false, false, false, false, message6, message7, message8, message9, false, message11, message12, message13, message14, message15, message16, false, false, message19, false, message21, message22, false, false, message25, message26, message27, false, message29, false, false, false, false, false, false, message36, message37, message38, message39, false, message41, false, false, false, false, false, false, false, message49, message50];
    var bmd, match;
    var word = "";
    var x = 815; 
    var nextPage = true; 
    var easy, easytext, medium, mediumtext, hard, hardtext; 
    var range1, range2; 
    
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
        game.load.image( 'blrect', 'assets/blrect.png'); 
        
        
        game.load.audio('bgAudio', ['assets/bgaudio.mp3', 'assets/bgaudio.ogg']);
        game.load.audio('fade', ['assets/fade.mp3', 'assets/fade.ogg']);
        game.load.audio('wrong', ['assets/wrong.mp3', 'assets/wrong.ogg']);
        game.load.audio('success', ['assets/success.mp3', 'assets/success.ogg']);
        game.load.audio('life', ['assets/life.mp3', 'assets/life.ogg']);
        game.load.audio('click', ['assets/click.mp3', 'assets/click.ogg']);
        

    }
    
    function changePage()
    {
    	if(counter <= 49 && nextPage == true)
    	{
    		word = ""; 
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
    
	function updateAudio()
	{
		if(!bgAudio.isPlaying)
		{
			bgAudio.play(); 
		}
	}    
    
    function fadeTexts()
    {
    	fade.play();
    	rate1 = game.rnd.integerInRange(range1, range2); 
    	rate2 = game.rnd.integerInRange(range1, range2); 
    	rate3 = game.rnd.integerInRange(range1, range2); 

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
    	if(counter == 7)
    	{
    		messageButton1 = game.add.sprite(635, 100, 'button'); 
    		messageButton1.width = 80; 
    		messageButton1.height = 30; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(635, 100, 'button'); 
    		tempb1.width = 80; 
    		tempb1.height = 30; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(537, 170, 'button'); 
    		messageButton2.width = 80; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(537, 170, 'button'); 
    		tempb2.width = 80; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(510, 385, 'button'); 
    		messageButton3.width = 80; 
    		messageButton3.height = 30; 
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(510, 385, 'button'); 
    		tempb3.width = 80; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}    	
    	if(counter == 8)
    	{
    		messageButton1 = game.add.sprite(725, 135, 'button'); 
    		messageButton1.width = 45; 
    		messageButton1.height = 100; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(725, 135, 'button'); 
    		tempb1.width = 45; 
    		tempb1.height = 100; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(320, 178, 'button'); 
    		messageButton2.width = 80; 
    		messageButton2.height = 19; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(320, 178, 'button'); 
    		tempb2.width = 80; 
    		tempb2.height = 19; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(70, 372, 'button'); 
    		messageButton3.width = 100; 
    		messageButton3.height = 30; 
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(70, 372, 'button'); 
    		tempb3.width = 100; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}    
    	if(counter == 9)
    	{
    		messageButton1 = game.add.sprite(690, 308, 'button'); 
    		messageButton1.width = 60; 
    		messageButton1.height = 20; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(690, 308, 'button'); 
    		tempb1.width = 60; 
    		tempb1.height = 20; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(470, 113, 'button'); 
    		messageButton2.width = 60; 
    		messageButton2.height = 19; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(470, 113, 'button'); 
    		tempb2.width = 60; 
    		tempb2.height = 19; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(205, 379, 'button'); 
    		messageButton3.width = 100; 
    		messageButton3.height = 30; 
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(205, 379, 'button'); 
    		tempb3.width = 100; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}        	
    	if(counter == 11)
    	{
    		messageButton1 = game.add.sprite(140, 145, 'button'); 
    		messageButton1.width = 150; 
    		messageButton1.height = 20; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(140, 145, 'button'); 
    		tempb1.width = 150; 
    		tempb1.height = 20; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(140, 212, 'button'); 
    		messageButton2.width = 150; 
    		messageButton2.height = 20; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(140, 212, 'button'); 
    		tempb2.width = 150; 
    		tempb2.height = 20; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(65, 273, 'button'); 
    		messageButton3.width = 100; 
    		messageButton3.height = 30; 
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(65, 273, 'button'); 
    		tempb3.width = 100; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}        	   	
    	if(counter == 12)
    	{
    		messageButton1 = game.add.sprite(670, 185, 'button'); 
    		messageButton1.width = 50; 
    		messageButton1.height = 32; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(670, 185, 'button'); 
    		tempb1.width = 50; 
    		tempb1.height = 32; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(50, 153, 'button'); 
    		messageButton2.width = 50; 
    		messageButton2.height = 40; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(50, 153, 'button'); 
    		tempb2.width = 50; 
    		tempb2.height = 40; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(50, 305, 'button'); 
    		messageButton3.width = 50; 
    		messageButton3.height = 40; 
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(50, 305, 'button'); 
    		tempb3.width = 50; 
    		tempb3.height = 40;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}  
    	if(counter == 13)
    	{
    		messageButton1 = game.add.sprite(700, 153, 'button'); 
    		messageButton1.width = 60; 
    		messageButton1.height = 32; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(700, 153, 'button'); 
    		tempb1.width = 60; 
    		tempb1.height = 32; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(640, 240, 'button'); 
    		messageButton2.width = 70; 
    		messageButton2.height = 50; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(640, 240, 'button'); 
    		tempb2.width = 70; 
    		tempb2.height = 50; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(377, 255, 'button'); 
    		messageButton3.width = 80; 
    		messageButton3.height = 40; 
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(377, 255, 'button'); 
    		tempb3.width = 80; 
    		tempb3.height = 40;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}    
    	if(counter == 14)
    	{
    		messageButton1 = game.add.sprite(675, 270, 'button'); 
    		messageButton1.width = 60; 
    		messageButton1.height = 55; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(675, 270, 'button'); 
    		tempb1.width = 60; 
    		tempb1.height = 55; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(420, 217, 'button'); 
    		messageButton2.width = 70; 
    		messageButton2.height = 50; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(420, 217, 'button'); 
    		tempb2.width = 70; 
    		tempb2.height = 50; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(35, 290, 'button'); 
    		messageButton3.width = 80; 
    		messageButton3.height = 45; 
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(35, 290, 'button'); 
    		tempb3.width = 80; 
    		tempb3.height = 45;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}  
    	if(counter == 15)
    	{
    		messageButton1 = game.add.sprite(400, 314, 'button'); 
    		messageButton1.width = 60; 
    		messageButton1.height = 32; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(400, 314, 'button'); 
    		tempb1.width = 60; 
    		tempb1.height = 32; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(70, 173, 'button'); 
    		messageButton2.width = 70; 
    		messageButton2.height = 50; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(70, 173, 'button'); 
    		tempb2.width = 70; 
    		tempb2.height = 50; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(70, 495, 'button'); 
    		messageButton3.width = 80; 
    		messageButton3.height = 30;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(70, 495, 'button'); 
    		tempb3.width = 80; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}   
    	if(counter == 16)
    	{
    		messageButton1 = game.add.sprite(585, 485, 'button'); 
    		messageButton1.width = 75; 
    		messageButton1.height = 32; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(585, 485, 'button'); 
    		tempb1.width = 75; 
    		tempb1.height = 32; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(300, 492, 'button'); 
    		messageButton2.width = 100; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(300, 492, 'button'); 
    		tempb2.width = 100; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(65, 494, 'button'); 
    		messageButton3.width = 80; 
    		messageButton3.height = 35;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(65, 494, 'button'); 
    		tempb3.width = 80; 
    		tempb3.height = 35;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}   
    	if(counter == 19)
    	{
    		messageButton1 = game.add.sprite(622, 260, 'button'); 
    		messageButton1.width = 50; 
    		messageButton1.height = 50; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(622, 260, 'button'); 
    		tempb1.width = 50; 
    		tempb1.height = 50; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(319, 460, 'button'); 
    		messageButton2.width = 100; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(319, 460, 'button'); 
    		tempb2.width = 100; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(65, 260, 'button'); 
    		messageButton3.width = 60; 
    		messageButton3.height = 50;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(65, 260, 'button'); 
    		tempb3.width = 60; 
    		tempb3.height = 50;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}   
    	if(counter == 21)
    	{
    		messageButton1 = game.add.sprite(615, 430, 'button'); 
    		messageButton1.width = 50; 
    		messageButton1.height = 20; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(615, 430, 'button'); 
    		tempb1.width = 50; 
    		tempb1.height = 20; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(415, 420, 'button'); 
    		messageButton2.width = 50; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(415, 420, 'button'); 
    		tempb2.width = 50; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(65, 400, 'button'); 
    		messageButton3.width = 60; 
    		messageButton3.height = 50;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(65, 400, 'button'); 
    		tempb3.width = 60; 
    		tempb3.height = 50;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}  
    	if(counter == 22)
    	{
    		messageButton1 = game.add.sprite(730, 130, 'button'); 
    		messageButton1.width = 50; 
    		messageButton1.height = 50; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(730, 130, 'button'); 
    		tempb1.width = 50; 
    		tempb1.height = 50; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(410, 337, 'button'); 
    		messageButton2.width = 50; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(410, 337, 'button'); 
    		tempb2.width = 50; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(130, 285, 'button'); 
    		messageButton3.width = 60; 
    		messageButton3.height = 30;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(130, 285, 'button'); 
    		tempb3.width = 60; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}     	
    	if(counter == 25)
    	{
    		messageButton1 = game.add.sprite(715, 322, 'button'); 
    		messageButton1.width = 50; 
    		messageButton1.height = 50; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(715, 322, 'button'); 
    		tempb1.width = 50; 
    		tempb1.height = 50; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(485, 292, 'button'); 
    		messageButton2.width = 50; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(485, 290, 'button'); 
    		tempb2.width = 50; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(260, 330, 'button'); 
    		messageButton3.width = 60; 
    		messageButton3.height = 30;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(260, 330, 'button'); 
    		tempb3.width = 60; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}     
    	if(counter == 26)
    	{
    		messageButton1 = game.add.sprite(660, 222, 'button'); 
    		messageButton1.width = 50; 
    		messageButton1.height = 50; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(660, 222, 'button'); 
    		tempb1.width = 50; 
    		tempb1.height = 50; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(85, 250, 'button'); 
    		messageButton2.width = 80; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(85, 250, 'button'); 
    		tempb2.width = 80; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(172, 495, 'button'); 
    		messageButton3.width = 60; 
    		messageButton3.height = 30;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(172, 495, 'button'); 
    		tempb3.width = 60; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	} 
    	if(counter == 27)
    	{
    		messageButton1 = game.add.sprite(675, 200, 'button'); 
    		messageButton1.width = 80; 
    		messageButton1.height = 50; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(675, 200, 'button'); 
    		tempb1.width = 80; 
    		tempb1.height = 50; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(575, 320, 'button'); 
    		messageButton2.width = 80; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(575, 320, 'button'); 
    		tempb2.width = 80; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(300, 315, 'button'); 
    		messageButton3.width = 60; 
    		messageButton3.height = 30;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(300, 315, 'button'); 
    		tempb3.width = 60; 
    		tempb3.height = 30;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}      
    	if(counter == 29)
    	{
    		messageButton1 = game.add.sprite(715, 190, 'button'); 
    		messageButton1.width = 50; 
    		messageButton1.height = 50; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(715, 190, 'button'); 
    		tempb1.width = 50; 
    		tempb1.height = 50; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(670, 420, 'button'); 
    		messageButton2.width = 70; 
    		messageButton2.height = 60; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(670, 420, 'button'); 
    		tempb2.width = 70; 
    		tempb2.height = 60; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(270, 225, 'button'); 
    		messageButton3.width = 80; 
    		messageButton3.height = 50;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(270, 225, 'button'); 
    		tempb3.width = 80; 
    		tempb3.height = 50;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}       
    	if(counter == 36)
    	{
    		messageButton1 = game.add.sprite(390, 140, 'button'); 
    		messageButton1.width = 70; 
    		messageButton1.height = 60; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(390, 140, 'button'); 
    		tempb1.width = 70; 
    		tempb1.height = 60; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(390, 290, 'button'); 
    		messageButton2.width = 70; 
    		messageButton2.height = 60; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(390, 290, 'button'); 
    		tempb2.width = 70; 
    		tempb2.height = 60; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(90, 300, 'button'); 
    		messageButton3.width = 90; 
    		messageButton3.height = 70;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(90, 300, 'button'); 
    		tempb3.width = 90; 
    		tempb3.height = 70;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}   
    	if(counter == 37)
    	{
    		messageButton1 = game.add.sprite(692, 195, 'button'); 
    		messageButton1.width = 70; 
    		messageButton1.height = 30; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(692, 195, 'button'); 
    		tempb1.width = 70; 
    		tempb1.height = 30; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(593, 465, 'button'); 
    		messageButton2.width = 80; 
    		messageButton2.height = 60; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(593, 465, 'button'); 
    		tempb2.width = 80; 
    		tempb2.height = 60; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(350, 190, 'button'); 
    		messageButton3.width = 70; 
    		messageButton3.height = 70;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(350, 190, 'button'); 
    		tempb3.width = 70; 
    		tempb3.height = 70;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}   
    	if(counter == 38)
    	{
    		messageButton1 = game.add.sprite(730, 130, 'button'); 
    		messageButton1.width = 40; 
    		messageButton1.height = 30; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(730, 130, 'button'); 
    		tempb1.width = 40; 
    		tempb1.height = 30; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(360, 40, 'button'); 
    		messageButton2.width = 45; 
    		messageButton2.height = 55; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(360, 40, 'button'); 
    		tempb2.width = 45; 
    		tempb2.height = 55; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(35, 230, 'button'); 
    		messageButton3.width = 30; 
    		messageButton3.height = 50;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(35, 230, 'button'); 
    		tempb3.width = 30; 
    		tempb3.height = 50;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}    
    	if(counter == 39)
    	{
    		messageButton1 = game.add.sprite(540, 135, 'button'); 
    		messageButton1.width = 80; 
    		messageButton1.height = 40; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(540, 135, 'button'); 
    		tempb1.width = 80; 
    		tempb1.height = 40; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(100, 310, 'button'); 
    		messageButton2.width = 70; 
    		messageButton2.height = 55; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(100, 310, 'button'); 
    		tempb2.width = 70; 
    		tempb2.height = 55; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(150, 530, 'button'); 
    		messageButton3.width = 70; 
    		messageButton3.height = 70;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(150, 530, 'button'); 
    		tempb3.width = 70; 
    		tempb3.height = 70;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}   
    	if(counter == 41)
    	{
    		messageButton1 = game.add.sprite(470, 252, 'button'); 
    		messageButton1.width = 60; 
    		messageButton1.height = 40; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(470, 252, 'button'); 
    		tempb1.width = 60; 
    		tempb1.height = 40; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(200, 305, 'button'); 
    		messageButton2.width = 70; 
    		messageButton2.height = 55; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(200, 305, 'button'); 
    		tempb2.width = 70; 
    		tempb2.height = 55; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(50, 170, 'button'); 
    		messageButton3.width = 70; 
    		messageButton3.height = 70;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(50, 170, 'button'); 
    		tempb3.width = 70; 
    		tempb3.height = 70;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}    
    	if(counter == 49)
    	{
    		messageButton1 = game.add.sprite(635, 238, 'button'); 
    		messageButton1.width = 60; 
    		messageButton1.height = 40; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(635, 238, 'button'); 
    		tempb1.width = 60; 
    		tempb1.height = 40; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(260, 330, 'button'); 
    		messageButton2.width = 80; 
    		messageButton2.height = 40; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(260, 330, 'button'); 
    		tempb2.width = 80; 
    		tempb2.height = 40; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(60, 367, 'button'); 
    		messageButton3.width = 80; 
    		messageButton3.height = 40;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(60, 367, 'button'); 
    		tempb3.width = 80; 
    		tempb3.height = 40;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}     
    	if(counter == 50)
    	{
    		messageButton1 = game.add.sprite(500, 138, 'button'); 
    		messageButton1.width = 60; 
    		messageButton1.height = 30; 
			messageButton1.alpha = 0; 
    		tempb1 = game.add.sprite(500, 138, 'button'); 
    		tempb1.width = 60; 
    		tempb1.height = 30; 
    		tempb1.alpha = 0; 
    		tempb1.inputEnabled = true;     		
    		tempb1.events.onInputDown.add(function() {chooseText(1);});	
			tween1 = game.add.tween(messageButton1).to( { alpha: 1 }, rate1, Phaser.Easing.Linear.None, true);	    		
 
    		messageButton2 = game.add.sprite(480, 195, 'button'); 
    		messageButton2.width = 80; 
    		messageButton2.height = 30; 
			messageButton2.alpha = 0; 
    		tempb2 = game.add.sprite(480, 195, 'button'); 
    		tempb2.width = 80; 
    		tempb2.height = 30; 	
    		tempb2.alpha = 0; 
 			tempb2.inputEnabled = true;    		
 			tempb2.events.onInputDown.add(function() {chooseText(2);});	    		
			tween2 = game.add.tween(messageButton2).to( { alpha: 1 }, rate2, Phaser.Easing.Linear.None, true);	    		

    		messageButton3 = game.add.sprite(590, 512, 'button'); 
    		messageButton3.width = 80; 
    		messageButton3.height = 40;
			messageButton3.alpha = 0; 
    		tempb3 = game.add.sprite(590, 512, 'button'); 
    		tempb3.width = 80; 
    		tempb3.height = 40;  			
    		tempb3.alpha = 0; 
    		tempb3.inputEnabled = true;     		
    		tempb3.events.onInputDown.add(function() {chooseText(3);}); 	    		
			tween3 = game.add.tween(messageButton3).to( { alpha: 1 }, rate3, Phaser.Easing.Linear.None, true);	    				
    	}        	
    	
    }
    
    function chooseText(num)
    {
    	click.play();
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
    
    function chooseDifficult(num)
    {   	
    	if(num == 1)
    	{
    		range1 = 10000; 
    		range2 = 16000; 
    	}
    	
    	if(num == 2)
    	{
    		range1 = 8000; 
    		range2 = 14000; 
    	}
    	
    	if(num == 3)
    	{
    		range1 = 6000; 
    		range2 = 12000; 
    	}
    }
    
    function keyPress(char)
    {    
    	/*console.log(char);
    	console.log(spaceTrue);
    	/*if(spaceTrue == true)
    	{
    		spaceTrue = false; 
    		char = spaceChar; 
    	}
    	console.log(char);*/
    	bmd.context.fillText(char, x, 320); 
    	x += bmd.context.measureText(char).width; 
    	word += char; 
    	match = messages[counter][whichBox]
    	if(word.toUpperCase() === match.toUpperCase())
    	{
    		success.play();
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
			wrong.play();     		
    		bmd.cls();
    		word = ""; 
    		x = 815; 
    		bmd.context.fillText(word, x, 320); 
    	}
 	
    	
 	
    	
    }
    
    function create() 
    {
    	range1 = 10000; 
    	range2 = 16000; 
		bgAudio = game.add.audio('bgAudio');
		bgAudio.play();
		audioActive = setInterval(updateAudio, 224000);
		
		life = game.add.audio('life'); 
		fade = game.add.audio('fade'); 
		wrong = game.add.audio('wrong');
		success = game.add.audio('success');
		click = game.add.audio('click');
		
    	
    	game.stage.backgroundColor = 0xffffff; 
    	textbox = game.add.sprite(800, 250, 'textbox');    	
    	page1 = game.add.sprite(0, 0, 'page1');
    	

    	cursors = game.input.keyboard.createCursorKeys();
    	spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	spaceBar.onDown.add(function(){spaceTrue = true; keyPress(" ");});
    	apos = game.input.keyboard.addKey(Phaser.Keyboard.QUOTES);
    	apos.onDown.add(function(){keyPress("'");});
    	game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR); 
    	game.input.keyboard.addKeyCapture(Phaser.Keyboard.BACKSPACE); 
    	game.input.keyboard.addKeyCapture(Phaser.Keyboard.QUOTES);
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
    	easy = game.add.sprite(850, 350, 'blrect'); 
    	easy.inputEnabled = true;     		
    	easy.events.onInputDown.add(function() {chooseDifficult(1);});	    	
    	easytext = game.add.text(872.5, 350, "EASY", { font: "30px Covered By Your Grace", fill: "#00000", align: "center"}); 
    	medium = game.add.sprite(950, 350, 'blrect');
    	medium.inputEnabled = true;  
    	medium.events.onInputDown.add(function() {chooseDifficult(2);});
    	mediumtext = game.add.text(960, 350, "MEDIUM", { font: "30px Covered By Your Grace", fill: "#00000", align: "center"}); 
    	hard = game.add.sprite(1050, 350, 'blrect');
    	hard.inputEnabled = true;     		
    	hard.events.onInputDown.add(function() {chooseDifficult(3);});    	
    	hardtext = game.add.text(1068, 350, "HARD", { font: "30px Covered By Your Grace", fill: "#00000", align: "center"}); 


    }
    
    function update() 
    {


    	if(messageButton1.alpha == 1 || messageButton2.alpha == 1 || messageButton3.alpha == 1)
    	{
    		life.play();
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

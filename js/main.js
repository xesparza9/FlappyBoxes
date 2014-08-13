//Initialize Phaser. Create a 400x490px game

var game = new Phaser.Game(400,490, Phaser.AUTO, 'gameDiv');

//Create our 'main' state that will contain the game
//This is the body of the game itself. It should contain all code relevant to the game running

var mainState = {
  
  preload: function() {
    //This function will execute at the beginning
    //which is where we'll load our assets for the game
    
    //Set/Change the background color of the main stage
    game.stage.backgroundColor = "#71c5cf";
    
    //Let's load the bird sprite
    game.load.image('bird', 'assets/bird.png');
    
  },
  
  
  create: function(){
    
    //This function is called after the preload function
    //This is where we'll set up the game, place the assets, display, etc...
    
    //Let's start up the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    //We want to display the bird on the screen now
    this.bird = this.game.add.sprite(200, 245, 'bird');
    
    //Now that we have the bird loaded and the physics engine started
    //we need to add gravity to the bird in order for it to actually
    //fall
    
    game.physics.arcade.enable(this.bird);
    this.bird.body.gravity.y = 10;
    
    //Next, we need to make sure the game knows what to do whenever the
    //spacebar key is pressed, so we'll add that here
    
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
    
  },
  
  update: function(){
    //This function is called 60 times per second
    //It contains the game's logic
    //This isn't perfect, as it doesn't allow for lower hardware frame rates
    
    //Let's check to see where the bird is out on the screen
    //If it's off the screen or not in the world then restart the game
    if (this.bird.inWorld == false)
      this.restartGame();
  },
  
  //This function makes the bird jump
  jump: function(){
    
    //Let's add a vertical velocity to the bird
    //Or a jump for better explanation!
    
    this.bird.body.velocity.y = -350;
  },
  
  restartGame: function(){
    
    //Start the 'mainState' section again, which restarts the game
    
    game.state.start('main');
    
    
  },
  
  
  
};


//Add and start the 'mainState' to start the game
game.state.add('main', mainState);
game.state.start('main');

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload,
                                                                        create: create,
                                                                        update: update
                                                                      });
var cursors, dude;

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.spritesheet('dude', 'assets/male_sprite_model.png', 32, 64);

}

function create() {

    game.stage.backgroundColor = '#ffffff';

    cursors = game.input.keyboard.createCursorKeys();

    dude = game.add.sprite(32, 110, 'dude');

    // Physics
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.enable( dude );
    dude.body.setZeroDamping();
    dude.body.fixedRotation = true;

    dude.animations.add( 'walkRight', [16,17,18,19,20,21,22,23], 10, true );
    dude.animations.add( 'walkLeft',  [24,25,26,27,28,29,30,31], 10, true );
    dude.animations.add( 'walkUp',    [0,1,2,3,4],               10, true );
    dude.animations.add( 'walkDown',  [8,9,10,11,12],            10, true );
    dude.animations.add( 'idle',      [10]                                );

}

function update() {

  var moveSpeed = 250;
  dude.body.setZeroVelocity();

  if( cursors.left.isDown ) {

    dude.animations.play('walkLeft');
    dude.body.moveLeft( moveSpeed );

  } else if( cursors.right.isDown ) {

    dude.animations.play('walkRight');
    dude.body.moveRight( moveSpeed );

  } else if( cursors.up.isDown ) {

    dude.animations.play('walkUp');
    dude.body.moveUp( moveSpeed );

  } else if( cursors.down.isDown ) {

    dude.animations.play('walkDown');
    dude.body.moveDown( moveSpeed );

  } else {

    dude.animations.stop();

  }
}

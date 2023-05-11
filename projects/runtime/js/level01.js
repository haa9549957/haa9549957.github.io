var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },

            ]

           
            
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);
        

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE 
        
       function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/sawblade.png");
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -hitZoneSize;
            obstacleImage.y = -hitZoneSize;
        } 
        createSawBlade(600,362)
        createSawBlade(400,362)
        createSawBlade(1500,475)
        var enemy = game.createGameItem("enemy", 25);
        var violetSquare = draw.rect(50, 50, "violet");
        violetSquare.x = -25;
        violetSquare.y = -25;
        enemy.addChild(violetSquare);

        function createEnemy(x, y) {
            var enemy = 
                game.createGameItem('enemy',80);

            var enemyTroubleshoot = 
                draw.bitmap(img/enemy.png);
            enemyTroubleshoot.x = -80;
            enemyTroubleshoot.y = -80;
            enemy.addChild(enemyTroubleshoot);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2
            enemy.onPlayerCollision = function(){
                game.changeIntegrity(-50);
            }

       

        enemy.x = 400;
        enemy.y = groundY - 50;

        game.addGameItem(enemy);

        enemy.velocityX = -5
        enemy.velocityY
        enemy.rotationalVelocity = -5
        
        enemy.onPlayerCollision = function(){
            game.changeIntegrity(-10)

        };

        enemy.onProjectileCollision = function(){
            game.increaseScore(100);
            enemy.shrink();
        }

        

            function createReward(x, y){
                var reward = 
                    game.createGameItem('reward',32);
                var rewardThing = 
                    draw.bitmap('img/reward.png');
                rewardThing.x = -32
                rewardThing.y = -32
                reward.addChild(rewardThing);
                reward.x = x;
                reward.y = y;
                game.addGameItem(reward);
                reward.velocity.X = -2
                reward.rotationalVelocity = 4

                reward.onPlayerCollision = 
                    function() {
                        game.changeIntegrity(25);
                        game.increaseScore(300)
                        reward.fadeOut();
                    }
            } 

          }
          

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}

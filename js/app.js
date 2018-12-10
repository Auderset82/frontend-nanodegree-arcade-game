// Enemies our player must avoid
// var Enemy = function() {
//     // Variables applied to each of our instances go here,
//     // we've provided one for you to get started
//
//     // The image/sprite for our enemies, this uses
//     // a helper we've provided to easily load images
//     this.sprite = 'images/enemy-bug.png';
// };
class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt) {
        if (this.x > 550) {
            this.x = -45;
        }
        this.x = (this.x + this.speed * dt);

        if (Math.abs(this.x - player.x) < 45 && Math.abs(this.y - player.y) < 45) {
            player.x = 202;
            player.y = 405;
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

//Generation of our Enemies
enemy1 = new Enemy(0, 63, 66);
enemy2 = new Enemy(0, 147, 33);
enemy3 = new Enemy(0, 230, 95);
enemy4 = new Enemy(0, 230, 140);


// Constructor of our Player
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.player = 'images/char-boy.png';
    }

    update(dt) {}

    render() {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);

    }

    handleInput(keyPress) {
        if (keyPress == 'left' && this.x > 0) {
            this.x = this.x - 102
        }
        if (keyPress == 'right' && this.x < 360) {
            this.x = this.x + 102;
        }
        if (keyPress == 'down' && this.y > 0) {
            this.y = this.y - 83;
        }
        if (keyPress == 'up' && this.y < 405) {
            this.y = this.y + 83;
        }
        if (this.y < 0) {
            setTimeout(function() {
                player.x = 202;
                player.y = 405;
            }, 500);
        }
    }
}

//Generation of our Player
player = new Player(202, 410);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'down',
        39: 'right',
        40: 'up'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

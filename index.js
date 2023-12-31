const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const parsedCollisions = collisionsLevel1.parse2d();
const collisionBlocks = parsedCollisions.createObjectsFrom2d();

const backgroundLevel1 = new Sprite({
    position: {
        x: 80,
        y: 140
    },
    imageSrc: "./img/background_level_1.png"
});

const player = new Player();

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

function animate() {
    window.requestAnimationFrame(animate);

    c.fillStyle = "#3f3851"
    c.fillRect(0, 0, canvas.width, canvas.height);

    backgroundLevel1.draw();
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw();
    })

    player.velocity.x = 0;
    if (keys.d.pressed) 
        player.velocity.x = 5;
    else if (keys.a.pressed) 
      player.velocity.x = -5;  

    player.draw();
    player.update();
}

animate();


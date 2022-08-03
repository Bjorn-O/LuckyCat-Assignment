const gameWindow = new GameWindow(750, 750);
// Normal gravity, divided by the framerate to make it per second.
const gravity = 9.80665 / 60;
const density = 1.225
let jumpKeyDown = false;

//Listens if the player pressed the button this turn, boolean check to see if not held
window.addEventListener('keydown', event => {
    if(event.code === 'Space' && jumpKeyDown === false) {
        player.flap();
        jumpKeyDown = true;
    }
})
//Checks if the player released the button
window.addEventListener('keyup', event => {
    if (event.code === "Space" && jumpKeyDown === true)
    {
        jumpKeyDown = false;
    }
})


let player = new GameObject(
    new Vector2(0,0), 64
    ,"red", 200);








function animate() {
    //Deletes the previous frame of animation [NEEDS TO BE CALLED FIRST]
    gameWindow.ctx.clearRect(0,0,gameWindow.canvas.width, gameWindow.canvas.height);
    //Requests this selfsame function to be called again
    requestAnimationFrame(animate);


    player.physicsUpdate(gravity, density);
    player.update();
}
animate();









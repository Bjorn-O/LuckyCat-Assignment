class GameObject {
    constructor(position, radius, color, mass) {
        this.x = position.x;
        this.y = position.y;
        this.radius = radius;
        this.color = color || "red";
        this.mass = mass;
        this.canvas = document.getElementById('playerLayer');
        this.canvas.width = radius;
        this.canvas.height = radius;
        this.ctx = this.canvas.getContext("2d");
        this.velocity = new Vector2(0,0);
        this.flapForce = new Vector2(0,-7.5);
        this.image = new Image();
        this.image.src = 'sprites/birdSpriteSheet.png';
        this.init = function ()
        {
            this.ctx.imageSmoothingEnabled = false;
        }
        this.update = function ()
        {
            // this.ctx.clearRect(0,0, this.radius, this.radius);
            // this.ctx.drawImage(
            //     this.image,
            //     0,
            //     0,
            //     32,
            //     32,
            //     0,
            //     0,
            //     this.radius,
            //     this.radius
            // )
            //
            // this.ctx.beginPath();
            // this.ctx.fillStyle = this.color;
            // this.ctx.arc(this.x + this.radius / 2, this.y + this.radius / 2, this.radius, 0, Math.PI * 2);
            // this.ctx.stroke();
            // this.ctx.fill();
        }
        this.physicsUpdate = function (gravity, density)
        {
            // Apply the gravity to the velocity
            this.velocity.y += gravity * 2;
            // Calculate the terminal velocity using 2 * MassGravity / Density * Area * the Drag coefficient of a sphere
            let vt =Math.sqrt(2 * (this.mass * gravity) / density * this.radius * 0.47);
            // Check if the velocity is greater than the terminal velocity, otherwise apply terminal
            if (this.velocity.y > vt) {this.velocity.y = vt;}
            // Apply the changes in velocity
            // this.ctx.position.x += this.velocity.x;
            // this.ctx.position.y += this.velocity.y;

        }
        this.init();
    }
    flap()
    {
        console.log(this.velocity.y)
        this.velocity.y = this.flapForce.y
        console.log("Flap!")
    }
}
class GameWindow {
    constructor(width, height) {
        this.canvas = document.getElementById('backGroundLayer');
        this.ctx = this.canvas.getContext("2d");
        console.log(this.ctx);

        this.canvas.width = width;
        this.canvas.height = height;

        this.init = function ()
        {
            this.ctx.fillStyle = 'FF0000'
            this.ctx.fillRect(0,0,width,height);
        }
        this.init();
    }

    getCenter()
    {
        return new Vector2(this.canvas.width / 2, this.canvas.height / 2);
    }

    getWidth()
    {
        return this.canvas.width;
    }

    getHeight()
    {
        return this.canvas.height;
    }
}









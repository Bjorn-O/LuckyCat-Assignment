class Player {
    constructor(x, y , radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    calcRectArea(width, height) {
        return width * height;
    }
}
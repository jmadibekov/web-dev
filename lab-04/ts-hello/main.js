var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    return Point;
}());
var point = new Point();
point.draw();

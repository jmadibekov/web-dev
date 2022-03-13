class Point {
  x: number;
  y: number;

  draw() {
    console.log(this.x, this.y);
  }
}

let point = new Point();
point.draw();

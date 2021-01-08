// refactoring aspect
let img; 
class Photon {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-c, 0);
    this.history = [];
    this.stopped = false;
    this.theta = 0;
  }

  stop() {
    this.stopped = true;
  }

  update() {
    if (!this.stopped) {
      //if (frameCount % 5 == 0) {
      this.history.push(this.pos.copy());
      //}
      const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV);
    }

    if (this.history.length > 500) {
      this.history.splice(0, 1);
    }


  }


  
  show() {

  
    strokeWeight(4);
    // changed trail colour 
    stroke(112,128,144);
    // refactoring aspect
    image(img,this.pos.x -20  ,this.pos.y - 15 , 50,50);


    strokeWeight(2);
    noFill();
    beginShape();
    for (let v of this.history) {
      vertex(v.x,v.y)
    }

    endShape();

  }


}

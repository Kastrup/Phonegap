
let xes = [100, 200, 300, 100, 200];
let yes = [200, 100, 200, 300, 300];
let values = [-1, 1, -2, 2, 3];
let edges = [[2], [2, 4], [0, 1, 4], [4], [1, 2, 3]];
let persons = [];


function setup() {
  
  var myCan = createCanvas(windowWidth, windowHeight);
  myCan.parent('p5Container');
  
  for (i=0; i<xes.length; i++){
    persons.push(new person(xes[i], yes[i], values[i], edges[i]));
    
  }
  
}

function draw() {
    background(0,0,200);
    fill(255);
    
    for (i=0; i<xes.length; i++){
    for (a=0; a<persons[i].edge.length; a++){
        strokeWeight(5);
        line(persons[i].x, persons[i].y, persons[persons[i].edge[a]].x, persons[persons[i].edge[a]].y);
        strokeWeight(1);
    }
  }
for (i=0; i<persons.length; i++){
    fill(255);
    ellipse(xes[i], yes[i], 30, 30);
    fill(0);
    text(persons[i].value, xes[i], yes[i]);
   
}    
  
 
  
    
}


class person{
 constructor(x, y, value, edge){
  this.x = x;
  this.y = y;
  this.value = value;
  this.edge = edge;
 }

clicked() {
 let h = 0;
 for (h=0; h<this.edge.length; h++){
    //console.log(this.value);
   persons[this.edge[h]].value++;
 }
  this.value = this.value - this.edge.length;
    let low = 0;
    for (h=0; h<persons.length; h++){
        if (persons[h].value < low){
            low = persons[h].value;
            console.log(low);
        }
    }
    if (low>=0){
        console.log("Complete");
    }
}
}

function mouseClicked() {
    for (i=0; i<persons.length; i++){
        //console.log(i);
        let dis = dist(mouseX, mouseY, persons[i].x, persons[i].y);
        //console.log(dis);
        if (dis < 10){
            persons[i].clicked();
           // console.log(dis);
        }
        
    }
    
    
}





//soal 1
class Animal {
    constructor(jenis){
        this.name = jenis;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get jnam() {
        return this.name;
    }
    set jnam(x) {
        this.name = x;
    }
    get legsnam() {
        return this.legs;
    }
    set legsnam(x) {
        this.legs = x;
    }
    get cold_bloodedcha() {
        return this.cold_blooded;
    }
    set cold_bloodedcha(x) {
        this.cold_blooded = x;
    }
}

let sheep = new Animal("shaun");
console.log(sheep.jnam);
console.log(sheep.legsnam);
console.log(sheep.cold_bloodedcha);

class Ape extends Animal{
    constructor(jenis){
        super(jenis);
        this.legs = 2;
    }
    yell(){
        console.log("Auooo");
    }
}
let sungokong = new Ape("sungokong");
console.log("\n" + sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);
sungokong.yell();

class Frog extends Animal{
    constructor(jenis){
        super(jenis);
        this.cold_blooded = true;
    }
    jump(){
        console.log("Hop-hop");
    }
}
let kodok = new Frog("buduk")
console.log( "\n" + kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);
kodok.jump();


//soal 2
class Clock {
    constructor({template}){
    this.template = template;
    let timer;
    
    let render = () => {   
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
    }
    this.stop = ()=> {
        clearInterval(timer);
    }
    this.start = () => {
    render();
    timer = setInterval(render, 1000);
    }
}
}
var jam = new Clock({template : 'h:m:s'})
jam.start();
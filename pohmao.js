
let level = 1
let zimgs = []
let pmarinedisp = 0
let jailswitch = 0
let loader = 1

// const gamepads

for(let i = 1; i < 44; i++) {
    zimgs.push(Object.assign(new Image(), { 'src': `z - ${i} copy-min.png` }));
    }
for(let t = 42; t>0; t--){
    zimgs.push(zimgs[t])
}
// console.log(zimgs)

let rimgs = []
for(let i = 9; i < 12; i++) {
    rimgs.push(Object.assign(new Image(), { 'src': `r${i}.png` }));
    }

window.addEventListener('DOMContentLoaded', (event) =>{


const gamepadAPI = {
    controller: {},
    turbo: true,
    
    connect: function(evt) {
        // if(evt.gamepad){

            if(navigator.getGamepads()[0] != null){
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else  if(navigator.getGamepads()[1] != null){
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            }else  if(navigator.getGamepads()[2] != null){
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            }else  if(navigator.getGamepads()[3] != null){
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            }
            ////console.log('Gamepad connected.');
            ////console.log(navigator.getGamepads()[0]);

        // }

for (let i = 0; i < gamepads.length; i++) {
    ////console.log("Gamepad " + i + ":");

    if (gamepads[i] === null) {
        ////console.log("[null]");
        continue;
    }

    if (!gamepads[i].connected) {
        ////console.log("[disconnected]");
        continue;
    }

    ////console.log("    Index: " + gamepads[i].index);
    ////console.log("    ID: " + gamepads[i].id);
    ////console.log("    Axes: " + gamepads[i].axes.length);
    ////console.log("    Buttons: " + gamepads[i].buttons.length);
    ////console.log("    Mapping: " + gamepads[i].mapping);
}

      },
      disconnect: function(evt) {
        gamepadAPI.turbo = false;
        delete gamepadAPI.controller;
        ////console.log('Gamepad disconnected.');
      },
      update: function() {
        // clear the buttons cache
        gamepadAPI.controller = navigator.getGamepads()[0]
        gamepadAPI.buttonsCache = [];
        // move the buttons status from the previous frame to the cache
        for(var k=0; k<gamepadAPI.buttonsStatus.length; k++) {
          gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
        }
        // clear the buttons status
        gamepadAPI.buttonsStatus = [];
        // get the gamepad object
        var c = gamepadAPI.controller || {};
      
        // loop through buttons and push the pressed ones to the array
        var pressed = [];
        if(c.buttons) {
          for(var b=0,t=c.buttons.length; b<t; b++) {
            if(c.buttons[b].pressed) {
              pressed.push(gamepadAPI.buttons[b]);
              ////console.log(gamepadAPI.buttons[b])
            }
          }
        }
        // loop through axes and push their values to the array
        var axes = [];
        if(c.axes) {
          for(var a=0,x=c.axes.length; a<x; a++) {
            axes.push(c.axes[a].toFixed(2));
          }
        }
        // assign received values
        gamepadAPI.axesStatus = axes;
        gamepadAPI.buttonsStatus = pressed;
        // return buttons for debugging purposes
        // console.log(pressed)
        return pressed;
      },
      buttonPressed: function(button, hold) {
        var newPress = false;
        // loop through pressed buttons
        for(var i=0,s=gamepadAPI.buttonsStatus.length; i<s; i++) {
          // if we found the button we're looking for...
          if(gamepadAPI.buttonsStatus[i] == button) {
            // set the boolean variable to true
            newPress = true;
            // if we want to check the single press
            if(!hold) {
              // loop through the cached states from the previous frame
              for(var j=0,p=gamepadAPI.buttonsCache.length; j<p; j++) {
                // if the button was already pressed, ignore new press
                if(gamepadAPI.buttonsCache[j] == button) {
                  newPress = false;
                }
              }
            }
          }
        }
        return newPress;
      },
      buttons: [
        'A','DPad-Down','DPad-Left','DPad-Right',
        'Start','Back','Axis-Left','Axis-Right',
        'LB','RB','Power','DPad-Up','B','X','Y',
      ],
    buttonsCache: [],
    buttonsStatus: [],
    axesStatus: []
  };


window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect)

const gamepad = {}
const gamepads = {}
let hot = 0



let springs = []
let objsprings = []
let ramps90 = []
let swimmers = []
let floors = []
let ramps = []
let boys = []
let deadboys = []
let fruits = []
let walls = []
let chats = []
let invisblocks = []
let ungrapplable = []
let jellys = []
let roofs = []
let switches = []
let shocks =[]
let blocks = []
let nails = []
let dry = 0
const floorimg = new Image()
floorimg.src ="floor4.png"
const lvl2floorimg = new Image()
lvl2floorimg.src ="floor5.png"
const lvl3floorimg = new Image()
lvl3floorimg.src ="floor6.png"
const lvl4floorimg = new Image()
lvl4floorimg.src ="floor7.png"
const walling = new Image()
walling.src ="wall.png"
const lvl2walling = new Image()
lvl2walling.src ="wall5.png"
const nailimg = new Image()
nailimg.src ="poundnail.png"
const ballsprite = new Image()
ballsprite.src ="ballsprite3.png"

const jazz = new Audio('gulpnoise.wav');
const jazz2 = new Audio('gulpnoise2.wav');

const jailswitchimgl = new Image()
jailswitchimgl.src = 'switchl.png'
const jailswitchimg = new Image()
jailswitchimg.src = 'switch.png'

const rampimg2 = new Image()
rampimg2.src = 'ramp2.png'

const rampimg1 = new Image()
rampimg1.src = 'ramp1.png'

const rampcurveimg1 = new Image()
rampcurveimg1.src = 'rampcurve1.png'

const fruitsprites = new Image()
fruitsprites.src = 'fruitsprites11.png'
const cake = new Image()
cake.src = 'Fruit 92 - Cake.png'

// const fractalsheet = new Image()
// fractalsheet.src = 'fractalsheet - 01.png'



// const jumpometer = new Image()
// jumpometer.src = 'jumpometer.png'

const pomaospit = new Image()
pomaospit.src = 'pomaospit.png'

// const pomaospitg= new Image()
// pomaospitg.src = 'pomaospitg.png'

const pomaospitb = new Image()
pomaospitb.src = 'pomaospitb.png'

// const pomaospitbg = new Image()
// pomaospitbg.src = 'pomaospitbg.png'

const pomaospitl = new Image()
pomaospitl.src = 'pomaospitl.png'
// const pomaospitlg = new Image()
// pomaospitlg.src = 'pomaospitlg.png'
const pomaospitlb = new Image()
pomaospitlb.src = 'pomaospitbl.png'
// const pomaospitlbg = new Image()
// pomaospitlbg.src = 'pomaospitblg.png'

const pomaospitf = new Image()
pomaospitf.src = 'pomaospitf.png'

// const pomaospitfg = new Image()
// pomaospitfg.src = 'pomaospitfg.png'

const pomaospitfb = new Image()
pomaospitfb.src = 'pomaospitfb.png'

// const pomaospitfbg = new Image()
// pomaospitfbg.src = 'pomaospitfbg.png'

const pomaospitfl = new Image()
pomaospitfl.src = 'pomaospitfl.png'

// const pomaospitflg = new Image()
// pomaospitflg.src = 'pomaospitflg.png'


const pomaospitflb = new Image()
pomaospitflb.src = 'pomaospitflb.png'


// const pomaospitflbg = new Image()
// pomaospitflbg.src = 'pomaospitflbg.png'

const pomaoflb = new Image()
pomaoflb.src = 'pomaoflb.png'
// const pomaoflbg = new Image()
// pomaoflbg.src = 'pomaoflbg.png'

const pomaoflbh = new Image()
pomaoflbh.src = 'pomaofbhl.png'

// const pomaoflbhg = new Image()
// pomaoflbhg.src = 'pomaofbhlg.png'

const pomaoflh = new Image()
pomaoflh.src = 'pomaoflh.png'

const pomaoflhg = new Image()
pomaoflhg.src = 'pomaoflhg.png'

const pomaofbh = new Image()
pomaofbh.src = 'pomaofbh.png'

// const pomaofbhg = new Image()
// pomaofbhg.src = 'pomaofbhg.png'

const boysprites = new Image()
boysprites.src = 'boisterousboys.png'

const pomomimg = new Image()
pomomimg.src = 'pomom.png'

const pawmaoimg = new Image()
pawmaoimg.src = 'pawmao.png'

const prisoner1img = new Image()
prisoner1img.src = 'prisoner1.png'

const prisoner2img = new Image()
prisoner2img.src = 'prisoner2.png'

const prisoner3img = new Image()
prisoner3img.src = 'prisoner3.png'

const pomarine = new Image()
pomarine.src = 'pomarine.png'


const pomarinel = new Image()
pomarinel.src = 'pomarinel.png'

const pomaoimg = new Image()
pomaoimg.src = 'pomao.png'


const pomaoimgg = new Image()
pomaoimgg.src = 'pomaog.png'

const pomaoimggl = new Image()
pomaoimggl.src = 'pomaogl.png'

const pomaofh = new Image()
pomaofh.src = 'pomaofh.png'

// const pomaofhg = new Image()
// pomaofhg.src = 'pomaofhg.png'

const pomaoimgh = new Image()
pomaoimgh.src = 'pomaoh.png'
// const pomaoimghg = new Image()
// pomaoimghg.src = 'pomaohg.png'

const pomaoimglhb = new Image()
pomaoimglhb.src = 'pomaolhb.png'
// const pomaoimglhbg = new Image()
// pomaoimglhbg.src = 'pomaolhbg.png'
const pomaoimghb = new Image()
pomaoimghb.src = 'pomaohb.png'
// const pomaoimghbg = new Image()
// pomaoimghbg.src = 'pomaohbg.png'

const pomaoimglh = new Image()
pomaoimglh.src = 'pomaolh.png'
const pomaoimglhg = new Image()
pomaoimglhg.src = 'pomaolhg.png'
const pomaoimgb = new Image()
pomaoimgb.src = 'pomaob.png'
const pomaoimgbg = new Image()
pomaoimgbg.src = 'pomaobg.png'

const seedegg = new Image()
seedegg.src = 'seedegg.png'
const seedeggf = new Image()
seedeggf.src = 'eggf.png'
const seedeggfl = new Image()
seedeggfl.src = 'eggfl.png'
const pomaoimgl = new Image()
pomaoimgl.src = 'pomaol.png'
const pomaoimglg = new Image()
pomaoimglg.src = 'pomaolg.png'
const pomaoimgbl = new Image()
pomaoimgbl.src = 'pomaobl.png'
const pomaoimgblg = new Image()
pomaoimgblg.src = 'pomaoblg.png'
// const mangosteen = new Image()
// mangosteen.src = 'Fruit 03 - Mangosteen.png'

const pomaoimgup = new Image()
pomaoimgup.src = 'pomaoup.png'
const pomaoimgupg = new Image()
pomaoimgupg.src = 'pomaoupg.png'
const pomaoimglup = new Image()
pomaoimglup.src = 'pomaoupl.png'
const pomaoimglupg = new Image()
pomaoimglupg.src = 'pomaouplg.png'

const pomaoimgupb = new Image()
pomaoimgupb.src = 'pomaoupb.png'
const pomaoimgupbg = new Image()
pomaoimgupbg.src = 'pomaoupbg.png'
const pomaoimglupb = new Image()
pomaoimglupb.src = 'pomaoupbl.png'
const pomaoimglupbg = new Image()
pomaoimglupbg.src = 'pomaoupblg.png'
const pomaof = new Image()
pomaof.src = 'pomaof.png'
const pomaofg = new Image()
pomaofg.src = 'pomaofg.png'
const pomaofl = new Image()
pomaofl.src = 'pomaofl.png'
const pomaoflg = new Image()
pomaoflg.src = 'pomaoflg.png'
const pomaofb = new Image()
pomaofb.src = 'pomaofb.png'
const pomaofbg = new Image()
pomaofbg.src = 'pomaofbg.png'
const ramp90 = new Image()
ramp90.src = 'ramp90.png'
const ramp90l = new Image()
ramp90l.src = 'ramp90l.png'

const keysPressed = {}

document.addEventListener('keydown', (event) => {
    if(event.key != "ArrowRight"){

    if(event.key != "ArrowUp"){
        
    if(event.key != "ArrowDown"){
        
    if(event.key != "ArrowLeft"){
    keysPressed[event.key.toLocaleLowerCase()] = true;
    }else{

    keysPressed[event.key] = true;
    }
    }else{

    keysPressed[event.key] = true;
    }
    }else{

    keysPressed[event.key] = true;
    }
    }else{

        keysPressed[event.key] = true;
    }
 });
 
 document.addEventListener('keyup', (event) => {
     
    if(event.key != "ArrowRight"){

        if(event.key != "ArrowUp"){
            
        if(event.key != "ArrowDown"){
            
        if(event.key != "ArrowLeft"){
            delete keysPressed[event.key.toLocaleLowerCase()];
        }else{

            delete keysPressed[event.key];
        }
        }else{

            delete keysPressed[event.key];
        }
        }else{

            delete keysPressed[event.key];
        }
        }else{

            delete keysPressed[event.key];
        }
  });

const tutorial_canvas = document.getElementById("tutorial");
const tutorial_canvas_context = tutorial_canvas.getContext('2d');

// tutorial_canvas_context.scale(.045,.045)
// tutorial_canvas_context.translate(3300,14750)
// tutorial_canvas_context.translate(2500,6000)

tutorial_canvas.style.background = "#664613"


let flex = tutorial_canvas.getBoundingClientRect();

// Add the event listeners for mousedown, mousemove, and mouseup
const tip = {}
let xs
let ys

// tutorial_canvas_context.scale(1/3, 1/3)


window.addEventListener('mousedown', e => {

      flex = tutorial_canvas.getBoundingClientRect();
      xs = e.clientX - flex.left;
      ys = e.clientY - flex.top;
      tip.x = xs
      tip.y = ys

      tip.body = tip

      console.log(pomao)

 });

 class CircleF{
    constructor(x, y, radius, color, xmom = 0, ymom = 0){

        this.height = 0
        this.width = 0
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xmom = xmom
        this.ymom = ymom
        this.xrepel = 0
        this.yrepel = 0
        this.lens = 0
    }       
     draw(){

        tutorial_canvas_context.fillStyle = this.color
        tutorial_canvas_context.lineWidth = 1
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.beginPath();
        tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
       tutorial_canvas_context.fill()
        tutorial_canvas_context.stroke(); 
    }
    move(){
        this.x += this.xmom
        this.y += this.ymom
        // tutorial_canvas_context.translate(-this.xmom,-this.ymom)
    }
    isPointInside(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
            return true
        }
        return false
    }

    repelCheck(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius+point.radius)*(point.radius+this.radius)){
            return true
        }
        return false
    }
}

let pegged = 1
class Spring{
    constructor(body = 0){
        if(body == 0){
            this.body = new Circle(350, 350, 5, "red",10,10)
            this.anchor = new Circle(this.body.x, this.body.y+5, 5, "red")
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "green", 5)
            this.length = 1
        }else{
            this.body = body
            this.length = 7
            this.anchor = new Circle(this.body.x, this.body.y+(this.length), 5, "red")
            if(!objsprings.includes(this.anchor)){
                objsprings.push(this.anchor)
            }
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "green", 5)
        }

    }
    balance(){
        this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "green", 5)
        let xmomentumaverage 
        let ymomentumaverage
        if(this.anchor != pin2){
         xmomentumaverage = (this.body.xmom+this.anchor.xmom)/2
         ymomentumaverage = (this.body.ymom+this.anchor.ymom)/2
        }else{
             xmomentumaverage = ((this.body.xmom)+this.anchor.xmom)/2
             ymomentumaverage = ((this.body.ymom)+this.anchor.ymom)/2
        }

        // if(this.body != pin){
            this.body.xmom = ((this.body.xmom)+xmomentumaverage)/2
            this.body.ymom = ((this.body.ymom)+ymomentumaverage)/2
        // }

        if(this.anchor != pin2){
        this.anchor.xmom = ((this.anchor.xmom)+xmomentumaverage)/2
        this.anchor.ymom = ((this.anchor.ymom)+ymomentumaverage)/2
        }else{
        this.anchor.xmom = ((this.anchor.xmom)+xmomentumaverage)/2
        this.anchor.ymom = ((this.anchor.ymom)+ymomentumaverage)/2
        }
            if(this.beam.hypotenuse() !=0){
        if(this.beam.hypotenuse() < this.length){
            if(this.body != pin){
            this.body.xmom += (this.body.x-this.anchor.x)/(this.length)/30
            this.body.ymom += (this.body.y-this.anchor.y)/(this.length)/30
            }
                this.anchor.xmom -= (this.body.x-this.anchor.x)/(this.length)/30
                this.anchor.ymom -= (this.body.y-this.anchor.y)/(this.length)/30
        }else if(this.beam.hypotenuse() > this.length){

            if(this.body != pin){
            this.body.xmom -= (this.body.x-this.anchor.x)/(this.length)/30
            this.body.ymom -= (this.body.y-this.anchor.y)/(this.length)/30
            }
                this.anchor.xmom += (this.body.x-this.anchor.x)/(this.length)/30
                this.anchor.ymom += (this.body.y-this.anchor.y)/(this.length)/30
        }

    }
    }
    draw(){
        this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "green", 5)
        this.beam.draw()
        // this.body.draw()
        if(ramps.includes(this.anchor)){
            tutorial_canvas_context.drawImage(ballsprite, 0,0,ballsprite.width,ballsprite.height,pin2.x-pin2.radius,pin2.y-pin2.radius,pin2.radius*2,pin2.radius*2)
        }
        // this.anchor.draw()
    }
    move(){
        if(this.anchor.ymom > 0 && (this.anchor.y+this.anchor.radius) >=650){
            this.anchor.ymom *=-1
        }
        // if(this.anchor.ymom < 0 && (this.anchor.y-this.anchor.radius) <= (roof2.y+roof2.height+(pomao.body.radius*2))){
        //     this.anchor.ymom *=-1
        // }
        if(this.body !== pin){
            this.body.move()
        }
        if(pegged == 1){
                if(this.anchor == pin2){
                    for(let t = 0;t<walls.length;t++){
                        if(squarecirclefaceball(walls[t],pin2)){
                            if(walls[t].x > pin2.x){
                                if(pin2.xmom > 0){
                                    pin2.xmom*=-1
                                    break
                                }
                            }else{
                                if(pin2.xmom < 0){
                                    pin2.xmom*=-1
                                    break
                                }
                            }
                        }
                        if(squarecirclehead(walls[t],pin2)){
                                if(pin2.ymom < 0){
                                    pin2.ymom*=-1
                                }
                        }
                        if(squarecirclefeet(walls[t],pin2)){
                                if(pin2.ymom > 0){
                                    pin2.ymom*=-1
                                    break
                                }
                        }
                    }
                    this.anchor.move()
                }else{
                    this.anchor.move()
                }
        }else{
            this.anchor.move()
        }
    }

}



class Fractal{
    constructor(x){
        this.sheet = 0
        this.runner =0
        this.runnerx =0
        this.runnery =0
        this.runnerxd = 1
        this.runclick = 0
        this.center = {}
        this.center.x = tutorial_canvas.width*.5
        this.center.y = tutorial_canvas.height*.5
        this.count = x
        this.angle = 0
        this.spin = 0
        this.macrospin = 0
        this.joints = []
        this.threshold =50
    }
    draw(){
        if(pomao.tripping < 0){
            this.runner = 0
            this.count = 10
            this.threshold =50
        }
        this.runner++
        if(this.runner%1 == 0){
            this.runnerx+=1
            if(this.runnerx > 2){
                this.runnerx = 0
                this.runnery++
                if(this.runnery >2){
                    this.runnery = 0
                    this.sheet+=this.runnerxd
                    if(this.sheet >= zimgs.length-1){
                        this.runnerxd *=-1
                    }

                }
            }
        }
        if(this.runner%this.threshold == 0){
            this.runner = 0
            this.count--
            this.threshold+=10
        }
        if(pomao.tripping > 0){
           this.spin+=.015
           this.macrospin += .03
           this.joints = []
           for(let t = 0; t<this.count; t++){
               const joint = new CircleF(pomao.body.x+(Math.sin(this.angle+this.spin)*250)+(Math.sin(this.macrospin)*15),pomao.body.y+(Math.cos(this.angle+this.spin)*250)+(Math.cos(this.macrospin)*15), 0, getRandomLightColortp() )
               this.joints.push(joint)
               this.angle += (Math.PI*2)/this.count
           }
           if(this.count > 0){

               tutorial_canvas_context.moveTo(this.joints[0].x, this.joints[0].y)
               tutorial_canvas_context.lineWidth = 10+((4-(this.spin%this.count)))
               // tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                for(let t = 0; t<this.count; t++){

                   tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                   tutorial_canvas_context.fillStyle = getRandomLightColortp()
                       tutorial_canvas_context.lineTo(this.joints[t].x,this.joints[t].y)
                }
                tutorial_canvas_context.lineTo(this.joints[0].x, this.joints[0].y)
                tutorial_canvas_context.stroke()
   
                tutorial_canvas_context.lineWidth = 0
                for(let t = 0; t<1; t++){
                   tutorial_canvas_context.fillStyle = getRandomLightColortp()
                   this.joints[t].color = getRandomLightColortp()
                   this.joints[t].draw()
                   
                
            }
           }
        }

        this.sheet%=zimgs.length-1
        if(this.sheet <0){
            this.sheet = 0
        }
        if(this.sheet == 0){
            this.runnerxd *=-1
        }
    }
}



class Fractal2{
    constructor(x){
        this.runner =0
        this.runclick = 0
        this.center = {}
        this.center.x = tutorial_canvas.width*.5
        this.center.y = tutorial_canvas.height*.5
        this.count = x
        this.angle = 0
        this.spin = 0
        this.macrospin = 0
        this.joints = []
    }
    draw(){
     
        if(pomao.tripping < 0){
            this.runner = 0
            this.count = 10
            this.threshold =50
        }
        this.runner++
        if(this.runner%this.threshold == 0){
            this.runner = 0
            this.count--
            this.threshold+=10
        }
        if(pomao.tripping > 0){
           this.spin-=.015
           this.macrospin += .03
           this.joints = []
           for(let t = 0; t<this.count; t++){
               const joint = new CircleF(pomao.body.x+(Math.sin(this.angle+this.spin)*160)+(Math.sin(this.macrospin)*20),pomao.body.y+(Math.cos(this.angle+this.spin)*160)+(Math.cos(this.macrospin)*5), 0, getRandomLightColortp() )
               this.joints.push(joint)
               this.angle += (Math.PI*2)/this.count
           }
           if(this.count > 0){

               tutorial_canvas_context.moveTo(this.joints[0].x, this.joints[0].y)
               tutorial_canvas_context.lineWidth = 0//40+((4-(this.spin%this.count)))
               // tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                for(let t = 0; t<this.count; t++){

                   tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                   tutorial_canvas_context.fillStyle = getRandomLightColortp()
                       tutorial_canvas_context.lineTo(this.joints[t].x,this.joints[t].y)
                }
                tutorial_canvas_context.lineTo(this.joints[0].x, this.joints[0].y)
                tutorial_canvas_context.stroke()
                tutorial_canvas_context.fill()
   
                tutorial_canvas_context.lineWidth = 0
                for(let t = 1; t<2; t++){
                   tutorial_canvas_context.fillStyle = getRandomLightColortp()
                   this.joints[t].color = getRandomLightColortp()
                   this.joints[t].draw()
                   
                
            }
           }
        }
    }
}


 class Fractal3{
     constructor(x){
         this.runner =0
         this.runclick = 0
         this.center = {}
         this.center.x = tutorial_canvas.width*.5
         this.center.y = tutorial_canvas.height*.5
         this.count = x
         this.angle = 0
         this.spin = 0
         this.macrospin = 0
         this.joints = []
     }
     draw(){

        if(pomao.tripping < 0){
            this.runner = 0
            this.count = 10
            this.threshold =50
        }
        this.runner++
        if(this.runner%this.threshold == 0){
            this.runner = 0
            this.count--
            this.threshold+=10
        }
         if(pomao.tripping > 0){
            this.spin+=.015*Math.random()*2
            this.macrospin += .03*Math.random()*2
            this.joints = []
            for(let t = 0; t<this.count; t++){
                const joint = new CircleF(pomao.body.x+(Math.sin(this.angle+this.spin)*70)+(Math.sin(this.macrospin)*7),pomao.body.y+(Math.cos(this.angle+this.spin)*70)+(Math.cos(this.macrospin)*13), 0, getRandomLightColortp() )
                this.joints.push(joint)
                this.angle += (Math.PI*2)/this.count
            }
            if(this.count > 0){

                tutorial_canvas_context.moveTo(this.joints[0].x, this.joints[0].y)
                tutorial_canvas_context.lineWidth = 0 // 30+((4-(this.spin%this.count)))
                // tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                 for(let t = 0; t<this.count; t++){

                    tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                    tutorial_canvas_context.fillStyle = getRandomLightColortp()
                        tutorial_canvas_context.lineTo(this.joints[t].x,this.joints[t].y)
                 }
                 for(let t = this.count.length; t>0; t--){

                    tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                    tutorial_canvas_context.fillStyle = getRandomLightColortp()
                        tutorial_canvas_context.lineTo(this.joints[t].x,this.joints[t].y)
                 }
                 tutorial_canvas_context.lineTo(this.joints[0].x, this.joints[0].y)
                 tutorial_canvas_context.stroke()
                 tutorial_canvas_context.fill()
    
                 tutorial_canvas_context.lineWidth = 0
                 for(let t = 1; t<2; t++){
                    tutorial_canvas_context.fillStyle = getRandomLightColortp()
                    this.joints[t].color = getRandomLightColortp()
                    this.joints[t].draw()
                    
                 
             }
            }
         }
     }
 }


 class Trianglex{
    constructor(x, y, color, length){
        this.x = x
        this.y = y
        this.color= color
        this.length = length*3
        this.x1 = this.x + this.length*2
        this.x2 = this.x - this.length*5
        this.tip = this.y - this.length
        this.accept1 = (this.y-this.tip)/(this.x1-this.x)
        this.accept2 = (this.y-this.tip)/(this.x2-this.x)

    }

    draw(){
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.fillStyle = this.color
        tutorial_canvas_context.stokeWidth = 3
        tutorial_canvas_context.moveTo(this.x, this.y)
        tutorial_canvas_context.lineTo(this.x1, this.y)
        tutorial_canvas_context.lineTo(this.x, this.tip)
        tutorial_canvas_context.lineTo(this.x2, this.y)
        tutorial_canvas_context.lineTo(this.x, this.y)
        tutorial_canvas_context.fill()
        tutorial_canvas_context.stroke()
    }

    isPointInside(point){
        if(point.x <= this.x1){
            if(point.y >= this.tip){
                if(point.y <= this.y){
                    if(point.x >= this.x2){
                        this.accept1 = (this.y-this.tip)/(this.x1-this.x)
                        this.accept2 = (this.y-this.tip)/(this.x2-this.x)
                        this.basey = point.y-this.tip
                        this.basex = point.x - this.x
                        if(this.basex == 0){
                            return true
                        }
                        this.slope = this.basey/this.basex
                        if(this.slope >= this.accept1){
                            return true
                        }else if(this.slope <= this.accept2){
                            return true
                        }
                    }
                }
            }
        }
        return false
    }
}

 class Triangle90{
    constructor(x, y, color, length){
        this.x = x
        this.y = y
        this.color= color
        this.length = length
        this.x1 = this.x
        this.x2 = this.x - this.length*10
        this.tip = this.y - this.length*2.5
        this.width = length*10
        this.height = length*2.5
        // this.accept1 = (this.y-this.tip)/(this.x1-this.x)
        this.accept2 = (this.y-this.tip)/(this.x2-this.x)

    }

    draw(){
        tutorial_canvas_context.drawImage(ramp90,0,0, ramp90.width,ramp90.height, this.x2, this.tip, this.width, this.height)
        // tutorial_canvas_context.strokeStyle = this.color
        // tutorial_canvas_context.fillStyle = this.color
        // tutorial_canvas_context.stokeWidth = 3
        // tutorial_canvas_context.moveTo(this.x, this.y)
        // tutorial_canvas_context.lineTo(this.x1, this.y)
        // tutorial_canvas_context.lineTo(this.x, this.tip)
        // tutorial_canvas_context.lineTo(this.x2, this.y)
        // tutorial_canvas_context.lineTo(this.x, this.y)
        // tutorial_canvas_context.fill()
        // tutorial_canvas_context.stroke()
    }

    isPointInside(point){
        if(point.x <= this.x1){
            if(point.y >= this.tip){
                if(point.y <= this.y){
                    if(point.x >= this.x2){
                        // this.accept1 = (this.y-this.tip)/(this.x1-this.x)
                        this.accept2 = (this.y-this.tip)/(this.x2-this.x)
                        this.basey = point.y-this.tip
                        this.basex = point.x - this.x
                        if(this.basex == 0){
                            return true
                        }
                        this.slope = this.basey/this.basex
                        if(this.slope <= this.accept2){
                            return true
                        }
                    }
                }
            }
        }
        return false
    }
}

class Triangle90l{
    constructor(x, y, color, length){
        this.x = x
        this.y = y
        this.color= color
        this.length = length
        this.x1 = this.x + this.length*10
        this.x2 = this.x 
        this.tip = this.y - this.length*2.5
        this.width = length*10
        this.height = length*2.5
        this.accept1 = (this.y-this.tip)/(this.x1-this.x)
        // this.accept2 =  (this.y-this.tip)/(this.x2-this.x)

    }

    draw(){
        tutorial_canvas_context.drawImage(ramp90l,0,0, ramp90l.width,ramp90l.height, this.x, this.tip, this.width, this.height)
   }

   isPointInside(point){
       if(point.x <= this.x1){
           if(point.y >= this.tip){
               if(point.y <= this.y){
                   if(point.x >= this.x2){
                       this.accept1 = (this.y-this.tip)/(this.x1-this.x)
                    //    this.accept2 = (this.y-this.tip)/(this.x2-this.x)
                       this.basey = point.y-this.tip
                       this.basex = point.x - this.x
                       if(this.basex == 0){
                           return true
                       }
                       this.slope = this.basey/this.basex
                       if(this.slope >= this.accept1){
                           return true
                       }
                   }
               }
           }
       }
       return false
   }
}






class Triangle{
    constructor(x, y, color, length){
        this.x = x
        this.y = y
        this.color= color
        this.length = length
        this.x1 = this.x + this.length*5
        this.x2 = this.x - this.length*5
        this.tip = this.y - this.length
        this.accept1 = (this.y-this.tip)/(this.x1-this.x)
        this.accept2 = (this.y-this.tip)/(this.x2-this.x)

    }

    draw(){
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.fillStyle = this.color
        tutorial_canvas_context.stokeWidth = 3
        tutorial_canvas_context.moveTo(this.x, this.y)
        tutorial_canvas_context.lineTo(this.x1, this.y)
        tutorial_canvas_context.lineTo(this.x, this.tip)
        tutorial_canvas_context.lineTo(this.x2, this.y)
        tutorial_canvas_context.lineTo(this.x, this.y)
        tutorial_canvas_context.stroke()
        tutorial_canvas_context.fill()
    }

    isPointInside(point){
        if(point.x <= this.x1){
            if(point.y >= this.tip){
                if(point.y <= this.y){
                    if(point.x >= this.x2){
                        this.accept1 = (this.y-this.tip)/(this.x1-this.x)
                        this.accept2 = (this.y-this.tip)/(this.x2-this.x)
                        this.basey = point.y-this.tip
                        this.basex = point.x - this.x
                        if(this.basex == 0){
                            return true
                        }
                        this.slope = this.basey/this.basex
                        if(this.slope >= this.accept1){
                            return true
                        }else if(this.slope <= this.accept2){
                            return true
                        }
                    }
                }
            }
        }
        return false
    }
}



class Swimmer{
    constructor(x,y){
        this.type = 2//Math.floor(Math.random()*3)
        this.anchor = {}
        this.anchor.xdif = 0
        this.anchor.ydif = 0
        this.body = new Circlec(x,y,15,"red")
        this.bodydraw = new Circlec(this.body.x,this.body.y,22,"red")
        this.bodydrawhuge = new Circlec(this.body.x,this.body.y,this.body.radius+17,"#AA00DD")
        this.marked = 0
        this.out = 0
        this.pops = []
        this.bopped = 0
        this.xrepelled = 0
        this.yrepelled = 0
    }
    
    pop(){
        let rotx = 0
        let roty = 0

        for(let g = 0; g < 7; g++){
            let color
            if(this.type == 0){
                if(g%2==0){
                    color = "#AA00DD"
                }else{
                    color = "#FFDD00"
                }
            }
            if(this.type == 1){
                if(g%2==0){
                    color = "#1100DD"
                }else{
                    color = "#DD0011"
                }
            }
            if(this.type == 2){
                if(g%2==0){
                    color = "#FF0000"
                }else{
                    color = "#00FF00"
                }
            }
            const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius/4, color, Math.cos(rotx)*4, Math.sin(roty)*4 )
            this.pops.push(dot1)
            rotx += 2*Math.PI/7
            roty += 2*Math.PI/7
        }
    
    }
    popdraw(){
        for(let t = 0;t<this.pops.length; t++){
            if(this.pops[t].radius < .1){
                this.pops.splice(t,1)
            }
        }
        for(let t = 0;t<this.pops.length; t++){
            this.pops[t].radius*=.8
            this.pops[t].move()
            this.pops[t].draw()
        }
        for(let t = 0;t<this.pops.length; t++){
            if(this.pops[t].radius < .1){
                this.pops.splice(t,1)
            }
        }
    }
    move(){

        
 

        const link = new Line(pomao.body.x,pomao.body.y, this.body.x,this.body.y, "red", 1)
        if(link.hypotenuse() < 450){
            if(this.type == 0){
            this.body.xmom += (pomao.body.x-this.body.x)/1200
            this.body.ymom += (pomao.body.y-this.body.y)/1200
            }
            if(this.type == 1){
            this.body.xmom += (pomao.body.x-this.body.x)/1000
            this.body.ymom += (pomao.body.y-this.body.y)/1200
            }
            if(this.type == 2){
            this.body.xmom += (pomao.body.x-this.body.x)/1200
            this.body.ymom += (pomao.body.y-this.body.y)/1000
            }
            for(let t = 0; (Math.abs(this.body.xmom)+Math.abs(this.body.ymom)) < 2; t++){
                this.body.ymom *=1.01
                this.body.xmom *=1.01
            }   
            this.body.x+=this.body.xmom
            this.body.y+=this.body.ymom
        }
        this.body.xmom*=.955
        this.body.ymom*=.955

        this.xrepel = 0
        this.yrepel = 0
        
    
    if(this.bodydraw.repelCheck(pomao.tongue)  || pomao.tonguebox.isPointInside(this.body)){
      this.marked = 1  
      this.body.radius*=.975
      if(this.anchor.xdif+this.anchor.ydif == 0){
        this.anchor.xdif = pomao.tongue.x-this.bodydraw.x
        this.anchor.ydif =pomao.tongue.y- this.bodydraw.y
        const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red",1)
        const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x-this.anchor.xdif, pomao.tongue.y-this.anchor.ydif, "red",1)
        if(link2.hypotenuse() > link1.hypotenuse()-10){
        this.anchor.xdif = .001
        this.anchor.ydif = 0
        }
    }
    }
    if(this.bodydraw.repelCheck(pomao.body) && (this.bodydraw.repelCheck(pomao.tongue)|| (this.marked == 1 ||this.marked == 2))){
      this.body.radius*=.9
      this.marked = 2
      pomao.diry = 1
    }else if (this.bodydraw.repelCheck(pomao.body) && !this.bodydraw.repelCheck(pomao.tongue )){
        if(this.body.x > pomao.body.x){
            this.bump = 1
        }else{
            this.bump = -1
        }
    //   if(pomao.body.ymom == 0){
              if(this.body.radius >= 15){
                  if(pomao.disabled != 1){
                      if(pomao.pounding!=10){
                        pomao.body.xmom = -3*(this.bump)
                        pomao.disabled = 1
                        pomao.hits--
                         pomao.body.ymom = -1.8
                         this.body.xmom = -pomao.body.xmom
                      }
                  }else{
                      if(this.bump*pomao.body.xmom >0){
                        pomao.body.xmom = -1.8*(this.bump)
                        pomao.body.ymom = -1.8
                        this.body.xmom = -pomao.body.xmom
                      }
                  }
              }
    //   }
    }

    if(this.marked == 1){
        this.body.x  -= ((this.body.x-pomao.tongue.x)/1)+(this.anchor.xdif*.9)
        this.body.y -= ((this.body.y-pomao.tongue.y)/1)+(this.anchor.ydif*.9)
    }
    if(this.marked == 2){
      this.body.x  -= ((this.body.x-pomao.body.x)/1.1)
      this.body.y -= ((this.body.y-pomao.body.y)/1.1)
      this.marked = 2
      pomao.diry = 1
    }

    if(this.marked == 0){
            for(let f = 0; f<swimmers.length; f++){
                if(this!==swimmers[f]){
                    if(this.bodydraw.repelCheck( swimmers[f].bodydraw)){
                        const distance = ((new Line(swimmers[f].body.x, swimmers[f].body.y, this.body.x, this.body.y, 1, "red")).hypotenuse())-(swimmers[f].bodydraw.radius+this.bodydraw.radius)
                        const angleRadians = Math.atan2(swimmers[f].body.y - this.body.y, swimmers[f].body.x - this.body.x);
                        this.xrepel += (Math.cos(angleRadians)*distance)/2
                        this.yrepel += (Math.sin(angleRadians)*distance)/2
                        // swimmers[f].xrepelled = 1
                    }
                }
            }

            if(this.xrepelled == 0){
                if(this.type == 0){
                    this.body.x+=this.xrepel
                    this.body.y+=this.yrepel
                }else  if(this.type == 1){
                    this.body.x+=this.xrepel
                    this.body.x+=this.yrepel/2
                }else  if(this.type == 2){
                    this.body.y+=this.xrepel/2
                    this.body.y+=this.yrepel
                }
            }

            this.xrepelled = 0
            this.yrepelled = 0

        }
    }
    clean(){
    
        for(let t = 0; t<shockfriendly.shocksl.length; t++){
            if(this.bodydrawhuge.repelCheck(shockfriendly.shocksl[t])){
             if(this.out<=0){
                this.pop()
             }
             this.out =45
                 break
             }

         }
         for(let t = 0; t<shockfriendly.shocksr.length; t++){
                if(this.bodydrawhuge.repelCheck(shockfriendly.shocksr[t])){
                 if(this.out<=0){
                    this.pop()
                 }
                 this.out =45
                     break
                 }
 
             }
         for(let t = 0; t<pomao.thrown.length; t++){
                if(this.bodydraw.repelCheck(pomao.thrown[t])){
                 //    boys[k].pop()
                 //    deadboys.push(boys[k])
                 //     boys.splice(k,1)
                 if(this.out<=0){
                    this.pop()
                 }
                 this.out =45
                     break
                 }
 
             }

        if(this.body.radius <= 1.5){
            this.out = 1
            pomao.hits+=1
            if(pomao.hits>9){
                pomao.hits = 9
            }
        if(pomao.eggs.length < 16){

        const seepx = new Seed(pomao.eggs[pomao.eggs.length-1])
            pomao.eggs.push(seepx)
        }
        }

        if(this.out==1){
            
            swimmers.splice(swimmers.indexOf(this),1)
        }else if(this.out>1){
            this.popdraw()
        }
        this.out--
    }
    draw(){
        if(this.out<=0 ){

            this.move()
            this.bodydraw = new Circlec(this.body.x,this.body.y,this.body.radius+7,"#AA00DD")
            this.bodydrawhuge = new Circlec(this.body.x,this.body.y,this.body.radius+17,"#AA00DD")
            tutorial_canvas_context.drawImage(rimgs[this.type], 0, 0, 48, 48, this.body.x-(24*(this.body.radius*.06666666666)), this.body.y-(24*(this.body.radius*.06666666666)), 48*(this.body.radius*.06666666666),  48*(this.body.radius*.06666666666))

      }
    }

}


class Boys {
    constructor(x, y, height, width, color) {
        this.pops = []
        this.squish = []
        this.x = x
        this.marked = 0
        this.y = y
        this.height = height
        this.width = width
        this.color = color
        this.xmom = 0
        this.ymom = 0
        this.dry = 0
        this.anchor = {}
        this.anchor.xdif = 0
        this.anchor.ydif = 0
        this.timeloop = 0
        this.type = Math.floor(Math.random()*17)
        this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/2.5, "blue")
        this.jumpcountercap = Math.floor(Math.random()*700)+100
        this.jumpcounter = Math.floor(Math.random()*this.jumpcountercap)
    }
    pop(){
        let rotx = 0
        let roty = 0
        const color = getRandomLightColor()
        for(let g = 0; g < 7; g++){
            const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius/4, color, Math.cos(rotx)*4, Math.sin(roty)*4 )
            this.pops.push(dot1)
            rotx += 2*Math.PI/7
            roty += 2*Math.PI/7
        }
    
    }
    popdraw(){
        for(let t = 0;t<this.pops.length; t++){
            if(this.pops[t].radius < .1){
                this.pops.splice(t,1)
            }
        }
        for(let t = 0;t<this.pops.length; t++){
            this.pops[t].radius*=.8
            this.pops[t].move()
            this.pops[t].draw()
        }
        for(let t = 0;t<this.pops.length; t++){
            if(this.pops[t].radius < .1){
                this.pops.splice(t,1)
            }
        }
    }

    gravity(){
        
        if(this.dry == 1){
            if(this.ymom > 0){
                this.ymom = 0
            }
            if(this.jumping == 0){
                 this.timeloopx = 0
            }
            this.jumping = 0
        }else{
            this.jumping = 1
            this.ymom += .1
        }
        this.dry = 0
        this.rstorage  = this.body.radius
        this.body.radius =  this.height*1.15
        for(let t = 0; t<floors.length; t++){

            if(squarecirclefeet(floors[t], this.body)){
                if(Math.abs((this.y+this.body.radius)-floors[t].y) <= this.body.radius){
                    if(this.ymom > -.3){
                        this.y = floors[t].y-this.body.radius
                        this.dry = 1
                    }
                    break
                }
            }
        }
        
        // this.body.radius =  this.height/2.8
        this.footspot = new Circle(this.body.x, this.body.y+((this.body.radius/2)-.01), 3, "red")
        // this.body.draw()
        // this.footspot.draw()
        for(let t = 0; t<ramps.length; t++){
        if(ramps[t].isPointInside(this.footspot)){
        for(let k = 0; k< 10000; k++){

                this.footspot = new Circle(this.body.x, this.body.y+((this.body.radius/2)-1), 3, "red")
                if(ramps[t].isPointInside(this.footspot)){

                    // if(this.footspot.y - this.body.radius  < this.body.y + this.body.radius ){

                        this.body.y =  this.footspot.y - this.body.radius/2 
                        this.y = this.body.y - this.height/2.3

                    // }
                
                    }
                }

                this.dry = 1
                // break
            }
        }
        this.body.radius =  this.body.radius/2
        for(let t = 0; t<floors.length; t++){

            if(squarecirclefeet(floors[t], this.body)){
                if(Math.abs((this.y+this.body.radius)-floors[t].y) <= this.body.radius){
                    if(this.ymom > -.3){
                        if(floors[t].y-this.body.radius < this.y){
                            this.y = floors[t].y-this.body.radius
                            this.dry = 1
                        }
                    }
                    break
                }
            }
        }
        this.body.radius =  this.rstorage 
    }
    move(){

        this.xrepel = 0
        this.yrepel = 0

        this.rstorage  = this.body.radius
        this.body.radius = 20

        

            for(let f = 0; f<boys.length; f++){
                if(this!==boys[f]){
                    if(this.body.repelCheck( boys[f].body)){
                        const distance = ((new Line(boys[f].body.x, boys[f].body.y, this.body.x, this.body.y, 1, "red")).hypotenuse())-(boys[f].body.radius+this.body.radius)
                        const angleRadians = Math.atan2(boys[f].body.y - this.body.y, boys[f].body.x - this.body.x);
                        this.xrepel += (Math.cos(angleRadians)*distance)/1.25
                        this.yrepel += (Math.sin(angleRadians)*distance)/1.25
                    }
                }
            }



        this.body.radius =  this.rstorage 
        this.rstorage  = this.body.radius
        this.body.radius = this.body.radius/2 
        
        this.blocked = 0
        for(let t = 0; t<walls.length;t++){
            if(squarecircleface(walls[t],this.body)){

                if(this.body.x > walls[t].x){
                this.blocked = 1
                }else{
                    this.blocked = -1
                }
            }
        }

        


        if(this.blocked == 0){
            this.x+=this.xmom
            this.x+=this.xrepel
        }else if (this.blocked == 1){
            if(this.xmom > 0){
                this.x+=this.xmom
            }
            if(this.xrepel > 0){
                  this.x+=this.xrepel
            }
        }else{
            if(this.xmom < 0){
                this.x+=this.xmom
            }
            
            if(this.xrepel < 0){
                  this.x+=this.xrepel
            }
        }
        
        this.body.radius =  this.rstorage 
        this.y+=this.ymom
        this.ymom*=.99
        this.xmom*=.99
        if(Math.abs(this.xmom) <1.5){  
         if(this.dry == 1){
        this.xmom = -1*(this.x-pomao.body.x)
        for (let t = 0;Math.abs(this.xmom) > 3; t++){
        this.xmom*=.99
         }
        }
        }
        this.jumpcounter++
        if(this.jumpcounter%this.jumpcountercap == 0){
            if(this.dry == 1){
                this.ymom = -7.1
            }
        }
    }
    draw(){

        this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width, "blue")
        if(this.marked == 0){
            this.gravity()
            this.move()
        }
        // tutorial_canvas_context.lineWidth = 1
        // tutorial_canvas_context.fillStyle = this.color
        // tutorial_canvas_context.strokeStyle = "blue"
        // // tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
        // tutorial_canvas_context.strokeRect(this.x, this.y, this.width, this.height)

        // this.body.draw()
        const sheetwidth = boysprites.width
        const sheetheight = boysprites.height
        const cols = 17
        const rows = 1
    


        const width = sheetwidth/cols
        const height = sheetheight/rows


       const  srcx = Math.floor(this.type)*width
      const   srcy = 0 //Math.floor(this.type2)*height

    //   if(this.type < 17){


                // tutorial_canvas_context.drawImage(pomaoimg, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
 
            
                this.timeloop+=.1

                if(this.marked == 3){

                }else{
                 tutorial_canvas_context.drawImage(boysprites, srcx, srcy, width, height, this.x, (10+this.y)-(Math.sin(this.timeloop)), this.width, this.height+(Math.sin(this.timeloop)))
                }


    //   }


    
    this.bodyx = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/2.5, "blue")
    
    this.body = new Circle(this.x+this.width/2, this.y+this.height/1.5+(this.width/5), this.width/2.4, "blue")
    // this.body.draw()
    tutorial_canvas_context.drawImage(boysprites, srcx, srcy, width, height, this.x, (10+this.y)-(Math.sin(this.timeloop)), this.width, this.height+(Math.sin(this.timeloop)))
    // this.bodyx.draw()
      if(this.body.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)){
        // this.x += pomao.tonguexmom -(((this.body.x-(this.width/2))-pomao.body.x)/100)
        // this.y += pomao.tongueymom -(((this.body.y-(this.height/2))-pomao.body.y)/100)
        // this.move()
        if(this.anchor.xdif+this.anchor.ydif == 0){
            this.anchor.xdif = pomao.tongue.x-this.body.x
            this.anchor.ydif =pomao.tongue.y- this.body.y
            const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red",1)
            const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x-this.anchor.xdif, pomao.tongue.y-this.anchor.ydif, "red",1)
            if(link2.hypotenuse() > link1.hypotenuse()-10){
            this.anchor.xdif = .001
            this.anchor.ydif = 0
            }
        }
        // console.log(this.anchor)
        this.marked = 1  
        this.width*=.995
        this.height*=.995
        // ////console.log(this)

        
      }
      
    this.body = new Circle(this.x+this.width/2, this.y+this.height/2+(this.width/5), this.width/1.8, "blue")
      if(this.body.repelCheck(pomao.bodytight) && ((this.body.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) || (this.marked == 1 ||this.marked == 2))){
        // this.x  -= (((this.body.x-(this.width/2))-pomao.body.x)/100)
        // this.y -= (((this.body.y-(this.height/2))-pomao.body.y)/100)
        this.width*=.91
        this.height*=.91
        this.marked = 2
        pomao.diry = 1
      }else if (this.body.repelCheck(pomao.body) && !this.body.repelCheck(pomao.tongue )){
        //   ////console.log(pomao.dir)

        if(this.body.x > pomao.body.x){
            this.bump = 1
        }else{
            this.bump = -1
        }
    //   if(pomao.body.ymom == 0){  
          if(this.width >= 50){
                  if(pomao.disabled != 1){
                    if(pomao.pounding!=10){
                      pomao.body.xmom = -(3+Math.abs(this.xmom))*(this.bump)
                      pomao.disabled = 1
                      pomao.hits--
                      pomao.body.sxmom = 0
                      pomao.body.symom = 0
                      pomao.body.ymom = -1.8
                      this.xmom = -pomao.body.xmom*.8
                    }
                  }else{
                    if(this.bump*pomao.body.xmom> 0){
                        pomao.body.xmom = -1.8*(this.bump)
                        pomao.body.ymom = -1.8
                        this.body.xmom = -pomao.body.xmom
                      }
                  }
        }
    }
        // ////console.log(pomao.dir, pomao.body.xmom)


      if(this.marked == 1){
        this.x  -= ((this.bodyx.x-pomao.tongue.x)/1)+(this.anchor.xdif*.9)
        this.y -= (((this.bodyx.y-pomao.tongue.y)/1)+(this.anchor.ydif*.9))+10
        // pomao.diry = 1

      }
      if(this.marked == 2){
        this.x  -= ((this.bodyx.x-pomao.body.x)/1.1)
        this.y -= ((this.bodyx.y-pomao.body.y)/1.1)
        this.marked = 2
        pomao.diry = 1


        // ////console.log(pomao)
      }
    //   if(this.marked == 3){
    //     this.x  -= ((this.body.x-pomao.body.x)/3.5)
    //     this.y -= ((this.body.y-pomao.body.y)/3.5)
    //     this.marked = 3
    //     // pomao.diry = 1


    //     // ////console.log(pomao)
    //   }


    }
    clean(){
      if(this.body.repelCheck(pomao.body)){
        if(this.width < 30){
            boys.splice(boys.indexOf(this),1)
            //sound (obnoxious)
            // if (jazz.duration > 0 && !jazz.paused) {
            //     ////console.log("top")
            //         jazz2.play()
            // }else{
            //     ////console.log("bottom")
            //     jazz.play()
            // }
            // jazz2.play()
            pomao.hits+=1
            if(pomao.hits>9){
                pomao.hits = 9
            }
        if(pomao.eggs.length < 16){

        const seepx = new Seed(pomao.eggs[pomao.eggs.length-1])
            pomao.eggs.push(seepx)
        }
        }
      }
    }
    isPointInside(point){
        if(point.x >= this.x){
            if(point.y >= this.y){
                if(point.x <= this.x+this.width){
                    if(point.y <= this.y+this.height){
                    return true
                    }
                }
            }
        }
        return false
    }
    // move(){
    //     this.x+=this.xmom
    //     this.y+=this.ymom
    // }
}

class Fruit {
    constructor(x, y, height, width, color) {
        this.anchor = {}
        this.anchor.xdif = 0
        this.anchor.ydif = 0
        this.squish = []
        this.x = x
        this.marked = 0
        this.y = y
        this.height = height
        this.width = width
        this.color = color
        this.xmom = 0
        this.ymom = 0
        this.type = Math.floor(Math.random()*10)
        this.type2 = Math.floor(Math.random()*10)
        this.loopoffset = Math.random()*Math.PI*2

            if(this.type == 1){
                if(this.type2 == 4){
                    if(Math.random()<.5){
                        this.type = Math.floor(Math.random()*10)
                        this.type2 =  Math.floor(Math.random()*10)
                    }
                }
            }
            
            if(this.type2 == 9){
                if(Math.random()<.99){
                    this.type2 =  Math.floor(Math.random()*9)
                }
            }

            this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/2.5, "blue")
            this.bodybig = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/1.5, "blue")
    }
    draw(){
        // tutorial_canvas_context.lineWidth = 1
        // tutorial_canvas_context.fillStyle = this.color
        // tutorial_canvas_context.strokeStyle = "red"
        // // tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
        // tutorial_canvas_context.strokeRect(this.x, this.y, this.width, this.height)

        this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/2.5, "blue")
        // this.body.draw()
        const sheetwidth = fruitsprites.width
        const sheetheight = fruitsprites.height
        const cols = 10
        const rows = 10
    
  

        const width = sheetwidth/cols
        const height = sheetheight/rows


       const  srcx = Math.floor(this.type)*width
      const   srcy = Math.floor(this.type2)*height

    //   this.type2 = 9
      if(this.type < 10){


        if(pomao.tripping <= 0){
        tutorial_canvas_context.drawImage(fruitsprites, srcx, srcy, width, height, this.x, this.y, this.width, this.height)
        }else{
            tutorial_canvas_context.drawImage(fruitsprites, srcx, srcy, width, height, this.x+(Math.sin(pomao.timeloop+this.loopoffset)*7.5), this.y+(Math.cos((pomao.timeloop/10)+this.loopoffset)*7.5), this.width+(Math.sin((pomao.timeloop/10)+this.loopoffset)*15), this.height+(Math.cos(pomao.timeloop+this.loopoffset)*15))
        }



      }else{
        tutorial_canvas_context.drawImage(cake, 0, 0, 186*6, 270*6, this.x-18, this.y-40, cake.width/12, cake.height/12)

      }


    
      this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/3, "blue")
      if(this.body.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)){
        // this.x += pomao.tonguexmom -(((this.body.x-(this.width/2))-pomao.body.x)/100)
        // this.y += pomao.tongueymom -(((this.body.y-(this.height/2))-pomao.body.y)/100)
        // this.move()
        this.marked = 1  
        this.width*=.995
        this.height*=.995
        if(this.anchor.xdif+this.anchor.ydif == 0){
            this.anchor.xdif = pomao.tongue.x-this.body.x
            this.anchor.ydif =pomao.tongue.y- this.body.y
            const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red",1)
            const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x-this.anchor.xdif, pomao.tongue.y-this.anchor.ydif, "red",1)
            if(link2.hypotenuse() > link1.hypotenuse()-10){
            this.anchor.xdif = .001
            this.anchor.ydif = 0
            }
        }
        // ////console.log(this)
    }
      this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/2.5, "blue")
      if(this.body.repelCheck(pomao.body)){
        // this.x  -= (((this.body.x-(this.width/2))-pomao.body.x)/100)
        // this.y -= (((this.body.y-(this.height/2))-pomao.body.y)/100)
        this.width*=.9
        this.height*=.9
        if(this.type == 11){
        this.width*=.8
        this.height*=.8
        }
        this.marked = 2
        pomao.diry = 1
        // ////console.log(pomao)
      }

      if(this.marked == 1){
      //console.log(this.anchor)
            this.x  -= ((this.body.x-pomao.tongue.x)/1)+(this.anchor.xdif*.9)
            this.y -= ((this.body.y-pomao.tongue.y)/1)+(this.anchor.ydif*.9)

      }
      if(this.marked == 2){
        this.x  -= ((this.body.x-pomao.body.x)/1.7)
        this.y -= ((this.body.y-pomao.body.y)/1.7)
        this.marked = 2
        pomao.diry = 1


        // ////console.log(pomao)
      }


    }
    clean(){
      if(this.body.repelCheck(pomao.body)){
        if(this.width < 20){
            if(this.type == 1){
                if(this.type2 == 4){
                    pomao.high = 1000
                }
            }

            if(this.type2 == 9){
                pomao.tripping = 820
            }
            if(this.type == 2){
                if(this.type2 == 1){
                    // if(pomao.eggs.length < 16){
                        pomao.eggmake = 161
                    // }
                }
            }
            if(this.type == 7){
                if(this.type2 == 7){
                    pomao.blush = 1000
                }
            }
            fruits.splice(fruits.indexOf(this),1)

            //sound (obnoxious)
            // if (jazz.duration > 0 && !jazz.paused) {
            //     ////console.log("top")
            //         jazz2.play()
            // }else{
            //     ////console.log("bottom")
            //     jazz.play()
            // }
            // jazz2.play()
            pomao.hits+=2
            if(this.type2 == 11){
                pomao.hits = 9
            }
            if(this.type2 == 8){
                if(this.type == 9){
                pomao.hits+=2
                }
            }
            if(pomao.hits>9){
                pomao.hits = 9
            }
        
        if(pomao.eggs.length < 16){

        const seepx = new Seed(pomao.eggs[pomao.eggs.length-1])
            pomao.eggs.push(seepx)
        }
        }
      }
    }
    isPointInside(point){
        if(point.x >= this.x){
            if(point.y >= this.y){
                if(point.x <= this.x+this.width){
                    if(point.y <= this.y+this.height){
                    return true
                    }
                }
            }
        }
        return false
    }
    move(){
        this.x+=this.xmom
        this.y+=this.ymom
    }
}
class Rectangle {
    constructor(x, y, height, width, color) {
        this.wall = 0
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.color = color
        this.xmom = 0
        this.ymom = 0
    }
    draw(){
        tutorial_canvas_context.fillStyle = this.color
        tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
    }
    move(){
        this.x+=this.xmom
        this.xmom *= .97
        this.y+=this.ymom
    }
    ymove(){
        if(this.ymom > 0){
            this.y+=this.ymom
        }
    }
    isPointInside(point){
        if(point.x >= this.x){
            if(point.y >= this.y){
                if(point.x <= this.x+this.width){
                    if(point.y <= this.y+this.height){
                    return true
                    }
                }
            }
        }
        return false
    }
}
class Circle{
    constructor(x, y, radius, color, xmom = 0, ymom = 0){

        this.height = 0
        this.width = 0
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xmom = xmom
        this.ymom = ymom
        this.xrepel = 0
        this.yrepel = 0
        this.lens = 0
    }       
     draw(){

        if(!ramps.includes(this)){
            tutorial_canvas_context.fillStyle = "cyan" //this.color
            }else{
            tutorial_canvas_context.fillStyle = this.color
            }
        tutorial_canvas_context.lineWidth = 4
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.beginPath();
        tutorial_canvas_context.arc(this.x, this.y, this.radius-1, 0, (Math.PI*2), true)
   
       tutorial_canvas_context.fill()
        tutorial_canvas_context.stroke(); 
    }
    move(){
        this.x += this.xmom
        this.y += this.ymom
        if(pomao.rooted == this){
            console.log(pomao)
            pomao.body.x += this.xmom
            pomao.body.y += this.ymom
            tutorial_canvas_context.translate(-this.xmom, -this.ymom)
            for(let t = 1; t<pomao.eggs.length; t++){
                if(pomao.eggs[t].marked == 0){
                    pomao.eggs[t].steer()
                    pomao.eggs[t].steery()
                }
            }
        }
        if(this == pomao.body){
            tutorial_canvas_context.translate(-this.xmom, -this.ymom)
        }
    }
    isPointInside(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
            return true
        }
        return false
    }

    repelCheck(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius+point.radius)*(point.radius+this.radius)){
            return true
        }
        return false
    }
}
class Circlec{
    constructor(x, y, radius, color, xmom = 0, ymom = 0){

        this.height = 0
        this.width = 0
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xmom = xmom
        this.ymom = ymom
        this.xrepel = 0
        this.yrepel = 0
        this.lens = 0
    }       
     draw(){   
         
        if(!ramps.includes(this)){
        tutorial_canvas_context.fillStyle = this.color
        }else{
        tutorial_canvas_context.fillStyle = this.color
        }
        tutorial_canvas_context.lineWidth = 4
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.beginPath();
        tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
 
       tutorial_canvas_context.fill()
        tutorial_canvas_context.stroke(); 
    }
    move(){
        this.x += this.xmom
        this.y += this.ymom
        if(this == pomao.body){
            tutorial_canvas_context.translate(-this.xmom, -this.ymom)
        }
    }
    isPointInside(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
            return true
        }
        return false
    }

    repelCheck(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius+point.radius)*(point.radius+this.radius)){
            return true
        }
        return false
    }
}
class Circlex{
    constructor(x, y, radius, color, xmom = 0, ymom = 0){

        this.height = 0
        this.width = 0
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.xmom = xmom
        this.ymom = ymom
        this.sxmom = 0
        this.symom = 0
        this.xrepel = 0
        this.yrepel = 0
        this.lens = 0
    }       
     draw(){
    }
    move(){

        this.x += this.xmom
        this.y += this.ymom  


        
        if(this == pomao.body){
            for(let t =1; t<pomao.eggs.length;t++){
            //     for(let k = 0; pomao.eggs[t].pos.length; k++){
                if(Math.abs(this.sxmom)>0){
                    pomao.eggs[t].steer()
                }else  if(Math.abs(this.xmom)>0){
                    pomao.eggs[t].steer()
                }
            //          break
            //         // ////console.log(pomao.eggs[t].pos)
            //     }
            }
            tutorial_canvas_context.translate(-this.xmom, -this.ymom)
        }
        this.smove()
    }
    ymove(){
        // this.x += this.xmom
        this.y += this.ymom
        if(this == pomao.body){
            tutorial_canvas_context.translate(0, -this.ymom)
        }

        // forgot symom, hopfully adding it won't break this // broke it, ok trying something else

        if(this.ymom+this.symom > 0){
                // this seems more normal and still balanced better than always adding it
        this.y += this.symom
        if(this == pomao.body){
            tutorial_canvas_context.translate(0, -this.symom)
        }
        }
        
    }
    smove(){
        this.x += this.sxmom
        this.y += this.symom

        for(let t = 0; t<blocks.length; t++){
            if(squarecirclefaceblockjump(blocks[t], pomao.body)){
                blocks[t].ymom = this.ymom+this.symom
                blocks[t].xmom = this.sxmom+this.xmom
            }
        }
        if(this == pomao.body){
            tutorial_canvas_context.translate(-this.sxmom, -this.symom)
        }
    }
    isPointInside(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
            return true
        }
        return false
    }

    repelCheck(point){
        this.areaY = point.y - this.y 
        this.areaX = point.x - this.x
        if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius+point.radius)*(point.radius+this.radius)){
            return true
        }
        return false
    }
}

class Line{
    constructor(x,y, x2, y2, color, width){
        this.x1 = x
        this.y1 = y
        this.x2 = x2
        this.y2 = y2
        this.color = color
        this.width = width
    }
    hypotenuse(){
        const xdif = this.x1-this.x2
        const ydif = this.y1-this.y2
        const hypotenuse = (xdif*xdif)+(ydif*ydif)
        return Math.sqrt(hypotenuse)
    }
    draw(){
        tutorial_canvas_context.strokeStyle = this.color
        tutorial_canvas_context.lineWidth = this.width
        tutorial_canvas_context.beginPath()
        tutorial_canvas_context.moveTo(this.x1, this.y1)         
        tutorial_canvas_context.lineTo(this.x2, this.y2)
        tutorial_canvas_context.stroke()
        tutorial_canvas_context.lineWidth = 1
    }
}



class Switchbutton{
    constructor(x,y){
        this.body = new Rectangle(x,y, 120,120, "black")
        this.img = new Image()
        this.img.src = 'EggSwitch.png'
        this.state = 0
    }
    detect(){
        for(let t = 0; t<pomao.thrown.length; t++){
            if(this.body.isPointInside(pomao.thrown[t])){
                if(this.state!=1){
                    pomao.thrown[t].markedx = 3
                    this.state = 1
                }
            }
        }
    }
    draw(){
        this.detect()
        // ////console.log(this)      
        // this.body.draw()
         tutorial_canvas_context.drawImage(this.img,   (this.img.width/2)*this.state, 0, (this.img.width/2), (this.img.height), this.body.x, this.body.y, this.body.width, this.body.height)
     
    // tutorial_canvas_context.drawImage(this.img, pomao.body.x-25, pomao.body.y-30, 60, 50)
    //     tutorial_canvas_context.drawImage(this.img,pomao.body.x,pomao.body.y, this.width, this.height)
    }
}


class Switchfloor{
    constructor(x,y,x2,y2,h,w){
        this.button = new Switchbutton(x,y)
        this.floor = new Rectangle(x2,y2,h,w, "red")
        floors.push(this.button.body)
        walls.push(this.button.body)
        roofs.push(this.button.body)
        floors.push(this.floor)
        walls.push(this.floor)
        roofs.push(this.floor)
        switches.push(this)
        this.cleared = 0
    }
    draw(){
        this.button.draw()
    }
    clear(){
        // console.log("hit")
        if(this.cleared == 0){
            if(this.button.state == 1){
                floors.splice( floors.indexOf(this.floor),1)
                walls.splice(walls.indexOf(this.floor),1)
                roofs.splice(roofs.indexOf(this.floor),1)
                this.cleared = 1
                }
        }
    }
}

class Health{
    constructor(pomao){
        this.pomao = pomao
        this.rays = []
        this.body = new Circle(this.pomao.body.x - 575, this.pomao.body.y - 300, 25, "red" )
    }
    draw(){
        this.body = new Circle(this.pomao.body.x - 575, this.pomao.body.y - 300, 25, "red" )
        this.body.draw()
        let a = Math.PI
        this.rays = []
        for(let t = 0; t<9; t++){
            const ray = new Circle(this.body.x+(Math.sin(a)*26),this.body.y+(Math.cos(a)*26), 5,"yellow")
            this.rays.push(ray)
            a+=(Math.PI/4.5)
        }
        for(let t = 0; t<this.pomao.hits;t++){
            this.rays[t].draw()
        }

    }
}
class Shape{
    constructor(shapes){
        this.shapes = shapes
    }
    isPointInside(point){
        for(let t = 0; t<this.shapes.length;t++){
            if(this.shapes[t].repelCheck(point)){
                return true
            }
        }
    
        return false
    }

}
class Pomao{
    constructor(){
        this.cutscene = 0
        this.eggmake=0
        this.rooted = {}
        this.rootedframe = 0
        this.dry = 0
        this.tongueray = []
        this.tonguebox = new Shape(this.tongueray)
        this.pausetimer = 10
        this.paused = 10
        this.fired = 0
        this.blocked = 0
        this.bonked = 0
        this.blush = 0
        this.high = 0
        this.tripping = 0
        this.eggtimer = 10
        this.body = new Circlex(640,360, 32, "red")
        this.tongue = new Circlec(this.body.x, this.body.y, 6, "blue")
        this.tonguex = 0
        this.tonguey = 0
        this.tonguexmom = 0
        this.tongueymom = 0
        this.runner = 0
        this.jumping = 1
        this.hng = 0
        this.dir = 1
        this.timeloop = 0
        this.timeloopx = 0
        this.thrown = []
        this.pounding = 0
        this.eggs = [this.body]
        this.disabled = 0
        this.hits = 9
        this.flap = 0
        this.flapstep = 0
        this.health = new Health(this)  
        this.rattled = 0

        this.positron = new CircleF(this.body.x, this.body.y,3, "gray",1)
        this.electron = new CircleF(this.body.x, this.body.y, 3, "gray",-1)
        this.positron2 = new CircleF(this.body.x, this.body.y,3, "gray",0,1)
        this.electron2 = new CircleF(this.body.x, this.body.y, 3, "gray",0,-1)
     
    }
    tonguecast(){
        
        this.tongueray = []
        if(!this.body.repelCheck(this.tongue)){
            for(let t=0;t<30;t++){
                const ray = new Circlec(this.body.x+(this.tonguex-(this.tonguex*.033333*t)),  (-(Math.sin(this.timeloop)*1.5))+this.body.y+(this.tonguey-(this.tonguey*.033333*t)), 1.5, "red"  )
                // ray.draw()
                this.tongueray.push(ray)
            }

        }
        
        this.tonguebox  = new Shape(this.tongueray)
    }
    gravity(){
        this.flapstep++
        if(this.flapstep%3 ==0){

            this.flap++
            this.flap %= 3
        }

        if(this.tripping > 0){

        for(let t = 0; t< 3; t++){

            this.positron.xmom -= (this.positron.x-this.electron.x)/1000
            this.electron.xmom += (this.positron.x-this.electron.x)/1000
            this.positron.ymom -= (this.positron.y-this.electron.y)/1000
            this.electron.ymom += (this.positron.y-this.electron.y)/1000

            this.positron.xmom -= (this.positron.x-this.body.x)/1000
            this.electron.xmom -= (this.electron.x-this.body.x)/1000
            this.positron.ymom -= (this.positron.y-this.body.y)/1000
            this.electron.ymom -= (this.electron.y-this.body.y)/1000

            // this.electron.xmom*=.99
            // this.electron.ymom*=.99
            // this.positron.xmom*=.99
            // this.positron.ymom*=.99

            this.electron.color = getRandomLightColortp()
            this.positron.color = getRandomLightColortp()
            this.electron.move()
            this.electron.draw()
            this.positron.move()
            this.positron.draw()
        }

        for(let t = 0; t< 3; t++){

            this.positron2.xmom -= (this.positron2.x-this.electron2.x)/1000
            this.electron2.xmom += (this.positron2.x-this.electron2.x)/1000
            this.positron2.ymom -= (this.positron2.y-this.electron2.y)/1000
            this.electron2.ymom += (this.positron2.y-this.electron2.y)/1000

            this.positron2.xmom -= (this.positron2.x-this.body.x)/1000
            this.electron2.xmom -= (this.electron2.x-this.body.x)/1000
            this.positron2.ymom -= (this.positron2.y-this.body.y)/1000
            this.electron2.ymom -= (this.electron2.y-this.body.y)/1000

            // this.electron2.xmom*=.99
            // this.electron2.ymom*=.99
            // this.positron2.xmom*=.99
            // this.positron2.ymom*=.99

            this.electron2.color = getRandomLightColortp()
            this.positron2.color = getRandomLightColortp()
            this.electron2.move()
            this.electron2.draw()
            this.positron2.move()
            this.positron2.draw()
        }


        }
        // ////console.log(this.electron, this.positron)

        if(dry == 1){
            if(this.body.ymom > 0){
                if(!keysPressed['s']  || (gamepadAPI.axesStatus[1] > .5)){
                this.body.ymom = 0
                }else{
                    this.body.ymom +=11.1
                }
            }
            if(this.jumping == 0){
                 this.timeloopx = 0
            }
            if(this.pounding > 0){
                this.pounding--
            }
            this.jumping = 0
            this.hng = 0
            
            // for(let t = 1; t<this.eggs.length; t++){
            //     this.eggs[t].posy = []
            // }
        }else{
            this.jumping = 1
            this.body.ymom += .1
            if(this.rootedframe <=0){
                this.rooted = {}
            }
            this.rootedframe--
         
        }
        dry = 0
        for(let t = 0; t<floors.length; t++){
            
            if(t > 0 && (keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) && !walls.includes(floors[t])){

            }else{

                if(walls.includes(floors[t]) && squarecirclefacetopbottom(floors[t], this.body)){
                    dry = 1

                    if(blocks.includes(floors[t])){
                        if(this.pounding == 10){
                            floors[t].ymom = this.body.radius
                            floors[t].move()
                        }
                    }
                    if(pomao.body.x > floors[t].x){
                        this.blocked = 1
                        }else{
                            this.blocked = -1
                        }

                        if(this.pounding == 10){
                            const cloudpuff = new Shockwave(this.body)
                            shocks.push(cloudpuff)
                        }
                        if(Math.abs(this.body.y-floors[t].y) <= this.body.radius){
                      
                            tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-(this.body.radius)))
                            this.body.y = floors[t].y-(this.body.radius)
                            dry = 1
                            if(blocks.includes(floors[t])){
                                if(this.pounding == 10){
                                    floors[t].ymom = this.body.radius
                                    floors[t].move()
                                }
                            }

                            if(this.pounding == 10){
                                const cloudpuff = new Shockwave(this.body)
                                shocks.push(cloudpuff)
                            }
                            if(pomao.body.symom != 0 || pomao.body.sxmom != 0){
                                this.tonguex = 0
                                this.tonguey = 0
                                resettonguediff()
                            }
                            pomao.body.symom = 0
                            pomao.body.ymom = 0
                            pomao.body.sxmom = 0
                            break
                        }
                }
            if(squarecirclefeet(floors[t], this.body)){
                    if(jellys.includes(floors[t])){
                        if(this.body.ymom>0){
                        this.body.ymom*=.9
                        }else{
                        this.body.ymom*=.95
                        }
                        // if(this.body.symom>0){
                        this.body.symom*=.4
                        this.body.sxmom*=.4
                        // }
                if(floors[t].isPointInside(this.body)){
                         dry = 1

                        if(blocks.includes(floors[t])){
                            if(this.pounding == 10){
                                floors[t].ymom = this.body.radius
                                floors[t].move()
                            }
                        }
                        
                }
                    }else{
                        
                    if(Math.abs(this.body.y-floors[t].y) <= this.body.radius){
                      
                        tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-this.body.radius))
                        this.body.y = floors[t].y-this.body.radius
                        dry = 1
                        if(blocks.includes(floors[t])){
                            if(this.pounding == 10){
                                floors[t].ymom = this.body.radius
                                floors[t].move()
                            }
                        }
                        if(pomao.body.symom != 0 || pomao.body.sxmom != 0){
                            this.tonguex = 0
                            this.tonguey = 0
                            resettonguediff()
                        }
                        pomao.body.symom = 0
                        pomao.body.ymom = 0
                        pomao.body.sxmom = 0
                        break
                    }

                    if(this.pounding == 10){
                        const cloudpuff = new Shockwave(this.body)
                        shocks.push(cloudpuff)
                    }
                    }

                    if(this.pounding == 10){
                        const cloudpuff = new Shockwave(this.body)
                        shocks.push(cloudpuff)
                    }
                }else if(squarecircleedges(floors[t],pomao.tongue) && !this.body.repelCheck(this.tongue)){
                    if(!ungrapplable.includes(floors[t])){
                    // tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-this.body.radius))
                    // this.body.y = floors[t].y-this.body.radius
                    if(this.tongueymom <0){
                        if(Math.abs(this.tonguey) >1){
                        this.body.symom +=this.tongueymom*1.1
                        }
                        if(Math.abs(this.tonguex) >15){
                            if( this.dir == -1){
                                this.body.sxmom -=Math.abs(this.tonguexmom*3)
                            }else{
                                this.body.sxmom +=Math.abs(this.tonguexmom*3)
                            }
                        }
                        this.tongueymom*=.49
                        this.tonguexmom*=.49
                    }else{
                        if(Math.abs(this.tonguey) >1){
                        this.body.symom -=this.tongueymom*1.1
                        }
                        if(Math.abs(this.tonguex) >15){
                            if( this.dir == -1){
                                this.body.sxmom -=Math.abs(this.tonguexmom*3)
                            }else{
                                this.body.sxmom +=Math.abs(this.tonguexmom*3)
                            }
                        }
                        if(!roofs.includes(floors[t])){

                        this.tongueymom*=.49
                        this.tonguexmom*=.49
                        }
                    }
                    pomao.body.ymom = 0
                    pomao.body.xmom *= .975
                    this.dry = 1
                    break
                }
                }
            }

        }
        for(let t = 0; t<ramps.length; t++){
            
            if(t > 0 && (keysPressed['s'] || (gamepadAPI.axesStatus[1]  > .5)) && !walls.includes(ramps[t])){

            }else{

                if(squarecirclefeet(ramps[t], this.body)){
                    if(jellys.includes(ramps[t])){
                        if(this.body.ymom>0){
                        this.body.ymom*=.9
                        }else{
                        this.body.ymom*=.95
                        }
                        // if(this.body.symom>0){
                        this.body.symom*=.4
                        // }
                if(ramps[t].isPointInside(this.body)){
                         dry = 1
                        
                }
                    }else{
                    if(Math.abs(this.body.y-ramps[t].y) <= this.body.radius){
                        if(ramps90.includes(ramps[t])){
                            if(ramps[t].x > pomao.body.x){

                                tutorial_canvas_context.translate(0,  this.body.y-(ramps[t].y-this.body.radius))
                                this.body.y = ramps[t].y-this.body.radius
                                dry = 1
                                if(pomao.body.symom != 0 || pomao.body.sxmom != 0){
                                    this.tonguex = 0
                                    this.tonguey = 0
                                    resettonguediff()
                                }
                                pomao.body.symom = 0
                                pomao.body.ymom = 0
                                pomao.body.sxmom = 0
                                break

                            }

                        }else{
                        tutorial_canvas_context.translate(0,  this.body.y-(ramps[t].y-this.body.radius))
                        this.body.y = ramps[t].y-this.body.radius
                        dry = 1
                        if(pomao.body.symom != 0 || pomao.body.sxmom != 0){
                            this.tonguex = 0
                            this.tonguey = 0
                            resettonguediff()
                        }
                        pomao.body.symom = 0
                        pomao.body.ymom = 0
                        pomao.body.sxmom = 0
                        break
                    }
                    }
                    }
                }else if(ramps[t].isPointInside(pomao.tongue)){
                    // tutorial_canvas_context.translate(0,  this.body.y-(ramps[t].y-this.body.radius))
                    // this.body.y = ramps[t].y-this.body.radius
                    if(this.tongueymom <0){

                        // if(!keysPressed['l'] && !keysPressed['j']){

                        // }else{
                        this.body.symom +=this.tongueymom*1.1
                        // }
                        if(Math.abs(this.tonguex) >15){
                            if( this.dir == -1){
                                this.body.sxmom -=Math.abs(this.tonguexmom*3)
                            }else{
                                this.body.sxmom +=Math.abs(this.tonguexmom*3)
                            }
                        }
                        this.tongueymom*=.5
                        this.tonguexmom*=.5
                    }else{
                        // if(!keysPressed['l'] && !keysPressed['j']){

                        // }else{
                        this.body.symom -=this.tongueymom*1.1
                        // }
                        if(Math.abs(this.tonguex) >15){
                            if( this.dir == -1){
                                this.body.sxmom -=Math.abs(this.tonguexmom*3)
                            }else{
                                this.body.sxmom +=Math.abs(this.tonguexmom*3)
                            }
                        }
                        if(!roofs.includes(ramps[t])){

                        this.tongueymom*=.49
                        this.tonguexmom*=.49
                        }
                    }
                    pomao.body.ymom = 0
                    pomao.body.xmom = 0
                    this.dry = 1
                    break
                }
            }

        }
        this.footspot = new Circle(this.body.x, this.body.y+(this.body.radius-.01), 3, "red")
        for(let t = 0; t<ramps.length; t++){
            
        // this.accept1 = (this.y-this.tip)/(this.x1-this.x)
        // this.accept2 = (this.y-this.tip)/(this.x2-this.x)

        // const yrat = (ramps[t].y-ramps[t].tip)
        // const x1dis = ramps[t].x1-ramps[t].x
        // const x2dis = this.footspot.x-ramps[t].x

        if(ramps[t].isPointInside(this.footspot)){
        for(let k = 0; k< 10000; k++){

            this.footspot = new Circle(this.body.x, this.body.y+(this.body.radius-1), 3, "red")
            if(ramps[t].isPointInside(this.footspot)){
                if(objsprings.includes(ramps[t])){
                    pomao.rooted = ramps[t]
                    pomao.rootedframe = 10
                }

                ramps[t].xmom += (this.body.xmom+this.body.sxmom)/3
                if(pomao.body.ymom > 0){
                    ramps[t].ymom += (this.body.ymom+this.body.symom)/8
                }
                if(ramps[t].ymom > 5){
                    ramps[t].ymom = 5
                }
                if(ramps[t].ymom < -5){
                    ramps[t].ymom = -5
                }
            this.body.sxmom = 0
            this.body.symom = 0
            if(k==0){
                if(this.pounding > 0){
                    this.pounding--
                }
            }
            this.jumping = 0
            this.hng = 0
                    tutorial_canvas_context.translate(0,  this.body.y- (this.footspot.y - this.body.radius ))
                    this.body.y =  this.footspot.y - this.body.radius 
                
            }
        }

                dry = 1
                break
            }
        }

        for(let t = 1; t<this.eggs.length; t++){
            if(this.eggs[t].marked == 0){
                this.eggs[t].steery()
            }
        }
    }
    draw(){
        this.eggmake--
        if(this.eggmake>0){
            if(this.eggmake%10 == 0){
                if(pomao.eggs.length < 16){
                    const seepx = new Seed(pomao.eggs[pomao.eggs.length-1])
                    pomao.eggs.push(seepx)
                }
            }
        }
        this.high--
        this.tripping--
        if(this.body.ymom + this.body.symom < 0){
            this.pounding = 0
        }
        if(this.rattled > 0){
        this.rattled--
        }else if(this.rattled < 0){
        this.rattled++
        }
        if(Math.abs(this.rattled < 3)){
            this.rattled = 0
        }
        this.blush--
        this.timeloop+=.05
        this.timeloops+=.01
        // this.bodytight = new Circle(this.body.x,this.body.y, 10, "yellow")
        // this.bodytight = new Circle(this.body.x,this.body.y, 15, "yellow")
        this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
        this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
        // this.bodytight.draw()
        // this.bodyxtight.draw()
        this.bodyloose = new Circle(this.body.x,this.body.y, 25, "yellow")

        this.blocked = 0
        for(let t = 0; t<walls.length;t++){
            if(squarecircleface(walls[t],pomao.body)){
                if(!blocks.includes(walls[t])){

                if(pomao.body.x > walls[t].x){
                this.blocked = 1
                }else{
                    this.blocked = -1
                }
                }
            }
        }
        this.bonked = 0
        for(let t = 0; t<roofs.length;t++){
            if(squarecirclehead(roofs[t],pomao.body)){
                this.rattled = Math.min(Math.round(20*(Math.abs(this.body.ymom)+Math.abs(this.body.symom))), 100)
                
                this.bonked = 1
                if(this.body.ymom < 0){
                    this.body.ymom *=-.1 //1 //.333
                }
                if(this.body.symom < 0){
                    this.body.symom *=-.1 //1 //.333
                }
            }
        }
        if(this.rattled == 50){
            this.rattled += 40.5
        }
        if(this.rattled == 50.5){
            this.rattled += 35.51
        }
        // if(this.rattled == 50.51){
        //     this.rattled *- -1.5
        // }
        if(this.cutscene <= 0){
            this.control()
        }
        if(this.blocked==0){

        this.body.move()
        }else{
        this.body.ymove()
        }
        this.gravity()
        // this.body.draw()
        this.tonguex+=this.tonguexmom
        this.tonguey+=this.tongueymom
        this.tonguex-=this.body.sxmom*.05
        this.tonguey-=this.body.symom*.05
        
        
        if(this.tongue.x > this.body.x){
            this.tonguexmom -=.5
        }
        if(this.tongue.x < this.body.x){
            this.tonguexmom +=.5
        }
        if(this.tongue.y > this.body.y && ((!keysPressed['l'] && !keysPressed['j']) || this.tongue.y > this.body.y+5)){
            this.tongueymom -=.5
        }
        if(this.tongue.y < this.body.y && ((!keysPressed['l'] && !keysPressed['j']) || this.tongue.y < this.body.y-5)){
            this.tongueymom +=.5
        }
        this.fired--
        if(this.bodytight.isPointInside(this.tongue)){
            // if(!keysPressed[' ']){
                // if(Math.abs(this.tongueymom) > 20  || Math.abs(this.tonguexmom) > 20 ){
                    if(this.fired <=0){
                        this.tonguexmom*=0
                        this.tongueymom*=0
                        this.tonguex*=.9
                        this.tonguey*=.9
                    }
                // }
            // }
        }else{
            this.tonguexmom*=.91
            this.tongueymom*=.91
        }
        this.tongue = new Circlec(this.body.x+this.tonguex, this.body.y+this.tonguey, 5, "blue")
        this.tongued1 = new Circle(this.body.x+this.tonguex+(this.rattled/3), this.body.y+this.tonguey, 5, "#0000FF77")
        this.tongued2 = new Circle(this.body.x+this.tonguex-(this.rattled/3), this.body.y+this.tonguey, 5, "#0000FF77")
        this.tonguecast()
        // if(this.rattled == 0){
        // }else{
        // this.tongued1.draw()
        // this.link = new Line(this.body.x+(this.rattled/3), 3+this.body.y-(Math.sin(this.timeloop)*1), this.tongued1.x, this.tongued1.y, "blue", 3)
        // this.link.draw()
        // this.tongued2.draw()
        // this.link = new Line(this.body.x-(this.rattled/3), 3+this.body.y-(Math.sin(this.timeloop)*1), this.tongued2.x, this.tongued2.y, "blue", 3)
        // this.link.draw()
        // }

        if(this.tongue.y > this.body.y - 14){
            this.diry = -1
        }else{
            this.diry = 0
        }



    if(this.tongue.x > this.body.x + 14){
        this.dir = 1
    }
    if(this.tongue.x < this.body.x - 14){
        this.dir = -1
    }

    this.height = 64+(Math.sin(this.timeloop)*(3+this.pounding))
    this.width = 64+(Math.sin(this.timeloopx)*1)
    if(this.jumping == 1){
        if(this.body.ymom < 0){
            this.height  = 68+this.pounding+Math.round((Math.abs(this.body.ymom)+Math.abs(this.hng)+Math.abs(this.body.symom))*1.9)
        }else{
            this.height  = 68+this.pounding
        }
    }
    if(this.jumping == 1){
        if(this.body.ymom < 0){
            this.width  = 60-(this.pounding+((Math.abs(this.body.ymom)+Math.abs(this.hng)+Math.abs(this.body.symom))*1.5))
        }else{
            this.width  = 60-this.pounding
        }
        // this.width  = 60-this.pounding
    }

        if(Math.abs(this.rattled < 3)){
            this.rattled = 0
        }
    for(let t = 0; t<pomao.thrown.length; t++){
        pomao.thrown[t].draw()
    }


    this.tongue.draw()

    this.link = new Line(this.body.x, 3+this.body.y-(Math.sin(this.timeloop)*1), this.tongue.x, this.tongue.y, "blue",3) // radius 3 // this.tongue.radius*1.1
    this.link.draw()
    for(let t = 0; t<fruits.length; t++){
        if(fruits[t].x > this.body.x-((tutorial_canvas.width/2)+fruits[t].width) && fruits[t].x < this.body.x+((tutorial_canvas.width/2)+fruits[t].width) ){
            if(fruits[t].y > this.body.y-((tutorial_canvas.height/2)+fruits[t].height) && fruits[t].y < this.body.y+((tutorial_canvas.height/2)+fruits[t].height) ){

            fruits[t].draw()
            
        }
    }
    }

    // for(let t = 0; t<fruits.length; t++){
    //         //394929
    //         fruits[t].draw()

    // }

    for(let t = 0; t<boys.length; t++){
        if(boys[t].x > this.body.x-(tutorial_canvas.width/1.6) && boys[t].x < this.body.x+(tutorial_canvas.width/1.6) ){
            if(boys[t].y > this.body.y-(tutorial_canvas.height/1.6) && boys[t].y < this.body.y+(tutorial_canvas.height/1.6) ){
            boys[t].draw()
            }
        }else{
            // boys[t].gravity()
            // boys[t].move()
        }
    }

    for(let t = 0; t<swimmers.length; t++){
        if(swimmers[t].body.x > this.body.x-(tutorial_canvas.width/1.6) && swimmers[t].body.x < this.body.x+(tutorial_canvas.width/1.6) ){
            if(swimmers[t].body.y > this.body.y-(tutorial_canvas.height/1.6) && swimmers[t].body.y < this.body.y+(tutorial_canvas.height/1.6) ){
            swimmers[t].draw()
            }
        }
        // }else{
        //     // boys[t].gravity()
        //     // boys[t].move()
        // }
    }
    // for(let t = 0; t<swimmers.length; t++){
    //         swimmers[t].draw()
    // }
    for(let t = 0; t<swimmers.length; t++){
            swimmers[t].clean()
    }


    for(let t = 0; t<deadboys.length; t++){
      deadboys[t].popdraw()
    }



    // this.link = new Line(this.body.x, 3+this.body.y, this.tongue.x, this.tongue.y, "blue", 3)
    // this.link.draw()


  if(this.diry == -1){
        hot--
        for(let t = 0;t<this.thrown.length; t++){
            if(this.body.repelCheck(this.thrown[t]) && this.thrown[t].timer < 5){
                hot=20
                this.thrown[t].timer = 6
            }
        }
        if(hot<=0){

            if(this.blush <= 1){

            if(this.disabled == 0){
            if(this.dir == 1){
                if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A') )){
                    tutorial_canvas_context.drawImage(pomaof, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                   }else{  
                        tutorial_canvas_context.drawImage(pomaoimg, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                  }
            }else{
                if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A') )){
                    tutorial_canvas_context.drawImage(pomaofl, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                   }else{  
                        tutorial_canvas_context.drawImage(pomaoimgl, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                  }
            }
        }else{
            if(this.dir == 1){
                if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A') )){
                    tutorial_canvas_context.drawImage(pomaofh, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                   }else{  
                        tutorial_canvas_context.drawImage(pomaoimgh, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                  }
            }else{
                if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A') )){
                    tutorial_canvas_context.drawImage(pomaoflh, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                   }else{  
                        tutorial_canvas_context.drawImage(pomaoimglh, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                  }
            }
        }
        }else{
            if(this.disabled == 0){
                if(this.dir == 1){
                    if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A') )){
                        tutorial_canvas_context.drawImage(pomaofb, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimgb, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }else{
                    if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A') )){
                        tutorial_canvas_context.drawImage(pomaoflb, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimgbl, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }
            }else{

            if(this.dir == 1){
                if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A') )){
                    tutorial_canvas_context.drawImage(pomaofbh, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                   }else{  
                        tutorial_canvas_context.drawImage(pomaoimglhb, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                  }
            }else{
                if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A') )){
                    tutorial_canvas_context.drawImage(pomaoflbh, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                   }else{  
                        tutorial_canvas_context.drawImage(pomaoimghb , this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                  }
            }
            }
        }
        }else{

            if(this.blush <= 1){
            if(this.dir == 1){

                if(this.hng !==0){
                    tutorial_canvas_context.drawImage(pomaospitf, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                  
                }else{

                    tutorial_canvas_context.drawImage(pomaospit, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                }
            }else{

                if(this.hng !==0){
                    tutorial_canvas_context.drawImage(pomaospitfl, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                }else{
                    tutorial_canvas_context.drawImage(pomaospitl, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )

                }
            }
        }else{
            if(this.dir == 1){

                if(this.hng !==0){
                    tutorial_canvas_context.drawImage(pomaospitfb, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                  
                }else{

                    tutorial_canvas_context.drawImage(pomaospitb, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                }
            }else{

                if(this.hng !==0){
                    tutorial_canvas_context.drawImage(pomaospitflb, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                }else{
                    tutorial_canvas_context.drawImage(pomaospitlb, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )

                }
            }

        }
        }
    }else{
        if(this.blush <= 1){
          
        if(this.dir == 1){
            tutorial_canvas_context.drawImage(pomaoimgup, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
        }else{
        tutorial_canvas_context.drawImage(pomaoimglup, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
        }

        }else{

        if(this.dir == 1){
            tutorial_canvas_context.drawImage(pomaoimgupb, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
        }else{
        tutorial_canvas_context.drawImage(pomaoimglupb, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
        }
        }
    }
    // this.diry = 1
    // this.body.draw()
    // this.footspot.draw()
    this.body.xmom *= .96
    if(Math.abs(this.body.xmom) < .5){
            this.body.xmom = 0
            this.disabled = 0
    }
    this.health.draw()
    }
    control(){

        if(gamepadAPI.buttonsStatus.includes('RB') || keysPressed['p']){
            if(this.pausetimer <= 0){
                this.paused =-10
                this.pausetimer = 20
            }
        }
        this.pausetimer--


        for(let t =0; t<blocks.length; t++){
            blocks[t].marked = 0
        }

        for(let t =0; t<blocks.length; t++){
            if(squarecirclefaceblockjump(blocks[t], pomao.body)){
                if(blocks[t].x < pomao.body.x){
                blocks[t].marked = 1
                }else{
                blocks[t].marked = -1
                }
            }
        }

        gamepadAPI.update()

        // ////console.log(gamepadAPI)
//   if(gamepadAPI.buttonsStatus.includes('A')){
    if(gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A')){
        // this.rooted = {}
      if(pomao.jumping == 0){
        pomao.body.ymom = -5.1

        this.runner = 0
      }else{

        if(pomao.runner > 37){

            if(pomao.hng < .1){
                pomao.hng+=.006
            }else  if(pomao.hng < .2){
                pomao.hng+=.006
            }else{
            pomao.hng+=.001
            }
            if(pomao.hng < .216){
            pomao.body.ymom += -pomao.hng
            ////console.log(pomao.hng)
            }else{
                // pomao.hng = -.05
                // pomao.runner = 0
            }

        }
    
      }
}else if(keysPressed['w']  || gamepadAPI.buttonsStatus.includes('A')){
    // this.rooted = {}
    if(this.jumping == 0){
        if(this.bonked ==0){
            
        this.body.ymom = -5.1
        this.runner = 0
        }
    }else{
        if(this.runner > 37){

            if(this.hng < .1){
                this.hng+=.006
            }else  if(this.hng < .2){
                this.hng+=.006
            }else{
            this.hng+=.001
            }
            if(this.hng < .216){
            this.body.ymom += -this.hng
            }else{
                // this.hng = -.05
                // this.runner = 0
            }

        }
    }
}else{
if(this.hng != 0){
        this.hng *= .997
    }
}

// pomao.xdir = 0
// pomao.ydir = 0




let gamepad
        // ////console.log(pomao)
   



        this.ydir = 0
        this.xdir = 0
        // for(let t = 0; Math.abs(this.body.ymom) > 5.2;t++){
        //     this.body.ymom*=.99
        // }
        for(let t = 0; Math.abs(this.body.symom) > 5.2;t++){
            this.body.symom*=.99
        }
        for(let t = 0; Math.abs(this.body.sxmom) > 3.5;t++){
            this.body.sxmom*=.99
        }
        this.body.sxmom*=.999

        this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
        this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")

//   if(gamepadAPI.buttonsStatus.includes('A')){
        if(keysPressed['f'] || keysPressed['n']  ||gamepadAPI.buttonsStatus.includes('DPad-Left')){
            // this.rooted = {}
            if(this.jumping == 1){
                if(this.body.ymom > -3.5){
                    if(this.runner > 21){


                        this.pounding = 10
                        this.body.ymom = 17
                        this.timeloop = Math.PI
                    }
                }
            }

        }
     



        this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
        this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
        if(keysPressed['a']  || keysPressed['d'] || (this.body.symom !== 0 || this.body.sxmom !== 0)){
            // this.rooted = {}
    for(let t = 1; t<this.eggs.length; t++){
        if(this.eggs[t].marked == 0){
            if(this.blocked == 0){
        this.eggs[t].steer()
            }
        }
    }
}


        if(keysPressed['s']){
            // this.body.y+=2
            // for(let t = 0; t<fruits.length; t++){
            //     if(this.body.repelCheck(fruits[t].body)  || fruits[t].body.repelCheck(this.tongue)){
            //         // fruits[t].y+=1.9
            //         // fruits[t].x+=this.body.xmom
            //         // fruits[t].y+=this.body.ymom
            //     }
            // }
        }


        this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
        this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
        if(this.disabled == 0){
        if(keysPressed['a']){
            // this.rooted = {}
            this.dir = -1
                if(this.blocked !== 1){
            this.dir = -1
            this.body.x-=3
            if(this.body.sxmom > 0){
                this.body.sxmom = 0
            }

            tutorial_canvas_context.translate(3, 0)
            for(let t = 0; t<fruits.length; t++){
                if(this.body.repelCheck(fruits[t].body)  || fruits[t].body.repelCheck(this.tongue)){
                    fruits[t].x-=2.9
                    // fruits[t].x+=this.body.xmom
                    // fruits[t].y+=this.body.ymom
                }
            }

                }

                for(let t = 0; t<blocks.length; t++){
                    if(blocks[t].marked == 1){
                  if(!nails.includes(blocks[t])){

                            blocks[t].x-=2.9999
                        }
                        // blocks[t].xmom-=.1
                    }
                }
        }else if(keysPressed['d']){
            // this.rooted = {}
            this.dir =1
            if(this.blocked !== -1){
            this.body.x+=3
            this.dir =1
            if(this.body.sxmom < 0){
                this.body.sxmom = 0
            }

            tutorial_canvas_context.translate(-3, 0)
            for(let t = 0; t<fruits.length; t++){
                if(this.body.repelCheck(fruits[t].body)  || fruits[t].body.repelCheck(this.tongue)){
                    fruits[t].x+=2.9
                    // fruits[t].x+=this.body.xmom
                    // fruits[t].y+=this.body.ymom
                }
            }    
            }
            for(let t = 0; t<blocks.length; t++){
                if(blocks[t].marked == -1){
              if(!nails.includes(blocks[t])){
                    blocks[t].x+=2.9999
                    }
                    // blocks[t].xmom+=.1
                }
            }
        }else if(gamepadAPI.axesStatus.length > 0){
            if(Math.abs(gamepadAPI.axesStatus[0]) >.2){
                // this.rooted = {}
                    // pomao.body.x+= gamepadAPI.axesStatus[0]*3
                    // tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
       
                // }else{
                // }else if(pomao.blocked*gamepadAPI.axesStatus[0]*3 > 0){
    
             
    
                if(this.blocked == 0){
                    if(gamepadAPI.axesStatus[0]*3 > 0 ){
                        // //console.log("top")
                        pomao.body.x+= gamepadAPI.axesStatus[0]*3
                        tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
    
                        for(let t = 0; t<blocks.length; t++){
                            if(blocks[t].marked == -1){
                          if(!nails.includes(blocks[t])){
                                blocks[t].x+=gamepadAPI.axesStatus[0]*2.999
                                }
                                // blocks[t].xmom+=.1
                            }
                        }
                    }else{
                        // //console.log("bottom")
                        pomao.body.x+= gamepadAPI.axesStatus[0]*3
                        tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
                        
                        for(let t = 0; t<blocks.length; t++){
                            if(blocks[t].marked == 1){
                          if(!nails.includes(blocks[t])){
                                blocks[t].x+=gamepadAPI.axesStatus[0]*2.999
                                }
                                // blocks[t].xmom+=.1
                            }
                        }
                    }
                    }else if(gamepadAPI.axesStatus[0]*3*this.blocked > 0){
                        // this.rooted = {}
                        pomao.body.x+= gamepadAPI.axesStatus[0]*3
                        tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
    
                        for(let t = 0; t<blocks.length; t++){
                            if(blocks[t].marked == 1){
                          if(!nails.includes(blocks[t])){
                                blocks[t].x+=gamepadAPI.axesStatus[0]*2.999
                                }
                                // blocks[t].xmom+=.1
                            }
                        }
                    }
             
                
                // }
                if(gamepadAPI.axesStatus[0]*3 < .1){
                    // this.rooted = {}
                    pomao.dir = -1
                    if(pomao.body.sxmom >0){
                        pomao.body.sxmom = 0
                    }
                }
                 if(gamepadAPI.axesStatus[0]*3 > -.1){
                    // this.rooted = {}
                    pomao.dir = 1
                    if(pomao.body.sxmom <0){
                        pomao.body.sxmom = 0
                    }
                }
                for(let t = 1;t<pomao.eggs.length;t++){
                    pomao.eggs[t].steer()
                }
            }
        }
    }
        // if(keysPressed['p']){
        //     tutorial_canvas_context.clearRect(-100000,-100000,tutorial_canvas.width*1000, tutorial_canvas.height*1000)
        // }

        this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
        this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
        if(keysPressed[' ']){

        this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
        this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
        this.tongue = new Circlec(this.body.x+this.tonguex, this.body.y+this.tonguey, 5, "blue")
            if(this.bodyxtight.isPointInside(this.tongue)){
                if(keysPressed['ArrowDown'] || keysPressed['k'] ){
                    this.ydir = 1
                    // this.tongueymom = 33
                    } if(keysPressed['ArrowUp'] || keysPressed['i'] ){
                        this.ydir = -1
                        // ////console.log('hit')
                        // this.tongueymom = -33
                        } if(keysPressed['ArrowLeft'] || keysPressed['j'] ){
                            this.xdir = -1
                            // this.tonguexmom = -33
                            } if(keysPressed['ArrowRight'] || keysPressed['l'] ){
                                this.xdir = 1
                                // this.tonguexmom = 33
                                }
                if(this.xdir == 1){
                    this.tonguexmom = 33.1/2
                    this.dir = 1
                }
                if(this.ydir == 1){
                    this.tongueymom = 33.1/2
                }
                if(this.xdir == -1){
                    this.tonguexmom = -33.1/2
                    this.dir = -1
                }
                if(this.ydir == -1){
                    this.tongueymom = -33.1/2
                }
                if(this.xdir*this.ydir != 0){
                    this.tonguexmom *= .81
                    this.tongueymom *= .81
                }

                if(this.xdir == 0 && this.ydir ==0){
                    if(this.dir == 1){
                        this.tonguey = 0
                        this.tongueymom = 0
                    this.tonguexmom = 34/2
                    }else{
                        this.tonguey = 0
                        this.tongueymom = 0
                    this.tonguexmom = -34/2
                    }
                }

                this.fired = 3
            }
        }else if(gamepadAPI.axesStatus.length > 0){
            if(Math.abs(gamepadAPI.axesStatus[2]) +Math.abs(gamepadAPI.axesStatus[3]) > .9  && !gamepadAPI.buttonsStatus.includes('Axis-Right')){

                this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
                this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
                if(pomao.bodyxtight.isPointInside(pomao.tongue)){
    
                    this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
                    this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
                  
                    let kick = 0





                    const hurtle = (Rax(Math.atan2(((gamepadAPI.axesStatus[3])), ((gamepadAPI.axesStatus[2]))))) 


                    if( (hurtle > 0 && hurtle < 22.5) ||  (hurtle > (360-22.5))){
                        pomao.xdir = 1
                        pomao.tonguexmom = 33.1/2
                        pomao.dir = 1
                        kick++
                    }
                    if( (hurtle > 22.5 && hurtle < 67.5)){
                        pomao.xdir = 1
                        pomao.tonguexmom = 33.1/2
                        pomao.dir = 1
                        kick++
                        pomao.ydir = 1
                        pomao.tongueymom = 33.1/2
                        kick++
                    }
                    if( (hurtle > 67.5 && hurtle < 112.5)){
                        pomao.ydir = 1
                        pomao.tongueymom = 33.1/2
                        kick++
                    }
                    if( (hurtle > 112.5 && hurtle < 157.5)){
                        pomao.xdir = -1
                        pomao.tonguexmom = -33.1/2
                        pomao.dir = -1
                        kick++
                        pomao.ydir = 1
                        pomao.tongueymom = 33.1/2
                        kick++
                    }
                    if( (hurtle > 157.5 && hurtle < 202.5)){
                        pomao.xdir = -1
                        pomao.tonguexmom = -33.1/2
                        pomao.dir = -1
                        kick++
                    }
                    if( (hurtle > 202.5 && hurtle < 247.5)){
                        pomao.xdir = -1
                        pomao.tonguexmom = -33.1/2
                        pomao.dir = -1
                        kick++
                        pomao.ydir = -1
                        pomao.tongueymom = -33.1/2
                        kick++
                    }
                    if( (hurtle > 247.5 && hurtle < 292.5)){
                        pomao.ydir = -1
                        pomao.tongueymom = -33.1/2
                        kick++
                    }
                    if( (hurtle > 292.5 && hurtle < (360-22.5))){
                        pomao.xdir = 1
                        pomao.tonguexmom = 33.1/2
                        kick++
                        pomao.dir = 1
                        pomao.ydir = -1
                        pomao.tongueymom = -33.1/2
                        kick++
                    }


                    if(kick == 2){
                        pomao.tonguexmom *= .81
                       pomao.tongueymom *= .81
                    }

                    this.fired = 3

                }
            }
        }else if (this.bodytight.isPointInside(this.tongue)){
            this.tonguey *=.5
            this.tonguex *=.5
        }


        this.ydir = 0
        this.xdir = 0
        this.eggtimer++

        this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
        this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
        if(this.eggs[this.eggs.length-1] != this.body){

            if(this.eggs.length > 1 && this.eggtimer > 10){
                this.eggtimer = 0
                if(keysPressed['m'] || (  gamepadAPI.buttonsStatus.includes('Axis-Right')      && (Math.abs(gamepadAPI.axesStatus[2]) +Math.abs(gamepadAPI.axesStatus[3]) > .3 ))){

                        if(keysPressed['ArrowDown'] || keysPressed['k'] ){
                            this.ydir = 1
                            // this.tongueymom = 33
                            } if(keysPressed['ArrowUp'] || keysPressed['i'] ){
                                this.ydir = -1
                                // ////console.log('hit')
                                // this.tongueymom = -33
                                } if(keysPressed['ArrowLeft'] || keysPressed['j'] ){
                                    this.xdir = -1
                                    // this.tonguexmom = -33
                                    } if(keysPressed['ArrowRight'] || keysPressed['l'] ){
                                        this.xdir = 1
                                        // this.tonguexmom = 33
                                        }


                                if(gamepadAPI.axesStatus[3] < -.3){
                                    pomao.ydir = -1
                                    // pomao.tongueymom = -33.1
                                } if(gamepadAPI.axesStatus[3] > .3){
                                    pomao.ydir = 1
                                    // pomao.tongueymom = 33.1
                                    pomao.dir = 1
                                }
                                if(gamepadAPI.axesStatus[2] > .3){
                                    pomao.xdir = 1
                                    // pomao.tonguexmom = 33.1
                                }
                                if(gamepadAPI.axesStatus[2] < -.3){
                                    pomao.xdir = -1
                                    // pomao.tonguexmom = -33.1
                                    pomao.dir = -1
                                }

                        if(this.xdir == -1){
                            this.eggs[this.eggs.length-1].x  = this.body.x+(this.dir*29)
                            this.eggs[this.eggs.length-1].y  = this.body.y
                            this.eggs[this.eggs.length-1].marked  = 1
                            this.eggs[this.eggs.length-1].xmom  = -12
                            this.eggs[this.eggs.length-1].ymom = -3
                            // this.thrown.push(this.eggs[this.eggs.length-1])
                            // this.eggs.pop()
                            this.dir = -1
                        }
                        if(this.xdir == 1){
                            this.eggs[this.eggs.length-1].x  = this.body.x+(this.dir*29)
                            this.eggs[this.eggs.length-1].y  = this.body.y
                            this.eggs[this.eggs.length-1].marked  = 1
                            this.eggs[this.eggs.length-1].xmom  = 12
                            this.eggs[this.eggs.length-1].ymom = -3
                            // this.thrown.push(this.eggs[this.eggs.length-1])
                            // this.eggs.pop()
                            this.dir = 1
                        }
                        if(this.ydir == 1){
                            this.eggs[this.eggs.length-1].x  = this.body.x+(this.dir*29)
                            this.eggs[this.eggs.length-1].y  = this.body.y
                            this.eggs[this.eggs.length-1].marked  = 1
                            this.eggs[this.eggs.length-1].xmom += this.dir
                            this.eggs[this.eggs.length-1].ymom = 8
                            // this.thrown.push(this.eggs[this.eggs.length-1])
                            // this.eggs.pop()
                        }
                        if(this.ydir == -1){
                            this.eggs[this.eggs.length-1].x  = this.body.x+(this.dir*29)
                            this.eggs[this.eggs.length-1].y  = this.body.y
                            this.eggs[this.eggs.length-1].marked  = 1
                            this.eggs[this.eggs.length-1].xmom += this.dir
                            this.eggs[this.eggs.length-1].ymom = -8
                            // this.thrown.push(this.eggs[this.eggs.length-1])
                            // this.eggs.pop()
                        }
                        if(this.xdir*this.ydir != 0){
                            // this.eggs[this.eggs.length-1].x  = this.body.x
                            // this.eggs[this.eggs.length-1].y  = this.body.y
                            this.eggs[this.eggs.length-1].marked  = 1
                            this.eggs[this.eggs.length-1].x  = this.body.x+(this.dir*29)
                            this.eggs[this.eggs.length-1].y  = this.body.y
                            this.eggs[this.eggs.length-1].xmom *= .8
                            this.eggs[this.eggs.length-1].ymom *= .8
                            // this.thrown.push(this.eggs[this.eggs.length-1])
                            // this.eggs.pop()
                        }
    
                        if(this.xdir == 0 && this.ydir ==0){
                            if(this.dir == 1){

                            this.eggs[this.eggs.length-1].x  = this.body.x+(this.dir*29)
                            this.eggs[this.eggs.length-1].y  = this.body.y
                            this.eggs[this.eggs.length-1].marked  = 1
                            this.eggs[this.eggs.length-1].xmom = 12
                            this.eggs[this.eggs.length-1].ymom = -.95
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                            }else{

                            this.eggs[this.eggs.length-1].x  = this.body.x+(this.dir*29)
                            this.eggs[this.eggs.length-1].y  = this.body.y
                            this.eggs[this.eggs.length-1].marked  = 1
                                this.eggs[this.eggs.length-1].xmom= -12
                                this.eggs[this.eggs.length-1].ymom = -.95
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                            }





                    // ////console.log(this.eggs)
                    // this.eggs.splice(this.eggs.length-1, 1)
                    // ////console.log(this.eggs)
                        }
    
        
                        if(Math.abs(gamepadAPI.axesStatus[3]) > .25 || Math.abs(gamepadAPI.axesStatus[2]) > .25){
                            this.eggs[this.eggs.length-1].ymom = (gamepadAPI.axesStatus[3]*14)
                            this.eggs[this.eggs.length-1].xmom = (gamepadAPI.axesStatus[2]*14)
                        }


                        if(pomao.blush > 1){
                            this.eggs[this.eggs.length-1].hot = 1
                        }
                        this.thrown.push(this.eggs[this.eggs.length-1])
                        for(let t = 0; t<pomao.eggs.length; t++){
                            if(pomao.thrown.includes(pomao.eggs[t])){
                                pomao.eggs.splice(t,1)
                            }
                        }
                }
            }

        }
    // if(keysPressed['ArrowDown'] || keysPressed['k'] ){
    //     this.ydir = 1
    //     // this.tongueymom = 33
    //     } 
        // if(keysPressed['ArrowUp'] || keysPressed['i'] ){
        //     this.ydir = -1
        //     // this.tongueymom = -33
        //     } 
            if(keysPressed['ArrowLeft'] || keysPressed['j'] ){
                this.xdir = -1
                this.dir = -1
                // this.tonguexmom = -33
                } 
                if(keysPressed['ArrowRight'] || keysPressed['l'] ){
                    this.xdir = 1
                    this.dir = 1
                    // this.tonguexmom = 33
                    }

        this.runner++
    }
    

}
class Bossbeam {
    constructor(){
        this.wall1 = new Rectangle(4700, -800, 1500, 50, "red")
        this.cleared = 0
        floors.push(this.wall1)
        walls.push(this.wall1)
        roofs.push(this.wall1)
        this.body1 = new Circle(9000,100, 10,"transparent")
        this.body2 = new Circle(9000,100, 10,"transparent")
        this.body3 = new Circle(9000,100, 10,"transparent")
        this.body1anchor = new Circle(this.body1.x+((Math.random()-.5)*200), this.body1.y+((Math.random()-.5)*200), 10,"transparent")
        this.body2anchor = new Circle(this.body2.x+((Math.random()-.5)*200), this.body2.y+((Math.random()-.5)*200), 10,"transparent")
        this.body3anchor = new Circle(this.body3.x+((Math.random()-.5)*200), this.body3.y+((Math.random()-.5)*200), 10,"transparent")
        this.health = 666
        this.beams = []
        this.beambox = new Shape(this.beams)
        this.bump = 0
        this.xrepel = 0
        this.yrepel = 0
    }
    draw(){
        if(this.health > 0){

            if(boss.body1.x > pomao.body.x-((tutorial_canvas.width*1)+boss.body1.radius) && boss.body1.x < pomao.body.x+((tutorial_canvas.width*1)+boss.body1.radius) ){
                if(boss.body1.y > pomao.body.y-((tutorial_canvas.height*1)+boss.body1.radius) && boss.body1.y < pomao.body.y+((tutorial_canvas.height*1)+boss.body1.radius) ){
                    this.move()
                }else{
                    this.beam()
                }
             }else{
                 this.beam()
             }

            for(let t=0;t<this.beams.length;t++){
                tutorial_canvas_context.drawImage(rimgs[0], 0, 0, 48, 48, this.beams[t].x-(24*(this.beams[t].radius*.06666666666)), this.beams[t].y-(24*(this.beams[t].radius*.06666666666)), 48*(this.beams[t].radius*.06666666666),  48*(this.beams[t].radius*.06666666666))

            }

            for(let t=0;t<pomao.thrown.length; t++){   
                if(this.beambox.isPointInside(pomao.thrown[t])){
                    this.health-=2.5
                }
            }
            for(let t=0;t<shockfriendly.shocksl.length; t++){   
                if(this.beambox.isPointInside(shockfriendly.shocksl[t])){
                    this.health-=.2
                }
            }
            for(let t=0;t<shockfriendly.shocksr.length; t++){   
                if(this.beambox.isPointInside(shockfriendly.shocksr[t])){
                    this.health-=.2
                }
            }
            if(this.beambox.isPointInside(pomao.body)){
                if(this.body1.x > pomao.body.x){
                    this.bump = 1
                }else{
                    this.bump = -1
                }
            //   if(pomao.body.ymom == 0){
                      if(this.body1.radius >= 1){
                          if(pomao.disabled != 1){
                              if(pomao.pounding!=10){
                                pomao.body.xmom = -3*(this.bump)
                                pomao.disabled = 1
                                pomao.hits-=2
                                 pomao.body.ymom = -1.8
                                //  this.body.xmom = -pomao.body.xmom
                              }
                          }else{
                              if(this.bump*pomao.body.xmom >0){
                                pomao.body.xmom = -1.8*(this.bump)
                                pomao.body.ymom = -1.8
                                // this.body.xmom = -pomao.body.xmom
                              }
                          }
                      }
            }
        }else{
            
            for(let t=0;t<this.beams.length;t++){
                tutorial_canvas_context.drawImage(rimgs[0], 0, 0, 48, 48, this.beams[t].x-(24*(this.beams[t].radius*.06666666666)), this.beams[t].y-(24*(this.beams[t].radius*.06666666666)), 48*(this.beams[t].radius*.06666666666),  48*(this.beams[t].radius*.06666666666))
                this.beams[t].move()
                this.beams[t].xmom *= .98
                this.beams[t].ymom *= .98
                if(this.beams[t].radius > 0){
                    this.beams[t].radius *= .975
                }
            }

            if(this.cleared == 0){
                
                for(let t=0;t<this.beams.length;t++){
                    this.beams[t].xmom = (Math.random()-.5)*9
                    this.beams[t].ymom = (Math.random()-.5)*9
            
                }
                
                for(let t=0;t<this.beams.length;t++){
                    for(let k = 0; Math.abs(this.beams[t].xmom)+Math.abs(this.beams[t].ymom) < 8; k++){
                        this.beams[t].xmom *=1.1
                        this.beams[t].ymom *=1.1
                    }
                }

            for(let t=0;t<this.beams.length;t++){
                
            }

                this.cleared = 1
                walls.splice(walls.indexOf(this.wall1),1)
                floors.splice(floors.indexOf(this.wall1),1)
                roofs.splice(roofs.indexOf(this.wall1),1)
            }
        }
    }
    move(){
        this.beam()
        this.body1.x+= (this.body1anchor.x-this.body1.x)/80
        this.body1.y+= (this.body1anchor.y-this.body1.y)/80
        this.body2.x+= (this.body2anchor.x-this.body2.x)/80
        this.body2.y+= (this.body2anchor.y-this.body2.y)/80
        this.body3.x+= (this.body3anchor.x-this.body3.x)/80
        this.body3.y+= (this.body3anchor.y-this.body3.y)/80
        
        this.body1anchor.xmom+= (this.body1anchor.x-pomao.body.x)/-500
        this.body1anchor.ymom+= (this.body1anchor.y-pomao.body.y)/-500
        this.body2anchor.xmom+= (this.body2anchor.x-pomao.body.x)/-500
        this.body2anchor.ymom+= (this.body2anchor.y-pomao.body.y)/-500
        this.body3anchor.xmom+= (this.body3anchor.x-pomao.body.x)/-500
        this.body3anchor.ymom+= (this.body3anchor.y-pomao.body.y)/-500
        
        this.body1anchor.move()
        this.body2anchor.move()
        this.body3anchor.move()

        
        this.body1anchor.xmom *= .98
        this.body2anchor.xmom *= .98
        this.body3anchor.xmom *= .98
        this.body1anchor.ymom *= .98
        this.body2anchor.ymom *= .98
        this.body3anchor.ymom *= .98

        if(this.body3anchor.repelCheck(this.body1anchor)){
            const distance = ((new Line(this.body1anchor.x, this.body1anchor.y, this.body3anchor.x, this.body3anchor.y, 1, "red")).hypotenuse())-(this.body1anchor.radius+this.body3anchor.radius)
            const angleRadians = Math.atan2(this.body1anchor.y - this.body3anchor.y, this.body1anchor.x - this.body3anchor.x);
            this.xrepel += (Math.cos(angleRadians)*distance)/2
            this.yrepel += (Math.sin(angleRadians)*distance)/2
        }
        

        this.body3anchor.x-=this.xrepel
        this.body3anchor.y-=this.yrepel
        this.body1anchor.x+=this.xrepel
        this.body1anchor.y+=this.yrepel

        
        this.xrepel = 0
        this.yrepel = 0


        if(Math.random()<.02){
            this.body3anchor = new Circle(this.body3anchor.x+((Math.random()-.5)*3300), this.body3anchor.y+((Math.random()-.5)*2100), 100,"transparent")
            // this.body3anchor.draw()
            }

            if(Math.random()<.01){
                this.body1anchor = new Circle(this.body1anchor.x+((Math.random()-.5)*3300), this.body1anchor.y+((Math.random()-.5)*2100), 100,"transparent")
                }

                if(Math.random()<.005){
                    this.body2anchor = new Circle(this.body2anchor.x+((Math.random()-.5)*1280), this.body2anchor.y+((Math.random()-.5)*720), 100,"transparent")
                    }

                    // this.body1anchor.draw()
                    // this.body2anchor.draw()
                    // this.body3anchor.draw()
    }
    beam(){
            
        this.beams = []
        if(this.health/20 >= 10){

            for(let t=0;t<this.health;t+=10){
                    
                let batte = (this.body1.x-this.body2.x)
                let battle = batte/this.health
                battle*=t
                let battey = (this.body1.y-this.body2.y)
                let battley = battey/this.health
                battley*=t
                    
                    const ray = new Circlec(this.body1.x+battle, this.body1.y+battley,(this.health/20)+5, "red"  )
                    this.beams.push(ray)
                    
                let battez = (this.body3.x-this.body2.x)
                let battlez = battez/this.health
                battlez*=t
                let batteyz = (this.body3.y-this.body2.y)
                let battleyz = batteyz/this.health
                battleyz*=t
                    
                    const rayx = new Circlec(this.body1.x+battlez, this.body1.y+battleyz,(this.health/20)+5, "red"  )
                    this.beams.push(rayx)
            }
        }else{
            
            for(let t=0;t<20;t++){
                    
                let batte = (this.body1.x-this.body2.x)
                let battle = batte/20
                battle*=t
                let battey = (this.body1.y-this.body2.y)
                let battley = battey/20
                battley*=t
                    
                    const ray = new Circlec(this.body1.x+battle, this.body1.y+battley,(this.health/20)+5, "red"  )
                    this.beams.push(ray)
                    
                let battez = (this.body3.x-this.body2.x)
                let battlez = battez/20
                battlez*=t
                let batteyz = (this.body3.y-this.body2.y)
                let battleyz = batteyz/20
                battleyz*=t
                    
                    const rayx = new Circlec(this.body1.x+battlez, this.body1.y+battleyz,(this.health/20)+5, "red"  )
                    this.beams.push(rayx)
            }
        }

    
        
        this.beambox  = new Shape(this.beams)
    }
}
class Shockwave{
    constructor(body){
            this.center = body
            this.shocksl = []
            this.shocksr = []
            this.shock()
            // console.log(this)

    }
    draw(){
    
        for (let n = 0; n<this.shocksr.length; n++){
            if(this.shocksr[n].radius < 3.5){
                this.shocksr.splice(n,4)
            }
        }
        for (let n = 0; n<this.shocksr.length; n++){
            this.shocksr[n].xmom *= .945
            this.shocksr[n].ymom *= .945
            this.shocksr[n].radius *= .92
            this.shocksr[n].move()
            // this.shocksr[n].draw()
        }



        for (let n = 0; n<this.shocksl.length; n++){
            if(this.shocksl[n].radius < 3.5){
                this.shocksl.splice(n,4)
            }
        }
        for (let n = 0; n<this.shocksl.length; n++){
            this.shocksl[n].xmom *= .945
            this.shocksl[n].ymom *= .945
            this.shocksl[n].radius *= .92
            this.shocksl[n].move()
            // this.shocksl[n].draw()
        }

        if(this.shocksl.length > 0){
        if(this.shocksr.length > 0){
            for (let n = 0; n<this.shocksl.length-1; n++){
                const link2 = new Line(this.shocksl[n].x,  this.shocksl[n].y+34, this.shocksl[n+1].x,  this.shocksl[n+1].y+34, "cyan", this.shocksl[n].radius/10)
                const link = new Line(this.shocksr[n].x,  this.shocksr[n].y+34, this.shocksr[n+1].x,  this.shocksr[n+1].y+34, "cyan", this.shocksr[n].radius/10)
         
            link.draw()
            link2.draw() 
            }
        }
    }
    }
    shock(){
        if(pomao.body.ymom > 10.2){
            const shockright = new Circlec(this.center.x-3, this.center.y, this.center.radius, "yellow", 20.5, 2)
            const shockleft = new Circlec(this.center.x+3, this.center.y, this.center.radius, "yellow", -20.5, 2)
            // const shockrightxz = new Circlec(this.center.x-3, this.center.y-17, this.center.radius, "yellow", 20.5, 2)
            // const shockleftxz = new Circlec(this.center.x+3, this.center.y-17, this.center.radius, "yellow", -20.5, 2)
            // const shockrightx = new Circlec(this.center.x-3, this.center.y+17, this.center.radius, "yellow", 20.5, 2)
            // const shockleftx = new Circlec(this.center.x+3, this.center.y+17, this.center.radius, "yellow", -20.5, 2)
            // const shockrightx2 = new Circlec(this.center.x-3, this.center.y+34, this.center.radius, "yellow", 20.5, 2)
            // const shockleftx2 = new Circlec(this.center.x+3, this.center.y+34, this.center.radius, "yellow", -20.5, 2)
            this.shocksl.push(shockleft)
            this.shocksr.push(shockright)
            // this.shocksl.push(shockleftxz)
            // this.shocksr.push(shockrightxz)
            // this.shocksl.push(shockleftx)
            // this.shocksr.push(shockrightx)
            // this.shocksl.push(shockleftx2)
            // this.shocksr.push(shockrightx2)
        }
    }
}

const pomao = new Pomao()

class Seed{
    constructor(target){
        // ////console.log(pomao)
        this.markedx = 0
        this.marked = 0
        this.target = target
        this.pos = []
        this.posy = []
        this.x = target.x + (pomao.dir*-30)
        this.y = target.y
        this.radius = 20
        this.ymom = -1.5
        this.xmom = 0
        this.gravity = .1
        this.width = 32
        this.height = 32
        this.count = 0
        this.county = 0
        this.jiggle = Math.random()*Math.PI*2
        this.color = getRandomLightColor()
        this.hot = 0
        this.timer = 0
    }
    steer(){



        if(pomao.eggs.includes(this)){
            this.marked = 0
        }
        if(pomao.thrown.includes(this)){
            this.marked = 1
        }
        if(this.marked == 0){

            
        // if()
        if(Math.abs(this.x-this.target.x) > 8){
            this.pos.push(this.target.x)
        }

        

        if((this.pos.length-13) > this.count){
            this.x = this.pos[this.count]
            this.count++
        }
    }
    }
    poshop(add){
        for(let t = 0; t< this.pos.length;t++){
            // this.pos[t]+=add
        }
    }
    steery(){

        if(pomao.eggs.includes(this)){
            this.marked = 0
        }
        if(pomao.thrown.includes(this)){
            this.marked = 1
            this.timer++
        }
        if(this.marked == 0){
        this.ymom = 0
        // if(Math.abs(this.y-this.target.y) > 5){
            this.posy.push(this.target.y)
        // }

        if((this.posy.length-10) > this.county){
            this.y = this.posy[this.county]
            this.county++
        }
    }
    }
    move(){
        this.y+= this.ymom
        this.x+= this.xmom
    }
    draw(){
        if(pomao.eggs.includes(this)){
            this.marked = 0
        }
        if(pomao.thrown.includes(this)){
            this.marked = 1
        }
        // ////console.log(pomao.eggs, pomao.thrown)

        if(this.marked == 0){

            this.jiggle+=.2
                tutorial_canvas_context.drawImage(seedegg, this.x-(this.width/2), (this.y+7)-(this.height/2)+(7*Math.cos(this.jiggle)),  this.width ,  this.height )
       
          
        }else{

            // this.newboll = new Circle(this.x, this.y, 10, this.color)
           
            // this.newboll.draw()
        if(this.hot == 0){
            tutorial_canvas_context.drawImage(seedegg, this.x-(this.width/2), (this.y)-(this.height/2),  this.width ,  this.height )
        }else{
            
        this.radius = 23
            if(this.xmom > 0){
                if(pomao.body.isPointInside(this)){
                    tutorial_canvas_context.drawImage(seedeggfl, this.x-(this.width/2), (this.y)-(this.height/2),  this.width/10 ,  this.height/10)
                }else{
                tutorial_canvas_context.drawImage(seedeggfl, this.x-(this.width/2), (this.y)-(this.height/2),  this.width ,  this.height )
                }
            }else{
                if(pomao.body.isPointInside(this)){
                tutorial_canvas_context.drawImage(seedeggf, this.x-(this.width/2), (this.y)-(this.height/2),  this.width/10 ,  this.height/10 )
                }else{
                tutorial_canvas_context.drawImage(seedeggf, this.x-(this.width/2), (this.y)-(this.height/2),  this.width ,  this.height )
                }
            }
        }
        }
        
        this.move()

        if(this.marked == 0){
        if(this.y+this.radius > 660){
            if(this.ymom > 0){
                if(this.marked == 0){
                    this.ymom*=-1
                }
            }
        }
            if(Math.abs(this.ymom)  > 1.5){
                this.ymom *= .97
            }else{
                this.ymom *= 1.01
            }
        }
        this.ymom+=this.gravity
     
    }
}



class Dialogue{
    constructor(x,y){
        this.timer = 200
        this.body = new Circle(x,y,100,"transparent")
        this.words = ["talk"]
        this.active = -1
        this.box = new Rectangle(x-50,y-50,40,90, "white")
        this.complete = 0

    }
    draw(){
        if(!this.body.repelCheck(pomao.body)){
            this.active = -1
        }
        if(this.active == -1){
            if(this.body.repelCheck(pomao.body)){
                this.active = 0
            }
        }
        if(this.active > 0){
            this.timer--
            if(this.timer <0){
                this.timer = 120
                this.active +=1
                if(this.active >= this.words.length){
                    this.active = this.words.length-1
                    this.complete = 1
                }
            }
            this.box.x = pomao.body.x-640
            this.box.y = pomao.body.y+60
            this.box.width = 1280
            this.box.height = 300
            this.box.draw()
            tutorial_canvas_context.fillStyle = "black";
            tutorial_canvas_context.font = "30px Arial";
            tutorial_canvas_context.fillText(`${this.words[this.active]}`,this.box.x+40, this.box.y+40);
        }else if (this.active == 0){
            this.box = new Rectangle(this.body.x-50,this.body.y-50,40,90, "white")
            this.box.draw()
            tutorial_canvas_context.fillStyle = "black";
            tutorial_canvas_context.font = "16px Arial";
            tutorial_canvas_context.fillText(`${this.words[this.active]}`,this.box.x+16, this.box.y+16);
            if(keysPressed['e'] || gamepadAPI.buttonsStatus.includes('Axis-Right')){
                this.active = 1
            }
        }
    }
}



// const seep

    // const seep = new Seed(pomao.eggs[pomao.eggs.length-1])
// const seeds = []

// pomao.eggs.push(seep)

tutorial_canvas_context.fillStyle = "black";
tutorial_canvas_context.font = `${30}px Arial`;
tutorial_canvas_context.fillText("loading", 300,350)

let boss = new Bossbeam()
let pin 
let pin2
const fractal = new Fractal(7)
const fracta2l = new Fractal2(7)
const fracta3l = new Fractal3(7)
let door = new Rectangle(4550, 450, 200, 200, "#090909")
// const door = new Rectangle(0, 0, 200, 200, "#090909")
// const fracta4l = new Fractal4(7)


const shockfriendly = new Shockwave(pomao.body)
shocks.push(shockfriendly)

loadlvl1()
// loadlvl2()
// loadlvl3()
// loadlvl4()
setTimeout(function(){
    

window.setInterval(function(){ 
    if(pomao.paused == 10){

    // "#AAAAFF"
    if(pomao.high > 1 && pomao.tripping > 0){
        tutorial_canvas_context.fillStyle =`rgba(85, 85, 128,${15/255})`
        tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)
       
    //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
    }else if(pomao.high > 1){
        tutorial_canvas_context.fillStyle =`rgba(153, 153, 230,${63/255})`
        tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)
       
    //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
    }else if (pomao.tripping > 0){


            tutorial_canvas_context.fillStyle =`rgba(190, 190, 255,${14/255})`
            tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)
          
    //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
        }else{
            tutorial_canvas_context.fillStyle =`rgba(170, 170, 255,${1})`
            tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)
 //pictures
            // if(keysPressed['p']){
            //     tutorial_canvas_context.clearRect(-100000,-100000,tutorial_canvas.width*1000, tutorial_canvas.height*1000)
            // }
            //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
           }
    if(pomao.hits > -1){
        // tutorial_canvas_context.drawImage(jumpometer, 0, 0, 10, 1000, -2200, -350, 10, 1000)
             
        drawFractal()   

        if(level == 1){
            tutorial_canvas_context.fillStyle = "black";
            tutorial_canvas_context.font = `${30}px Arial`;
            tutorial_canvas_context.fillText("M to throw eggs", 0,350)
            tutorial_canvas_context.fillText("<- W to jump", 300,350)
            tutorial_canvas_context.fillText("Space to lick", 310,290)
            tutorial_canvas_context.fillText("^ hold W to hover", -400,350)
            tutorial_canvas_context.fillText("Lick down in air (K+space) to pogo ->", -400,-120)
            tutorial_canvas_context.fillText("Lick diagonally (K+L/J+space) before you touch the floor to gain speed ->", 800,-120)
            tutorial_canvas_context.fillText("Hold S to pass down through thin floors     vvv", 2100,-120)
            tutorial_canvas_context.fillText("You made it! ->", 2900,500)
            tutorial_canvas_context.fillText(" Press N to Ground pound", 2600,220)
            tutorial_canvas_context.fillText(" Pomao can swim >^", 3200, -500)
            tutorial_canvas_context.fillText("Cancel your grappling momentum by tapping A/D ^", 3450, 500)
            tutorial_canvas_context.fillText("You can go up through thin floors ^", 3880, 420) 
            tutorial_canvas_context.fillText("pull yourself up with your tongue 'I' ^", 3880, 450)
            tutorial_canvas_context.fillText("Canceling momentum can help you climb walls! ^", 3800, 180)
            tutorial_canvas_context.fillText("Put an egg in the switch with M", 4050, -700)
            tutorial_canvas_context.fillText("Nice!", 4050, -770)
            tutorial_canvas_context.fillText("Beware the cave of the beast!", 11000, 500)
            tutorial_canvas_context.fillText("<= <= <=", 12800, 500)
            tutorial_canvas_context.fillText("Can't grapple ice!", 4300+(14*530),-5100-(14*150))
            tutorial_canvas_context.fillText("Try to pogo, then flutter up", 4300+(14*530),-5100-(14*148))
            door.draw()
            if(door.isPointInside(pomao.body)){
                loadlvl2()
                pmarinedisp = 0
            }
        }
        if(level == 2){
            if(chats[1].active > 0){
                if(chats[1].complete == 0){
                    pomao.disabled = 1
                    pomao.cutscene = 1
                    chats[0].words = ["talk"]
                    chats[0].words.push("Pomao, would you mind cleaning the fruits out of the back yard?")
                }else{
                    pomao.cutscene = 0
                    pomao.disabled = 0
                }
            }
            if(fruits.length == 0){
                
                chats[2].body.x = pomao.body.x
                chats[2].body.y = pomao.body.y
                pomao.cutscene = 1
                if(pmarinedisp == 0){
                    chats[2].active = 1
                    chats[2].body.x = pomao.body.x
                    chats[2].body.y = pomao.body.y
                }
                if(pomao.body.x+50 > pmarinedisp+5500){
                    chats[2].body.x = pomao.body.x
                    chats[2].body.y = pomao.body.y
                    // chats[2].active = 1
                }else{
                    pmarinedisp-=9
                }
            }
            if(chats[2].complete == 1){
                pmarinedisp = 0
                loadlvl3()
            }

            
        let momheight = 70+(Math.sin(((pomao.timeloop*1.3)+3.14))*1.7)
        tutorial_canvas_context.drawImage(pomomimg, 0,0,pomomimg.width,pomomimg.height, 500,-590-(Math.sin(((pomao.timeloop*1.3)+3.14))*1.9), 70,momheight)
      
        let pawheight = 70+(Math.sin(((pomao.timeloop*.75)+3.14))*2)
        tutorial_canvas_context.drawImage(pawmaoimg, 0,0,pawmaoimg.width,pawmaoimg.height, 2500,-3040-(Math.sin(((pomao.timeloop*.75)+3.14))*1.9), 70,pawheight)



        tutorial_canvas_context.drawImage(pomarinel, 0,0,pomarine.width,pomarine.height, 5500+pmarinedisp,-35, 70,70)
        
        }
        if(level == 3){
            

        
        tutorial_canvas_context.drawImage(pomarinel, 0,0,pomarine.width,pomarine.height, 4500-pmarinedisp,-35+pmarinedisp, 70,70)
        if(jailswitch == 0){

            let momheight = 70+(Math.sin(((pomao.timeloop*1.3)+3.14))*1.7)
            tutorial_canvas_context.drawImage(prisoner1img, 0,0,prisoner1img.width,prisoner1img.height, 200,-35-(Math.sin(((pomao.timeloop*1.3)+3.14))*1.9), 70,momheight)
          
            let pawheight = 70+(Math.sin(((pomao.timeloop*.75)+3.14))*2)
            tutorial_canvas_context.drawImage(prisoner2img, 0,0,prisoner2img.width,prisoner2img.height, 600,-35-(Math.sin(((pomao.timeloop*.75)+3.14))*1.9), 70,pawheight)
          
            let prisoner3height = 68+(Math.sin(((pomao.timeloop*.6)+3.14))*.8)
            tutorial_canvas_context.drawImage(prisoner3img, 0,0,prisoner3img.width,prisoner3img.height, 900,-34-(Math.sin(((pomao.timeloop*.6)+3.14))*.8), 70,prisoner3height)
    
            tutorial_canvas_context.drawImage(jailswitchimgl, 0,0,jailswitchimgl.width,jailswitchimgl.height, 4800,-95, 128,128)
        }else{
            chats = []

            floors = floors.filter(word => !invisblocks.includes(word));
            walls = walls.filter(word => !invisblocks.includes(word));
            roofs = roofs.filter(word => !invisblocks.includes(word));




        tutorial_canvas_context.drawImage(jailswitchimg, 0,0,jailswitchimg.width,jailswitchimg.height, 4800,-95, 128,128)
        floors[0].y+=10000
        }

        if(pmarinedisp == 0){
            for(let t = 0;t<shockfriendly.shocksl.length;t++){
                if(floors[floors.length-1].isPointInside(shockfriendly.shocksl[t]) || floors[floors.length-1].isPointInside(shockfriendly.shocksr[t])){
                    pmarinedisp-=10
                    floors[floors.length-1].y+=10000
                    break
                }
            }
        }else{
            pmarinedisp -= 9
        }
        
        for(let t = 0;t<shockfriendly.shocksl.length;t++){
            if(floors[floors.length-2].isPointInside(shockfriendly.shocksl[t]) || floors[floors.length-2].isPointInside(shockfriendly.shocksr[t])){
                if(pmarinedisp!=0){

                    jailswitch = 1
                }
            }
        }
        
        if(floors[floors.length-2].isPointInside(pomao.tongue) || floors[floors.length-2].isPointInside(pomao.tongue)){
            if(pmarinedisp!=0){
            jailswitch = 1
            }
        }
        door.draw()
        if(door.isPointInside(pomao.body)){
            loadlvl4()
            pmarinedisp = 0
        }
        }

       
for(let t = 0; t<ramps.length; t++){
    if(t > 1){

        if(typeof ramps[t].radius == "number"){

        }else{
            ramps[t].draw()
        }
           
        tutorial_canvas_context.drawImage(rampcurveimg1, 1656, 578, 488, 73 )
    
    }else{
        if(t==1){    
        tutorial_canvas_context.drawImage(rampimg1, ramps[t].x2, ramps[t].tip, ramps[t].x1-ramps[t].x2, ramps[t].y-ramps[t].tip )
        }    
        if(t==0){
        tutorial_canvas_context.drawImage(rampimg2, ramps[t].x2, ramps[t].tip, ramps[t].x1-ramps[t].x2, ramps[t].y-ramps[t].tip )
        }    
    }

}

//tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
      
    for(let t = 0; t<floors.length; t++){
        if(invisblocks.includes(floors[t])){

        }else{
        if(!jellys.includes(floors[t])){

        if(!nails.includes(floors[t]) && !ungrapplable.includes(floors[t])){
            if(walls.includes(floors[t])){

                if(floors[t].width<100){
                    if(invisblocks.includes(floors[t])){

                    }else{
                        if(level == 1){
                            tutorial_canvas_context.drawImage(walling, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                        }else if(level == 2){
                            
                            tutorial_canvas_context.drawImage(lvl2walling, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                            }else if(level ==3){
                            
                                tutorial_canvas_context.drawImage(lvl3floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                }else if(level == 4){
                    
                                    tutorial_canvas_context.drawImage(lvl4floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                 }
                    }
                }else{
                    if(level == 1){
                        tutorial_canvas_context.drawImage(floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                    }else if(level == 2){
                        
                tutorial_canvas_context.drawImage(lvl2floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                    }else if(level == 3){
                    
                        tutorial_canvas_context.drawImage(lvl3floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                     }else if(level == 4){
                    
                        tutorial_canvas_context.drawImage(lvl4floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                     }
                }
            }else{

                if(level == 1){
                    tutorial_canvas_context.drawImage(floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                }else if(level == 2){
                    
                    tutorial_canvas_context.drawImage(lvl2floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                }else if(level == 3){
                    
                    tutorial_canvas_context.drawImage(lvl3floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                 }else if(level == 4){
                    
                    tutorial_canvas_context.drawImage(lvl4floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                 }
            }
            }else{
                
            if(nails.includes(floors[t]) ){
            tutorial_canvas_context.drawImage(nailimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
            }
            if(ungrapplable.includes(floors[t])){
                floors[t].draw()
            }
            }
            }else{
                    floors[t].draw()
            }
        }
        }
        // floor.draw()

        for(let t = 0;t<switches.length;t++){
            switches[t].draw()
        }
        //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
        for(let t = 0; t<pomao.eggs.length; t++){
            pomao.eggs[t].draw()
        }

        

        if(pin.x > pomao.body.x-((tutorial_canvas.width*1.2)+pin.radius) && pin.x < pomao.body.x+((tutorial_canvas.width*1.2)+pin.radius) ){
            swinger1move()
        }else if(pin.y > pomao.body.y-((tutorial_canvas.height*1.2)+pin.radius) && pin.y < pomao.body.y+((tutorial_canvas.height*1.2)+pin.radius) ){
            swinger1move()
       }else if(pin2.x > pomao.body.x-((tutorial_canvas.width*1.2)+pin2.radius) && pin2.x < pomao.body.x+((tutorial_canvas.width*1.2)+pin2.radius) ){
        swinger1move()
        }else if(pin2.y > pomao.body.y-((tutorial_canvas.height*1.2)+pin2.radius) && pin2.y < pomao.body.y+((tutorial_canvas.height*1.2)+pin2.radius) ){
            swinger1move()
        }
        
        // swinger1move()
        pomao.draw()   
        

        if(pomao.pounding > 0){
                shockfriendly.shock()
        }   

//tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
        // block.draw()

        for(let t = 0; t<blocks.length; t++){
            blocks[t].touch = false
            // blocks[t].ymom +=.1
    for(let f = 0; f<floors.length; f++){
        if(blocks[t] != floors[f]){     
        if(squaresquare(floors[f], blocks[t])  ){
            // if(blocks[t].ymom > 0){
            //     blocks[t].ymom *= .1
            //     }
                blocks[t].touch = true
            }
        }
    }

        if(blocks[t].touch == false){

            // if(blocks[t].ymom > -.09){
                    blocks[t].ymom+=.2
            // }
        }else{
            if(blocks[t].ymom >0){
                blocks[t].ymom = 0
            }
        }
    

        // blocks[t].xmom*=.99
        // blocks[t].ymom*=.99
    }


        for(let t = 0; t<blocks.length; t++){

            if(!nails.includes(blocks[t])){
            blocks[t].move()
            }else{
            blocks[t].ymove()
            }
        }

        

        for(let t = 0; t<boys.length; t++){
            boys[t].clean()
        }
        // floor.draw()
        for(let t = 0; t<fruits.length; t++){
            fruits[t].clean()
        }

        for(let t = 0; t<pomao.eggs.length; t++){
            if(pomao.thrown.includes(pomao.eggs[t])){
                pomao.eggs.splice(t,1)
            }
        }


        for(let t = 0; t<jellys.length; t++){
            // if(!jellys.includes(floors[t])){

            // tutorial_canvas_context.drawImage(floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
            // }else{

             jellys[t].draw()
            // }
        }

    //     for(let t = 0; t<shocks.length; t++){
    //         if(shocks[t].shocksr.length == 0){
    //             shocks.splice(t,1)
    //         }
    //    }
       for(let t = 0; t<shocks.length; t++){
            shocks[t].draw()
       }

        

        for(let k = 0; k<boys.length; k++){
            for(let t = 0; t<pomao.thrown.length; t++){
                // ////console.log(boys[k])
                // ////console.log(pomao.thrown[t])
                boys[k].body.radius*=1.333333
                   if(boys[k].body.repelCheck(pomao.thrown[t])){
                       boys[k].pop()
                       deadboys.push(boys[k])
                        boys.splice(k,1)
                        break
                    }else{
                        boys[k].body.radius*=.75
                    }
    
                }
                for(let t = 0; t<shockfriendly.shocksl.length; t++){
                    // ////console.log(boys[k])
                    // ////console.log(pomao.thrown[t])
                    boys[k].body.radius*=1.333333
                       if(boys[k].body.repelCheck(shockfriendly.shocksl[t])){
                           boys[k].pop()
                           deadboys.push(boys[k])
                            boys.splice(k,1)
                            break
                        }else{
                            boys[k].body.radius*=.75
                        }
        
                    }
        for(let t = 0; t<shockfriendly.shocksr.length; t++){
            // ////console.log(boys[k])
            // ////console.log(pomao.thrown[t])
            boys[k].body.radius*=1.333333
               if(boys[k].body.repelCheck(shockfriendly.shocksr[t])){
                   boys[k].pop()
                   deadboys.push(boys[k])
                    boys.splice(k,1)
                    break
                }else{
                    boys[k].body.radius*=.75
                }

            }
        }

        fractal.draw()
        fracta2l.draw()
        fracta3l.draw()
        //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
        if(boss.body1.x > pomao.body.x-((tutorial_canvas.width*3)+boss.body1.radius) && boss.body1.x < pomao.body.x+((tutorial_canvas.width*3)+boss.body1.radius) ){
            if(boss.body1.y > pomao.body.y-((tutorial_canvas.height*3)+boss.body1.radius) && boss.body1.y < pomao.body.y+((tutorial_canvas.height*3)+boss.body1.radius) ){

             boss.draw()
            }
         }
        // fracta4l.draw()
        loader = 1000
    }else{
        loader--
        if(loader == 1){
            loader = 0
            pomao.hits = 9
            if(level == 1){
                loadlvl1()
            }
            if(level == 2){
                loadlvl2()
            }
            if(level ==3){
                loadlvl3()
            }
            if(level ==4){
                loadlvl4()
            }
        }

        tutorial_canvas_context.fillStyle = "White";
        tutorial_canvas_context.font = "30px Arial";
        tutorial_canvas_context.fillText(`Pomao fell asleep and went home`, pomao.body.x-200, pomao.body.y);
        tutorial_canvas_context.fillText(`(Loading level)`, pomao.body.x-100, pomao.body.y+50);
          tutorial_canvas.style.background = "#8888CC"
    }


    for(let t = 0; t<pomao.thrown.length; t++){
        if(pomao.thrown[t].markedx == 3){
            pomao.thrown.splice(t,1)
        }
    }
    for(let t = 0; t<switches.length; t++){
            if(switches[t].button.state == 1){
                switches[t].clear()
            }
        }

        // if(pomao.eggs.length < 10){

        //     const seepx = new Seed(pomao.eggs[pomao.eggs.length-1])
        //         pomao.eggs.push(seepx)
        //     }

        for(let t = 0;t<chats.length;t++){
            chats[t].draw()
        }
    }else{
        pomao.pausetimer++
        gamepadAPI.update()

        if(gamepadAPI.buttonsStatus.includes('RB') || keysPressed['p']){
            if(pomao.pausetimer > 40){
                pomao.paused = 10
                pomao.pausetimer = 10
            }
        }
    
        tutorial_canvas_context.fillStyle = "magenta";
        tutorial_canvas_context.fillText("paused", pomao.body.x-50,pomao.body.y-70)
    }

    // for(let t =0;t<ungrapplable.length;t++){
    //     ungrapplable[t].draw()
    // }
    // swinger1move()
},  14) 

}, 1);  //6969

function squarecirclefaceblockjump(square, circle){
const squareendh = square.y + square.height
const squareendw = square.x + square.width
if(square.x <= circle.x+circle.radius-3){
    if(square.y <= circle.y){
        if(squareendw+circle.radius-5 >= circle.x){
            if(squareendh >= circle.y){
                return true
            }
        }
    }
}
return false
}

function squarecirclefeet(square, circle){

const squareendh = square.y + square.height
const squareendw = square.x + square.width

if(square.x <= circle.x){
    if(square.y <= circle.y+circle.radius){
        if(squareendw >= circle.x){
            if(squareendh >= circle.y){
                return true
            }
        }
    }
}
//test
if(square.x <= circle.x+(circle.radius*.65)){
    if(square.y <= circle.y+circle.radius){
        if(squareendw >= circle.x){
            if(squareendh >= circle.y){
                return true
            }
        }
    }
}
if(square.x <= circle.x){
    if(square.y <= circle.y+circle.radius){
        if(squareendw+(circle.radius*.65) >= circle.x){
            if(squareendh >= circle.y){
                return true
            }
        }
    }
}
return false
}

function squarecirclefacetopbottom(square, circle){

const squareendh = square.y + square.height
const squareendw = square.x + square.width

if(square.x <= circle.x+(circle.radius-12)){
    if(square.y <= circle.y+(circle.radius)){
        if(squareendw >= circle.x-(circle.radius-12)){
            if(squareendh >= circle.y){
                return true
            }
        }
    }
}
return false
}


function squarecirclehead(square, circle){

const squareendh = square.y + square.height
const squareendw = square.x + square.width

if(square.x <= circle.x){
    if(square.y <= circle.y){
        if(squareendw >= circle.x){
            if(squareendh >= circle.y-circle.radius){
                return true
            }
        }
    }
}

//beneath here is expiriment
if(square.x <= circle.x+(circle.radius*.9)){
    if(square.y <= circle.y){
        if(squareendw >= circle.x){
            if(squareendh >= circle.y-circle.radius){
                return true
            }
        }
    }
}
if(square.x <= circle.x){
    if(square.y <= circle.y){
        if(squareendw+(circle.radius*.9) >= circle.x){
            if(squareendh >= circle.y-circle.radius){
                return true
            }
        }
    }
}
return false
}

function squarecircleface(square, circle){
const squareendh = square.y + square.height
const squareendw = square.x + square.width
if(square.x <= circle.x+circle.radius){
    if(square.y <= circle.y){
        if(squareendw+circle.radius >= circle.x){
            if(squareendh >= circle.y){
                return true
            }
        }
    }
}
return false
}
function squarecirclefaceball(square, circle){
const squareendh = square.y + square.height
const squareendw = square.x + square.width
if(square.x <= circle.x+circle.radius){
    if(square.y <= circle.y){
        if(squareendw+circle.radius >= circle.x){
            if(squareendh >= circle.y){
                return true
            }
        }
    }
}
return false
}
function squarecircleedges(square, circle){
const squareendh = square.y + square.height
const squareendw = square.x + square.width
if(square.x <= circle.x+circle.radius){
    if(square.y <= circle.y+circle.radius){
        if(squareendw+circle.radius >= circle.x){
            if(squareendh+circle.radius >= circle.y){
                return true
            }
        }
    }
}
return false
}
    
function getRandomLightColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[(Math.floor(Math.random() * 15)+1)];
}
return color;
}

function getRandomLightColortp() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[(Math.floor(Math.random() * 12)+3)];
}
color+="11"
return color;
}
function drawFractal(){

if(pomao.tripping > 0){
// if(Math.random()<.5){
    // ////console.time("frac")
    const sheetwidtht = zimgs[0].width
    const sheetheightt = zimgs[0].height
    const colst = 3
    const rowst = 3
    const widtht = sheetwidtht/colst
    const heightt = sheetheightt/rowst
    const  srcxt = Math.floor(fractal.runnerx%colst)*widtht
    const  srcyt = Math.floor(fractal.runnery%rowst)*heightt

    if(fractal.sheet < 0){
        fractal.sheet=0
    }
    // console.log(fractal.sheet, zimgs[fractal.sheet%zimgs.length])
     tutorial_canvas_context.drawImage(zimgs[fractal.sheet%zimgs.length], srcxt, srcyt, widtht, heightt, pomao.body.x-640, pomao.body.y-360, 1280, 720)
    //tutorial_canvas_context.drawImage(zimgs[fractal.sheet], 0, 0, widtht*3, heightt*3, pomao.body.x-640, pomao.body.y-360, 1280, 720)

    //  ////console.timeEnd("frac")
// }
}
}
function squaresquare(a, b){

a.left = a.x
b.left = b.x
a.right = a.x + a.width
b.right = b.x + b.width
a.top = a.y 
b.top = b.y
a.bottom = a.y + a.height
b.bottom = b.y + b.height



if (a.left > b.right || a.top > b.bottom || 
    a.right < b.left || a.bottom < b.top)
{
   return false
}
else
{
    return true
}
}

function Rax(isn){
let out = isn*(180 / Math.PI)
for(let i = 0;out<0;i++){
    out+=360
}
out = out%360
// //console.log(out)
return out
}


function resettonguediff(){
for(let g = 0; g<fruits.length;g++){
    if(fruits[g].marked == 1){
        fruits[g].anchor.xdif = 0
        fruits[g].anchor.ydif = 0
    }
} 
for(let g = 0; g<boys.length;g++){
    if(boys[g].marked == 1){
        boys[g].anchor.xdif = 0
        boys[g].anchor.ydif = 0
    }
}
for(let g = 0; g<swimmers.length;g++){
    if(swimmers[g].marked == 1){
        swimmers[g].anchor.xdif = 0
        swimmers[g].anchor.ydif = 0
    }
}
}
function swinger1move(){
for(let s = 0; s<springs.length; s++){
    if(pegged == 1){
    // pin2.xmom = 0
    // pin2.ymom = 0
    }else{
        }
        springs[s].balance()
        // springs[s].balance()
        // springs[s].balance()
    if(pegged == 1){
    // pin2.xmom = 0
    pin2.ymom += .01
    }
    if(pegged == 1){
    }
}
for(let s = 0; s<springs.length; s++){
    springs[s].move()
    springs[s].move()
    springs[s].move()
}
for(let s = 0; s<springs.length; s++){

    springs[s].draw()
}
pin.xmom *= .1
pin.ymom *= .1

pin2.xmom *= .98
pin2.ymom *= .98

pin.draw()
}

function loadlvl1(){

    
 pin = new Circle(9900,-8100, 10, "blue")
 pin2 = new Circle(9900, -8100+(7*220), 100, "orange")
 springs = []
 objsprings = []
    pomao.cutscene = 0
    pomao.eggs = [pomao.body]
    
    tutorial_canvas_context.translate(pomao.body.x-640, pomao.body.y-360)
    pomao.body.x = 640
    pomao.body.y = 360
 ramps90 = []
 swimmers = []
 floors = []
 ramps = []
 boys = []
 deadboys = []
 fruits = []
 walls = []
 invisblocks = []
 ungrapplable = []
 jellys = []
 roofs = []
 switches = []
 blocks = []
 nails = []
 chats = []
 springs = []
 objsprings = []


const floor = new Rectangle(-100000000, 650, 50, 7000000000, "red")
walls.push(floor)
roofs.push(floor)
floors.push(floor)

boss = new Bossbeam()

    
for(let t = 0; t<10; t++){
    const boy = new Boys(3750+(t*80),0,50,50,"red")
    boys.push(boy)
}


for(let t = 0; t<4; t++){
    const boy = new Boys(-1000+(t*100),550,50,50,"red")
    boys.push(boy)
}


for(let t = 0;t<90; t++){
    const fruit = new Fruit(4200+(Math.random()*330),-4450+(Math.random()*330), 60,60, "red")
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}

for(let t = 0;t<50; t++){
    const fruit = new Fruit(9800+(Math.random()*1150),-3490+(Math.random()*740), 60,60, "red")
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.bodybig.repelCheck(fruits[k].body) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}

for(let t = 0;t<30; t++){
    let bossfloors = new Rectangle(4800+(t*200), 300+Math.random()*200, 20, 120, "red")
    floors.push(bossfloors)
    let bossfloors2 = new Rectangle(4800+(t*200), -500+Math.random()*200, 20, 120, "red")
    floors.push(bossfloors2)
    let bossfloors3 = new Rectangle(4800+(t*200), -100+Math.random()*200, 20, 120, "red")
    floors.push(bossfloors3)
}

for(let t = 0;t<500; t++){
    const fruit = new Fruit(-2000+boss.body1.x+((Math.random()-.5)*9500),boss.body1.y-800+(Math.random()*1250), 60,60, "red")
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}



objsprings.push(pin2)

let spring = new Spring(pin)
springs.push(spring)
for(let k = 0; k<33;k++){
    spring = new Spring(spring.anchor)
    if(k < 32){
        springs.push(spring)
    }else if(k == 32 ){
        spring.anchor = pin2
        springs.push(spring)
    }
}
const wall = new Rectangle(2460, 0, 2000, 50, "red")
const wallt = new Rectangle(4500, -800, 2800, 50, "red")
const jwall1 = new Rectangle(3150, -200, 500, 50, "red")
const jelly = new Rectangle(3200, -180, 480, 500, "#00FFFF88")
const jwall2 = new Rectangle(3700, -200, 500, 50, "red")
const jfloor = new Rectangle(3150, 300, 50, 600, "red")
const jfloorsafe = new Rectangle(2900, 300, 20, 259, "red")
const jfloorsafe2 = new Rectangle(3691, 270, 20, 809, "red")
const lvl1floor1 = new Rectangle(4500, -800, 50, 7000, "red")
const lvl1wall1 = new Rectangle(4150, -9530, 8780, 50, "red")
for(let t = 0; t< 10; t++){
if(t!= 0){
    const width = (((100*60)-(t*(600+t)))/400)
    const lvl1floorloop = new Rectangle(4200, -4480+(t*350), 20,400+(Math.round(width)*400), "red")
    floors.push(lvl1floorloop)
    const lvl1floorloopsolid = new Rectangle(lvl1floorloop.x+lvl1floorloop.width-10,lvl1floorloop.y, 50, Math.round((t*t*70)*.0025)*400, "red")
    for(let t =lvl1floorloopsolid.x+750;t<lvl1floorloopsolid.x+lvl1floorloopsolid.width;t+=300){
        const boy = new Boys(t-50,lvl1floorloopsolid.y-50,50,50,'red')
        boys.push(boy)
    }
    floors.push(lvl1floorloopsolid)
    roofs.push(lvl1floorloopsolid)
    walls.push(lvl1floorloopsolid)
    for(let k = 0; k<floors.length;k++){
        if(k!=floors.indexOf(lvl1floorloopsolid)){
            if(lvl1floorloopsolid.x+lvl1floorloopsolid.width == floors[k].x + floors[k].width){
                const lvl1wallloopsolid = new Rectangle(lvl1floorloopsolid.x+lvl1floorloopsolid.width,floors[k].y, Math.abs(floors[k].y-lvl1floorloopsolid.y)+50 , 50, "red")
                floors.push(lvl1wallloopsolid)
                roofs.push(lvl1wallloopsolid)
                walls.push(lvl1wallloopsolid)
            }
        }
    }
}else{
const lvl1floorloop = new Rectangle(4200, -4480+(t*330), 50, 6850-(t*90), "red")
floors.push(lvl1floorloop)
roofs.push(lvl1floorloop)
walls.push(lvl1floorloop)
}
}
floors.push(lvl1floor1)
walls.push(lvl1floor1)
roofs.push(lvl1floor1)
walls.push(lvl1floor1)
walls.push(lvl1wall1)
floors.push(lvl1wall1)
roofs.push(lvl1wall1)
const roof = new Rectangle(0, 0, 50, 2500, "red")
const roof2 = new Rectangle(-2500, -500, 50, 5500, "red")
const buttonfloor = new Rectangle(4100, -530, 20, 420, "red")
floors.push(buttonfloor)
floors.push(wallt)
floors.push(wall)
floors.push(jwall1)
floors.push(jwall2)
floors.push(jfloor)
floors.push(jfloorsafe)
floors.push(jfloorsafe2)
walls.push(jfloor)
roofs.push(jfloor)
walls.push(jwall1)
walls.push(jwall2)
floors.push(jelly)
jellys.push(jelly)
walls.push(wall)
walls.push(wallt)
floors.push(roof)
walls.push(roof)
roofs.push(roof)
floors.push(roof2)
walls.push(roof2)
roofs.push(roof2)
const wall2 = new Rectangle(-2500, -500, 2000, 50, "red")
const wall3 = new Rectangle(2800, -500, 520, 50, "red")
const tutfloor = new Rectangle(2500, 0, 20, 350, "red")
floors.push(wall2)
floors.push(tutfloor)
walls.push(wall2)
floors.push(wall3)
walls.push(wall3)
roofs.push(wall3)
const block = new Rectangle(-1500, 200, 200,200, "orange")
const block2 = new Rectangle(2200, 200, 200,200, "orange")
const nail = new Rectangle(-1950, 200, 200,200, "orange")
nails.push(nail)
const floor2 = new Rectangle(-100, 500, 20, 550, "red")
const ramp2 = new Trianglex(1300, 651, "red", 40)
ramps.push(ramp2)
const ramp = new Triangle(800, 651, "red", 40)
ramps.push(ramp)
const ramp4 = new Circle(1900,700, 120, "red")
ramps.push(ramp4)
const ramp3 = new Circle(1900,1200, 600, "red")
ramps.push(ramp3)
floors.push(floor2)
floors.push(block)
walls.push(block)
blocks.push(block)
floors.push(block2)
walls.push(block2)
floors.push(nail)
// walls.push(nail)
blocks.push(nail)
blocks.push(block2)
const buttonswitch = new Switchfloor(4500,-640,  4500-2000, -800,50, 2050)
const lvl1buttonswitch = new Switchfloor(6500,-3540,  9800, -3540,50, 1300)
const lvl1buttonswitch1 = new Switchfloor(4080,-2540,  4200, -4150,50,380)
const lvl1buttonswitchwall2 = new Switchfloor(4080,-2540,  4550, -4450,330, 50)
lvl1buttonswitchwall2.button = lvl1buttonswitch1.button
const lvl1fooroverhang = new Rectangle(10800, -2800, 50, 250, "red")
floors.push(lvl1fooroverhang)
walls.push(lvl1fooroverhang)
roofs.push(lvl1fooroverhang)
const lvl1fooroverhangwall = new Rectangle(11000, -3540, 3900, 50, "red")
floors.push(lvl1fooroverhangwall)
walls.push(lvl1fooroverhangwall)
roofs.push(lvl1fooroverhangwall)
const ramp5 = new Triangle90(lvl1fooroverhangwall.x+1300, lvl1fooroverhangwall.y, "red", 100)
ramps.push(ramp5)
ramps90.push(ramp5)
const ramp6 = new Triangle90l(lvl1fooroverhangwall.x, lvl1fooroverhangwall.y-530, "red", 75)
ramps.push(ramp6)
ramps.push(pin2)
for(let t = ramp6.y-1000;t<ramp6.y-150; t+=150){
    let ladderfloor = new Rectangle(ramp6.x, t, 20, 150)
    floors.push(ladderfloor)
}
const trapswitch1 = new Switchfloor(ramp6.x-120,ramp6.y-350, ramp6.x-500, ramp6.y, 50, 550 )
const trapswitch2 = new Switchfloor(ramp6.x-120,ramp6.y-350, ramp6.x-500, ramp6.y-400, 450, 50)
trapswitch1.button = trapswitch2.button
for(let t = 0;t<10000; t++){
    const fruit = new Fruit(ramp6.x-550+(Math.random()*400),ramp6.y-350+(Math.random()*400), 60,60, "red")
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}
const lvl1fooroverhangwallramp = new Rectangle(ramp6.x-40, ramp6.y, 50, 790, "red")
floors.push(lvl1fooroverhangwallramp)
walls.push(lvl1fooroverhangwallramp)
roofs.push(lvl1fooroverhangwallramp)
const lvl1fooroverhangwallfar = new Rectangle(ramp6.x+2000,-8100, 8850, 50, "red")
floors.push(lvl1fooroverhangwallfar)
walls.push(lvl1fooroverhangwallfar)
roofs.push(lvl1fooroverhangwallfar)
const lvl1fooroverhangwallfarzig = new Rectangle(ramp6.x+300,-3100, 50, 1750, "red")
floors.push(lvl1fooroverhangwallfarzig)
walls.push(lvl1fooroverhangwallfarzig)
roofs.push(lvl1fooroverhangwallfarzig)
const lvl1fooroverhangwallfarzag = new Rectangle(ramp6.x,-2700, 50, 1750, "red")
floors.push(lvl1fooroverhangwallfarzag)
walls.push(lvl1fooroverhangwallfarzag)
roofs.push(lvl1fooroverhangwallfarzag)
const lvl1fooroverhangwallfarzug = new Rectangle(ramp6.x,-1400, 50, 1750, "red")
floors.push(lvl1fooroverhangwallfarzug)
walls.push(lvl1fooroverhangwallfarzug)
roofs.push(lvl1fooroverhangwallfarzug)
const lvl1fooroverhangwallfarzyg = new Rectangle(ramp6.x+300,-1900, 50, 500, "red")
floors.push(lvl1fooroverhangwallfarzyg)
walls.push(lvl1fooroverhangwallfarzyg)
roofs.push(lvl1fooroverhangwallfarzyg)
const lvl1fooroverhangwallfarzag2 = new Rectangle(ramp6.x+300,-2300, 600, 50, "red")
floors.push(lvl1fooroverhangwallfarzag2)
walls.push(lvl1fooroverhangwallfarzag2)
roofs.push(lvl1fooroverhangwallfarzag2)
const lvl1fooroverhangwallfarzag4 = new Rectangle(ramp6.x+1700,-2000, 600, 50, "red")
floors.push(lvl1fooroverhangwallfarzag4)
walls.push(lvl1fooroverhangwallfarzag4)
roofs.push(lvl1fooroverhangwallfarzag4)
const lvl1fooroverhangwallfarzag4x = new Rectangle(ramp6.x+1350,-1800, 400, 50, "red")
floors.push(lvl1fooroverhangwallfarzag4x)
walls.push(lvl1fooroverhangwallfarzag4x)
roofs.push(lvl1fooroverhangwallfarzag4x)
const lvl1fooroverhangwallfarzag4y = new Rectangle(ramp6.x+1000,-1600, 200, 50, "red")
floors.push(lvl1fooroverhangwallfarzag4y)
walls.push(lvl1fooroverhangwallfarzag4y)
roofs.push(lvl1fooroverhangwallfarzag4y)
for(let t = 0;t<400; t++){
    const fruit = new Fruit(ramp6.x+(Math.random()*2000),ramp5.y+(Math.random()*4000), 60,60, "red")
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}
const lvl1fooroverhangwallfarzag3 = new Rectangle(ramp6.x+300,-2300, 50, 1750, "red")
floors.push(lvl1fooroverhangwallfarzag3)
walls.push(lvl1fooroverhangwallfarzag3)
roofs.push(lvl1fooroverhangwallfarzag3)
const lvl1fooroverhangwallfarroof = new Rectangle(4200, -8100, 50, 10050, "cyan")
floors.push(lvl1fooroverhangwallfarroof)
walls.push(lvl1fooroverhangwallfarroof)
roofs.push(lvl1fooroverhangwallfarroof)
ungrapplable.push(lvl1fooroverhangwallfarroof)
const lvl1fooroverhangwallrampxnograp = new Rectangle(ramp5.x-20, ramp5.y-4000, 2050, 50, "cyan")
floors.push(lvl1fooroverhangwallrampxnograp)
walls.push(lvl1fooroverhangwallrampxnograp)
roofs.push(lvl1fooroverhangwallrampxnograp)
ungrapplable.push(lvl1fooroverhangwallrampxnograp)
const backwall = new Rectangle(-5000,-10000, 12000, 50, "cyan")
floors.push(backwall)
walls.push(backwall)
roofs.push(backwall)
ungrapplable.push(backwall)
ungrapplable.push(lvl1fooroverhangwallrampxnograp)
const topwall = new Rectangle(-5000,-5000, 50, 9150, "cyan")
floors.push(topwall)
walls.push(topwall)
roofs.push(topwall)
ungrapplable.push(topwall)
const lvl1fooroverhangwallrampx = new Rectangle(ramp5.x-20, ramp5.y-2000, 2050, 50, "red")
floors.push(lvl1fooroverhangwallrampx)
walls.push(lvl1fooroverhangwallrampx)
roofs.push(lvl1fooroverhangwallrampx)
const lvl1fooroverhangwallrampy = new Rectangle(ramp6.x, ramp6.y-1000, 1000, 50, "red")
floors.push(lvl1fooroverhangwallrampy)
walls.push(lvl1fooroverhangwallrampy)
roofs.push(lvl1fooroverhangwallrampy)
const lvl1fooroverhangwall2z = new Rectangle(lvl1fooroverhangwall.x, lvl1fooroverhangwall.y, 50, 1350,"red")
floors.push(lvl1fooroverhangwall2z)
walls.push(lvl1fooroverhangwall2z)
roofs.push(lvl1fooroverhangwall2z)
const lvl1fooroverhangwall2 = new Rectangle(10140, -2440, 790, 50, "red")
floors.push(lvl1fooroverhangwall2)
walls.push(lvl1fooroverhangwall2)
roofs.push(lvl1fooroverhangwall2)
const lvl1fooroverhangwal3 = new Rectangle(6240, -2380, 380, 50, "red")
floors.push(lvl1fooroverhangwal3)
walls.push(lvl1fooroverhangwal3)
roofs.push(lvl1fooroverhangwal3)
const lvl1fooroverhangthin = new Rectangle( 9800, -2800,20, 1000, "red")
floors.push(lvl1fooroverhangthin)
for(let t = 0 ; t< 4; t++){
    const floor3 = new Rectangle(-130+600*t, 500-(t*90), 20, 400, "red")
    floors.push(floor3)
    for(let t = 0;t<10; t++){
        const fruit = new Fruit(floor3.x+(Math.random()*400),floor3.y-(100+Math.random()*400), 60,60, "red")
        let wet = 0
        for(let s = 0; s<floors.length; s++){
           if(squarecircleedges(floors[s],fruit.body)){
                wet = 1
                break
            }
        }
        for(let k = 0;k<fruits.length; k++){
            if(fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800) ){
                wet = 1
                break
            }
        }
        if(wet == 0){
            fruits.push(fruit)
        }
    }
}
for(let t = 1;t<15; t++){
    let topfloorlvl1 = new Rectangle(4300+(t*530), -7000+t*140, 20,330, "red")
for(let t = 0;t<15; t++){
    const fruit = new Fruit(topfloorlvl1.x+topfloorlvl1.width*Math.random(), (-30)+topfloorlvl1.y-topfloorlvl1.width*Math.random(), 60, 60, "transparent"  )
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}
    floors.push(topfloorlvl1)
}
for(let t = 1;t<10; t++){
    let topfloorlvl1 = new Rectangle(4300+(t*530), -6300+t*140, 20,330, "red")
        for(let t = 0;t<15; t++){
            const fruit = new Fruit(topfloorlvl1.x+topfloorlvl1.width*Math.random(), (-30)+topfloorlvl1.y-topfloorlvl1.width*Math.random(), 60, 60, "transparent"  )
            let wet = 0
            for(let s = 0; s<floors.length; s++){
               if(squarecircleedges(floors[s],fruit.body)){
                    wet = 1
                    break
                }
            }
            for(let k = 0;k<fruits.length; k++){
                if(fruit.body.repelCheck(fruits[k].body) ){
                    wet = 1
                    break
                }
            }
            if(wet == 0){
                fruits.push(fruit)
            }
        }
    if(t!=5){
        floors.push(topfloorlvl1)
    }
}
for(let t = 0;t<10; t++){
    let topfloorlvl1 = new Rectangle(4300+(t*530), -7840+t*140, 20,330, "red")
    if(t!=0){
for(let t = 0;t<15; t++){
    const fruit = new Fruit(topfloorlvl1.x+topfloorlvl1.width*Math.random(), (-30)+topfloorlvl1.y-topfloorlvl1.width*Math.random(), 60, 60, "transparent"  )
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}
}
    if(t!=5){
        floors.push(topfloorlvl1)
    }
}
for(let t = 0;t<14; t++){
    const topfloorlvl1 = new Rectangle(4300+(t*530), -4800-t*140, 20,330, "red")
for(let t = 0;t<15; t++){
    const fruit = new Fruit(topfloorlvl1.x+topfloorlvl1.width*Math.random(), (-30)+topfloorlvl1.y-topfloorlvl1.width*Math.random(), 60, 60, "transparent"  )
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}
    if(t!=8 && t!= 10){
        floors.push(topfloorlvl1)
    }
}
const topfloorlvl1x = new Rectangle(4300+(14*530), -5100-(14*140), 20,330, "red")
floors.push(topfloorlvl1x)

for(let t = 0;t<101; t++){
    let swimmertop = new Swimmer(4300+Math.random()*6700, -7000+Math.random()*2200)
    swimmertop.type = 1
    swimmers.push(swimmertop)
}
for(let t = 0 ; t< 4; t++){
    const floor3 = new Rectangle(-90-300*t, 500-(t*200), 20, 400, "red")
    floors.push(floor3)
    for(let t = 0;t<10; t++){
        const fruit = new Fruit(floor3.x+(Math.random()*400),floor3.y-(100+Math.random()*320), 60,60, "red")
        let wet = 0
        for(let s = 0; s<floors.length; s++){
           if(squarecircleedges(floors[s],fruit.body)){
                wet = 1
                break
            }
        }
        for(let k = 0;k<fruits.length; k++){
            if(fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800) ){
                wet = 1
                break
            }
        }
        if(wet == 0){
            fruits.push(fruit)
        }
    }
}
for(let t = 0;t<456; t++){
    const fruit = new Fruit( 4250+(Math.random()*6000), -4300+(Math.random()*3500), 60,60, "red")
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}
for(let t = 0; t<30; t++){
    const swimmer = new Swimmer( 4250+(Math.random()*6000), -4300+(Math.random()*1350))
    swimmer.type = 1
    swimmers.push(swimmer)
}
for(let t = 0; t<30; t++){
    const swimmer = new Swimmer( 4250+(Math.random()*6000), -3475+(Math.random()*1350))
    swimmer.type =0
    swimmers.push(swimmer)
}
for(let t = 0; t<30; t++){
    const swimmer = new Swimmer( 4250+(Math.random()*6000), -2700+(Math.random()*1350))
    swimmer.type = 2
    swimmers.push(swimmer)
}
for(let t = 0;t<100; t++){
    const fruit = new Fruit(-2450+(Math.random()*4850),225+(Math.random()*315), 60,60, "red")
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}
for(let t = 0;t<30; t++){
    const fruit = new Fruit(3740+(Math.random()*650),-470+(Math.random()*730), 60,60, "red")
    let wet = 0
    for(let s = 0; s<floors.length; s++){
       if(squarecircleedges(floors[s],fruit.body)){
            wet = 1
            break
        }
    }
    for(let k = 0;k<fruits.length; k++){
        if(fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800) ){
            wet = 1
            break
        }
    }
    if(wet == 0){
        fruits.push(fruit)
    }
}



for(let k = 0;k<fruits.length*5;k++){
    swinger1move()
    }

for(let k = 0;k<fruits.length;k++){
    if(fruits[k].body.x > 11500 && fruits[k].body.y > -700){
        fruits.splice(k,1)
    }
}
for(let k = 0;k<fruits.length;k++){
    if(fruits[k].body.x > 11800 && fruits[k].body.y > -900){
        fruits.splice(k,1)
    }
}

for(let t=0;t<floors.length;t++){
    for(let k = 0;k<fruits.length;k++){
        if(squarecircleedges(floors[t], fruits[k].body)){
            fruits.splice(k,1)
        }
    }
}
for(let t=0;t<ramps.length;t++){
    for(let k = 0;k<fruits.length;k++){
        if(ramps[t].isPointInside(fruits[k].body)){
            fruits.splice(k,1)
        }
    }
}

const fruitx = new Fruit(510,340, 60,60, "red")
const fruity = new Fruit(-3200,600, 60,60, "red")
fruity.type = 11
fruity.type2 = 11
fruits.push(fruitx)
fruits.push(fruity)

const cake2 = new Fruit(4458,-7890, 60,60, "red")
cake2.type = 11
cake2.type2 = 11
fruits.push(cake2)

}

function loadlvl2(){

    
 pin = new Circle(9900,-8100, 10, "blue")
 pin2 = new Circle(9900, -8100+(7*220), 100, "orange")


    pomao.cutscene = 0
    level = 2
    tutorial_canvas_context.translate(pomao.body.x, pomao.body.y)
    pomao.body.x = 0
    pomao.body.y = 0
     ramps90 = []
     swimmers = []
     floors = []
     ramps = []
     boys = []
     deadboys = []
     fruits = []
     walls = []
     invisblocks = []
     ungrapplable = []
     jellys = []
     roofs = []
     switches = []
    //  shocks =[]
     blocks = []
     nails = []
     chats = []
     
    
     const floor = new Rectangle(-1000,33,645,20000)
     floors.push(floor)
     walls.push(floor)
     roofs.push(floor)

     
// boss = new Bossbeam()
    
     const lvl2wall1 = new Rectangle(-83,-1000,1033,50)
     floors.push(lvl2wall1)
     roofs.push(lvl2wall1)
     walls.push(lvl2wall1)
     const lvl2roof1 = new Rectangle(-83,-1000,50,1050)
     floors.push(lvl2roof1)
     roofs.push(lvl2roof1)
     walls.push(lvl2roof1)
     const lvl2roof2 = new Rectangle(917,-3000,50,1550)
     floors.push(lvl2roof2)
     roofs.push(lvl2roof2)
     walls.push(lvl2roof2)
     const lvl2roofstudy = new Rectangle(2417,-3500,50,550)
     floors.push(lvl2roofstudy)
     roofs.push(lvl2roofstudy)
     walls.push(lvl2roofstudy)
     const lvl2floorstudy = new Rectangle(2417,-2970,20,550)
     floors.push(lvl2floorstudy)
     const lvl2wallstudy1 = new Rectangle(2417,-3500,550,50)
     floors.push(lvl2wallstudy1)
     roofs.push(lvl2wallstudy1)
     walls.push(lvl2wallstudy1)
     const lvl2wall2 = new Rectangle(917,-3000,2520,50)
     floors.push(lvl2wall2)
     roofs.push(lvl2wall2)
     walls.push(lvl2wall2)
     const lvl2wall3 = new Rectangle(2917,-3500,3350,50)
     floors.push(lvl2wall3)
     roofs.push(lvl2wall3)
     walls.push(lvl2wall3)
     const lvl2entrywayfloor = new Rectangle(-33,-220,20,250)
     floors.push(lvl2entrywayfloor)
     const lvl2parentfloor = new Rectangle(-33,-520,20,950)
     floors.push(lvl2parentfloor)
     const lvl2midwayfloor1 = new Rectangle(1667,-290,20,500)
     floors.push(lvl2midwayfloor1)
    
     let momdialogue = new Dialogue(505,-585)
     momdialogue.words.push( "Hello Pomao!")
     momdialogue.words.push( "Pa wants to talk to you.")
     momdialogue.words.push("He is in his study in the tower.")
     chats.push(momdialogue)
    
     const momblock = new Rectangle(505,-585, 90,60)
     floors.push(momblock)
     walls.push(momblock)
     roofs.push(momblock)
     invisblocks.push(momblock)
    
     
    
     let padialogue = new Dialogue(2505,-3035)
     padialogue.words.push( "Pomao!")
     padialogue.words.push( "I need to talk to you.")
     padialogue.words.push("You're too old for this buisness...")
     padialogue.words.push("Constant eating, laying eggs in broad daylight!")
     padialogue.words.push("A Pomaoranian as red as you should never even lay eggs!")
     padialogue.words.push("Why, I haven't laid an egg in my life!")
     padialogue.words.push("And about your narcolepsy...")
     padialogue.words.push("You just need to get more regular sleep.")
     padialogue.words.push("I'm pretty sure it is the reason you have trouble counting.")
     padialogue.words.push("Ok! Great, now that its sorted...")
     padialogue.words.push("Go ask your mom about what your chores are today.")
     chats.push(padialogue)
     
    
     let pomarinedialogue = new Dialogue(5505,-3035)
     pomarinedialogue.words.push( "You!!")
     pomarinedialogue.words.push( "Stop what you are doing!")
     pomarinedialogue.words.push( "Where is your egg-laying license?")
     pomarinedialogue.words.push( "What is your permitted eggs-limit?")
     pomarinedialogue.words.push( "...")
     pomarinedialogue.words.push( "Can't you count!?")
     pomarinedialogue.words.push( "You're way over!")
     pomarinedialogue.words.push( "You're coming with me kid...")
     chats.push(pomarinedialogue)
    
     const pawblock = new Rectangle(2505,-3035, 90,60)
     floors.push(pawblock)
     walls.push(pawblock)
     roofs.push(pawblock)
     invisblocks.push(pawblock)
    
     for(let t = 0; t<32;t++){
         let wet = 0
         let fruit = new Fruit(3000+Math.random()*1000, -60-(Math.random()*570), 60,60,"transparent")
         for(let k = 0;k<fruits.length; k++){
             if(fruit.body.repelCheck(fruits[k].body)){
                 wet = 1
                 break
             }
         }
         if(wet == 0){
             fruits.push(fruit)
         }
     }
    
     for(let t = 1; t<12;t++){
        const livingfloor = new Rectangle(967, -3000+(t*250), 20, 500, "red")
        if(t%2 == 1){
            livingfloor.x+=1450
        }
        floors.push(livingfloor)
    }
    }
    function loadlvl3(){
        
 pin = new Circle(9900,-8100, 10, "blue")
 pin2 = new Circle(9900, -8100+(7*220), 100, "orange")
    
        pomao.eggs = [pomao.body]
        pomao.cutscene = 0
    level = 3
    tutorial_canvas_context.translate(pomao.body.x, pomao.body.y)
    pomao.body.x = 0
    pomao.body.y = 0
     ramps90 = []
     swimmers = []
     floors = []
     ramps = []
     boys = []
     deadboys = []
     fruits = []
     walls = []
     invisblocks = []
     ungrapplable = []
     jellys = []
     roofs = []
     switches = []
     blocks = []
     nails = []
     chats = []

     
// boss = new Bossbeam()
    
     const lvl3wall1 = new Rectangle(-183,-1000,1033,50)
     floors.push(lvl3wall1)
     roofs.push(lvl3wall1)
     walls.push(lvl3wall1)
     const floor = new Rectangle(-1000,33,1030,2840)
     floors.push(floor)
     walls.push(floor)
     roofs.push(floor)
     
    
     const guardfloor = new Rectangle(3100,33,200,2100)
     floors.push(guardfloor)
     walls.push(guardfloor)
     roofs.push(guardfloor)
     const guardfloorx = new Rectangle(3100,233,830,2100, "cyan")
     floors.push(guardfloorx)
     walls.push(guardfloorx)
     roofs.push(guardfloorx)
     ungrapplable.push(guardfloorx)
     const guardfloorroof = new Rectangle(3100,-1233,50,2100, "cyan")
     floors.push(guardfloorroof)
     walls.push(guardfloorroof)
     roofs.push(guardfloorroof)
     ungrapplable.push(guardfloorroof)
     const guardfloorwall = new Rectangle(5150,-1233,2063,50, "cyan")
     floors.push(guardfloorwall)
     walls.push(guardfloorwall)
     roofs.push(guardfloorwall)
     ungrapplable.push(guardfloorwall)
    
     const lvl3basefloor = new Rectangle(-1000,1030,645,20000)
     floors.push(lvl3basefloor)
     walls.push(lvl3basefloor)
     roofs.push(lvl3basefloor)
     
     const lvl3roof1 = new Rectangle(-183,-1000,50,1050)
     floors.push(lvl3roof1)
     roofs.push(lvl3roof1)
     walls.push(lvl3roof1)
     ungrapplable.push(lvl3roof1)
    
     
     const prisoner1block = new Rectangle(200,-34, 90,60)
     floors.push(prisoner1block)
     walls.push(prisoner1block)
     roofs.push(prisoner1block)
     invisblocks.push(prisoner1block)
     
     const prisoner2block = new Rectangle(600,-34, 90,60)
     floors.push(prisoner2block)
     walls.push(prisoner2block)
     roofs.push(prisoner2block)
     invisblocks.push(prisoner2block)
        
     
     const prisoner3block = new Rectangle(900,-34, 90,60)
     floors.push(prisoner3block)
     walls.push(prisoner3block)
     roofs.push(prisoner3block)
     invisblocks.push(prisoner3block)
        
     let prisoner1dialogue = new Dialogue(200,-34)
     prisoner1dialogue.words.push( "What are ya in fer?")
     prisoner1dialogue.words.push( "Let me guess...")
     prisoner1dialogue.words.push( "Over your egg limit?")
     prisoner1dialogue.words.push( "Doesn't take much these days.")
     prisoner1dialogue.words.push( "I'm in here since six years ago for playing music in public.")
     chats.push(prisoner1dialogue)
        
     let prisoner2dialogue = new Dialogue(600,-34)
     prisoner2dialogue.words.push( "Fresh meat...")
     chats.push(prisoner2dialogue)
        
     let prisoner3dialogue = new Dialogue(900,-34)
     prisoner3dialogue.words.push( "If only I werent so fat...")
     prisoner3dialogue.words.push( "I would flutter-stutter across the gap...")
     prisoner3dialogue.words.push( "... knock out the guard...")
     prisoner3dialogue.words.push( "... and flip the switch...")
     chats.push(prisoner3dialogue)
    
     
     
     const switcher = new Rectangle(4800,-95, 128,128)
     floors.push(switcher)
     walls.push(switcher)
     roofs.push(switcher)
     ungrapplable.push(switcher)
     invisblocks.push(switcher)
     
     
     const guardblock = new Rectangle(4500,-34, 90,60)
     floors.push(guardblock)
     walls.push(guardblock)
     roofs.push(guardblock)
     invisblocks.push(guardblock)
    
     door = new Rectangle(-10000,-10000, 20000, 9500, "#090909")
    
    }

function loadlvl4(){

    pin = new Circle((-1950+(30*180)),(-9100-(30*57)), 10, "blue")
    pin2 = new Circle( (-1950+(30*180)),(-9800-(30*57))+(7*220), 100, "orange")
    springs = []
    objsprings = []
    
objsprings.push(pin2)

let spring = new Spring(pin)
springs.push(spring)
for(let k = 0; k<33;k++){
    spring = new Spring(spring.anchor)
    if(k < 32){
        springs.push(spring)
    }else if(k == 32 ){
        spring.anchor = pin2
        springs.push(spring)
    }
}


    pomao.cutscene = 0
level = 4
tutorial_canvas_context.translate(pomao.body.x, pomao.body.y)
pomao.body.x = 0
pomao.body.y = 0
 ramps90 = []
 swimmers = []
 floors = []
 ramps = []
 boys = []
 deadboys = []
 fruits = []
 walls = []
 invisblocks = []
 ungrapplable = []
 jellys = []
 roofs = []
 switches = []
 blocks = []
 nails = []
 chats = []

 
// boss = new Bossbeam()

 ramps.push(pin2)

 const floor = new Rectangle(-10000,33,1030,28400)
 floors.push(floor)
 walls.push(floor)
 roofs.push(floor)
 

 const platform1 = new Rectangle(183,-340,20,2000)
 floors.push(platform1)

 const platform2 = new Rectangle(-1111,-170,20,1000)
 floors.push(platform2)
 
 const platform3 = new Rectangle(-1111,-670,20,1000)
 floors.push(platform3)

 const platform4 = new Rectangle(-83,-940,20,2000)
 floors.push(platform4)

 const platform5 = new Rectangle(-1511,-1300,20,1000)
 floors.push(platform5)

 const platform6 = new Rectangle(-1911,-1660,20,1000)
 floors.push(platform6)

 const platform7 = new Rectangle(1500,-680,20,1000)
 floors.push(platform7)

 const platform8 = new Rectangle(2500,-980,20,1000)
 floors.push(platform8)

 const platform9 = new Rectangle(3500,-1380,20,1000)
 floors.push(platform9)

 const platform10 = new Rectangle(4500,-1700,20,1000)
 floors.push(platform10)

 const platform11 = new Rectangle(5500,-2100,20,1000)
 floors.push(platform11)

 const platform12 = new Rectangle(1500,-3450,20,1000)
 floors.push(platform12)

 const platform13 = new Rectangle(2500,-3100,20,1000)
 floors.push(platform13)

 const platform14 = new Rectangle(3500,-2800,20,1000)
 floors.push(platform14)

 const platform15 = new Rectangle(4500,-2400,20,1000)
 floors.push(platform15)
 
 
 const platform16 = new Rectangle(-1511,-1900,20,1000)
 floors.push(platform16)

 const platform17 = new Rectangle(-1911,-2160,20,1000)
 floors.push(platform17)
 
 const platform18 = new Rectangle(-1511,-2460,20,1000)
 floors.push(platform18)
 
 const platform19 = new Rectangle(-1911,-3060,20,1000)
 floors.push(platform19)
 
 const platform20 = new Rectangle(-1511,-3390,20,1000)
 floors.push(platform20)
 
 const platform21 = new Rectangle(-111,-3390,20,1000)
 floors.push(platform21)


 
 const platformcake = new Rectangle(700,-2040,20,1300)
 floors.push(platformcake)


 const shaft1 = new Rectangle( 0,-7000, 1000, 50, "red")
 floors.push(shaft1)
 walls.push(shaft1)
 roofs.push(shaft1)

 const shaft2 = new Rectangle( 0,-5000, 1000, 50, "red")
 floors.push(shaft2)
 walls.push(shaft2)
 roofs.push(shaft2)

 const shaft3 = new Rectangle( -400,-5850, 500, 50, "red")
 floors.push(shaft3)
 walls.push(shaft3)
 roofs.push(shaft3)

 const shaft4 = new Rectangle( 400,-5650, 500, 50, "red")
 floors.push(shaft4)
 walls.push(shaft4)
 roofs.push(shaft4)

 const shaft5 = new Rectangle( -2050,-6950, 1200, 20, "red")
 floors.push(shaft5)
 walls.push(shaft5)
 roofs.push(shaft5)



 for(let t = 0; t<7;t++){
    const shaft7 = new Rectangle( -1900+t*200,-5800-t*10, 20, 40, "red")
    floors.push(shaft7)
 }

 
 for(let t = 0; t<36;t++){
    const shaft6 = new Rectangle( -1950+t*144,-6800-t*57, 20, 36, "red")
    floors.push(shaft6)
 }


 for(let t = 0; t<30;t++){
    const shaft6 = new Rectangle( (-1950+(30*180))+t*20,(-6800-(30*57))+t*100, 20, 30, "red")
    floors.push(shaft6)
 }

 
 const shaft8 = new Rectangle( 300,-7000, 20, 1000, "red")
 floors.push(shaft8)
 
 const shaft9 = new Rectangle( 1600,-6500, 20, 1000, "red")
 floors.push(shaft9)

 const shaft10 = new Rectangle( 2800,-5900, 20, 1000, "red")
 floors.push(shaft10)


 const shaft13 = new Rectangle( 3800,-5400, 20, 1000, "red")
 floors.push(shaft13)

 
 const pinblock = new Rectangle((-1950+(30*180))-25,(-9100-(30*57))-25, 50,50, "blue")
 floors.push(pinblock)
 walls.push(pinblock)
 roofs.push(pinblock)
 


 
 const shaft11 = new Rectangle( 4850,-8900, 20, 1000, "red")
 floors.push(shaft11)


 
 const shaft12 = new Rectangle( 5850,-9300, 20, 2000, "red")
 floors.push(shaft12)


 
 const shaft14 = new Rectangle(4800,-9700, 20, 1000, "red")
 floors.push(shaft14)

 const shaft18 = new Rectangle(4100,-10100, 20, 500, "red")
 floors.push(shaft18)


 const shaft28 = new Rectangle(3800,-10400, 20, 300, "red")
 floors.push(shaft28)


 const shaft34 = new Rectangle(3950,-10900, 20, 300, "red")
 floors.push(shaft34)


 const shaft35 = new Rectangle(4450,-11300, 20, 300, "red")
 floors.push(shaft35)


 const shaft36 = new Rectangle(4850,-11700, 20, 300, "red")
 floors.push(shaft36)

 const shaft37  = new Rectangle(4250,-12000, 20, 300, "red")
 floors.push(shaft37)

 const shaft38 = new Rectangle(4850,-12400, 20, 300, "red")
 floors.push(shaft38)

 const shaft39 = new Rectangle(5250,-12700, 20, 500, "red")
 floors.push(shaft39)

 const shaft40 = new Rectangle(5750,-12900, 20, 500, "red")
 floors.push(shaft40)

 
 const shaft15 = new Rectangle( 5500,-5700, 20, 1000, "red")
 floors.push(shaft15)

 
 const shaft16 = new Rectangle( 6500,-5200, 20, 1000, "red")
 floors.push(shaft16)
 
 const shaft17 = new Rectangle( 7500,-4700, 20, 1000, "red")
 floors.push(shaft17)


 for(let t = 1;t<floors.length;t++){
    for(let k = 0;k<44;k++){
        let wet = 0
        let fruit = new Fruit(floors[t].x+Math.random()*floors[t].width, floors[t].y-Math.random()*340, 60,60,"transparent")

        for(let k=0;k<fruits.length;k++){
            if(fruits[k].body.repelCheck(fruit.body)){
                wet = 1
            }
        }
        for(let k=0;k<floors.length;k++){
            if(squarecircleedges(floors[k], fruit.body)){
                wet = 1
            }
        }
        if(wet == 0){
            fruits.push(fruit)
        }
    }
}

const shaft19 = new Rectangle(9050,-5700, 500, 50, "red")
floors.push(shaft19)
walls.push(shaft19)
roofs.push(shaft19)

const shaft20 = new Rectangle(8550,-6300, 500, 50, "red")
floors.push(shaft20)
walls.push(shaft20)
roofs.push(shaft20)

const shaft21 = new Rectangle(9050,-6900, 500, 50, "red")
floors.push(shaft21)
walls.push(shaft21)
roofs.push(shaft21)

const shaft22 = new Rectangle(8550,-7500, 500, 50, "red")
floors.push(shaft22)
walls.push(shaft22)
roofs.push(shaft22)

const shaft23 = new Rectangle(9050,-8100, 500, 50, "red")
floors.push(shaft23)
walls.push(shaft23)
roofs.push(shaft23)

const shaft24 = new Rectangle(8550,-8700, 500, 50, "red")
floors.push(shaft24)
walls.push(shaft24)
roofs.push(shaft24)

const shaft25 = new Rectangle(9050,-9400, 600, 50, "red")
floors.push(shaft25)
walls.push(shaft25)
roofs.push(shaft25)

const shaft26 = new Rectangle(8550,-10300, 600, 50, "red")
floors.push(shaft26)
walls.push(shaft26)
roofs.push(shaft26)

const shaft27 = new Rectangle(8250,-11000, 300, 50, "red")
floors.push(shaft27)
walls.push(shaft27)
roofs.push(shaft27)

const shaft29 = new Rectangle(7950,-11500, 300, 50, "red")
floors.push(shaft29)
walls.push(shaft29)
roofs.push(shaft29)

const shaft30 = new Rectangle(7550,-12000, 300, 50, "red")
floors.push(shaft30)
walls.push(shaft30)
roofs.push(shaft30)

const shaft31 = new Rectangle(7050,-12500, 300, 50, "red")
floors.push(shaft31)
walls.push(shaft31)
roofs.push(shaft31)

const shaft32 = new Rectangle(7550,-13000, 300, 50, "red")
floors.push(shaft32)
walls.push(shaft32)
roofs.push(shaft32)

const shaft33 = new Rectangle(7050,-13500, 300, 50, "red")
floors.push(shaft33)
walls.push(shaft33)
roofs.push(shaft33)

const wall1 = new Rectangle(-2100, -30000, 30033, 50, "cyan")
walls.push(wall1)
floors.push(wall1)
roofs.push(wall1)
ungrapplable.push(wall1)

const wall2 = new Rectangle(9100, -30000, 30033, 50, "cyan")
walls.push(wall2)
floors.push(wall2)
roofs.push(wall2)
ungrapplable.push(wall2)


for(let k = 0;k<fruits.length;k++){
    fruits[k].x -=20
    fruits[k].body.radius*=1.8
}


 for(let t=0;t<floors.length;t++){
    for(let k = 0;k<fruits.length;k++){
        if(squarecircleedges(floors[t], fruits[k].body)){
            fruits.splice(k,1)
        }
    }
}

for(let t=0;t<floors.length;t++){
    for(let k = 0;k<fruits.length;k++){
        if(squarecirclehead(floors[t], fruits[k].body)){
            fruits.splice(k,1)
        }
    }
}
for(let t=0;t<floors.length;t++){
   for(let k = 0;k<fruits.length;k++){
       if(squarecirclefeet(floors[t], fruits[k].body)){
           fruits.splice(k,1)
       }
   }
}
for(let t=0;t<ramps.length;t++){
    for(let k = 0;k<fruits.length;k++){
        if(ramps[t].isPointInside(fruits[k].body)){
            fruits.splice(k,1)
        }
    }
}

for(let k = 0;k<fruits.length*5;k++){
    swinger1move()
    }

    
}
    
})

    let zimgs = []

    // let gamepads

    let zimg01 = new Image()
    zimg01.src ="z - 1 copy-min.png"
    zimgs.push(zimg01)
    let zimg02 = new Image()
    zimg02.src ="z - 2 copy-min.png"
    zimgs.push(zimg02)
    let zimg03 = new Image()
    zimg03.src ="z - 3 copy-min.png"
    zimgs.push(zimg03)
    let zimg04 = new Image()
    zimg04.src ="z - 4 copy-min.png"
    zimgs.push(zimg04)
    let zimg05 = new Image()
    zimg05.src ="z - 5 copy-min.png"
    zimgs.push(zimg05)
    let zimg06 = new Image()
    zimg06.src ="z - 6 copy-min.png"
    zimgs.push(zimg06)

    let zimg07 = new Image()
    zimg07.src ="z - 7 copy-min.png"
    zimgs.push(zimg07)

    let zimg08 = new Image()
    zimg08.src ="z - 8 copy-min.png"
    zimgs.push(zimg08)

    let zimg09 = new Image()
    zimg09.src ="z - 9 copy-min.png"
    zimgs.push(zimg09)

    let zimg10 = new Image()
    zimg10.src ="z - 10 copy-min.png"
    zimgs.push(zimg10)

    let zimg11 = new Image()
    zimg11.src ="z - 11 copy-min.png"
    zimgs.push(zimg11)

    let zimg12 = new Image()
    zimg12.src ="z - 12 copy-min.png"
    zimgs.push(zimg12)

    let zimg13 = new Image()
    zimg13.src ="z - 13 copy-min.png"
    zimgs.push(zimg13)

    let zimg14 = new Image()
    zimg14.src ="z - 14 copy-min.png"
    zimgs.push(zimg14)

    let zimg15 = new Image()
    zimg15.src ="z - 15 copy-min.png"
    zimgs.push(zimg15)

    let zimg16 = new Image()
    zimg16.src ="z - 16 copy-min.png"
    zimgs.push(zimg16)

    let zimg17 = new Image()
    zimg17.src ="z - 17 copy-min.png"
    zimgs.push(zimg17)

    let zimg18 = new Image()
    zimg18.src ="z - 18 copy-min.png"
    zimgs.push(zimg18)

    let zimg19 = new Image()
    zimg19.src ="z - 19 copy-min.png"
    zimgs.push(zimg19)

    let zimg20 = new Image()
    zimg20.src ="z - 20 copy-min.png"
    zimgs.push(zimg20)

    let zimg21 = new Image()
    zimg21.src ="z - 21 copy-min.png"
    zimgs.push(zimg21)

    let zimg22 = new Image()
    zimg22.src ="z - 22 copy-min.png"
    zimgs.push(zimg22)

    let zimg23 = new Image()
    zimg23.src ="z - 23 copy-min.png"
    zimgs.push(zimg23)

    let zimg24 = new Image()
    zimg24.src ="z - 24 copy-min.png"
    zimgs.push(zimg24)

    let zimg25 = new Image()
    zimg25.src ="z - 25 copy-min.png"
    zimgs.push(zimg25)

    let zimg26 = new Image()
    zimg26.src ="z - 26 copy-min.png"
    zimgs.push(zimg26)

    let zimg27 = new Image()
    zimg27.src ="z - 27 copy-min.png"
    zimgs.push(zimg27)

    let zimg28 = new Image()
    zimg28.src ="z - 28 copy-min.png"
    zimgs.push(zimg28)

    let zimg29 = new Image()
    zimg29.src ="z - 29 copy-min.png"
    zimgs.push(zimg29)

    let zimg30 = new Image()
    zimg30.src ="z - 30 copy-min.png"
    zimgs.push(zimg30)

    let zimg31 = new Image()
    zimg31.src ="z - 31 copy-min.png"
    zimgs.push(zimg31)

    let zimg32 = new Image()
    zimg32.src ="z - 32 copy-min.png"
    zimgs.push(zimg32)

    let zimg33 = new Image()
    zimg33.src ="z - 33 copy-min.png"
    zimgs.push(zimg33)

    let zimg34 = new Image()
    zimg34.src ="z - 34 copy-min.png"
    zimgs.push(zimg34)

    let zimg35 = new Image()
    zimg35.src ="z - 35 copy-min.png"
    zimgs.push(zimg35)

    let zimg36 = new Image()
    zimg36.src ="z - 36 copy-min.png"
    zimgs.push(zimg36)

    let zimg37 = new Image()
    zimg37.src ="z - 37 copy-min.png"
    zimgs.push(zimg37)

    let zimg38 = new Image()
    zimg38.src ="z - 38 copy-min.png"
    zimgs.push(zimg38)

    let zimg39 = new Image()
    zimg39.src ="z - 39 copy-min.png"
    zimgs.push(zimg39)

    let zimg40 = new Image()
    zimg40.src ="z - 40 copy-min.png"
    zimgs.push(zimg40)

    let zimg41 = new Image()
    zimg41.src ="z - 41 copy-min.png"
    zimgs.push(zimg41)

    let zimg42 = new Image()
    zimg42.src ="z - 42 copy-min.png"
    zimgs.push(zimg42)

    let zimg43 = new Image()
    zimg43.src ="z - 43 copy-min.png"
    zimgs.push(zimg43)

    for(let t = 42; t>0; t--){
        zimgs.push(zimgs[t])
    }
    // ////console.log(zimgs)

window.addEventListener('DOMContentLoaded', (event) =>{


    let gamepadAPI = {
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
            //console.log(pressed)
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

    let gamepad = {}
    let gamepads = {}
    let hot = 0



    let floors = []
    let ramps = []

    let dry = 0
    let floorimg = new Image()
    floorimg.src ="floor4.png"
    let nailimg = new Image()
    nailimg.src ="poundnail.png"

    let jazz = new Audio('gulpnoise.wav');
    let jazz2 = new Audio('gulpnoise2.wav');

    let rampimg2 = new Image()
    rampimg2.src = 'ramp2.png'

    let rampimg1 = new Image()
    rampimg1.src = 'ramp1.png'

    let rampcurveimg1 = new Image()
    rampcurveimg1.src = 'rampcurve1.png'

    let fruitsprites = new Image()
    fruitsprites.src = 'fruitsprites9.png'
    let cake = new Image()
    cake.src = 'Fruit 92 - Cake.png'

    // let fractalsheet = new Image()
    // fractalsheet.src = 'fractalsheet - 01.png'



    // let jumpometer = new Image()
    // jumpometer.src = 'jumpometer.png'

    let pomaospit = new Image()
    pomaospit.src = 'pomaospit.png'

    // let pomaospitg= new Image()
    // pomaospitg.src = 'pomaospitg.png'

    let pomaospitb = new Image()
    pomaospitb.src = 'pomaospitb.png'

    // let pomaospitbg = new Image()
    // pomaospitbg.src = 'pomaospitbg.png'

    let pomaospitl = new Image()
    pomaospitl.src = 'pomaospitl.png'
    // let pomaospitlg = new Image()
    // pomaospitlg.src = 'pomaospitlg.png'
    let pomaospitlb = new Image()
    pomaospitlb.src = 'pomaospitbl.png'
    // let pomaospitlbg = new Image()
    // pomaospitlbg.src = 'pomaospitblg.png'

    let pomaospitf = new Image()
    pomaospitf.src = 'pomaospitf.png'

    // let pomaospitfg = new Image()
    // pomaospitfg.src = 'pomaospitfg.png'

    let pomaospitfb = new Image()
    pomaospitfb.src = 'pomaospitfb.png'

    // let pomaospitfbg = new Image()
    // pomaospitfbg.src = 'pomaospitfbg.png'

    let pomaospitfl = new Image()
    pomaospitfl.src = 'pomaospitfl.png'

    // let pomaospitflg = new Image()
    // pomaospitflg.src = 'pomaospitflg.png'


    let pomaospitflb = new Image()
    pomaospitflb.src = 'pomaospitflb.png'


    // let pomaospitflbg = new Image()
    // pomaospitflbg.src = 'pomaospitflbg.png'

    let pomaoflb = new Image()
    pomaoflb.src = 'pomaoflb.png'
    // let pomaoflbg = new Image()
    // pomaoflbg.src = 'pomaoflbg.png'

    let pomaoflbh = new Image()
    pomaoflbh.src = 'pomaofbhl.png'

    // let pomaoflbhg = new Image()
    // pomaoflbhg.src = 'pomaofbhlg.png'

    let pomaoflh = new Image()
    pomaoflh.src = 'pomaoflh.png'

    let pomaoflhg = new Image()
    pomaoflhg.src = 'pomaoflhg.png'

    let pomaofbh = new Image()
    pomaofbh.src = 'pomaofbh.png'

    // let pomaofbhg = new Image()
    // pomaofbhg.src = 'pomaofbhg.png'

    let boysprites = new Image()
    boysprites.src = 'boisterousboys.png'

    let pomaoimg = new Image()
    pomaoimg.src = 'pomao.png'

    let pomaoimgg = new Image()
    pomaoimgg.src = 'pomaog.png'

    let pomaoimggl = new Image()
    pomaoimggl.src = 'pomaogl.png'

    let pomaofh = new Image()
    pomaofh.src = 'pomaofh.png'

    // let pomaofhg = new Image()
    // pomaofhg.src = 'pomaofhg.png'

    let pomaoimgh = new Image()
    pomaoimgh.src = 'pomaoh.png'
    // let pomaoimghg = new Image()
    // pomaoimghg.src = 'pomaohg.png'

    let pomaoimglhb = new Image()
    pomaoimglhb.src = 'pomaolhb.png'
    // let pomaoimglhbg = new Image()
    // pomaoimglhbg.src = 'pomaolhbg.png'
    let pomaoimghb = new Image()
    pomaoimghb.src = 'pomaohb.png'
    // let pomaoimghbg = new Image()
    // pomaoimghbg.src = 'pomaohbg.png'

    let pomaoimglh = new Image()
    pomaoimglh.src = 'pomaolh.png'
    let pomaoimglhg = new Image()
    pomaoimglhg.src = 'pomaolhg.png'
    let pomaoimgb = new Image()
    pomaoimgb.src = 'pomaob.png'
    let pomaoimgbg = new Image()
    pomaoimgbg.src = 'pomaobg.png'

    let seedegg = new Image()
    seedegg.src = 'seedegg.png'
    let seedeggf = new Image()
    seedeggf.src = 'eggf.png'
    let seedeggfl = new Image()
    seedeggfl.src = 'eggfl.png'
    let pomaoimgl = new Image()
    pomaoimgl.src = 'pomaol.png'
    let pomaoimglg = new Image()
    pomaoimglg.src = 'pomaolg.png'
    let pomaoimgbl = new Image()
    pomaoimgbl.src = 'pomaobl.png'
    let pomaoimgblg = new Image()
    pomaoimgblg.src = 'pomaoblg.png'
    // let mangosteen = new Image()
    // mangosteen.src = 'Fruit 03 - Mangosteen.png'
    
    let pomaoimgup = new Image()
    pomaoimgup.src = 'pomaoup.png'
    let pomaoimgupg = new Image()
    pomaoimgupg.src = 'pomaoupg.png'
    let pomaoimglup = new Image()
    pomaoimglup.src = 'pomaoupl.png'
    let pomaoimglupg = new Image()
    pomaoimglupg.src = 'pomaouplg.png'
    
    let pomaoimgupb = new Image()
    pomaoimgupb.src = 'pomaoupb.png'
    let pomaoimgupbg = new Image()
    pomaoimgupbg.src = 'pomaoupbg.png'
    let pomaoimglupb = new Image()
    pomaoimglupb.src = 'pomaoupbl.png'
    let pomaoimglupbg = new Image()
    pomaoimglupbg.src = 'pomaoupblg.png'
    let pomaof = new Image()
    pomaof.src = 'pomaof.png'
    let pomaofg = new Image()
    pomaofg.src = 'pomaofg.png'
    let pomaofl = new Image()
    pomaofl.src = 'pomaofl.png'
    let pomaoflg = new Image()
    pomaoflg.src = 'pomaoflg.png'
    let pomaofb = new Image()
    pomaofb.src = 'pomaofb.png'
    let pomaofbg = new Image()
    pomaofbg.src = 'pomaofbg.png'
    
    let keysPressed = {}

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

    let tutorial_canvas = document.getElementById("tutorial");
    let tutorial_canvas_context = tutorial_canvas.getContext('2d');

    tutorial_canvas.style.background = "#664613"


    let flex = tutorial_canvas.getBoundingClientRect();

    // Add the event listeners for mousedown, mousemove, and mouseup
    let tip = {}
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
                   let joint = new CircleF(pomao.body.x+(Math.sin(this.angle+this.spin)*250)+(Math.sin(this.macrospin)*15),pomao.body.y+(Math.cos(this.angle+this.spin)*250)+(Math.cos(this.macrospin)*15), 0, getRandomLightColortp() )
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
                   let joint = new CircleF(pomao.body.x+(Math.sin(this.angle+this.spin)*160)+(Math.sin(this.macrospin)*20),pomao.body.y+(Math.cos(this.angle+this.spin)*160)+(Math.cos(this.macrospin)*5), 0, getRandomLightColortp() )
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
                    let joint = new CircleF(pomao.body.x+(Math.sin(this.angle+this.spin)*70)+(Math.sin(this.macrospin)*7),pomao.body.y+(Math.cos(this.angle+this.spin)*70)+(Math.cos(this.macrospin)*13), 0, getRandomLightColortp() )
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
            this.timeloop = 0
            this.type = Math.floor(Math.random()*17)
            this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/2.5, "blue")
            this.jumpcountercap = Math.floor(Math.random()*700)+100
            this.jumpcounter = Math.floor(Math.random()*this.jumpcountercap)
        }
        pop(){
            let rotx = 0
            let roty = 0

            for(let g = 0; g < 9; g++){
                let dot1 = new Circlec(this.body.x, this.body.y, this.body.radius, getRandomLightColor(), Math.cos(rotx)*1, Math.sin(roty)*1 )
                this.pops.push(dot1)
                rotx += 2*Math.PI/9
                roty += 2*Math.PI/9
            }
        
        }
        popdraw(){
            for(let t = 0;t<this.pops.length; t++){
                if(this.pops[t].radius < .1){
                    this.pops.splice(t,1)
                }
            }
            for(let t = 0;t<this.pops.length; t++){
                this.pops[t].radius*=.9
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
                            let distance = ((new Line(boys[f].body.x, boys[f].body.y, this.body.x, this.body.y, 1, "red")).hypotenuse())-(boys[f].body.radius+this.body.radius)
                            let angleRadians = Math.atan2(boys[f].body.y - this.body.y, boys[f].body.x - this.body.x);
                            this.xrepel += (Math.cos(angleRadians)*distance)/1.25
                            this.yrepel += (Math.sin(angleRadians)*distance)/1.25
                        }
                    }
                }


            // for(let t = 0; t<boys.length;t++){
            //     if(this!=boys[t]){
            //         if(this.body.repelCheck(boys[t].body)){
            //             let link = new Line(this.body.x, this.body.y, boys[t].body.x, boys[t].body.y, "red", 1)
            //             link.draw()
            //             if(this.x<boys[t].x){
            //                 this.xrepel = -link.hypotenuse()*.5
            //             }else{
            //                 this.xrepel = link.hypotenuse()*.5
            //             }

            //         }
            //     }
            // }


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
            this.gravity()
            this.move()
            // tutorial_canvas_context.lineWidth = 1
            // tutorial_canvas_context.fillStyle = this.color
            // tutorial_canvas_context.strokeStyle = "blue"
            // // tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
            // tutorial_canvas_context.strokeRect(this.x, this.y, this.width, this.height)

            // this.body.draw()
            let sheetwidth = boysprites.width
            let sheetheight = boysprites.height
            let cols = 17
            let rows = 1
        
            // for(let q = 0; q < 3;q++){

            //     for(let s = 0;s<this.squish.length;s++){
            //         this.squish[s].move()
            //         this.squish[s].draw()
            //         this.squish[s].radius -= .05
            //         if(this.squish[s].radius <= 0){
            //             this.squish[s].radius = 0
            //         }
            //     }
            
            //     for(let s = 0;s<this.squish.length;s++){
            //         if(this.squish[s].radius <= 0){
            //             this.squish.splice(s,1)
            //         }
            //     }
            

            // }


            let width = sheetwidth/cols
            let height = sheetheight/rows


           let  srcx = Math.floor(this.type)*width
          let   srcy = 0 //Math.floor(this.type2)*height

        //   if(this.type < 17){


                    // tutorial_canvas_context.drawImage(pomaoimg, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
     
                
                    this.timeloop+=.1

                    if(this.marked == 3){

                    }else{
                     tutorial_canvas_context.drawImage(boysprites, srcx, srcy, width, height, this.x, (10+this.y)-(Math.sin(this.timeloop)), this.width, this.height+(Math.sin(this.timeloop)))
                    }


        //   }


        
        this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/2.5, "blue")
          if(this.body.repelCheck(pomao.tongue)){
            // this.x += pomao.tonguexmom -(((this.body.x-(this.width/2))-pomao.body.x)/100)
            // this.y += pomao.tongueymom -(((this.body.y-(this.height/2))-pomao.body.y)/100)
            // this.move()
            this.marked = 1  
            this.width*=.995
            this.height*=.995
            // ////console.log(this)
          }
          if(this.body.repelCheck(pomao.body) && this.body.repelCheck(pomao.tongue)){
            // this.x  -= (((this.body.x-(this.width/2))-pomao.body.x)/100)
            // this.y -= (((this.body.y-(this.height/2))-pomao.body.y)/100)
            this.width*=.91
            this.height*=.91
            this.marked = 2
            pomao.diry = 1
          }else if (this.body.repelCheck(pomao.body) && !this.body.repelCheck(pomao.tongue )){
            //   ////console.log(pomao.dir)

            if(pomao.body.ymom == 0){

                // if(pomao.body.isPointInside(pomao.tongue)){
                    if(this.width >= 50){
                        if(pomao.disabled != 1){
                            pomao.body.xmom = -3*(pomao.dir)
                            pomao.disabled = 1
                            pomao.hits--
                             pomao.body.ymom = -1.5
                        }
                    }
                // }
            }
            // ////console.log(pomao.dir, pomao.body.xmom)
          }

          if(this.marked == 1){
            this.x  -= (this.body.x-pomao.tongue.x)/1
            this.y -= (this.body.y-pomao.tongue.y)/1
            // pomao.diry = 1

          }
          if(this.marked == 2){
            this.x  -= ((this.body.x-pomao.body.x)/1.5)
            this.y -= ((this.body.y-pomao.body.y)/1.5)
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
            if(pomao.eggs.length < 10){

            let seepx = new Seed(pomao.eggs[pomao.eggs.length-1])
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

            // if(this.type == 1){
            //     if(this.type2 == 4){
            //         this.type = Math.floor(Math.random()*10)
            //         this.type2 = Math.floor(Math.random()*9)
            //     }
            // }
            // if(this.type == 1){
            //     if(this.type2 == 4){
            //         this.type = Math.floor(Math.random()*10)
            //         this.type2 = Math.floor(Math.random()*9)
            //     }
            // }
            // if(this.type == 1){
            //     if(this.type2 == 4){
            //         this.type = Math.floor(Math.random()*10)
            //         this.type2 = Math.floor(Math.random()*9)
            //     }
            // }
            // if(this.type == 1){
            //     if(this.type2 == 4){
            //         this.type = Math.floor(Math.random()*10)
            //         this.type2 = Math.floor(Math.random()*9)
            //     }
            // }
            // if(this.type == 1){
            //     if(this.type2 == 4){
            //         this.type = Math.floor(Math.random()*10)
            //         this.type2 = Math.floor(Math.random()*9)
            //     }
            // }
            this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/2.5, "blue")
        }
        draw(){
            // tutorial_canvas_context.lineWidth = 1
            // tutorial_canvas_context.fillStyle = this.color
            // tutorial_canvas_context.strokeStyle = "red"
            // // tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
            // tutorial_canvas_context.strokeRect(this.x, this.y, this.width, this.height)

            this.body = new Circle(this.x+this.width/2, this.y+this.height/2, this.width/2.5, "blue")
            // this.body.draw()
            let sheetwidth = fruitsprites.width
            let sheetheight = fruitsprites.height
            let cols = 10
            let rows = 10
        
            // for(let q = 0; q < 3;q++){

            //     for(let s = 0;s<this.squish.length;s++){
            //         this.squish[s].move()
            //         this.squish[s].draw()
            //         this.squish[s].radius -= .05
            //         if(this.squish[s].radius <= 0){
            //             this.squish[s].radius = 0
            //         }
            //     }
            
            //     for(let s = 0;s<this.squish.length;s++){
            //         if(this.squish[s].radius <= 0){
            //             this.squish.splice(s,1)
            //         }
            //     }
            

            // }


            let width = sheetwidth/cols
            let height = sheetheight/rows


           let  srcx = Math.floor(this.type)*width
          let   srcy = Math.floor(this.type2)*height

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


        
          if(this.body.repelCheck(pomao.tongue)){
            // this.x += pomao.tonguexmom -(((this.body.x-(this.width/2))-pomao.body.x)/100)
            // this.y += pomao.tongueymom -(((this.body.y-(this.height/2))-pomao.body.y)/100)
            // this.move()
            this.marked = 1  
            this.width*=.995
            this.height*=.995
            // ////console.log(this)
          }
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
            this.x  -= (this.body.x-pomao.tongue.x)/1
            this.y -= (this.body.y-pomao.tongue.y)/1

          }
          if(this.marked == 2){
            this.x  -= ((this.body.x-pomao.body.x)/3.5)
            this.y -= ((this.body.y-pomao.body.y)/3.5)
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
            
            if(pomao.eggs.length < 10){

            let seepx = new Seed(pomao.eggs[pomao.eggs.length-1])
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
            let xdif = this.x1-this.x2
            let ydif = this.y1-this.y2
            let hypotenuse = (xdif*xdif)+(ydif*ydif)
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
                    pomao.thrown[t].markedx = 3
                    this.state = 1
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
                let ray = new Circle(this.body.x+(Math.sin(a)*26),this.body.y+(Math.cos(a)*26), 5,"yellow")
                this.rays.push(ray)
                a+=(Math.PI/4.5)
            }
            for(let t = 0; t<this.pomao.hits;t++){
                this.rays[t].draw()
            }

        }
    }

    class Pomao{
        constructor(){
            this.fired = 0
            this.blocked = 0
            this.bonked = 0
            this.blush = 0
            this.high = 0
            this.tripping = 0
            this.eggtimer = 10
            this.body = new Circlex(640,360, 32, "red")
            this.tongue = new Circle(this.body.x, this.body.y, 6, "blue")
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
                                let cloudpuff = new Shockwave(this.body)
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
                                    let cloudpuff = new Shockwave(this.body)
                                    shocks.push(cloudpuff)
                                }
                                if(pomao.body.symom != 0 || pomao.body.sxmom != 0){
                                    this.tonguex = 0
                                    this.tonguey = 0
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
                            }
                            pomao.body.symom = 0
                            pomao.body.ymom = 0
                            pomao.body.sxmom = 0
                            break
                        }

                        if(this.pounding == 10){
                            let cloudpuff = new Shockwave(this.body)
                            shocks.push(cloudpuff)
                        }
                        }

                        if(this.pounding == 10){
                            let cloudpuff = new Shockwave(this.body)
                            shocks.push(cloudpuff)
                        }
                    }else if(floors[t].isPointInside(pomao.tongue)){
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
                            this.tongueymom*=.5
                            this.tonguexmom*=.5
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

                            this.tongueymom*=.5
                            this.tonguexmom*=.5
                            }
                        }
                        pomao.body.ymom = 0
                        pomao.body.xmom = 0
                        this.dry = 1
                        break
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
                            tutorial_canvas_context.translate(0,  this.body.y-(ramps[t].y-this.body.radius))
                            this.body.y = ramps[t].y-this.body.radius
                            dry = 1
                            if(pomao.body.symom != 0 || pomao.body.sxmom != 0){
                                this.tonguex = 0
                                this.tonguey = 0
                            }
                            pomao.body.symom = 0
                            pomao.body.ymom = 0
                            pomao.body.sxmom = 0
                            break
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

                            this.tongueymom*=.5
                            this.tonguexmom*=.5
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

            // let yrat = (ramps[t].y-ramps[t].tip)
            // let x1dis = ramps[t].x1-ramps[t].x
            // let x2dis = this.footspot.x-ramps[t].x

            if(ramps[t].isPointInside(this.footspot)){
            for(let k = 0; k< 10000; k++){

                this.footspot = new Circle(this.body.x, this.body.y+(this.body.radius-1), 3, "red")
                if(ramps[t].isPointInside(this.footspot)){

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
                        this.body.ymom *=-.333 //1
                    }
                    if(this.body.symom < 0){
                        this.body.symom *=-.333 //1
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
            this.control()
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
            this.tongue = new Circle(this.body.x+this.tonguex, this.body.y+this.tonguey, 5, "blue")
            this.tongued1 = new Circle(this.body.x+this.tonguex+(this.rattled/3), this.body.y+this.tonguey, 5, "#0000FF77")
            this.tongued2 = new Circle(this.body.x+this.tonguex-(this.rattled/3), this.body.y+this.tonguey, 5, "#0000FF77")
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

        this.link = new Line(this.body.x, 3+this.body.y-(Math.sin(this.timeloop)*1), this.tongue.x, this.tongue.y, "blue", 3)
        this.link.draw()
        for(let t = 0; t<fruits.length; t++){
            if(fruits[t].x > this.body.x-((tutorial_canvas.width/2)+fruits[t].width) && fruits[t].x < this.body.x+((tutorial_canvas.width/2)+fruits[t].width) ){

                fruits[t].draw()
            }
        }



        for(let t = 0; t<boys.length; t++){
            if(boys[t].x > this.body.x-(tutorial_canvas.width) && boys[t].x < this.body.x+(tutorial_canvas.width) ){
                boys[t].draw()
            }else{
                // boys[t].gravity()
                // boys[t].move()
            }
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
                    if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus[0] == 'A' )){
                        tutorial_canvas_context.drawImage(pomaof, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimg, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }else{
                    if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus[0] == 'A' )){
                        tutorial_canvas_context.drawImage(pomaofl, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimgl, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }
            }else{
                if(this.dir == 1){
                    if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus[0] == 'A' )){
                        tutorial_canvas_context.drawImage(pomaofh, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimgh, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }else{
                    if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus[0] == 'A' )){
                        tutorial_canvas_context.drawImage(pomaoflh, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimglh, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }
            }
            }else{
                if(this.disabled == 0){
                    if(this.dir == 1){
                        if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus[0] == 'A' )){
                            tutorial_canvas_context.drawImage(pomaofb, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                           }else{  
                                tutorial_canvas_context.drawImage(pomaoimgb, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                          }
                    }else{
                        if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus[0] == 'A' )){
                            tutorial_canvas_context.drawImage(pomaoflb, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                           }else{  
                                tutorial_canvas_context.drawImage(pomaoimgbl, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                          }
                    }
                }else{

                if(this.dir == 1){
                    if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus[0] == 'A' )){
                        tutorial_canvas_context.drawImage(pomaofbh, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimglhb, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }else{
                    if(this.hng != 0 && this.pounding < 10 && (keysPressed['w'] ||   gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus[0] == 'A' )){
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
    //   if(gamepadAPI.buttonsStatus[0] == 'A'){
        if(gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus[0] == 'A'){
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
    }else if(keysPressed['w']  || gamepadAPI.buttonsStatus[0] == 'A'){
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

    //   if(gamepadAPI.buttonsStatus[0] == 'A'){
            if(keysPressed['f'] || keysPressed['n']  ||gamepadAPI.buttonsStatus.includes('DPad-Left')){
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
         
            if(keysPressed['w']){
                // this.body.y-=2
                // for(let t = 0; t<fruits.length; t++){
                //     if(this.body.repelCheck(fruits[t].body)  || fruits[t].body.repelCheck(this.tongue)){
                //         // fruits[t].y-=1.9
                //         // fruits[t].x+=this.body.xmom
                //         // fruits[t].y+=this.body.ymom
                //     }
                // }
            }
            

    // if(gamepadAPI.axesStatus.length > 0){
    //     if(Math.abs(gamepadAPI.axesStatus[0]) >.2){
    //             // pomao.body.x+= gamepadAPI.axesStatus[0]*3
    //             // tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
   
    //         // }else{
    //         // }else if(pomao.blocked*gamepadAPI.axesStatus[0]*3 > 0){

         

    //         if(this.blocked == 0){
    //             if(gamepadAPI.axesStatus[0]*3 > 0 ){
    //                 // //console.log("top")
    //                 pomao.body.x+= gamepadAPI.axesStatus[0]*3
    //                 tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)

    //                 for(let t = 0; t<blocks.length; t++){
    //                     if(blocks[t].marked == -1){
    //                   if(!nails.includes(blocks[t])){
    //                         blocks[t].x+=gamepadAPI.axesStatus[0]*2.999
    //                         }
    //                         // blocks[t].xmom+=.1
    //                     }
    //                 }
    //             }else{
    //                 // //console.log("bottom")
    //                 pomao.body.x+= gamepadAPI.axesStatus[0]*3
    //                 tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
                    
    //                 for(let t = 0; t<blocks.length; t++){
    //                     if(blocks[t].marked == 1){
    //                   if(!nails.includes(blocks[t])){
    //                         blocks[t].x+=gamepadAPI.axesStatus[0]*2.999
    //                         }
    //                         // blocks[t].xmom+=.1
    //                     }
    //                 }
    //             }
    //             }else if(gamepadAPI.axesStatus[0]*3*this.blocked > 0){

    //                 pomao.body.x+= gamepadAPI.axesStatus[0]*3
    //                 tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)

    //                 for(let t = 0; t<blocks.length; t++){
    //                     if(blocks[t].marked == 1){
    //                   if(!nails.includes(blocks[t])){
    //                         blocks[t].x+=gamepadAPI.axesStatus[0]*2.999
    //                         }
    //                         // blocks[t].xmom+=.1
    //                     }
    //                 }
    //             }
         
            
    //         // }
    //         if(gamepadAPI.axesStatus[0]*3 < .1){
    //             pomao.dir = -1
    //             if(pomao.body.sxmom >0){
    //                 pomao.body.sxmom = 0
    //             }
    //         }
    //          if(gamepadAPI.axesStatus[0]*3 > -.1){
    //             pomao.dir = 1
    //             if(pomao.body.sxmom <0){
    //                 pomao.body.sxmom = 0
    //             }
    //         }
    //         for(let t = 1;t<pomao.eggs.length;t++){
    //             pomao.eggs[t].steer()
    //         }
    //     }
    // }
            
            // if(gamepadAPI.axesStatus.length > 0){
            //     if(Math.abs(gamepadAPI.axesStatus[0]) >.2){
            //             // pomao.body.x+= gamepadAPI.axesStatus[0]*3
            //             // tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
           
            //         // }else{
            //         // }else if(pomao.blocked*gamepadAPI.axesStatus[0]*3 > 0){
        
                 
        
            //         if(this.blocked == 0){
            //             if(gamepadAPI.axesStatus[0]*3 > 0 ){
            //                 // //console.log("top")
            //                 pomao.body.x+= gamepadAPI.axesStatus[0]*3
            //                 tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
        
            //                 for(let t = 0; t<blocks.length; t++){
            //                     if(blocks[t].marked == -1){
            //                   if(!nails.includes(blocks[t])){
            //                         blocks[t].x+=gamepadAPI.axesStatus[0]*2.999
            //                         }
            //                         // blocks[t].xmom+=.1
            //                     }
            //                 }
            //             }else{
            //                 // //console.log("bottom")
            //                 pomao.body.x+= gamepadAPI.axesStatus[0]*3
            //                 tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
                            
            //                 for(let t = 0; t<blocks.length; t++){
            //                     if(blocks[t].marked == 1){
            //                   if(!nails.includes(blocks[t])){
            //                         blocks[t].x+=gamepadAPI.axesStatus[0]*2.999
            //                         }
            //                         // blocks[t].xmom+=.1
            //                     }
            //                 }
            //             }
            //             }else if(gamepadAPI.axesStatus[0]*3*this.blocked > 0){
            //                 pomao.body.x+= gamepadAPI.axesStatus[0]*3
            //                 tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)
        
            //                 for(let t = 0; t<blocks.length; t++){
            //                     if(blocks[t].marked == 1){
            //                   if(!nails.includes(blocks[t])){
            //                         blocks[t].x+=gamepadAPI.axesStatus[0]*2.999
            //                         }
            //                         // blocks[t].xmom+=.1
            //                     }
            //                 }
            //             }
                 
                    
            //         // }
            //         if(gamepadAPI.axesStatus[0]*3 < .1){
            //             pomao.dir = -1
            //             if(pomao.body.sxmom >0){
            //                 pomao.body.sxmom = 0
            //             }
            //         }
            //          if(gamepadAPI.axesStatus[0]*3 > -.1){
            //             pomao.dir = 1
            //             if(pomao.body.sxmom <0){
            //                 pomao.body.sxmom = 0
            //             }
            //         }
            //         for(let t = 1;t<pomao.eggs.length;t++){
            //             pomao.eggs[t].steer()
            //         }
            //     }
            // }

            this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
            this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
            if(keysPressed['a']  || keysPressed['d'] || (this.body.symom !== 0 || this.body.sxmom !== 0)){
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
                        pomao.dir = -1
                        if(pomao.body.sxmom >0){
                            pomao.body.sxmom = 0
                        }
                    }
                     if(gamepadAPI.axesStatus[0]*3 > -.1){
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
            // if(keysPressed['f']){
            //     // tutorial_canvas_context.clearRect(0,0,tutorial_canvas.width, tutorial_canvas.height)
            // }

            this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
            this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
            if(keysPressed[' ']){

            this.bodyxtight = new Circle(this.body.x,this.body.y, 9, "red")
            this.bodytight = new Circle(this.body.x,this.body.y, 21, "yellow")
            this.tongue = new Circle(this.body.x+this.tonguex, this.body.y+this.tonguey, 5, "blue")
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
                        this.tonguexmom *= .8
                        this.tongueymom *= .8
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
                        // if(Math.abs(gamepadAPI.axesStatus[2]) - Math.abs(gamepadAPI.axesStatus[3]) < -.085){
                        //     if(gamepadAPI.axesStatus[2] > .25){
                        //         pomao.xdir = 1
                        //         pomao.tonguexmom = 33.1/2
                        //         if(Math.abs(Math.abs(gamepadAPI.axesStatus[2])-Math.abs(gamepadAPI.axesStatus[3])) > .17){
                        //             pomao.tongueymom *= .707
                        //             pomao.tonguey*= .707
                        //         }
                        //     }else if(gamepadAPI.axesStatus[2] < -.25){
                        //         pomao.xdir = -1
                        //         pomao.tonguexmom = -33.1/2
                        //         if(Math.abs(Math.abs(gamepadAPI.axesStatus[2])-Math.abs(gamepadAPI.axesStatus[3])) > .17){
                        //             pomao.tongueymom *= .707
                        //             pomao.tonguey*= .707
                        //         }
                        //         pomao.dir = -1
                        //     }
                        //     if(gamepadAPI.axesStatus[3] < -.25){
                        //         pomao.ydir = -1
                        //         pomao.tongueymom = -33.1/2
                        //         if(Math.abs(Math.abs(gamepadAPI.axesStatus[2])-Math.abs(gamepadAPI.axesStatus[3])) > .17){
                        //             pomao.tonguexmom *= .707
                        //             pomao.tonguex*= .707
                        //         }
                        //     }else if(gamepadAPI.axesStatus[3] > .25){
                        //         pomao.ydir = 1
                        //         pomao.tongueymom = 33.1/2
                        //         if(Math.abs(Math.abs(gamepadAPI.axesStatus[2])-Math.abs(gamepadAPI.axesStatus[3])) > .17){
                        //             pomao.tonguexmom *= .707
                        //             pomao.tonguex*= .707
                        //         }
                        //         pomao.dir = 1
                        //     }
                        // }else  if(Math.abs(gamepadAPI.axesStatus[3]) - Math.abs(gamepadAPI.axesStatus[2]) > .085){
        
                        //     if(gamepadAPI.axesStatus[3] < -.25){
                        //         pomao.ydir = -1
                        //         pomao.tongueymom = -33.1/2
                        //         if(Math.abs(Math.abs(gamepadAPI.axesStatus[2])-Math.abs(gamepadAPI.axesStatus[3])) > .17){
                        //             pomao.tonguexmom *= .707
                        //             pomao.tonguex*= .707
                        //         }
                        //     }else if(gamepadAPI.axesStatus[3] > .25){
                        //         pomao.ydir = 1
                        //         pomao.tongueymom = 33.1/2
                        //         if(Math.abs(Math.abs(gamepadAPI.axesStatus[2])-Math.abs(gamepadAPI.axesStatus[3])) > .17){
                        //             pomao.tonguexmom *= .707
                        //             pomao.tonguex*= .707
                        //         }
                        //         pomao.dir = 1
                        //     }
                        // if(gamepadAPI.axesStatus[2] > .25){
                        //     pomao.xdir = 1
                        //     pomao.tonguexmom = 33.1/2
                        //     if(Math.abs(Math.abs(gamepadAPI.axesStatus[2])-Math.abs(gamepadAPI.axesStatus[3])) > .17){
                        //         pomao.tongueymom *= .707
                        //         pomao.tonguey*= .707
                        //     }
                        // }else if(gamepadAPI.axesStatus[2] < -.25){
                        //     pomao.xdir = -1
                        //     pomao.tonguexmom = -33.1/2
                        //     if(Math.abs(Math.abs(gamepadAPI.axesStatus[2])-Math.abs(gamepadAPI.axesStatus[3])) > .17){
                        //         pomao.tongueymom *= .707
                        //         pomao.tonguey*= .707
                        //     }
                        //     pomao.dir = -1
                        // }
                        // }else{
                          
                        // //console.log("3", gamepadAPI.axesStatus[3], "2", gamepadAPI.axesStatus[2])
                        let kick = 0





                        let hurtle = (Rax(Math.atan2(((gamepadAPI.axesStatus[3])), ((gamepadAPI.axesStatus[2]))))) 


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

                //         if(Math.abs(Math.abs(gamepadAPI.axesStatus[2])-Math.abs(gamepadAPI.axesStatus[3])) > (Math.abs(Math.abs(gamepadAPI.axesStatus[2])+Math.abs(gamepadAPI.axesStatus[3])))/1.7){


                //             console.log(Rax(Math.atan2(((gamepadAPI.axesStatus[3])), ((gamepadAPI.axesStatus[2])))))
                //             //gives straight shots
                //             if((Math.abs(gamepadAPI.axesStatus[2])<Math.abs(gamepadAPI.axesStatus[3])) ){

                //                 if(gamepadAPI.axesStatus[3] <= -.18){
                //                     pomao.ydir = -1
                //                     pomao.tongueymom = -33.1/2
                //                     kick++
                //                 }else if(gamepadAPI.axesStatus[3] >= .18){
                //                     pomao.ydir = 1
                //                     pomao.tongueymom = 33.1/2
                //                     pomao.dir = 1
                //                     kick++
                //                 }

                //             }else{

                //                 if(gamepadAPI.axesStatus[2] >= .18){
                //                     pomao.xdir = 1
                //                     pomao.tonguexmom = 33.1/2
                //                     kick++
                //                 }else if(gamepadAPI.axesStatus[2] <= -.18){
                //                     pomao.xdir = -1
                //                     pomao.tonguexmom = -33.1/2
                //                     pomao.dir = -1
                //                     kick++
                //                 }  
                //             }


                //         if(kick == 2){
                //             pomao.tonguexmom *= .8
                //            pomao.tongueymom *= .8
                //         }

                //         }else{
                //             //gives diagonals
                //             if(gamepadAPI.axesStatus[3] <= -.1){
                //                 pomao.ydir = -1
                //                 pomao.tongueymom = -33.1/2
                //                 kick++
                //             }else if(gamepadAPI.axesStatus[3] >= .1){
                //                 pomao.ydir = 1
                //                 pomao.tongueymom = 33.1/2
                //                 pomao.dir = 1
                //                 kick++
                //             }
                //         if(gamepadAPI.axesStatus[2] >= .1){
                //             pomao.xdir = 1
                //             pomao.tonguexmom = 33.1/2
                //             kick++
                //         }else if(gamepadAPI.axesStatus[2] <= -.1){
                //             pomao.xdir = -1
                //             pomao.tonguexmom = -33.1/2
                //             pomao.dir = -1
                //             kick++
                //         }  
                //         if(kick == 2){
                //             pomao.tonguexmom *= .8
                //            pomao.tongueymom *= .8
                //         }
                //         }
                //         // }
        
                //         // if(pomao.xdir*pomao.ydir != 0){
                //         //     pomao.tonguexmom *= .8
                //         //     pomao.tongueymom *= .8
                //         // }
        
                        // this.fired = 3
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

    class Shockwave{
        constructor(body){
                this.center = body
                this.shocksl = []
                this.shocksr = []
                this.shock()
                console.log(this)

        }
        draw(){
        
            for (let n = 0; n<this.shocksr.length; n++){
                if(this.shocksr[n].radius < .35){
                    this.shocksr.splice(n,1)
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
                if(this.shocksl[n].radius < .35){
                    this.shocksl.splice(n,1)
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
                    let link2 = new Line(this.shocksl[n].x,  this.shocksl[n].y, this.shocksl[n+1].x,  this.shocksl[n+1].y, "cyan", this.shocksl[n].radius)
                    let link = new Line(this.shocksr[n].x,  this.shocksr[n].y, this.shocksr[n+1].x,  this.shocksr[n+1].y, "cyan", this.shocksr[n].radius)
             
                link.draw()
                link2.draw() 
                }
            }
        }
        }
        shock(){
            if(pomao.body.ymom > 10.2){
            let shockright = new Circlec(this.center.x, this.center.y+34, this.center.radius/10, "yellow", 20.5, 0)
            let shockleft = new Circlec(this.center.x, this.center.y+34, this.center.radius/10, "yellow", -20.5, 0)
            this.shocksl.push(shockleft)
            this.shocksr.push(shockright)
            }
        }
    }

    let pomao = new Pomao()

    let boys = []
    let deadboys = []
    let fruits = []
    let walls = []
    let jellys = []
    let roofs = []
    let switches = []
    let shocks =[]
    let blocks = []
    let floor = new Rectangle(-100000000, 650, 50, 7000000000, "red")
    floors.push(floor)
    let wall = new Rectangle(2460, 0, 2000, 50, "red")
    // let walltest = new Rectangle(500, 0, 2000, 50, "red")
    let wallt = new Rectangle(4500, -800, 2800, 50, "red")

    let jwall1 = new Rectangle(3150, -200, 500, 50, "red")
    let jelly = new Rectangle(3200, -180, 480, 500, "#00FFFF88")
    let jwall2 = new Rectangle(3700, -200, 500, 50, "red")
    let jfloor = new Rectangle(3150, 300, 50, 600, "red")
    let jfloorsafe = new Rectangle(2900, 300, 20, 259, "red")
    let jfloorsafe2 = new Rectangle(3691, 270, 20, 809, "red")




    let roof = new Rectangle(0, 0, 50, 2500, "red")
    let roof2 = new Rectangle(-2500, -500, 50, 5500, "red")
    let buttonfloor = new Rectangle(4100, -530, 20, 420, "red")
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
    // walls.push(walltest)
    // floors.push(walltest)
    walls.push(wallt)
    floors.push(roof)
    walls.push(roof)
    roofs.push(roof)
    floors.push(roof2)
    walls.push(roof2)
    roofs.push(roof2)

    let wall2 = new Rectangle(-2500, -500, 2000, 50, "red")
    let wall3 = new Rectangle(2800, -500, 520, 50, "red")

    let tutfloor = new Rectangle(2500, 0, 20, 350, "red")
    floors.push(wall2)
    floors.push(tutfloor)
    walls.push(wall2)
    floors.push(wall3)
    walls.push(wall3)
    roofs.push(wall3)

    let nails = []
    let block = new Rectangle(-1500, 200, 200,200, "orange")
    let block2 = new Rectangle(2200, 200, 200,200, "orange")
    let nail = new Rectangle(-1950, 200, 200,200, "orange")
    nails.push(nail)
    let floor2 = new Rectangle(-100, 500, 20, 550, "red")

    let ramp2 = new Trianglex(1300, 651, "red", 40)
    ramps.push(ramp2)
    let ramp = new Triangle(800, 651, "red", 40)
    ramps.push(ramp)


    let ramp4 = new Circle(1900,700, 120, "red")
    ramps.push(ramp4)
    let ramp3 = new Circle(1900,1200, 600, "red")
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



    for(let t = 0 ; t< 4; t++){
        let floor3 = new Rectangle(-130+600*t, 500-(t*90), 20, 400, "red")
        floors.push(floor3)
    
        for(let t = 0;t<10; t++){
            let fruit = new Fruit(floor3.x+(Math.random()*400),floor3.y-(100+Math.random()*400), 60,60, "red")
           
            let wet = 0
            for(let s = 0; s<floors.length; s++){
                if(floors[s].isPointInside(fruit.body)){
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


    for(let t = 0 ; t< 4; t++){
        let floor3 = new Rectangle(-100-300*t, 500-(t*200), 20, 400, "red")
        floors.push(floor3)
    
        // let boy = new Boys(floor3.x+(Math.random()*400),floor3.y-(Math.random()*400), 60+(t*.1),60+(t*.1), "red")
        // boys.push(boy)
        for(let t = 0;t<10; t++){
            let fruit = new Fruit(floor3.x+(Math.random()*400),floor3.y-(100+Math.random()*400), 60,60, "red")
           
            let wet = 0
            for(let s = 0; s<floors.length; s++){
                if(floors[s].isPointInside(fruit.body)){
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



    let fruitx = new Fruit(510,340, 60,60, "red")
    let fruity = new Fruit(-3200,600, 60,60, "red")
    fruity.type = 11
    fruity.type2 = 11
    fruits.push(fruitx)
    fruits.push(fruity)

    for(let t = 0;t<100; t++){
        let fruit = new Fruit(-2450+(Math.random()*4850),225+(Math.random()*315), 60,60, "red")
        let wet = 0
        for(let s = 0; s<floors.length; s++){
            if(floors[s].isPointInside(fruit.body)){
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
        let fruit = new Fruit(3740+(Math.random()*650),-470+(Math.random()*730), 60,60, "red")
        let wet = 0
        for(let s = 0; s<floors.length; s++){
            if(floors[s].isPointInside(fruit.body)){
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

    let fractal = new Fractal(7)
    let fracta2l = new Fractal2(7)
    let fracta3l = new Fractal3(7)
    // let fracta4l = new Fractal4(7)


    let shockfriendly = new Shockwave(pomao.body)
    shocks.push(shockfriendly)

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
            this.radius = 10
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
            if(this.y+this.radius > 650){
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

    // let seep

        // let seep = new Seed(pomao.eggs[pomao.eggs.length-1])
    // let seeds = []

    // pomao.eggs.push(seep)

    tutorial_canvas_context.fillStyle = "black";
    tutorial_canvas_context.font = `${30}px Arial`;
    tutorial_canvas_context.fillText("loading", 300,350)

    for(let t = 0; t<10; t++){
        let boy = new Boys(3750+(t*80),0,50,50,"red")
        boys.push(boy)
    }
    

    for(let t = 0; t<4; t++){
        let boy = new Boys(-1000+(t*100),550,50,50,"red")
        boys.push(boy)
    }
    
    let buttonswitch = new Switchfloor(4500,-640,  4500-2000, -800,50, 2050)
  
    floors.push(buttonswitch.button.body)
    walls.push(buttonswitch.button.body)
    roofs.push(buttonswitch.button.body)

    setTimeout(function(){
    window.setInterval(function(){ 

        // "#AAAAFF"
        if(pomao.high > 1 && pomao.tripping > 0){
            tutorial_canvas_context.fillStyle =`rgba(85, 85, 128,${15/255})`
            tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)
           
        tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
        }else if(pomao.high > 1){
            tutorial_canvas_context.fillStyle =`rgba(153, 153, 230,${63/255})`
            tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)
           
        tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
        }else if (pomao.tripping > 0){


                tutorial_canvas_context.fillStyle =`rgba(190, 190, 255,${14/255})`
                tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)
              
        tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
            }else{
                tutorial_canvas_context.fillStyle =`rgba(170, 170, 255,${255/255})`
                tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)

                tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
               }
        if(pomao.hits > -1){
            // tutorial_canvas_context.drawImage(jumpometer, 0, 0, 10, 1000, -2200, -350, 10, 1000)
                 
            drawFractal()   

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
           
    for(let t = 0; t<ramps.length; t++){
        if(t > 1){

            ramps[t].draw()
               
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

    tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
          
        for(let t = 0; t<floors.length; t++){
            if(!jellys.includes(floors[t])){

                if(!nails.includes(floors[t])){

                tutorial_canvas_context.drawImage(floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                }else{
                tutorial_canvas_context.drawImage(nailimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                    

                }
                }else{

                 floors[t].draw()
                }
            }
            // floor.draw()
    
            buttonswitch.draw()
            tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
            for(let t = 0; t<pomao.eggs.length; t++){
                pomao.eggs[t].draw()
            }
            
            pomao.draw()


            if(pomao.pounding > 0){
                    shockfriendly.shock()
            }   

    tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
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
            // fracta4l.draw()
        }else{
            tutorial_canvas_context.fillStyle = "White";
            tutorial_canvas_context.font = "30px Arial";
            tutorial_canvas_context.fillText(`Pomao fell asleep and went home`, pomao.body.x-200, pomao.body.y);
              tutorial_canvas.style.background = "#8888CC"
        }
        tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)

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

            //     let seepx = new Seed(pomao.eggs[pomao.eggs.length-1])
            //         pomao.eggs.push(seepx)
            //     }

            
    },  14) 
}, 7000); 

function squarecirclefaceblockjump(square, circle){
    let squareendh = square.y + square.height
    let squareendw = square.x + square.width
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

    let squareendh = square.y + square.height
    let squareendw = square.x + square.width

    if(square.x <= circle.x){
        if(square.y <= circle.y+circle.radius){
            if(squareendw >= circle.x){
                if(squareendh >= circle.y){
                    return true
                }
            }
        }
    }
    return false
}

function squarecirclefacetopbottom(square, circle){

    let squareendh = square.y + square.height
    let squareendw = square.x + square.width

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

    let squareendh = square.y + square.height
    let squareendw = square.x + square.width

    if(square.x <= circle.x){
        if(square.y <= circle.y){
            if(squareendw >= circle.x){
                if(squareendh >= circle.y-circle.radius){
                    return true
                }
            }
        }
    }
    return false
}

function squarecircleface(square, circle){
    let squareendh = square.y + square.height
    let squareendw = square.x + square.width
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
        let sheetwidtht = zimg01.width
        let sheetheightt = zimg01.height
        let colst = 3
        let rowst = 3
        let widtht = sheetwidtht/colst
        let heightt = sheetheightt/rowst
        let  srcxt = Math.floor(fractal.runnerx%colst)*widtht
        let  srcyt = Math.floor(fractal.runnery%rowst)*heightt
        
         tutorial_canvas_context.drawImage(zimgs[fractal.sheet], srcxt, srcyt, widtht, heightt, pomao.body.x-640, pomao.body.y-360, 1280, 720)
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
})
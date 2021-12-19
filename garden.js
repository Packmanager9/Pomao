
//     let global = {}
//     global.racing = 0
//     global.fighting = 0
//     global.timeloop = 0
//     let pointer = {}
//     let aRelease = true
// // window.addEventListener('DOMContentLoaded', (event) => {

//     const cityfolk = new Image()
//     cityfolk.src = 'cityfolk6.png'
//     const spinsheet = new Image()
//     spinsheet.src = '128spim.png'
//     const pointerimg = new Image()
//     pointerimg.src = 'pointer.png'
//     const grabberimg = new Image()
//     grabberimg.src = 'grabber.png'

//     const placessheet = new Image()
//     placessheet.src = 'places.png'

//     const tetrahedron = new Image()
//     tetrahedron.src = 'gq-sheet.png'
//     const dodecahedron = new Image()
//     dodecahedron.src = 'dodec3sheet.png'

//     const icosohedron = new Image()
//     icosohedron.src = 'icosheet.png'

//     const squaretable = {} // this section of code is an optimization for use of the hypotenuse function on Line and LineOP objects
//     for(let t = 0;t<10000000;t++){
//         squaretable[`${t}`] = Math.sqrt(t)
//         if(t > 999){
//             t+=9
//         }
//     }
//     const gamepadAPI = {
//         controller: {},
//         turbo: true,
//         connect: function (evt) {
//             if (navigator.getGamepads()[0] != null) {
//                 gamepadAPI.controller = navigator.getGamepads()[0]
//                 gamepadAPI.turbo = true;
//             } else if (navigator.getGamepads()[1] != null) {
//                 gamepadAPI.controller = navigator.getGamepads()[0]
//                 gamepadAPI.turbo = true;
//             } else if (navigator.getGamepads()[2] != null) {
//                 gamepadAPI.controller = navigator.getGamepads()[0]
//                 gamepadAPI.turbo = true;
//             } else if (navigator.getGamepads()[3] != null) {
//                 gamepadAPI.controller = navigator.getGamepads()[0]
//                 gamepadAPI.turbo = true;
//             }
//             for (let i = 0; i < gamepads.length; i++) {
//                 if (gamepads[i] === null) {
//                     continue;
//                 }
//                 if (!gamepads[i].connected) {
//                     continue;
//                 }
//             }
//         },
//         disconnect: function (evt) {
//             gamepadAPI.turbo = false;
//             delete gamepadAPI.controller;
//         },
//         update: function () {
//             gamepadAPI.controller = navigator.getGamepads()[0]
//             gamepadAPI.buttonsCache = [];// clear the buttons cache
//             for (var k = 0; k < gamepadAPI.buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
//                 gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
//             }
//             gamepadAPI.buttonsStatus = [];// clear the buttons status
//             var c = gamepadAPI.controller || {}; // get the gamepad object
//             var pressed = [];
//             if (c.buttons) {
//                 for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
//                     if (c.buttons[b].pressed) {
//                         pressed.push(gamepadAPI.buttons[b]);
//                     }
//                 }
//             }
//             var axes = [];
//             if (c.axes) {
//                 for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
//                     axes.push(c.axes[a].toFixed(2));
//                 }
//             }
//             gamepadAPI.axesStatus = axes;// assign received values
//             gamepadAPI.buttonsStatus = pressed;
//             // //console.log(pressed); // return buttons for debugging purposes
//             return pressed;
//         },
//         buttonPressed: function (button, hold) {
//             var newPress = false;
//             for (var i = 0, s = gamepadAPI.buttonsStatus.length; i < s; i++) {// loop through pressed buttons
//                 if (gamepadAPI.buttonsStatus[i] == button) {// if we found the button we're looking for...
//                     newPress = true;// set the boolean variable to true
//                     if (!hold) {// if we want to check the single press
//                         for (var j = 0, p = gamepadAPI.buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
//                             if (gamepadAPI.buttonsCache[j] == button) { // if the button was already pressed, ignore new Gardenpress
//                                 newPress = false;
//                             }
//                         }
//                     }
//                 }
//             }
//             return newPress;
//         },
//         buttons: [
//             'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
//         ],
//         buttonsCache: [],
//         buttonsStatus: [],
//         axesStatus: []
//     };
//     // let tutorial_canvas
//     // let tutorial_canvas_context
//     let keysPressed = {}
//     let FLEX_engine
//     let TIP_engine = {}
//     let XS_engine
//     let YS_engine
//     TIP_engine.x = 350
//     TIP_engine.y = 350
//     class GardenPoint {
//         constructor(x, y) {
//             this.x = x
//             this.y = y
//             this.radius = 0
//         }
//         pointDistance(point) {
//             return (new GardenLineOP(this, point, "transparent", 0)).hypotenuse()
//         }
//     }

//     class GardenVector{ // vector math and physics if you prefer this over vector components on circles
//         constructor(object = (new GardenPoint(0,0)), xmom = 0, ymom = 0){
//             this.xmom = xmom
//             this.ymom = ymom
//             this.object = object
//         }
//         isToward(point){
//             let link = new GardenLineOP(this.object, point)
//             let dis1 = link.sqrDis()
//             let dummy = new GardenPoint(this.object.x+this.xmom, this.object.y+this.ymom)
//             let link2 = new GardenLineOP(dummy, point)
//             let dis2 = link2.sqrDis()
//             if(dis2 < dis1){
//                 return true
//             }else{
//                 return false
//             }
//         }
//         rotate(angleGoal){
//             let link = new GardenLine(this.xmom, this.ymom, 0,0)
//             let length = link.hypotenuse()
//             let x = (length * Math.cos(angleGoal))
//             let y = (length * Math.sin(angleGoal))
//             this.xmom = x
//             this.ymom = y
//         }
//         magnitude(){
//             return (new GardenLine(this.xmom, this.ymom, 0,0)).hypotenuse()
//         }
//         normalize(size = 1){
//             let magnitude = this.magnitude()
//             this.xmom/=magnitude
//             this.ymom/=magnitude
//             this.xmom*=size
//             this.ymom*=size
//         }
//         multiply(vect){
//             let point = new GardenPoint(0,0)
//             let end = new GardenPoint(this.xmom+vect.xmom, this.ymom+vect.ymom)
//             return point.pointDistance(end)
//         }
//         add(vect){
//             return new GardenVector(this.object, this.xmom+vect.xmom, this.ymom+vect.ymom)
//         }
//         subtract(vect){
//             return new GardenVector(this.object, this.xmom-vect.xmom, this.ymom-vect.ymom)
//         }
//         divide(vect){
//             return new GardenVector(this.object, this.xmom/vect.xmom, this.ymom/vect.ymom) //be careful with this, I don't think this is right
//         }
//         draw(){
//             let dummy = new GardenPoint(this.object.x+this.xmom, this.object.y+this.ymom)
//             let link = new GardenLineOP(this.object, dummy, "#FFFFFF", 1)
//             link.draw()
//         }
//     }
//     class GardenLine {
//         constructor(x, y, x2, y2, color, width) {
//             this.x1 = x
//             this.y1 = y
//             this.x2 = x2
//             this.y2 = y2
//             this.color = color
//             this.width = width
//         }
//         angle() {
//             return Math.atan2(this.y1 - this.y2, this.x1 - this.x2)
//         }
//         squareDistance() {
//             let xdif = this.x1 - this.x2
//             let ydif = this.y1 - this.y2
//             let squareDistance = (xdif * xdif) + (ydif * ydif)
//             return squareDistance
//         }
//         hypotenuse() {
//             let xdif = this.x1 - this.x2
//             let ydif = this.y1 - this.y2
//             let hypotenuse = (xdif * xdif) + (ydif * ydif)
//             if(hypotenuse < 10000000-1){
//                 if(hypotenuse > 1000){
//                     return squaretable[`${Math.round(10*Math.round((hypotenuse*.1)))}`]
//                 }else{
//                 return squaretable[`${Math.round(hypotenuse)}`]
//                 }
//             }else{
//                 return Math.sqrt(hypotenuse)
//             }
//         }
//         draw() {
//             let linewidthstorage = tutorial_canvas_context.lineWidth
//             tutorial_canvas_context.strokeStyle = this.color
//             tutorial_canvas_context.lineWidth = this.width
//             tutorial_canvas_context.beginPath()
//             tutorial_canvas_context.moveTo(this.x1, this.y1)
//             tutorial_canvas_context.lineTo(this.x2, this.y2)
//             tutorial_canvas_context.stroke()
//             tutorial_canvas_context.lineWidth = linewidthstorage
//         }
//     }
//     class GardenLineOP {
//         constructor(object, target, color, width) {
//             this.object = object
//             this.target = target
//             this.color = color
//             this.width = width
//         }
//         squareDistance() {
//             let xdif = this.object.x - this.target.x
//             let ydif = this.object.y - this.target.y
//             let squareDistance = (xdif * xdif) + (ydif * ydif)
//             return squareDistance
//         }
//         hypotenuse() {
//             let xdif = this.object.x - this.target.x
//             let ydif = this.object.y - this.target.y
//             let hypotenuse = (xdif * xdif) + (ydif * ydif)
//             if(hypotenuse < 10000000-1){
//                 if(hypotenuse > 1000){
//                     return squaretable[`${Math.round(10*Math.round((hypotenuse*.1)))}`]
//                 }else{
//                 return squaretable[`${Math.round(hypotenuse)}`]
//                 }
//             }else{
//                 return Math.sqrt(hypotenuse)
//             }
//         }
//         angle() {
//             return Math.atan2(this.object.y - this.target.y, this.object.x - this.target.x)
//         }
//         draw() {
//             let linewidthstorage = tutorial_canvas_context.lineWidth
//             tutorial_canvas_context.strokeStyle = this.color
//             tutorial_canvas_context.lineWidth = this.width
//             tutorial_canvas_context.beginPath()
//             tutorial_canvas_context.moveTo(this.object.x, this.object.y)
//             tutorial_canvas_context.lineTo(this.target.x, this.target.y)
//             tutorial_canvas_context.stroke()
//             tutorial_canvas_context.lineWidth = linewidthstorage
//         }
//     }
//     class GardenTriangle {
//         constructor(x, y, color, length, fill = 0, strokeWidth = 0, leg1Ratio = 1, leg2Ratio = 1, heightRatio = 1) {
//             this.x = x
//             this.y = y
//             this.color = color
//             this.length = length
//             this.x1 = this.x + this.length * leg1Ratio
//             this.x2 = this.x - this.length * leg2Ratio
//             this.tip = this.y - this.length * heightRatio
//             this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
//             this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
//             this.fill = fill
//             this.stroke = strokeWidth
//         }
//         draw() {
//             tutorial_canvas_context.strokeStyle = this.color
//             tutorial_canvas_context.stokeWidth = this.stroke
//             tutorial_canvas_context.beginPath()
//             tutorial_canvas_context.moveTo(this.x, this.y)
//             tutorial_canvas_context.lineTo(this.x1, this.y)
//             tutorial_canvas_context.lineTo(this.x, this.tip)
//             tutorial_canvas_context.lineTo(this.x2, this.y)
//             tutorial_canvas_context.lineTo(this.x, this.y)
//             if (this.fill == 1) {
//                 tutorial_canvas_context.fill()
//             }
//             tutorial_canvas_context.stroke()
//             tutorial_canvas_context.closePath()
//         }
//         isPointInside(point) {
//             if (point.x <= this.x1) {
//                 if (point.y >= this.tip) {
//                     if (point.y <= this.y) {
//                         if (point.x >= this.x2) {
//                             this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
//                             this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
//                             this.basey = point.y - this.tip
//                             this.basex = point.x - this.x
//                             if (this.basex == 0) {
//                                 return true
//                             }
//                             this.slope = this.basey / this.basex
//                             if (this.slope >= this.accept1) {
//                                 return true
//                             } else if (this.slope <= this.accept2) {
//                                 return true
//                             }
//                         }
//                     }
//                 }
//             }
//             return false
//         }
//     }
//     class GardenRectangle {
//         constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
//             this.x = x
//             this.y = y
//             this.height = height
//             this.width = width
//             this.color = color
//             this.xmom = 0
//             this.ymom = 0
//             this.stroke = stroke
//             this.strokeWidth = strokeWidth
//             this.fill = fill
//         }
//         draw() {
//             tutorial_canvas_context.fillStyle = this.color
//             tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
//         }
//         move() {
//             this.x += this.xmom
//             this.y += this.ymom
//         }
//         isPointInside(point) {
//             if (point.x >= this.x) {
//                 if (point.y >= this.y) {
//                     if (point.x <= this.x + this.width) {
//                         if (point.y <= this.y + this.height) {
//                             return true
//                         }
//                     }
//                 }
//             }
//             return false
//         }
//         doesPerimeterTouch(point) {
//             if (point.x + point.radius >= this.x) {
//                 if (point.y + point.radius >= this.y) {
//                     if (point.x - point.radius <= this.x + this.width) {
//                         if (point.y - point.radius <= this.y + this.height) {
//                             return true
//                         }
//                     }
//                 }
//             }
//             return false
//         }
//     }
//     class GardenRectangleStroke {
//         constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
//             this.x = x
//             this.y = y
//             this.height = height
//             this.width = width
//             this.color = color
//             this.xmom = 0
//             this.ymom = 0
//             this.stroke = stroke
//             this.strokeWidth = strokeWidth
//             this.fill = fill
//         }
//         draw() {
//             tutorial_canvas_context.fillStyle = this.color
//             tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)

//             tutorial_canvas_context.strokeStyle = "black"
//             tutorial_canvas_context.lineWidth = 3
//             tutorial_canvas_context.strokeRect(this.x-2, this.y-2, this.width+1, this.height+1)
//         }
//         move() {
//             this.x += this.xmom
//             this.y += this.ymom
//         }
//         isPointInside(point) {
//             if (point.x >= this.x) {
//                 if (point.y >= this.y) {
//                     if (point.x <= this.x + this.width) {
//                         if (point.y <= this.y + this.height) {
//                             return true
//                         }
//                     }
//                 }
//             }
//             return false
//         }
//         doesPerimeterTouch(point) {
//             if (point.x + point.radius >= this.x) {
//                 if (point.y + point.radius >= this.y) {
//                     if (point.x - point.radius <= this.x + this.width) {
//                         if (point.y - point.radius <= this.y + this.height) {
//                             return true
//                         }
//                     }
//                 }
//             }
//             return false
//         }
//     }
//     class GardenCircle {
//         constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
//             this.x = x
//             this.y = y
//             this.radius = radius
//             this.color = color
//             this.xmom = xmom
//             this.ymom = ymom
//             this.friction = friction
//             this.reflect = reflect
//             this.strokeWidth = strokeWidth
//             this.strokeColor = strokeColor
//         }
//         draw() {
//             tutorial_canvas_context.lineWidth = this.strokeWidth
//             tutorial_canvas_context.strokeStyle = this.color
//             tutorial_canvas_context.beginPath();
//             if (this.radius > 0) {
//                 tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
//                 tutorial_canvas_context.fillStyle = this.color
//                 tutorial_canvas_context.fill()
//                 tutorial_canvas_context.stroke();
//             } else {
//                 //console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
//             }
//         }
//         move() {
//             if (this.reflect == 1) {
//                 if (this.x + this.radius > tutorial_canvas.width) {
//                     if (this.xmom > 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y + this.radius > tutorial_canvas.height) {
//                     if (this.ymom > 0) {
//                         this.ymom *= -1
//                     }
//                 }
//                 if (this.x - this.radius < 0) {
//                     if (this.xmom < 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y - this.radius < 0) {
//                     if (this.ymom < 0) {
//                         this.ymom *= -1
//                     }
//                 }
//             }
//             this.x += this.xmom
//             this.y += this.ymom
//         }
//         unmove() {
//             if (this.reflect == 1) {
//                 if (this.x + this.radius > tutorial_canvas.width) {
//                     if (this.xmom > 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y + this.radius > tutorial_canvas.height) {
//                     if (this.ymom > 0) {
//                         this.ymom *= -1
//                     }
//                 }
//                 if (this.x - this.radius < 0) {
//                     if (this.xmom < 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y - this.radius < 0) {
//                     if (this.ymom < 0) {
//                         this.ymom *= -1
//                     }
//                 }
//             }
//             this.x -= this.xmom
//             this.y -= this.ymom
//         }
//         frictiveMove() {
//             if (this.reflect == 1) {
//                 if (this.x + this.radius > tutorial_canvas.width) {
//                     if (this.xmom > 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y + this.radius > tutorial_canvas.height) {
//                     if (this.ymom > 0) {
//                         this.ymom *= -1
//                     }
//                 }
//                 if (this.x - this.radius < 0) {
//                     if (this.xmom < 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y - this.radius < 0) {
//                     if (this.ymom < 0) {
//                         this.ymom *= -1
//                     }
//                 }
//             }
//             this.x += this.xmom
//             this.y += this.ymom
//             this.xmom *= this.friction
//             this.ymom *= this.friction
//         }
//         frictiveunMove() {
//             if (this.reflect == 1) {
//                 if (this.x + this.radius > tutorial_canvas.width) {
//                     if (this.xmom > 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y + this.radius > tutorial_canvas.height) {
//                     if (this.ymom > 0) {
//                         this.ymom *= -1
//                     }
//                 }
//                 if (this.x - this.radius < 0) {
//                     if (this.xmom < 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y - this.radius < 0) {
//                     if (this.ymom < 0) {
//                         this.ymom *= -1
//                     }
//                 }
//             }
//             this.xmom /= this.friction
//             this.ymom /= this.friction
//             this.x -= this.xmom
//             this.y -= this.ymom
//         }
//         isPointInside(point) {
//             this.areaY = point.y - this.y
//             this.areaX = point.x - this.x
//             if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
//                 return true
//             }
//             return false
//         }
//         doesPerimeterTouch(point) {
//             this.areaY = point.y - this.y
//             this.areaX = point.x - this.x
//             if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
//                 return true
//             }
//             return false
//         }
//     } 
//     class GardenCircleRing {
//         constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
//             this.x = x
//             this.y = y
//             this.radius = radius
//             this.color = color
//             this.xmom = xmom
//             this.ymom = ymom
//             this.friction = friction
//             this.reflect = reflect
//             this.strokeWidth = 10
//             this.strokeColor = strokeColor
//         }
//         draw() {
//             tutorial_canvas_context.lineWidth = this.strokeWidth
//             tutorial_canvas_context.strokeStyle = this.color
//             tutorial_canvas_context.beginPath();
//             if (this.radius > 0) {
//                 tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
//                 tutorial_canvas_context.fillStyle = this.color
//                 tutorial_canvas_context.fill()
//                 tutorial_canvas_context.stroke();
//             } else {
//                 //console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
//             }
//         }
//         move() {
//             if (this.reflect == 1) {
//                 if (this.x + this.radius > tutorial_canvas.width) {
//                     if (this.xmom > 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y + this.radius > tutorial_canvas.height) {
//                     if (this.ymom > 0) {
//                         this.ymom *= -1
//                     }
//                 }
//                 if (this.x - this.radius < 0) {
//                     if (this.xmom < 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y - this.radius < 0) {
//                     if (this.ymom < 0) {
//                         this.ymom *= -1
//                     }
//                 }
//             }
//             this.x += this.xmom
//             this.y += this.ymom
//         }
//         unmove() {
//             if (this.reflect == 1) {
//                 if (this.x + this.radius > tutorial_canvas.width) {
//                     if (this.xmom > 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y + this.radius > tutorial_canvas.height) {
//                     if (this.ymom > 0) {
//                         this.ymom *= -1
//                     }
//                 }
//                 if (this.x - this.radius < 0) {
//                     if (this.xmom < 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y - this.radius < 0) {
//                     if (this.ymom < 0) {
//                         this.ymom *= -1
//                     }
//                 }
//             }
//             this.x -= this.xmom
//             this.y -= this.ymom
//         }
//         frictiveMove() {
//             if (this.reflect == 1) {
//                 if (this.x + this.radius > tutorial_canvas.width) {
//                     if (this.xmom > 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y + this.radius > tutorial_canvas.height) {
//                     if (this.ymom > 0) {
//                         this.ymom *= -1
//                     }
//                 }
//                 if (this.x - this.radius < 0) {
//                     if (this.xmom < 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y - this.radius < 0) {
//                     if (this.ymom < 0) {
//                         this.ymom *= -1
//                     }
//                 }
//             }
//             this.x += this.xmom
//             this.y += this.ymom
//             this.xmom *= this.friction
//             this.ymom *= this.friction
//         }
//         frictiveunMove() {
//             if (this.reflect == 1) {
//                 if (this.x + this.radius > tutorial_canvas.width) {
//                     if (this.xmom > 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y + this.radius > tutorial_canvas.height) {
//                     if (this.ymom > 0) {
//                         this.ymom *= -1
//                     }
//                 }
//                 if (this.x - this.radius < 0) {
//                     if (this.xmom < 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.y - this.radius < 0) {
//                     if (this.ymom < 0) {
//                         this.ymom *= -1
//                     }
//                 }
//             }
//             this.xmom /= this.friction
//             this.ymom /= this.friction
//             this.x -= this.xmom
//             this.y -= this.ymom
//         }
//         isPointInside(point) {
//             this.areaY = point.y - this.y
//             this.areaX = point.x - this.x
//             if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
//                 return true
//             }
//             return false
//         }
//         doesPerimeterTouch(point) {
//             this.areaY = point.y - this.y
//             this.areaX = point.x - this.x
//             if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
//                 return true
//             }
//             return false
//         }
//     } class GardenPolygon {
//         constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
//             if (sides < 2) {
//                 sides = 2
//             }
//             this.reflect = reflect
//             this.xmom = xmom
//             this.ymom = ymom
//             this.body = new GardenCircle(x, y, size - (size * .293), "transparent")
//             this.nodes = []
//             this.angle = angle
//             this.size = size
//             this.color = color
//             this.angleIncrement = (Math.PI * 2) / sides
//             this.sides = sides
//             for (let t = 0; t < sides; t++) {
//                 let node = new GardenCircle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
//                 this.nodes.push(node)
//                 this.angle += this.angleIncrement
//             }
//         }
//         isPointInside(point) { // rough approximation
//             this.body.radius = this.size - (this.size * .293)
//             if (this.sides <= 2) {
//                 return false
//             }
//             this.areaY = point.y - this.body.y
//             this.areaX = point.x - this.body.x
//             if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.body.radius * this.body.radius)) {
//                 return true
//             }
//             return false
//         }
//         move() {
//             if (this.reflect == 1) {
//                 if (this.body.x > tutorial_canvas.width) {
//                     if (this.xmom > 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.body.y > tutorial_canvas.height) {
//                     if (this.ymom > 0) {
//                         this.ymom *= -1
//                     }
//                 }
//                 if (this.body.x < 0) {
//                     if (this.xmom < 0) {
//                         this.xmom *= -1
//                     }
//                 }
//                 if (this.body.y < 0) {
//                     if (this.ymom < 0) {
//                         this.ymom *= -1
//                     }
//                 }
//             }
//             this.body.x += this.xmom
//             this.body.y += this.ymom
//         }
//         draw() {
//             this.nodes = []
//             this.angleIncrement = (Math.PI * 2) / this.sides
//             this.body.radius = this.size - (this.size * .293)
//             for (let t = 0; t < this.sides; t++) {
//                 let node = new GardenCircle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
//                 this.nodes.push(node)
//                 this.angle += this.angleIncrement
//             }
//             tutorial_canvas_context.strokeStyle = this.color
//             tutorial_canvas_context.fillStyle = this.color
//             tutorial_canvas_context.lineWidth = 0
//             tutorial_canvas_context.beginPath()
//             tutorial_canvas_context.moveTo(this.nodes[0].x, this.nodes[0].y)
//             for (let t = 1; t < this.nodes.length; t++) {
//                 tutorial_canvas_context.lineTo(this.nodes[t].x, this.nodes[t].y)
//             }
//             tutorial_canvas_context.lineTo(this.nodes[0].x, this.nodes[0].y)
//             tutorial_canvas_context.fill()
//             tutorial_canvas_context.stroke()
//             tutorial_canvas_context.closePath()
//         }
//     }
//     class GardenShape {
//         constructor(shapes) {
//             this.shapes = shapes
//         }
//         draw() {
//             for (let t = 0; t < this.shapes.length; t++) {
//                 this.shapes[t].draw()
//             }
//         }
//         isPointInside(point) {
//             for (let t = 0; t < this.shapes.length; t++) {
//                 if (this.shapes[t].isPointInside(point)) {
//                     return true
//                 }
//             }
//             return false
//         }
//         doesPerimeterTouch(point) {
//             for (let t = 0; t < this.shapes.length; t++) {
//                 if (this.shapes[t].doesPerimeterTouch(point)) {
//                     return true
//                 }
//             }
//             return false
//         }
//         innerShape(point) {
//             for (let t = 0; t < this.shapes.length; t++) {
//                 if (this.shapes[t].doesPerimeterTouch(point)) {
//                     return this.shapes[t]
//                 }
//             }
//             return false
//         }
//         isInsideOf(box) {
//             for (let t = 0; t < this.shapes.length; t++) {
//                 if (box.isPointInside(this.shapes[t])) {
//                     return true
//                 }
//             }
//             return false
//         }
//         adjustByFromDisplacement(x,y) {
//             for (let t = 0; t < this.shapes.length; t++) {
//                 if(typeof this.shapes[t].fromRatio == "number"){
//                     this.shapes[t].x+=x*this.shapes[t].fromRatio
//                     this.shapes[t].y+=y*this.shapes[t].fromRatio
//                 }
//             }
//         }
//         adjustByToDisplacement(x,y) {
//             for (let t = 0; t < this.shapes.length; t++) {
//                 if(typeof this.shapes[t].toRatio == "number"){
//                     this.shapes[t].x+=x*this.shapes[t].toRatio
//                     this.shapes[t].y+=y*this.shapes[t].toRatio
//                 }
//             }
//         }
//         mixIn(arr){
//             for(let t = 0;t<arr.length;t++){
//                 for(let k = 0;k<arr[t].shapes.length;k++){
//                     this.shapes.push(arr[t].shapes[k])
//                 }
//             }
//         }
//         push(object) {
//             this.shapes.push(object)
//         }
//     }

//     class GardenSpring {
//         constructor(x, y, radius, color, body = 0, length = 1, gravity = 0, width = 1) {
//             if (body == 0) {
//                 this.body = new GardenCircle(x, y, radius, color)
//                 this.anchor = new GardenCircle(x, y, radius, color)
//                 this.beam = new GardenLine(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
//                 this.length = length
//             } else {
//                 this.body = body
//                 this.anchor = new GardenCircle(x, y, radius, color)
//                 this.beam = new GardenLine(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
//                 this.length = length
//             }
//             this.gravity = gravity
//             this.width = width
//         }
//         balance() {
//             this.beam = new GardenLine(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
//             if (this.beam.hypotenuse() < this.length) {
//                 this.body.xmom += (this.body.x - this.anchor.x) / this.length
//                 this.body.ymom += (this.body.y - this.anchor.y) / this.length
//                 this.anchor.xmom -= (this.body.x - this.anchor.x) / this.length
//                 this.anchor.ymom -= (this.body.y - this.anchor.y) / this.length
//             } else {
//                 this.body.xmom -= (this.body.x - this.anchor.x) / this.length
//                 this.body.ymom -= (this.body.y - this.anchor.y) / this.length
//                 this.anchor.xmom += (this.body.x - this.anchor.x) / this.length
//                 this.anchor.ymom += (this.body.y - this.anchor.y) / this.length
//             }
//             let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
//             let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
//             this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
//             this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
//             this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
//             this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
//         }
//         draw() {
//             this.beam = new GardenLine(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
//             this.beam.draw()
//             this.body.draw()
//             this.anchor.draw()
//         }
//         move() {
//             this.anchor.ymom += this.gravity
//             this.anchor.move()
//         }

//     }  
//     class GardenSpringOP {
//         constructor(body, anchor, length, width = 3, color = body.color) {
//             this.body = body
//             this.anchor = anchor
//             this.beam = new GardenLineOP(body, anchor, color, width)
//             this.length = length
//         }
//         balance() {
//             if (this.beam.hypotenuse() < this.length) {
//                 this.body.xmom += ((this.body.x - this.anchor.x) / this.length) 
//                 this.body.ymom += ((this.body.y - this.anchor.y) / this.length) 
//                 this.anchor.xmom -= ((this.body.x - this.anchor.x) / this.length) 
//                 this.anchor.ymom -= ((this.body.y - this.anchor.y) / this.length) 
//             } else if (this.beam.hypotenuse() > this.length) {
//                 this.body.xmom -= (this.body.x - this.anchor.x) / (this.length)
//                 this.body.ymom -= (this.body.y - this.anchor.y) / (this.length)
//                 this.anchor.xmom += (this.body.x - this.anchor.x) / (this.length)
//                 this.anchor.ymom += (this.body.y - this.anchor.y) / (this.length)
//             }

//             let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
//             let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
//             this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
//             this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
//             this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
//             this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
//         }
//         draw() {
//             this.beam.draw()
//         }
//         move() {
//             //movement of SpringOP objects should be handled separate from their linkage, to allow for many connections, balance here with this object, move nodes independently
//         }
//     }

//     class GardenColor {
//         constructor(baseColor, red = -1, green = -1, blue = -1, alpha = 1) {
//             this.hue = baseColor
//             if (red != -1 && green != -1 && blue != -1) {
//                 this.r = red
//                 this.g = green
//                 this.b = blue
//                 if (alpha != 1) {
//                     if (alpha < 1) {
//                         this.alpha = alpha
//                     } else {
//                         this.alpha = alpha / 255
//                         if (this.alpha > 1) {
//                             this.alpha = 1
//                         }
//                     }
//                 }
//                 if (this.r > 255) {
//                     this.r = 255
//                 }
//                 if (this.g > 255) {
//                     this.g = 255
//                 }
//                 if (this.b > 255) {
//                     this.b = 255
//                 }
//                 if (this.r < 0) {
//                     this.r = 0
//                 }
//                 if (this.g < 0) {
//                     this.g = 0
//                 }
//                 if (this.b < 0) {
//                     this.b = 0
//                 }
//             } else {
//                 this.r = 0
//                 this.g = 0
//                 this.b = 0
//             }
//         }
//         normalize() {
//             if (this.r > 255) {
//                 this.r = 255
//             }
//             if (this.g > 255) {
//                 this.g = 255
//             }
//             if (this.b > 255) {
//                 this.b = 255
//             }
//             if (this.r < 0) {
//                 this.r = 0
//             }
//             if (this.g < 0) {
//                 this.g = 0
//             }
//             if (this.b < 0) {
//                 this.b = 0
//             }
//         }
//         randomLight() {
//             var letters = '0123456789ABCDEF';
//             var hash = '#';
//             for (var i = 0; i < 6; i++) {
//                 hash += letters[(Math.floor(Math.random() * 12) + 4)];
//             }
//             var color = new GardenColor(hash, 55 + Math.random() * 200, 55 + Math.random() * 200, 55 + Math.random() * 200)
//             return color;
//         }
//         randomDark() {
//             var letters = '0123456789ABCDEF';
//             var hash = '#';
//             for (var i = 0; i < 6; i++) {
//                 hash += letters[(Math.floor(Math.random() * 12))];
//             }
//             var color = new GardenColor(hash, Math.random() * 200, Math.random() * 200, Math.random() * 200)
//             return color;
//         }
//         random() {
//             var letters = '0123456789ABCDEF';
//             var hash = '#';
//             for (var i = 0; i < 6; i++) {
//                 hash += letters[(Math.floor(Math.random() * 16))];
//             }
//             var color = new GardenColor(hash, Math.random() * 255, Math.random() * 255, Math.random() * 255)
//             return color;
//         }
//     }
//     class GardenSoftbody { //buggy, spins in place
//         constructor(x, y, radius, color, size, members = 10, memberLength = 5, force = 10, gravity = 0) {
//             this.springs = []
//             this.pin = new GardenCircle(x, y, radius, color)
//             this.points = []
//             this.flop = 0
//             let angle = 0
//             this.size = size 
//             let line = new GardenLine((Math.cos(angle)*size), (Math.sin(angle)*size), (Math.cos(angle+ ((Math.PI*2)/members))*size), (Math.sin(angle+ ((Math.PI*2)/members))*size) )
//             let distance = line.hypotenuse()
//             for(let t =0;t<members;t++){
//                 let circ = new GardenCircle(x+(Math.cos(angle)*size), y+(Math.sin(angle)*size), radius, color)
//                 circ.reflect = 1
//                 circ.bigbody = new GardenCircle(x+(Math.cos(angle)*size), y+(Math.sin(angle)*size), distance, color)
//                 circ.draw()
//                 circ.touch = []
//                 this.points.push(circ)
//                 angle += ((Math.PI*2)/members)
//             }

//             for(let t =0;t<this.points.length;t++){
//                 for(let k =0;k<this.points.length;k++){
//                     if(t!=k){
//                         if(this.points[k].bigbody.doesPerimeterTouch(this.points[t])){
//                         if(!this.points[k].touch.includes(t) && !this.points[t].touch.includes(k)){
//                                 let spring = new GardenSpringOP(this.points[k], this.points[t], (size*Math.PI)/members, 2, color)
//                                 this.points[k].touch.push(t)
//                                 this.points[t].touch.push(k)
//                                 this.springs.push(spring)
//                                 spring.beam.draw()
//                             }
//                         }
//                     }
//                 }
//             }

//             //console.log(this)

//             // this.spring = new GardenSpring(x, y, radius, color, this.pin, memberLength, gravity)
//             // this.springs.push(this.spring)
//             // for (let k = 0; k < members; k++) {
//             //     this.spring = new GardenSpring(x, y, radius, color, this.spring.anchor, memberLength, gravity)
//             //     if (k < members - 1) {
//             //         this.springs.push(this.spring)
//             //     } else {
//             //         this.spring.anchor = this.pin
//             //         this.springs.push(this.spring)
//             //     }
//             // }
//             this.forceConstant = force
//             this.centroid = new GardenCircle(0, 0, 10, "red")
//         }
//         circularize() {
//             this.xpoint = 0
//             this.ypoint = 0
//             for (let s = 0; s < this.springs.length; s++) {
//                 this.xpoint += (this.springs[s].anchor.x / this.springs.length)
//                 this.ypoint += (this.springs[s].anchor.y / this.springs.length)
//             }
//             this.centroid.x = this.xpoint
//             this.centroid.y = this.ypoint
//             this.angle = 0
//             this.angleIncrement = (Math.PI * 2) / this.springs.length
//             for (let t = 0; t < this.points.length; t++) {
//                 this.points[t].x = this.centroid.x + (Math.cos(this.angle) * this.forceConstant)
//                 this.points[t].y = this.centroid.y + (Math.sin(this.angle) * this.forceConstant)
//                 this.angle += this.angleIncrement 
//             }
//         }
//         balance() {
//             this.xpoint = 0
//             this.ypoint = 0
//             for (let s = 0; s < this.points.length; s++) {
//                 this.xpoint += (this.points[s].x / this.points.length)
//                 this.ypoint += (this.points[s].y / this.points.length)
//             }
//             this.centroid.x = this.xpoint
//             this.centroid.y = this.ypoint
//             // this.centroid.x += TIP_engine.x / this.points.length
//             // this.centroid.y += TIP_engine.y / this.points.length
//             for (let s = 0; s < this.points.length; s++) {
//                 this.link = new GardenLineOP(this.points[s], this.centroid, 0, "transparent")
//                 if (this.link.hypotenuse() != 0) {

//                     if(this.size < this.link.hypotenuse()){
//                         this.points[s].xmom -= (Math.cos(this.link.angle())*(this.link.hypotenuse())) * this.forceConstant*.1
//                         this.points[s].ymom -= (Math.sin(this.link.angle())*(this.link.hypotenuse())) * this.forceConstant*.1
//                     }else{
//                         this.points[s].xmom += (Math.cos(this.link.angle())*(this.link.hypotenuse())) * this.forceConstant*.1
//                         this.points[s].ymom += (Math.sin(this.link.angle())*(this.link.hypotenuse())) * this.forceConstant*.1
//                     }

//                     // this.points[s].xmom += (((this.points[s].x - this.centroid.x) / (this.link.hypotenuse()))) * this.forceConstant
//                     // this.points[s].ymom += (((this.points[s].y - this.centroid.y) / (this.link.hypotenuse()))) * this.forceConstant
//                 }
//             }
//             if(this.flop%2 == 0){
//                 for (let s =  0; s < this.springs.length; s++) {
//                     this.springs[s].balance()
//                 }
//             }else{
//                 for (let s = this.springs.length-1;s>=0; s--) {
//                     this.springs[s].balance()
//                 }
//             }
//             for (let s = 0; s < this.points.length; s++) {
//                 this.points[s].move()
//                 this.points[s].draw()
//             }
//             for (let s =  0; s < this.springs.length; s++) {
//                 this.springs[s].draw()
//             }
//             this.centroid.draw()
//         }
//     }
//     class GardenObserver {
//         constructor(x, y, radius, color, range = 100, rays = 10, angle = (Math.PI * .125)) {
//             this.body = new GardenCircle(x, y, radius, color)
//             this.color = color
//             this.ray = []
//             this.rayrange = range
//             this.globalangle = Math.PI
//             this.gapangle = angle
//             this.currentangle = 0
//             this.obstacles = []
//             this.raymake = rays
//         }
//         beam() {
//             this.currentangle = this.gapangle / 2
//             for (let k = 0; k < this.raymake; k++) {
//                 this.currentangle += (this.gapangle / Math.ceil(this.raymake / 2))
//                 let ray = new GardenCircle(this.body.x, this.body.y, 1, "white", (((Math.cos(this.globalangle + this.currentangle)))), (((Math.sin(this.globalangle + this.currentangle)))))
//                 ray.collided = 0
//                 ray.lifespan = this.rayrange - 1
//                 this.ray.push(ray)
//             }
//             for (let f = 0; f < this.rayrange; f++) {
//                 for (let t = 0; t < this.ray.length; t++) {
//                     if (this.ray[t].collided < 1) {
//                         this.ray[t].move()
//                         for (let q = 0; q < this.obstacles.length; q++) {
//                             if (this.obstacles[q].isPointInside(this.ray[t])) {
//                                 this.ray[t].collided = 1
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         draw() {
//             this.beam()
//             this.body.draw()
//             tutorial_canvas_context.lineWidth = 1
//             tutorial_canvas_context.fillStyle = this.color
//             tutorial_canvas_context.strokeStyle = this.color
//             tutorial_canvas_context.beginPath()
//             tutorial_canvas_context.moveTo(this.body.x, this.body.y)
//             for (let y = 0; y < this.ray.length; y++) {
//                 tutorial_canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
//                 tutorial_canvas_context.lineTo(this.body.x, this.body.y)
//             }
//             tutorial_canvas_context.stroke()
//             tutorial_canvas_context.fill()
//             this.ray = []
//         }
//     }
//     function setUp(tutorial_canvas_pass, style = "#AAFFAA") {
//         // tutorial_canvas = tutorial_canvas_pass
//         // tutorial_canvas_context = tutorial_canvas.getContext('2d');
//         tutorial_canvas.style.background = style
//         tutorial_canvas_context.imageSmoothingEnabled = false;
//         // window.setInterval(function () {
//         //     // main()
//         // }, 11)
//         document.addEventListener('keydown', (event) => {
//             keysPressed[event.key] = true;
//         });
//         document.addEventListener('keyup', (event) => {
//             delete keysPressed[event.key];
//         });
//         window.addEventListener('pointerdown', e => {
//             FLEX_engine = tutorial_canvas.getBoundingClientRect();
//             XS_engine = e.clientX - FLEX_engine.left;
//             YS_engine = e.clientY - FLEX_engine.top;
//             TIP_engine.x = XS_engine
//             TIP_engine.y = YS_engine
//             TIP_engine.body = TIP_engine
//             interact()
//             // //console.log(pomaos[index])
//             // example usage: if(object.isPointInside(TIP_engine)){ take action }
//         window.addEventListener('pointermove', continued_stimuli);
//         });

//         window.addEventListener('pointerup', e => {
//             window.removeEventListener("pointermove", continued_stimuli);
//         })
//         function continued_stimuli(e) {
//             FLEX_engine = tutorial_canvas.getBoundingClientRect();
//             XS_engine = e.clientX - FLEX_engine.left;
//             YS_engine = e.clientY - FLEX_engine.top;
//             TIP_engine.x = XS_engine
//             TIP_engine.y = YS_engine
//             TIP_engine.body = TIP_engine

//             if(keysPressed['f'] && fruitlist.length > 0){
//                 gfruits.push(new GardenFruit(TIP_engine.x, TIP_engine.y, fruitlist[0].type, fruitlist[0].type2))
//                     fruitlist.splice(0,1)
//             }
//         }
//     }
//     function gamepad_control(object, speed = 1) { // basic control for objects using the controler
// //         //console.log(gamepadAPI.axesStatus[1]*gamepadAPI.axesStatus[0]) //debugging
//         if (typeof object.body != 'undefined') {
//             if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
//                 if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
//                 object.body.x += (gamepadAPI.axesStatus[0] * speed)
//                 object.body.y += (gamepadAPI.axesStatus[1] * speed)
//                 }
//             }
//         } else if (typeof object != 'undefined') {
//             if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
//                 if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
//                 object.x += (gamepadAPI.axesStatus[0] * speed)
//                 object.y += (gamepadAPI.axesStatus[1] * speed)
//                 }
//             }
//         }
//     }
//     function control(object, speed = 1) { // basic control for objects
//         if (typeof object.body != 'undefined') {
//             if (keysPressed['w']) {
//                 object.body.y -= speed
//             }
//             if (keysPressed['d']) {
//                 object.body.x += speed
//             }
//             if (keysPressed['s']) {
//                 object.body.y += speed
//             }
//             if (keysPressed['a']) {
//                 object.body.x -= speed
//             }
//         } else if (typeof object != 'undefined') {
//             if (keysPressed['w']) {
//                 object.y -= speed
//             }
//             if (keysPressed['d']) {
//                 object.x += speed
//             }
//             if (keysPressed['s']) {
//                 object.y += speed
//             }
//             if (keysPressed['a']) {
//                 object.x -= speed
//             }
//         }
//     }
//     function getRandomLightColor() { // random color that will be visible on  black background
//         var letters = '0123456789ABCDEF';
//         var color = '#';
//         for (var i = 0; i < 6; i++) {
//             color += letters[(Math.floor(Math.random() * 12) + 4)];
//         }
//         return color;
//     }
//     function getRandomColor() { // random color
//         var letters = '0123456789ABCDEF';
//         var color = '#';
//         for (var i = 0; i < 6; i++) {
//             color += letters[(Math.floor(Math.random() * 16) + 0)];
//         }
//         return color;
//     }
//     function getRandomDarkColor() {// color that will be visible on a black background
//         var letters = '0123456789ABCDEF';
//         var color = '#';
//         for (var i = 0; i < 6; i++) {
//             color += letters[(Math.floor(Math.random() * 12))];
//         }
//         return color;
//     }
//     function castBetween(from, to, granularity = 10, radius = 1) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
//             let limit = granularity
//             let shape_array = []
//             for (let t = 0; t < limit; t++) {
//                 let circ = new GardenCircle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "red")
//                 circ.toRatio = t/limit
//                 circ.fromRatio = (limit-t)/limit
//                 shape_array.push(circ)
//             }
//             return (new GardenShape(shape_array))
//     }

//     let setup_tutorial_canvas = document.getElementById('tutorial') //getting tutorial_canvas from document

//     setUp(setup_tutorial_canvas) // setting up tutorial_canvas refrences, starting timer. 

//     // object instantiation and creation happens here 



//     let fruitsprites = new Image()
//     fruitsprites.src = 'fruitsprites11.png'


//     let fruitlist = []
//     // for(let t = 0;t<89;t++){
//     //     let ypers = {}
//     //     ypers.type = t%10
//     //     ypers.type2 = Math.floor(t/10)
//     //     fruitlist.push(ypers)
//     // }

    

//     // let type = 0
//     // let type2 = 0

//     class GardenFruit{
//         constructor(x,y, type, type2){
//             this.body = new GardenCircle(x,y, 15, "transparent", 0, 0, .97, 1)
//             this.type = type
//             this.type2 = type2
//             // // type++
//             // // if(type == 10){
//             //     if(type2 == 9){
//             //         type = 0
//             //         type2 = 0
//             //     }
//             //     type2++
//             //     type = 0 
//             // }
//         }
//         draw(){
//             if(this.body.y > 800){
//                 this.body.y = 0
//                 this.body.xmom = (Math.random()-.5)*5
//                 this.body.ymom = 0
//                 this.body.x = Math.random()*800
//             }
//             // this.body.ymom+=.3
//             if(this.anchored != 1){
//                 this.body.frictiveMove()
//             }else{
//                 this.body.x = this.anchor.x
//                 this.body.y = this.anchor.y
//             }
//             let sheetwidth = fruitsprites.width
//             let sheetheight = fruitsprites.height
//             let cols = 10
//             let rows = 10
//             let width = sheetwidth/cols
//             let height = sheetheight/rows
//             let  srcx = Math.floor(this.type)*width
//             let   srcy = Math.floor(this.type2)*height
//             tutorial_canvas_context.drawImage(fruitsprites, srcx, srcy, width, height, this.body.x-this.body.radius, this.body.y-this.body.radius, this.body.radius*2, this.body.radius*2)

//             for(let t = 0;t<pomaos.length;t++){
//                 if(pomaos[t].tongue.doesPerimeterTouch(this.body)){
//                     this.anchored = 1
//                     this.anchor = pomaos[t].tongue
//                 }
//                 if(pomaos[t].centrix.doesPerimeterTouch(this.body)){
//                     if(this.body.radius != .1){
//                         let k = (this.type*this.type2)%6
//                         pomaos[t].exps[k] += Math.floor(Math.random()*50)
//                         if(pomaos[t].exps[k]  >= 100){
//                             pomaos[t].exps[k] -=100
//                             pomaos[t].stats[k] +=1
//                         }
//                     }
//                     this.body.radius = .1
//                 }
//             }
//         }
//     }

//     let UI = {}
//     function empty(){}
//     UI.draw = empty
//     let selected = {}

//     class GardenMenu{
//         constructor(){
//             this.poney = 0
//             this.toggle = new GardenRectangle(1240, 700, 40,20, "gray")
//             this.display = 0
//             this.body = new GardenRectangle(360, 100, 640,520, "#88888888")
//             this.racebutton = new GardenRectangle(this.body.x+20, this.body.y + 4, 600,48, "#FFFF0088")
//             this.fightbutton = new GardenRectangle(this.body.x+20, this.body.y + 56, 600,48, "#FF000088")
//             this.dancebutton = new GardenRectangle(this.body.x+20, this.body.y + 108, 600,48, "#00FFFF88")
//             this.schoolbutton = new GardenRectangle(this.body.x+20, this.body.y + 160, 600,48, "#FFFFFF88")
//             this.doctorbutton = new GardenRectangle(this.body.x+20, this.body.y + 212, 600,48, "#FF00FF88")
//             this.marketbutton = new GardenRectangle(this.body.x+20, this.body.y + 264, 600,48, "#0000FF88")
//             this.closebutton = new GardenRectangle(this.body.x+20, this.body.y + 468, 600,48, "#88888888")
//             this.timer = 10
//         }
//         draw(){
//             this.poney+=(pomaos.length/1000)
//             tutorial_canvas_context.fillStyle = "black"
//             tutorial_canvas_context.font = "10px arial"
//             tutorial_canvas_context.fillText("Poney: " + Math.floor(this.poney), 1180, 20)

//             this.timer--
//             this.toggle.draw()
//             tutorial_canvas_context.fillStyle = "black"
//             tutorial_canvas_context.font = "10px arial"
//             tutorial_canvas_context.fillText("Menu", this.toggle.x+4, this.toggle.y+13)
//             if(this.display == 1){
//                 this.body.draw()
//                 this.racebutton.draw()
//                 tutorial_canvas_context.fillStyle = "black"
//                 tutorial_canvas_context.font = "30px arial"
//                 tutorial_canvas_context.fillText("Race", this.racebutton.x+270, this.racebutton.y+33)
//                 this.fightbutton.draw()
//                 tutorial_canvas_context.fillStyle = "black"
//                 tutorial_canvas_context.font = "30px arial"
//                 tutorial_canvas_context.fillText("Fight", this.fightbutton.x+268, this.fightbutton.y+33)
//                 this.dancebutton.draw()
//                 tutorial_canvas_context.fillStyle = "black"
//                 tutorial_canvas_context.font = "30px arial"
//                 tutorial_canvas_context.fillText("Dance", this.dancebutton.x+265, this.dancebutton.y+33)
//                 this.schoolbutton.draw()
//                 tutorial_canvas_context.fillStyle = "black"
//                 tutorial_canvas_context.font = "30px arial"
//                 tutorial_canvas_context.fillText("School", this.schoolbutton.x+260, this.schoolbutton.y+33)
//                 this.doctorbutton.draw()
//                 tutorial_canvas_context.fillStyle = "black"
//                 tutorial_canvas_context.font = "30px arial"
//                 tutorial_canvas_context.fillText("Doctor", this.doctorbutton.x+260, this.doctorbutton.y+33)
//                 this.marketbutton.draw()
//                 tutorial_canvas_context.fillStyle = "black"
//                 tutorial_canvas_context.font = "30px arial"
//                 tutorial_canvas_context.fillText("Market", this.marketbutton.x+260, this.marketbutton.y+33)
//                 this.closebutton.draw()
//                 tutorial_canvas_context.fillStyle = "black"
//                 tutorial_canvas_context.font = "30px arial"
//                 tutorial_canvas_context.fillText("Close", this.closebutton.x+260, this.closebutton.y+33)
//             }
//         }
//             goToRace(){
//                 global.racing = 1
//                 global.startup = 100
//                 global.race = -1
//                 global.raceplaced = 0
//                 global.challengers = []
//                 for(let t = 0;t<5;t++){
//                     global.challengers.push(new GardenPomaoranian(100, 200+(t*100)))
//                     global.challengers[t].stats[3] = (Math.random()*50)
//                 }
//             }
//             goToFight(){

//                 UI.pomao.tongue.x = 350
//                 UI.pomao.tongue.y = 350
//                 global.fighting = 1
//                 global.startup = 100
//                 global.fight = -1
//                 global.opponentsbeat = 0
//                 global.challengers = []
//                 UI.pomao.turn = true
//                 for(let t = 0;t<6;t++){
//                     if(t<1 ||t>4){
//                         global.challengers.push(new GardenFighter(1000, 50+(t*110)))
//                     }else if(t == 3 || t== 2){
//                         global.challengers.push(new GardenFighter(800, 50+(t*110)))
//                     }else{
//                         global.challengers.push(new GardenFighter(900, 50+(t*110)))
//                     }
//                 }
//             }
//             goToDance(){

//             }
//             goToSchool(){

//             }
//             goToDoctor(){

//             }
//             goToMarket(){

//             }
//     }
//     let gardenmenu = new GardenMenu()
//     let raceUI = new GardenMenu()


//     class GardenStatUI{
//         constructor(pomao){

//             this.pomao = pomao
//             this.stats = pomao.stats
//             this.exps = pomao.exps
//         }
//         draw(){
//             this.pomao.selected = 1


//             this.body = new GardenRectangle(this.pomao.body.x+32, this.pomao.body.y-52, 92, 172, "#00AAAA66")
//             this.body.draw()

//             tutorial_canvas_context.font = "18px Arial";
//             tutorial_canvas_context.fillStyle = 'yellow'
//             tutorial_canvas_context.strokeStyle = 'black'
//             tutorial_canvas_context.lineWidth = 2

//             tutorial_canvas_context.strokeText(this.pomao.name, this.body.x +5, this.body.y+16)
//             tutorial_canvas_context.fillText(this.pomao.name, this.body.x +5, this.body.y+16)

//             tutorial_canvas_context.font = "12px Arial";
//             for(let t = 0;t<this.stats.length;t++){
                
//                 if(t == 0){
//                     tutorial_canvas_context.strokeText("Stamina: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                     tutorial_canvas_context.fillText("Stamina: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                 }else if(t == 1){
//                     tutorial_canvas_context.strokeText("Power: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                     tutorial_canvas_context.fillText("Power: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                 }else if(t == 2){
//                     tutorial_canvas_context.strokeText("Resilience: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                     tutorial_canvas_context.fillText("Resilience: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                 }else if(t == 3){
//                     tutorial_canvas_context.strokeText("Speed: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                     tutorial_canvas_context.fillText("Speed: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                 }else if(t == 4){
//                     tutorial_canvas_context.strokeText("Recovery: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                     tutorial_canvas_context.fillText("Recovery: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                 }else if(t == 5){
//                     tutorial_canvas_context.strokeText("Finesse: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                     tutorial_canvas_context.fillText("Finesse: " + this.stats[t], this.body.x +5, this.body.y+35+ (t*24))
//                 }
//             }
//             for(let t = 0;t<this.exps.length;t++){
//                 let rect = new GardenRectangle(this.body.x + 5, this.body.y+(t*24)+39, 72, 5, "blue")
//                 let rect2 = new GardenRectangle(this.body.x + 5, this.body.y+(t*24)+39, (this.exps[t]/100)*72, 5, "yellow")
//                 rect.draw()
//                 rect2.draw()
//             }
//         }
//     }



//     let typez = 0
//     class GardenPomaoranian{
//         constructor(x, y) {
//             this.target = {}
//             this.target.agent = {}
//             this.target.agent.body = {} 
//             this.target.agent.body.y = 1200
//             this.target.agent.body.x = 1200
//             this.turn = true
//             this.name =  this.nameGenerator()
//             this.width = 35 + (Math.random() * 5)
//             this.height = this.width
//             this.body = new GardenCircle(x,y, 16, "transparent", 0, 0, 1, 1)
//             this.body.x = x
//             this.body.y = y //- (this.height - 1)
//             this.body.radius = 32 //- (this.height - 1)
//             this.dir = 0
//             this.rate = Math.random() + 1
//             this.type = Math.floor(Math.random()*300)
//             this.tonguecolor = getRandomColor()
//             this.centrix = new GardenCircle(this.body.x, this.body.y+5, 3, this.tonguecolor)
//             this.tongue = new GardenCircle(this.body.x, this.body.y+5, 5, this.tonguecolor, 0,0,.5)
//             this.link = new GardenLineOP(this.centrix, this.tongue, this.tonguecolor, 3)
//             this.xdir = 0
//             this.ydir = 0
//             this.type = typez//Math.floor(Math.random()*16) //typez//
//             typez++
//             this.type += (1/64)
//             this.rarity = Math.floor(Math.random()*4)
//             this.stats = [1,1,1,1,1,1]
//             this.exps = [0,0,0,0,0,0]
//             this.count = 0
//             this.rate = 4
//             this.mrate = 2
//             this.victor = 0
//         }
//         nameGenerator(){
//             let name = ''
//             let random = Math.floor(Math.random()*4)+1
//             for(let t = 0;t<random;t++){
//                 let select = Math.floor(Math.random()*23)
//                 if(t == 0){
//                     if(select == 0){
//                         name+='Po'
//                     }else  if(select == 1){
//                         name+='Mo'
//                     }else  if(select == 2){
//                         name+='Bo'
//                     }else  if(select == 3){
//                         name+='Jo'
//                     }else  if(select == 4){
//                         name+='Go'
//                     }else  if(select == 5){
//                         name+='Mao'
//                     }else  if(select == 6){
//                         name+='Mop'
//                     }else  if(select == 7){
//                         name+='Pom'
//                     }else  if(select == 8){
//                         name+='Moo'
//                     }else  if(select == 9){
//                         name+='Pou'
//                     }else  if(select == 10){
//                         name+='Goo'
//                     }else  if(select == 11){
//                         name+='Bao'
//                     }else  if(select == 12){
//                         name+='Mam'
//                     }else  if(select == 13){
//                         name+='Pam'
//                     }else  if(select == 14){
//                         name+='Omp'
//                     }else  if(select == 15){
//                         name+='Op'
//                     }else  if(select == 16){
//                         name+='Boa'
//                     }else  if(select == 17){
//                         name+='Moa'
//                     }else  if(select == 18){
//                         name+='Jao'
//                     }else  if(select == 19){
//                         name+='Oj'
//                     }else  if(select == 20){
//                         name+='P'
//                     }else  if(select == 21){
//                         name+='Ro'
//                     }else  if(select == 22){
//                         name+='Um'
//                     }
//                 }else{
//                     if(select == 0){
//                         name+='oo'
//                     }else  if(select == 1){
//                         name+='omo'
//                     }else  if(select == 2){
//                         name+='obo'
//                     }else  if(select == 3){
//                         name+='po'
//                     }else  if(select == 4){
//                         name+='mo'
//                     }else  if(select == 5){
//                         name+='mao'
//                     }else  if(select == 6){
//                         name+='op'
//                     }else  if(select == 7){
//                         name+='oma'
//                     }else  if(select == 8){
//                         name+='moa'
//                     }else  if(select == 9){
//                         name+='pao'
//                     }else  if(select == 10){
//                         name+='opo'
//                     }else  if(select == 11){
//                         name+='o'
//                     }else  if(select == 12){
//                         name+='p'
//                     }else  if(select == 13){
//                         name+='m'
//                     }else  if(select == 14){
//                         name+='j'
//                     }else  if(select == 15){
//                         name+='go'
//                     }else  if(select == 16){
//                         name+='gao'
//                     }else  if(select == 17){
//                         name+='tao'
//                     }else  if(select == 18){
//                         name+='lao'
//                     }else  if(select == 19){
//                         name+='sao'
//                     }else  if(select == 20){
//                         name+='opop'
//                     }else  if(select == 21){
//                         name+='ogoo'
//                     }else  if(select == 22){
//                         name+='um'
//                     }
//                 }
//             }
//             tutorial_canvas_context.font = "18px Arial";
//             tutorial_canvas_context.fillStyle = 'yellow'
//             tutorial_canvas_context.strokeStyle = 'black'
//             while(tutorial_canvas_context.measureText(name).width > 80){
//                 name = name.split('')
//                 name.splice(name.length-1,1)
//                 name = name.join('')
//             }
//             return name
//         }
//         draw(){
//             this.health = (this.stats[0]*3)+1
//             this.maxhealth = this.health
//             this.victor = 0
//             this.count++
//             this.centrix.x = this.body.x
//             this.centrix.y = this.body.y+5
//             if(this.count%this.rate == 0){
//                 this.tongue.xmom += (this.centrix.x-this.tongue.x)/10
//                 this.tongue.frictiveMove()
//             }
//             // this.move()
//             this.tongue.draw()
//             this.link.draw()
//             if(this.count%this.mrate == 0){
//             this.move()
//             }
//             if(this.xdir == 1){
//                 if(this.ydir == 1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else if(this.ydir == -1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+7*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else{
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+0,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }
//             }else if(this.xdir == -1){
//                 if(this.ydir == 1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+3*64,0+(this.type*64), 64,64, this.body.x-32, this.body.y-32, 64,64)
//                 }else if(this.ydir == -1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+5*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else{
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+4*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }
//             }else{
//                 if(this.ydir == 1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+128,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else if(this.ydir == -1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+6*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else{
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+0,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }
//             }
//         }
//         fight(){

//             if(keysPressed['g']){
//                 if(this.turn == true){
//                     this.lick(this.target.agent.body)
//                     this.turn = false
                    
//                     setTimeout(() => {this.target.agent.health -= this.target.agent.maxhealth*.2}, 100);
//                     this.attacktimeout = 0
//                 }
//             }
//             this.attacktimeout++
//             if(this.attacktimeout>30){
//                 this.turn = true
//             }

    
//             this.healthbar = new GardenRectangleStroke(this.body.x-32, this.body.y+39, this.body.radius*2*(this.health/this.maxhealth), 10, `rgb( ${255-(this.health*25)*3},${this.health*25*3}, 0)`)
//             this.healthbar.draw()
//             this.victor = 0
//             //console.log(this)
//             this.count++
//             this.centrix.x = this.body.x
//             this.centrix.y = this.body.y+5
//             if(this.count%this.rate == 0){
//                 this.tongue.xmom += (this.centrix.x-this.tongue.x)/10
//                 this.tongue.frictiveMove()
//             }
//             // this.move()
//             this.tongue.draw()
//             this.link.draw()
//             // if(this.count%this.mrate == 0){
//             // this.move()
//             // }
//             if(this.xdir == 1){
//                 if(this.ydir == 1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else if(this.ydir == -1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+7*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else{
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+0,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }
//             }else if(this.xdir == -1){
//                 if(this.ydir == 1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+3*64,0+(this.type*64), 64,64, this.body.x-32, this.body.y-32, 64,64)
//                 }else if(this.ydir == -1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+5*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else{
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+4*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }
//             }else{
//                 if(this.ydir == 1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+128,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else if(this.ydir == -1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+6*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else{
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+0,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }
//             }
//         }

//         race(){
//             this.xdir = 0
//             this.ydir = 0
//             this.count++
//             if(this.count%this.mrate == 0){
//                 if(global.startup <= 0){
//                     if(this.body.x > 1200){

//                      if(this.victor == 0){
//                         this.victor = global.raceplaced+1
//                         global.raceplaced+=1
//                         if(global.raceplaced == global.challengers.length+1){
//                             global.startup = 200
//                         }
//                      }
//                     }else{
//                         this.body.x +=(this.stats[3]/100)+.5
//                     }
//                 }
//             }
//             this.tongue.x = this.body.x
//             this.tongue.y = this.body.y
//             if(this.xdir == 1){
//                 if(this.ydir == 1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else if(this.ydir == -1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+7*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else{
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+0,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }
//             }else if(this.xdir == -1){
//                 if(this.ydir == 1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+3*64,0+(this.type*64), 64,64, this.body.x-32, this.body.y-32, 64,64)
//                 }else if(this.ydir == -1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+5*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else{
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+4*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }
//             }else{
//                 if(this.ydir == 1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+128,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else if(this.ydir == -1){
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+6*64,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }else{
//                     tutorial_canvas_context.drawImage(spinsheet, (this.rarity*512)+0,0+(this.type*64), 64, 64, this.body.x-32, this.body.y-32, 64,64)
//                 }
//             }

//             if(this.victor != 0){
//                 tutorial_canvas_context.drawImage(placessheet, (this.victor*32)-32,0, 31, 31, this.body.x+32, this.body.y-32, 32,32)
//             }
//         }

//         repel(){
//             for(let t = 0;t<pomaos.length;t++){
//                 if(this != pomaos[t]){
//                     if(this.body.doesPerimeterTouch(pomaos[t].body)){
//                         let link = new GardenLineOP(this.body, pomaos[t].body)
//                         this.centrix.x += ((link.hypotenuse())/2)*(Math.cos(link.angle()))/20
//                         this.centrix.y += ((link.hypotenuse())/2)*(Math.sin(link.angle()))/20
//                         this.tongue.x += ((link.hypotenuse())/2)*(Math.cos(link.angle()))/20
//                         this.tongue.y += ((link.hypotenuse())/2)*(Math.sin(link.angle()))/20
//                         this.body.x += ((link.hypotenuse())/2)*(Math.cos(link.angle()))/20
//                         this.body.y += ((link.hypotenuse())/2)*(Math.sin(link.angle()))/20
//                     }
//                 }
//             }
//         }
        
//         move(){
//             this.repel()
//             if((this.body.x-this.tongue.x) > 10){
//                 this.xdir = -1
//                 this.ydir = 0
//             }
//             if((this.body.x-this.tongue.x) < -10){
//                 this.xdir = 1
//                 this.ydir = 0
//             }

//                 if(Math.random()<.005){
//                     if(Math.random()<.1){
//                     this.xdir = 0
//                 }
//                 this.ydir = 1
//             }
//             if(Math.random()<.005){
//                 if(Math.random()<.1){
//                     this.xdir = 0
//                 }
//                 this.ydir = -1
//             }
//             if(Math.random()<.005){
//                 if(Math.random()<.1){
//                     this.ydir = 0
//                 }
//                 this.xdir = -1
//             }
//             if(Math.random()<.005){
//                 if(Math.random()<.1){
//                     this.ydir = 0
//                 }
//                 this.xdir = 1
//             }
//             if(Math.random()<.9){
//                 this.moving = 1
//             }else{
//                 this.moving = 0
//             }



//             if(this.moving == 1){
//                 this.body.x += this.xdir/3
//                 this.body.y += this.ydir/3
//                 this.tongue.x += this.xdir/3
//                 this.tongue.y += this.ydir/3
//                 if(this.body.x < 0+32){
//                     this.xdir = 1
//                 }
//                 if(this.body.x >1280-32){
//                     this.xdir = -1
//                 }
//                 if(this.body.y < 0+32){
//                     this.ydir = 1
//                 }
//                 if(this.body.y > 720-32){
//                     this.ydir = -1
//                 }
//             }

//             if(Math.random()<.001){
//                 let point = new GardenPoint(this.body.x+(Math.random()-.5), this.body.y)
//                 this.lick(point)
//             }
//         }
//         lick(point){

//             if((this.body.x-this.tongue.x) > 10){
//                 return
//             }
//             if((this.body.x-this.tongue.x) < -10){
//                 return
//             }
//          if(point.x < this.body.x){
//             this.tongue.xmom = -39
//             if(global.fighting == 1){
//                 this.tongue.xmom -= 39
//             }
//             this.xdir = -1
//             this.ydir = 0
//          }else{
//             this.tongue.xmom = 39
//             if(global.fighting == 1){
//                 this.tongue.xmom += 39
//             }
//             this.xdir = 1
//             this.ydir = 0
//          }
//         }
//         // draw() {
//         //     this.tongue.frictiveMove()
//         //     this.move()
//         //     this.tongue.draw()
//         //     this.link.draw()
//         //     tutorial_canvas_context.drawImage(cityfolk, this.dir * 128, (this.type * 128) + 1, 128, 128, this.x, this.y - (Math.sin(((global.timeloop * this.rate) + 3.14)) * 1.7), this.width, this.height + (Math.sin(((global.timeloop * this.rate) + 3.14)) * 1.7))
//         // }
//     }

//     let pomaos = []

// window.addEventListener('DOMContentLoaded', (event) => {
//     for(let t = 0;t<20;t++){
//         pomaos[t] = new GardenPomaoranian(50+Math.random()*1180, 50+Math.random()*620)
//     }
// })
//     let gfruits = []

//     // for(let t = 0;t<16;t++){
//     //     gfruits[t] = new GardenFruit(50+Math.random()*1180, 50+Math.random()*620)
//     // }
//     class GardenPointer{
//         constructor(){
//             this.grip = 0
//             this.body = new GardenCircle(16,16, 16, "transparent")
//         }
//         draw(){
//             if(gamepadAPI.buttonsCache.includes("A") ||   gamepadAPI.buttonsCache.includes("B")){
//                 let point = new GardenPoint(this.body.x-16, this.body.y-16)
//                 aRelease = false
//                 interact(point)
//             }else{
//                 aRelease = true
//             }

//             if(gamepadAPI.buttonsCache.includes("Y")) {
//                 if(this.grip == 0){
//                     let point = new GardenPoint(this.body.x-16, this.body.y-16)
//                     interact(point)
//                 }
//                 this.grip = 1
//             }else{
//                 this.grip = 0
//             }
//             if(gamepadAPI.buttonsCache.includes("Right-Trigger")){
//             gamepad_control(this.body,5)
//             }
//             gamepad_control(this.body,5)
//             if(this.grip == 0){
//                 tutorial_canvas_context.drawImage(pointerimg, 0,0, 32, 32, this.body.x-16, this.body.y-16, 32,32)
//             }else{
//                 if(typeof UI.pomao != "undefined"){
//                     UI.pomao.body.y = pointer.body.y+30
//                     UI.pomao.body.x = pointer.body.x-9
//                     UI.pomao.centrix.y = pointer.body.y+30
//                     UI.pomao.centrix.x = pointer.body.x-9
//                     UI.pomao.tongue.y = pointer.body.y+30
//                     UI.pomao.tongue.x = pointer.body.x-9
//                 }
//                 tutorial_canvas_context.drawImage(grabberimg, 0,0, 32, 32, this.body.x-16, this.body.y-16, 32,32)

//             }
            
//         }
//     }

//     class GardenFighter{
//         constructor(x,y){
//             this.selected = 0
//             if(Math.random() < .3){
//                 this.agent = new GardenTetrahedron(x,y)
//                 }else if(Math.random() < .5){
//                     this.agent = new GardenIcosahedron(x,y)
//                     }else{
//                 this.agent = new GardenDodecahedron(x,y)
//             }
//         }
//         draw(){
//             this.agent.draw()
//             if(this.selected == 1){
//                 let circ = new GardenCircle(this.agent.body.x, this.agent.body.y - 37, 4, "black")
//                 let circ2 = new GardenCircle(this.agent.body.x, this.agent.body.y - 37, 2, "white")
//                 let circ3 = new GardenCircle(this.agent.body.x, this.agent.body.y - 37, 1, "black")
//                 circ.draw()
//                 circ2.draw()
//                 circ3.draw()
//             }
//         }
//         clean(){
//             if(this.agent.health <= 0){
//                 global.challengers.splice(global.challengers.indexOf(this), 1)
//             }
//         }
//     }
//     class GardenTetrahedron{
//         constructor(x,y){
//             this.body = new GardenCircle(x,y, 16, "transparent")
//             this.tick = 0
//             this.tock = 5
//             this.frame = 0
//             this.health = 100
//             this.maxhealth = this.health
//             this.damage = 10
//         }
//         draw(){
//             this.tick++
//             if(this.tick%this.tock == 0){
//                 this.frame++
//                 this.frame%=12
//             }
//             tutorial_canvas_context.drawImage(tetrahedron, 64*this.frame,0, 64,64, this.body.x-32, this.body.y-32,64,64 )
//             this.healthbar = new GardenRectangleStroke(this.body.x-32, this.body.y+35, this.body.radius*4*(this.health/this.maxhealth), 10, `rgb( ${255-(this.health*2.5)},${this.health*2.5}, 0)`)
//             this.healthbar.draw()
//         }
//     }
//     class GardenIcosahedron{
//         constructor(x,y){
//             this.body = new GardenCircle(x,y, 16, "transparent")
//             this.tick = 0
//             this.tock = 5
//             this.frame = 0
//             this.health = 100
//             this.maxhealth = this.health
//             this.damage = 10
//         }
//         draw(){
//             this.tick++
//             if(this.tick%this.tock == 0){
//                 this.frame++
//                 this.frame%=22
//             }
//             tutorial_canvas_context.drawImage(icosohedron, 128*this.frame,0, 128,128, this.body.x-32, this.body.y-32,64,64 )
//             this.healthbar = new GardenRectangleStroke(this.body.x-32, this.body.y+35, this.body.radius*4*(this.health/this.maxhealth), 10, `rgb( ${255-(this.health*2.5)},${this.health*2.5}, 0)`)
//             this.healthbar.draw()
//         }
//     }

//     class GardenDodecahedron{
//         constructor(x,y){
//             this.body = new GardenCircle(x,y, 16, "transparent")
//             this.tick = 0
//             this.tock = 1
//             this.frame = 0
//             this.health = 100
//             this.maxhealth = this.health
//             this.damage = 10
//         }
//         draw(){
//             this.tick++
//             if(this.tick%this.tock == 0){
//                 this.frame++
//                 this.frame%=116
//             }
//             tutorial_canvas_context.drawImage(dodecahedron, 128*this.frame,0, 128,128, this.body.x-32, this.body.y-32,64,64 )
//             this.healthbar = new GardenRectangleStroke(this.body.x-32, this.body.y+36, this.body.radius*4*(this.health/this.maxhealth), 10, `rgb( ${255-(this.health*2.5)},${this.health*2.5}, 0)`)
//             this.healthbar.draw()
//         }
//     }


    
//     let tet = new GardenFighter()
//     pointer = new GardenPointer()
//     function main() {
//         if(global.racing == 0 && global.fighting == 0){
//         global.timeloop+=.1
//         tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)  // refreshes the image
//         gamepadAPI.update() //checks for button presses/stick movement on the connected controller)
//         // // game code goes here]
//         tet.draw()
//         for(let t = 0;t<gfruits.length;t++){
//             gfruits[t].draw()
//         }
//         for(let t = 0;t<pomaos.length;t++){
//             pomaos[t].draw()
//         }
//         UI.draw()
//         gardenmenu.draw()
//         pointer.draw()
//     }else if(global.racing == 1){
//         tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)  // refreshes the image
//         gamepadAPI.update() //checks for button presses/stick movement on the connected controller)
//         raceUI.draw()
//         if(keysPressed['r']){
//             global.race = 0
//         }
//         for(let t = 0;t<global.challengers.length;t++){
//                 global.challengers[t].race()
//         }
//         for(let t = 0;t<pomaos.length;t++){

//             if(pomaos[t].selected == 1){
//                 if(global.race == -1){
//                     pomaos[t].xdir = 1
//                     pomaos[t].ydir = 0
//                     pomaos[t].body.x = 100
//                     pomaos[t].body.y = 100
//                     pomaos[t].centrix.x = 100
//                     pomaos[t].centrix.y = 100
//                     pomaos[t].tongue.x = 100
//                     pomaos[t].tongue.y = 100
//                 }
//                 pomaos[t].race()
//             }
//         }
//         if(global.race > -1){
//             global.startup--
//         }
//         if(global.raceplaced == global.challengers.length+1){
//             if(global.startup == 0){
//                 global.racing = 0
//                 for(let t = 0;t<pomaos.length;t++){
//                         pomaos[t].selected = 0
//                     }
//             }
//         }
//     }else if(global.fighting == 1){


//         pointer.draw()
//         tutorial_canvas_context.clearRect(0, 0, tutorial_canvas.width, tutorial_canvas.height)  // refreshes the image
//         gamepadAPI.update() //checks for button presses/stick movement on the connected controller)
//         raceUI.draw()
//         if(keysPressed['r']){
//             global.fight = 0
//         }
//         for(let t = 0;t<global.challengers.length;t++){
//                 global.challengers[t].draw()
//         }
//         for(let t = 0;t<global.challengers.length;t++){
//                 global.challengers[t].clean()
//         }
//         let index = 0
//         for(let t = 0;t<pomaos.length;t++){

//             if(pomaos[t].selected == 1){
//                 pomaos[t].xdir = 1
//                 pomaos[t].ydir = 0
//                     pomaos[t].body.x = 350
//                     pomaos[t].body.y = 350
//                     pomaos[t].centrix.x = 350
//                     pomaos[t].centrix.y = 350
//                     // pomaos[t].tongue.x = 350
//                     // pomaos[t].tongue.y = 350
//                     index = t
//                 pomaos[t].fight()
//             }
//         }
//         if(global.fight > -1){
//             global.startup--
//         }
//         if(global.opponentsbeat == global.challengers.length){
//             if(global.startup == 0){
//                 global.fighting = 0
//                 for(let t = 0;t<pomaos.length;t++){
//                         pomaos[t].selected = 0
//                     }
//             }
//         }
//     }

//     }

//     function interact(point = 0){
//         if(global.racing == 0 && global.fighting == 0){
            
//         if(point != 0){
//             TIP_engine = point
//         }
//         let wet = 0

//         if(gardenmenu.toggle.isPointInside(TIP_engine)){
//             wet = 1
//         }
//         if((keysPressed['f'] ||   gamepadAPI.buttonsCache.includes("B") ) && fruitlist.length > 0){
//         gfruits.push(new GardenFruit(TIP_engine.x, TIP_engine.y, fruitlist[0].type, fruitlist[0].type2))
//             fruitlist.splice(0,1)
//         let max = 99999999
//         let index = 0
//             for(let t = 0;t<pomaos.length;t++){
//                 let link = new GardenLineOP(TIP_engine, pomaos[t].body)
//                 if(link.hypotenuse()<max){
//                     max = link.hypotenuse()
//                     index = t
//                 }
//             }

//         pomaos[index].lick(TIP_engine)
//         }else{
//             for(let t = 0;t<pomaos.length;t++){
//                 if(pomaos[t].body.isPointInside(TIP_engine)){
//                     UI = new GardenStatUI(pomaos[t])
//                     wet = 1
//                 }
//             }
//             if(gardenmenu.display == 1){
//                 if(gardenmenu.racebutton.isPointInside(TIP_engine)){
//                     gardenmenu.display = 0
//                     gardenmenu.goToRace()
//                     wet = 0
//                 }
//                 if(gardenmenu.fightbutton.isPointInside(TIP_engine)){
//                     gardenmenu.display = 0
//                     gardenmenu.goToFight()
//                     wet = 0
//                 }
//                 if(gardenmenu.dancebutton.isPointInside(TIP_engine)){
//                     gardenmenu.display = 0
//                     gardenmenu.goToDance()
//                 }
//                 if(gardenmenu.schoolbutton.isPointInside(TIP_engine)){
//                     gardenmenu.display = 0
//                     gardenmenu.goToSchool()
//                 }
//                 if(gardenmenu.doctorbutton.isPointInside(TIP_engine)){
//                     gardenmenu.display = 0
//                     gardenmenu.goToDoctor()
//                 }
//                 if(gardenmenu.marketbutton.isPointInside(TIP_engine)){
//                     gardenmenu.display = 0
//                     gardenmenu.goToMarket()
//                 }
//                 if(gardenmenu.closebutton.isPointInside(TIP_engine)){
//                     gardenmenu.display = 0
//                 }

//                 if(gardenmenu.timer <=0 ){
//                     if(gardenmenu.toggle.isPointInside(TIP_engine)){
//                         gardenmenu.display = 0
//                         gardenmenu.timer = 20
//                     }
//                 }
//             }else{

//                 if(gardenmenu.timer <=0){
//                 if(gardenmenu.toggle.isPointInside(TIP_engine)){
//                     wet = 1
//                     gardenmenu.display = 1
//                     gardenmenu.timer = 20
//                 }
//             }else{
//                 wet = 1
//             }
//             }
//         }
        
//         if(wet == 0){
//             if(typeof UI.pomao != 'undefined'){
//                 if(global.racing == 0 && global.fighting == 0 && aRelease == true ){ //nodraw?
//                     UI.pomao.selected = 0
//                 }
//             }
//             UI = {}
//             UI.draw = empty
//         }
//         }else if(global.fighting == 1){
//             for(let t = 0;t<global.challengers.length;t++){
//                 if(global.challengers[t].agent.body.isPointInside(TIP_engine)){

//                     for(let k = 0;k<global.challengers.length;k++){
//                         global.challengers[k].selected = 0
//                     }
//                     global.challengers[t].selected = 1

//                     for(let k = 0;k<pomaos.length;k++){
//                         if(pomaos[k].selected == 1){
//                         console.log( pomaos[k], global.challengers[t])
//                         pomaos[k].target = global.challengers[t]
//                         }
//                     }
//                     break
//                 }
//             }
//         }

//     }
// // })

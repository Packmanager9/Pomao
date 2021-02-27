
let snowfloor = {}
let lvl9rotationalvariable = 0
let level = 1
const zimgs = []
let pmarinedisp = 0
let jailswitch = 0
let loader = 1
let spinny
const spinnys = []
let beamrocks = []
let links = []
const worms = []
const debris = []
const snows = []
const snowfloors = []
const lavas = []
const floppers = []
const magnets = []
let floormpf = []
// const gamepads

for (let i = 1; i < 44; i++) {
    zimgs.push(Object.assign(new Image(), { 'src': `z - ${i} copy-min.png` }));
}
for (let t = 42; t > 0; t--) {
    zimgs.push(zimgs[t])
}
// //console.log(zimgs)

const rimgs = []
// for (let i = 9; i < 12; i++) {
//     rimgs.push(Object.assign(new Image(), { 'src': `r${i}.png` }));
// }
for (let i = 1; i < 4; i++) {
    rimgs.push(Object.assign(new Image(), { 'src': `targoy${i}.png` }));
}

window.addEventListener('DOMContentLoaded', (event) => {

    // var encoder = new Whammy.Video(60); 
    const gamepadAPI = {
        controller: {},
        turbo: true,

        connect: function (evt) {
            // if(evt.gamepad){

            if (navigator.getGamepads()[0] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else if (navigator.getGamepads()[1] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else if (navigator.getGamepads()[2] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else if (navigator.getGamepads()[3] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            }
            //////console.log('Gamepad connected.');
            //////console.log(navigator.getGamepads()[0]);

            // }

            for (let i = 0; i < gamepads.length; i++) {
                //////console.log("Gamepad " + i + ":");

                if (gamepads[i] === null) {
                    //////console.log("[null]");
                    continue;
                }

                if (!gamepads[i].connected) {
                    //////console.log("[disconnected]");
                    continue;
                }

                //////console.log("    Index: " + gamepads[i].index);
                //////console.log("    ID: " + gamepads[i].id);
                //////console.log("    Axes: " + gamepads[i].axes.length);
                //////console.log("    Buttons: " + gamepads[i].buttons.length);
                //////console.log("    Mapping: " + gamepads[i].mapping);
            }

        },
        disconnect: function (evt) {
            gamepadAPI.turbo = false;
            delete gamepadAPI.controller;
            //////console.log('Gamepad disconnected.');
        },
        update: function () {
            // clear the buttons cache
            gamepadAPI.controller = navigator.getGamepads()[0]
            gamepadAPI.buttonsCache = [];
            // move the buttons status from the previous frame to the cache
            for (var k = 0; k < gamepadAPI.buttonsStatus.length; k++) {
                gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
            }
            // clear the buttons status
            gamepadAPI.buttonsStatus = [];
            // get the gamepad object
            var c = gamepadAPI.controller || {};

            // loop through buttons and push the pressed ones to the array
            var pressed = [];
            if (c.buttons) {
                for (var b = 0, t = c.buttons.length; b < t; b++) {
                    if (c.buttons[b].pressed) {
                        pressed.push(gamepadAPI.buttons[b]);
                        //////console.log(gamepadAPI.buttons[b])
                    }
                }
            }
            // loop through axes and push their values to the array
            var axes = [];
            if (c.axes) {
                for (var a = 0, x = c.axes.length; a < x; a++) {
                    axes.push(c.axes[a].toFixed(2));
                }
            }
            // assign received values
            gamepadAPI.axesStatus = axes;
            gamepadAPI.buttonsStatus = pressed;
            // return buttons for debugging purposes
            // //console.log(pressed)
            return pressed;
        },
        buttonPressed: function (button, hold) {
            var newPress = false;
            // loop through pressed buttons
            for (var i = 0, s = gamepadAPI.buttonsStatus.length; i < s; i++) {
                // if we found the button we're looking for...
                if (gamepadAPI.buttonsStatus[i] == button) {
                    // set the boolean variable to true
                    newPress = true;
                    // if we want to check the single press
                    if (!hold) {
                        // loop through the cached states from the previous frame
                        for (var j = 0, p = gamepadAPI.buttonsCache.length; j < p; j++) {
                            // if the button was already pressed, ignore new press
                            if (gamepadAPI.buttonsCache[j] == button) {
                                newPress = false;
                            }
                        }
                    }
                }
            }
            return newPress;
        },
        buttons: [
            'A', 'DPad-Down', 'DPad-Left', 'DPad-Right',
            'Start', 'Back', 'Axis-Left', 'Axis-Right',
            'LB', 'RB', 'Power', 'DPad-Up', 'B', 'X', 'Y',
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
    let bats = []
    const floors = []
    let ramps = []
    const boys = []
    const deadboys = []
    const fruits = []
    const walls = []
    let chats = []
    let invisblocks = []
    let ungrapplable = []
    let jellys = []
    const roofs = []
    let switches = []
    const shocks = []
    let blocks = []
    let nails = []
    // letpomao.grounded= 0
    // const snowflakeimg3 = new Image()
    // snowflakeimg3.src = "snowflakes3.png"
    const snowflakeimg2 = new Image()
    snowflakeimg2.src = "snowflakes2.png"
    const snowflakeimg = new Image()
    snowflakeimg.src = "snowflakes.png"
    const spikeenemyimg = new Image()
    spikeenemyimg.src = "spikeenemyimg.png"
    const volcbg = new Image()
    volcbg.src = "vbg.png"
    const redcircleimg = new Image()
    redcircleimg.src = "smallredcircle.png"
    const bluecircleimg = new Image()
    bluecircleimg.src = "bluecircle.png"
    const smallyellowcircle = new Image()
    smallyellowcircle.src = "smallyellowcircle.png"

    const hilllump = new Image()
    hilllump.src = "hilllump.png"
    const title = new Image()
    title.src = "tittle.png"
    const crackfloorimg = new Image()
    crackfloorimg.src = "cracksheet.png"
    const pomaodownpaint = new Image()
    pomaodownpaint.src = "pomaodownpaint.png"
    const pomaodownpaintl = new Image()
    pomaodownpaintl.src = "pomaodownpaintl.png"
    const pomaodownpaintb = new Image()
    pomaodownpaintb.src = "pomaodownpaintb.png"
    const pomaodownpaintlb = new Image()
    pomaodownpaintlb.src = "pomaodownpaintlb.png"
    const propimg = new Image()
    propimg.src = "propoganda.png"
    const transfloor = new Image()
    transfloor.src = "hsemitrans.png"
    const hillshadowbad = new Image()
    hillshadowbad.src = "hillshadow.png"
    const hillshadow = new Image()
    hillshadow.src = "hillshadow2.png"
    // const floorimg = new Image()
    // floorimg.src = "floor4.png"
    const floorimg = new Image()
    floorimg.src = "floorD.png"
    const cloudimg = new Image()
    cloudimg.src = "cloudlist.png"
    const batimg = new Image()
    batimg.src = "paintbat.png"
    const blockimg = new Image()
    blockimg.src = "block.png"
    const lvl2floorimg = new Image()
    lvl2floorimg.src = "floor5.png"
    const lvl3floorimg = new Image()
    lvl3floorimg.src = "floor6.png"
    // const lvl4floorimg = new Image()
    // lvl4floorimg.src = "floor7.png"
    const lvl4floorimg = new Image()
    lvl4floorimg.src = "floorpaintlvl4-3.png"
    const lvl4fwallimg = new Image()
    lvl4fwallimg.src = "wallpaintlvl4.png"
    const lvl5floorimg = new Image()
    lvl5floorimg.src = "desertfloor.png"
    const lvl6floorimg = new Image()
    lvl6floorimg.src = "floor9.png"
    // const walling = new Image()
    // walling.src = "wall.png"
    const walling = new Image()
    walling.src = "wallA.png"
    const lvl2walling = new Image()
    lvl2walling.src = "wall5.png"
    const lvl5walling = new Image()
    lvl5walling.src = "wall6.png"
    const nailimg = new Image()
    nailimg.src = "poundnail.png"
    const ballsprite = new Image()
    ballsprite.src = "ballsprite4.png"
    const ballspritelvl4 = new Image()
    ballspritelvl4.src = "ballsprite5.png"
    const eyeimg = new Image()
    eyeimg.src = "eyepaint.png"
    const eyeimgred = new Image()
    eyeimgred.src = "eyepaintred.png"

    const lvl1basemusic = new Audio('lvl1base.mp3');
    const lvl2basemusic = new Audio('lvl2base.mp3');
    const lvl9basemusic = new Audio('beastlyatomslap.mp3');
    const pipelevelbasemusic = new Audio('pipevault.mp3');
    const lvl7bosssong = new Audio('lvl7bosssong.mp3');
    const lvl4basemusic = new Audio('voidx.mp3');
    const level3basemusic = new Audio('lvl3basemusic.mp3');
    const lvl4bossmusic = new Audio('eyelowdiff.mp3');
    const lvl5basemusic = new Audio('lvl5basedrop.mp3');
    const lvl6bossmusic = new Audio('wormsign.mp3');
    const jazz = new Audio('gulpnoise.mp3');
    const jazz2 = new Audio('gulpnoise2.mp3');
    const spidermusic = new Audio('Mopao.mp3');
    const level10basemusic = new Audio('snow.mp3');
    const targoymusic = new Audio('pomo3.mp3');

    const jailswitchimgl = new Image()
    jailswitchimgl.src = 'switchl.png'
    const jailswitchimg = new Image()
    jailswitchimg.src = 'switch.png'

    const rampimg2 = new Image()
    rampimg2.src = 'paintramp2.png'

    const rampimg1 = new Image()
    rampimg1.src = 'paintramp1.png'

    const rampcurveimg1 = new Image()
    rampcurveimg1.src = 'paintrampcurve.png'

    const wormimg = new Image()
    wormimg.src = 'wormimg.png'
    const wormbossimg = new Image()
    wormbossimg.src = 'wormboss.png'

    const fruitsprites = new Image()
    fruitsprites.src = 'fruitsprites11.png'
    const cake = new Image()
    cake.src = 'Fruit 92 - Cake.png'
    const orbspritel = new Image()
    orbspritel.src = 'orbspritel.png'

    const orbsprite = new Image()
    orbsprite.src = 'orbsprite.png'

    // const fractalsheet = new Image()
    // fractalsheet.src = 'fractalsheet - 01.png'



    // const jumpometer = new Image()
    // jumpometer.src = 'jumpometer.png'

    const pomaospit = new Image()
    pomaospit.src = 'newpomaospit.png'

    // const pomaospitg= new Image()
    // pomaospitg.src = 'pomaospitg.png'

    const pomaospitb = new Image()
    pomaospitb.src = 'newspitb.png'

    // const pomaospitbg = new Image()
    // pomaospitbg.src = 'pomaospitbg.png'

    const pomaospitl = new Image()
    pomaospitl.src = 'newpomaospitl.png'
    // const pomaospitlg = new Image()
    // pomaospitlg.src = 'pomaospitlg.png'
    const pomaospitlb = new Image()
    pomaospitlb.src = 'newspitbl.png'
    // const pomaospitlbg = new Image()
    // pomaospitlbg.src = 'pomaospitblg.png'

    const pomaospitf = new Image()
    pomaospitf.src = 'newpomaospitflap.png'

    // const pomaospitfg = new Image()
    // pomaospitfg.src = 'pomaospitfg.png'

    const pomaospitfb = new Image()
    pomaospitfb.src = 'blushflapspitblush.png'

    // const pomaospitfbg = new Image()
    // pomaospitfbg.src = 'pomaospitfbg.png'

    const pomaospitfl = new Image()
    pomaospitfl.src = 'newpomaospitflapl.png'

    // const pomaospitflg = new Image()
    // pomaospitflg.src = 'pomaospitflg.png'


    const pomaospitflb = new Image()
    pomaospitflb.src = 'blushflapspitblushl.png'


    // const pomaospitflbg = new Image()
    // pomaospitflbg.src = 'pomaospitflbg.png'

    const pomaoflb = new Image()
    pomaoflb.src = 'pomaoblushflapleft.png'
    // const pomaoflbg = new Image()
    // pomaoflbg.src = 'pomaoflbg.png'

    const pomaoflbh = new Image()
    pomaoflbh.src = 'newblushsadflapl.png'

    // const pomaoflbhg = new Image()
    // pomaoflbhg.src = 'pomaofbhlg.png'

    const pomaoflh = new Image()
    pomaoflh.src = 'newpomaohfl.png'

    const pomaoflhg = new Image()
    pomaoflhg.src = 'pomaoflhg.png'

    const pomaofbh = new Image()
    pomaofbh.src = 'newblushsadflap.png'

    // const pomaofbhg = new Image()
    // pomaofbhg.src = 'pomaofbhg.png'

    const boysprites = new Image()
    boysprites.src = 'boisters2.png'

    const cactusimg = new Image()
    cactusimg.src = 'cactusdark.png'

    const cactusimgtop = new Image()
    cactusimgtop.src = 'cactustopdark.png'

    const pomomimg = new Image()
    pomomimg.src = 'pomom.png'


    const jomaoimg = new Image()
    jomaoimg.src = 'jomao.png'
    const jomaoimgl = new Image()
    jomaoimgl.src = 'jomaol.png'
    const rebellionbossimg = new Image()
    rebellionbossimg.src = 'eyepatchtwoscarqueen.png'
    const rebellionbossimgleft = new Image()
    rebellionbossimgleft.src = 'eyepatchlessqueen.png'

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


    const paintedbackground = new Image()
    paintedbackground.src = 'bg5.png'
    const paintedbackgroundlvl3 = new Image()
    paintedbackgroundlvl3.src = 'bg7.png'
    const paintedbackgroundlvl4 = new Image()
    paintedbackgroundlvl4.src = 'bg6.png'
    const wallpaperimg = new Image()
    wallpaperimg.src = 'wallpaper.jpg'
    // const dealwithit = new Image()
    // dealwithit.src = 'dealwithit.png'
    const redwallpaperimg = new Image()
    redwallpaperimg.src = 'redwall.png'
    const dessertimg = new Image()
    dessertimg.src = 'desertfloor2.png'

    const pomaoimg = new Image()
    pomaoimg.src = 'rcpomaolpx.png'
    // const pomaoimgx = new Image()
    // pomaoimgx.src = 'pomaoimgx.png'


    const pomaoimgg = new Image()
    pomaoimgg.src = 'pomaog.png'

    const pomaoimggl = new Image()
    pomaoimggl.src = 'pomaogl.png'

    const pomaofh = new Image()
    pomaofh.src = 'newpomaohf.png'

    // const pomaofhg = new Image()
    // pomaofhg.src = 'pomaofhg.png'

    const pomaoimgh = new Image()
    pomaoimgh.src = 'newpomaoh.png'
    // const pomaoimghg = new Image()
    // pomaoimghg.src = 'pomaohg.png'

    const pomaoimglhb = new Image()
    pomaoimglhb.src = 'newbh.png'
    // const pomaoimglhbg = new Image()
    // pomaoimglhbg.src = 'pomaolhbg.png'
    const pomaoimghb = new Image()
    pomaoimghb.src = 'newbhl.png'
    // const pomaoimghbg = new Image()
    // pomaoimghbg.src = 'pomaohbg.png'

    const pomaoimglh = new Image()
    pomaoimglh.src = 'newpomaolh.png'
    const pomaoimglhg = new Image()
    pomaoimglhg.src = 'pomaolhg.png'
    const pomaoimgb = new Image()
    pomaoimgb.src = 'newb.png'
    const pomaoimgbg = new Image()
    pomaoimgbg.src = 'pomaobg.png'

    const seedegg = new Image()
    seedegg.src = 'seedeggpaint3.png'
    const seedeggf = new Image()
    seedeggf.src = 'seedeggpaintfirel.png'
    const seedeggfl = new Image()
    seedeggfl.src = 'seedeggpaintfire.png'
    const pomaoimgl = new Image()
    pomaoimgl.src = 'rcpomaolpl.png'
    const pomaoimglg = new Image()
    pomaoimglg.src = 'pomaolg.png'
    const pomaoimgbl = new Image()
    pomaoimgbl.src = 'newbl.png'
    const pomaoimgblg = new Image()
    pomaoimgblg.src = 'pomaoblg.png'
    // const mangosteen = new Image()
    // mangosteen.src = 'Fruit 03 - Mangosteen.png'

    const pomaoimgup = new Image()
    pomaoimgup.src = 'newpomaoup.png'
    const healthbase = new Image()
    healthbase.src = 'healthbase.png'
    const healthdot = new Image()
    healthdot.src = 'healthdot.png'
    const pomaoimgupg = new Image()
    pomaoimgupg.src = 'pomaoupg.png'
    const pomaoimglup = new Image()
    pomaoimglup.src = 'newpomaoupl.png'
    const pomaoimglupg = new Image()
    pomaoimglupg.src = 'pomaouplg.png'

    const pomaoimgupb = new Image()
    pomaoimgupb.src = 'eatblush.png'
    const pomaoimgupbg = new Image()
    pomaoimgupbg.src = 'pomaoupbg.png'
    const pomaoimglupb = new Image()
    pomaoimglupb.src = 'eatblushl.png'
    const pomaoimglupbg = new Image()
    pomaoimglupbg.src = 'pomaoupblg.png'
    const pomaof = new Image()
    pomaof.src = 'pomaofpaint.png'
    const pomaofg = new Image()
    pomaofg.src = 'pomaofg.png'
    const pomaofl = new Image()
    pomaofl.src = 'pomaofpaintl.png'
    const pomaoflg = new Image()
    pomaoflg.src = 'pomaoflg.png'
    const pomaofb = new Image()
    pomaofb.src = 'pomaoblushflapright.png'
    const pomaofbg = new Image()
    pomaofbg.src = 'pomaofbg.png'
    const ramp90 = new Image()
    ramp90.src = 'paintramp90.png'
    const ramp90l = new Image()
    ramp90l.src = 'paintramp90l.png'

    const jomaoholoimg = new Image()
    jomaoholoimg.src = 'jomaostripholo.png'

    const jomaoholoimgl = new Image()
    jomaoholoimgl.src = 'jomaostripholol.png'

    const keysPressed = {}

    document.addEventListener('keydown', (event) => {
        if (event.key != "ArrowRight") {

            if (event.key != "ArrowUp") {

                if (event.key != "ArrowDown") {

                    if (event.key != "ArrowLeft") {
                        keysPressed[event.key.toLocaleLowerCase()] = true;
                    } else {

                        keysPressed[event.key] = true;
                    }
                } else {

                    keysPressed[event.key] = true;
                }
            } else {

                keysPressed[event.key] = true;
            }
        } else {

            keysPressed[event.key] = true;
        }
    });

    document.addEventListener('keyup', (event) => {

        if (event.key != "ArrowRight") {

            if (event.key != "ArrowUp") {

                if (event.key != "ArrowDown") {

                    if (event.key != "ArrowLeft") {
                        if (event.key != "q") {

                            delete keysPressed[event.key.toLocaleLowerCase()];
                        } else {

                            delete keysPressed[event.key];
                        }
                    } else {

                        delete keysPressed[event.key];
                    }
                } else {

                    delete keysPressed[event.key];
                }
            } else {

                delete keysPressed[event.key];
            }
        } else {

            delete keysPressed[event.key];
        }
    });

    const tutorial_canvas = document.getElementById("tutorial");
    const tutorial_canvas_context = tutorial_canvas.getContext('2d');

    // tutorial_canvas_context.scale(.075,.075)
    // tutorial_canvas_context.scale(.1,.1)
    // tutorial_canvas_context.scale(.25,.25)
    // tutorial_canvas_context.translate(3300,19750) //lvl4
    // tutorial_canvas_context.translate(1280*1.5,720*1.5) //lvl10
    // tutorial_canvas_context.translate(2000,8000) //lvl4
    // tutorial_canvas_context.translate(3300,9000)//lvl6
    // tutorial_canvas_context.translate(640,360)

    tutorial_canvas.style.background = `rgba(170, 170, 255,${1})` //"#664613"


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
        // encoder.compile()


        if (pomao.paused == 10) {


            tutorialholo.box1 = new Rectangle(350, 410, 100, 130, "red")
            tutorialholo.box2 = new Rectangle(570, 410, 100, 130, "blue")

            if (tutorialholo.box1.isPointInside(tip)) {

                tutorialholo.controller = 1
                tutorialholo.picked = 1
                // tutorialholo.chat.words.splice(0, tutorialholo.chat.words.length)

                tutorialholo.chat.active++
                tutorialholo.chat.words.push("Ok, great, use the left stick to move, tap upwards to jump, and hold upwards to hover")
            }
            if (tutorialholo.box2.isPointInside(tip)) {
                tutorialholo.controller = 0
                tutorialholo.picked = 1

                // tutorialholo.chat.words.splice(0, tutorialholo.chat.words.length)

                tutorialholo.chat.active++
                tutorialholo.chat.words.push("Ok, great, use WASD to move, W can jump, hold it to hover")
            }



        } else {

            loadlvl1button = new Rectangle(640 - 500, 360, 50, 50, "brown")
            loadlvl2button = new Rectangle(640 - 400, 360, 50, 50, "red")
            loadlvl3button = new Rectangle(640 - 300, 360, 50, 50, "gray")
            loadlvl4button = new Rectangle(640 - 200, 360, 50, 50, "purple")
            loadlvl5button = new Rectangle(640 - 100, 360, 50, 50, "orange")
            loadlvl6button = new Rectangle(640, 360, 50, 50, "green")
            loadlvl7button = new Rectangle(640 + 100, 360, 50, 50, "yellow")
            loadlvl8button = new Rectangle(640 + 200, 360, 50, 50, "teal")
            loadlvl9button = new Rectangle(640 + 300, 360, 50, 50, "blue")
            loadlvl10button = new Rectangle(640 + 400, 360, 50, 50, "white")

            if (loadlvl1button.isPointInside(tip)) {
                loadlvl1()
            }

            if (loadlvl2button.isPointInside(tip)) {
                loadlvl2()
            }

            if (loadlvl3button.isPointInside(tip)) {
                loadlvl3()
            }

            if (loadlvl4button.isPointInside(tip)) {
                loadlvl4()
            }

            if (loadlvl5button.isPointInside(tip)) {
                loadlvl5()
            }
            if (loadlvl6button.isPointInside(tip)) {
                loadlvl6()
            }
            if (loadlvl7button.isPointInside(tip)) {
                loadlvl7()
            }
            if (loadlvl8button.isPointInside(tip)) {
                loadlvl8()
            }
            if (loadlvl9button.isPointInside(tip)) {
                loadlvl9()
            }
            if (loadlvl10button.isPointInside(tip)) {
                loadlvl10()
            }
        }

        console.log(pomao.checkPomao(tip))

    });

    class Snowfloor {
        constructor(x, y, h, w, disp = 0) {
            this.bodies = []
            this.snowheight = y
            this.height = []
            this.x = x
            this.y = y
            this.hend = y + h
            this.end = x + w
            this.width = w
            this.heightx = h
            let angler = 0
            this.disp = disp
            let accum = 0
            for (let t = 0; t < Math.ceil(w / 5); t++) {
                angler += Math.PI / 3
                let block = new Rectangle(x + (t * 5), y, h + (Math.cos(angler) * 5), 5.1, "white")
                block.accum = 0
                accum+=(this.disp)
                block.ysto = block.y+accum
                block.waggle = block.y+accum
                this.height.push(block.height)
                this.bodies.push(block)
                floors.push(block)
                walls.push(block)
                roofs.push(block)
                if(this.disp != 0){
                // this.disp+=.000002*-t
                if(t%220 == 219){
                    this.disp*=2
                }
                }
            }
        }
        draw() {
            
            let linkfloorer = new LineOP(this.bodies[0], pomao.body)
            if (linkfloorer.hypotenuse() > 735 + pomao.tongue.radius + (Math.max(this.width, this.heightx) * 2) + (Math.abs(pomao.tonguey)) + Math.abs(pomao.tonguex)) {
                return 0
            }
            for (let t = 0; t < this.bodies.length; t++) {
                this.bodies[t].y = this.bodies[t].waggle
                this.bodies[t].height = this.height[t] + Math.abs(this.bodies[t].waggle - this.bodies[t].ysto) //+ (this.disp*t)
                if (t > 0) {
                    let link = new Line(this.bodies[t].x + 1.5, this.bodies[t].waggle, this.bodies[t - 1].x + 1.5, this.bodies[t - 1].waggle, "white", 5)
                    link.draw()
                }
            }
        }
        collideSnowheight(point) {
            if (point.y > this.snowheight && point.x < this.end && point.x > this.x && point.y < this.hend) {
                const t = (Math.round(((point.x) - (this.x)) / 5)) % this.bodies.length
                if (t > 10 && t < this.bodies.length - 11) {
                    if (this.bodies[t].y <= point.y || this.bodies[t + 1].y <= point.y || this.bodies[t - 1].y <= point.y) {
                        let value = 0

                        if (this.bodies[t].y > this.bodies[t].ysto - 90){
                            for (let n = t - 10; n < (t + 10); n++) {
                                value += (Math.PI / 20)
                                let bump = (point.ymom * Math.sin(value)) * 5
                                if (bump < point.ymom * 5.01) {
                                    bump *= 1.01
                                }
                                if(this.disp == 0){
    
                                if (this.bodies[t].y > (this.y) - 90) {
                                    this.bodies[n].waggle -= bump / 8
                                    if (this.bodies[n].waggle < this.snowheight) {
                                        this.snowheight = this.bodies[n].waggle
                                    }
                                }
                                }
                                if (this.bodies[t].y > this.bodies[n].ysto - 90 && this.bodies[n].y > this.bodies[n].ysto - 110) {  //t for n // sum?
                                    this.bodies[n].waggle -= bump / 8
                                    if (this.bodies[n].waggle < this.snowheight) {
                                        this.snowheight = this.bodies[n].waggle
                                    }
                                }
                            }
                        }
                        return true
                    }
                }
            }
            return false
        }
    }


    class Bosscircle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0) {
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
            this.cxmom = 0
            this.cymom = 0
            this.xrepel = 0
            this.yrepel = 0
            this.lens = 0
        }

        repelCheck(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius + point.radius) * (point.radius + this.radius)) {
                return true
            }
            return false
        }
        draw() {


            tutorial_canvas_context.fillStyle = this.color

            tutorial_canvas_context.lineWidth = 0
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)

            tutorial_canvas_context.fill()
            tutorial_canvas_context.stroke();
            tutorial_canvas_context.closePath();
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
            this.ymom *= .98
            this.xmom *= .98
        }
        movenofric() {
            this.x += this.xmom * .1
            this.y += this.ymom * .1
        }
        fmove() {
            this.x += this.xmom
            this.y += this.ymom
        }
        smove() {
            this.x += this.sxmom
            this.y += this.symom
        }
        cmove() {
            this.x += this.cxmom
            this.y += this.cymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        repelCheck(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius + point.radius) * (point.radius + this.radius)) {
                return true
            }
            return false
        }
    }


    class Bossspring {
        constructor(x, y, body = 0, anchor = 0) {
            if (body == 0) {
                this.body = new Bosscircle(x, y, 2, "red")
            } else {
                this.body = body
            }
            if (anchor == 0) {
                this.anchor = new Bosscircle(x + 1, y + 1, 2, "red")
            } else {
                this.anchor = anchor
            }
            this.length = 30

        }
        draw() {


        }
        balance() {

            let xmomavg = (this.body.sxmom + this.anchor.sxmom) * .5
            let ymomavg = (this.body.symom + this.anchor.symom) * .5

            this.body.sxmom = (this.body.sxmom + xmomavg) * .5
            this.body.symom = (this.body.symom + ymomavg) * .5

            this.anchor.sxmom = (this.anchor.sxmom + xmomavg) * .5
            this.anchor.symom = (this.anchor.symom + ymomavg) * .5

            let link = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "white", 4)


            let xvec = this.body.x - this.anchor.x
            let yvec = this.body.y - this.anchor.y

            for (let t = 0; (Math.abs(xvec) + Math.abs(yvec)) > .5; t++) {
                xvec *= .99
                yvec *= .99
                if (t > 1000) {
                    break
                }
            }

            for (let t = 0; (Math.abs(xvec) + Math.abs(yvec)) < .5; t++) {
                xvec *= 1.01
                yvec *= 1.01
                if (t > 1000) {
                    break
                }
            }

            if (link.hypotenuse() < this.length - 5) {
                this.body.sxmom += xvec
                this.body.symom += yvec
                this.anchor.sxmom -= xvec
                this.anchor.symom -= yvec


            } else if (link.hypotenuse() > this.length + 5) {

                this.body.sxmom -= xvec
                this.body.symom -= yvec
                this.anchor.sxmom += xvec
                this.anchor.symom += yvec

            } else {
                this.body.sxmom *= .99
                this.body.symom *= .99
                this.anchor.sxmom *= .99
                this.anchor.symom *= .99
            }

            this.body.smove()
            this.anchor.smove()
        }
        draw() {

            this.balance()
            let link = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "white", 1)

            link.draw()
            this.body.draw()
            this.anchor.draw()
        }
    }

    class Blobboss {
        constructor(x = 0, y = 0) {
            this.beads = []
            this.linksl = []
            this.linksr = []
            this.links = []
            this.centroid = new Bosscircle(350, 350, 5, "green")
            this.size = 10
            let start = new Bosscircle(350, 350, 2, "yellow")
            let end = new Bosscircle(350, 350, 2, "purple")

            let spring = new Bossspring(350, 350, start, end)
            this.links.push(spring)
            this.beads.push(spring.body)
            this.beads.push(spring.anchor)
            let sproing
            let spraing
            for (let t = 0; t < this.size; t++) {
                if (t == 0) {

                    spraing = new Bossspring(351, 358, 0, spring.body)
                    spraing.body.color = "teal"
                    this.linksl.push(spraing)
                    this.links.push(spraing)
                    this.beads.push(spraing.body)
                } else {
                    spraing = new Bossspring(352, 357, 0, spraing.body)
                    spraing.body.color = "gray"
                    this.linksl.push(spraing)
                    this.links.push(spraing)
                    this.beads.push(spraing.body)
                }
            }
            for (let t = 0; t < this.size; t++) {
                if (t == 0) {

                    sproing = new Bossspring(353, 356, spring.anchor, 0)
                    sproing.body.color = "white"
                    this.linksr.push(sproing)
                    this.links.push(sproing)
                    this.beads.push(sproing.anchor)
                } else {
                    sproing = new Bossspring(354, 355, sproing.anchor, 0)
                    sproing.body.color = "orange"
                    this.linksr.push(sproing)
                    this.links.push(sproing)
                    this.beads.push(sproing.anchor)
                }
            }

            let cap = new Bossspring(350, 350, spraing.body, sproing.anchor)
            cap.draw()
            // console.log(cap, this.links)
            this.links.push(cap)
            // console.log(cap, this.links)
            this.linksl = []
            this.linksr = []

            this.dis = 150
            this.angle = 0
            this.increment = (Math.PI * 2) / this.beads.length

            // for(let t = 0; t<this.beads.length; t++){


            //     this.beads[t].x = this.centroid.x + (Math.sin(this.angle)*this.dis)
            //     this.beads[t].y = this.centroid.y + (Math.cos(this.angle)*this.dis)
            //     this.angle += this.increment
            // }

        }
        draw() {

            for (let t = 0; t < this.beads.length; t++) {
                let xvec = (this.beads[t].x - this.centroid.x)
                let yvec = (this.beads[t].y - this.centroid.y)
                for (let t = 0; (Math.abs(xvec) + Math.abs(yvec)) > .3; t++) {
                    xvec *= .98
                    yvec *= .98
                    if (t > 1000) {
                        break
                    }
                }

                for (let t = 0; (Math.abs(xvec) + Math.abs(yvec)) < .3; t++) {
                    xvec *= 1.01
                    yvec *= 1.01
                    if (t > 1000) {
                        break
                    }
                }
                this.beads[t].sxmom += xvec
                this.beads[t].symom += yvec

            }


            for (let t = 0; t < this.beads.length; t++) {
                this.beads[t].cmove()
            }

            // for(let t = 0;t<this.beads.length;t++){
            //     this.beads[t].cxmom *= .9
            //     this.beads[t].cymom *= .9
            // }

            for (let t = 0; t < this.links.length; t++) {
                this.links[t].balance()
            }
            for (let t = 0; t < this.links.length; t++) {
                this.links[t].draw()
            }

            let xposavg = 0
            let yposavg = 0

            for (let t = 0; t < this.beads.length; t++) {
                xposavg += this.beads[t].x
                yposavg += this.beads[t].y
            }
            xposavg /= this.beads.length
            yposavg /= this.beads.length

            this.centroid.x = xposavg
            this.centroid.y = yposavg

            this.centroid.draw()



        }
    }


    class FloatingIsland {
        constructor(x, y, radius = 200, small = 1, scale = 1) {

            this.orb = new Circle(x, y, radius, "green")
            this.orb.orb = 1
            this.block = new Rectangle(x - radius, y, radius, radius * 2, "red")

            if (small < 1) {
                this.orb.radius *= small
            }
            if (scale != 1) {
                this.block.height *= scale
            }
            walls.push(this.block)
            roofs.push(this.block)
            floors.push(this.block)
            if (this.orb.radius > 0) {
                ramps.push(this.orb)
            }

            // const dangler1 = new Dangler(x-this.block.width*.5,y)
            // worms.push(dangler1)
            // const dangler2 = new Dangler(x+this.block.width*.5,y)
            // worms.push(dangler2)
            // const dangler3 = new Dangler(x-this.block.width*.5,y+this.block.height)
            const dangler3 = new Dangler(x, y + this.block.height)
            worms.push(dangler3)
            // const dangler4 = new Dangler(x+this.block.width*.5,y+this.block.height)
            // worms.push(dangler4)

        }

    }

    class Spinwheel {
        constructor(x, y) {
            this.body = new Circle(x, y, 2, "red")
            this.bigbody = new Circle(x, y, 1900, "red")
            this.wings = []
            this.dis = 130
            this.angle = 0
            this.build()
        }
        build() {
            // for(let f = floors.length;f>0;f--){
            //     if(this.wings.includes(floors[f])){
            //       if(squarecirclefeetspin(floors[f], pomao.body)){
            //           pomao.wingthing =this.wings.indexOf(floors[f])
            //           pomao.xdisp = floors[f].x
            //           pomao.ydisp = floors[f].y
            //           f = 0
            //       }
            //       //   floors.splice(f,1)
            //     }
            // }
            this.wings = []

            this.dis = 100
            let increment = Math.PI / 1.5
            let angle = this.angle
            for (let w = 0; w < 99; w++) {

                let wing = new Rectangle(this.body.x + (1 * (Math.cos(angle) * this.dis)), this.body.y + (1 * (Math.sin(angle) * this.dis)), 20, 20, "green")
                wing.thing = w
                //     if(wing.thing == pomao.wingthing){
                //       if(squarecirclefeet(wing, pomao.body)){
                //           pomao.body.x += wing.x - pomao.xdisp
                //           pomao.body.y += wing.y - pomao.ydisp

                //   tutorial_canvas_context.translate(-(wing.x - pomao.xdisp), -(wing.y - pomao.ydisp))
                //  pomao.grounded= 1

                //       }
                //     }
                floors.push(wing)
                this.wings.push(wing)
                angle += increment
                if (w % 3 == 0) {
                    this.dis += 15
                }
            }
        }
        draw() {
            // this.build()
            if (this.bigbody.repelCheck(pomao.body)) {
                this.angle += .01
                this.build()
                this.body.draw()
                //   this.bigbody.draw()
                // for(let w = 0; w<this.wings.length; w++){
                //     this.wings[w].draw()
                // }
            }
        }
    }


    class SeeSaw {
        constructor(x, y) {
            this.body = new Circle(x, y, 2, "red")
            this.bigbody = new Circle(x, y, 1900, "red")
            this.wings = []
            this.dis = 130
            this.angle = Math.PI
            this.see = 0
            this.increment = 0
            this.build()
        }
        build() {
            //I don't think the colission here or inspinwheels is relevant
            this.see = 0

            // console.log(this.wings)
            if (this.wings.length > 0) {
                for (let f = this.wings.length - 1; f > 0; f--) {
                    if (squarecirclefeetspinxdeep(this.wings[f], pomao.body)) {
                        pomao.wingthing = f
                        pomao.xdisp = this.wings[f].x
                        pomao.ydisp = this.wings[f].y - 3.5
                    }
                }
            }
            this.wings = []

            this.dis = 0
            let increment = Math.PI
            let angle = this.angle + Math.PI
            for (let w = 0; w < 101; w++) {

                let wing = new Rectangle(this.body.x + (1 * (Math.cos(angle) * this.dis)), this.body.y + (1 * (Math.sin(angle) * this.dis)), 10, 5, "green")
                wing.thing = w
                if (squarecirclefeetspinx(wing, pomao.body)) {
                    this.see = 1
                    let torque = Math.abs(w / 2)

                    if (pomao.body.ymomstorage > 0) {
                        if (w % 2 == 0) {
                            // if(Math.abs(-((pomao.body.ymomstorage+.1)*torque*Math.cos(this.angle))/150) > this.increment){

                            this.increment = -((pomao.body.ymomstorage + .1) * torque * Math.cos(this.angle)) / 150
                            // }
                        } else {

                            // if(Math.abs(-((pomao.body.ymomstorage+.1)*torque*Math.cos(this.angle))/150) > this.increment){

                            this.increment = ((pomao.body.ymomstorage + .1) * torque * Math.cos(this.angle)) / 150
                            // }
                        }
                    }
                }
                if (wing.thing == pomao.wingthing) {
                    if (squarecirclefeetspinxdeep(wing, pomao.body)) {
                        pomao.body.x += wing.x - pomao.xdisp
                        pomao.body.y += wing.y - pomao.ydisp

                        tutorial_canvas_context.translate(-(wing.x - pomao.xdisp), -(wing.y - pomao.ydisp))
                        pomao.grounded = 1

                    }

                }
                floors.push(wing)

                this.wings.push(wing)
                angle += increment
                if (w % 2 == 0) {
                    this.dis += 5
                }
            }
        }
        draw() {
            // this.build()
            if (this.bigbody.repelCheck(pomao.body)) {
                if (Math.PI > this.angle) {
                    if (this.increment > 0) {
                        this.angle += this.increment * .0025
                    } else {
                        if (Math.abs(Math.PI - this.angle) <= Math.PI / 6) {
                            this.angle += this.increment * .0025
                        }
                    }
                } else {
                    if (this.increment < 0) {
                        this.angle += this.increment * .0025
                    } else {
                        if (Math.abs(Math.PI - this.angle) <= Math.PI / 6) {
                            this.angle += this.increment * .0025
                        }
                    }
                }
                this.increment *= .995
                // if(Math.abs(this.angle) > Math.PI){
                //     this.angle*=.9995

                this.angle -= Math.PI
                this.angle *= .9999
                this.angle += Math.PI

                // }else{
                //     this.angle*1.0005
                // }
                this.build()
                this.body.draw()
                //   this.bigbody.draw()
                // for(let w = 0; w<this.wings.length; w++){
                //     this.wings[w].draw()
                // }
            }
        }
    }
    class BigSeeSaw {
        constructor(x, y, scale) {
            this.body = new Circle(x, y, 2, "red")
            this.bigbody = new Circle(x, y, 1900, "red")
            this.wings = []
            this.dis = 130
            this.angle = Math.PI
            this.see = 0
            this.increment = 0
            this.build()
            this.scale = scale
        }
        build() {
            //I don't think the colission here or inspinwheels is relevant
            this.see = 0

            // console.log(this.wings)
            if (this.wings.length > 0) {
                for (let f = this.wings.length - 1; f > 0; f--) {
                    if (squarecirclefeetspinxdeep(this.wings[f], pomao.body)) {
                        pomao.wingthing = f
                        pomao.xdisp = this.wings[f].x
                        pomao.ydisp = this.wings[f].y //- 3.5
                    }
                }
            }
            this.wings = []

            this.dis = 0
            let increment = Math.PI
            let angle = this.angle + Math.PI
            for (let w = 0; w < 201; w++) {

                let wing = new Rectangle(this.body.x + (1 * (Math.cos(angle) * this.dis)), this.body.y + (1 * (Math.sin(angle) * this.dis)), this.scale * 2, this.scale, "green")
                wing.thing = w


                if ((squarecircleedges(wing, pomao.tongue) || pomao.tonguebox.isInsideOf(wing)) && !pomao.body.repelCheck(pomao.tongue)) {
                    pomao.wingcheck = 1
                }
                if (squarecirclefeetspinx(wing, pomao.body)) {
                    this.see = 1
                    let torque = Math.abs(w / 2)

                    if (pomao.body.ymomstorage > 0) {
                        if (w % 2 == 0) {
                            // if(Math.abs(-((pomao.body.ymomstorage+.1)*torque*Math.cos(this.angle))/150) > this.increment){

                            this.increment = -((pomao.body.ymomstorage + .1) * torque * Math.cos(this.angle)) / 150
                            // }
                        } else {

                            // if(Math.abs(-((pomao.body.ymomstorage+.1)*torque*Math.cos(this.angle))/150) > this.increment){

                            this.increment = ((pomao.body.ymomstorage + .1) * torque * Math.cos(this.angle)) / 150
                            // }
                        }
                    }
                }
                if (wing.thing == pomao.wingthing) {
                    if (squarecirclefeetspinxdeep(wing, pomao.body)) {
                        pomao.body.x += wing.x - pomao.xdisp
                        pomao.body.y += wing.y - pomao.ydisp

                        tutorial_canvas_context.translate(-(wing.x - pomao.xdisp), -(wing.y - pomao.ydisp))
                        pomao.grounded = 1

                    }

                }

                floors.push(wing)

                this.wings.push(wing)
                angle += increment
                if (w % 2 == 0) {
                    this.dis += this.scale
                }
            }
        }
        draw() {
            // this.build()
            if (this.bigbody.repelCheck(pomao.body)) {
                if (Math.PI > this.angle) {
                    if (this.increment > 0) {
                        this.angle += this.increment * .0025
                    } else {
                        if (Math.abs(Math.PI - this.angle) <= Math.PI / 6) {
                            this.angle += this.increment * .0025
                        }
                    }
                } else {
                    if (this.increment < 0) {
                        this.angle += this.increment * .0025
                    } else {
                        if (Math.abs(Math.PI - this.angle) <= Math.PI / 6) {
                            this.angle += this.increment * .0025
                        }
                    }
                }
                this.increment *= .995
                // if(Math.abs(this.angle) > Math.PI){
                //     this.angle*=.9995

                this.angle -= Math.PI
                this.angle *= .9999
                this.angle += Math.PI

                // }else{
                //     this.angle*1.0005
                // }
                this.build()
                this.body.draw()
                //   this.bigbody.draw()
                // for(let w = 0; w<this.wings.length; w++){
                //     this.wings[w].draw()
                // }
            }
        }
    }


    class CircleF {
        constructor(x, y, radius, color, xmom = 0, ymom = 0) {

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
        draw() {

            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.lineWidth = 1
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.beginPath();
            if (this.radius > 0) {
                tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
            }
            tutorial_canvas_context.fill()
            tutorial_canvas_context.stroke();
            tutorial_canvas_context.closePath();
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
            // tutorial_canvas_context.translate(-this.xmom,-this.ymom)
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }

        repelCheck(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius + point.radius) * (point.radius + this.radius)) {
                return true
            }
            return false
        }
    }

    let pegged = 1
    class Spring {
        constructor(body = 0) {
            if (body == 0) {
                this.body = new Circle(350, 350, 5, "red", 10, 10)
                this.anchor = new Circle(this.body.x, this.body.y + 5, 5, "red")
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "green", 5)
                this.length = 1
            } else {
                this.body = body
                this.length = 7
                this.anchor = new Circle(this.body.x, this.body.y + (this.length), 5, "red")
                if (!objsprings.includes(this.anchor)) {
                    objsprings.push(this.anchor)
                }
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "green", 5)
            }
            this.anchor.marked = 0
            this.anchor.xdif = 0
            this.anchor.ydif = 0
            this.worm = {}
            // this.anchor.timer = 9999999999999999

        }
        balance() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "green", 5)
            let xmomentumaverage
            let ymomentumaverage
            if (this.anchor != pin2) {
                xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
                ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            } else {
                xmomentumaverage = ((this.body.xmom) + this.anchor.xmom) / 2
                ymomentumaverage = ((this.body.ymom) + this.anchor.ymom) / 2
            }

            // if(this.body != pin){
            this.body.xmom = ((this.body.xmom) + xmomentumaverage) / 2
            this.body.ymom = ((this.body.ymom) + ymomentumaverage) / 2
            // }

            if (this.anchor != pin2) {
                this.anchor.xmom = ((this.anchor.xmom) + xmomentumaverage) / 2
                this.anchor.ymom = ((this.anchor.ymom) + ymomentumaverage) / 2
            } else {
                this.anchor.xmom = ((this.anchor.xmom) + xmomentumaverage) / 2
                this.anchor.ymom = ((this.anchor.ymom) + ymomentumaverage) / 2
            }
            if (this.beam.hypotenuse() != 0) {
                if (this.beam.hypotenuse() < this.length) {
                    if (this.body != pin) {
                        this.body.xmom += (this.body.x - this.anchor.x) / (this.length) / 30
                        this.body.ymom += (this.body.y - this.anchor.y) / (this.length) / 30
                    }
                    this.anchor.xmom -= (this.body.x - this.anchor.x) / (this.length) / 30
                    this.anchor.ymom -= (this.body.y - this.anchor.y) / (this.length) / 30
                } else if (this.beam.hypotenuse() > this.length) {

                    if (this.body != pin) {
                        this.body.xmom -= (this.body.x - this.anchor.x) / (this.length) / 30
                        this.body.ymom -= (this.body.y - this.anchor.y) / (this.length) / 30
                    }
                    this.anchor.xmom += (this.body.x - this.anchor.x) / (this.length) / 30
                    this.anchor.ymom += (this.body.y - this.anchor.y) / (this.length) / 30
                }

            }
        }
        draw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "green", 5)
            this.beam.draw()
            // this.body.draw()
            if (ramps.includes(this.anchor)) {
                // tutorial_canvas_context.drawImage(ballsprite, 0, 0, ballsprite.width, ballsprite.height, pin2.x - pin2.radius, pin2.y - pin2.radius, pin2.radius * 2, pin2.radius * 2)
                if (level == 4) {
                    tutorial_canvas_context.drawImage(ballspritelvl4, 0, 0, ballsprite.width, ballsprite.height, pin2.x - pin2.radius, pin2.y - pin2.radius, pin2.radius * 2, pin2.radius * 2)
                } else {
                    tutorial_canvas_context.drawImage(ballsprite, 0, 0, ballsprite.width, ballsprite.height, pin2.x - pin2.radius, pin2.y - pin2.radius, pin2.radius * 2, pin2.radius * 2)
                }
            }
            // this.anchor.draw()
        }
        move() {
            if (this.anchor.ymom > 0 && (this.anchor.y + this.anchor.radius) >= 650) {
                this.anchor.ymom *= -1
            }
            // if(this.anchor.ymom < 0 && (this.anchor.y-this.anchor.radius) <= (roof2.y+roof2.height+(pomao.body.radius*2))){
            //     this.anchor.ymom *=-1
            // }
            if (this.body !== pin) {
                this.body.move()
            }
            if (pegged == 1) {
                if (this.anchor == pin2) {
                    for (let t = 0; t < walls.length; t++) {
                        if (squarecirclefaceball(walls[t], pin2)) {
                            if (walls[t].x > pin2.x) {
                                if (pin2.xmom > 0) {
                                    pin2.xmom *= -1
                                    break
                                }
                            } else {
                                if (pin2.xmom < 0) {
                                    pin2.xmom *= -1
                                    break
                                }
                            }
                        }
                        if (squarecirclehead(walls[t], pin2)) {
                            if (pin2.ymom < 0) {
                                pin2.ymom *= -1
                            }
                        }
                        if (squarecirclefeet(walls[t], pin2)) {
                            if (pin2.ymom > 0) {
                                pin2.ymom *= -1
                                break
                            }
                        }
                    }
                    this.anchor.move()
                } else {
                    this.anchor.move()
                }
            } else {
                this.anchor.move()
            }
        }
        wbalance() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "red", 5)
            let xmomentumaverage
            let ymomentumaverage
            //  xmomentumaverage = (this.body.xmom+(this.anchor.xmom+(this.anchor.xmom*this.anchor.marked)))/(2+this.anchor.marked)
            //  ymomentumaverage = (this.body.ymom+(this.anchor.ymom+(this.anchor.ymom*this.anchor.marked)))/(2+this.anchor.marked)
            // if(this.body != pin){

            xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            //  this.body.xmom = ((this.body.xmom*3)+xmomentumaverage)/4
            //  this.body.ymom = ((this.body.ymom*3)+ymomentumaverage)/4
            this.body.xmom = ((this.body.xmom * 1) + xmomentumaverage) / 2
            this.body.ymom = ((this.body.ymom * 1) + ymomentumaverage) / 2
            // }

            this.anchor.xmom = ((this.anchor.xmom) + xmomentumaverage) / 2
            this.anchor.ymom = ((this.anchor.ymom) + ymomentumaverage) / 2

            if (this.beam.hypotenuse() != 0) {
                if (this.beam.hypotenuse() < this.length - 2) {
                    if (this.body != pin) {
                        this.body.xmom += (this.body.x - this.anchor.x) / (this.length) / 10
                        this.body.ymom += (this.body.y - this.anchor.y) / (this.length) / 10
                    }
                    this.anchor.xmom -= (this.body.x - this.anchor.x) / (this.length) / 10
                    this.anchor.ymom -= (this.body.y - this.anchor.y) / (this.length) / 10
                } else if (this.beam.hypotenuse() > this.length + 2) {

                    this.body.xmom -= (this.body.x - this.anchor.x) / (this.length) / 1.6
                    this.body.ymom -= (this.body.y - this.anchor.y) / (this.length) / 1.6
                    this.anchor.xmom += (this.body.x - this.anchor.x) / (this.length) / 1.6
                    this.anchor.ymom += (this.body.y - this.anchor.y) / (this.length) / 1.6
                } else {

                    // if(this.worm.yeet == 0){
                    //     this.anchor.xmom *= .99
                    //     this.anchor.ymom  *= .99
                    // }
                }

            }
        }
        ddraw() {

            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, this.anchor.color, this.body.radius * 2)
            if (this.beam.width != this.worm.joints[this.worm.joints.length - 2].radius * 2) {
                this.beam.draw()
            }
        }
        wdraw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, this.anchor.color, this.body.radius * 2)
            this.beam.draw()
            // this.body.wdraw()
            // this.anchor.wdraw()
        }
        wbdraw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "#191919", this.body.radius * 2)
            tutorial_canvas_context.drawImage(wormbossimg, 0, 0, wormbossimg.width, wormbossimg.height, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
            this.beam.draw()
        }
        wbsdraw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "#191919", this.body.radius * 1.8)
            this.beam.draw()
            tutorial_canvas_context.drawImage(wormbossimg, 0, 0, wormbossimg.width, wormbossimg.height, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
        }
        wmove(t = -1) {
            // this.body.ymom*=.99
            // this.body.xmom*=.99
            // this.anchor.ymom*=.99
            // this.anchor.xmom*=.99
            let blockedlick = 0
            let blockedlick2 = 0
            for (let t = 0; t < this.worm.joints.length; t++) {
                // if(t!=this.worm.joints.indexOf(this)){
                if (this.worm.joints[t].marked > 1) {
                    blockedlick2 = 2
                }
                // }
            }
            for (let t = 0; t < this.worm.joints.length; t++) {
                if (t != this.worm.joints.indexOf(this)) {
                    if (this.worm.joints[t].marked > 0) {
                        if (blockedlick2 == 2) {
                            if (this.worm.joints[t].marked == 1) {
                                this.worm.joints[t].marked = 2
                            }
                            blockedlick = 1
                        } else {
                            blockedlick = 1
                        }
                    }
                }
            }


            if (this.anchor.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.anchor)) {
                if (t < this.worm.segments.length - 2) {
                    if (blockedlick == 0) {
                        if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) > 7) {
                            this.anchor.marked = 1
                            if (this.anchor.xdif + this.anchor.ydif == 0) {
                                this.anchor.xdif = pomao.tongue.x - this.anchor.x
                                this.anchor.ydif = pomao.tongue.y - this.anchor.y
                                const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                                const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                                if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                                    this.anchor.xdif = .001
                                    this.anchor.ydif = 0
                                }
                            }
                        }
                    }
                } else {
                }

            }

            if (this.anchor.repelCheck(pomao.body) && (this.anchor.repelCheck(pomao.tongue) || (this.anchor.marked == 1 || this.anchor.marked == 2))) {
                if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) < 14) {
                    if (this.worm.licked == 0) {

                        for (let t = 0; t < this.worm.segments.length; t++) {
                            // console.log(this.worm.segments[t].anchor.marked )
                            if (this.worm.segments[t].anchor.marked == 1) {
                                this.worm.licked = 1
                            }
                        }

                    }
                    if (this.worm.licked == 1) {

                        this.anchor.marked = 2
                        pomao.diry = 1
                        if (typeof this.anchor.timer != "number") {
                            this.anchor.timer = this.worm.joints.length * 3
                        }
                    }
                }
                if (this.anchor.repelCheck(pomao.body) && !this.anchor.repelCheck(pomao.tongue)) {
                    if (this.anchor.x > pomao.body.x) {
                        this.bump = 1
                    } else {
                        this.bump = -1
                    }
                    //   if(pomao.body.ymom == 0){
                    if (blockedlick == 0) {

                        // if (this.body.radius >= 15) {
                        if (pomao.disabled != 1) {
                            if (pomao.pounding != 10) {
                                pomao.body.xmom = -3 * (this.bump)
                                pomao.disabled = 1
                                pomao.hits--
                                pomao.body.ymom = -1.8
                                this.anchor.xmom += -pomao.body.xmom * 5
                                this.body.xmom += -pomao.body.xmom * 5
                            }
                        } else {
                            if (this.bump * pomao.body.xmom > 0) {
                                pomao.body.xmom = -1.8 * (this.bump)
                                pomao.body.ymom = -1.8
                                this.anchor.xmom += -pomao.body.xmom * 5
                                this.body.xmom += -pomao.body.xmom * 5
                            }
                        }
                        // }
                    }
                    //   }
                }
            }

            if (this.anchor.repelCheck(pomao.body)) {
                if (this.anchor.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){
                if (blockedlick == 0) {

                    // if (this.body.radius >= 15) {
                    if (pomao.disabled != 1) {
                        if (pomao.pounding != 10) {
                            pomao.body.xmom = -3 * (this.bump)
                            pomao.disabled = 1
                            pomao.hits--
                            pomao.body.ymom = -1.8
                            this.anchor.xmom += -pomao.body.xmom * 5
                            this.body.xmom += -pomao.body.xmom * 5
                        }
                    } else {
                        if (this.bump * pomao.body.xmom > 0) {
                            pomao.body.xmom = -1.8 * (this.bump)
                            pomao.body.ymom = -1.8
                            this.anchor.xmom += -pomao.body.xmom * 5
                            this.body.xmom += -pomao.body.xmom * 5
                        }
                    }
                    // }
                }
                //   }
            }

            if (this.anchor.marked == 1) {
                this.anchor.x -= ((this.anchor.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.anchor.y -= ((this.anchor.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)
                for (let t = 0; t < this.worm.segments.length; t++) {
                    this.worm.segments[t].length *= .8
                    if (this.worm.segments[t].length <= 6) {
                        this.worm.segments[t].length = 6
                    }
                    this.worm.segments[t].anchor.radius -= .01
                    if (this.worm.segments[t].body.radius <= 2) {
                        this.worm.segments[t].body.radius = 2

                    }
                    if (this.worm.segments[t].anchor.radius <= 2) {
                        this.worm.segments[t].anchor.radius = 2

                    }
                    if (Math.random() < .0125) {

                        // if(this.anchor.timer%2 ==0){

                        if (this.worm.segments[t].anchor == this.anchor) {
                            if (t < this.worm.segments.length - 1) {
                                this.worm.segments[t + 1].anchor.marked = 1
                                this.worm.segments[t + 1].anchor.xdif = this.anchor.xdif
                                this.worm.segments[t + 1].anchor.ydif = this.anchor.ydif
                            }
                            if (t > 0) {
                                this.worm.segments[t - 1].anchor.marked = 1
                                this.worm.segments[t - 1].anchor.xdif = this.anchor.xdif
                                this.worm.segments[t - 1].anchor.ydif = this.anchor.ydif
                            }
                        }

                    }
                }
            }

            this.anchor.xdif *= .95
            this.anchor.ydif *= .95
            if (this.anchor.marked == 2) {
                this.anchor.xdif *= .9
                this.anchor.ydif *= .9
                this.anchor.x -= ((this.anchor.x - pomao.body.x) / 1.1)
                this.anchor.y -= ((this.anchor.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1
                this.anchor.timer--
                for (let t = 0; t < this.worm.segments.length; t++) {
                    this.worm.segments[t].length *= .8
                    if (this.worm.segments[t].length <= 6) {
                        this.worm.segments[t].length = 6
                    }
                    this.worm.segments[t].anchor.radius -= .004
                    if (this.worm.segments[t].body.radius <= 2) {
                        this.worm.segments[t].body.radius = 2

                    }
                    if (this.worm.segments[t].anchor.radius <= 2) {
                        this.worm.segments[t].anchor.radius = 2

                    }
                    //   if(Math.random()<.25){
                    if (this.anchor.timer % 3 == 0) {

                        if (this.worm.segments[t].anchor == this.anchor) {
                            if (t < this.worm.segments.length - 1) {
                                // console.log("before",  this.worm.segments[t+1].anchor.marked)
                                this.worm.segments[t + 1].anchor.marked = 2
                                this.worm.segments[t + 1].anchor.timer = this.anchor.timer
                                this.worm.segments[t + 1].anchor.xdif = 0
                                this.worm.segments[t + 1].anchor.ydif = 0
                                // console.log("after",  this.worm.segments[t+1].anchor.marked)
                            }
                            if (t > 0) {
                                this.worm.segments[t - 1].anchor.marked = 2
                                this.worm.segments[t - 1].anchor.timer = this.anchor.timer
                                this.worm.segments[t - 1].anchor.xdif = 0
                                this.worm.segments[t - 1].anchor.ydif = 0
                            }
                        }

                    }
                }

                for (let t = 0; t < this.worm.segments.length; t++) {
                    if (this.worm.segments[t].anchor.radius < 2.01) {
                        this.worm.segments[t].anchor.color = "transparent"
                    }
                    if (this.worm.segments[t].body.radius < 2.01) {
                        this.worm.segments[t].body.color = "transparent"
                    }
                }
                if (this.anchor.timer <= 0) {
                    this.worm.marked = 1
                }
            }


            if (typeof this.body.marked != "number" || this.body.marked == 0) {
                this.body.move()
            }

            if (this.anchor.marked == 0) {
                this.anchor.move()
            }



        }

        wbmove(t = -1) {
            // this.body.ymom*=.99
            // this.body.xmom*=.99
            // this.anchor.ymom*=.99
            // this.anchor.xmom*=.99
            let blockedlick = 0
            let blockedlick2 = 0
            for (let t = 0; t < this.worm.joints.length; t++) {
                // if(t!=this.worm.joints.indexOf(this)){
                if (this.worm.joints[t].marked > 1) {
                    blockedlick2 = 2
                }
                // }
            }
            for (let t = 0; t < this.worm.joints.length; t++) {
                if (t != this.worm.joints.indexOf(this)) {
                    if (this.worm.joints[t].marked > 0) {
                        if (blockedlick2 == 2) {
                            if (this.worm.joints[t].marked == 1) {
                                this.worm.joints[t].marked = 2
                            }
                            blockedlick = 1
                        } else {
                            blockedlick = 1
                        }
                    }
                }
            }


            // if (this.anchor.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.anchor)) {
            //     if (t < this.worm.segments.length - 2) {
            //         if (blockedlick == 0) {
            //             if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) > 7) {
            //                 this.anchor.marked = 1
            //                 if (this.anchor.xdif + this.anchor.ydif == 0) {
            //                     this.anchor.xdif = pomao.tongue.x - this.anchor.x
            //                     this.anchor.ydif = pomao.tongue.y - this.anchor.y
            //                     const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
            //                     const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
            //                     if (link2.hypotenuse() > link1.hypotenuse() - 10) {
            //                         this.anchor.xdif = .001
            //                         this.anchor.ydif = 0
            //                     }
            //                 }
            //             }
            //         }
            //     } else {
            //     }

            // }

            // if (this.anchor.repelCheck(pomao.body) && (this.anchor.repelCheck(pomao.tongue) || (this.anchor.marked == 1 || this.anchor.marked == 2))) {
            //     // if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) < 14) {
            //     //     if (this.worm.licked == 0) {

            //     //         for (let t = 0; t < this.worm.segments.length; t++) {
            //     //             // console.log(this.worm.segments[t].anchor.marked )
            //     //             if (this.worm.segments[t].anchor.marked == 1) {
            //     //                 this.worm.licked = 1
            //     //             }
            //     //         }

            //     //     }
            //     //     if (this.worm.licked == 1) {

            //     //         this.anchor.marked = 2
            //     //         pomao.diry = 1
            //     //         if (typeof this.anchor.timer != "number") {
            //     //             this.anchor.timer = this.worm.joints.length * 3
            //     //         }
            //     //     }
            //     // }
            // } else 

            if (this.anchor.repelCheck(pomao.body)) {
                if (this.anchor.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){
                if (blockedlick == 0) {

                    if (this.body.radius >= 6) {
                        if (pomao.disabled != 1) {
                            if (pomao.pounding != 10) {
                                pomao.body.xmom = -3 * (this.bump)
                                pomao.disabled = 1
                                pomao.hits -= 3
                                pomao.body.ymom = -1.8
                                this.anchor.xmom += -pomao.body.xmom * 5
                                this.body.xmom += -pomao.body.xmom * 5
                            }
                        } else {
                            if (this.bump * pomao.body.xmom > 0) {
                                pomao.body.xmom = -1.8 * (this.bump)
                                pomao.body.ymom = -1.8
                                this.anchor.xmom += -pomao.body.xmom * 5
                                this.body.xmom += -pomao.body.xmom * 5
                            }
                        }
                    }
                }
                //   }
            }

            if (this.anchor.marked == 1) {
                this.anchor.x -= ((this.anchor.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.anchor.y -= ((this.anchor.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)
                for (let t = 0; t < this.worm.segments.length; t++) {
                    this.worm.segments[t].length *= .8
                    if (this.worm.segments[t].length <= 6) {
                        this.worm.segments[t].length = 6
                    }
                    this.worm.segments[t].anchor.radius -= .01
                    if (this.worm.segments[t].body.radius <= 2) {
                        this.worm.segments[t].body.radius = 2

                    }
                    if (this.worm.segments[t].anchor.radius <= 2) {
                        this.worm.segments[t].anchor.radius = 2

                    }
                    if (Math.random() < .0125) {

                        // if(this.anchor.timer%2 ==0){

                        if (this.worm.segments[t].anchor == this.anchor) {
                            if (t < this.worm.segments.length - 1) {
                                this.worm.segments[t + 1].anchor.marked = 1
                                this.worm.segments[t + 1].anchor.xdif = this.anchor.xdif
                                this.worm.segments[t + 1].anchor.ydif = this.anchor.ydif
                            }
                            if (t > 0) {
                                this.worm.segments[t - 1].anchor.marked = 1
                                this.worm.segments[t - 1].anchor.xdif = this.anchor.xdif
                                this.worm.segments[t - 1].anchor.ydif = this.anchor.ydif
                            }
                        }

                    }
                }
            }

            this.anchor.xdif *= .95
            this.anchor.ydif *= .95
            if (this.anchor.marked == 2) {
                this.anchor.xdif *= .9
                this.anchor.ydif *= .9
                this.anchor.x -= ((this.anchor.x - pomao.body.x) / 1.1)
                this.anchor.y -= ((this.anchor.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1
                this.anchor.timer--
                for (let t = 0; t < this.worm.segments.length; t++) {
                    this.worm.segments[t].length *= .8
                    if (this.worm.segments[t].length <= 6) {
                        this.worm.segments[t].length = 6
                    }
                    this.worm.segments[t].anchor.radius -= .004
                    if (this.worm.segments[t].body.radius <= 2) {
                        this.worm.segments[t].body.radius = 2

                    }
                    if (this.worm.segments[t].anchor.radius <= 2) {
                        this.worm.segments[t].anchor.radius = 2

                    }
                    //   if(Math.random()<.25){
                    if (this.anchor.timer % 3 == 0) {

                        if (this.worm.segments[t].anchor == this.anchor) {
                            if (t < this.worm.segments.length - 1) {
                                // console.log("before",  this.worm.segments[t+1].anchor.marked)
                                this.worm.segments[t + 1].anchor.marked = 2
                                this.worm.segments[t + 1].anchor.timer = this.anchor.timer
                                this.worm.segments[t + 1].anchor.xdif = 0
                                this.worm.segments[t + 1].anchor.ydif = 0
                                // console.log("after",  this.worm.segments[t+1].anchor.marked)
                            }
                            if (t > 0) {
                                this.worm.segments[t - 1].anchor.marked = 2
                                this.worm.segments[t - 1].anchor.timer = this.anchor.timer
                                this.worm.segments[t - 1].anchor.xdif = 0
                                this.worm.segments[t - 1].anchor.ydif = 0
                            }
                        }

                    }
                }

                for (let t = 0; t < this.worm.segments.length; t++) {
                    if (this.worm.segments[t].anchor.radius < 2.01) {
                        this.worm.segments[t].anchor.color = "transparent"
                    }
                    if (this.worm.segments[t].body.radius < 2.01) {
                        this.worm.segments[t].body.color = "transparent"
                    }
                }
                if (this.anchor.timer <= 0) {
                    this.worm.marked = 1
                }
            }


            if (typeof this.body.marked != "number" || this.body.marked == 0) {
                this.body.move()
            }

            if (this.anchor.marked == 0) {
                this.anchor.move()
            }



        }

        dmove() {
            // this.body.ymom*=.99
            // this.body.xmom*=.99
            // this.anchor.ymom*=.99
            // this.anchor.xmom*=.99
            let blockedlick = 0
            let blockedlick2 = 0
            // for (let t = this.worm.joints.length - 2; t < this.worm.joints.length; t++) {
            // // if(t!=this.worm.joints.indexOf(this)){
            // if (this.worm.joints[t].marked > 1) {
            //     blockedlick2 = 2
            // }
            // // }
            // }
            for (let t = this.worm.joints.length - 2; t < this.worm.joints.length; t++) {
                if (t != this.worm.joints.indexOf(this)) {
                    if (this.worm.joints[t].marked > 0) {
                        if (blockedlick2 == 2) {
                            if (this.worm.joints[t].marked == 1) {
                                this.worm.joints[t].marked = 2
                            }
                            blockedlick = 1
                        } else {
                            blockedlick = 1
                        }
                    }
                }
            }
            if (this.anchor.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.anchor)) {
                // if (blockedlick == 0) {
                //     if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) > 7) {
                //         if (this.anchor == this.worm.joints[this.worm.joints.length - 2]) {
                //             this.anchor.marked = 1
                //             if (this.anchor.xdif + this.anchor.ydif == 0) {
                //                 this.anchor.xdif = pomao.tongue.x - this.anchor.x
                //                 this.anchor.ydif = pomao.tongue.y - this.anchor.y
                //                 const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                //                 const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                //                 if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                //                     this.anchor.xdif = .001
                //                     this.anchor.ydif = 0
                //                 }
                //             }
                //         }
                //     }
                // }
            }
            if (this.anchor.repelCheck(pomao.body) && (this.anchor.repelCheck(pomao.tongue) || (this.anchor.marked == 1 || this.anchor.marked == 2))) {
                // if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) < 14) {
                //     if (this.worm.licked == 0) {

                //         for (let t = 0; t < this.worm.segments.length; t++) {
                //             // console.log(this.worm.segments[t].anchor.marked )
                //             if (this.worm.segments[t].anchor.marked == 1) {
                //                 this.worm.licked = 1
                //             }
                //         }

                //     }
                //     if (this.worm.licked == 1) {

                //         this.anchor.marked = 2
                //         pomao.diry = 1
                //         if (typeof this.anchor.timer != "number") {
                //             this.anchor.timer = this.worm.joints.length * 3
                //             this.anchor.index = 0
                //         }
                //     }
                // }
            } else if (this.anchor.repelCheck(pomao.body) && !this.anchor.repelCheck(pomao.tongue)) {
                // if (this.anchor.x > pomao.body.x) {
                //     this.bump = 1
                // } else {
                //     this.bump = -1
                // }
                // //   if(pomao.body.ymom == 0){
                // if (blockedlick == 0) {

                //     if (this.body.radius >= 15) {
                //         if (pomao.disabled != 1) {
                //             if (pomao.pounding != 10) {
                //                 pomao.body.xmom = -3 * (this.bump)
                //                 pomao.disabled = 1
                //                 pomao.hits--
                //                 pomao.body.ymom = -1.8
                //                 this.anchor.xmom += -pomao.body.xmom * 5
                //                 this.body.xmom += -pomao.body.xmom * 5
                //             }
                //         } else {
                //             if (this.bump * pomao.body.xmom > 0) {
                //                 pomao.body.xmom = -1.8 * (this.bump)
                //                 pomao.body.ymom = -1.8
                //                 this.anchor.xmom += -pomao.body.xmom * 5
                //                 this.body.xmom += -pomao.body.xmom * 5
                //             }
                //         }
                //     }
                // }
                //   }
            }

            if (this.anchor.marked == 1) {
                this.anchor.x -= ((this.anchor.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.anchor.y -= ((this.anchor.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)
                this.anchor.radius *= .975
                if (this.anchor.radius < 2.01) {
                    this.anchor.radius = 2
                }
            }

            this.anchor.xdif *= .95
            this.anchor.ydif *= .95
            if (this.anchor.marked == 2) {
                this.anchor.xdif *= .9
                this.anchor.ydif *= .9
                this.anchor.x -= ((this.anchor.x - pomao.body.x) / 1.1)
                this.anchor.y -= ((this.anchor.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1
                this.anchor.timer--
                if (this.anchor.timer % 3 == 0) {

                    this.anchor.index++
                    this.anchor.index %= this.worm.segments.length
                }

                this.anchor.radius *= .975
                this.worm.segments[this.anchor.index].body.color = "transparent"


                if (this.anchor.timer <= 0) {
                    this.worm.marked = 1
                }
            }


            if (typeof this.body.marked != "number" || this.body.marked == 0) {
                this.body.move()
            }

            if (this.anchor.marked == 0) {
                this.anchor.move()
            }



        }

        dbmove() {
            // this.body.ymom*=.99
            // this.body.xmom*=.99
            // this.anchor.ymom*=.99
            // this.anchor.xmom*=.99
            let blockedlick = 0
            let blockedlick2 = 0
            // for (let t = this.worm.joints.length - 2; t < this.worm.joints.length; t++) {
            // // if(t!=this.worm.joints.indexOf(this)){
            // if (this.worm.joints[t].marked > 1) {
            //     blockedlick2 = 2
            // }
            // // }
            // }
            for (let t = this.worm.joints.length - 2; t < this.worm.joints.length; t++) {
                if (t != this.worm.joints.indexOf(this)) {
                    if (this.worm.joints[t].marked > 0) {
                        if (blockedlick2 == 2) {
                            if (this.worm.joints[t].marked == 1) {
                                this.worm.joints[t].marked = 2
                            }
                            blockedlick = 1
                        } else {
                            blockedlick = 1
                        }
                    }
                }
            }
            if (this.anchor.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.anchor)) {
                // if (blockedlick == 0) {
                //     if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) > 7) {
                //         if (this.anchor == this.worm.joints[this.worm.joints.length - 2]) {
                //             this.anchor.marked = 1
                //             if (this.anchor.xdif + this.anchor.ydif == 0) {
                //                 this.anchor.xdif = pomao.tongue.x - this.anchor.x
                //                 this.anchor.ydif = pomao.tongue.y - this.anchor.y
                //                 const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                //                 const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                //                 if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                //                     this.anchor.xdif = .001
                //                     this.anchor.ydif = 0
                //                 }
                //             }
                //         }
                //     }
                // }
            }
            if (this.anchor.repelCheck(pomao.body) && (this.anchor.repelCheck(pomao.tongue) || (this.anchor.marked == 1 || this.anchor.marked == 2))) {
                // if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) < 14) {
                //     if (this.worm.licked == 0) {

                //         for (let t = 0; t < this.worm.segments.length; t++) {
                //             // console.log(this.worm.segments[t].anchor.marked )
                //             if (this.worm.segments[t].anchor.marked == 1) {
                //                 this.worm.licked = 1
                //             }
                //         }

                //     }
                //     if (this.worm.licked == 1) {

                //         this.anchor.marked = 2
                //         pomao.diry = 1
                //         if (typeof this.anchor.timer != "number") {
                //             this.anchor.timer = this.worm.joints.length * 3
                //             this.anchor.index = 0
                //         }
                //     }
                // }
            } else if (this.anchor.repelCheck(pomao.body)) {
                if (this.anchor.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){
                if (blockedlick == 0) {

                    if (this.body.radius >= 1) {
                        if (pomao.disabled != 1) {
                            if (pomao.pounding != 10) {
                                pomao.body.xmom = -3 * (this.bump)
                                pomao.disabled = 1
                                pomao.hits -= 3
                                pomao.body.ymom = -1.8
                                this.anchor.xmom += -pomao.body.xmom * 5
                                this.body.xmom += -pomao.body.xmom * 5
                            }
                        } else {
                            if (this.bump * pomao.body.xmom > 0) {
                                pomao.body.xmom = -1.8 * (this.bump)
                                pomao.body.ymom = -1.8
                                this.anchor.xmom += -pomao.body.xmom * 5
                                this.body.xmom += -pomao.body.xmom * 5
                            }
                        }
                    }
                }
                //   }
            }

            if (this.anchor.marked == 1) {
                this.anchor.x -= ((this.anchor.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.anchor.y -= ((this.anchor.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)
                this.anchor.radius *= .975
                if (this.anchor.radius < 2.01) {
                    this.anchor.radius = 2
                }
            }

            this.anchor.xdif *= .95
            this.anchor.ydif *= .95
            if (this.anchor.marked == 2) {
                this.anchor.xdif *= .9
                this.anchor.ydif *= .9
                this.anchor.x -= ((this.anchor.x - pomao.body.x) / 1.1)
                this.anchor.y -= ((this.anchor.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1
                this.anchor.timer--
                if (this.anchor.timer % 3 == 0) {

                    this.anchor.index++
                    this.anchor.index %= this.worm.segments.length
                }

                this.anchor.radius *= .975
                this.worm.segments[this.anchor.index].body.color = "transparent"


                if (this.anchor.timer <= 0) {
                    this.worm.marked = 1
                }
            }


            if (typeof this.body.marked != "number" || this.body.marked == 0) {
                this.body.move()
            }

            if (this.anchor.marked == 0) {
                this.anchor.move()
            }



        }
        dmove() {
            // this.body.ymom*=.99
            // this.body.xmom*=.99
            // this.anchor.ymom*=.99
            // this.anchor.xmom*=.99
            let blockedlick = 0
            let blockedlick2 = 0
            for (let t = this.worm.joints.length - 2; t < this.worm.joints.length; t++) {
                // if(t!=this.worm.joints.indexOf(this)){
                if (this.worm.joints[t].marked > 1) {
                    blockedlick2 = 2
                }
                // }
            }
            for (let t = this.worm.joints.length - 2; t < this.worm.joints.length; t++) {
                if (t != this.worm.joints.indexOf(this)) {
                    if (this.worm.joints[t].marked > 0) {
                        if (blockedlick2 == 2) {
                            if (this.worm.joints[t].marked == 1) {
                                this.worm.joints[t].marked = 2
                            }
                            blockedlick = 1
                        } else {
                            blockedlick = 1
                        }
                    }
                }
            }
            if (this.anchor.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.anchor)) {
                if (blockedlick == 0) {
                    if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) > 7) {
                        if (this.anchor == this.worm.joints[this.worm.joints.length - 2]) {
                            this.anchor.marked = 1
                            if (this.anchor.xdif + this.anchor.ydif == 0) {
                                this.anchor.xdif = pomao.tongue.x - this.anchor.x
                                this.anchor.ydif = pomao.tongue.y - this.anchor.y
                                const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                                const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                                if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                                    this.anchor.xdif = .001
                                    this.anchor.ydif = 0
                                }
                            }
                        }
                    }
                }
            }
            if (this.anchor.repelCheck(pomao.body) && (this.anchor.repelCheck(pomao.tongue) || (this.anchor.marked == 1 || this.anchor.marked == 2))) {
                if (Math.abs(pomao.tonguex) + Math.abs(pomao.tonguey) < 14) {
                    if (this.worm.licked == 0) {

                        for (let t = 0; t < this.worm.segments.length; t++) {
                            // console.log(this.worm.segments[t].anchor.marked )
                            if (this.worm.segments[t].anchor.marked == 1) {
                                this.worm.licked = 1
                            }
                        }

                    }
                    if (this.worm.licked == 1) {

                        this.anchor.marked = 2
                        pomao.diry = 1
                        if (typeof this.anchor.timer != "number") {
                            this.anchor.timer = this.worm.joints.length * 3
                            this.anchor.index = 0
                        }
                    }
                }
            } else if (this.anchor.repelCheck(pomao.body) && !this.anchor.repelCheck(pomao.tongue)) {
                if (this.anchor.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){
                if (blockedlick == 0) {

                    if (this.body.radius >= 15) {
                        if (pomao.disabled != 1) {
                            if (pomao.pounding != 10) {
                                pomao.body.xmom = -3 * (this.bump)
                                pomao.disabled = 1
                                pomao.hits--
                                pomao.body.ymom = -1.8
                                this.anchor.xmom += -pomao.body.xmom * 5
                                this.body.xmom += -pomao.body.xmom * 5
                            }
                        } else {
                            if (this.bump * pomao.body.xmom > 0) {
                                pomao.body.xmom = -1.8 * (this.bump)
                                pomao.body.ymom = -1.8
                                this.anchor.xmom += -pomao.body.xmom * 5
                                this.body.xmom += -pomao.body.xmom * 5
                            }
                        }
                    }
                }
                //   }
            }

            if (this.anchor.marked == 1) {
                this.anchor.x -= ((this.anchor.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.anchor.y -= ((this.anchor.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)
                this.anchor.radius *= .975
                if (this.anchor.radius < 2.01) {
                    this.anchor.radius = 2
                }
            }

            this.anchor.xdif *= .95
            this.anchor.ydif *= .95
            if (this.anchor.marked == 2) {
                this.anchor.xdif *= .9
                this.anchor.ydif *= .9
                this.anchor.x -= ((this.anchor.x - pomao.body.x) / 1.1)
                this.anchor.y -= ((this.anchor.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1
                this.anchor.timer--
                if (this.anchor.timer % 3 == 0) {

                    this.anchor.index++
                    this.anchor.index %= this.worm.segments.length
                }

                this.anchor.radius *= .975
                this.worm.segments[this.anchor.index].body.color = "transparent"


                if (this.anchor.timer <= 0) {
                    this.worm.marked = 1
                }
            }


            if (typeof this.body.marked != "number" || this.body.marked == 0) {
                this.body.move()
            }

            if (this.anchor.marked == 0) {
                this.anchor.move()
            }



        }

    }



    class Fractal {
        constructor(x) {
            this.sheet = 0
            this.runner = 0
            this.runnerx = 0
            this.runnery = 0
            this.runnerxd = 1
            this.runclick = 0
            this.center = {}
            this.center.x = tutorial_canvas.width * .5
            this.center.y = tutorial_canvas.height * .5
            this.count = x
            this.angle = 0
            this.spin = 0
            this.macrospin = 0
            this.joints = []
            this.threshold = 50
        }
        draw() {
            if (pomao.tripping < 0) {
                this.runner = 0
                this.count = 10
                this.threshold = 50
            }
            this.runner++
            if (this.runner % 1 == 0) {
                this.runnerx += 1
                if (this.runnerx > 2) {
                    this.runnerx = 0
                    this.runnery++
                    if (this.runnery > 2) {
                        this.runnery = 0
                        this.sheet += this.runnerxd
                        if (this.sheet >= zimgs.length - 1) {
                            this.runnerxd *= -1
                        }

                    }
                }
            }
            if (this.runner % this.threshold == 0) {
                this.runner = 0
                this.count--
                this.threshold += 10
            }
            if (pomao.tripping > 0) {
                this.spin += .015
                this.macrospin += .03
                this.joints = []
                for (let t = 0; t < this.count; t++) {
                    const joint = new CircleF(pomao.body.x + (Math.sin(this.angle + this.spin) * 250) + (Math.sin(this.macrospin) * 15), pomao.body.y + (Math.cos(this.angle + this.spin) * 250) + (Math.cos(this.macrospin) * 15), 0, getRandomLightColortp())
                    this.joints.push(joint)
                    this.angle += (Math.PI * 2) / this.count
                }
                if (this.count > 0) {

                    tutorial_canvas_context.moveTo(this.joints[0].x, this.joints[0].y)
                    tutorial_canvas_context.lineWidth = 10 + ((4 - (this.spin % this.count)))
                    // tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                    for (let t = 0; t < this.count; t++) {

                        tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                        tutorial_canvas_context.fillStyle = getRandomLightColortp()
                        tutorial_canvas_context.lineTo(this.joints[t].x, this.joints[t].y)
                    }
                    tutorial_canvas_context.lineTo(this.joints[0].x, this.joints[0].y)
                    tutorial_canvas_context.stroke()

                    tutorial_canvas_context.lineWidth = 0
                    for (let t = 0; t < 1; t++) {
                        tutorial_canvas_context.fillStyle = getRandomLightColortp()
                        this.joints[t].color = getRandomLightColortp()
                        this.joints[t].draw()


                    }
                }
            }

            this.sheet %= zimgs.length - 1
            if (this.sheet < 0) {
                this.sheet = 0
            }
            if (this.sheet == 0) {
                this.runnerxd *= -1
            }
        }
    }



    class Fractal2 {
        constructor(x) {
            this.runner = 0
            this.runclick = 0
            this.center = {}
            this.center.x = tutorial_canvas.width * .5
            this.center.y = tutorial_canvas.height * .5
            this.count = x
            this.angle = 0
            this.spin = 0
            this.macrospin = 0
            this.joints = []
        }
        draw() {

            if (pomao.tripping < 0) {
                this.runner = 0
                this.count = 10
                this.threshold = 50
            }
            this.runner++
            if (this.runner % this.threshold == 0) {
                this.runner = 0
                this.count--
                this.threshold += 10
            }
            if (pomao.tripping > 0) {
                this.spin -= .015
                this.macrospin += .03
                this.joints = []
                for (let t = 0; t < this.count; t++) {
                    const joint = new CircleF(pomao.body.x + (Math.sin(this.angle + this.spin) * 160) + (Math.sin(this.macrospin) * 20), pomao.body.y + (Math.cos(this.angle + this.spin) * 160) + (Math.cos(this.macrospin) * 5), 0, getRandomLightColortp())
                    this.joints.push(joint)
                    this.angle += (Math.PI * 2) / this.count
                }
                if (this.count > 0) {

                    tutorial_canvas_context.moveTo(this.joints[0].x, this.joints[0].y)
                    tutorial_canvas_context.lineWidth = 0//40+((4-(this.spin%this.count)))
                    // tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                    for (let t = 0; t < this.count; t++) {

                        tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                        tutorial_canvas_context.fillStyle = getRandomLightColortp()
                        tutorial_canvas_context.lineTo(this.joints[t].x, this.joints[t].y)
                    }
                    tutorial_canvas_context.lineTo(this.joints[0].x, this.joints[0].y)
                    tutorial_canvas_context.stroke()
                    tutorial_canvas_context.fill()

                    tutorial_canvas_context.lineWidth = 0
                    for (let t = 1; t < 2; t++) {
                        tutorial_canvas_context.fillStyle = getRandomLightColortp()
                        if (typeof this.joints[t] != "undefined") {
                            this.joints[t].color = getRandomLightColortp()
                            this.joints[t].draw()
                        }


                    }
                }
            }
        }
    }


    class Fractal3 {
        constructor(x) {
            this.runner = 0
            this.runclick = 0
            this.center = {}
            this.center.x = tutorial_canvas.width * .5
            this.center.y = tutorial_canvas.height * .5
            this.count = x
            this.angle = 0
            this.spin = 0
            this.macrospin = 0
            this.joints = []
        }
        draw() {

            if (pomao.tripping < 0) {
                this.runner = 0
                this.count = 10
                this.threshold = 50
            }
            this.runner++
            if (this.runner % this.threshold == 0) {
                this.runner = 0
                this.count--
                this.threshold += 10
            }
            if (pomao.tripping > 0) {
                this.spin += .015 * Math.random() * 2
                this.macrospin += .03 * Math.random() * 2
                this.joints = []
                for (let t = 0; t < this.count; t++) {
                    const joint = new CircleF(pomao.body.x + (Math.sin(this.angle + this.spin) * 70) + (Math.sin(this.macrospin) * 7), pomao.body.y + (Math.cos(this.angle + this.spin) * 70) + (Math.cos(this.macrospin) * 13), 0, getRandomLightColortp())
                    this.joints.push(joint)
                    this.angle += (Math.PI * 2) / this.count
                }
                if (this.count > 0) {

                    tutorial_canvas_context.moveTo(this.joints[0].x, this.joints[0].y)
                    tutorial_canvas_context.lineWidth = 0 // 30+((4-(this.spin%this.count)))
                    // tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                    for (let t = 0; t < this.count; t++) {

                        tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                        tutorial_canvas_context.fillStyle = getRandomLightColortp()
                        tutorial_canvas_context.lineTo(this.joints[t].x, this.joints[t].y)
                    }
                    for (let t = this.count.length; t > 0; t--) {

                        tutorial_canvas_context.strokeStyle = getRandomLightColortp()
                        tutorial_canvas_context.fillStyle = getRandomLightColortp()
                        tutorial_canvas_context.lineTo(this.joints[t].x, this.joints[t].y)
                    }
                    tutorial_canvas_context.lineTo(this.joints[0].x, this.joints[0].y)
                    tutorial_canvas_context.stroke()
                    tutorial_canvas_context.fill()

                    tutorial_canvas_context.lineWidth = 0
                    for (let t = 1; t < 2; t++) {
                        tutorial_canvas_context.fillStyle = getRandomLightColortp()
                        if (typeof this.joints[t] != "undefined") {
                            this.joints[t].color = getRandomLightColortp()
                            this.joints[t].draw()
                        }


                    }
                }
            }
        }
    }


    class Trianglex {
        constructor(x, y, color, length) {
            this.x = x
            this.y = y
            this.color = color
            this.length = length * 3
            this.x1 = this.x + this.length * 2
            this.x2 = this.x - this.length * 5
            this.tip = this.y - this.length
            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
            this.width = this.length * 7
            this.height = this.length

        }

        draw() {
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
            tutorial_canvas_context.drawImage(rampimg2, 0, 0, rampimg2.width, rampimg2.height, this.x2, this.tip, this.width, this.height)
        }

        isPointInside(point) {
            if (point.x <= this.x1) {
                if (point.y >= this.tip) {
                    if (point.y <= this.y) {
                        if (point.x >= this.x2) {
                            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
                            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
                            this.basey = point.y - this.tip
                            this.basex = point.x - this.x
                            if (this.basex == 0) {
                                return true
                            }
                            this.slope = this.basey / this.basex
                            if (this.slope >= this.accept1) {
                                return true
                            } else if (this.slope <= this.accept2) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }

    class Triangle90 {
        constructor(x, y, color, length) {
            this.x = x
            this.y = y
            this.color = color
            this.length = length
            this.x1 = this.x
            this.x2 = this.x - this.length * 10
            this.tip = this.y - this.length * 2.5
            this.width = length * 10
            this.height = length * 2.5
            // this.accept1 = (this.y-this.tip)/(this.x1-this.x)
            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)

        }

        draw() {
            tutorial_canvas_context.drawImage(ramp90, 0, 0, ramp90.width, ramp90.height, this.x2, this.tip, this.width, this.height)
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

        isPointInside(point) {
            if (point.x <= this.x1) {
                if (point.y >= this.tip) {
                    if (point.y <= this.y) {
                        if (point.x >= this.x2) {
                            // this.accept1 = (this.y-this.tip)/(this.x1-this.x)
                            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
                            this.basey = point.y - this.tip
                            this.basex = point.x - this.x
                            if (this.basex == 0) {
                                return true
                            }
                            this.slope = this.basey / this.basex
                            if (this.slope <= this.accept2) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }

    class Triangle90l {
        constructor(x, y, color, length) {
            this.x = x
            this.y = y
            this.color = color
            this.length = length
            this.x1 = this.x + this.length * 10
            this.x2 = this.x
            this.tip = this.y - this.length * 2.5
            this.width = length * 10
            this.height = length * 2.5
            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
            // this.accept2 =  (this.y-this.tip)/(this.x2-this.x)

        }

        draw() {
            tutorial_canvas_context.drawImage(ramp90l, 0, 0, ramp90l.width, ramp90l.height, this.x, this.tip, this.width, this.height)
        }

        isPointInside(point) {
            if (point.x <= this.x1) {
                if (point.y >= this.tip) {
                    if (point.y <= this.y) {
                        if (point.x >= this.x2) {
                            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
                            //    this.accept2 = (this.y-this.tip)/(this.x2-this.x)
                            this.basey = point.y - this.tip
                            this.basex = point.x - this.x
                            if (this.basex == 0) {
                                return true
                            }
                            this.slope = this.basey / this.basex
                            if (this.slope >= this.accept1) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }






    class Triangle {
        constructor(x, y, color, length) {
            this.x = x
            this.y = y
            this.color = color
            this.length = length
            this.x1 = this.x + this.length * 5
            this.x2 = this.x - this.length * 5
            this.tip = this.y - this.length
            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)

        }

        draw() {
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

        isPointInside(point) {
            if (point.x <= this.x1) {
                if (point.y >= this.tip) {
                    if (point.y <= this.y) {
                        if (point.x >= this.x2) {
                            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
                            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
                            this.basey = point.y - this.tip
                            this.basex = point.x - this.x
                            if (this.basex == 0) {
                                return true
                            }
                            this.slope = this.basey / this.basex
                            if (this.slope >= this.accept1) {
                                return true
                            } else if (this.slope <= this.accept2) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }



    class Swimmer {
        constructor(x, y) {
            this.type = 2//Math.floor(Math.random()*3)
            this.anchor = {}
            this.anchor.xdif = 0
            this.anchor.ydif = 0
            this.body = new Circlec(x, y, 15, "red")
            this.bodydraw = new Circlec(this.body.x, this.body.y, 22, "red")
            this.bodydrawhuge = new Circlec(this.body.x, this.body.y, this.body.radius + 17, "#AA00DD")
            this.marked = 0
            this.out = 0
            this.pops = []
            this.bopped = 0
            this.xrepelled = 0
            this.yrepelled = 0
        }

        pop() {
            let rotx = 0
            let roty = 0

            for (let g = 0; g < 7; g++) {
                let color
                if (this.type == 0) {
                    if (g % 2 == 0) {
                        color = "#AA00DD"
                    } else {
                        color = "#FFDD00"
                    }
                }
                if (this.type == 1) {
                    if (g % 2 == 0) {
                        color = "#1100DD"
                    } else {
                        color = "#DD0011"
                    }
                }
                if (this.type == 2) {
                    if (g % 2 == 0) {
                        color = "#FF0000"
                    } else {
                        color = "#00FF00"
                    }
                }
                const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius / 4, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 7
                roty += 2 * Math.PI / 7
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }
        move() {




            const link = new Line(pomao.body.x, pomao.body.y, this.body.x, this.body.y, "red", 1)
            if (link.hypotenuse() < 450) {
                if (this.type == 0) {
                    this.body.xmom += (pomao.body.x - this.body.x) / 1200
                    this.body.ymom += (pomao.body.y - this.body.y) / 1200
                }
                if (this.type == 1) {
                    this.body.xmom += (pomao.body.x - this.body.x) / 1000
                    this.body.ymom += (pomao.body.y - this.body.y) / 1200
                }
                if (this.type == 2) {
                    this.body.xmom += (pomao.body.x - this.body.x) / 1200
                    this.body.ymom += (pomao.body.y - this.body.y) / 1000
                }
                for (let t = 0; (Math.abs(this.body.xmom) + Math.abs(this.body.ymom)) < 2; t++) {
                    this.body.ymom *= 1.01
                    this.body.xmom *= 1.01
                }
                this.body.x += this.body.xmom
                this.body.y += this.body.ymom
            }
            this.body.xmom *= .955
            this.body.ymom *= .955

            this.xrepel = 0
            this.yrepel = 0


            if (this.bodydraw.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) {
                this.marked = 1
                this.body.radius *= .975
                if (this.anchor.xdif + this.anchor.ydif == 0) {
                    this.anchor.xdif = pomao.tongue.x - this.bodydraw.x
                    this.anchor.ydif = pomao.tongue.y - this.bodydraw.y
                    const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                    const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                    if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                        this.anchor.xdif = .001
                        this.anchor.ydif = 0
                    }
                }
            }
            if (this.bodydraw.repelCheck(pomao.body) && (this.bodydraw.repelCheck(pomao.tongue) || (this.marked == 1 || this.marked == 2))) {
                this.body.radius *= .9
                this.marked = 2
                pomao.diry = 1
            } else if (this.bodydraw.repelCheck(pomao.body) && !this.bodydraw.repelCheck(pomao.tongue)) {
                if (this.body.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){
                if (this.body.radius >= 15) {
                    if (pomao.disabled != 1) {
                        if (pomao.pounding != 10) {
                            pomao.body.xmom = -3 * (this.bump)
                            pomao.disabled = 1
                            pomao.hits--
                            pomao.body.ymom = -1.8
                            this.body.xmom = -pomao.body.xmom
                        }
                    } else {
                        if (this.bump * pomao.body.xmom > 0) {
                            pomao.body.xmom = -1.8 * (this.bump)
                            pomao.body.ymom = -1.8
                            this.body.xmom = -pomao.body.xmom
                        }
                    }
                }
                //   }
            }

            if (this.marked == 1) {
                this.body.x -= ((this.body.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.body.y -= ((this.body.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)
                this.anchor.xdif *= .97
                this.anchor.ydif *= .97
            }
            if (this.marked == 2) {
                this.body.x -= ((this.body.x - pomao.body.x) / 1.1)
                this.body.y -= ((this.body.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1
            }

            if (this.marked == 0) {
                for (let f = 0; f < swimmers.length; f++) {
                    if (this !== swimmers[f]) {
                        if (this.bodydraw.repelCheck(swimmers[f].bodydraw)) {
                            const distance = ((new Line(swimmers[f].body.x, swimmers[f].body.y, this.body.x, this.body.y, 1, "red")).hypotenuse()) - (swimmers[f].bodydraw.radius + this.bodydraw.radius)
                            const angleRadians = Math.atan2(swimmers[f].body.y - this.body.y, swimmers[f].body.x - this.body.x);
                            this.xrepel += (Math.cos(angleRadians) * distance) / 2
                            this.yrepel += (Math.sin(angleRadians) * distance) / 2
                            // swimmers[f].xrepelled = 1
                        }
                    }
                }

                if (this.xrepelled == 0) {
                    if (this.type == 0) {
                        this.body.x += this.xrepel
                        this.body.y += this.yrepel
                    } else if (this.type == 1) {
                        this.body.x += this.xrepel
                        this.body.x += this.yrepel / 2
                    } else if (this.type == 2) {
                        this.body.y += this.xrepel / 2
                        this.body.y += this.yrepel
                    }
                }

                this.xrepelled = 0
                this.yrepelled = 0

            }
        }
        clean() {

            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                if (this.bodydrawhuge.repelCheck(shockfriendly.shocksl[t])) {
                    if (this.out <= 0) {
                        this.pop()
                    }
                    this.out = 45
                    break
                }

            }
            for (let t = 0; t < shockfriendly.shocksr.length; t++) {
                if (this.bodydrawhuge.repelCheck(shockfriendly.shocksr[t])) {
                    if (this.out <= 0) {
                        this.pop()
                    }
                    this.out = 45
                    break
                }

            }
            for (let t = 0; t < pomao.thrown.length; t++) {
                if (this.bodydraw.repelCheck(pomao.thrown[t])) {
                    //    boys[k].pop()
                    //    deadboys.push(boys[k])
                    //     boys.splice(k,1)
                    if (this.out <= 0) {
                        this.pop()
                    }
                    this.out = 45
                    break
                }

            }

            if (this.body.radius <= 1.5) {
                this.out = 1
                pomao.hits += 1
                if (pomao.hits > 9) {
                    pomao.hits = 9
                }
                if (pomao.eggs.length < 16) {

                    const seepx = new Seed(pomao.eggs[pomao.eggs.length - 1])
                    pomao.eggs.push(seepx)
                }
            }

            if (this.out == 1) {

                swimmers.splice(swimmers.indexOf(this), 1)
            } else if (this.out > 1) {
                this.popdraw()
            }
            this.out--
        }
        draw() {
            if (this.out <= 0) {

                this.move()
                this.bodydraw = new Circlec(this.body.x, this.body.y, this.body.radius + 7, "#AA00DD")
                this.bodydrawhuge = new Circlec(this.body.x, this.body.y, this.body.radius + 17, "#AA00DD")
                tutorial_canvas_context.drawImage(rimgs[this.type], 0, 0, rimgs[0].width, rimgs[0].height, this.body.x - (24 * (this.body.radius * .06666666666)), this.body.y - (24 * (this.body.radius * .06666666666)), 52 * (this.body.radius * .06666666666), 52 * (this.body.radius * .06666666666))

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
            this.type = Math.floor(Math.random() * 34)
            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width / 2.5, "blue")
            this.jumpcountercap = Math.floor(Math.random() * 700) + 100
            this.jumpcounter = Math.floor(Math.random() * this.jumpcountercap)
        }
        pop() {
            let rotx = 0
            let roty = 0
            const color = getRandomLightColor()
            for (let g = 0; g < 7; g++) {
                const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius / 4, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 7
                roty += 2 * Math.PI / 7
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }

        gravity() {


            if (this.dry == 1) {
                if (this.ymom > 0) {
                    this.ymom = 0
                }
                if (this.jumping == 0) {
                    this.timeloopx = 0
                }
                this.jumping = 0
            } else {
                this.jumping = 1
                this.ymom += .1
            }
            this.dry = 0
            this.rstorage = this.body.radius
            this.body.radius = this.height * 1.15
            for (let t = 0; t < floors.length; t++) {

                if (squarecirclefeet(floors[t], this.body)) {
                    if (Math.abs((this.y + this.body.radius) - floors[t].y) <= this.body.radius) {
                        if (this.ymom > -.3) {
                            this.y = floors[t].y - this.body.radius
                            this.dry = 1
                        }
                        break
                    }
                }
            }

            // this.body.radius =  this.height/2.8
            this.footspot = new Circle(this.body.x, this.body.y + ((this.body.radius / 2) - .01), 3, "red")
            // this.body.draw()
            // this.footspot.draw()
            for (let t = 0; t < ramps.length; t++) {
                if (ramps[t].isPointInside(this.footspot)) {
                    for (let k = 0; k < 10000; k++) {

                        this.footspot = new Circle(this.body.x, this.body.y + ((this.body.radius / 2) - 1), 3, "red")
                        if (ramps[t].isPointInside(this.footspot)) {

                            // if(this.footspot.y - this.body.radius  < this.body.y + this.body.radius ){

                            this.body.y = this.footspot.y - this.body.radius / 2
                            this.y = this.body.y - this.height / 2.3

                            // }

                        }
                    }

                    this.dry = 1
                    // break
                }
            }
            this.body.radius = this.body.radius / 2
            for (let t = 0; t < floors.length; t++) {

                if (squarecirclefeet(floors[t], this.body)) {
                    if (Math.abs((this.y + this.body.radius) - floors[t].y) <= this.body.radius) {
                        if (this.ymom > -.3) {
                            if (floors[t].y - this.body.radius < this.y) {
                                this.y = floors[t].y - this.body.radius
                                this.dry = 1
                            }
                        }
                        break
                    }
                }
            }
            this.body.radius = this.rstorage
        }
        move() {

            this.xrepel = 0
            this.yrepel = 0

            this.rstorage = this.body.radius
            this.body.radius = 20



            for (let f = 0; f < boys.length; f++) {
                if (this !== boys[f]) {
                    if (this.body.repelCheck(boys[f].body)) {
                        const distance = ((new Line(boys[f].body.x, boys[f].body.y, this.body.x, this.body.y, 1, "red")).hypotenuse()) - (boys[f].body.radius + this.body.radius)
                        const angleRadians = Math.atan2(boys[f].body.y - this.body.y, boys[f].body.x - this.body.x);
                        this.xrepel += (Math.cos(angleRadians) * distance) / 1.25
                        this.yrepel += (Math.sin(angleRadians) * distance) / 1.25
                    }
                }
            }



            this.body.radius = this.rstorage
            this.rstorage = this.body.radius
            this.body.radius = this.body.radius / 2


            this.blocked = 0
            for (let t = 0; t < walls.length; t++) {
                if (squarecircleface(walls[t], this.body)) {

                    if (this.body.x > walls[t].x) {
                        this.blocked = 1
                    } else {
                        this.blocked = -1
                    }
                }
            }




            if (this.blocked == 0) {
                this.x += this.xmom
                this.x += this.xrepel
            } else if (this.blocked == 1) {
                if (this.xmom > 0) {
                    this.x += this.xmom
                }
                if (this.xrepel > 0) {
                    this.x += this.xrepel
                }
            } else {
                if (this.xmom < 0) {
                    this.x += this.xmom
                }

                if (this.xrepel < 0) {
                    this.x += this.xrepel
                }
            }

            this.body.radius = this.rstorage
            this.y += this.ymom
            this.ymom *= .99
            this.xmom *= .99
            if (Math.abs(this.xmom) < 1.5) {
                if (this.dry == 1) {
                    this.xmom = -1 * (this.x - pomao.body.x)
                    for (let t = 0; Math.abs(this.xmom) > 3; t++) {
                        this.xmom *= .99
                    }
                }
            }
            this.jumpcounter++
            if (this.jumpcounter % this.jumpcountercap == 0) {
                if (this.dry == 1) {
                    this.ymom = -7.1
                }
            }
        }
        draw() {

            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width, "blue")
            if (this.marked == 0) {
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
            const cols = 34
            const rows = 1



            const width = sheetwidth / cols
            const height = sheetheight / rows


            const srcx = Math.floor(this.type) * width
            const srcy = 0 //Math.floor(this.type2)*height

            //   if(this.type < 17){


            // tutorial_canvas_context.drawImage(pomaoimg, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )


            this.timeloop += .1

            if (this.marked == 3) {

            } else {
                tutorial_canvas_context.drawImage(boysprites, srcx, srcy, width, height, this.x, (10 + this.y) - (Math.sin(this.timeloop)), this.width, this.height + (Math.sin(this.timeloop)))
            }


            //   }



            this.bodyx = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width / 2.5, "blue")

            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 1.5 + (this.width / 5), this.width / 2.4, "blue")
            // this.body.draw()
            tutorial_canvas_context.drawImage(boysprites, srcx, srcy, width, height, this.x, (10 + this.y) - (Math.sin(this.timeloop)), this.width, this.height + (Math.sin(this.timeloop)))
            // this.bodyx.draw()
            if (this.body.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) {
                // this.x += pomao.tonguexmom -(((this.body.x-(this.width/2))-pomao.body.x)/100)
                // this.y += pomao.tongueymom -(((this.body.y-(this.height/2))-pomao.body.y)/100)
                // this.move()
                if (this.anchor.xdif + this.anchor.ydif == 0) {
                    this.anchor.xdif = pomao.tongue.x - this.body.x
                    this.anchor.ydif = pomao.tongue.y - this.body.y
                    const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                    const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                    if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                        this.anchor.xdif = .001
                        this.anchor.ydif = 0
                    }
                }
                // //console.log(this.anchor)
                this.marked = 1
                this.width *= .995
                this.height *= .995
                // //////console.log(this)


            }

            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2 + (this.width / 5), this.width / 1.8, "blue")
            if (this.body.repelCheck(pomao.bodytight) && ((this.body.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) || (this.marked == 1 || this.marked == 2))) {
                // this.x  -= (((this.body.x-(this.width/2))-pomao.body.x)/100)
                // this.y -= (((this.body.y-(this.height/2))-pomao.body.y)/100)
                this.width *= .91
                this.height *= .91
                this.marked = 2
                pomao.diry = 1
            } else if (this.body.repelCheck(pomao.body) && !this.body.repelCheck(pomao.tongue)) {
                //   //////console.log(pomao.dir)

                if (this.body.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){  
                if (this.width >= 50) {
                    if (pomao.disabled != 1) {
                        if (pomao.pounding != 10) {
                            pomao.body.xmom = -(3 + Math.abs(this.xmom)) * (this.bump)
                            pomao.disabled = 1
                            pomao.hits--
                            pomao.body.sxmom = 0
                            pomao.body.symom = 0
                            pomao.body.ymom = -1.8
                            this.xmom = -pomao.body.xmom * .8
                        }
                    } else {
                        if (this.bump * pomao.body.xmom > 0) {
                            pomao.body.xmom = -1.8 * (this.bump)
                            pomao.body.ymom = -1.8
                            this.body.xmom = -pomao.body.xmom
                        }
                    }
                }
            }
            // //////console.log(pomao.dir, pomao.body.xmom)


            if (this.marked == 1) {
                this.x -= ((this.bodyx.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.y -= (((this.bodyx.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)) + 10
                // pomao.diry = 1
                this.anchor.xdif *= .97
                this.anchor.ydif *= .97

            }
            if (this.marked == 2) {
                this.x -= ((this.bodyx.x - pomao.body.x) / 1.1)
                this.y -= ((this.bodyx.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1


                // //////console.log(pomao)
            }
            //   if(this.marked == 3){
            //     this.x  -= ((this.body.x-pomao.body.x)/3.5)
            //     this.y -= ((this.body.y-pomao.body.y)/3.5)
            //     this.marked = 3
            //     // pomao.diry = 1


            //     // //////console.log(pomao)
            //   }


        }
        clean() {
            if (this.body.repelCheck(pomao.body)) {
                if (this.width < 30) {
                    boys.splice(boys.indexOf(this), 1)
                    //sound (obnoxious)
                    // if (jazz.duration > 0 && !jazz.paused) {
                    //     //////console.log("top")
                    //         jazz2.play()
                    // }else{
                    //     //////console.log("bottom")
                    //     jazz.play()
                    // }
                    // jazz2.play()
                    pomao.hits += 1
                    if (pomao.hits > 9) {
                        pomao.hits = 9
                    }
                    if (pomao.eggs.length < 16) {

                        const seepx = new Seed(pomao.eggs[pomao.eggs.length - 1])
                        pomao.eggs.push(seepx)
                    }
                }
            }
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
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

    class Magneato {
        constructor(x, y) {
            this.center = new Circle(x, y, 0, "transparent")
            this.positron = new Bosscircle(x + .01, y, 25, "magenta")
            this.electron = new Bosscircle(x - .01, y, 25, "yellow")
            this.electron.ymom = 25 * Math.random()
            this.positron.ymom = -30 * Math.random()
            this.electron.xmom = 25 * Math.random()
            this.positron.xmom = -25 * Math.random()
            this.body = {}
            this.flipper = -1
            this.counter = 0

        }
        physics() {

            if (this.counter % 1 == 0) {
                this.link = new LineOP(this.positron, this.electron)
                this.linkhyp = this.link.hypotenuse()
                this.positron.xmom -= (this.positron.x - this.electron.x) / (this.linkhyp * .5) * .10
                this.electron.xmom -= (this.electron.x - this.positron.x) / (this.linkhyp * .5) * .10
                this.positron.ymom -= (this.positron.y - this.electron.y) / (this.linkhyp * .10)
                this.electron.ymom -= (this.electron.y - this.positron.y) / (this.linkhyp * .10)

                this.positron.movenofric()
                this.electron.movenofric()
                if (this.electron.x > 7000) {
                    if (this.electron.xmom > 0) {
                        this.electron.xmom *= -1
                    }
                }
                if (this.electron.x < -2050) {
                    if (this.electron.xmom < 0) {
                        this.electron.xmom *= -1
                    }
                }
                if (this.electron.y < -5050) {
                    if (this.electron.ymom < 0) {
                        this.electron.ymom *= -1
                    }
                }
                if (this.electron.y + this.electron.radius > floors[(Math.floor((2100 + this.electron.x) / 3)) % floors.length].y) {
                    if (this.electron.ymom > 0) {
                        this.electron.ymom *= -1
                    }
                }
                if (this.positron.x > 7000) {
                    if (this.positron.xmom > 0) {
                        this.positron.xmom *= -1
                    }
                }
                if (this.positron.x < -2050) {
                    if (this.positron.xmom < 0) {
                        this.positron.xmom *= -1
                    }
                }
                if (this.positron.y < -5050) {
                    if (this.positron.ymom < 0) {
                        this.positron.ymom *= -1
                    }
                }
                if (this.positron.y + this.positron.radius > floors[(Math.floor((2100 + this.positron.x) / 3)) % floors.length].y) {
                    if (this.positron.ymom > 0) {
                        this.positron.ymom *= -1
                    }
                }
            }
            this.counter++
            this.link = new LineOP(this.positron, this.electron)
            this.linkhyp = this.link.hypotenuse()
            this.body = castBetween(this.positron, this.electron, this.linkhyp / (this.electron.radius * .4), this.electron.radius * .2)
            this.body.shapes.push(this.positron)
            this.body.shapes.push(this.electron)
            let tonguelink = new LineOP(pomao.body, pomao.tongue)


            let link1 = new LineOP(pomao.body, this.positron)
            let link2 = new LineOP(pomao.body, this.electron)

            // if(Math.max(link1.hypotenuse(),link2.hypotenuse()) >= Math.max(this.linkhyp, tonguelink)){
            if (this.body.isPointInside(pomao.body)) {


                let liner = new LineOP(this.body.isPointInsideTargetedShape(pomao.body), pomao.body)

                if (keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) {
                } else {
                    pomao.dry = 1
                    pomao.grounded = 1
                    pomao.jumping = 0

                    if (liner.hypotenuse() < (this.body.isPointInsideTargetedShape(pomao.body).radius + pomao.body.radius)) {
                        pomao.body.y -= 3
                        if ((Math.min(this.electron.ymom, this.positron.ymom)) < 0) {
                            pomao.body.y += (Math.min(this.electron.ymom, this.positron.ymom) * .01)
                            tutorial_canvas_context.translate(0, -(Math.min(this.electron.ymom, this.positron.ymom) * .01))
                            pomao.body.x += ((this.electron.xmom + this.positron.xmom) * .01)
                            tutorial_canvas_context.translate(-((this.electron.xmom + this.positron.xmom) * .01), 0)
                        }
                        tutorial_canvas_context.translate(0, 3)
                        if (!this.body.isPointInside(pomao.body)) {
                            pomao.body.y += 6
                            tutorial_canvas_context.translate(0, -6)
                        }
                    }
                    if (pomao.body.ymom > 0) {
                        pomao.body.ymom = 0
                    }
                    if (pomao.body.symom < 0) {
                        pomao.body.symom = 0
                    }
                }
            }
            if (tonguelink.hypotenuse() > 20) {

                if ((this.body.isPointInside(pomao.tongue) || ((pomao.tonguebox.isInsideOfShape(this.body) || this.body.isPointInside(pomao.tongue))))) {
                    if (pomao.tongueymom < 0) {
                        if (Math.abs(pomao.tonguey) > 1) {
                            pomao.body.symom += pomao.tongueymom * 1.1
                        }
                        if (Math.abs(pomao.tonguex) > 15) {
                            if (pomao.dir == -1) {
                                pomao.body.sxmom -= Math.abs(pomao.tonguexmom * 3)
                            } else {
                                pomao.body.sxmom += Math.abs(pomao.tonguexmom * 3)
                            }
                        }
                    } else {
                        if (Math.abs(pomao.tonguey) > 1) {
                            pomao.body.symom -= pomao.tongueymom * 1.1
                        }
                        if (Math.abs(pomao.tonguex) > 15) {
                            if (pomao.dir == -1) {
                                pomao.body.sxmom -= Math.abs(pomao.tonguexmom * 3)
                            } else {
                                pomao.body.sxmom += Math.abs(pomao.tonguexmom * 3)
                            }
                        }

                    }
                    if (pomao.body.ymom > 0) {
                        pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                    }

                    pomao.body.ymom = 0
                    pomao.body.xmom *= .975
                    // pomao.hng = 0  // infiinite flutter?
                    pomao.dry = 1
                    pomao.body.symom -= .0005

                    pomao.tongueymom *= .49
                    pomao.tonguexmom *= .49
                    // if (this.electron.isPointInside(pomao.tongue)) {
                    //     this.electron.xmom += pomao.body.sxmom * .5
                    // }
                }
                // }
            }
            // }
        }
        draw() {
            this.body = castBetween(this.positron, this.electron, this.linkhyp / (this.electron.radius * .4), this.electron.radius * .2)
            this.body.shapes.push(this.positron)
            this.body.shapes.push(this.electron)
            // this.body.draw()
            this.link = new LineOP(this.positron, this.electron, "gray", Math.min((((this.electron.radius * .4) / this.linkhyp) * 64), 100))
            this.link.draw()
            if (this.positron.x > this.electron.x + (this.positron.radius + this.electron.radius) && this.positron.xmom > this.electron.xmom) {
                this.flipper = -1
            }
            if (this.electron.x > this.positron.x + (this.positron.radius + this.electron.radius) && this.electron.xmom > this.positron.xmom) {
                this.flipper = 1
            }
            if (this.flipper == 1) {
                this.positron.draw()
                this.electron.draw()
            } else {
                this.electron.draw()
                this.positron.draw()
            }

        }



    }




    class Cactus {
        constructor(x, y, height, width, color) {
            this.parent = 0
            this.child = 0
            this.pops = []
            this.squish = []
            this.x = x
            this.xdisp = 0
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
            this.type = 0 //Math.floor(Math.random()*17)
            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width / 2.5, "blue")
            this.jumpcountercap = Math.floor(Math.random() * 700) + 100
            this.jumpcounter = Math.floor(Math.random() * this.jumpcountercap)
            this.cactus = 1
            this.blocked = 0
        }
        pop() {
            let rotx = 0
            let roty = 0
            let color = getRandomLightColor()
            if (Math.random() < .2) {
                color = "green"
            }
            for (let g = 0; g < 5; g++) {
                const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius / 4, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 5
                roty += 2 * Math.PI / 5
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }

        gravity() {

            if (this.dry == 1) {
                if (this.ymom > 0) {
                    this.ymom = 0
                }
                if (this.jumping == 0) {
                    this.timeloopx = 0
                }
                this.jumping = 0
            } else {
                this.jumping = 1
                if (this.parent == 0) {
                    this.ymom += .1
                }
            }
            this.dry = 0
            this.rstorage = this.body.radius
            this.body.radius = this.height * 1.15
            for (let t = 0; t < floors.length; t++) {
                if (squarecirclefeet(floors[t], this.body)) {
                    if (Math.abs((this.y + this.body.radius) - floors[t].y) <= this.body.radius) {
                        if (this.ymom > -.3) {
                            this.y = floors[t].y - this.body.radius
                            this.dry = 1
                        }
                        break
                    }
                }
            }
            this.footspot = new Circle(this.body.x, this.body.y + ((this.body.radius / 2) - .01), 3, "red")
            for (let t = 0; t < ramps.length; t++) {
                if (ramps[t].isPointInside(this.footspot)) {
                    for (let k = 0; k < 10000; k++) {

                        this.footspot = new Circle(this.body.x, this.body.y + ((this.body.radius / 2) - 1), 3, "red")
                        if (ramps[t].isPointInside(this.footspot)) {

                            // if(this.footspot.y - this.body.radius  < this.body.y + this.body.radius ){

                            this.body.y = this.footspot.y - this.body.radius / 2
                            this.y = this.body.y - this.height / 2.3

                            // }

                        }
                    }

                    this.dry = 1
                    // break
                }
            }
            this.body.radius = this.body.radius / 2
            for (let t = 0; t < floors.length; t++) {

                if (squarecirclefeet(floors[t], this.body)) {
                    if (Math.abs((this.y + this.body.radius) - floors[t].y) <= this.body.radius) {
                        if (this.ymom > -.3) {
                            if (floors[t].y - this.body.radius < this.y) {
                                this.y = floors[t].y - this.body.radius
                                this.dry = 1
                            }
                        }
                        break
                    }
                }
            }
            this.body.radius = this.rstorage
        }
        move() {

            if (this.parent.marked == 1 && this.parent != 0) {  // !=0
                this.ymom -= 5 + Math.random()  // 10 //5
            }
            if (!boys.includes(this.parent) || this.parent.marked == 1) {  // != 0

                this.parent = 0
            }
            if (!boys.includes(this.child) || this.child.marked != 0) {

                this.child = 0
            }
            if (this.parent.child != this.child.parent) {
                if (this.child != 0) {

                    this.parent = 0
                }
            }
            if (this.parent == 0) {

                this.xrepel = 0
                this.yrepel = 0

                this.rstorage = this.body.radius
                this.body.radius = 20



                for (let f = 0; f < boys.length; f++) {
                    if (this !== boys[f]) {
                        if (this.body.repelCheck(boys[f].body)) {
                            const distance = ((new Line(boys[f].body.x, boys[f].body.y, this.body.x, this.body.y, 1, "red")).hypotenuse()) - (boys[f].body.radius + this.body.radius)
                            const angleRadians = Math.atan2(boys[f].body.y - this.body.y, boys[f].body.x - this.body.x);
                            this.xrepel += (Math.cos(angleRadians) * distance) / 1.25
                            this.yrepel += (Math.sin(angleRadians) * distance) / 1.25
                        }
                    }
                }



                this.body.radius = this.rstorage
                this.rstorage = this.body.radius
                this.body.radius = this.body.radius / 2


                if (this.child == 0 || this.child.blocked == 0) {
                    this.blocked = 0
                }
                for (let t = 0; t < walls.length; t++) {
                    if (squarecircleface(walls[t], this.body)) {
                        if (this.body.x > walls[t].x) {
                            this.blocked = 1
                        } else {
                            this.blocked = -1
                        }
                    }
                }

                if (this.blocked == 1) {
                    if (this.parent != 0) {
                        this.parent.blocked = 1
                    }
                }
                if (this.blocked == -1) {
                    if (this.parent != 0) {
                        this.parent.blocked = -1
                    }
                }





                if (this.blocked == 0) {
                    this.x += this.xmom
                    this.x += this.xrepel
                } else if (this.blocked == 1) {
                    if (this.xmom > 0) {
                        this.x += this.xmom
                    }
                    if (this.xrepel > 0) {
                        this.x += this.xrepel
                    }
                } else {
                    if (this.xmom < 0) {
                        this.x += this.xmom
                    }

                    if (this.xrepel < 0) {
                        this.x += this.xrepel
                    }
                }

                this.body.radius = this.rstorage
                this.y += this.ymom
                this.ymom *= .99
                this.xmom *= .99
                if (Math.abs(this.xmom) < .5) {
                    if (this.dry == 1) {
                        this.xmom = -1 * (this.x - pomao.body.x)
                        for (let t = 0; Math.abs(this.xmom) > 1.5; t++) {
                            this.xmom *= .985
                        }
                    }
                }
                this.jumpcounter++
                if (this.jumpcounter % this.jumpcountercap == 0) {
                    if (this.dry == 1) {
                        this.ymom = -6.2 + Math.random() //7.1  //6.7
                    }
                }
            } else {
                this.xdisp += 3 * (Math.random() - .5)
                this.xdisp *= .9
                this.x = this.parent.x + this.xdisp
                this.y = this.parent.y - this.height

                this.body.radius = this.rstorage
                this.rstorage = this.body.radius
                this.body.radius = this.body.radius / 2


                if (this.child == 0 || this.child.blocked == 0) { //
                    this.blocked = 0
                }
                for (let t = 0; t < walls.length; t++) {
                    if (Math.abs(walls[t].x - this.body.x) < 100) {
                        if (squarecircleface(walls[t], this.body)) {

                            if (this.body.x > walls[t].x) {
                                this.blocked = 1
                                if (this.parent != 0) {
                                    this.parent.blocked = 1
                                }
                            } else {
                                this.blocked = -1
                                if (this.parent != 0) {
                                    this.parent.blocked = -1
                                }
                            }
                        }
                    }
                }

                if (this.blocked == 1) {
                    if (this.parent != 0) {
                        this.parent.blocked = 1
                    }
                }
                if (this.blocked == -1) {
                    if (this.parent != 0) {
                        this.parent.blocked = -1
                    }
                }

                for (let f = 0; f < boys.length; f++) {
                    if (this !== boys[f]) {
                        if (this.body.repelCheck(boys[f].body)) {
                            const distance = ((new Line(boys[f].body.x, boys[f].body.y, this.body.x, this.body.y, 1, "red")).hypotenuse()) - (boys[f].body.radius + this.body.radius)
                            const angleRadians = Math.atan2(boys[f].body.y - this.body.y, boys[f].body.x - this.body.x);
                            this.xrepel += (Math.cos(angleRadians) * distance) / 1.25
                            this.yrepel += (Math.sin(angleRadians) * distance) / 1.25
                        }
                    }
                }

                if (this.xrepel != 0) {
                    this.parent.xrepel += this.xrepel
                    this.parent.yrepel += this.yrepel
                    this.xrepel = 0
                    this.yrepel = 0
                }


            }


            if (this.parent.marked == 2 && this.parent != 0) {  // !=0
                this.ymom -= 5 + Math.random()  // 10 //5
            }
            if (!boys.includes(this.parent) || this.parent.marked == 2) {  // != 0

                this.parent = 0
            }
            if (!boys.includes(this.child) || this.child.marked != 0) {

                this.child = 0
            }
            if (this.parent.child != this.child.parent) {
                if (this.child != 0) {

                    this.parent = 0
                }
            }
        }
        draw() {

            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width, "blue")
            if (this.marked == 0) {
                this.gravity()
                this.move()
            }
            const sheetwidth = boysprites.width
            const sheetheight = boysprites.height
            const cols = 17
            const rows = 1



            const width = sheetwidth / cols
            const height = sheetheight / rows


            const srcx = Math.floor(this.type) * width
            const srcy = 0 //Math.floor(this.type2)*height

            //   if(this.type < 17){


            // tutorial_canvas_context.drawImage(pomaoimg, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )


            // this.timeloop+=.1

            if (this.marked == 3) {

            } else {
                if (this.child != 0) {
                    tutorial_canvas_context.drawImage(cactusimg, 0, 0, 48, 48, this.x, (10 + this.y) - (Math.sin(this.timeloop)), this.width, this.height + (Math.sin(this.timeloop)))

                } else {
                    tutorial_canvas_context.drawImage(cactusimgtop, 0, 0, 48, 48, this.x, (10 + this.y) - (Math.sin(this.timeloop)), this.width, this.height + (Math.sin(this.timeloop)))
                }
            }


            //   }



            this.bodyx = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width / 2.5, "blue")

            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 1.5 + (this.width / 5), this.width / 1.4, "blue")  //2.4
            // this.body.draw()
            // tutorial_canvas_context.drawImage(boysprites, srcx, srcy, width, height, this.x, (10+this.y)-(Math.sin(this.timeloop)), this.width, this.height+(Math.sin(this.timeloop)))
            // this.bodyx.draw()
            // this.body.draw()
            if (this.body.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) {
                // this.x += pomao.tonguexmom -(((this.body.x-(this.width/2))-pomao.body.x)/100)
                // this.y += pomao.tongueymom -(((this.body.y-(this.height/2))-pomao.body.y)/100)
                // this.move()
                if (this.anchor.xdif + this.anchor.ydif == 0) {
                    this.anchor.xdif = pomao.tongue.x - this.body.x
                    this.anchor.ydif = pomao.tongue.y - this.body.y
                    const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                    const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                    if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                        this.anchor.xdif = .001
                        this.anchor.ydif = 0
                    }
                }
                // //console.log(this.anchor)
                this.marked = 1
                this.width *= .995
                this.height *= .995
                // //////console.log(this)


            }

            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2 + (this.width / 5), this.width / 1.8, "blue")
            // this.body.draw()
            // pomao.body.draw()
            if (this.body.repelCheck(pomao.body) && ((this.body.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) || (this.marked == 1 || this.marked == 2))) {  //bodytight
                // this.x  -= (((this.body.x-(this.width/2))-pomao.body.x)/100)
                // this.y -= (((this.body.y-(this.height/2))-pomao.body.y)/100)
                this.width *= .91
                this.height *= .91
                this.marked = 2
                pomao.diry = 1
            } else if (this.body.repelCheck(pomao.body) && !this.body.repelCheck(pomao.tongue)) {
                //   //////console.log(pomao.dir)

                if (this.body.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){  
                if (this.width >= 40) {
                    if (pomao.disabled != 1) {
                        if (pomao.pounding != 10) {
                            pomao.body.xmom = -(3 + Math.abs(this.xmom)) * (this.bump)
                            pomao.disabled = 1
                            pomao.hits -= 2
                            pomao.body.sxmom = 0
                            pomao.body.symom = 0
                            pomao.body.ymom = -1.8
                            this.xmom = -pomao.body.xmom * .8
                        }
                    } else {
                        if (this.bump * pomao.body.xmom > 0) {
                            pomao.body.xmom = -1.8 * (this.bump)
                            pomao.body.ymom = -1.8
                            this.body.xmom = -pomao.body.xmom
                        }
                    }
                }
            }
            // //////console.log(pomao.dir, pomao.body.xmom)


            if (this.marked == 1) {
                this.x -= ((this.bodyx.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.y -= (((this.bodyx.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)) + 10
                this.anchor.xdif *= .95
                this.anchor.ydif *= .95
                // pomao.diry = 1

            }
            if (this.marked == 2) {
                this.x -= ((this.bodyx.x - pomao.body.x) / 1.1)
                this.y -= ((this.bodyx.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1


                // //////console.log(pomao)
            }
            //   if(this.marked == 3){
            //     this.x  -= ((this.body.x-pomao.body.x)/3.5)
            //     this.y -= ((this.body.y-pomao.body.y)/3.5)
            //     this.marked = 3
            //     // pomao.diry = 1


            //     // //////console.log(pomao)
            //   }


        }
        clean() {
            if (this.body.repelCheck(pomao.body)) {
                if (this.width < 30) {
                    boys.splice(boys.indexOf(this), 1)
                    //sound (obnoxious)
                    // if (jazz.duration > 0 && !jazz.paused) {
                    //     //////console.log("top")
                    //         jazz2.play()
                    // }else{
                    //     //////console.log("bottom")
                    //     jazz.play()
                    // }
                    // jazz2.play()
                    pomao.hits += 1
                    if (pomao.hits > 9) {
                        pomao.hits = 9
                    }
                    if (pomao.eggs.length < 16) {

                        const seepx = new Seed(pomao.eggs[pomao.eggs.length - 1])
                        pomao.eggs.push(seepx)
                    }
                }
            }
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
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
            this.type = Math.floor(Math.random() * 10)
            this.type2 = Math.floor(Math.random() * 10)
            this.loopoffset = Math.random() * Math.PI * 2

            if (this.type == 1) {
                if (this.type2 == 4) {
                    if (Math.random() < .5) {
                        this.type = Math.floor(Math.random() * 10)
                        this.type2 = Math.floor(Math.random() * 10)
                    }
                }
            }

            if (this.type2 == 9) {
                if (Math.random() < .99) {
                    this.type2 = Math.floor(Math.random() * 9)
                }
            }
            // this.type2 = 9
            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width / 2.5, "blue")
            this.bodybig = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width / 1.5, "blue")
        }
        draw() {
            // tutorial_canvas_context.lineWidth = 1
            // tutorial_canvas_context.fillStyle = this.color
            // tutorial_canvas_context.strokeStyle = "red"
            // // tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
            // tutorial_canvas_context.strokeRect(this.x, this.y, this.width, this.height)

            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width / 2.5, "blue")
            // this.body.draw()
            const sheetwidth = fruitsprites.width
            const sheetheight = fruitsprites.height
            const cols = 10
            const rows = 10



            const width = sheetwidth / cols
            const height = sheetheight / rows


            const srcx = Math.floor(this.type) * width
            const srcy = Math.floor(this.type2) * height

            //   this.type2 = 9
            if (this.type < 10) {


                if (!keysPressed['q']) {
                    if (pomao.tripping <= 0) {
                        tutorial_canvas_context.drawImage(fruitsprites, srcx, srcy, width, height, this.x, this.y, this.width, this.height)
                    } else {
                        tutorial_canvas_context.drawImage(fruitsprites, srcx, srcy, width, height, this.x + (Math.sin(pomao.timeloop + this.loopoffset) * 7.5), this.y + (Math.cos((pomao.timeloop / 10) + this.loopoffset) * 7.5), this.width + (Math.sin((pomao.timeloop / 10) + this.loopoffset) * 15), this.height + (Math.cos(pomao.timeloop + this.loopoffset) * 15))
                    }
                }



            } else {
                tutorial_canvas_context.drawImage(cake, 0, 0, 186 * 6, 270 * 6, this.x - 18, this.y - 40, cake.width / 12, cake.height / 12)

            }



            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width / 3, "blue")
            if (keysPressed['q']) {
                this.body.draw()
            }
            if (this.body.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) {
                // this.x += pomao.tonguexmom -(((this.body.x-(this.width/2))-pomao.body.x)/100)
                // this.y += pomao.tongueymom -(((this.body.y-(this.height/2))-pomao.body.y)/100)
                // this.move()
                this.marked = 1
                this.width *= .995
                this.height *= .995
                if (this.anchor.xdif + this.anchor.ydif == 0) {
                    this.anchor.xdif = pomao.tongue.x - this.body.x
                    this.anchor.ydif = pomao.tongue.y - this.body.y
                    const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                    const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                    if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                        this.anchor.xdif = .001
                        this.anchor.ydif = 0
                    }
                }
                // //////console.log(this)
            }
            this.body = new Circle(this.x + this.width / 2, this.y + this.height / 2, this.width / 2.5, "blue")
            if (this.body.repelCheck(pomao.body)) {
                // this.x  -= (((this.body.x-(this.width/2))-pomao.body.x)/100)
                // this.y -= (((this.body.y-(this.height/2))-pomao.body.y)/100)
                this.width *= .9
                this.height *= .9
                if (this.type == 11) {
                    this.width *= .8
                    this.height *= .8
                }
                this.marked = 2
                pomao.diry = 1
                // //////console.log(pomao)
            }

            if (this.marked == 1) {
                ////console.log(this.anchor)
                this.x -= ((this.body.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.y -= ((this.body.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)

            }
            if (this.marked == 2) {
                this.x -= ((this.body.x - pomao.body.x) / 1.7)
                this.y -= ((this.body.y - pomao.body.y) / 1.7)
                this.marked = 2
                pomao.diry = 1


                // //////console.log(pomao)
            }


        }
        clean() {
            if (this.body.repelCheck(pomao.body)) {
                if (this.width < 20) {
                    if (this.type == 1) {
                        if (this.type2 == 4) {
                            pomao.high = 1000
                        }
                    }

                    if (this.type2 == 9) {
                        pomao.tripping = 820
                    }
                    if (this.type == 2) {
                        if (this.type2 == 1) {
                            // if(pomao.eggs.length < 16){
                            pomao.eggmake = 161
                            // }
                        }
                    }
                    if (this.type == 7) {
                        if (this.type2 == 7) {
                            pomao.blush = 1000
                        }
                    }
                    fruits.splice(fruits.indexOf(this), 1)

                    //sound (obnoxious)
                    // if (jazz.duration > 0 && !jazz.paused) {
                    //     //////console.log("top")
                    //         jazz2.play()
                    // }else{
                    //     //////console.log("bottom")
                    //     jazz.play()
                    // }
                    // jazz2.play()
                    pomao.hits += 2
                    if (this.type2 == 11) {
                        pomao.hits = 9
                    }
                    if (this.type2 == 8) {
                        if (this.type == 9) {
                            pomao.hits += 2
                        }
                    }
                    if (pomao.hits > 9) {
                        pomao.hits = 9
                    }

                    if (pomao.eggs.length < 16) {

                        const seepx = new Seed(pomao.eggs[pomao.eggs.length - 1])
                        pomao.eggs.push(seepx)
                    }
                }
            }
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
    }

    class Point {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.radius = 0
        }
        pointDistance(point) {
            return (new LineOP(this, point, "transparent", 0)).hypotenuse()
        }
    }
    class LineOP {
        constructor(object, target, color, width) {
            this.object = object
            this.target = target
            this.color = color
            this.width = width
        }
        angle() {
            return Math.atan2(this.object.y - this.target.y, this.object.x - this.target.x)
        }
        hypotenuse() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            return Math.sqrt(hypotenuse)
        }
        draw() {
            let linewidthstorage = tutorial_canvas_context.lineWidth
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.lineWidth = this.width
            tutorial_canvas_context.beginPath()
            tutorial_canvas_context.moveTo(this.object.x, this.object.y)
            tutorial_canvas_context.lineTo(this.target.x, this.target.y)
            tutorial_canvas_context.stroke()
            tutorial_canvas_context.lineWidth = linewidthstorage
            tutorial_canvas_context.closePath();
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
            this.timer = 0
            this.type = 0
            this.active = 0
            this.counter = 0
            this.isBlocked = true
            this.splice = 0
        }

        snowThing(point) {
            let linkcheck = new LineOP(this, point)
            if (linkcheck.hypotenuse() < point.radius * 2) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        underlaps(RectA) {

            if (this.splice == 1) {
                roofs.splice(roofs.indexOf(this), 1)
                walls.splice(walls.indexOf(this), 1)
                floors.splice(floors.indexOf(this), 1)
                // console.log("hit")
            }
            // console.log(RectA)
            if (this.isPointInside(new Point(RectA.x, RectA.y + RectA.height))) {

                return true
            }
            if (this.isPointInside(new Point(RectA.x + RectA.width, RectA.y + RectA.height))) {

                return true
            }
            // if (RectA.x < this.x && (RectA.x+RectA.width) > this.x && RectA.y > (this.y+this.height) && (RectA.y+RectA.height) < this.y ) {
            //     console.log("hit")
            //     return true
            // }
            return false
        }
        overlaps(RectA) {

            if (this.splice == 1) {
                roofs.splice(roofs.indexOf(this), 1)
                walls.splice(walls.indexOf(this), 1)
                floors.splice(floors.indexOf(this), 1)
                // console.log("hit")
            }
            // console.log(RectA)
            if (this.isPointInside(new Point(RectA.x, RectA.y))) {

                // console.log(this)
                return true
            }
            if (this.isPointInside(new Point(RectA.x + RectA.width, RectA.y))) {

                return true
            }
            if (this.isPointInside(new Point(RectA.x, RectA.y + RectA.height - 30))) {

                return true
            }
            if (this.isPointInside(new Point(RectA.x + RectA.width, RectA.y + RectA.height - 30))) {

                return true
            }
            // if (RectA.x < this.x && (RectA.x+RectA.width) > this.x && RectA.y > (this.y+this.height) && (RectA.y+RectA.height) < this.y ) {
            //     console.log("hit")
            //     return true
            // }
            return false
        }
        draw() {

            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
            // if(this.type == 1){

            // }
        }
        move() {

            this.x += this.xmom
            this.xmom *= .97 // why is this here?
            this.y += this.ymom
        }
        ymove() {
            if (this.ymom > 0) {
                this.y += this.ymom
            }
        }
        isPointInside(point) {

            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            if (point == pomao.body) {
                                this.active = 1
                            }



                            return true
                        }
                    }
                }
            }
            return false
        }
        clean() {
            if (this.splice == 1) {
                roofs.splice(roofs.indexOf(this), 1)
                walls.splice(walls.indexOf(this), 1)
                floors.splice(floors.indexOf(this), 1)
            }
        }
    }
    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0) {

            this.mark = []
            this.sxmom = 0
            this.symom = 0


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
        simplemove() {


            this.x += this.xmom
            this.y += this.ymom
        }
        chmove() {

            if (this.y > 33 - this.radius) {
                if (this.ymom > 0) {
                    this.ymom *= -1
                }
            }
            if (this.y < (-(tutorial_canvas.height * 3.1)) + 50) {
                if (this.ymom < 0) {
                    this.ymom *= -1
                }
            }
            if (this.x < 7925) {
                if (this.xmom < 0) {
                    this.xmom *= -1
                }
            }
            if (this.x > chafer.wall1.x) {
                if (this.xmom > 0) {
                    this.xmom *= -1
                }
            }
            this.x += this.xmom * 1.1
            this.y += this.ymom * 1.1
            if (this != chafer.body) {

                this.xmom *= .935  //.8  //.89 //92
                this.ymom *= .935  //.8
            } else {

                this.xmom *= .999
                this.ymom *= .999
            }
        }
        drive() {
            this.x += this.sxmom
            this.y += this.symom

            this.sxmom *= .95 //.9
            this.symom *= .95  //.9
        }

        draw() {

            if (!ramps.includes(this)) {
                tutorial_canvas_context.fillStyle = "cyan" //this.color
                if (this.debris == 1) {
                    tutorial_canvas_context.fillStyle = this.anticolor
                }
            } else {
                tutorial_canvas_context.fillStyle = this.color
            }
            tutorial_canvas_context.lineWidth = 4
            if (this.debris == 1) {
                tutorial_canvas_context.lineWidth = 3
            }
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.beginPath();
            if (this.radius > 1) {
                tutorial_canvas_context.arc(this.x, this.y, this.radius - 1, 0, (Math.PI * 2), true)
            }
            tutorial_canvas_context.fill()
            tutorial_canvas_context.stroke();
            tutorial_canvas_context.closePath();
        }
        wdraw() {

            tutorial_canvas_context.drawImage(wormimg, 0, 0, wormimg.width, wormimg.height, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)

            //     if(this.color == "transparent"){
            //         tutorial_canvas_context.fillStyle = this.color
            //      //this.color
            //         }else{    
            //             tutorial_canvas_context.fillStyle = "cyan" //cyan
            //         }
            //     tutorial_canvas_context.lineWidth = 4
            //     tutorial_canvas_context.strokeStyle = this.color
            //     tutorial_canvas_context.beginPath();
            //     tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)

            //    tutorial_canvas_context.fill()
            //     tutorial_canvas_context.stroke(); 
        }
        wbdraw() {

            tutorial_canvas_context.drawImage(wormbossimg, 0, 0, wormbossimg.width, wormbossimg.height, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)

        }

        wbsdraw() {
            // this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "#191919", this.body.radius * 2)
            tutorial_canvas_context.drawImage(wormbossimg, 0, 0, wormbossimg.width, wormbossimg.height, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
            // this.beam.draw()
        }
        ddraw() {

            tutorial_canvas_context.fillStyle = this.color

            if (this.color == "orange") {
                tutorial_canvas_context.strokeStyle = "black"
                tutorial_canvas_context.lineWidth = 1
            } else {

                tutorial_canvas_context.strokeStyle = this.color
                tutorial_canvas_context.lineWidth = 0
            }
            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)

            tutorial_canvas_context.fill()
            tutorial_canvas_context.stroke();
            tutorial_canvas_context.closePath();
        }
        chdraw() {

            tutorial_canvas_context.fillStyle = this.color

            tutorial_canvas_context.lineWidth = 0
            tutorial_canvas_context.strokeStyle = this.color
            if (this == chafer.body) {
                tutorial_canvas_context.lineWidth = 3
                tutorial_canvas_context.strokeStyle = "#090909"

            }
            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.arc(this.x, this.y, this.radius - 1, 0, (Math.PI * 2), true)

            tutorial_canvas_context.fill()
            tutorial_canvas_context.stroke();
            tutorial_canvas_context.closePath();
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
            if (pomao.rooted == this) {
                //console.log(pomao)
                pomao.body.x += this.xmom
                pomao.body.y += this.ymom
                tutorial_canvas_context.translate(-this.xmom, -this.ymom)
                for (let t = 1; t < pomao.eggs.length; t++) {
                    if (pomao.eggs[t].marked == 0) {
                        pomao.eggs[t].steer()
                        pomao.eggs[t].steery()
                    }
                }
            }
            if (this == pomao.body) {
                tutorial_canvas_context.translate(-this.xmom, -this.ymom)
            }
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }

        repelCheck(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius + point.radius) * (point.radius + this.radius)) {
                return true
            }
            return false
        }
    }
    class Circlec {
        constructor(x, y, radius, color, xmom = 0, ymom = 0) {

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
        draw() {
            tutorial_canvas_context.fillStyle = this.color

            if (!ramps.includes(this)) {
                tutorial_canvas_context.fillStyle = this.color
            } else {
                tutorial_canvas_context.fillStyle = this.color
            }
            tutorial_canvas_context.lineWidth = 4
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)

            tutorial_canvas_context.fill()
            tutorial_canvas_context.stroke();
            tutorial_canvas_context.closePath();
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
            if (this == pomao.body) {
                tutorial_canvas_context.translate(-this.xmom, -this.ymom)
            }
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }

        repelCheck(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius + point.radius) * (point.radius + this.radius)) {
                return true
            }
            return false
        }
    }
    class Circlex {
        constructor(x, y, radius, color, xmom = 0, ymom = 0) {

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
            this.wxmom = 0
            this.wymom = 0
            this.xrepel = 0
            this.yrepel = 0
            this.lens = 0
        }
        draw() {
            let dummy = new Circlec(this.x, this.y, this.radius, this.color)
            dummy.draw()
        }
        move() {

            this.x += this.xmom
            this.y += this.ymom



            if (this == pomao.body) {
                for (let t = 1; t < pomao.eggs.length; t++) {
                    //     for(let k = 0; pomao.eggs[t].pos.length; k++){
                    if (Math.abs(this.sxmom) > 0) {
                        pomao.eggs[t].steer()
                    } else if (Math.abs(this.xmom) > 0) {
                        pomao.eggs[t].steer()
                    }
                    //          break
                    //         // //////console.log(pomao.eggs[t].pos)
                    //     }
                }
                tutorial_canvas_context.translate(-this.xmom, -this.ymom)
            }
            this.smove()
        }
        ymove() {
            // this.x += this.xmom
            this.y += this.ymom
            if (this == pomao.body) {
                tutorial_canvas_context.translate(0, -this.ymom)
            }

            // forgot symom, hopfully adding it won't break this // broke it, ok trying something else

            if (this.ymom + this.symom > 0) {
                // this seems more normal and still balanced better than always adding it
                this.y += this.symom
                if (this == pomao.body) {
                    tutorial_canvas_context.translate(0, -this.symom)
                }
            } else {
                let blocktongue = 0
                for (let t = 0; t < floors.length; t++) {
                    if (floors[t].isPointInside(pomao.tongue) | !pomao.tonguebox.isInsideOf(floors[t])) {
                        blocktongue = 1
                    }
                }
                if (blocktongue == 1) {
                    pomao.tonguex *= .975
                    pomao.tonguey *= .975
                }
            }

        }
        wmove() {
            this.x += this.wxmom

            if (Math.abs(this.wymom) <= 3.1) {
                this.y += this.wymom
                if (this == pomao.body) {
                    tutorial_canvas_context.translate(-this.wxmom, -this.wymom)
                }
            } else {

                this.y += this.wymom
                if (this == pomao.body) {
                    tutorial_canvas_context.translate(-this.wxmom, -this.wymom)
                }
                // this.y += (this.symom/(Math.abs(this.symom)))*3.1
                // if (this == pomao.body) {
                //     tutorial_canvas_context.translate(-this.sxmom, -(this.symom/(Math.abs(this.symom)))*3.1)
                // }
            }

            pomao.body.wxmom *= .95
            pomao.body.wymom *= .95
        }
        wmovecut() {
            this.x += this.wxmom

            this.y += this.wymom
            if (this == pomao.body) {
                tutorial_canvas_context.translate(-this.wxmom, -this.wymom)
            }
            pomao.body.wxmom = 0
            pomao.body.wymom = 0
        }
        smove() {
            this.wmove()
            // this.x += this.sxmom
            if(this.symom != 0){
            if (Math.abs(this.symom) <= 3.1) {
                this.y += this.symom
                if (this == pomao.body) {
                    tutorial_canvas_context.translate(0, -this.symom)
                }
            } else {

                this.y += this.symom
                if (this == pomao.body) {
                    tutorial_canvas_context.translate(0, -this.symom)
                }
            //     this.y += 3.1 * (Math.abs(this.symom)/this.symom)
            //     if (this == pomao.body) {
            //         tutorial_canvas_context.translate(0, -3.1 * (Math.abs(this.symom)/this.symom))
            //     }
            }
        }
            if(this.sxmom != 0){
                if (Math.abs(this.sxmom) <= 3.1) {
                    this.x += 3.1 * (Math.abs(this.sxmom)/this.sxmom)
                    if (this == pomao.body) {
                        tutorial_canvas_context.translate(-3.1 * (Math.abs(this.sxmom)/this.sxmom), 0)
                    }
                } else {
    
                    this.x += this.sxmom
                    if (this == pomao.body) {
                        tutorial_canvas_context.translate(-this.sxmom, 0)
                    }
                }
            }

            for (let t = 0; t < blocks.length; t++) {
                if (squarecirclefaceblockjump(blocks[t], pomao.body)) {

                    blocks[t].ymom = this.ymom + this.symom
                    // if(!blocks[t].isBlocked){
                    blocks[t].xmom = this.sxmom + this.xmom
                    // }
                }
            }

            // if (this == pomao.body) {
            //     tutorial_canvas_context.translate(-this.sxmom, -this.symom)
            // }
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }

        repelCheck(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius + point.radius) * (point.radius + this.radius)) {
                return true
            }
            return false
        }
    }

    class Line {
        constructor(x, y, x2, y2, color, width) {
            this.x1 = x
            this.y1 = y
            this.x2 = x2
            this.y2 = y2
            this.color = color
            this.width = width
        }
        hypotenuse() {
            const xdif = this.x1 - this.x2
            const ydif = this.y1 - this.y2
            const hypotenuse = (xdif * xdif) + (ydif * ydif)
            return Math.sqrt(hypotenuse)
        }
        draw() {
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.lineWidth = this.width
            tutorial_canvas_context.beginPath()
            tutorial_canvas_context.moveTo(this.x1, this.y1)
            tutorial_canvas_context.lineTo(this.x2, this.y2)
            tutorial_canvas_context.stroke()
            tutorial_canvas_context.lineWidth = 1
            tutorial_canvas_context.closePath();
        }
    }



    class Switchbutton {
        constructor(x, y) {
            this.body = new Rectangle(x, y, 120, 120, "black")
            this.img = new Image()
            this.img.src = 'EggSwitch.png'
            this.state = 0
        }
        detect() {
            for (let t = 0; t < pomao.thrown.length; t++) {
                if (this.body.isPointInside(pomao.thrown[t])) {
                    if (this.state != 1) {
                        pomao.thrown[t].markedx = 3
                        this.state = 1
                    }
                }
            }
        }
        draw() {
            this.detect()
            // //////console.log(this)      
            // this.body.draw()
            tutorial_canvas_context.drawImage(this.img, (this.img.width / 2) * this.state, 0, (this.img.width / 2), (this.img.height), this.body.x, this.body.y, this.body.width, this.body.height)

            // tutorial_canvas_context.drawImage(this.img, pomao.body.x-25, pomao.body.y-30, 60, 50)
            //     tutorial_canvas_context.drawImage(this.img,pomao.body.x,pomao.body.y, this.width, this.height)
        }
    }


    class Switchfloor {
        constructor(x, y, x2, y2, h, w) {
            this.button = new Switchbutton(x, y)
            this.floor = new Rectangle(x2, y2, h, w, "red")
            floors.push(this.button.body)
            walls.push(this.button.body)
            roofs.push(this.button.body)
            floors.push(this.floor)
            walls.push(this.floor)
            roofs.push(this.floor)
            switches.push(this)
            this.cleared = 0
        }
        draw() {
            this.button.draw()
        }
        clear() {
            // //console.log("hit")
            if (this.cleared == 0) {
                if (this.button.state == 1) {
                    floors.splice(floors.indexOf(this.floor), 1)
                    walls.splice(walls.indexOf(this.floor), 1)
                    roofs.splice(roofs.indexOf(this.floor), 1)
                    this.cleared = 1
                }
            }
        }
    }

    class Health {
        constructor(pomao) {
            this.pomao = pomao
            this.rays = []
            this.body = new Circle(this.pomao.body.x - 575, this.pomao.body.y - 300, 27.5, "red")
        }
        draw() {
            this.body = new Circle(this.pomao.body.x - 575, this.pomao.body.y - 300, 27.5, "red")
            this.body.draw()
            tutorial_canvas_context.drawImage(healthbase, 0, 0, healthbase.width, healthbase.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
            let a = Math.PI
            this.rays = []
            for (let t = 0; t < 9; t++) {
                const ray = new Circle(this.body.x + (Math.sin(a) * 28), this.body.y + (Math.cos(a) * 28), 6, "yellow")
                this.rays.push(ray)
                a += (Math.PI / 4.5)
            }
            for (let t = 0; t < this.pomao.hits; t++) {
                // this.rays[t].draw()

                tutorial_canvas_context.drawImage(healthdot, 0, 0, healthdot.width, healthdot.height, this.rays[t].x - (this.rays[t].radius * 1.2), this.rays[t].y - (this.rays[t].radius * 1.2), this.rays[t].radius * 2.4, this.rays[t].radius * 2.4)
            }

        }
    }
    class Shape {
        constructor(shapes) {
            this.shapes = shapes
        }
        isPointInsideTargetedSnow(point) {
            let cold = 0
            let pointer = new Bosscircle(0, 0, 0, "red")
            pointer.angle = 0
            let pointerbig = new Bosscircle(0, 0, 0, "red")
            let count = 0
            let smackcold = 0
            let angles = []
            let sto = {}
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].repelCheck(point)) {
                    if(count == 0){
                        sto = this.shapes[t]
                    }
                    angles.push(Math.round(this.shapes[t].angle*100)/100)
                    pointer.angle +=( Math.round(this.shapes[t].angle*100)/100)
                    pointer.x += this.shapes[t].x
                    pointer.y += this.shapes[t].y
                    if(this.shapes[t].radius == 140){ //defunct
                        pointerbig.x = this.shapes[t].x
                        pointerbig.y = this.shapes[t].y
                        count = 1
                        cold = 2
                        smackcold = 1
                        pointerbig.radius = this.shapes[t].radius
                        // break
                    }else  if (this.shapes[t].radius > pointer.radius && pointer.radius != 0) {
                        pointerbig.x = this.shapes[t].x
                        pointerbig.y = this.shapes[t].y
                        count = 1
                        cold = 2
                        smackcold = 1
                        pointerbig.radius = this.shapes[t].radius
                        // break
                    }else {
                        count++
                        cold = 1
                        pointer.radius = this.shapes[t].radius
                    }
                }
            }
            if(smackcold == 1){
                cold = 2
            }
            pointer.x /= count
            pointer.y /= count
            pointer.angle /= count
            pointer.angle = ( Math.round(pointer.angle*100)/100)
            // console.log(angles)
            if (cold == 0) {
                if(angles.includes(pointer.angle)){
    
                }else if(angles.length > 0){
                    sto.color = "green"
                    // sto.draw()
                    sto.marked = true
                    return sto
                }
                return false
            } else if(cold == 1) {
                if(angles.includes(pointer.angle)){
    
                }else if(angles.length > 0){
                    sto.color = "green"
                    // sto.draw()
                    sto.marked = true
                    return sto
                }
                // pointer.draw()
                if (pomao.body.y - (pomao.body.radius * .5) > pointer.y) {
                    pointer.color = "blue"
                    // pointer.draw()
                    pointer.marked = false
                    return pointer
                    // pointer.radius *= 1.05
                }
                pointer.marked = true
                return pointer
            }else{

                if(angles.includes(pointer.angle)){
    
                }else if(angles.length > 0){
                    sto.color = "green"
                    // sto.draw()
                    sto.marked = true
                    return sto
                }
                // pointerbig.draw()
                if (pomao.body.y - (pomao.body.radius * .5) > pointerbig.y) {
                    pointerbig.color = "blue"
                    // pointerbig.draw()
                    pointerbig.marked = false
                    return pointerbig
                    // pointer.radius *= 1.05
                }
                pointerbig.marked = true
                return pointerbig
            }

        }
        snowFloorShapeTest(point) {

            let retvar = 0
            let arrayhold = []
            let click = 0
            for (let t = 0; t < this.shapes.length; t++) {
                if (squarecircleedges(this.shapes[t], point)) {
                    arrayhold.push(this.shapes[t].y)
                    click = 1
                }
            }
            if (arrayhold.length > 0) {
                retvar = arrayhold.reduce((accum, curr) => accum + curr) / arrayhold.length
            }

            if (click > 0) {
                return retvar
            }

            return false


        }
        isPointInside(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].repelCheck(point)) {
                    return true
                }
            }

            return false
        }
        isInsideOf(box) {

            for (let t = 0; t < this.shapes.length; t++) {
                if (box.isPointInside(this.shapes[t])) {
                    return true
                }
            }

            return false
        }
        isInsideOfShape(box) {

            for (let k = 0; k < box.length; k++) {
                for (let t = 0; t < this.shapes.length; t++) {
                    if (box[k].isPointInside(this.shapes[t])) {
                        return true
                    }
                }
            }

            return false
        }
        isPointInsideTargeted(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].repelCheck(point)) {
                    return this.shapes[t].target
                }
            }

            return false
        }
        isPointInsideTargetedShape(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].repelCheck(point)) {
                    return this.shapes[t]
                }
            }
            return false
        }
        isInsideOfTargeted(box) {

            for (let t = 0; t < this.shapes.length; t++) {
                if (box.isPointInside(this.shapes[t])) {
                    return this.shapes[t].target
                }
            }

            return false
        }

        draw() {
            for (let t = 0; t < this.shapes.length; t++) {
                this.shapes[t].draw()
            }
        }
    }
    class Pomao {
        constructor() {
            this.wingcheck = 0
            this.cutscene = 0
            this.grounded = 0
            this.wingthing = 0
            this.eggmake = 0
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
            this.egglock = 0
            this.body = new Circlex(640, 360, 32, "transparent")
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
            this.timeloops = 0  //?
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

            this.positron = new CircleF(this.body.x, this.body.y, 3, "gray", 1)
            this.electron = new CircleF(this.body.x, this.body.y, 3, "gray", -1)
            this.positron2 = new CircleF(this.body.x, this.body.y, 3, "gray", 0, 1)
            this.electron2 = new CircleF(this.body.x, this.body.y, 3, "gray", 0, -1)
            this.pomarray = [
                {
                    "angle": -1.0679663391047056,
                    "length": 57.12705649475433
                },
                {
                    "angle": -1.035519168903954,
                    "length": 57.019794150573716
                },
                {
                    "angle": -0.9958844112315666,
                    "length": 56.52901441667835
                },
                {
                    "angle": -0.942711158345535,
                    "length": 55.90170162625488
                },
                {
                    "angle": -0.9036761082701067,
                    "length": 55.58504408601675
                },
                {
                    "angle": -0.8553600011012132,
                    "length": 54.97577943410592
                },
                {
                    "angle": -0.7974133432449845,
                    "length": 53.95025264959157
                },
                {
                    "angle": -0.7357301478333739,
                    "length": 53.093887728706434
                },
                {
                    "angle": -0.6920808592232297,
                    "length": 52.00249447122613
                },
                {
                    "angle": -0.657882743812684,
                    "length": 51.59205408709363
                },
                {
                    "angle": -0.6245209169538418,
                    "length": 50.64402182423419
                },
                {
                    "angle": -0.5837949969909209,
                    "length": 49.433390789538954
                },
                {
                    "angle": -0.5576428057414629,
                    "length": 48.610302885227725
                },
                {
                    "angle": -0.5073924394792875,
                    "length": 47.391162477417126
                },
                {
                    "angle": -0.47045239488846974,
                    "length": 46.468776665535124
                },
                {
                    "angle": -0.44256582374115516,
                    "length": 45.38420874674552
                },
                {
                    "angle": -0.4046710766361241,
                    "length": 43.31059725057743
                },
                {
                    "angle": -0.3056523880806368,
                    "length": 40.87361409556873
                },
                {
                    "angle": -0.26184514002817805,
                    "length": 39.02283627939628
                },
                {
                    "angle": -0.20975568431980016,
                    "length": 37.851767260469536
                },
                {
                    "angle": -0.15934909069569755,
                    "length": 36.50017919272136
                },
                {
                    "angle": -0.11595165041471968,
                    "length": 35.22742260414086
                },
                {
                    "angle": -0.07000028771525987,
                    "length": 34.04952871948161
                },
                {
                    "angle": -0.0200596814427396,
                    "length": 32.06893664770802
                },
                {
                    "angle": 0.01900104704233982,
                    "length": 30.70083918671588
                },
                {
                    "angle": 0.059282795755874404,
                    "length": 29.580605302762805
                },
                {
                    "angle": 0.10189516206114842,
                    "length": 28.737588247938092
                },
                {
                    "angle": 0.1463580221085145,
                    "length": 28.356541563814556
                },
                {
                    "angle": 0.19570020371329094,
                    "length": 27.119205330548965
                },
                {
                    "angle": 0.26017408978136786,
                    "length": 26.664303577300707
                },
                {
                    "angle": 0.31258810203479365,
                    "length": 25.616330109342098
                },
                {
                    "angle": 0.3867033509698719,
                    "length": 25.16557338005537
                },
                {
                    "angle": 0.45366600612849983,
                    "length": 24.56127215340277
                },
                {
                    "angle": 0.5249404647670594,
                    "length": 24.079440086272868
                },
                {
                    "angle": 0.6080875268757552,
                    "length": 23.735169927365657
                },
                {
                    "angle": 0.7290326302073745,
                    "length": 23.56712406088265
                },
                {
                    "angle": 0.8191002695183289,
                    "length": 24.23675597094827
                },
                {
                    "angle": 0.9265649272715234,
                    "length": 24.604929046557633
                },
                {
                    "angle": 1.006421567626255,
                    "length": 25.282734591430255
                },
                {
                    "angle": 1.0784644631728766,
                    "length": 25.968266713050085
                },
                {
                    "angle": 1.1177100929614256,
                    "length": 26.631063622775365
                },
                {
                    "angle": 1.194748190697128,
                    "length": 27.06293052461558
                },
                {
                    "angle": 1.2591503136389355,
                    "length": 27.546964920885102
                },
                {
                    "angle": 1.3191442622046936,
                    "length": 28.770774118924837
                },
                {
                    "angle": 1.387987044000915,
                    "length": 36.67887294589298
                },
                {
                    "angle": 1.3962835403295961,
                    "length": 38.40359992467503
                },
                {
                    "angle": 1.4030809996935747,
                    "length": 39.944567624781854
                },
                {
                    "angle": 1.4200877190797834,
                    "length": 41.73213058055544
                },
                {
                    "angle": 1.4595228161774394,
                    "length": 43.15096187335373
                },
                {
                    "angle": 1.5034218027362527,
                    "length": 44.13527531631973
                },
                {
                    "angle": 1.5542323094932824,
                    "length": 44.57250545633784
                },
                {
                    "angle": 1.5932019076704873,
                    "length": 44.57757971973746
                },
                {
                    "angle": 1.6320568514858038,
                    "length": 44.23792096984967
                },
                {
                    "angle": 1.6652468345362998,
                    "length": 42.57909348035219
                },
                {
                    "angle": 1.7018302787233168,
                    "length": 40.86857184550108
                },
                {
                    "angle": 1.7370728762816714,
                    "length": 38.34393836779076
                },
                {
                    "angle": 1.790966938513344,
                    "length": 35.27735417390439
                },
                {
                    "angle": 1.8309084197688568,
                    "length": 35.72787597112123
                },
                {
                    "angle": 1.845215325336684,
                    "length": 38.386827939831235
                },
                {
                    "angle": 1.8316322525870294,
                    "length": 40.66992113456907
                },
                {
                    "angle": 1.8261988859270082,
                    "length": 42.840163701823585
                },
                {
                    "angle": 1.849323984558791,
                    "length": 44.79670460233012
                },
                {
                    "angle": 1.8758840307035014,
                    "length": 46.408736804020045
                },
                {
                    "angle": 1.9203996658312208,
                    "length": 47.85994077007871
                },
                {
                    "angle": 1.9790937911554833,
                    "length": 47.797513780102754
                },
                {
                    "angle": 2.014474978602755,
                    "length": 46.92193557456806
                },
                {
                    "angle": 2.0544492146252837,
                    "length": 45.99416516508045
                },
                {
                    "angle": 2.0938836088062014,
                    "length": 44.83663362903282
                },
                {
                    "angle": 2.1114933615299103,
                    "length": 43.51464050719887
                },
                {
                    "angle": 2.132764990690985,
                    "length": 42.0349465542161
                },
                {
                    "angle": 2.1542913931492134,
                    "length": 40.215089369728844
                },
                {
                    "angle": 2.198068218855361,
                    "length": 39.426026397410475
                },
                {
                    "angle": 2.2906578271136055,
                    "length": 39.44880236792358
                },
                {
                    "angle": 2.350633964427519,
                    "length": 40.89588793500077
                },
                {
                    "angle": 2.4233869175173375,
                    "length": 41.632780301947676
                },
                {
                    "angle": 2.4663916658360647,
                    "length": 41.952586340612314
                },
                {
                    "angle": 2.507085591822042,
                    "length": 42.59364779867538
                },
                {
                    "angle": 2.5649670102259767,
                    "length": 42.633055323246445
                },
                {
                    "angle": 2.61415953400457,
                    "length": 42.40615084180895
                },
                {
                    "angle": 2.652630747204031,
                    "length": 41.869812111048965
                },
                {
                    "angle": 2.6965667691295576,
                    "length": 41.874139131488924
                },
                {
                    "angle": 2.7282191174965966,
                    "length": 41.62307782329136
                },
                {
                    "angle": 2.7495935482764597,
                    "length": 41.151403164256045
                },
                {
                    "angle": 2.771691839333203,
                    "length": 40.788774880768294
                },
                {
                    "angle": 2.804166405361469,
                    "length": 40.29434442449026
                },
                {
                    "angle": 2.850475831893571,
                    "length": 39.322521558894294
                },
                {
                    "angle": 2.8920689236757395,
                    "length": 38.697148150540826
                },
                {
                    "angle": 2.9403396805895103,
                    "length": 37.59737911942761
                },
                {
                    "angle": 2.98472234795564,
                    "length": 36.77184687938973
                },
                {
                    "angle": 3.034570421746232,
                    "length": 35.764529720894664
                },
                {
                    "angle": 3.103779391292977,
                    "length": 33.581301883877664
                },
                {
                    "angle": 3.13887037280022,
                    "length": 31.562632211094613
                },
                {
                    "angle": -3.107839032841043,
                    "length": 29.825597650560944
                },
                {
                    "angle": -3.0737250819210993,
                    "length": 28.339991812336468
                },
                {
                    "angle": -3.031087266963155,
                    "length": 26.424205698544657
                },
                {
                    "angle": -2.948404242866869,
                    "length": 24.761431313098644
                },
                {
                    "angle": -2.887309747425591,
                    "length": 27.32529896851487
                },
                {
                    "angle": -2.8781576064846286,
                    "length": 29.22706405435108
                },
                {
                    "angle": -2.837706778333616,
                    "length": 31.6698484332365
                },
                {
                    "angle": -2.8007632831567153,
                    "length": 33.281637180572616
                },
                {
                    "angle": -2.7698992566113834,
                    "length": 33.88274442567228
                },
                {
                    "angle": -2.768024507138647,
                    "length": 35.54387433123149
                },
                {
                    "angle": -2.7504007112718245,
                    "length": 38.0390236579903
                },
                {
                    "angle": -2.7083714506567675,
                    "length": 40.36865674161296
                },
                {
                    "angle": -2.677720376311294,
                    "length": 41.520428742178964
                },
                {
                    "angle": -2.640991001604003,
                    "length": 42.82374825100233
                },
                {
                    "angle": -2.6059790717658275,
                    "length": 44.74402288718847
                },
                {
                    "angle": -2.577545854301866,
                    "length": 45.53063497722368
                },
                {
                    "angle": -2.549959551043718,
                    "length": 46.35715513019028
                },
                {
                    "angle": -2.5086397123945785,
                    "length": 47.72246687955465
                },
                {
                    "angle": -2.4630686508057877,
                    "length": 48.64625633554459
                },
                {
                    "angle": -2.419969925642641,
                    "length": 49.65275332886978
                },
                {
                    "angle": -2.3851808777115235,
                    "length": 50.76546200032748
                },
                {
                    "angle": -2.3426606844314923,
                    "length": 51.84084504721466
                },
                {
                    "angle": -2.2977798789825163,
                    "length": 52.89491012084011
                },
                {
                    "angle": -2.257780397307508,
                    "length": 53.8154739841023
                },
                {
                    "angle": -2.22896083389497,
                    "length": 54.82597161903154
                },
                {
                    "angle": -2.18442514073037,
                    "length": 55.85384035460031
                },
                {
                    "angle": -2.1378505187569905,
                    "length": 56.53152991153684
                },
                {
                    "angle": -2.104643018344297,
                    "length": 57.34967115728302
                },
                {
                    "angle": -2.0725142665113845,
                    "length": 57.23474457304784
                },
                {
                    "angle": -2.038817175301153,
                    "length": 56.323841396159175
                },
                {
                    "angle": -2.0022706801611427,
                    "length": 55.338723085832775
                },
                {
                    "angle": -1.9668356905493678,
                    "length": 54.48422847205905
                },
                {
                    "angle": -1.9304072132033185,
                    "length": 53.88011365218563
                },
                {
                    "angle": -1.8969553849661926,
                    "length": 53.24044570593064
                },
                {
                    "angle": -1.8460245975653609,
                    "length": 52.40600401742026
                },
                {
                    "angle": -1.7993500506345261,
                    "length": 51.780146805709734
                },
                {
                    "angle": -1.7491658794235352,
                    "length": 51.24667422635243
                },
                {
                    "angle": -1.7110275827722212,
                    "length": 50.845489109059486
                },
                {
                    "angle": -1.668298268502801,
                    "length": 50.58663827169775
                },
                {
                    "angle": -1.607457228510026,
                    "length": 50.552217345920376
                },
                {
                    "angle": -1.552653261230804,
                    "length": 50.52656521926384
                },
                {
                    "angle": -1.5216069175652878,
                    "length": 50.579428115648845
                },
                {
                    "angle": -1.4732891949870972,
                    "length": 50.59712011441214
                },
                {
                    "angle": -1.4417451232146956,
                    "length": 51.03376439483953
                },
                {
                    "angle": -1.399578137798293,
                    "length": 51.27845263815049
                },
                {
                    "angle": -1.3577224816995244,
                    "length": 51.69777419217967
                },
                {
                    "angle": -1.3175644913340354,
                    "length": 52.268536688281756
                },
                {
                    "angle": -1.27422351251897,
                    "length": 53.091220090430625
                },
                {
                    "angle": -1.2312209715564773,
                    "length": 53.848401423273884
                },
                {
                    "angle": -1.2075313645348478,
                    "length": 54.318165220269265
                },
                {
                    "angle": -1.1938063135948604,
                    "length": 54.87428640535591
                },
                {
                    "angle": -1.155771698574184,
                    "length": 55.578988182444355
                },
                {
                    "angle": -1.118673480692207,
                    "length": 56.541923039324764
                },
                {
                    "angle": -1.0679663391047056,
                    "length": 57.12705649475433
                }
            ]
            this.pomarrayleft  = [
                {
                  "angle": -1.0703983472026475,
                  "length": 57.768002519082295
                },
                {
                  "angle": -1.0360794520962808,
                  "length": 57.21273502418902
                },
                {
                  "angle": -1.0125727671548552,
                  "length": 56.646800358277886
                },
                {
                  "angle": -0.9896011579402876,
                  "length": 55.7993749949928
                },
                {
                  "angle": -0.9634635053449735,
                  "length": 55.56838066736524
                },
                {
                  "angle": -0.9328121169546437,
                  "length": 55.03194252027041
                },
                {
                  "angle": -0.896940923553464,
                  "length": 54.433056798965346
                },
                {
                  "angle": -0.8516706711679892,
                  "length": 53.66292231382911
                },
                {
                  "angle": -0.8212246556607755,
                  "length": 52.82329247227165
                },
                {
                  "angle": -0.7911008224746369,
                  "length": 52.11904420526175
                },
                {
                  "angle": -0.768177906009479,
                  "length": 51.45848449874352
                },
                {
                  "angle": -0.741244173824833,
                  "length": 50.85021803557427
                },
                {
                  "angle": -0.7205975678519265,
                  "length": 49.98300469304476
                },
                {
                  "angle": -0.6820693400528564,
                  "length": 48.86649304901191
                },
                {
                  "angle": -0.6542945564638118,
                  "length": 48.00467761831564
                },
                {
                  "angle": -0.6259611961529034,
                  "length": 47.00223722358217
                },
                {
                  "angle": -0.5870649108255985,
                  "length": 45.75065942976999
                },
                {
                  "angle": -0.5509387128819839,
                  "length": 44.64502296040255
                },
                {
                  "angle": -0.5264993036368174,
                  "length": 43.66053915333251
                },
                {
                  "angle": -0.5049509878774612,
                  "length": 42.7135310343899
                },
                {
                  "angle": -0.48350965475505486,
                  "length": 41.587534815893214
                },
                {
                  "angle": -0.46401987335365236,
                  "length": 40.392123065787224
                },
                {
                  "angle": -0.44035743479685163,
                  "length": 39.59193850235507
                },
                {
                  "angle": -0.4187387589471005,
                  "length": 37.93960759264782
                },
                {
                  "angle": -0.40219132381403194,
                  "length": 36.691872758560336
                },
                {
                  "angle": -0.3803331777253878,
                  "length": 35.13240613129543
                },
                {
                  "angle": -0.3461791386384159,
                  "length": 33.499005531527004
                },
                {
                  "angle": -0.3222517662345797,
                  "length": 32.53984410550512
                },
                {
                  "angle": -0.29535934879110065,
                  "length": 31.372568367772878
                },
                {
                  "angle": -0.2803166805476215,
                  "length": 29.90474105320848
                },
                {
                  "angle": -0.25822345233829225,
                  "length": 29.40054368587852
                },
                {
                  "angle": -0.25711350058432614,
                  "length": 28.70127270374052
                },
                {
                  "angle": -0.25676625182147855,
                  "length": 27.167200422051575
                },
                {
                  "angle": -0.2491210321121329,
                  "length": 26.48720586495724
                },
                {
                  "angle": -0.24044193143591414,
                  "length": 25.976966694147823
                },
                {
                  "angle": -0.20253915772002554,
                  "length": 24.933891747661466
                },
                {
                  "angle": -0.17885724400067793,
                  "length": 24.820157372673343
                },
                {
                  "angle": -0.14273845814291908,
                  "length": 25.092690402710744
                },
                {
                  "angle": -0.1301250177201032,
                  "length": 25.847421004431713
                },
                {
                  "angle": -0.10237419571091214,
                  "length": 26.351245964722597
                },
                {
                  "angle": -0.0857543316771824,
                  "length": 27.090951436627854
                },
                {
                  "angle": -0.06009963902798297,
                  "length": 27.96533806129785
                },
                {
                  "angle": -0.039093608049585234,
                  "length": 29.024518633334345
                },
                {
                  "angle": -0.01040115366299473,
                  "length": 30.571958554041096
                },
                {
                  "angle": 0.022444768381260596,
                  "length": 31.50324274617731
                },
                {
                  "angle": 0.06878005552399957,
                  "length": 33.17061509681773
                },
                {
                  "angle": 0.09912269963643572,
                  "length": 34.19126225432166
                },
                {
                  "angle": 0.12243678515297819,
                  "length": 35.21439862304011
                },
                {
                  "angle": 0.15224227716224312,
                  "length": 36.065582034573126
                },
                {
                  "angle": 0.16986038601896333,
                  "length": 36.87998306908554
                },
                {
                  "angle": 0.19739945505085005,
                  "length": 37.644332939339954
                },
                {
                  "angle": 0.22476686918219782,
                  "length": 38.589426346263366
                },
                {
                  "angle": 0.2494298739324619,
                  "length": 38.820105062520454
                },
                {
                  "angle": 0.2890321113410139,
                  "length": 39.536042550469375
                },
                {
                  "angle": 0.32664056394715696,
                  "length": 40.011689136260244
                },
                {
                  "angle": 0.3550942029256671,
                  "length": 40.4175980296862
                },
                {
                  "angle": 0.3954972692413668,
                  "length": 41.10174704995582
                },
                {
                  "angle": 0.42353937822170773,
                  "length": 41.66769644906094
                },
                {
                  "angle": 0.4397591343657481,
                  "length": 41.98017505810439
                },
                {
                  "angle": 0.46794639521169806,
                  "length": 41.773626924924244
                },
                {
                  "angle": 0.49708840001999194,
                  "length": 41.997621589086826
                },
                {
                  "angle": 0.5268662979107269,
                  "length": 41.94718035828693
                },
                {
                  "angle": 0.5479439771200206,
                  "length": 42.82426456044423
                },
                {
                  "angle": 0.5793299797697948,
                  "length": 42.574187298178956
                },
                {
                  "angle": 0.6164647001977634,
                  "length": 42.691068858119145
                },
                {
                  "angle": 0.6415739791019485,
                  "length": 42.242728282415754
                },
                {
                  "angle": 0.6755783349846434,
                  "length": 42.25391442011772
                },
                {
                  "angle": 0.7201058211133022,
                  "length": 41.64838225344511
                },
                {
                  "angle": 0.7517278042540428,
                  "length": 41.320661135823
                },
                {
                  "angle": 0.7810881404879703,
                  "length": 40.76066456907159
                },
                {
                  "angle": 0.8086035788371367,
                  "length": 40.21150192030734
                },
                {
                  "angle": 0.8483055008431916,
                  "length": 39.99140574125545
                },
                {
                  "angle": 0.8852064288142399,
                  "length": 39.75660594321574
                },
                {
                  "angle": 0.9268356798194678,
                  "length": 39.43546406380106
                },
                {
                  "angle": 0.9338082743560434,
                  "length": 39.68005150889679
                },
                {
                  "angle": 0.9594404330835471,
                  "length": 40.14198267964969
                },
                {
                  "angle": 0.9720009230262742,
                  "length": 40.69612809343662
                },
                {
                  "angle": 1.0098795339250815,
                  "length": 41.667630440145565
                },
                {
                  "angle": 1.0326005953952693,
                  "length": 42.5384442992196
                },
                {
                  "angle": 1.0700216932237052,
                  "length": 43.665550673989145
                },
                {
                  "angle": 1.0888920707215985,
                  "length": 44.899338021661436
                },
                {
                  "angle": 1.1071864157777849,
                  "length": 46.159078003234114
                },
                {
                  "angle": 1.1307781231207796,
                  "length": 46.861490214907604
                },
                {
                  "angle": 1.1543618988148976,
                  "length": 47.06786673320845
                },
                {
                  "angle": 1.187215222002708,
                  "length": 47.32670701392295
                },
                {
                  "angle": 1.2287934309443844,
                  "length": 47.50516827539621
                },
                {
                  "angle": 1.2665409940701475,
                  "length": 47.138486884450906
                },
                {
                  "angle": 1.281170941549643,
                  "length": 46.78038306019784
                },
                {
                  "angle": 1.3006405291095415,
                  "length": 45.93564013267493
                },
                {
                  "angle": 1.3124901920739402,
                  "length": 44.35915001554574
                },
                {
                  "angle": 1.3299407819787918,
                  "length": 42.830064116638205
                },
                {
                  "angle": 1.3312274080861208,
                  "length": 41.646430956223945
                },
                {
                  "angle": 1.3232970049245045,
                  "length": 39.917127078835314
                },
                {
                  "angle": 1.3231219306489808,
                  "length": 38.729472871597935
                },
                {
                  "angle": 1.3271976783615416,
                  "length": 36.65966508238689
                },
                {
                  "angle": 1.3079273005972798,
                  "length": 35.08004702719947
                },
                {
                  "angle": 1.3359017060115146,
                  "length": 34.01052450077519
                },
                {
                  "angle": 1.374807463610936,
                  "length": 34.305182649831785
                },
                {
                  "angle": 1.389172872468267,
                  "length": 35.84743239806111
                },
                {
                  "angle": 1.4166169800590775,
                  "length": 37.116839646252146
                },
                {
                  "angle": 1.4320296821289382,
                  "length": 38.610202020073295
                },
                {
                  "angle": 1.4428835361801757,
                  "length": 40.63509590675982
                },
                {
                  "angle": 1.4644655157199422,
                  "length": 41.85591962171922
                },
                {
                  "angle": 1.4975732963338826,
                  "length": 42.801401357501796
                },
                {
                  "angle": 1.5256709819816894,
                  "length": 43.712459338194435
                },
                {
                  "angle": 1.5625215673667994,
                  "length": 44.84605971649305
                },
                {
                  "angle": 1.5907932815300585,
                  "length": 44.85349205151074
                },
                {
                  "angle": 1.621397391206517,
                  "length": 44.85506210097716
                },
                {
                  "angle": 1.6531180027828865,
                  "length": 44.55948983584455
                },
                {
                  "angle": 1.6899980780298656,
                  "length": 43.832125685280936
                },
                {
                  "angle": 1.7309336586716029,
                  "length": 42.596561833696946
                },
                {
                  "angle": 1.737751806525166,
                  "length": 40.87221466194386
                },
                {
                  "angle": 1.7597709139267852,
                  "length": 39.35530989870373
                },
                {
                  "angle": 1.7650326974743005,
                  "length": 37.48854744932292
                },
                {
                  "angle": 1.7805533259400814,
                  "length": 36.218057387018966
                },
                {
                  "angle": 1.790515923513212,
                  "length": 34.6005880727237
                },
                {
                  "angle": 1.7990322754076815,
                  "length": 33.33076542302376
                },
                {
                  "angle": 1.8093091871868103,
                  "length": 32.1186354584075
                },
                {
                  "angle": 1.8232341482684613,
                  "length": 30.381646379500303
                },
                {
                  "angle": 1.855751766992402,
                  "length": 28.071855172784147
                },
                {
                  "angle": 1.8926823397417165,
                  "length": 27.357402980327464
                },
                {
                  "angle": 1.930886609865441,
                  "length": 27.238331651619195
                },
                {
                  "angle": 1.9790515978615744,
                  "length": 26.90237306157204
                },
                {
                  "angle": 2.0289904069164533,
                  "length": 26.586883989920043
                },
                {
                  "angle": 2.088343216556931,
                  "length": 26.11012004741389
                },
                {
                  "angle": 2.1387354035155948,
                  "length": 25.315674263277472
                },
                {
                  "angle": 2.241711330247105,
                  "length": 24.648792414994116
                },
                {
                  "angle": 2.344884268238008,
                  "length": 24.372978764632112
                },
                {
                  "angle": 2.4020704249218388,
                  "length": 24.22455395424787
                },
                {
                  "angle": 2.4216884292770753,
                  "length": 23.80318427963238
                },
                {
                  "angle": 2.4655453681782076,
                  "length": 23.62422203746164
                },
                {
                  "angle": 2.5215129754795904,
                  "length": 23.5920937529043
                },
                {
                  "angle": 2.5745075407074953,
                  "length": 23.54761720132101
                },
                {
                  "angle": 2.6657907584876526,
                  "length": 23.801555143316516
                },
                {
                  "angle": 2.689472858406094,
                  "length": 23.91459181415997
                },
                {
                  "angle": 2.7488398276114654,
                  "length": 25.007200690632125
                },
                {
                  "angle": 2.795220536304944,
                  "length": 25.40820327316856
                },
                {
                  "angle": 2.8404070519104083,
                  "length": 26.058965569522467
                },
                {
                  "angle": 2.8787496010551044,
                  "length": 26.453864178502204
                },
                {
                  "angle": 2.8971854739041296,
                  "length": 26.871242612596312
                },
                {
                  "angle": 2.959743902134201,
                  "length": 27.73386070673101
                },
                {
                  "angle": 2.9817104861232115,
                  "length": 28.413169033929492
                },
                {
                  "angle": 3.0127955769840944,
                  "length": 28.946801875337563
                },
                {
                  "angle": 3.0452128483222305,
                  "length": 29.478214378389215
                },
                {
                  "angle": 3.0815481948740926,
                  "length": 30.216953260664887
                },
                {
                  "angle": 3.1141295352821707,
                  "length": 30.98277544864649
                },
                {
                  "angle": 3.1349280366189336,
                  "length": 31.414767803557865
                },
                {
                  "angle": -3.1274260476108444,
                  "length": 31.932105889446532
                },
                {
                  "angle": -3.095363660568118,
                  "length": 32.4588953213943
                },
                {
                  "angle": -3.073640694393197,
                  "length": 33.505448895032934
                },
                {
                  "angle": -3.056795481104882,
                  "length": 33.936000364939005
                },
                {
                  "angle": -3.032378996945164,
                  "length": 34.777520629681845
                },
                {
                  "angle": -3.021015715364391,
                  "length": 35.11196657724897
                },
                {
                  "angle": -2.9974267900249267,
                  "length": 35.748977164930466
                },
                {
                  "angle": -2.980057740056471,
                  "length": 36.60624755115633
                },
                {
                  "angle": -2.9463562720939462,
                  "length": 37.0372346102204
                },
                {
                  "angle": -2.920425670689461,
                  "length": 37.68992023041621
                },
                {
                  "angle": -2.9034011010701537,
                  "length": 38.13448715737535
                },
                {
                  "angle": -2.8870293915544263,
                  "length": 38.63087592352061
                },
                {
                  "angle": -2.8616184319631577,
                  "length": 39.544451714903964
                },
                {
                  "angle": -2.8402689352125714,
                  "length": 39.99905529250787
                },
                {
                  "angle": -2.8081476027545738,
                  "length": 40.64743734049931
                },
                {
                  "angle": -2.7892579546054357,
                  "length": 41.30038217631596
                },
                {
                  "angle": -2.774764841661884,
                  "length": 41.957871797199935
                },
                {
                  "angle": -2.7563183604649906,
                  "length": 42.26459457805503
                },
                {
                  "angle": -2.7368317305232934,
                  "length": 43.07600272362683
                },
                {
                  "angle": -2.7180479468956658,
                  "length": 43.433163197921196
                },
                {
                  "angle": -2.702831932465049,
                  "length": 43.84784613077623
                },
                {
                  "angle": -2.6824385982925865,
                  "length": 44.39583849166626
                },
                {
                  "angle": -2.652077520418567,
                  "length": 45.604143450008685
                },
                {
                  "angle": -2.6342548019281784,
                  "length": 45.98880109076737
                },
                {
                  "angle": -2.6105950308711674,
                  "length": 46.614856385740296
                },
                {
                  "angle": -2.5863949259057306,
                  "length": 47.30086672089262
                },
                {
                  "angle": -2.556808243198228,
                  "length": 48.20652240781166
                },
                {
                  "angle": -2.531722609411556,
                  "length": 48.97333050806306
                },
                {
                  "angle": -2.5145967721792895,
                  "length": 49.379853686248246
                },
                {
                  "angle": -2.489408252477017,
                  "length": 50.31392989336283
                },
                {
                  "angle": -2.462386880658064,
                  "length": 50.993447012971785
                },
                {
                  "angle": -2.449374218695361,
                  "length": 51.404273425334125
                },
                {
                  "angle": -2.428836103618226,
                  "length": 52.15409635455048
                },
                {
                  "angle": -2.4052882931710577,
                  "length": 52.97530776729349
                },
                {
                  "angle": -2.378154532740814,
                  "length": 53.18394406648047
                },
                {
                  "angle": -2.3615002810940355,
                  "length": 53.61989179241051
                },
                {
                  "angle": -2.336469447972865,
                  "length": 53.94396412090634
                },
                {
                  "angle": -2.3100103033429393,
                  "length": 54.695035699069436
                },
                {
                  "angle": -2.275413792345114,
                  "length": 55.1723852639063
                },
                {
                  "angle": -2.2500065951590624,
                  "length": 55.14454666984073
                },
                {
                  "angle": -2.2181252159066953,
                  "length": 55.760099352195084
                },
                {
                  "angle": -2.179157357798051,
                  "length": 56.05085507573571
                },
                {
                  "angle": -2.1506496037572,
                  "length": 56.55530062675539
                },
                {
                  "angle": -2.1243245082493294,
                  "length": 56.42119992818393
                },
                {
                  "angle": -2.096752734216283,
                  "length": 56.87260736876079
                },
                {
                  "angle": -2.071091804369019,
                  "length": 57.29999714688471
                },
                {
                  "angle": -2.047289163760314,
                  "length": 56.33190458089495
                },
                {
                  "angle": -2.0251083000674637,
                  "length": 55.876541761531406
                },
                {
                  "angle": -2.0051176706681044,
                  "length": 55.347274917774904
                },
                {
                  "angle": -1.9930087928162068,
                  "length": 55.09439520459735
                },
                {
                  "angle": -1.9776938579654109,
                  "length": 54.72432901298753
                },
                {
                  "angle": -1.9721216633386776,
                  "length": 54.59407917096007
                },
                {
                  "angle": -1.9573711075718723,
                  "length": 54.316019474917255
                },
                {
                  "angle": -1.9426166038939305,
                  "length": 53.997603493799154
                },
                {
                  "angle": -1.920317705740611,
                  "length": 53.819746258686926
                },
                {
                  "angle": -1.905237914325372,
                  "length": 53.47620640308389
                },
                {
                  "angle": -1.883571164506867,
                  "length": 52.8213157371906
                },
                {
                  "angle": -1.8677433427640526,
                  "length": 52.815428121283595
                },
                {
                  "angle": -1.8476365058325868,
                  "length": 52.50303366447699
                },
                {
                  "angle": -1.827832914047251,
                  "length": 52.219457611871206
                },
                {
                  "angle": -1.8061203315886474,
                  "length": 52.087147334415846
                },
                {
                  "angle": -1.792512382897296,
                  "length": 51.92255076018926
                },
                {
                  "angle": -1.774401221673304,
                  "length": 51.71989008953257
                },
                {
                  "angle": -1.743383989575095,
                  "length": 51.451901125610945
                },
                {
                  "angle": -1.7221875246609077,
                  "length": 51.27397554970223
                },
                {
                  "angle": -1.699079813923651,
                  "length": 51.10746780025737
                },
                {
                  "angle": -1.675869623627107,
                  "length": 50.816989801484866
                },
                {
                  "angle": -1.6554637866749873,
                  "length": 50.718408787604005
                },
                {
                  "angle": -1.6317070049374984,
                  "length": 50.63062147580002
                },
                {
                  "angle": -1.6188985955220176,
                  "length": 50.59525098029218
                },
                {
                  "angle": -1.6017819604636807,
                  "length": 50.56099801045469
                },
                {
                  "angle": -1.5897315554196656,
                  "length": 50.54578905100123
                },
                {
                  "angle": -1.573408810378061,
                  "length": 50.53690036412857
                },
                {
                  "angle": -1.5532365560463255,
                  "length": 50.544520293964304
                },
                {
                  "angle": -1.537436842602595,
                  "length": 50.66492275548515
                },
                {
                  "angle": -1.5225433313371848,
                  "length": 50.6480173073821
                },
                {
                  "angle": -1.5022133560459214,
                  "length": 50.70827514119557
                },
                {
                  "angle": -1.4829309619636526,
                  "length": 50.95125325276616
                },
                {
                  "angle": -1.4584163205313514,
                  "length": 50.925147672532724
                },
                {
                  "angle": -1.434400126123704,
                  "length": 51.07830464324308
                },
                {
                  "angle": -1.412482419714078,
                  "length": 51.24475334747155
                },
                {
                  "angle": -1.3882676453897955,
                  "length": 51.458753447678006
                },
                {
                  "angle": -1.3710505218950524,
                  "length": 51.63047873834497
                },
                {
                  "angle": -1.3585803317924656,
                  "length": 51.76518308737088
                },
                {
                  "angle": -1.3539229572709408,
                  "length": 51.81774290249811
                },
                {
                  "angle": -1.3365939315607327,
                  "length": 51.92458862271242
                },
                {
                  "angle": -1.3199775912381693,
                  "length": 52.13847112137664
                },
                {
                  "angle": -1.3100889853501816,
                  "length": 52.27346483639521
                },
                {
                  "angle": -1.3018618547364125,
                  "length": 52.39022400768273
                },
                {
                  "angle": -1.2935572741058374,
                  "length": 52.512225295653515
                },
                {
                  "angle": -1.2716194345999035,
                  "length": 52.8548791955038
                },
                {
                  "angle": -1.2529860067904584,
                  "length": 53.16966802134781
                },
                {
                  "angle": -1.2261672201076013,
                  "length": 53.662335476466765
                },
                {
                  "angle": -1.208644815139056,
                  "length": 54.01031994234985
                },
                {
                  "angle": -1.1992103257543365,
                  "length": 54.20648308108659
                },
                {
                  "angle": -1.1876339592796759,
                  "length": 54.45578635046975
                },
                {
                  "angle": -1.1617912561456267,
                  "length": 54.990478675220466
                },
                {
                  "angle": -1.1254226274673602,
                  "length": 55.90859455983851
                },
                {
                  "angle": -1.1113154270056733,
                  "length": 56.51816987207639
                },
                {
                  "angle": -1.0677121537399401,
                  "length": 57.202102026986196
                }
              ]

        }
        checkPomao(point){
            let link = new LineOP(this.body, point)
            let angle = link.angle()
            let dis = link.hypotenuse()
            if(this.dir == 1){
                for(let t = 0;t<this.pomarray.length-1;t++){
                    if (angle > this.pomarray[t].angle && angle < this.pomarray[t+1].angle) {
                        if (dis < ((this.pomarray[t].length+this.pomarray[t+1].length)*.5) * (this.body.radius/50)) {
                            return true
                        }
                    } 
                }
            }else{
                for(let t = 0;t<this.pomarrayleft.length-1;t++){
                    if (angle > this.pomarrayleft[t].angle && angle < this.pomarrayleft[t+1].angle) {
                        if (dis < ((this.pomarrayleft[t].length+this.pomarrayleft[t+1].length)*.5) * (this.body.radius/50)) {
                            return true
                        }
                    } 
                }
            }
        }
        tonguecast() {

            this.tongueray = []
            if (!this.body.repelCheck(this.tongue)) {
                for (let t = 0; t < 30; t++) {
                    const ray = new Circlec(this.body.x + (this.tonguex - (this.tonguex * .033333 * t)), (-(Math.sin(this.timeloop) * 1.5)) + this.body.y + (this.tonguey - (this.tonguey * .033333 * t)), 1.5, "red")
                    if (keysPressed['q']) {
                        ray.draw()
                    }
                    this.tongueray.push(ray)
                }

            }

            this.tonguebox = new Shape(this.tongueray)
        }
        tongueFix() {

            if (level == 10 || level == 9 || level == 7) {
                for (let t = 0; t < floors.length; t++) {
                    if (level == 9 || level == 10) {
                        if (level == 10) {
                            if (t < ((Math.round((2100 + this.body.x) / 5)) - 60) % floors.length) {
                                t = ((Math.round((2100 + this.body.x) / 5)) - 60) % floors.length
                            }
                            if (t > ((Math.round((2100 + this.body.x) / 5)) + 60) % floors.length && t < 1860) {
                                t = 1860
                            }
                        }
                        if (level == 9) {
                            if (t < ((Math.round((2100 + this.body.x) / 3)) - 90) % floors.length) {
                                t = ((Math.round((2100 + this.body.x) / 3)) - 90) % floors.length
                            }
                            if (t > ((Math.round((2100 + this.body.x) / 3)) + 90) % floors.length) {
                                break
                            }
                        }
                    }



                    // console.log(floors[t].isPointInside(pomao.tongue) )

                    if (level == 10 || level == 9 || level == 7) {
                        if (floors[t].snowThing(pomao.tongue) || pomao.tonguebox.isInsideOf(floors[t]) && !this.body.repelCheck(this.tongue)) { //
                            //   console.log("snowfail?")  //hits this on thin floors?  while clipping?
                            if (!ungrapplable.includes(floors[t])) {
                                // tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-this.body.radius))
                                // this.body.y = floors[t].y-this.body.radius
                                if (this.tongueymom < 0) {
                                    if (Math.abs(this.tonguey) > 1) {
                                        this.body.symom += this.tongueymom * 1.1
                                    }
                                    if (Math.abs(this.tonguex) > 15) {
                                        if (this.dir == -1) {
                                            this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                        } else {
                                            this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                        }
                                    }
                                    this.tongueymom *= .49
                                    this.tonguexmom *= .49
                                } else {
                                    if (Math.abs(this.tonguey) > 1) {
                                        this.body.symom -= this.tongueymom * 1.1
                                    }
                                    if (Math.abs(this.tonguex) > 15) {
                                        if (this.dir == -1) {
                                            this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                        } else {
                                            this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                        }
                                    }
                                    if (!roofs.includes(floors[t]) || (1 == 1)) {

                                        // if (pomao.body.x < floors[t].x || (1 == 1)) {
                                        this.tongueymom *= .49
                                        this.tonguexmom *= .49
                                        // }
                                    }
                                }
                                if (pomao.body.ymom > 0) {
                                    pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                                }
                                pomao.body.ymom = 0
                                pomao.body.xmom *= .975
                                // this.hng = 0  // infinite flutter?
                                this.grounded = 2   // infinite flutter on walls
                                break
                            }
                        }


                    }
                }
            }
        }
        gravity() {


            for (let t = 0; t < magnets.length; t++) {
                if (Math.abs(magnets[t].electron.x - pomao.body.x) < 900 || Math.abs(magnets[t].positron.x - pomao.body.x) < 900 || Math.abs(magnets[t].electron.y - pomao.body.y) < 900 || Math.abs(magnets[t].positron.y - pomao.body.y) < 900) {
                    magnets[t].physics()
                }
            }

            this.flapstep++
            if (this.flapstep % 3 == 0) {

                this.flap++
                this.flap %= 3
            }

            if (this.tripping > 0) {

                for (let t = 0; t < 3; t++) {

                    this.positron.xmom -= (this.positron.x - this.electron.x) / 1000
                    this.electron.xmom += (this.positron.x - this.electron.x) / 1000
                    this.positron.ymom -= (this.positron.y - this.electron.y) / 1000
                    this.electron.ymom += (this.positron.y - this.electron.y) / 1000

                    this.positron.xmom -= (this.positron.x - this.body.x) / 1000
                    this.electron.xmom -= (this.electron.x - this.body.x) / 1000
                    this.positron.ymom -= (this.positron.y - this.body.y) / 1000
                    this.electron.ymom -= (this.electron.y - this.body.y) / 1000

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

                for (let t = 0; t < 3; t++) {

                    this.positron2.xmom -= (this.positron2.x - this.electron2.x) / 1000
                    this.electron2.xmom += (this.positron2.x - this.electron2.x) / 1000
                    this.positron2.ymom -= (this.positron2.y - this.electron2.y) / 1000
                    this.electron2.ymom += (this.positron2.y - this.electron2.y) / 1000

                    this.positron2.xmom -= (this.positron2.x - this.body.x) / 1000
                    this.electron2.xmom -= (this.electron2.x - this.body.x) / 1000
                    this.positron2.ymom -= (this.positron2.y - this.body.y) / 1000
                    this.electron2.ymom -= (this.electron2.y - this.body.y) / 1000

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
            // //////console.log(this.electron, this.positron)

            if (pomao.grounded == 1) {
                if (this.body.ymom > 0) {
                    if (!keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) {
                        if (this.body.ymom > 0) {
                            this.body.ymomstorage = this.body.ymom + this.body.symom
                        }
                        this.body.ymom = 0
                    } else {
                        // this.body.ymom += 11.1  //literally what is this
                    }
                }
                if (this.jumping == 0) {
                    this.timeloopx = 0
                }
                if (this.pounding > 0) {
                    this.pounding--
                }
                this.jumping = 0
                this.hng = 0

                // for(let t = 1; t<this.eggs.length; t++){
                //     this.eggs[t].posy = []
                // }
            } else if (pomao.grounded == 2) {
                this.runner = 0
                if (this.body.ymom > 0) {
                    if (!keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) {
                        if (this.body.ymom > 0) {
                            this.body.ymomstorage = this.body.ymom + this.body.symom
                        }
                        this.body.ymom = 0
                    } else {
                        this.body.ymom += 11.1
                    }
                } // this will never trigger
                this.jumping = 2
                // this.body.ymom += .1
                if (this.rootedframe <= 0) {
                    this.rooted = {}
                }
                this.rootedframe--
                pomao.grounded = 0
            } else {
                // if(this.jumping == 0){
                this.jumping = 1
                // }
                this.body.ymom += .1
                if (this.rootedframe <= 0) {
                    this.rooted = {}
                }
                this.rootedframe--

            }
            pomao.grounded = 0

            // if (level == 10) {
            //     let floorsmacker = snowfloor.snowFloorShapeTest(pomao.body)
            //     if (typeof floorsmacker == "number") {
            //         if (Math.abs(this.body.y - floorsmacker) <= this.body.radius) {
            //             this.body.y = floorsmacker - (this.body.radius)
            //             // tutorial_canvas_context.translate(0, this.body.y - (floorsmacker - this.body.radius))
            //             pomao.grounded = 1

            //             if (this.pounding == 10) {
            //                 const cloudpuff = new Shockwave(this.body)
            //                 shocks.push(cloudpuff)
            //             }
            //             if (pomao.body.symom != 0 || pomao.body.sxmom != 0) {
            //                 if (this.wingcheck == 0) {
            //                     this.tonguex = 0
            //                     this.tonguey = 0
            //                     resettonguediff()
            //                 }
            //             }
            //             if (pomao.body.ymom > 0) {
            //                 pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
            //             }
            //             if (this.wingcheck == 0) {
            //                 pomao.body.symom = 0
            //                 pomao.body.ymom = 0
            //                 pomao.body.sxmom = 0
            //             }
            //         }
            //     }
            //     } else {

            for (let t = 0; t < floors.length; t++) {

                if (level == 9 || level == 10) {
                    if (level == 10) {
                        if (t < ((Math.round((2100 + this.body.x) / 5)) - 60) % floors.length) {
                            t = ((Math.round((2100 + this.body.x) / 5)) - 60) % floors.length
                        }
                        if (t > ((Math.round((2100 + this.body.x) / 5)) + 60) % floors.length && t < 1860) {
                            t = 1860
                        }
                    }
                    if (level == 9) {
                        if (t < ((Math.round((2100 + this.body.x) / 3)) - 90) % floors.length) {
                            t = ((Math.round((2100 + this.body.x) / 3)) - 90) % floors.length
                        }
                        if (t > ((Math.round((2100 + this.body.x) / 3)) + 90) % floors.length) {
                            break
                        }
                    }
                }
                let linkfloorer = new LineOP(floors[t], pomao.body)
                if (linkfloorer.hypotenuse() > pomao.tongue.radius + (Math.max(floors[t].width, floors[t].height) * 2) + (Math.abs(pomao.tonguey)) + Math.abs(pomao.tonguex)) {
                    continue
                }







                if ((floors[t].doesPerimeterTouch(pomao.tongue) || pomao.tonguebox.isInsideOf(floors[t])) && !this.body.repelCheck(this.tongue)) {
                    //   console.log("43dss")  //hits this on thin floors?  while clipping?
                    if (!ungrapplable.includes(floors[t])) {
                        // tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-this.body.radius))
                        // this.body.y = floors[t].y-this.body.radius
                        if (this.tongueymom < 0) {
                            if (Math.abs(this.tonguey) > 1) {
                                this.body.symom += this.tongueymom * 1.1
                            }
                            if (Math.abs(this.tonguex) > 15) {
                                if (this.dir == -1) {
                                    this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                } else {
                                    this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                }
                            }
                            this.tongueymom *= .49
                            this.tonguexmom *= .49
                        } else {
                            if (Math.abs(this.tonguey) > 1) {
                                this.body.symom -= this.tongueymom * 1.1
                            }
                            if (Math.abs(this.tonguex) > 15) {
                                if (this.dir == -1) {
                                    this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                } else {
                                    this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                }
                            }
                            if (!roofs.includes(floors[t]) || (1 == 1)) {

                                if (pomao.body.x < floors[t].x || (1 == 1)) {
                                    this.tongueymom *= .49
                                    this.tonguexmom *= .49
                                }
                            }
                        }
                        if (pomao.body.ymom > 0) {
                            pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                        }
                        pomao.body.ymom = 0
                        pomao.body.xmom *= .975
                        // this.hng = 0  // infinite flutter?
                        this.grounded = 2   // infinite flutter on walls
                        break
                    }
                }

                if (t > 0 && (keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) && !walls.includes(floors[t])) {

                } else {







                    if (squarecirclefacetopbottom(floors[t], this.body)) {

                        if (level == 9) {

                            if (typeof floors[t].waggle == "number") {
                                pomao.grounded = 1
                                floors[t].active = 1
                                let value = 0
                                if (t > 150 && t < floors.length - 151) {
                                    for (let n = t - 150; n < (t + 150); n++) {
                                        value += (Math.PI / 300)
                                        if (this.body.ymom > 11) {
                                            let bump = (this.body.ymom * Math.sin(value)) * 5
                                            if (bump < this.body.ymom * 5.01) {
                                                bump *= 1.01
                                            }
                                            if (bump > this.body.ymom * .99) {
                                                // bump = this.body.ymom
                                            }
                                            if (floors[t].y < 500) {
                                                floors[n].waggle += bump
                                            }
                                        }
                                    }
                                }

                                pomao.body.ymom = 0
                                pomao.body.symom = 0
                                pomao.body.sxmom = 0
                            }
                        }

                    }

                    if (walls.includes(floors[t]) && squarecirclefacetopbottom(floors[t], this.body) && typeof floors[t].waggle != "number") {
                        pomao.grounded = 1
                        floors[t].active = 1

                        if (blocks.includes(floors[t])) {
                            if (this.pounding == 10) {
                                floors[t].ymom = this.body.radius
                                if (floors[t].isBlocked == false) {
                                    floors[t].move()
                                }
                            }
                        }
                        if (pomao.body.x > floors[t].x) {
                            this.blocked = 1
                        } else {
                            this.blocked = -1
                        }

                        if (this.pounding == 10) {
                            const cloudpuff = new Shockwave(this.body)
                            shocks.push(cloudpuff)
                        }
                        if (Math.abs(this.body.y - floors[t].y) <= this.body.radius || typeof floors[t].waggle == "number") {

                            floors[t].active = 1

                            if (blocks.includes(floors[t])) {
                                if (this.pounding == 10) {
                                    floors[t].ymom = this.body.radius
                                    if (floors[t].isBlocked == false) {
                                        floors[t].move()
                                    }
                                }
                            }
                            if (pomao.body.x > floors[t].x) {
                                this.blocked = 1
                            } else {
                                this.blocked = -1
                            }

                            if (this.pounding == 10) {
                                const cloudpuff = new Shockwave(this.body)
                                shocks.push(cloudpuff)
                            }
                            if (Math.abs(this.body.y - floors[t].y) <= this.body.radius || typeof floors[t].waggle == "number") {

                                tutorial_canvas_context.translate(0, this.body.y - (floors[t].y - (this.body.radius)))
                                this.body.y = floors[t].y - (this.body.radius)
                                pomao.grounded = 1
                                floors[t].active = 1
                                if (blocks.includes(floors[t])) {
                                    if (this.pounding == 10) {
                                        floors[t].ymom = this.body.radius
                                        if (floors[t].isBlocked == false) {
                                            floors[t].move()
                                        }
                                    }
                                }

                                if (this.pounding == 10) {
                                    const cloudpuff = new Shockwave(this.body)
                                    shocks.push(cloudpuff)
                                }
                                if (pomao.body.symom != 0 || pomao.body.sxmom != 0) {
                                    if (this.wingcheck == 0) {
                                        this.tonguex = 0
                                        this.tonguey = 0
                                        resettonguediff()
                                    }
                                }
                                if (pomao.body.ymom > 0) {
                                    pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                                }
                                if (this.wingcheck == 0) {
                                    pomao.body.symom = 0
                                    pomao.body.ymom = 0
                                    pomao.body.sxmom = 0
                                }
                                break
                            }
                        }
                    }

                    if (typeof floors[t].waggle == "number") {
                        if (squarecirclefeet(floors[t], pomao.body)) {
                            if (t < floors.length - 2) {
                                if (floors[t].y < floors[t + 1].y) {
                                    if (floors[t].y > floors[t].y - this.body.radius) {
                                        tutorial_canvas_context.translate(0, this.body.y - (floors[t + 1].y - this.body.radius))
                                        this.body.y = floors[t + 1].y - this.body.radius
                                        // console.log("smacky")
                                        //working
                                        pomao.grounded = 1
                                        floors[t].active = 1
                                        pomao.body.symom = 0
                                        pomao.body.sxmom = 0
                                        pomao.dry = 1
                                        this.pounding = 0
                                    }
                                } else {
                                    if (floors[t + 1].y > floors[t].y - this.body.radius) {
                                        tutorial_canvas_context.translate(0, this.body.y - (floors[t + 1].y - this.body.radius) - ((floors[t].y - floors[t + 1].y) * .9))
                                        this.body.y = floors[t + 1].y - this.body.radius + ((floors[t].y - floors[t + 1].y) * .9)
                                        // console.log("smackx")
                                        pomao.grounded = 1
                                        floors[t].active = 1
                                        pomao.body.symom = 0
                                        pomao.body.sxmom = 0
                                        pomao.dry = 1
                                        this.pounding = 0
                                    }

                                }
                            }
                        }
                    }
                    if (squarecirclefeet(floors[t], this.body)) { // problem?  // yes sxmom not reset in snow
                        // console.log("top")
                        if ((floors[t].doesPerimeterTouch(pomao.tongue) || pomao.tonguebox.isInsideOf(floors[t])) && !this.body.repelCheck(this.tongue)) {
                            // console.log("4369")  //hits this on thin floors?
                            if (!ungrapplable.includes(floors[t])) {
                                // tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-this.body.radius))
                                // this.body.y = floors[t].y-this.body.radius
                                if (this.tongueymom < 0) {
                                    if (Math.abs(this.tonguey) > 1) {
                                        this.body.symom += this.tongueymom * 1.1
                                    }
                                    if (Math.abs(this.tonguex) > 15) {
                                        if (this.dir == -1) {
                                            this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                        } else {
                                            this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                        }
                                    }
                                    this.tongueymom *= .49
                                    this.tonguexmom *= .49
                                } else {
                                    if (Math.abs(this.tonguey) > 1) {
                                        this.body.symom -= this.tongueymom * 1.1
                                    }
                                    if (Math.abs(this.tonguex) > 15) {
                                        if (this.dir == -1) {
                                            this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                        } else {
                                            this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                        }
                                    }
                                    if (!roofs.includes(floors[t]) || (1 == 1)) {

                                        if (pomao.body.x < floors[t].x || (1 == 1)) {
                                            this.tongueymom *= .49
                                            this.tonguexmom *= .49
                                        }
                                    }
                                }
                                if (pomao.body.ymom > 0) {
                                    pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                                }
                                pomao.body.ymom = 0
                                pomao.body.xmom *= .975
                                // this.hng = 0  // infiinite flutter?
                                // this.grounded = 2
                                break
                            }
                        }
                        if (jellys.includes(floors[t])) {
                            if (this.body.ymom > 0) {
                                this.body.ymom *= .9
                            } else {
                                this.body.ymom *= .95
                            }
                            // if(this.body.symom>0){
                            this.body.symom *= .4
                            this.body.sxmom *= .4
                            // }
                            if (floors[t].isPointInside(this.body)) {
                                pomao.grounded = 1
                                floors[t].active = 1

                                if (nails.includes(floors[t])) {
                                    if (this.pounding == 10) {
                                        floors[t].ymom = this.body.radius
                                        // if(floors[t].isBlocked == false){
                                        floors[t].move()
                                        // }
                                    }
                                }

                            }
                        } else {
                            if ((floors[t].doesPerimeterTouch(pomao.tongue) || pomao.tonguebox.isInsideOf(floors[t])) && !this.body.repelCheck(this.tongue)) {
                                if (!ungrapplable.includes(floors[t])) {
                                    // tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-this.body.radius))
                                    // this.body.y = floors[t].y-this.body.radius
                                    if (this.tongueymom < 0) {
                                        if (Math.abs(this.tonguey) > 1) {
                                            this.body.symom += this.tongueymom * 1.1
                                        }
                                        if (Math.abs(this.tonguex) > 15) {
                                            if (this.dir == -1) {
                                                this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                            } else {
                                                this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                            }
                                        }
                                        this.tongueymom *= .49
                                        this.tonguexmom *= .49
                                    } else {
                                        if (Math.abs(this.tonguey) > 1) {
                                            this.body.symom -= this.tongueymom * 1.1
                                        }
                                        if (Math.abs(this.tonguex) > 15) {
                                            if (this.dir == -1) {
                                                this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                            } else {
                                                this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                            }
                                        }
                                        if (!roofs.includes(floors[t]) || (1 == 1)) {

                                            if (pomao.body.x < floors[t].x || (1 == 1)) {
                                                this.tongueymom *= .49
                                                this.tonguexmom *= .49
                                            }
                                        }
                                    }
                                    if (pomao.body.ymom > 0) {
                                        pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                                    }
                                    pomao.body.ymom = 0
                                    pomao.body.xmom *= .975
                                    // this.hng = 0  // infiinite flutter?
                                    this.dry = 1
                                    break
                                }
                            }


                            if (Math.abs(this.body.y - floors[t].y) <= this.body.radius) {  ///sxmom not reset in snow
                                // console.log("testerxmom")

                                tutorial_canvas_context.translate(0, this.body.y - (floors[t].y - this.body.radius))
                                this.body.y = floors[t].y - this.body.radius
                                pomao.grounded = 1
                                floors[t].active = 1
                                if (nails.includes(floors[t])) {
                                    if (this.pounding == 10) {
                                        this.pounding = 0 // floor clip?
                                        floors[t].ymom = this.body.radius
                                        // if(floors[t].isBlocked == false){
                                        floors[t].move()
                                        // }
                                    }
                                }
                                if (pomao.body.symom != 0 || pomao.body.sxmom != 0) {
                                    if (this.wingcheck == 0) {
                                        this.tonguex = 0
                                        this.tonguey = 0
                                        resettonguediff()
                                    }
                                }
                                if (pomao.body.ymom > 0) {
                                    pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                                }
                                if (this.wingcheck == 0) {
                                    pomao.body.symom = 0
                                    pomao.body.ymom = 0
                                    pomao.body.sxmom = 0
                                    // console.log(this.body.radius*.65, floors[t].x-this.body.x)
                                }
                                break
                            }

                            if (this.pounding == 10) {
                                const cloudpuff = new Shockwave(this.body)
                                shocks.push(cloudpuff)
                            }
                        }

                        if (this.pounding == 10) {
                            const cloudpuff = new Shockwave(this.body)
                            shocks.push(cloudpuff)
                        }

                    } else if ((floors[t].doesPerimeterTouch(pomao.tongue) || pomao.tonguebox.isInsideOf(floors[t])) && !this.body.repelCheck(this.tongue)) {
                        if (!ungrapplable.includes(floors[t])) {
                            // tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-this.body.radius))
                            // this.body.y = floors[t].y-this.body.radius
                            if (this.tongueymom < 0) {
                                if (Math.abs(this.tonguey) > 1) {
                                    this.body.symom += this.tongueymom * 1.1
                                }
                                if (Math.abs(this.tonguex) > 15) {
                                    if (this.dir == -1) {
                                        this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                    } else {
                                        this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                    }
                                }
                                this.tongueymom *= .49
                                this.tonguexmom *= .49
                            } else {
                                if (Math.abs(this.tonguey) > 1) {
                                    this.body.symom -= this.tongueymom * 1.1
                                }
                                if (Math.abs(this.tonguex) > 15) {
                                    if (this.dir == -1) {
                                        this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                    } else {
                                        this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                    }
                                }
                                if (!roofs.includes(floors[t]) || (1 == 1)) {

                                    if (pomao.body.x < floors[t].x || (1 == 1)) {
                                        this.tongueymom *= .49
                                        this.tonguexmom *= .49
                                    }
                                }
                            }
                            if (pomao.body.ymom > 0) {
                                pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                            }
                            pomao.body.ymom = 0
                            pomao.body.xmom *= .975
                            // this.hng = 0  // infiinite flutter?
                            this.dry = 1
                            break
                        }
                    }
                }

            }

            // }
            if (this.wingcheck == 1) {
                if (this.tongueymom < 0) {
                    if (Math.abs(this.tonguey) > 1) {
                        this.body.symom += this.tongueymom * 1.1
                    }
                    if (Math.abs(this.tonguex) > 15) {
                        if (this.dir == -1) {
                            this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                        } else {
                            this.body.sxmom += Math.abs(this.tonguexmom * 3)
                        }
                    }
                    this.tongueymom *= .49
                    this.tonguexmom *= .49
                } else {
                    if (Math.abs(this.tonguey) > 1) {
                        this.body.symom -= this.tongueymom * 1.1
                    }
                    if (Math.abs(this.tonguex) > 15) {
                        if (this.dir == -1) {
                            this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                        } else {
                            this.body.sxmom += Math.abs(this.tonguexmom * 3)
                        }
                    }
                    this.tongueymom *= .49
                    this.tonguexmom *= .49

                }
            }
            for (let t = 0; t < ramps.length; t++) {

                if (t > 0 && (keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) && !walls.includes(ramps[t])) {

                } else {

                    if (squarecirclefeet(ramps[t], this.body)) {
                        if (jellys.includes(ramps[t])) {
                            if (this.body.ymom > 0) {
                                this.body.ymom *= .9
                            } else {
                                this.body.ymom *= .95
                            }
                            // if(this.body.symom>0){
                            this.body.symom *= .4
                            // }
                            if (ramps[t].isPointInside(this.body)) {
                                pomao.grounded = 1

                            }
                        } else {
                            if (Math.abs(this.body.y - ramps[t].y) <= this.body.radius) {
                                if (ramps90.includes(ramps[t])) {
                                    if (ramps[t].x > pomao.body.x) {

                                        tutorial_canvas_context.translate(0, this.body.y - (ramps[t].y - this.body.radius))
                                        this.body.y = ramps[t].y - this.body.radius
                                        pomao.grounded = 1
                                        if (pomao.body.symom != 0 || pomao.body.sxmom != 0) {
                                            if (this.wingcheck == 0) {
                                                this.tonguex = 0
                                                this.tonguey = 0
                                                resettonguediff()
                                            }
                                        }
                                        if (pomao.body.ymom > 0) {
                                            pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                                        }
                                        if (this.wingcheck == 0) {
                                            pomao.body.symom = 0
                                            pomao.body.ymom = 0
                                            pomao.body.sxmom = 0
                                        }
                                        break

                                    }

                                } else {
                                    tutorial_canvas_context.translate(0, this.body.y - (ramps[t].y - this.body.radius))
                                    this.body.y = ramps[t].y - this.body.radius
                                    pomao.grounded = 1
                                    if (pomao.body.symom != 0 || pomao.body.sxmom != 0) {
                                        if (this.wingcheck == 0) {
                                            this.tonguex = 0
                                            this.tonguey = 0
                                            resettonguediff()
                                        }
                                    }
                                    if (pomao.body.ymom > 0) {
                                        pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                                    }
                                    if (this.wingcheck == 0) {
                                        pomao.body.symom = 0
                                        pomao.body.ymom = 0
                                        pomao.body.sxmom = 0
                                    }
                                    break
                                }
                            }
                        }
                    } else if (ramps[t].isPointInside(pomao.tongue) || ((typeof ramps[t].radius == "number") && (pomao.tonguebox.isInsideOf(ramps[t]) || ramps[t].repelCheck(pomao.tongue)))) {

                        // tutorial_canvas_context.translate(0,  this.body.y-(ramps[t].y-this.body.radius))
                        // this.body.y = ramps[t].y-this.body.radius
                        if (this.tongueymom < 0) {

                            // if(!keysPressed['l'] && !keysPressed['j']){

                            // }else{
                            this.body.symom += this.tongueymom * 1.1
                            // }
                            if (Math.abs(this.tonguex) > 15) {
                                if (this.dir == -1) {
                                    this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                } else {
                                    this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                }
                            }
                            this.tongueymom *= .5
                            this.tonguexmom *= .5
                        } else {
                            // if(!keysPressed['l'] && !keysPressed['j']){

                            // }else{
                            this.body.symom -= this.tongueymom * 1.1
                            // }
                            if (Math.abs(this.tonguex) > 15) {
                                if (this.dir == -1) {
                                    this.body.sxmom -= Math.abs(this.tonguexmom * 3)
                                } else {
                                    this.body.sxmom += Math.abs(this.tonguexmom * 3)
                                }
                            }
                            if (!roofs.includes(ramps[t])) {
                                this.tongueymom *= .49
                                this.tonguexmom *= .49
                            }
                        }

                        if (pomao.body.ymom > 0) {
                            pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                        }
                        pomao.body.ymom = 0
                        pomao.body.xmom = 0
                        this.dry = 1
                        break
                    }
                }

            }
            this.footspot = new Circle(this.body.x, this.body.y + (this.body.radius - .01), 3, "red")
            for (let t = 0; t < ramps.length; t++) {

                // this.accept1 = (this.y-this.tip)/(this.x1-this.x)
                // this.accept2 = (this.y-this.tip)/(this.x2-this.x)

                // const yrat = (ramps[t].y-ramps[t].tip)
                // const x1dis = ramps[t].x1-ramps[t].x
                // const x2dis = this.footspot.x-ramps[t].x

                if (ramps[t].isPointInside(this.footspot)) {
                    for (let k = 0; k < 10000; k++) {

                        this.footspot = new Circle(this.body.x, this.body.y + (this.body.radius - 1), 3, "red")
                        if (ramps[t].isPointInside(this.footspot)) {
                            if (objsprings.includes(ramps[t])) {
                                pomao.rooted = ramps[t]
                                pomao.rootedframe = 10
                            }

                            ramps[t].xmom += (this.body.xmom + this.body.sxmom) / 3
                            if (pomao.body.ymom > 0) {
                                ramps[t].ymom += (this.body.ymom + this.body.symom) / 8
                            }
                            if (ramps[t].ymom > 5) {
                                ramps[t].ymom = 5
                            }
                            if (ramps[t].ymom < -5) {
                                ramps[t].ymom = -5
                            }
                            this.body.sxmom = 0
                            this.body.symom = 0
                            // this.body.xmom = 0 // counter 123232
                            this.body.ymom = 0
                            if (k == 0) {
                                if (this.pounding > 0) {
                                    this.pounding--
                                }
                            }
                            this.jumping = 0
                            this.hng = 0
                            tutorial_canvas_context.translate(0, this.body.y - (this.footspot.y - this.body.radius))
                            this.body.y = this.footspot.y - this.body.radius

                        }
                    }

                    pomao.grounded = 1
                    break
                }
            }

            for (let t = 1; t < this.eggs.length; t++) {
                if (this.eggs[t].marked == 0) {
                    this.eggs[t].steery()
                }
            }

            if (keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) {
            } else {
                this.tongueFix()
            }
            this.wingcheck = 0

        }
        draw() {
            this.eggmake--
            if (this.eggmake > 0) {
                if (this.eggmake % 10 == 0) {
                    if (pomao.eggs.length < 16) {
                        const seepx = new Seed(pomao.eggs[pomao.eggs.length - 1])
                        pomao.eggs.push(seepx)
                    }
                }
            }
            this.high--
            this.tripping--
            if (this.body.ymom + this.body.symom < 0) {
                this.pounding = 0
            }
            if (this.rattled > 0) {
                this.rattled--
            } else if (this.rattled < 0) {
                this.rattled++
            }
            if (Math.abs(this.rattled < 3)) {
                this.rattled = 0
            }
            this.blush--
            this.timeloop += .05
            this.timeloops += .01
            // this.bodytight = new Circle(this.body.x,this.body.y, 10, "yellow")
            // this.bodytight = new Circle(this.body.x,this.body.y, 15, "yellow")
            this.bodyxtight = new Circle(this.body.x, this.body.y, 9, "red")
            this.bodytight = new Circle(this.body.x, this.body.y, 21, "yellow")
            // this.bodytight.draw()
            // this.bodyxtight.draw()
            this.bodyloose = new Circle(this.body.x, this.body.y, 25, "yellow")

            this.blocked = 0
            for (let t = 0; t < walls.length; t++) {
                if (squarecircleface(walls[t], pomao.body)) {
                    if (!blocks.includes(walls[t])) {

                        if (pomao.body.x > walls[t].x) {
                            this.blocked = 1
                        } else {
                            this.blocked = -1
                        }
                    }
                }
            }
            this.bonked = 0
            for (let t = 0; t < roofs.length; t++) {
                if (squarecirclehead(roofs[t], pomao.body)) {
                    this.rattled = Math.min(Math.round(20 * (Math.abs(this.body.ymom) + Math.abs(this.body.symom))), 100)

                    this.bonked = 1
                    if (this.body.ymom < 0) {
                        this.body.ymom *= -.1 //1 //.333
                    }
                    if (this.body.symom < 0) {
                        this.body.symom *= -.1 //1 //.333
                    }
                }
            }
            if (this.rattled == 50) {
                this.rattled += 40.5
            }
            if (this.rattled == 50.5) {
                this.rattled += 35.51
            }
            // if(this.rattled == 50.51){
            //     this.rattled *- -1.5
            // }
            if (this.cutscene <= 0) {
                this.control()
            }
            if (this.blocked == 0) {

                this.body.move()
            } else {
                this.body.ymove()
            }
            this.gravity()
            // this.body.draw()
            this.tonguex += this.tonguexmom
            this.tonguey += this.tongueymom
            this.tonguex -= this.body.sxmom * .05
            this.tonguey -= this.body.symom * .05


            if (this.tongue.x > this.body.x) {
                this.tonguexmom -= .5
            }
            if (this.tongue.x < this.body.x) {
                this.tonguexmom += .5
            }
            if (this.tongue.y > this.body.y && ((!keysPressed['l'] && !keysPressed['j']) || this.tongue.y > this.body.y + 5)) {
                this.tongueymom -= .5
            }
            if (this.tongue.y < this.body.y && ((!keysPressed['l'] && !keysPressed['j']) || this.tongue.y < this.body.y - 5)) {
                this.tongueymom += .5
            }
            this.fired--
            if (this.bodytight.isPointInside(this.tongue)) {
                // if(!keysPressed[' ']){
                // if(Math.abs(this.tongueymom) > 20  || Math.abs(this.tonguexmom) > 20 ){
                if (this.fired <= 0) {
                    this.tonguexmom *= 0
                    this.tongueymom *= 0
                    this.tonguex *= .9
                    this.tonguey *= .9
                }
                // }
                // }
            } else {
                this.tonguexmom *= .91
                this.tongueymom *= .91
            }
            this.tongue = new Circlec(this.body.x + this.tonguex, this.body.y + this.tonguey, 5, "blue")
            this.tongued1 = new Circle(this.body.x + this.tonguex + (this.rattled / 3), this.body.y + this.tonguey, 5, "#0000FF77")
            this.tongued2 = new Circle(this.body.x + this.tonguex - (this.rattled / 3), this.body.y + this.tonguey, 5, "#0000FF77")
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

            if (this.tongue.y > this.body.y - 14) {
                this.diry = -1
            } else {
                this.diry = 0
            }



            if (this.tongue.x > this.body.x + 14) {
                this.dir = 1
            }
            if (this.tongue.x < this.body.x - 14) {
                this.dir = -1
            }

            this.height = 64 + (Math.sin(this.timeloop) * (3 + this.pounding))
            this.width = 64 + (Math.sin(this.timeloopx) * 1)
            if (this.jumping == 1) {
                if (this.body.ymom < 0) {
                    this.height = 68 + this.pounding + Math.round((Math.abs(this.body.ymom) + Math.abs(this.hng) + Math.abs(this.body.symom)) * 1.9)
                } else {
                    this.height = 68 + this.pounding
                }
            }
            if (this.jumping == 1) {
                if (this.body.ymom < 0) {
                    this.width = 60 - (this.pounding + ((Math.abs(this.body.ymom) + Math.abs(this.hng) + Math.abs(this.body.symom)) * 1.5))
                } else {
                    this.width = 60 - this.pounding
                }
                // this.width  = 60-this.pounding
            }

            if (Math.abs(this.rattled < 3)) {
                this.rattled = 0
            }

            if (level == 1) {
                tutorial_canvas_context.fillStyle = "black";
                tutorial_canvas_context.font = `${30}px Arial`;
                // tutorial_canvas_context.fillText("M to throw eggs", 0,350)
                // tutorial_canvas_context.fillText("<- W to jump", 300,350)
                // tutorial_canvas_context.fillText("Space to lick", 310,290)
                // tutorial_canvas_context.fillText("^ hold W to hover", -400,350)
                // tutorial_canvas_context.fillText("Lick down in air (K+space) to pogo ->", -400,-120)
                // tutorial_canvas_context.fillText("Lick diagonally (K+L/J+space) before you touch the floor to gain speed ->", 800,-120)
                // tutorial_canvas_context.fillText("Hold S to pass down through thin floors     vvv", 2100,-120)
                // tutorial_canvas_context.fillText("You made it! ->", 2900,500)
                // tutorial_canvas_context.fillText(" Press N to Ground pound", 2600,220)
                // tutorial_canvas_context.fillText(" Pomao can swim >^", 3200, -500)
                // tutorial_canvas_context.fillText("Cancel your grappling momentum by tapping A/D ^", 3450, 500)
                // tutorial_canvas_context.fillText("You can go up through thin floors ^", 3880, 420) 
                // tutorial_canvas_context.fillText("pull yourself up with your tongue 'I' ^", 3880, 450)
                // tutorial_canvas_context.fillText("Canceling momentum can help you climb walls! ^", 3800, 180)
                // tutorial_canvas_context.fillText("Put an egg in the switch with M", 4050, -700)
                // tutorial_canvas_context.fillText("Nice!", 4050, -770)
                // tutorial_canvas_context.fillText("Beware the cave of the beast!", 11000, 500)
                // tutorial_canvas_context.fillText("<= <= <=", 12800, 500)
                // tutorial_canvas_context.fillText("Can't grapple ice!", 4300+(14*530),-5100-(14*150))
                // tutorial_canvas_context.fillText("Try to pogo, then flutter up", 4300+(14*530),-5100-(14*148))
                door.draw()
                if (door.isPointInside(pomao.body)) {
                    loadlvl2()
                    pmarinedisp = 0
                }
            }
            if (level == 2) {
                if (chats[1].active > 0) {
                    if (chats[1].complete == 0) {
                        pomao.disabled = 1
                        pomao.cutscene = 1
                        chats[0].words = ["talk"]
                        chats[0].words.push("Pomao, would you mind cleaning the fruits out of the back yard?")
                    } else {
                        pomao.cutscene = 0
                        pomao.disabled = 0
                    }
                }
                if (fruits.length == 0) {

                    chats[2].body.x = pomao.body.x
                    chats[2].body.y = pomao.body.y
                    pomao.cutscene = 1
                    if (pmarinedisp == 0) {
                        chats[2].active = 1
                        chats[2].body.x = pomao.body.x
                        chats[2].body.y = pomao.body.y
                    }
                    if (pomao.body.x + 50 > pmarinedisp + 5500) {
                        chats[2].body.x = pomao.body.x
                        chats[2].body.y = pomao.body.y
                        // chats[2].active = 1
                    } else {
                        pmarinedisp -= 9
                    }
                }
                if (chats[2].complete == 1) {
                    pmarinedisp = 0
                    loadlvl3()
                }


                let momheight = 70 + (Math.sin(((pomao.timeloop * 1.3) + 3.14)) * 1.7)
                tutorial_canvas_context.drawImage(pomomimg, 0, 0, pomomimg.width, pomomimg.height, 500, -590 - (Math.sin(((pomao.timeloop * 1.3) + 3.14)) * 1.9), 70, momheight)

                let pawheight = 70 + (Math.sin(((pomao.timeloop * .75) + 3.14)) * 2)
                tutorial_canvas_context.drawImage(pawmaoimg, 0, 0, pawmaoimg.width, pawmaoimg.height, 2500, -3040 - (Math.sin(((pomao.timeloop * .75) + 3.14)) * 1.9), 70, pawheight)

                let jawheight = 70 + (Math.sin(((pomao.timeloop * 1.75) + 3.14)) * 2)
                if (pomao.body.x < 1260) {
                    tutorial_canvas_context.drawImage(jomaoimgl, 0, 0, pawmaoimg.width, pawmaoimg.height, 1225, -1070 - (Math.sin(((pomao.timeloop * 1.75) + 3.14)) * 1.9), 70, jawheight)

                } else {

                    tutorial_canvas_context.drawImage(jomaoimg, 0, 0, pawmaoimg.width, pawmaoimg.height, 1225, -1070 - (Math.sin(((pomao.timeloop * 1.75) + 3.14)) * 1.9), 70, jawheight)
                }



                tutorial_canvas_context.drawImage(pomarinel, 0, 0, pomarine.width, pomarine.height, 5500 + pmarinedisp, -35, 70, 70)
                lvl2basemusic.play()
            } else {
                lvl2basemusic.pause()
            }
            if (level == 3) {
                level3basemusic.play()


                tutorial_canvas_context.drawImage(propimg, 0, 0, propimg.width, propimg.height, 500, -400, propimg.width / 2, propimg.height / 2)

                tutorial_canvas_context.drawImage(pomarinel, 0, 0, pomarine.width, pomarine.height, 4500 - pmarinedisp, -35 + pmarinedisp, 70, 70)
                if (jailswitch == 0) {

                    let momheight = 70 + (Math.sin(((pomao.timeloop * 1.3) + 3.14)) * 1.7)
                    tutorial_canvas_context.drawImage(prisoner1img, 0, 0, prisoner1img.width, prisoner1img.height, 200, -35 - (Math.sin(((pomao.timeloop * 1.3) + 3.14)) * 1.9), 70, momheight)

                    let pawheight = 70 + (Math.sin(((pomao.timeloop * .75) + 3.14)) * 2)
                    tutorial_canvas_context.drawImage(prisoner2img, 0, 0, prisoner2img.width, prisoner2img.height, 600, -35 - (Math.sin(((pomao.timeloop * .75) + 3.14)) * 1.9), 70, pawheight)

                    let prisoner3height = 68 + (Math.sin(((pomao.timeloop * .6) + 3.14)) * .8)
                    tutorial_canvas_context.drawImage(prisoner3img, 0, 0, prisoner3img.width, prisoner3img.height, 900, -34 - (Math.sin(((pomao.timeloop * .6) + 3.14)) * .8), 70, prisoner3height)

                    tutorial_canvas_context.drawImage(jailswitchimgl, 0, 0, jailswitchimgl.width, jailswitchimgl.height, 4800, -95, 128, 128)
                } else {
                    chats = []


                    for (let t = 0; t < floors.length; t++) {
                        if (invisblocks.includes(floors[t])) {
                            floors.splice(t, 1)
                        }
                    }
                    for (let t = 0; t < walls.length; t++) {
                        if (invisblocks.includes(walls[t])) {
                            walls.splice(t, 1)
                        }
                    }
                    for (let t = 0; t < roofs.length; t++) {
                        if (invisblocks.includes(roofs[t])) {
                            roofs.splice(t, 1)
                        }
                    }



                    tutorial_canvas_context.drawImage(jailswitchimg, 0, 0, jailswitchimg.width, jailswitchimg.height, 4800, -95, 128, 128)
                    floors[0].y += 10000
                }

                if (pmarinedisp == 0) {
                    for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                        if (floors[floors.length - 1].isPointInside(shockfriendly.shocksl[t]) || floors[floors.length - 1].isPointInside(shockfriendly.shocksr[t])) {
                            pmarinedisp -= 10
                            floors[floors.length - 1].y += 10000
                            break
                        }
                    }
                } else {
                    pmarinedisp -= 9
                }

                for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                    if (floors[floors.length - 2].isPointInside(shockfriendly.shocksl[t]) || floors[floors.length - 2].isPointInside(shockfriendly.shocksr[t])) {
                        if (pmarinedisp != 0) {

                            jailswitch = 1
                        }
                    }
                }

                if (floors[floors.length - 2].isPointInside(pomao.tongue) || floors[floors.length - 2].isPointInside(pomao.tongue)) {
                    if (pmarinedisp != 0) {
                        jailswitch = 1
                    }
                }
                door.draw()
                if (door.isPointInside(pomao.body)) {
                    loadlvl4()
                    pmarinedisp = 0
                }
            } else {
                level3basemusic.pause()
            }
            if (level == 4) {

                if (boss.getdrawn != 1) {
                    lvl4basemusic.play()
                }

                let prisoner3height = 68 + (Math.sin(((pomao.timeloop * .6) + 3.14)) * .8)

                tutorial_canvas_context.drawImage(prisoner3img, 0, 0, prisoner3img.width, prisoner3img.height, 213, -3456 - (Math.sin(((pomao.timeloop * .6) + 3.14)) * .8), 70, prisoner3height)
                floors.splice(0, floors.length)
                for (let t = 0; t < floormpf.length; t++) {
                    floors.push(floormpf[t])
                }
                for (let t = 0; t < spinnys.length; t++) {
                    spinnys[t].draw()
                }

                door.draw()

                if (door.isPointInside(pomao.body)) {
                    loadlvl5()
                }
            } else {
                lvl4basemusic.pause()
                lvl4bossmusic.pause()
            }

            if (level == 5) {

                if (pomao.body.x < 7925) {

                    lvl5basemusic.playbackRate = 1.05
                    lvl5basemusic.play()
                } else {
                    lvl5basemusic.pause()
                }


                door.draw()
                if (door.isPointInside(pomao.body)) {
                    loadlvl6()
                }
            } else {
                lvl5basemusic.pause()
            }

            if (level == 6) {
                door.x = -2100
                door.y = -9170 - door.height
                door.draw()
                if (door.isPointInside(pomao.body)) {
                    loadlvl7()
                }
            }


            if (level == 8) {
                floors.splice(0, floors.length)
                for (let t = 0; t < floormpf.length; t++) {
                    floors.push(floormpf[t])
                }
                for (let t = 0; t < spinnys.length; t++) {
                    spinnys[t].draw()
                }
                let rebelqueenheight = 68 + (Math.sin(((pomao.timeloop * .5) + 5.14)) * .9)

                let queenxpos = 70
                if (pomao.body.x > queenxpos + 35) {
                    tutorial_canvas_context.drawImage(rebellionbossimg, 0, 0, rebellionbossimg.width, rebellionbossimg.height, 100, -100 - (Math.sin(((pomao.timeloop * .5) + 5.14)) * .9), queenxpos, rebelqueenheight)
                } else {
                    tutorial_canvas_context.drawImage(rebellionbossimgleft, 0, 0, rebellionbossimgleft.width, rebellionbossimgleft.height, 100, -100 - (Math.sin(((pomao.timeloop * .5) + 5.14)) * .9), queenxpos, rebelqueenheight)
                }
            }

            if (level == 9) {
                lvl9basemusic.play()
                for (let t = 0; t < debris.length; t++) {
                    if (pomao.eggtimer % 500 == 0) {
                        debris[t].particle *= -1
                    }
                    if (typeof debris[t].link == "undefined") {
                        let link = new LineOP(debris[t].body, pomao.body)

                        if (link.hypotenuse() < 1200) {
                            debris[t].draw()
                        }


                    } else {
                        if (debris[t].link.hypotenuse() < 900) {
                            debris[t].draw()
                        }
                    }
                }


            } else {
                lvl9basemusic.pause()
            }

            if (level == 1 || level == 5) {
                for (let t = 0; t < ramps.length; t++) {
                    if (t > 1) {

                        if (typeof ramps[t].radius == "number") {

                        } else {
                            if (level != 5) {




                                if (typeof ramps[t].orb != "undefined") {

                                    tutorial_canvas_context.drawImage(hilllump, 0, 0, hilllump.width, hilllump.height, ramps[t].x - ramps[t].radius, ramps[t].y - ramps[t].radius, ramps[t].radius * 2, ramps[t].radius * 2)
                                    // tutorial_canvas_context.drawImage(hilllump, ramps[t].x, ramps[t].y, ramps[t].x - ramps[t].radius, ramps[t].y - ramps[t].radius)
                                } else {
                                    ramps[t].draw()
                                }
                            }
                        }

                        tutorial_canvas_context.drawImage(rampcurveimg1, 1656, 578, 488, 73)

                    } else {
                        if (t == 1) {

                            // var c = document.createElement("CANVAS");
                            // var ctx = c.getContext('2d');
                            // ctx.fillStyle = 'transparent';

                            // tutorial_canvas_context.drawImage(c, ramps[t].x2, ramps[t].tip, ramps[t].x1 - ramps[t].x2, ramps[t].y - ramps[t].tip)


                            // ctx.drawImage(floorimg, 0, 0)
                            // ctx.globalCompositeOperation = 'source-in';
                            // // ctx.beginPath();
                            // // ctx.fill();    
                            // ctx.moveTo( ramps[t].x,  ramps[t].y)
                            // ctx.lineTo( ramps[t].x1,  ramps[t].y)
                            // ctx.lineTo( ramps[t].x,  ramps[t].tip)
                            // ctx.lineTo( ramps[t].x2,  ramps[t].y)
                            // ctx.lineTo( ramps[t].x,  ramps[t].y)
                            // ctx.stroke()
                            // ctx.fill()

                            tutorial_canvas_context.drawImage(rampimg1, ramps[t].x2, ramps[t].tip, ramps[t].x1 - ramps[t].x2, ramps[t].y - ramps[t].tip)
                        }
                        if (t == 0) {
                            tutorial_canvas_context.drawImage(rampimg2, ramps[t].x2, ramps[t].tip, ramps[t].x1 - ramps[t].x2, ramps[t].y - ramps[t].tip)
                        }
                    }

                }
            } else {
                for (let t = 0; t < ramps.length; t++) {

                    if (typeof ramps[t].orb != "undefined") {

                        tutorial_canvas_context.drawImage(hilllump, 0, 0, hilllump.width, hilllump.height, ramps[t].x - ramps[t].radius, ramps[t].y - ramps[t].radius, ramps[t].radius * 2, ramps[t].radius * 2)

                        // tutorial_canvas_context.drawImage(hilllump, ramps[t].x, ramps[t].y, ramps[t].x - ramps[t].radius, ramps[t].y - ramps[t].radius)
                    } else {
                        ramps[t].draw()
                    }
                }
            }
            if (level == 6) {
                floors.splice(0, floors.length)
                for (let t = 0; t < floormpf.length; t++) {
                    floors.push(floormpf[t])
                }
                for (let t = 0; t < spinnys.length; t++) {
                    spinnys[t].draw()
                }

            }

            //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
            for (let t = 0; t < floors.length; t++) {
                floors[t].clean()
            }

            if (level == 10) {
                for (let t = 0; t < snowfloors.length; t++) {
                    // snowfloors[t].draw()
                    for (let k = 0; k < snows.length; k++) {
                        if (snowfloors[t].collideSnowheight(snows[k].body)) {
                            snows[k].marked = 1
                        }
                    }
                }
            }
            for (let t = 0; t < floors.length; t++) {

                let linkfloorer = new LineOP(floors[t], pomao.body)
                if (linkfloorer.hypotenuse() > pomao.tongue.radius + (Math.max(floors[t].width, floors[t].height) * 2) + (Math.abs(pomao.tonguey)) + Math.abs(pomao.tonguex) + 735) {  //finally
                    continue
                }


                //add a thing that makes the floors only get drawn if they are in the screen
                if (invisblocks.includes(floors[t])) {

                } else {
                    if (!jellys.includes(floors[t])) {

                        if (!nails.includes(floors[t]) && !ungrapplable.includes(floors[t])) {
                            if (walls.includes(floors[t])) {

                                if (floors[t].width < 100) {
                                    if (invisblocks.includes(floors[t])) {

                                    } else {
                                        if (level == 1) {
                                            tutorial_canvas_context.drawImage(walling, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        } else if (level == 2) {

                                            tutorial_canvas_context.drawImage(lvl2walling, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        } else if (level == 3) {

                                            tutorial_canvas_context.drawImage(lvl3floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        } else if (level == 4) {
                                            tutorial_canvas_context.drawImage(lvl4fwallimg, 0, 0, Math.min(lvl4fwallimg.width, floors[t].width), Math.min(lvl4fwallimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)

                                            // tutorial_canvas_context.drawImage(lvl4fwallimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        } else if (level == 5) {

                                            tutorial_canvas_context.drawImage(lvl5walling, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        } else if (level == 6) {

                                            tutorial_canvas_context.drawImage(walling, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        } else if (level == 7) {


                                            if (floors[t].type == 1) {
                                                if (floors[t].active !== 0) {
                                                    floors[t].counter++
                                                    if (floors[t].counter % 8 == 0) {
                                                        floors[t].timer++
                                                        if (floors[t].timer > 21) {
                                                            floors[t].timer = 21
                                                            floors[t].splice = 1
                                                        }
                                                    }
                                                }
                                            }

                                            const sheetwidtht = crackfloorimg.width
                                            const sheetheightt = crackfloorimg.height
                                            const colst = 22
                                            const rowst = 1
                                            const widtht = sheetwidtht / colst
                                            const heightt = sheetheightt / rowst
                                            const srcxt = Math.floor(floors[t].timer % colst) * widtht
                                            const srcyt = 0

                                            tutorial_canvas_context.drawImage(crackfloorimg, srcxt, srcyt, widtht, heightt, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        } else if (level == 8) {
                                            tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        } else if (level == 9) {
                                            if (typeof floors[t].waggle == "number") {
                                                floors[t].y = floors[t].waggle //+ (Math.cos((lvl9rotationalvariable+t)/1000)*120)
                                            }
                                            // tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                            if (t > 1) {
                                                let link = new Line(floors[t].x + 5, floors[t].y - 5, floors[t - 1].x + 5, floors[t - 1].y - 5, "blue", 5)
                                                link.draw()
                                            }
                                            // if(Math.abs(floors[t].x-pomao.body.x) > 600){
                                            //     floors[t].draw()
                                            // }
                                        } else if (level == 10) {
                                            if (typeof floors[t].waggle == "number") {
                                                floors[t].y = floors[t].waggle //+ (Math.cos((lvl9rotationalvariable+t)/1000)*120)
                                            }
                                            // tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height) 
                                            // if (t > 1 && t < 1859) {
                                            //     let link = new Line(floors[t].x + 1.5, floors[t].y, floors[t - 1].x + 1.5, floors[t - 1].y, "white", 5)
                                            //     link.draw()
                                            // }
                                            if (Math.abs(floors[t].x - pomao.body.x) < 650) {
                                                floors[t].draw()
                                            }
                                        }
                                    }
                                } else {
                                    if (level == 1) {
                                        tutorial_canvas_context.drawImage(floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    } else if (level == 2) {

                                        tutorial_canvas_context.drawImage(lvl2floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    } else if (level == 3) {

                                        tutorial_canvas_context.drawImage(lvl3floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    } else if (level == 4) {

                                        tutorial_canvas_context.drawImage(lvl4floorimg, 0, 0, Math.min(lvl4floorimg.width, floors[t].width), Math.min(lvl4floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        // tutorial_canvas_context.drawImage(lvl4floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    } else if (level == 5) {

                                        // tutorial_canvas_context.drawImage(lvl5floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        tutorial_canvas_context.drawImage(lvl5floorimg, 0, 0, Math.min(lvl5floorimg.width, floors[t].width), Math.min(lvl5floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)

                                    } else if (level == 6) {

                                        // tutorial_canvas_context.drawImage(floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)

                                        tutorial_canvas_context.drawImage(floorimg, 0, 0, Math.min(floorimg.width, floors[t].width), Math.min(floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    } else if (level == 7) {

                                        if (floors[t].type == 1) {
                                            if (floors[t].active !== 0) {
                                                floors[t].counter++
                                                if (floors[t].counter % 5 == 0) {
                                                    floors[t].timer++
                                                    if (floors[t].timer > 21) {
                                                        floors[t].timer = 21
                                                    }
                                                }
                                            }
                                        }


                                        const sheetwidtht = crackfloorimg.width
                                        const sheetheightt = crackfloorimg.height
                                        const colst = 22
                                        const rowst = 1
                                        const widtht = sheetwidtht / colst
                                        const heightt = sheetheightt / rowst
                                        const srcxt = Math.floor(floors[t].timer % colst) * widtht
                                        const srcyt = 0

                                        tutorial_canvas_context.drawImage(crackfloorimg, srcxt, srcyt, widtht, heightt, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    } else if (level == 8) {
                                        tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    } else if (level == 9) {
                                        if (typeof floors[t].waggle == "number") {
                                            floors[t].y = floors[t].waggle //+ (Math.cos((lvl9rotationalvariable+t)/1000)*120)
                                        }
                                        // tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        if (t > 1) {
                                            let link = new Line(floors[t].x + 5, floors[t].y - 5, floors[t - 1].x + 5, floors[t - 1].y - 5, "blue", 5)
                                            link.draw()
                                        }
                                        // if(Math.abs(floors[t].x-pomao.body.x) > 600){
                                        //     floors[t].draw()
                                        // }
                                    } else if (level == 10) {
                                        if (typeof floors[t].waggle == "number") {
                                            floors[t].y = floors[t].waggle //+ (Math.cos((lvl9rotationalvariable+t)/1000)*120)
                                        }
                                        // tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                        // if (t > 1 && t < 1859) {
                                        //     let link = new Line(floors[t].x + 1.5, floors[t].y, floors[t - 1].x + 1.5, floors[t - 1].y, "white", 5)
                                        //     link.draw()
                                        // }
                                        if (Math.abs(floors[t].x - pomao.body.x) < 650) {
                                            floors[t].draw()
                                        }
                                    }
                                }
                            } else {

                                // if (level == 1) {  // adjusts sprites to resolution of the image, but it doesn't look nice
                                //     tutorial_canvas_context.drawImage(floorimg, 0,0,Math.min(floorimg.width, floors[t].width),Math.min(floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                // } else if (level == 2) {

                                //     tutorial_canvas_context.drawImage(lvl2floorimg, 0,0,Math.min(lvl2floorimg.width, floors[t].width),Math.min(lvl2floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                // } else if (level == 3) {

                                //     tutorial_canvas_context.drawImage(lvl3floorimg, 0,0,Math.min(lvl3floorimg.width, floors[t].width),Math.min(lvl3floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                // } else if (level == 4) {

                                //     tutorial_canvas_context.drawImage(lvl4floorimg, 0,0,Math.min(lvl4floorimg.width, floors[t].width),Math.min(lvl4floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                // } else if (level == 5) {

                                //     tutorial_canvas_context.drawImage(lvl5floorimg, 0,0,Math.min(lvl5floorimg.width, floors[t].width),Math.min(lvl5floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                // } else if (level == 6) {

                                //     tutorial_canvas_context.drawImage(lvl6floorimg, 0,0,Math.min(lvl6floorimg.width, floors[t].width),Math.min(lvl6floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                // } else if (level == 7) {

                                if (level == 1) {
                                    tutorial_canvas_context.drawImage(floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                } else if (level == 2) {
                                    // tutorial_canvas_context.drawImage(lvl2floorimg, 0,0,Math.min(lvl2floorimg.width, floors[t].width),Math.min(lvl2floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    tutorial_canvas_context.drawImage(lvl2floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                } else if (level == 3) {

                                    tutorial_canvas_context.drawImage(lvl3floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                } else if (level == 4) {

                                    tutorial_canvas_context.drawImage(lvl4floorimg, 0, 0, Math.min(lvl4floorimg.width, floors[t].width), Math.min(lvl4floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                } else if (level == 5) {

                                    tutorial_canvas_context.drawImage(lvl5floorimg, 0, 0, Math.min(lvl5floorimg.width, floors[t].width), Math.min(lvl5floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                } else if (level == 6) {

                                    tutorial_canvas_context.drawImage(floorimg, 0, 0, Math.min(floorimg.width, floors[t].width), Math.min(floorimg.height, floors[t].height), floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    // tutorial_canvas_context.drawImage(lvl6floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                } else if (level == 7) {

                                    if (floors[t].type == 1) {
                                        if (floors[t].active !== 0) {
                                            floors[t].counter++
                                            if (floors[t].counter % 5 == 0) {
                                                floors[t].timer++
                                                if (floors[t].timer > 21) {
                                                    floors[t].timer = 21
                                                }
                                            }
                                        }
                                    }


                                    const sheetwidtht = crackfloorimg.width
                                    const sheetheightt = crackfloorimg.height
                                    const colst = 22
                                    const rowst = 1
                                    const widtht = sheetwidtht / colst
                                    const heightt = sheetheightt / rowst
                                    const srcxt = Math.floor(floors[t].timer % colst) * widtht
                                    const srcyt = 0

                                    tutorial_canvas_context.drawImage(crackfloorimg, srcxt, srcyt, widtht, heightt, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                } else if (level == 8) {
                                    tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                } else if (level == 9) {
                                    if (typeof floors[t].waggle == "number") {
                                        floors[t].y = floors[t].waggle //+ (Math.cos((lvl9rotationalvariable+t)/1000)*120)
                                    }
                                    // tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    if (t > 1) {
                                        let link = new Line(floors[t].x + 1.5, floors[t].y + 1.5, floors[t - 1].x + 1.5, floors[t - 1].y + 1.5, "blue", 3)
                                        link.draw()
                                    }
                                    // if(Math.abs(floors[t].x-pomao.body.x) > 650){
                                    //     floors[t].draw()
                                    // }
                                } else if (level == 10) {
                                    if (typeof floors[t].waggle == "number") {
                                        floors[t].y = floors[t].waggle //+ (Math.cos((lvl9rotationalvariable+t)/1000)*120)
                                    }
                                    // tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                    if (t > 1 && t < 1859) {
                                        let link = new Line(floors[t].x + 1.5, floors[t].y, floors[t - 1].x + 1.5, floors[t - 1].y, "white", 5)
                                        link.draw()
                                    }
                                    if (Math.abs(floors[t].x - pomao.body.x) > 650) {
                                        floors[t].draw()
                                    }
                                }
                            }

                            if (blocks.includes(floors[t])) {
                                tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                            }
                        } else {

                            if (nails.includes(floors[t])) {
                                tutorial_canvas_context.drawImage(nailimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                            } else {

                                if (blocks.includes(floors[t])) {
                                    tutorial_canvas_context.drawImage(blockimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                                }
                            }
                            if (ungrapplable.includes(floors[t])) {
                                floors[t].draw()
                            }
                        }
                    } else {
                        // floors[t].draw()

                        tutorial_canvas_context.globalAlpha = 0.5
                        tutorial_canvas_context.drawImage(paintedbackground, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                        tutorial_canvas_context.globalAlpha = 1
                    }
                }
            }

            if (level == 10) {
                for (let t = 0; t < snowfloors.length; t++) {
                    if(snowfloors[t].snowtype == 1){
                        let link = new LineOP(snowfloors[t].body, pomao.body)
                        if(link.hypotenuse() < snowfloors[t].size + 66 + 735){
                            snowfloors[t].draw()
                        }else{
                            snowfloors[t].spin()
                        }
                    }else{
                    snowfloors[t].draw()
                    }
                }
            }

            // floor.draw()

            for (let t = 0; t < switches.length; t++) {
                switches[t].draw()
            }
            //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
            for (let t = 0; t < pomao.eggs.length; t++) {
                pomao.eggs[t].draw()
            }

            for (let t = 0; t < pomao.thrown.length; t++) {
                pomao.thrown[t].draw()
            }




            if (pin.x > pomao.body.x - ((tutorial_canvas.width * 1.2) + pin.radius) && pin.x < pomao.body.x + ((tutorial_canvas.width * 1.2) + pin.radius)) {
                swinger1move()
            } else if (pin.y > pomao.body.y - ((tutorial_canvas.height * 1.2) + pin.radius) && pin.y < pomao.body.y + ((tutorial_canvas.height * 1.2) + pin.radius)) {
                swinger1move()
            } else if (pin2.x > pomao.body.x - ((tutorial_canvas.width * 1.2) + pin2.radius) && pin2.x < pomao.body.x + ((tutorial_canvas.width * 1.2) + pin2.radius)) {
                swinger1move()
            } else if (pin2.y > pomao.body.y - ((tutorial_canvas.height * 1.2) + pin2.radius) && pin2.y < pomao.body.y + ((tutorial_canvas.height * 1.2) + pin2.radius)) {
                swinger1move()
            }

            if (level == 5) {
                // chafer.draw()
                for (let t = 0; t < orbs.length; t++) {

                    if (orbs[t].body.x > pomao.body.x - ((tutorial_canvas.width * 2) + orbs[t].body.radius) && orbs[t].body.x < pomao.body.x + ((tutorial_canvas.width * 2) + orbs[t].body.radius)) {
                        if (orbs[t].body.y > pomao.body.y - ((tutorial_canvas.height * 2) + orbs[t].body.radius) && orbs[t].body.y < pomao.body.y + ((tutorial_canvas.height * 2) + orbs[t].body.radius)) {
                            orbs[t].draw()
                        }
                    }
                }
                for (let t = 0; t < links.length; t++) {
                    let link = new Line(orbs[links[t][0]].body.x, orbs[links[t][0]].body.y, orbs[links[t][1]].body.x, orbs[links[t][1]].body.y, "white", 2)
                    link.draw()
                }

            }


            for (let t = 0; t < magnets.length; t++) {
                if (Math.abs(magnets[t].electron.x - pomao.body.x) < 700 || Math.abs(magnets[t].positron.x - pomao.body.x) < 700 || Math.abs(magnets[t].electron.y - pomao.body.y) < 700 || Math.abs(magnets[t].positron.y - pomao.body.y) < 700) {
                    magnets[t].draw()
                }
            }

            for (let t = 0; t < floppers.length; t++) {
                // floppers[t].draw()
                if (floppers[t].body.x > this.body.x - (tutorial_canvas.width / 1.6) && floppers[t].body.x < this.body.x + (tutorial_canvas.width / 1.6)) {
                    if (floppers[t].body.y > this.body.y - (tutorial_canvas.height / 1.6) && floppers[t].body.y < this.body.y + (tutorial_canvas.height / 1.6)) {
                        floppers[t].draw()
                    } else if (floppers[t].lump.x > this.body.x - (tutorial_canvas.width / 1.6) && floppers[t].lump.x < this.body.x + (tutorial_canvas.width / 1.6)) {
                        if (floppers[t].lump.y > this.body.y - (tutorial_canvas.height / 1.6) && floppers[t].lump.y < this.body.y + (tutorial_canvas.height / 1.6)) {
                            floppers[t].draw()
                        }
                        // else if(floppers[t].dead == 0){
                        //     floppers[t].draw()
                        // }
                    }
                    // else if(floppers[t].dead == 0){
                    //         floppers[t].draw()
                    //     }
                } else if (floppers[t].lump.x > this.body.x - (tutorial_canvas.width / 1.6) && floppers[t].lump.x < this.body.x + (tutorial_canvas.width / 1.6)) {
                    if (floppers[t].lump.y > this.body.y - (tutorial_canvas.height / 1.6) && floppers[t].lump.y < this.body.y + (tutorial_canvas.height / 1.6)) {
                        floppers[t].draw()
                    }
                    // else if(floppers[t].dead == 0){
                    //     floppers[t].draw()
                    // }
                }
                // else if(floppers[t].dead == 0){
                //     floppers[t].draw()
                // }
            }


            this.tongue.draw()

            this.link = new Line(this.body.x, 3 + this.body.y - (Math.sin(this.timeloop) * 1), this.tongue.x, this.tongue.y, "blue", 3) // radius 3 // this.tongue.radius*1.1
            this.link.draw()


            if (level == 10) {
                if (Math.random() < .5) {
                    for (let t = 0; t < 2; t++) {
                        let snow = new Snowflake((pomao.body.x - 5040) + Math.random() * 10080, (pomao.body.y - 360) - Math.random() * 360)
                        snows.push(snow)
                    }
                } else {
                    let snow = new Snowflake((pomao.body.x - 5040) + Math.random() * 10080, (pomao.body.y - 360) - Math.random() * 360)
                    snows.push(snow)
                }
                for (let t = 0; t < snows.length; t++) {
                    if (Math.abs(snows[t].body.x - pomao.body.x) < 650) {
                        snows[t].draw()
                    } else {
                        snows[t].drift()
                    }
                }

                if (level == 10) {
                    // for(let t = 0;t<floors.length;t+=3){
                    level10basemusic.play()
                    for (let k = 0; k < snows.length; k++) {

                        if (snows[k].body.y > -100 && snows[k].body.x > -2100) {
                            const t = (Math.round((2100 + snows[k].body.x) / 5)) % floors.length
                            if (t > 15 && t < (1861 - 16)) {  //floors.length - 16
                                if (floors[t].y < (snows[k].body.y) || floors[t + 1].y < (snows[k].body.y) || floors[t - 1].y < (snows[k].body.y)) {
                                    snows[k].marked = 1
                                    if (typeof floors[t].waggle == "number") {
                                        floors[t].active = 1
                                        let value = 0
                                        if (t > 10 && t < floors.length - 11) {
                                            for (let n = t - 10; n < (t + 10); n++) {
                                                value += (Math.PI / 20)
                                                // if (snows[k].body.ymom > 11) {
                                                let bump = (snows[k].body.ymom * Math.sin(value)) * 5
                                                if (bump < snows[k].body.ymom * 5.01) {
                                                    bump *= 1.01
                                                }
                                                if (bump > snows[k].body.ymom * .99) {
                                                    // bump = this.body.ymom
                                                }
                                                if (floors[t].y > -100) {
                                                    floors[n].waggle -= bump / 8
                                                }
                                                // }
                                            }
                                        }
                                    }
                                    continue
                                }
                            }
                        }
                    }
                    // }

                    // }
                }
                let cutlength = 2
                for (let k = 0; k < cutlength; k++) {
                    for (let t = 0; t < snows.length; t++) {
                        if (snows[t].marked == 1) {
                            snows.splice(t, 1)
                            // cutlength++
                        }
                    }
                }
            } else {
                level10basemusic.pause()
            }


            for (let t = 0; t < fruits.length; t++) {
                if (fruits[t].x > this.body.x - ((tutorial_canvas.width / 2) + fruits[t].width) && fruits[t].x < this.body.x + ((tutorial_canvas.width / 2) + fruits[t].width)) {
                    if (fruits[t].y > this.body.y - ((tutorial_canvas.height / 2) + fruits[t].height) && fruits[t].y < this.body.y + ((tutorial_canvas.height / 2) + fruits[t].height)) {

                        fruits[t].draw()

                    }
                }
            }

            if (level == 1) {
                if (boss.body1.x > pomao.body.x - ((tutorial_canvas.width * 3) + boss.body1.radius) && boss.body1.x < pomao.body.x + ((tutorial_canvas.width * 3) + boss.body1.radius)) {
                    if (boss.body1.y > pomao.body.y - ((tutorial_canvas.height * 3) + boss.body1.radius) && boss.body1.y < pomao.body.y + ((tutorial_canvas.height * 3) + boss.body1.radius)) {
                        boss.fight = 1
                    }
                } else {
                    lvl1basemusic.play()
                }
                if (boss.fight == 1) {
                    boss.draw()
                }
            } else {
                lvl1basemusic.pause()
            }
            if (level == 4) {
                // if(boss.body.x > pomao.body.x-((tutorial_canvas.width*3)+boss.body.radius) && boss.body.x < pomao.body.x+((tutorial_canvas.width*3)+boss.body.radius) ){
                //     if(boss.body.y > pomao.body.y-((tutorial_canvas.height*6)+boss.body.radius) && boss.body.y < pomao.body.y+((tutorial_canvas.height*6)+boss.body.radius) ){

                if (boss.getdrawn == 1) {
                    boss.draw()
                    lvl4basemusic.pause()
                    lvl4bossmusic.playbackRate = .4 + (1 - (.5 * (boss.health / boss.maxhealth)));
                    lvl4bossmusic.play()
                } else if (pomao.body.y < (-10300 - 6550) + 350) {
                    lvl4basemusic.play()
                    boss.getdrawn = 1
                }
                //     }  
                // }
            }
            if (level == 5) {
                chafer.draw()
            }
            if (level == 7) {
                boss.draw()
            }

            // for(let t = 0; t<fruits.length; t++){
            //         //394929
            //         fruits[t].draw()

            // }

            for (let t = 0; t < boys.length; t++) {
                if (boys[t].cactus == 1) {
                    if (boys[t].x > this.body.x - (tutorial_canvas.width * 1.6) && boys[t].x < this.body.x + (tutorial_canvas.width * 1.6)) {
                        if (boys[t].y > this.body.y - (tutorial_canvas.height * 3.6) && boys[t].y < this.body.y + (tutorial_canvas.height * 3.6)) {
                            boys[t].draw()
                        }
                    }
                } else {
                    if (boys[t].x > this.body.x - (tutorial_canvas.width / 1) && boys[t].x < this.body.x + (tutorial_canvas.width / 1.6)) {
                        if (boys[t].y > this.body.y - (tutorial_canvas.height / 1.6) && boys[t].y < this.body.y + (tutorial_canvas.height / 1.6)) {
                            boys[t].draw()
                        }
                    }
                }

            }

            for (let t = 0; t < swimmers.length; t++) {
                if (swimmers[t].body.x > this.body.x - (tutorial_canvas.width / 1.6) && swimmers[t].body.x < this.body.x + (tutorial_canvas.width / 1.6)) {
                    if (swimmers[t].body.y > this.body.y - (tutorial_canvas.height / 1.6) && swimmers[t].body.y < this.body.y + (tutorial_canvas.height / 1.6)) {
                        swimmers[t].draw()
                    }
                }
            }


            for (let t = 0; t < worms.length; t++) {
                if (worms[t].boss == 1) {
                    if (pomao.body.y < -8570) {
                        worms[t].draw()
                    }
                } else {
                    if (worms[t].dangler == 0) {
                        if (worms[t].body.x > this.body.x - (tutorial_canvas.width / .66) && worms[t].body.x < this.body.x + (tutorial_canvas.width / .66)) {
                            if (worms[t].body.y > this.body.y - (tutorial_canvas.height / .7) && worms[t].body.y < this.body.y + (tutorial_canvas.height / .016)) {
                                if (worms[t].layer == 0) {
                                    worms[t].draw()
                                }
                            }
                        }
                    } else {
                        if (worms[t].body.x > this.body.x - (tutorial_canvas.width / .66) && worms[t].body.x < this.body.x + (tutorial_canvas.width / .66)) {
                            if (worms[t].body.y > this.body.y - (tutorial_canvas.height / .5) && worms[t].body.y < this.body.y + (tutorial_canvas.height / .5)) {  //.2
                                if (worms[t].layer == 0) {
                                    worms[t].draw()
                                }
                            }
                        }
                    }
                }
            }
            for (let t = 0; t < worms.length; t++) {
                if (worms[t].marked == 1) {
                    if (pomao.eggs.length < 16) {
                        if (worms[t].bopped !== 1) {
                            const seepx = new Seed(pomao.eggs[pomao.eggs.length - 1])
                            pomao.eggs.push(seepx)  //seemingly busted, gives egg on egg hit

                            pomao.hits += 1
                            if (pomao.hits > 9) {
                                pomao.hits = 9
                            }
                        }
                    }
                    worms.splice(t, 1)

                }
            }
            for (let t = 0; t < bats.length; t++) {
                if (bats[t].body.x > this.body.x - (tutorial_canvas.width / 1.6) && bats[t].body.x < this.body.x + (tutorial_canvas.width / 1.6)) {
                    if (bats[t].body.y > this.body.y - (tutorial_canvas.height / 1.6) && bats[t].body.y < this.body.y + (tutorial_canvas.height / 1.6)) {
                        bats[t].draw()
                    }
                }
            }
            // for(let t = 0; t<swimmers.length; t++){
            //         swimmers[t].draw()
            // }
            for (let t = 0; t < swimmers.length; t++) {
                swimmers[t].clean()
            }

            for (let t = 0; t < bats.length; t++) {
                bats[t].clean()
            }


            for (let t = 0; t < deadboys.length; t++) {
                deadboys[t].popdraw()
            }



            // this.link = new Line(this.body.x, 3+this.body.y, this.tongue.x, this.tongue.y, "blue", 3)
            // this.link.draw()


            if (!keysPressed['q']) {

                if (this.diry == -1) {
                    hot--
                    for (let t = 0; t < this.thrown.length; t++) {
                        if (this.body.repelCheck(this.thrown[t]) && this.thrown[t].timer < 5) {
                            hot = 20
                            this.thrown[t].timer = 6
                        }
                    }
                    if (this.tonguex > 14 && this.tonguey > 25) {
                        if (this.blush <= 1) {
                            tutorial_canvas_context.drawImage(pomaodownpaint, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                        } else {
                            tutorial_canvas_context.drawImage(pomaodownpaintb, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                        }
                    } else if (this.tonguex < -14 && this.tonguey > 25) {
                        if (this.blush <= 1) {
                            tutorial_canvas_context.drawImage(pomaodownpaintl, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                        } else {
                            tutorial_canvas_context.drawImage(pomaodownpaintlb, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                        }
                    } else if (hot <= 0) {

                        if (this.blush <= 1) {

                            if (this.disabled == 0) {
                                if (this.dir == 1) {
                                    if (this.hng != 0 && this.pounding < 10 && (keysPressed['w'] || gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A'))) {
                                        tutorial_canvas_context.drawImage(pomaof, (pomaof.width / 3 * this.flap), 0, pomaof.width / 3, pomaof.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    } else {
                                        tutorial_canvas_context.drawImage(pomaoimg, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    }
                                } else {
                                    if (this.hng != 0 && this.pounding < 10 && (keysPressed['w'] || gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A'))) {
                                        tutorial_canvas_context.drawImage(pomaofl, (pomaofl.width / 3 * this.flap), 0, pomaofl.width / 3, pomaofl.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    } else {
                                        tutorial_canvas_context.drawImage(pomaoimgl, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    }
                                }
                            } else {
                                if (this.dir == 1) {
                                    if (this.hng != 0 && this.pounding < 10 && (keysPressed['w'] || gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A'))) {
                                        tutorial_canvas_context.drawImage(pomaofh, (pomaofh.width / 3 * this.flap), 0, pomaofh.width / 3, pomaofh.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    } else {
                                        tutorial_canvas_context.drawImage(pomaoimgh, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    }
                                } else {
                                    if (this.hng != 0 && this.pounding < 10 && (keysPressed['w'] || gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A'))) {
                                        tutorial_canvas_context.drawImage(pomaoflh, (pomaoflh.width / 3 * this.flap), 0, pomaoflh.width / 3, pomaoflh.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    } else {
                                        tutorial_canvas_context.drawImage(pomaoimglh, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    }
                                }
                            }
                        } else {
                            if (this.disabled == 0) {
                                if (this.dir == 1) {
                                    if (this.hng != 0 && this.pounding < 10 && (keysPressed['w'] || gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A'))) {
                                        tutorial_canvas_context.drawImage(pomaofb, (pomaofb.width / 3 * this.flap), 0, pomaofb.width / 3, pomaofb.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    } else {
                                        tutorial_canvas_context.drawImage(pomaoimgb, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    }
                                } else {
                                    if (this.hng != 0 && this.pounding < 10 && (keysPressed['w'] || gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A'))) {
                                        tutorial_canvas_context.drawImage(pomaoflb, (pomaoflb.width / 3 * this.flap), 0, pomaoflb.width / 3, pomaoflb.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    } else {
                                        tutorial_canvas_context.drawImage(pomaoimgbl, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    }
                                }
                            } else {

                                if (this.dir == 1) {
                                    if (this.hng != 0 && this.pounding < 10 && (keysPressed['w'] || gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A'))) {
                                        tutorial_canvas_context.drawImage(pomaofbh, (pomaofbh.width / 3 * this.flap), 0, pomaofbh.width / 3, pomaofbh.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    } else {
                                        tutorial_canvas_context.drawImage(pomaoimglhb, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    }
                                } else {
                                    if (this.hng != 0 && this.pounding < 10 && (keysPressed['w'] || gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A'))) {
                                        tutorial_canvas_context.drawImage(pomaoflbh, (pomaoflbh.width / 3 * this.flap), 0, pomaoflbh.width / 3, pomaoflbh.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    } else {
                                        tutorial_canvas_context.drawImage(pomaoimghb, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                    }
                                }
                            }
                        }
                    } else {

                        if (this.blush <= 1) {
                            if (this.dir == 1) {

                                if (this.hng !== 0) {
                                    tutorial_canvas_context.drawImage(pomaospitf, (pomaospitf.width / 3 * this.flap), 0, pomaospitf.width / 3, pomaospitf.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)

                                } else {

                                    tutorial_canvas_context.drawImage(pomaospit, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                }
                            } else {

                                if (this.hng !== 0) {
                                    tutorial_canvas_context.drawImage(pomaospitfl, (pomaospitfl.width / 3 * this.flap), 0, pomaospitfl.width / 3, pomaospitfl.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                } else {
                                    tutorial_canvas_context.drawImage(pomaospitl, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)

                                }
                            }
                        } else {
                            if (this.dir == 1) {

                                if (this.hng !== 0) {
                                    tutorial_canvas_context.drawImage(pomaospitfb, (pomaospitfb.width / 3 * this.flap), 0, pomaospitfb.width / 3, pomaospitfb.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)

                                } else {

                                    tutorial_canvas_context.drawImage(pomaospitb, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                }
                            } else {

                                if (this.hng !== 0) {
                                    tutorial_canvas_context.drawImage(pomaospitflb, (pomaospitflb.width / 3 * this.flap), 0, pomaospitflb.width / 3, pomaospitflb.height, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                                } else {
                                    tutorial_canvas_context.drawImage(pomaospitlb, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)

                                }
                            }

                        }
                    }
                } else {
                    if (this.blush <= 1) {

                        if (this.dir == 1) {
                            tutorial_canvas_context.drawImage(pomaoimgup, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                        } else {
                            tutorial_canvas_context.drawImage(pomaoimglup, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                        }

                    } else {

                        if (this.dir == 1) {
                            tutorial_canvas_context.drawImage(pomaoimgupb, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                        } else {
                            tutorial_canvas_context.drawImage(pomaoimglupb, this.body.x - (this.width / 2), this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5), this.width, this.height)
                        }
                    }
                }

                // tutorial_canvas_context.drawImage(dealwithit, (this.body.x - (this.width / 2))+10, (this.body.y - (this.height / 2) - (Math.sin(this.timeloop) * 1.5))-20, this.width, this.height)


                pomao.body.color = "transparent"

            } else {
                // pomao.body = new Circlec(pomao.body.x, pomao.body.y, pomao.body.radius, "black")

                // pomao.body.color = "black"
                // pomao.body.draw()
                // pomao.body = new Circlex(pomao.body.x, pomao.body.y, pomao.body.radius, "black")
            }


            for (let t = 0; t < worms.length; t++) {
                if (worms[t].boss == 1) {
                    // if (pomao.y < -9170) {
                    //     // worms[t].draw() // maybe remove this?
                    // }
                } else {
                    if (worms[t].body.x > this.body.x - (tutorial_canvas.width / .66) && worms[t].body.x < this.body.x + (tutorial_canvas.width / .66)) {
                        if (worms[t].body.y > this.body.y - (tutorial_canvas.height / .7) && worms[t].body.y < this.body.y + (tutorial_canvas.height / .016)) {
                            if (worms[t].layer == 1) {
                                worms[t].draw()
                            }
                        }
                    }
                }
            }
            for (let t = 0; t < worms.length; t++) {
                if (worms[t].marked == 1) {
                    if (pomao.eggs.length < 16) {
                        if (worms[t].bopped !== 1) {
                            const seepx = new Seed(pomao.eggs[pomao.eggs.length - 1])
                            pomao.eggs.push(seepx)  //seemingly busted, gives egg on egg  // fixed
                        }
                        if (pomao.hits > 9) {
                            pomao.hits = 9
                        }
                    }
                    pomao.hits += 1  //was inside of egglength lol
                    worms.splice(t, 1)

                }
            }


            // this.diry = 1
            // this.body.draw()
            // this.footspot.draw()
            this.body.xmom *= .96
            if (Math.abs(this.body.xmom) < .5) {
                this.body.xmom = 0
                this.disabled = 0
            }
            this.health.draw()
        }
        control() {

            if (gamepadAPI.buttonsStatus.includes('RB') || keysPressed['p']) {
                if (this.pausetimer <= 0) {
                    this.paused = -10
                    this.pausetimer = 20
                }
            }
            this.pausetimer--


            for (let t = 0; t < blocks.length; t++) {
                blocks[t].marked = 0
            }

            for (let t = 0; t < blocks.length; t++) {
                if (squarecirclefaceblockjump(blocks[t], pomao.body)) {
                    if (blocks[t].x < pomao.body.x) {
                        blocks[t].marked = 1
                    } else {
                        blocks[t].marked = -1
                    }
                }
            }

            gamepadAPI.update()

            // //////console.log(gamepadAPI)
            //   if(gamepadAPI.buttonsStatus.includes('A')){
            if (gamepadAPI.axesStatus[1] < -.5 || gamepadAPI.buttonsStatus.includes('A')) {
                // this.rooted = {}
                if (pomao.jumping == 0) {
                    pomao.body.ymom = -5.1

                    this.runner = 0
                } else if (this.jumping == 2) {
                    if (this.bonked == 0) {
                        this.body.ymom = -2.1
                        this.runner = 0
                    }
                } else {

                    if (pomao.runner > 37) {

                        if (pomao.hng < .1) {
                            pomao.hng += .006
                        } else if (pomao.hng < .2) {
                            pomao.hng += .006
                        } else {
                            pomao.hng += .001
                        }
                        if (pomao.hng < .216) {
                            pomao.body.ymom += -pomao.hng
                            //////console.log(pomao.hng)
                        } else {
                            // pomao.hng = -.05
                            // pomao.runner = 0
                        }

                    }

                }
            } else if (keysPressed['w'] || gamepadAPI.buttonsStatus.includes('A')) {
                // this.rooted = {}
                if (this.jumping == 0) {
                    if (this.bonked == 0) {

                        this.body.ymom = -5.1
                        this.runner = 0
                    }
                } else if (this.jumping == 2) {
                    if (this.bonked == 0) {
                        this.body.ymom = -2.1
                        this.runner = 0
                    }
                } else {
                    if (this.runner > 37) {

                        if (this.hng < .1) {
                            this.hng += .006
                        } else if (this.hng < .2) {
                            this.hng += .006
                        } else {
                            this.hng += .001
                        }
                        if (this.hng < .216) {
                            this.body.ymom += -this.hng
                        } else {
                            // this.hng = -.05
                            // this.runner = 0
                        }

                    }
                }
            } else {
                if (this.hng != 0) {
                    this.hng *= .997
                }
            }

            // pomao.xdir = 0
            // pomao.ydir = 0




            let gamepad
            // //////console.log(pomao)




            this.ydir = 0
            this.xdir = 0
            // for(let t = 0; Math.abs(this.body.ymom) > 5.2;t++){
            //     this.body.ymom*=.99
            // }
            for (let t = 0; Math.abs(this.body.symom) > 5.2; t++) {
                this.body.symom *= .99
            }
            for (let t = 0; Math.abs(this.body.sxmom) > 3.5; t++) {
                this.body.sxmom *= .99
            }
            this.body.sxmom *= .999

            this.bodyxtight = new Circle(this.body.x, this.body.y, 9, "red")
            this.bodytight = new Circle(this.body.x, this.body.y, 21, "yellow")

            //   if(gamepadAPI.buttonsStatus.includes('A')){
            if (keysPressed['f'] || keysPressed['n'] || gamepadAPI.buttonsStatus.includes('DPad-Left')) {
                // this.rooted = {}
                if (this.jumping == 1) {
                    if (this.body.ymom > -3.5) {
                        if (this.runner > 21) {


                            this.pounding = 10
                            this.body.ymom = 17
                            this.timeloop = Math.PI
                        }
                    }
                }

            }




            this.bodyxtight = new Circle(this.body.x, this.body.y, 9, "red")
            this.bodytight = new Circle(this.body.x, this.body.y, 21, "yellow")
            if (keysPressed['a'] || keysPressed['d'] || (this.body.symom !== 0 || this.body.sxmom !== 0)) {
                // this.rooted = {}
                for (let t = 1; t < this.eggs.length; t++) {
                    if (this.eggs[t].marked == 0) {
                        if (this.blocked == 0) {
                            this.eggs[t].steer()
                        }
                    }
                }
            }


            if (keysPressed['s']) {
                // this.body.y+=2
                // for(let t = 0; t<fruits.length; t++){
                //     if(this.body.repelCheck(fruits[t].body)  || fruits[t].body.repelCheck(this.tongue)){
                //         // fruits[t].y+=1.9
                //         // fruits[t].x+=this.body.xmom
                //         // fruits[t].y+=this.body.ymom
                //     }
                // }
            }


            this.bodyxtight = new Circle(this.body.x, this.body.y, 9, "red")
            this.bodytight = new Circle(this.body.x, this.body.y, 21, "yellow")
            if (this.disabled == 0) {
                if (keysPressed['a']) {
                    // this.rooted = {}
                    this.dir = -1
                    if (this.blocked !== 1) {
                        this.dir = -1
                        this.body.x -= 3
                        if (this.body.sxmom > 0) {
                            this.body.sxmom = 0
                        }

                        tutorial_canvas_context.translate(3, 0)
                        for (let t = 0; t < fruits.length; t++) {
                            if (this.body.repelCheck(fruits[t].body) || fruits[t].body.repelCheck(this.tongue)) {
                                fruits[t].x -= 2.9
                                // fruits[t].x+=this.body.xmom
                                // fruits[t].y+=this.body.ymom
                            }
                        }

                    }

                    for (let t = 0; t < blocks.length; t++) {
                        if (blocks[t].marked == 1) {
                            if (!nails.includes(blocks[t])) {

                                if (!blocks[t].isBlocked) {
                                    blocks[t].x -= 2.9999
                                }
                            }
                            // blocks[t].xmom-=.1
                        }
                    }
                } else if (keysPressed['d']) {
                    // this.rooted = {}
                    this.dir = 1
                    if (this.blocked !== -1) {
                        this.body.x += 3
                        this.dir = 1
                        if (this.body.sxmom < 0) {
                            this.body.sxmom = 0
                        }

                        tutorial_canvas_context.translate(-3, 0)
                        for (let t = 0; t < fruits.length; t++) {
                            if (this.body.repelCheck(fruits[t].body) || fruits[t].body.repelCheck(this.tongue)) {
                                fruits[t].x += 2.9
                                // fruits[t].x+=this.body.xmom
                                // fruits[t].y+=this.body.ymom
                            }
                        }
                    }
                    for (let t = 0; t < blocks.length; t++) {
                        if (blocks[t].marked == -1) {
                            if (!nails.includes(blocks[t])) {
                                if (!blocks[t].isBlocked) {
                                    blocks[t].x += 2.9999
                                }
                            }
                            // blocks[t].xmom+=.1
                        }
                    }
                } else if (gamepadAPI.axesStatus.length > 0) {
                    if (Math.abs(gamepadAPI.axesStatus[0]) > .2) {
                        // this.rooted = {}
                        // pomao.body.x+= gamepadAPI.axesStatus[0]*3
                        // tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0]*3,0)

                        // }else{
                        // }else if(pomao.blocked*gamepadAPI.axesStatus[0]*3 > 0){



                        if (this.blocked == 0) {
                            if (gamepadAPI.axesStatus[0] * 3 > 0) {
                                // ////console.log("top")
                                pomao.body.x += gamepadAPI.axesStatus[0] * 3
                                tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0] * 3, 0)

                                for (let t = 0; t < blocks.length; t++) {
                                    if (blocks[t].marked == -1) {
                                        if (!nails.includes(blocks[t])) {
                                            if (!blocks[t].isBlocked) {
                                                blocks[t].x += gamepadAPI.axesStatus[0] * 2.999
                                            }
                                        }
                                        // blocks[t].xmom+=.1
                                    }
                                }
                            } else {
                                // ////console.log("bottom")
                                pomao.body.x += gamepadAPI.axesStatus[0] * 3
                                tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0] * 3, 0)

                                for (let t = 0; t < blocks.length; t++) {
                                    if (blocks[t].marked == 1) {
                                        if (!nails.includes(blocks[t])) {
                                            if (!blocks[t].isBlocked) {
                                                blocks[t].x += gamepadAPI.axesStatus[0] * 2.999
                                            }
                                        }
                                        // blocks[t].xmom+=.1
                                    }
                                }
                            }
                        } else if (gamepadAPI.axesStatus[0] * 3 * this.blocked > 0) {
                            // this.rooted = {}
                            pomao.body.x += gamepadAPI.axesStatus[0] * 3
                            tutorial_canvas_context.translate(-gamepadAPI.axesStatus[0] * 3, 0)

                            for (let t = 0; t < blocks.length; t++) {
                                if (blocks[t].marked == 1) {
                                    if (!nails.includes(blocks[t])) {
                                        if (!blocks[t].isBlocked) {
                                            blocks[t].x += gamepadAPI.axesStatus[0] * 2.999
                                        }
                                    }
                                    // blocks[t].xmom+=.1
                                }
                            }
                        }


                        // }
                        if (gamepadAPI.axesStatus[0] * 3 < .1) {
                            // this.rooted = {}
                            pomao.dir = -1
                            if (pomao.body.sxmom > 0) {
                                pomao.body.sxmom = 0
                            }
                        }
                        if (gamepadAPI.axesStatus[0] * 3 > -.1) {
                            // this.rooted = {}
                            pomao.dir = 1
                            if (pomao.body.sxmom < 0) {
                                pomao.body.sxmom = 0
                            }
                        }
                        for (let t = 1; t < pomao.eggs.length; t++) {
                            pomao.eggs[t].steer()
                        }
                    }
                }
            }
            // if(keysPressed['p']){
            //     tutorial_canvas_context.clearRect(-100000,-100000,tutorial_canvas.width*1000, tutorial_canvas.height*1000)
            // }

            this.bodyxtight = new Circle(this.body.x, this.body.y, 9, "red")
            this.bodytight = new Circle(this.body.x, this.body.y, 21, "yellow")
            if (keysPressed[' ']) {

                this.bodyxtight = new Circle(this.body.x, this.body.y, 9, "red")
                this.bodytight = new Circle(this.body.x, this.body.y, 21, "yellow")
                this.tongue = new Circlec(this.body.x + this.tonguex, this.body.y + this.tonguey, 5, "blue")
                if (this.bodyxtight.isPointInside(this.tongue)) {
                    if (keysPressed['ArrowDown'] || keysPressed['k']) {
                        this.ydir = 1
                        // this.tongueymom = 33
                    } if (keysPressed['ArrowUp'] || keysPressed['i']) {
                        this.ydir = -1
                        // //////console.log('hit')
                        // this.tongueymom = -33
                    } if (keysPressed['ArrowLeft'] || keysPressed['j']) {
                        this.xdir = -1
                        // this.tonguexmom = -33
                    } if (keysPressed['ArrowRight'] || keysPressed['l']) {
                        this.xdir = 1
                        // this.tonguexmom = 33
                    }
                    if (this.xdir == 1) {
                        this.tonguexmom = 33.1 / 2
                        this.dir = 1
                    }
                    if (this.ydir == 1) {
                        this.tongueymom = 33.1 / 2
                    }
                    if (this.xdir == -1) {
                        this.tonguexmom = -33.1 / 2
                        this.dir = -1
                    }
                    if (this.ydir == -1) {
                        this.tongueymom = -33.1 / 2
                    }
                    if (this.xdir * this.ydir != 0) {
                        this.tonguexmom *= .81
                        this.tongueymom *= .81
                    }

                    if (this.xdir == 0 && this.ydir == 0) {
                        if (this.dir == 1) {
                            this.tonguey = 0
                            this.tongueymom = 0
                            this.tonguexmom = 34 / 2
                        } else {
                            this.tonguey = 0
                            this.tongueymom = 0
                            this.tonguexmom = -34 / 2
                        }
                    }

                    this.fired = 3
                }
            } else if (gamepadAPI.axesStatus.length > 0) {
                if (Math.abs(gamepadAPI.axesStatus[2]) + Math.abs(gamepadAPI.axesStatus[3]) > .9 && !gamepadAPI.buttonsStatus.includes('Axis-Right')) {

                    this.bodyxtight = new Circle(this.body.x, this.body.y, 9, "red")
                    this.bodytight = new Circle(this.body.x, this.body.y, 21, "yellow")
                    if (pomao.bodyxtight.isPointInside(pomao.tongue)) {

                        this.bodyxtight = new Circle(this.body.x, this.body.y, 9, "red")
                        this.bodytight = new Circle(this.body.x, this.body.y, 21, "yellow")

                        let kick = 0





                        const hurtle = (Rax(Math.atan2(((gamepadAPI.axesStatus[3])), ((gamepadAPI.axesStatus[2])))))


                        if ((hurtle > 0 && hurtle < 22.5) || (hurtle > (360 - 22.5))) {
                            pomao.xdir = 1
                            pomao.tonguexmom = 33.1 / 2
                            pomao.dir = 1
                            kick++
                        }
                        if ((hurtle > 22.5 && hurtle < 67.5)) {
                            pomao.xdir = 1
                            pomao.tonguexmom = 33.1 / 2
                            pomao.dir = 1
                            kick++
                            pomao.ydir = 1
                            pomao.tongueymom = 33.1 / 2
                            kick++
                        }
                        if ((hurtle > 67.5 && hurtle < 112.5)) {
                            pomao.ydir = 1
                            pomao.tongueymom = 33.1 / 2
                            kick++
                        }
                        if ((hurtle > 112.5 && hurtle < 157.5)) {
                            pomao.xdir = -1
                            pomao.tonguexmom = -33.1 / 2
                            pomao.dir = -1
                            kick++
                            pomao.ydir = 1
                            pomao.tongueymom = 33.1 / 2
                            kick++
                        }
                        if ((hurtle > 157.5 && hurtle < 202.5)) {
                            pomao.xdir = -1
                            pomao.tonguexmom = -33.1 / 2
                            pomao.dir = -1
                            kick++
                        }
                        if ((hurtle > 202.5 && hurtle < 247.5)) {
                            pomao.xdir = -1
                            pomao.tonguexmom = -33.1 / 2
                            pomao.dir = -1
                            kick++
                            pomao.ydir = -1
                            pomao.tongueymom = -33.1 / 2
                            kick++
                        }
                        if ((hurtle > 247.5 && hurtle < 292.5)) {
                            pomao.ydir = -1
                            pomao.tongueymom = -33.1 / 2
                            kick++
                        }
                        if ((hurtle > 292.5 && hurtle < (360 - 22.5))) {
                            pomao.xdir = 1
                            pomao.tonguexmom = 33.1 / 2
                            kick++
                            pomao.dir = 1
                            pomao.ydir = -1
                            pomao.tongueymom = -33.1 / 2
                            kick++
                        }


                        if (kick == 2) {
                            pomao.tonguexmom *= .81
                            pomao.tongueymom *= .81
                        }

                        this.fired = 3

                    }
                }
            } else if (this.bodytight.isPointInside(this.tongue)) {
                this.tonguey *= .5
                this.tonguex *= .5
            }


            this.ydir = 0
            this.xdir = 0
            this.eggtimer++

            this.bodyxtight = new Circle(this.body.x, this.body.y, 9, "red")
            this.bodytight = new Circle(this.body.x, this.body.y, 21, "yellow")
            if (this.eggs[this.eggs.length - 1] != this.body) {

                if (this.eggs.length > 1 && this.eggtimer > 10) {
                    if (keysPressed['m'] || (gamepadAPI.buttonsStatus.includes('Axis-Right') && (Math.abs(gamepadAPI.axesStatus[2]) + Math.abs(gamepadAPI.axesStatus[3]) > .3))) {

                        if (keysPressed['m']) {

                            this.eggtimer = 0
                        }
                        if (keysPressed['ArrowDown'] || keysPressed['k']) {
                            this.ydir = 1
                            // this.tongueymom = 33
                        } if (keysPressed['ArrowUp'] || keysPressed['i']) {
                            this.ydir = -1
                            // //////console.log('hit')
                            // this.tongueymom = -33
                        } if (keysPressed['ArrowLeft'] || keysPressed['j']) {
                            this.xdir = -1
                            // this.tonguexmom = -33
                        } if (keysPressed['ArrowRight'] || keysPressed['l']) {
                            this.xdir = 1
                            // this.tonguexmom = 33
                        }

                        //.3
                        // if(gamepadAPI.axesStatus[3] < -.3){
                        //     pomao.ydir = -1
                        //     // pomao.tongueymom = -33.1
                        // } if(gamepadAPI.axesStatus[3] > .3){
                        //     pomao.ydir = 1
                        //     // pomao.tongueymom = 33.1
                        //     pomao.dir = 1
                        // }
                        // if(gamepadAPI.axesStatus[2] > .3){
                        //     pomao.xdir = 1
                        //     // pomao.tonguexmom = 33.1
                        // }
                        // if(gamepadAPI.axesStatus[2] < -.3){
                        //     pomao.xdir = -1
                        //     // pomao.tonguexmom = -33.1
                        //     pomao.dir = -1
                        // }

                        if (keysPressed['m']) {
                            if (this.xdir == -1) {
                                this.eggs[this.eggs.length - 1].x = this.body.x + (this.dir * 29)
                                this.eggs[this.eggs.length - 1].y = this.body.y
                                this.eggs[this.eggs.length - 1].marked = 1
                                this.eggs[this.eggs.length - 1].xmom = -12
                                this.eggs[this.eggs.length - 1].ymom = -3
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                                this.dir = -1
                            }
                            if (this.xdir == 1) {
                                this.eggs[this.eggs.length - 1].x = this.body.x + (this.dir * 29)
                                this.eggs[this.eggs.length - 1].y = this.body.y
                                this.eggs[this.eggs.length - 1].marked = 1
                                this.eggs[this.eggs.length - 1].xmom = 12
                                this.eggs[this.eggs.length - 1].ymom = -3
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                                this.dir = 1
                            }
                            if (this.ydir == 1) {
                                this.eggs[this.eggs.length - 1].x = this.body.x + (this.dir * 29)
                                this.eggs[this.eggs.length - 1].y = this.body.y
                                this.eggs[this.eggs.length - 1].marked = 1
                                this.eggs[this.eggs.length - 1].xmom += this.dir
                                this.eggs[this.eggs.length - 1].ymom = 8
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                            }
                            if (this.ydir == -1) {
                                this.eggs[this.eggs.length - 1].x = this.body.x + (this.dir * 29)
                                this.eggs[this.eggs.length - 1].y = this.body.y
                                this.eggs[this.eggs.length - 1].marked = 1
                                this.eggs[this.eggs.length - 1].xmom += this.dir
                                this.eggs[this.eggs.length - 1].ymom = -8
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                            }
                            if (this.xdir * this.ydir != 0) {
                                // this.eggs[this.eggs.length-1].x  = this.body.x
                                // this.eggs[this.eggs.length-1].y  = this.body.y
                                this.eggs[this.eggs.length - 1].marked = 1
                                this.eggs[this.eggs.length - 1].x = this.body.x + (this.dir * 29)
                                this.eggs[this.eggs.length - 1].y = this.body.y
                                this.eggs[this.eggs.length - 1].xmom *= .8
                                this.eggs[this.eggs.length - 1].ymom *= .8
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                            }


                            if (this.xdir == 0 && this.ydir == 0) {
                                if (this.dir == 1) {

                                    this.eggs[this.eggs.length - 1].x = this.body.x + (this.dir * 29)
                                    this.eggs[this.eggs.length - 1].y = this.body.y
                                    this.eggs[this.eggs.length - 1].marked = 1
                                    this.eggs[this.eggs.length - 1].xmom = 12
                                    this.eggs[this.eggs.length - 1].ymom = -.95
                                    // this.thrown.push(this.eggs[this.eggs.length-1])
                                    // this.eggs.pop()
                                } else {

                                    this.eggs[this.eggs.length - 1].x = this.body.x + (this.dir * 29)
                                    this.eggs[this.eggs.length - 1].y = this.body.y
                                    this.eggs[this.eggs.length - 1].marked = 1
                                    this.eggs[this.eggs.length - 1].xmom = -12
                                    this.eggs[this.eggs.length - 1].ymom = -.95
                                    // this.thrown.push(this.eggs[this.eggs.length-1])
                                    // this.eggs.pop()
                                }





                                // //////console.log(this.eggs)
                                // this.eggs.splice(this.eggs.length-1, 1)
                                // //////console.log(this.eggs)
                            }
                        }



                        if (this.egglock == 3) {

                            if (Math.abs(gamepadAPI.axesStatus[3]) > .25 || Math.abs(gamepadAPI.axesStatus[2]) > .25) {
                                this.eggs[this.eggs.length - 1].x = this.body.x + (this.dir * 29)
                                this.eggs[this.eggs.length - 1].y = this.body.y
                                this.eggs[this.eggs.length - 1].ymom = (gamepadAPI.axesStatus[3] * 14)
                                this.eggs[this.eggs.length - 1].xmom = (gamepadAPI.axesStatus[2] * 14)
                            }
                            if (pomao.blush > 1) {
                                this.eggs[this.eggs.length - 1].hot = 1
                            }
                            this.thrown.push(this.eggs[this.eggs.length - 1])
                            for (let t = 0; t < pomao.eggs.length; t++) {
                                if (pomao.thrown.includes(pomao.eggs[t])) {
                                    pomao.eggs.splice(t, 1)
                                }
                            }
                            this.egglock = 0
                            this.eggtimer = 0
                        }


                        if (Math.abs(gamepadAPI.axesStatus[3]) > .25 || Math.abs(gamepadAPI.axesStatus[2]) > .25) {
                            this.egglock++
                        }

                        if (keysPressed['m']) {
                            if (pomao.blush > 1) {
                                this.eggs[this.eggs.length - 1].hot = 1
                            }
                            this.thrown.push(this.eggs[this.eggs.length - 1])
                            for (let t = 0; t < pomao.eggs.length; t++) {
                                if (pomao.thrown.includes(pomao.eggs[t])) {
                                    pomao.eggs.splice(t, 1)
                                }
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
            if (keysPressed['ArrowLeft'] || keysPressed['j']) {
                this.xdir = -1
                this.dir = -1
                // this.tonguexmom = -33
            }
            if (keysPressed['ArrowRight'] || keysPressed['l']) {
                this.xdir = 1
                this.dir = 1
                // this.tonguexmom = 33
            }

            this.runner++
        }


    }

    let wind = (Math.random() - .5) * 2
    let draft = Math.random() - .5

    class Snowflake {
        constructor(x, y) {
            this.body = new Bosscircle(x, y, 9+Math.random(), "red", 0, 1)

            this.loopoffset = Math.random() * Math.PI * 2
            this.anchor = {}
            this.anchor.xdif = 0
            this.anchor.ydif = 0
            this.type = Math.floor(Math.random() * 70)
            this.draft = 1

        }
        drift() {
            this.body.fmove()
            this.body.x += wind
            this.body.x += Math.random() - .5

            if (this.draft == 1) {
            } else {
                this.body.y += draft
            }

            if (Math.random() < .001) {
                this.draft = -1
            }
            if (Math.random() < .01) {
                this.draft = 1
            }
            if (this.body.radius < 4) {
                this.marked = 1
            }
            if (this.body.y > 360) {
                this.marked = 1
            }
        }
        draw() {
            this.body.fmove()
            this.body.x += wind
            this.body.x += Math.random() - .5

            if (Math.abs(this.body.x - pomao.body.x) < 400) {
                if (Math.abs(this.body.y - pomao.body.y) < 200) {
                    for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                        if (shockfriendly.shocksl[t].repelCheck(this.body)) {
                            this.body.x += shockfriendly.shocksl[t].xmom
                        }
                        if (shockfriendly.shocksr[t].repelCheck(this.body)) {
                            this.body.x += shockfriendly.shocksr[t].xmom
                        }
                    }
                }
            }

            if (this.draft == 1) {
            } else {
                this.body.y += draft
            }

            if (Math.random() < .001) {
                this.draft = -1
            }
            if (Math.random() < .01) {
                this.draft = 1
            }
            // this.body.draw()

            if (this.type < 20) {
                const sheetwidth = snowflakeimg.width
                const sheetheight = snowflakeimg.height
                const cols = 20
                const rows = 1
                const width = sheetwidth / cols
                const height = sheetheight / rows
                const srcx = Math.floor(this.type) * width
                const srcy = 0
                if (pomao.tripping <= 0) {
                    tutorial_canvas_context.drawImage(snowflakeimg, srcx, srcy, width, height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                } else {
                    tutorial_canvas_context.drawImage(snowflakeimg, srcx, srcy, width, height, this.body.x - this.body.radius + (Math.sin(pomao.timeloop + this.loopoffset) * 3), this.body.y - this.body.radius + (Math.cos((pomao.timeloop / 10) + this.loopoffset) * 3), (this.body.radius * 2) + (Math.sin((pomao.timeloop / 10) + this.loopoffset) * 6), (this.body.radius * 2) + (Math.cos(pomao.timeloop + this.loopoffset) * 6))
                }
            } else  if (this.type < 70) {
                const sheetwidth = snowflakeimg2.width
                const sheetheight = snowflakeimg2.height
                const cols = 50
                const rows = 1
                const width = sheetwidth / cols
                const height = sheetheight / rows
                const srcx = Math.floor(this.type - 20) * width
                const srcy = 0
                
                if (pomao.tripping <= 0) {
                    tutorial_canvas_context.drawImage(snowflakeimg2, srcx, srcy, width, height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                } else {
                    tutorial_canvas_context.drawImage(snowflakeimg2, srcx, srcy, width, height, this.body.x - this.body.radius + (Math.sin(pomao.timeloop + this.loopoffset) * 3), this.body.y - this.body.radius + (Math.cos((pomao.timeloop / 10) + this.loopoffset) * 3), (this.body.radius * 2) + (Math.sin((pomao.timeloop / 10) + this.loopoffset) * 6), (this.body.radius * 2) + (Math.cos(pomao.timeloop + this.loopoffset) * 6))
                }
            }
            //else{
            //     const sheetwidth = snowflakeimg3.width
            //     const sheetheight = snowflakeimg3.height
            //     const cols = 60
            //     const rows = 1
            //     const width = sheetwidth / cols
            //     const height = sheetheight / rows
            //     const srcx = Math.floor(this.type - 70) * width
            //     const srcy = 0
            //     tutorial_canvas_context.drawImage(snowflakeimg3, srcx, srcy, width, height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
            // }
            this.colide()

            if (this.body.radius < 4) {
                this.marked = 1
            }
            if (this.body.y > 360) {
                this.marked = 1
            }

        }
        colide() {


            if (this.body.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) {
                this.marked = 2
                this.body.radius *= .975
                if (this.anchor.xdif + this.anchor.ydif == 0) {
                    this.anchor.xdif = pomao.tongue.x - this.body.x
                    this.anchor.ydif = pomao.tongue.y - this.body.y
                    const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                    const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                    if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                        this.anchor.xdif = .001
                        this.anchor.ydif = 0
                    }
                }
            }
            if (this.body.repelCheck(pomao.body) && (this.body.repelCheck(pomao.tongue) || (this.marked == 3 || this.marked == 2))) {
                this.body.radius *= .9
                this.marked = 3
                pomao.diry = 1
            }
            if (this.marked == 2) {
                this.body.x -= ((this.body.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.body.y -= ((this.body.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)
            }
            if (this.marked == 3) {
                this.body.x -= ((this.body.x - pomao.body.x) / 1.1)
                this.body.y -= ((this.body.y - pomao.body.y) / 1.1)
                this.marked = 3
                pomao.diry = 1
            }
            if (this.body.radius < 4) {
                this.marked = 1
            }

            if (this.body.y > 360) {
                this.marked = 1
            }
        }

    }

    class Snowclone {
        constructor(x, y, size, num = 6, ballwidth = 33) {
            this.snowtype = 1
            this.body = new Bosscircle(x, y, 1, "white")
            this.body.angle = this.angler
            this.ballwidth = ballwidth

            this.tips = []
            this.tipnum = num
            this.angler = 0
            this.size = size
            this.flakemake = []
            for (let t = 0; t < this.tipnum; t++) {
                let tip = new Bosscircle(this.body.x + (Math.cos(this.angler) * this.size), this.body.y + (Math.sin(this.angler) * this.size), this.ballwidth, "white")
                tip.angle = this.angler
                this.angler += (Math.PI * 2) / this.tipnum
                this.tips.push(tip)
            }
            this.angler%= Math.PI*2
            this.tips.push(this.body)
            this.force = 0
            this.flakes = []
            this.dir = .5

        }
        spin(){
            this.angler += .01 * this.dir
            this.angler%= Math.PI*2
        }
        castBetween(from, to, granularity = 10, radius = 1, target) { 
            let limit = new LineOP(from, to).hypotenuse() / (to.radius * .5)
            radius = to.radius
            let shape_array = []
            for (let t = 0; t < limit; t++) {
                let circ = new Bosscircle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "gray")
                circ.target = target
                circ.angle = to.angle
                shape_array.push(circ)
            }
            this.flakes.push(new Shape(shape_array))
            return true;
        }
        collideSnowheight(point) {
            let link = new LineOP(point, this.body)
            point.angle = link.angle()
            if (link.hypotenuse() < this.size) {
                point.angle += ((this.size - link.hypotenuse()) / (this.size * 10)) * this.dir
                point.liner = link.hypotenuse()
                point.y = (Math.sin(point.angle) * point.liner) + this.body.y
                point.x = (Math.cos(point.angle) * point.liner) + this.body.x
                point.y += (point.y - this.body.y) / ((link.hypotenuse() * link.hypotenuse()) * .5)
                point.x += (point.x - this.body.x) / ((link.hypotenuse() * link.hypotenuse()) * .5)
                if (point.y > this.body.y) {
                    point.y += this.force
                }
                this.force += .01
            }
            return false
        }
        draw() {
            this.force = 0
            this.tips = []
            this.angler += .01 * this.dir
            this.body.angle = this.angler
            for (let t = 0; t < this.tipnum; t++) {
                let tip = new Bosscircle(this.body.x + (Math.cos(this.angler) * this.size), this.body.y + (Math.sin(this.angler) * this.size), this.ballwidth, "white")
                tip.angle = this.angler
                this.angler += (Math.PI * 2) / this.tipnum
                this.tips.push(tip)
            }

            this.angler%= Math.PI*2
            this.tips.push(this.body)
            this.flakes = []
            this.flakemake = [...this.tips]
            this.flakes = [new Shape(this.flakemake)]
            for (let t = 0; t < this.tips.length; t++) {
                this.castBetween(this.body, this.tips[t])
                let link = new LineOP(this.body, this.tips[t], "white", this.ballwidth*2)
                link.draw()
                this.tips[t].draw()
            }
            let tonguelink = new LineOP(pomao.body, pomao.tongue)
            let bodylink = new LineOP(this.body, pomao.body)
            if ((bodylink.hypotenuse() + pomao.body.radius) - (tonguelink.hypotenuse() + pomao.tongue.radius) <= this.size * 1.5) {
                for (let t = 0; t < this.flakes.length; t++) {
                    let base = this.flakes[t].isPointInsideTargetedSnow(pomao.body)
                    if (typeof base != "boolean") {
                        let link = new LineOP(pomao.body, this.body)
                        pomao.body.angle = link.angle()
                        if (link.hypotenuse() <= (this.tips[0].radius * 2) + this.size + pomao.body.radius + tonguelink.hypotenuse()) {
                            pomao.body.angle += .01 * this.dir
                            pomao.body.liner = link.hypotenuse()
                            let storage = {}
                            storage.x = pomao.body.x
                            storage.y = pomao.body.y
                            storage.rad = pomao.body.radius
                            pomao.body.radius *= 1.1
                                if (base.marked == true) {
                            pomao.body.y = (Math.sin(pomao.body.angle) * pomao.body.liner) + this.body.y
                            pomao.body.x = (Math.cos(pomao.body.angle) * pomao.body.liner) + this.body.x
                                }
                            for (let t = 1; t < pomao.eggs.length; t++) {
                                if (pomao.eggs[t].marked == 0) {
                                    pomao.eggs[t].steer()
                                    pomao.eggs[t].steery()
                                }
                            }
                            tutorial_canvas_context.translate(storage.x - pomao.body.x, storage.y - pomao.body.y)
                            let baselink = new LineOP(base, pomao.body)
                            let basehyp = baselink.hypotenuse() * 1
                            if (basehyp < pomao.body.radius + base.radius) {
                                pomao.body.radius = storage.rad
                                if (base.marked == false) {
                                    let crstorage = {}
                                    crstorage.x = pomao.body.x - base.x
                                    crstorage.y = pomao.body.y - base.y
                                    let dis = pomao.body.radius + base.radius + .001
                                    if(base.radius == this.body.radius){    
                                        dis+=3.1
                                        if(tonguelink.hypotenuse() > 20){
                                            dis+=3.1
                                        }
                                    }
                                    if (keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) {
                                        if(pomao.body.ymom > 0){
                                            dis+=(Math.abs(pomao.body.ymom*Math.sin(baselink.angle())))*.5
                                            if (pomao.body.ymom > 1) {
                                                pomao.body.ymom *= .98
                                            }
                                        }
                                    }
                                    let rat = dis / basehyp
                                    crstorage.x *= rat
                                    crstorage.y *= rat
                                    pomao.body.wxmom = -(pomao.body.x - (base.x + crstorage.x)) * 1.01
                                    pomao.body.wymom = -(pomao.body.y - (base.y + crstorage.y)) * 1.01
                                    if (pomao.body.repelCheck(pomao.tongue) && (Math.abs(pomao.tongueymom) + Math.abs(pomao.body.tonguexmom)) < 10) {
                                        if (pomao.hng < .1) {
                                            pomao.tonguey = 0
                                            pomao.tonguex = 0
                                            pomao.tongueymom = 0
                                            pomao.tonguexmom = 0
                                            pomao.tongue.x = pomao.body.x
                                            pomao.tongue.y = pomao.body.y
                                            pomao.body.wmovecut()
                                            pomao.body.radius = storage.rad
                                            pomao.tonguey = 0
                                            pomao.tonguex = 0
                                            pomao.tongueymom = 0
                                            pomao.tonguexmom = 0
                                            pomao.tongue.x = pomao.body.x
                                            pomao.tongue.y = pomao.body.y
                                            pomao.tonguebox = new Shape([])
                                        }
                                    }
                                }else{

                                    if (keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) {
                                        if(this.body.repelCheck(pomao.body)) {
                                            pomao.dry = 1
                                            pomao.grounded = 0
                                            pomao.jumping = 0
                                            if (pomao.body.ymom > 1) {
                                                pomao.body.ymom = 1
                                            }
                                            if (pomao.body.symom < 0) {
                                                pomao.body.symom = 0
                                            }
                                            pomao.body.sxmom = 0
                                        }
                                    } else if(!this.body.repelCheck(pomao.body)) {
                                        pomao.dry = 1
                                        pomao.grounded = 0
                                        pomao.jumping = 0
                                        if (pomao.body.ymom > 1) {
                                            pomao.body.ymom = 1
                                        }
                                        if (pomao.body.symom < 0) {
                                            pomao.body.symom = 0
                                        }
                                        pomao.body.sxmom = 0
                                    }
                                    let crstorage = {}
                                    crstorage.x = pomao.body.x - base.x
                                    crstorage.y = pomao.body.y - base.y
                                    let dis = pomao.body.radius + base.radius + .001
                                    if(base.radius == this.body.radius){    
                                        dis+=3.1
                                        if(tonguelink.hypotenuse() > 20){
                                            dis+=3.1
                                        }
                                    }
                                    if (keysPressed['s'] || (gamepadAPI.axesStatus[1] > .5)) {
                                        if(pomao.body.ymom > 0){
                                            dis+=(Math.abs(pomao.body.ymom*Math.sin(baselink.angle())))*.5
                                            if (pomao.body.ymom > 1) {
                                                pomao.body.ymom *= .98
                                            }
                                        }
                                    }
                                    let rat = dis / basehyp
                                    crstorage.x *= rat
                                    crstorage.y *= rat
                                    pomao.body.wxmom = -(pomao.body.x - (base.x + crstorage.x)) * 1.01
                                    pomao.body.wymom = -(pomao.body.y - (base.y + crstorage.y)) * 1.01
                                    if (pomao.body.repelCheck(pomao.tongue) && (Math.abs(pomao.tongueymom) + Math.abs(pomao.body.tonguexmom)) < 10) {
                                        if (pomao.hng < .1) {
                                            pomao.tonguey = 0
                                            pomao.tonguex = 0
                                            pomao.tongueymom = 0
                                            pomao.tonguexmom = 0
                                            pomao.tongue.x = pomao.body.x
                                            pomao.tongue.y = pomao.body.y
                                            pomao.body.wmovecut()
                                            pomao.body.radius = storage.rad
                                            pomao.tonguey = 0
                                            pomao.tonguex = 0
                                            pomao.tongueymom = 0
                                            pomao.tonguexmom = 0
                                            pomao.tongue.x = pomao.body.x
                                            pomao.tongue.y = pomao.body.y
                                            pomao.tonguebox = new Shape([])
                                        }
                                    } else {
                                        pomao.tongue.x += pomao.body.wxmom
                                        pomao.tongue.y += pomao.body.wymom
                                        pomao.body.wmovecut()
                                    }
                                    if (pomao.body.y < base.y) {
                                        pomao.dry = 0
                                        pomao.grounded = 0
                                        pomao.jumping = 0
                                        pomao.hng = 0
                                        pomao.pounding = 0
                                    }
                                }
                            } else {
                                pomao.dry = 0
                                pomao.grounded = 0
                                pomao.jumping = 1
                            }
                            pomao.body.radius = storage.rad
                        }
                    }
                    if (pomao.body.repelCheck(pomao.tongue)) {

                    } else {
                        if ((this.flakes[t].isPointInside(pomao.tongue) || ((pomao.tonguebox.isInsideOfShape(this.flakes[t]) || this.flakes[t].isPointInside(pomao.tongue))))) {
                            if (pomao.tongueymom < 0) {
                                if (Math.abs(pomao.tonguey) > 1) {
                                    pomao.body.symom += pomao.tongueymom * 1.1
                                }
                                if (Math.abs(pomao.tonguex) > 15) {
                                    if (pomao.dir == -1) {
                                        pomao.body.sxmom -= Math.abs(pomao.tonguexmom * 3)
                                    } else {
                                        pomao.body.sxmom += Math.abs(pomao.tonguexmom * 3)
                                    }
                                }
                            } else {
                                if (Math.abs(pomao.tonguey) > 1) {
                                    pomao.body.symom -= pomao.tongueymom * 1.1
                                }
                                if (Math.abs(pomao.tonguex) > 15) {
                                    if (pomao.dir == -1) {
                                        pomao.body.sxmom -= Math.abs(pomao.tonguexmom * 3)
                                    } else {
                                        pomao.body.sxmom += Math.abs(pomao.tonguexmom * 3)
                                    }
                                }

                            }
                            if (pomao.body.ymom > 0) {
                                pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                            }
                            pomao.body.ymom = 0
                            pomao.body.xmom *= .975
                            pomao.dry = 1
                            pomao.body.symom -= .0005
                            pomao.tongueymom *= .79 
                            pomao.tonguexmom *= .79 
                        }
                    }
                }
            }
        }
    }

    class Atomdebris {
        constructor(x, y, color) {
            this.body = new Circle(x, y, 3, color, (Math.random() - .5) * 5, (Math.random() - .5) * 5)
            this.body.debris = 1
            this.body.anticolor = "red"
            this.link = new LineOP(this.body, pomao.body)
            this.angle = this.link.angle()
            this.r = Math.floor(Math.random() * 255)
            this.g = Math.floor(Math.random() * 255)
            this.b = Math.floor(Math.random() * 255)
            this.particle = 1
            this.type = Math.floor(Math.random() * 6)
            this.flip = -1
            this.flapper = (Math.floor(Math.random() * 100))
            this.flapmax = 125 + (Math.floor(Math.random() * 100))
            this.anglespeed = (Math.random() - .5) * .25
        }
        draw() {
            // if (this.particle == 1) {
            this.angle = this.link.angle()
            if (this.link.hypotenuse() < 250) {
                this.angle += (250 - this.link.hypotenuse()) / 2500
                this.liner = this.link.hypotenuse()
                this.body.y = (Math.sin(this.angle) * this.liner) + pomao.body.y
                this.body.x = (Math.cos(this.angle) * this.liner) + pomao.body.x
                this.body.color = `rgb(${this.r},${this.g},${this.b})`
                this.body.anticolor = `rgb(${255 - this.r},${255 - this.g},${255 - this.b})`
                this.r++
                this.g++
                this.b++
                this.r %= 256
                this.g %= 256
                this.b %= 256
                this.body.x += (Math.random() - .5)
                this.body.y += (Math.random() - .5)
            } else {

                this.body.color = `rgb(${this.r},${this.g},${this.b})`
                this.body.anticolor = `rgb(${255 - this.r},${255 - this.g},${255 - this.b})`
                this.r++
                this.g++
                this.b++
                this.r %= 256
                this.g %= 256
                this.b %= 256

                if (this.link.hypotenuse() < 250) {
                    // this.body.move()
                }
                this.flapper++
                if (this.flapper % this.flapmax == 0) {
                    this.flip *= -1
                }
                if (this.flip == 1) {
                    if (this.type == 1) {
                        this.body.x -= Math.sin(this.angle) * 1
                        this.body.y -= Math.cos(this.angle) * 5
                    }
                    if (this.type == 2) {
                        this.body.x -= Math.sin(this.angle) * 5
                        this.body.y -= Math.cos(this.angle) * 1
                    }
                    if (this.type == 0) {
                        this.body.x -= Math.cos(this.angle) * 2
                        this.body.y -= Math.cos(this.angle) * 2
                    }
                    if (this.type == 3) {
                        this.body.x -= Math.sin(this.angle) * 2
                        this.body.y -= Math.sin(this.angle) * 2
                    }
                    if (this.type == 4) {
                        this.body.x -= Math.cos(this.angle) * 5
                        this.body.y -= Math.cos(this.angle) * 2
                    }
                    if (this.type == 5) {
                        this.body.x -= Math.sin(this.angle) * 2
                        this.body.y -= Math.sin(this.angle) * 5
                    }

                } else {
                    if (this.type == 1) {
                        this.body.x += Math.sin(this.angle) * 1
                        this.body.y += Math.cos(this.angle) * 5
                    }
                    if (this.type == 2) {
                        this.body.x += Math.sin(this.angle) * 5
                        this.body.y += Math.cos(this.angle) * 1
                    }
                    if (this.type == 0) {
                        this.body.x += Math.cos(this.angle) * 2
                        this.body.y += Math.cos(this.angle) * 2
                    }
                    if (this.type == 3) {
                        this.body.x += Math.sin(this.angle) * 2
                        this.body.y += Math.sin(this.angle) * 2
                    }
                    if (this.type == 4) {
                        this.body.x += Math.cos(this.angle) * 5
                        this.body.y += Math.cos(this.angle) * 2
                    }
                    if (this.type == 5) {
                        this.body.x += Math.sin(this.angle) * 2
                        this.body.y += Math.sin(this.angle) * 5
                    }
                }

                this.angle += this.anglespeed
            }

            this.body.x += (Math.random() - .5)
            this.body.y += (Math.random() - .5)
            this.body.draw()
        }

    }


    class Radiator {
        constructor(x, y) {
            this.body = new Bosscircle(x, y, 20, "red", (Math.random() - .5) * 18, (Math.random() - .5) * 18)
            this.emmiter = []
            this.blastage = 0
        }
        draw() {
            if (Math.random() < 1) {
                let alpha = new Bosscircle(this.body.x, this.body.y, 3, "red", (Math.random() - .5) * 10, (Math.random() - .5) * 10)

                let kut = 0
                while (Math.abs(alpha.xmom) + Math.abs(alpha.ymom) < 5) {
                    alpha.xmom *= 1.2
                    alpha.ymom *= 1.2
                    kut++
                    if (kut > 1000) {
                        break
                    }
                }
                this.emmiter.push(alpha)
            }
            for (let t = 0; t < this.emmiter.length; t++) {
                this.emmiter[t].fmove()
                this.emmiter[t].x += this.body.xmom
                this.emmiter[t].y += this.body.ymom
                this.emmiter[t].draw()
            }
            for (let t = 0; t < this.emmiter.length; t++) {
                let link = new LineOP(this.emmiter[t], this.body)
                if (link.hypotenuse() > 100 + this.blastage) {
                    this.emmiter.splice(t, 1)
                }
            }
            this.bodydraw = new Shape(this.emmiter)

            if (this.blastage == 0) {
                for (let t = 0; t < pomao.thrown.length; t++) {
                    if (this.body.repelCheck(pomao.thrown[t])) {
                        this.blastage++
                        this.body.radius *= 1.5
                        let rotx = 0
                        let roty = 0

                        for (let g = 0; g < 60; g++) {
                            const alpha = new Bosscircle(this.body.x, this.body.y, 3, "white", Math.cos(rotx) * 1.9, Math.sin(roty) * 1.9)
                            rotx += 2 * Math.PI / 60
                            roty += 2 * Math.PI / 60
                            this.emmiter.push(alpha)
                        }
                        pomao.thrown.splice(t, 1)
                        break
                    }
                }
            }
            if (this.blastage > 0) {
                this.blastage++
                this.body.radius *= .985
            }

            if (this.blastage == 100) {
                for (let t = 0; t < this.emmiter.length; t++) {
                    this.emmiter[t].xmom *= -3
                    this.emmiter[t].ymom *= -3
                }
                this.body.color = "magenta"
            }
            if (this.blastage == 110) {
                for (let t = 0; t < this.emmiter.length; t++) {
                    this.emmiter[t].xmom *= -5
                    this.emmiter[t].ymom *= -5
                }
                this.blastage += 200
                this.body.color = "blue"
            }

            if (this.blastage == 320) {
                this.blastage = -100
                debris.splice(debris.indexOf(this), 1)
            }


            if (this.body.repelCheck(pomao.body) || this.bodydraw.isPointInside(pomao.body)) {
                if (this.body.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){
                // if (this.body.radius >= 15) {
                if (pomao.disabled != 1) {
                    if (pomao.pounding != 10) {
                        pomao.body.xmom = -3 * (this.bump)
                        pomao.disabled = 1
                        pomao.hits--
                        pomao.body.ymom = -1.8
                        this.body.xmom = -pomao.body.xmom
                    }
                } else {
                    if (this.bump * pomao.body.xmom > 0) {
                        pomao.body.xmom = -1.8 * (this.bump)
                        pomao.body.ymom = -1.8
                        this.body.xmom = -pomao.body.xmom
                    }
                }
                // }
                //   }
            }


            if (this.body.x > 7000) {
                if (this.body.xmom > 0) {
                    this.body.xmom *= -1
                }
            }
            if (this.body.x < -2050) {
                if (this.body.xmom < 0) {
                    this.body.xmom *= -1
                }
            }
            if (this.body.y < -5050) {
                if (this.body.ymom < 0) {
                    this.body.ymom *= -1
                }
            }
            if (this.body.y + this.body.radius > floors[(Math.floor((2100 + this.body.x) / 3)) % floors.length].y) {
                if (this.body.ymom > 0) {
                    this.body.ymom *= -1
                }
            }

            this.body.fmove()
            this.body.draw()
        }
    }



    class Bat {
        constructor(x, y) {
            this.type = 2//Math.floor(Math.random()*3)
            this.anchor = {}
            this.anchor.xdif = 0
            this.anchor.ydif = 0
            this.marked = 0
            this.out = 0
            this.pops = []
            this.bopped = 0
            this.xrepelled = 0
            this.yrepelled = 0
            this.body = new Circle(x, y, 15, "transparent")
            this.bodyanchor = new Circle(this.body.x + ((Math.random() - .5) * 200), this.body.y + ((Math.random() - .5) * 200), 10, "transparent")
            this.bodydraw = new Circlec(this.body.x, this.body.y, 22, "red")
            this.bodydrawhuge = new Circlec(this.body.x, this.body.y, this.body.radius + 17, "#AA00DD")
            this.clean()
        }
        draw() {

            if (this.out <= 0) {

                this.yank()
                // this.move()
                this.bodydraw = new Circlec(this.body.x, this.body.y, this.body.radius + 7, "#AA00DD")
                this.bodydrawhuge = new Circlec(this.body.x, this.body.y, this.body.radius + 17, "#AA00DD")
                tutorial_canvas_context.drawImage(batimg, 0, 0, batimg.width, batimg.height, this.body.x - (24 * (this.body.radius * .06666666666)), this.body.y - (24 * (this.body.radius * .06666666666)), 48 * (this.body.radius * .06666666666), 48 * (this.body.radius * .06666666666))

            }


        }

        pop() {
            let rotx = 0
            let roty = 0

            for (let g = 0; g < 7; g++) {
                let color = "black"

                const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius / 4, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 7
                roty += 2 * Math.PI / 7
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }
        clean() {

            this.bodydraw = new Circlec(this.body.x, this.body.y, this.body.radius + 7, "#AA00DD")
            this.bodydrawhuge = new Circlec(this.body.x, this.body.y, this.body.radius + 17, "#AA00DD")
            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                if (this.bodydrawhuge.repelCheck(shockfriendly.shocksl[t])) {
                    if (this.out <= 0) {
                        this.pop()
                    }
                    this.out = 45
                    break
                }

            }
            for (let t = 0; t < shockfriendly.shocksr.length; t++) {
                if (this.bodydrawhuge.repelCheck(shockfriendly.shocksr[t])) {
                    if (this.out <= 0) {
                        this.pop()
                    }
                    this.out = 45
                    break
                }

            }
            for (let t = 0; t < pomao.thrown.length; t++) {
                if (this.bodydraw.repelCheck(pomao.thrown[t])) {
                    //    boys[k].pop()
                    //    deadboys.push(boys[k])
                    //     boys.splice(k,1)
                    if (this.out <= 0) {
                        this.pop()
                    }
                    this.out = 45
                    break
                }

            }

            if (this.body.radius <= 1.5) {
                this.out = 1
                pomao.hits += 1
                if (pomao.hits > 9) {
                    pomao.hits = 9
                }
                if (pomao.eggs.length < 16) {

                    const seepx = new Seed(pomao.eggs[pomao.eggs.length - 1])
                    pomao.eggs.push(seepx) //safe
                }
            }

            if (this.out == 1) {

                bats.splice(bats.indexOf(this), 1)
            } else if (this.out > 1) {
                this.popdraw()
            }
            this.out--
        }
        yank() {

            this.body.x += (this.bodyanchor.x - this.body.x) / 60
            this.body.y += (this.bodyanchor.y - this.body.y) / 60
            this.bodyanchor.x -= (this.bodyanchor.x - pomao.body.x) / 10
            this.bodyanchor.y -= (this.bodyanchor.y - pomao.body.y) / 10
            if (Math.random() < .1) {
                this.bodyanchor = new Circle(this.bodyanchor.x + ((Math.random() - .5) * 1200), this.bodyanchor.y + ((Math.random() - .5) * 1200), 100, "transparent")
            }


            this.xrepel = 0
            this.yrepel = 0


            if (this.bodydraw.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) {
                this.marked = 1
                this.body.radius *= .975
                if (this.anchor.xdif + this.anchor.ydif == 0) {
                    this.anchor.xdif = pomao.tongue.x - this.bodydraw.x
                    this.anchor.ydif = pomao.tongue.y - this.bodydraw.y
                    const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                    const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                    if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                        this.anchor.xdif = .001
                        this.anchor.ydif = 0
                    }
                }
            }
            if (this.bodydraw.repelCheck(pomao.body) && (this.bodydraw.repelCheck(pomao.tongue) || (this.marked == 1 || this.marked == 2))) {
                this.body.radius *= .9
                this.marked = 2
                pomao.diry = 1
            } else if (this.bodydraw.repelCheck(pomao.body) && !this.bodydraw.repelCheck(pomao.tongue)) {
                if (this.body.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){
                if (this.body.radius >= 15) {
                    if (pomao.disabled != 1) {
                        if (pomao.pounding != 10) {
                            pomao.body.xmom = -3 * (this.bump)
                            pomao.disabled = 1
                            pomao.hits--
                            pomao.body.ymom = -1.8
                            this.body.xmom = -pomao.body.xmom
                        }
                    } else {
                        if (this.bump * pomao.body.xmom > 0) {
                            pomao.body.xmom = -1.8 * (this.bump)
                            pomao.body.ymom = -1.8
                            this.body.xmom = -pomao.body.xmom
                        }
                    }
                }
                //   }
            }

            if (this.marked == 1) {
                this.body.x -= ((this.body.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.body.y -= ((this.body.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)
            }
            if (this.marked == 2) {
                this.body.x -= ((this.body.x - pomao.body.x) / 1.1)
                this.body.y -= ((this.body.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1
            }

            if (this.marked == 0) {
                for (let f = 0; f < bats.length; f++) {
                    if (this !== bats[f]) {
                        if (this.bodydraw.repelCheck(bats[f].bodydraw)) {
                            const distance = ((new Line(bats[f].body.x, bats[f].body.y, this.body.x, this.body.y, 1, "red")).hypotenuse()) - (bats[f].bodydraw.radius + this.bodydraw.radius)
                            const angleRadians = Math.atan2(bats[f].body.y - this.body.y, bats[f].body.x - this.body.x);
                            this.xrepel += (Math.cos(angleRadians) * distance) / 2
                            this.yrepel += (Math.sin(angleRadians) * distance) / 2
                            // bats[f].xrepelled = 1
                        }
                    }
                }

                if (this.xrepelled == 0) {
                    if (this.type == 0) {
                        this.body.x += this.xrepel
                        this.body.y += this.yrepel
                    } else if (this.type == 1) {
                        this.body.x += this.xrepel
                        this.body.x += this.yrepel / 2
                    } else if (this.type == 2) {
                        this.body.y += this.xrepel / 2
                        this.body.y += this.yrepel
                    }
                }

                this.xrepelled = 0
                this.yrepelled = 0

            }

        }
    }
    class Cloud {
        constructor(x, y) {
            this.type = 2//Math.floor(Math.random()*3)
            this.anchor = {}
            this.anchor.xdif = 0
            this.anchor.ydif = 0
            this.marked = 0
            this.out = 0
            this.pops = []
            this.bopped = 0
            this.xrepelled = 0
            this.yrepelled = 0
            this.body = new Circle(x, y, 15, "transparent")
            this.bodyanchor = new Circle(this.body.x + ((Math.random() - .5) * 200), this.body.y + ((Math.random() - .5) * 200), 10, "transparent")
            this.bodydraw = new Circlec(this.body.x, this.body.y, 22, "red")
            this.bodydrawhuge = new Circlec(this.body.x, this.body.y, this.body.radius + 17, "#AA00DD")
            this.frame = Math.floor(Math.random() * 14)
            this.click = 0
            this.clean()
        }
        draw() {

            this.click++
            if (this.click == 4) {
                this.frame++
                this.frame %= 14
                this.click = 0
            }

            if (this.out <= 0) {

                this.yank()
                // this.move()
                this.bodydraw = new Circlec(this.body.x, this.body.y, this.body.radius + 7, "#AA00DD")
                this.bodydrawhuge = new Circlec(this.body.x, this.body.y, this.body.radius + 17, "#AA00DD")
                tutorial_canvas_context.drawImage(cloudimg, this.frame * 48, 0, 48, 48, this.body.x - (24 * (this.body.radius * .06666666666)), this.body.y - (24 * (this.body.radius * .06666666666)), 48 * (this.body.radius * .06666666666), 48 * (this.body.radius * .06666666666))

            }


        }

        pop() {
            let rotx = 0
            let roty = 0

            for (let g = 0; g < 7; g++) {
                let color = "yellow"

                const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius / 4, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 7
                roty += 2 * Math.PI / 7
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }
        clean() {

            this.bodydraw = new Circlec(this.body.x, this.body.y, this.body.radius + 7, "#AA00DD")
            this.bodydrawhuge = new Circlec(this.body.x, this.body.y, this.body.radius + 17, "#AA00DD")
            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                if (this.bodydrawhuge.repelCheck(shockfriendly.shocksl[t])) {
                    if (this.out <= 0) {
                        this.pop()
                    }
                    this.out = 45
                    break
                }

            }
            for (let t = 0; t < shockfriendly.shocksr.length; t++) {
                if (this.bodydrawhuge.repelCheck(shockfriendly.shocksr[t])) {
                    if (this.out <= 0) {
                        this.pop()
                    }
                    this.out = 45
                    break
                }

            }
            for (let t = 0; t < pomao.thrown.length; t++) {
                if (this.bodydraw.repelCheck(pomao.thrown[t])) {
                    //    boys[k].pop()
                    //    deadboys.push(boys[k])
                    //     boys.splice(k,1)
                    if (this.out <= 0) {
                        this.pop()
                    }
                    this.out = 45
                    break
                }

            }

            if (this.body.radius <= 1.5) {
                this.out = 1
                pomao.hits += 1
                if (pomao.hits > 9) {
                    pomao.hits = 9
                }
                if (pomao.eggs.length < 16) {

                    const seepx = new Seed(pomao.eggs[pomao.eggs.length - 1])
                    pomao.eggs.push(seepx) //safe
                }
            }

            if (this.out == 1) {

                bats.splice(bats.indexOf(this), 1)
            } else if (this.out > 1) {
                this.popdraw()
            }
            this.out--
        }
        yank() {

            this.body.x += (this.bodyanchor.x - this.body.x) / (60 - (this.frame * 2))
            this.body.y += (this.bodyanchor.y - this.body.y) / (60 - (this.frame * 2))
            this.bodyanchor.x -= (this.bodyanchor.x - pomao.body.x) / (16 - this.frame)
            this.bodyanchor.y -= (this.bodyanchor.y - pomao.body.y) / (16 - this.frame)
            if (Math.random() < .1) {
                this.bodyanchor = new Circle(this.bodyanchor.x + ((Math.random() - .5) * 1200), this.bodyanchor.y + ((Math.random() - .5) * 1200), 100, "transparent")
            }


            this.xrepel = 0
            this.yrepel = 0


            if (this.bodydraw.repelCheck(pomao.tongue) || pomao.tonguebox.isPointInside(this.body)) {
                this.marked = 1
                this.body.radius *= .975
                if (this.anchor.xdif + this.anchor.ydif == 0) {
                    this.anchor.xdif = pomao.tongue.x - this.bodydraw.x
                    this.anchor.ydif = pomao.tongue.y - this.bodydraw.y
                    const link1 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x, pomao.tongue.y, "red", 1)
                    const link2 = new Line(pomao.body.x, pomao.body.y, pomao.tongue.x - this.anchor.xdif, pomao.tongue.y - this.anchor.ydif, "red", 1)
                    if (link2.hypotenuse() > link1.hypotenuse() - 10) {
                        this.anchor.xdif = .001
                        this.anchor.ydif = 0
                    }
                }
            }
            if (this.bodydraw.repelCheck(pomao.body) && (this.bodydraw.repelCheck(pomao.tongue) || (this.marked == 1 || this.marked == 2))) {
                this.body.radius *= .9
                this.marked = 2
                pomao.diry = 1
            } else if (this.bodydraw.repelCheck(pomao.body) && !this.bodydraw.repelCheck(pomao.tongue)) {
                if (this.body.x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                //   if(pomao.body.ymom == 0){
                if (this.body.radius >= 15) {
                    if (pomao.disabled != 1) {
                        if (pomao.pounding != 10) {
                            pomao.body.xmom = -3 * (this.bump)
                            pomao.disabled = 1
                            pomao.hits--
                            pomao.body.ymom = -1.8
                            this.body.xmom = -pomao.body.xmom
                        }
                    } else {
                        if (this.bump * pomao.body.xmom > 0) {
                            pomao.body.xmom = -1.8 * (this.bump)
                            pomao.body.ymom = -1.8
                            this.body.xmom = -pomao.body.xmom
                        }
                    }
                }
                //   }
            }

            if (this.marked == 1) {
                this.body.x -= ((this.body.x - pomao.tongue.x) / 1) + (this.anchor.xdif * .9)
                this.body.y -= ((this.body.y - pomao.tongue.y) / 1) + (this.anchor.ydif * .9)
            }
            if (this.marked == 2) {
                this.body.x -= ((this.body.x - pomao.body.x) / 1.1)
                this.body.y -= ((this.body.y - pomao.body.y) / 1.1)
                this.marked = 2
                pomao.diry = 1
            }

            if (this.marked == 0) {
                for (let f = 0; f < bats.length; f++) {
                    if (this !== bats[f]) {
                        if (this.bodydraw.repelCheck(bats[f].bodydraw)) {
                            const distance = ((new Line(bats[f].body.x, bats[f].body.y, this.body.x, this.body.y, 1, "red")).hypotenuse()) - (bats[f].bodydraw.radius + this.bodydraw.radius)
                            const angleRadians = Math.atan2(bats[f].body.y - this.body.y, bats[f].body.x - this.body.x);
                            this.xrepel += (Math.cos(angleRadians) * distance) / 2
                            this.yrepel += (Math.sin(angleRadians) * distance) / 2
                            // bats[f].xrepelled = 1
                        }
                    }
                }

                if (this.xrepelled == 0) {
                    if (this.type == 0) {
                        this.body.x += this.xrepel
                        this.body.y += this.yrepel
                    } else if (this.type == 1) {
                        this.body.x += this.xrepel
                        this.body.x += this.yrepel / 2
                    } else if (this.type == 2) {
                        this.body.y += this.xrepel / 2
                        this.body.y += this.yrepel
                    }
                }

                this.xrepelled = 0
                this.yrepelled = 0

            }

        }
    }
    class Bossbeam {
        constructor() {
            this.wall1 = new Rectangle(4700, -800, 1500, 50, "red")
            this.fight = 0
            this.cleared = 0
            floors.push(this.wall1)
            walls.push(this.wall1)
            roofs.push(this.wall1)
            this.body1 = new Circle(9000, 100, 10, "transparent")
            this.body2 = new Circle(9000, 100, 10, "transparent")
            this.body3 = new Circle(9000, 100, 10, "transparent")
            this.body1anchor = new Circle(this.body1.x + ((Math.random() - .5) * 200), this.body1.y + ((Math.random() - .5) * 200), 10, "transparent")
            this.body2anchor = new Circle(this.body2.x + ((Math.random() - .5) * 200), this.body2.y + ((Math.random() - .5) * 200), 10, "transparent")
            this.body3anchor = new Circle(this.body3.x + ((Math.random() - .5) * 200), this.body3.y + ((Math.random() - .5) * 200), 10, "transparent")
            this.health = 666
            this.maxhealth = 666
            this.beams = []
            this.beambox = new Shape(this.beams)
            this.bump = 0
            this.xrepel = 0
            this.yrepel = 0
        }
        draw() {
            if (this.health > 0) {

                if (boss.body1.x > pomao.body.x - ((tutorial_canvas.width * 1) + boss.body1.radius) && boss.body1.x < pomao.body.x + ((tutorial_canvas.width * 1) + boss.body1.radius)) {
                    if (boss.body1.y > pomao.body.y - ((tutorial_canvas.height * 1) + boss.body1.radius) && boss.body1.y < pomao.body.y + ((tutorial_canvas.height * 1) + boss.body1.radius)) {
                        this.move()
                        targoymusic.playbackRate = .4 + (1 - (.5 * (this.health / this.maxhealth)));
                        targoymusic.play()

                        lvl1basemusic.pause()
                    } else {
                        this.beam()
                    }
                } else {
                    this.beam()
                }

                for (let t = 0; t < this.beams.length; t++) {
                    tutorial_canvas_context.drawImage(rimgs[0], 0, 0, rimgs[0].width, rimgs[0].height, this.beams[t].x - (24 * (this.beams[t].radius * .06666666666)), this.beams[t].y - (24 * (this.beams[t].radius * .06666666666)), 48 * (this.beams[t].radius * .06666666666), 48 * (this.beams[t].radius * .06666666666))

                }

                for (let t = 0; t < pomao.thrown.length; t++) {
                    if (this.beambox.isPointInside(pomao.thrown[t])) {
                        this.health -= 2.5
                    }
                }
                for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                    if (this.beambox.isPointInside(shockfriendly.shocksl[t])) {
                        this.health -= .2
                    }
                }
                for (let t = 0; t < shockfriendly.shocksr.length; t++) {
                    if (this.beambox.isPointInside(shockfriendly.shocksr[t])) {
                        this.health -= .2
                    }
                }
                if (this.beambox.isPointInside(pomao.body)) {
                    if (this.body1.x > pomao.body.x) {
                        this.bump = 1
                    } else {
                        this.bump = -1
                    }
                    //   if(pomao.body.ymom == 0){
                    if (this.body1.radius >= 1) {
                        if (pomao.disabled != 1) {
                            if (pomao.pounding != 10) {
                                pomao.body.xmom = -3 * (this.bump)
                                pomao.disabled = 1
                                pomao.hits -= 2
                                pomao.body.ymom = -1.8
                                //  this.body.xmom = -pomao.body.xmom
                            }
                        } else {
                            if (this.bump * pomao.body.xmom > 0) {
                                pomao.body.xmom = -1.8 * (this.bump)
                                pomao.body.ymom = -1.8
                                // this.body.xmom = -pomao.body.xmom
                            }
                        }
                    }
                }
            } else {

                lvl1basemusic.play()
                targoymusic.pause()
                for (let t = 0; t < this.beams.length; t++) {
                    tutorial_canvas_context.drawImage(rimgs[0], 0, 0, rimgs[0].width, rimgs[0].height, this.beams[t].x - (24 * (this.beams[t].radius * .06666666666)), this.beams[t].y - (24 * (this.beams[t].radius * .06666666666)), 48 * (this.beams[t].radius * .06666666666), 48 * (this.beams[t].radius * .06666666666))
                    this.beams[t].move()
                    this.beams[t].xmom *= .98
                    this.beams[t].ymom *= .98
                    if (this.beams[t].radius > 0) {
                        this.beams[t].radius *= .975
                    }
                }

                if (this.cleared == 0) {

                    for (let t = 0; t < this.beams.length; t++) {
                        this.beams[t].xmom = (Math.random() - .5) * 9
                        this.beams[t].ymom = (Math.random() - .5) * 9

                    }

                    for (let t = 0; t < this.beams.length; t++) {
                        for (let k = 0; Math.abs(this.beams[t].xmom) + Math.abs(this.beams[t].ymom) < 8; k++) {
                            this.beams[t].xmom *= 1.1
                            this.beams[t].ymom *= 1.1
                        }
                    }

                    // for(let t=0;t<this.beams.length;t++){

                    // }

                    this.cleared = 1
                    walls.splice(walls.indexOf(this.wall1), 1)
                    floors.splice(floors.indexOf(this.wall1), 1)
                    roofs.splice(roofs.indexOf(this.wall1), 1)
                }
            }
        }
        move() {
            this.beam()
            this.body1.x += (this.body1anchor.x - this.body1.x) / 80
            this.body1.y += (this.body1anchor.y - this.body1.y) / 80
            this.body2.x += (this.body2anchor.x - this.body2.x) / 80
            this.body2.y += (this.body2anchor.y - this.body2.y) / 80
            this.body3.x += (this.body3anchor.x - this.body3.x) / 80
            this.body3.y += (this.body3anchor.y - this.body3.y) / 80

            this.body1anchor.xmom += (this.body1anchor.x - pomao.body.x) / -500
            this.body1anchor.ymom += (this.body1anchor.y - pomao.body.y) / -500
            this.body2anchor.xmom += (this.body2anchor.x - pomao.body.x) / -500
            this.body2anchor.ymom += (this.body2anchor.y - pomao.body.y) / -500
            this.body3anchor.xmom += (this.body3anchor.x - pomao.body.x) / -500
            this.body3anchor.ymom += (this.body3anchor.y - pomao.body.y) / -500

            this.body1anchor.move()
            this.body2anchor.move()
            this.body3anchor.move()


            this.body1anchor.xmom *= .98
            this.body2anchor.xmom *= .98
            this.body3anchor.xmom *= .98
            this.body1anchor.ymom *= .98
            this.body2anchor.ymom *= .98
            this.body3anchor.ymom *= .98

            if (this.body3anchor.repelCheck(this.body1anchor)) {
                const distance = ((new Line(this.body1anchor.x, this.body1anchor.y, this.body3anchor.x, this.body3anchor.y, 1, "red")).hypotenuse()) - (this.body1anchor.radius + this.body3anchor.radius)
                const angleRadians = Math.atan2(this.body1anchor.y - this.body3anchor.y, this.body1anchor.x - this.body3anchor.x);
                this.xrepel += (Math.cos(angleRadians) * distance) / 2
                this.yrepel += (Math.sin(angleRadians) * distance) / 2
            }


            this.body3anchor.x -= this.xrepel
            this.body3anchor.y -= this.yrepel
            this.body1anchor.x += this.xrepel
            this.body1anchor.y += this.yrepel


            this.xrepel = 0
            this.yrepel = 0


            if (Math.random() < .02) {
                this.body3anchor = new Circle(this.body3anchor.x + ((Math.random() - .5) * 3300), this.body3anchor.y + ((Math.random() - .5) * 2100), 100, "transparent")
                // this.body3anchor.draw()
            }

            if (Math.random() < .01) {
                this.body1anchor = new Circle(this.body1anchor.x + ((Math.random() - .5) * 3300), this.body1anchor.y + ((Math.random() - .5) * 2100), 100, "transparent")
            }

            if (Math.random() < .005) {
                this.body2anchor = new Circle(this.body2anchor.x + ((Math.random() - .5) * 1280), this.body2anchor.y + ((Math.random() - .5) * 720), 100, "transparent")
            }

            // this.body1anchor.draw()
            // this.body2anchor.draw()
            // this.body3anchor.draw()
        }
        beam() {

            this.beams = []
            if (this.health / 20 >= 10) {

                for (let t = 0; t < this.health; t += 10) {

                    let batte = (this.body1.x - this.body2.x)
                    let battle = batte / this.health
                    battle *= t
                    let battey = (this.body1.y - this.body2.y)
                    let battley = battey / this.health
                    battley *= t

                    const ray = new Circlec(this.body1.x + battle, this.body1.y + battley, (this.health / 20) + 5, "red")
                    this.beams.push(ray)

                    let battez = (this.body3.x - this.body2.x)
                    let battlez = battez / this.health
                    battlez *= t
                    let batteyz = (this.body3.y - this.body2.y)
                    let battleyz = batteyz / this.health
                    battleyz *= t

                    const rayx = new Circlec(this.body1.x + battlez, this.body1.y + battleyz, (this.health / 20) + 5, "red")
                    this.beams.push(rayx)
                }
            } else {

                for (let t = 0; t < 20; t++) {

                    let batte = (this.body1.x - this.body2.x)
                    let battle = batte / 20
                    battle *= t
                    let battey = (this.body1.y - this.body2.y)
                    let battley = battey / 20
                    battley *= t

                    const ray = new Circlec(this.body1.x + battle, this.body1.y + battley, (this.health / 20) + 5, "red")
                    this.beams.push(ray)

                    let battez = (this.body3.x - this.body2.x)
                    let battlez = battez / 20
                    battlez *= t
                    let batteyz = (this.body3.y - this.body2.y)
                    let battleyz = batteyz / 20
                    battleyz *= t

                    const rayx = new Circlec(this.body1.x + battlez, this.body1.y + battleyz, (this.health / 20) + 5, "red")
                    this.beams.push(rayx)
                }
            }



            this.beambox = new Shape(this.beams)
        }
    }
    class Shockwave {
        constructor(body) {
            this.center = body
            this.shocksl = []
            this.shocksr = []
            this.shock()
            // //console.log(this)

        }
        draw() {

            for (let n = 0; n < this.shocksr.length; n++) {
                if (this.shocksr[n].radius < 3.5) {
                    this.shocksr.splice(n, 4)
                }
            }
            for (let n = 0; n < this.shocksr.length; n++) {
                this.shocksr[n].xmom *= .945
                this.shocksr[n].ymom *= .945
                this.shocksr[n].radius *= .92
                this.shocksr[n].move()
                // this.shocksr[n].draw()
            }



            for (let n = 0; n < this.shocksl.length; n++) {
                if (this.shocksl[n].radius < 3.5) {
                    this.shocksl.splice(n, 4)
                }
            }
            for (let n = 0; n < this.shocksl.length; n++) {
                this.shocksl[n].xmom *= .945
                this.shocksl[n].ymom *= .945
                this.shocksl[n].radius *= .92
                this.shocksl[n].move()
                // this.shocksl[n].draw()
            }

            if (this.shocksl.length > 0) {
                if (this.shocksr.length > 0) {
                    for (let n = 0; n < this.shocksl.length - 1; n++) {
                        const link2 = new Line(this.shocksl[n].x, this.shocksl[n].y + 34, this.shocksl[n + 1].x, this.shocksl[n + 1].y + 34, "#00FFFF88", this.shocksl[n].radius / 10)
                        const link = new Line(this.shocksr[n].x, this.shocksr[n].y + 34, this.shocksr[n + 1].x, this.shocksr[n + 1].y + 34, "#00FFFF88", this.shocksr[n].radius / 10)

                        link.draw()
                        link2.draw()
                    }
                }
            }
        }
        shock() {
            if (pomao.body.ymom > 10.2) {
                const shockright = new Circlec(this.center.x - 3, this.center.y + 2, this.center.radius, "yellow", 20.5, 2) // no +2 before
                const shockleft = new Circlec(this.center.x + 3, this.center.y + 2, this.center.radius, "yellow", -20.5, 2)
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

    let loadlvl1button
    let loadlvl2button
    let loadlvl3button
    let loadlvl4button
    let loadlvl5button
    let loadlvl6button
    let loadlvl7button
    let loadlvl8button
    let loadlvl9button
    let loadlvl10button

    class Seed {
        constructor(target) {
            // //////console.log(pomao)
            this.markedx = 0
            this.marked = 0
            this.target = target
            this.pos = []
            this.posy = []
            this.x = target.x + (pomao.dir * -30)
            this.y = target.y
            this.radius = 20
            this.ymom = -1.5
            this.xmom = 0
            this.gravity = .1
            this.width = 32
            this.height = 32
            this.count = 0
            this.county = 0
            this.jiggle = Math.random() * Math.PI * 2
            this.color = getRandomLightColor()
            this.hot = 0
            this.timer = 0
        }
        steer() {



            if (pomao.eggs.includes(this)) {
                this.marked = 0
            }
            if (pomao.thrown.includes(this)) {
                this.marked = 1
            }
            if (this.marked == 0) {


                // if()
                if (Math.abs(this.x - this.target.x) > 8) {
                    this.pos.push(this.target.x)
                }



                if ((this.pos.length - 13) > this.count) {
                    this.x = this.pos[this.count]
                    this.count++
                }
            }
        }
        poshop(add) {
            for (let t = 0; t < this.pos.length; t++) {
                // this.pos[t]+=add
            }
        }
        steery() {

            if (pomao.eggs.includes(this)) {
                this.marked = 0
            }
            if (pomao.thrown.includes(this)) {
                this.marked = 1
                this.timer++
            }
            if (this.marked == 0) {
                this.ymom = 0
                // if(Math.abs(this.y-this.target.y) > 5){
                this.posy.push(this.target.y)
                // }

                if ((this.posy.length - 10) > this.county) {
                    this.y = this.posy[this.county]
                    this.county++
                }
            }
        }
        move() {
            this.y += this.ymom
            this.x += this.xmom
        }
        draw() {

            if (keysPressed['q']) {
                this.radius = 23
                new Circlex(this.x, this.y, this.radius, "yellow").draw()
            }

            if (pomao.eggs.includes(this)) {
                this.marked = 0
            }
            if (pomao.thrown.includes(this)) {
                this.marked = 1
            }
            // //////console.log(pomao.eggs, pomao.thrown)

            if (this.marked == 0) {

                this.jiggle += .2
                if (!keysPressed['q']) {
                    tutorial_canvas_context.drawImage(seedegg, this.x - (this.width / 2), (this.y + 7) - (this.height / 2) + (7 * Math.cos(this.jiggle)), this.width, this.height)
                }

            } else {

                // this.newboll = new Circle(this.x, this.y, 10, this.color)

                // this.newboll.draw()
                if (this.hot == 0) {
                    tutorial_canvas_context.drawImage(seedegg, this.x - (this.width / 2), (this.y) - (this.height / 2), this.width, this.height)
                } else {

                    this.radius = 23
                    if (this.xmom > 0) {
                        if (pomao.body.isPointInside(this)) {
                            tutorial_canvas_context.drawImage(seedeggfl, this.x - (this.width / 2), (this.y) - (this.height / 2), this.width / 10, this.height / 10)
                        } else {
                            tutorial_canvas_context.drawImage(seedeggfl, this.x - (this.width / 2), (this.y) - (this.height / 2), this.width, this.height)
                        }
                    } else {
                        if (pomao.body.isPointInside(this)) {
                            tutorial_canvas_context.drawImage(seedeggf, this.x - (this.width / 2), (this.y) - (this.height / 2), this.width / 10, this.height / 10)
                        } else {
                            tutorial_canvas_context.drawImage(seedeggf, this.x - (this.width / 2), (this.y) - (this.height / 2), this.width, this.height)
                        }
                    }
                }
            }

            this.move()

            if (this.marked == 0) {
                if (this.y + this.radius > 660) {
                    if (this.ymom > 0) {
                        if (this.marked == 0) {
                            this.ymom *= -1
                        }
                    }
                }
                if (Math.abs(this.ymom) > 1.5) {
                    this.ymom *= .97
                } else {
                    this.ymom *= 1.01
                }
            }
            this.ymom += this.gravity

        }
    }


    class Observer {
        constructor(x, y, z = 0) {
            if (z == 0) {
                this.getdrawn = 0
                this.body = new Circlec(x, y, 80, "cyan")
                this.ray = []
                this.rayrange = 420
                this.globalangle = Math.PI
                this.gapangle = Math.PI / 8
                this.currentangle = 0
                this.obstacles = []
                this.raymake = 37 // 19
                this.health = 1200
                this.maxhealth = 1200
                this.shook = 0
                this.smack = 0
                this.dir = 1
                this.beamcut = 10
                this.beamdisp = 0
                this.pops = []
                this.bopped = 0
                this.wall1 = new Rectangle(-1800, ((-10300 - 6550) + 350) - 5000, 5000, 50, "cyan")
                this.cleared = 0
                floors.push(this.wall1)
                walls.push(this.wall1)
                roofs.push(this.wall1)
                ungrapplable.push(this.wall1)
                beamrocks.push(this.wall1)
                floormpf.push(this.wall1)
                this.obstacles.push(this.wall1)
                this.obstaclesstorage = []

            }
        }
        pop() {
            this.bopped = 1
            let rotx = 0
            let roty = 0

            for (let g = 0; g < 17; g++) {
                let color = "red"
                const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius / 2, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 17
                roty += 2 * Math.PI / 17
            }


            if (this.cleared == 0) {

                this.cleared = 1
                walls.splice(walls.indexOf(this.wall1), 1)
                floors.splice(floors.indexOf(this.wall1), 1)
                roofs.splice(roofs.indexOf(this.wall1), 1)
                ungrapplable.splice(ungrapplable.indexOf(this.wall1), 1)
                beamrocks.splice(beamrocks.indexOf(this.wall1), 1)
                floormpf.splice(floormpf.indexOf(this.wall1), 1)
                this.obstacles = []
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }

        beam() {
            this.smack--
            if (this.smack <= 0) {
                this.shook = 0
                this.body.color = "cyan"
            }
            if (this.shook == 1) {
                let angleRadians = Math.atan2(pomao.body.y - this.body.y, pomao.body.x - this.body.x);
                // angleRadians+= (this.globalangle)/19

                this.globalangle = ((angleRadians - (this.gapangle * 1.5)))
                this.globalangle += this.beamdisp
                if (this.raymake == 1) {

                    if (Math.random() < .1) {

                        this.beamdisp += (Math.random() - .5) * .04
                    }
                }
                this.beamcut--
                if (this.beamcut <= 0) {
                    if (this.raymake > 1) {
                        this.raymake -= 1
                        this.beamcut = 2 // 5
                        this.gapangle -= (Math.PI / 8) / 37
                    }
                }

            } else {
                this.raymake = 37
                this.gapangle = Math.PI / 8
                this.beamdisp = 0
            }

            this.currentangle = this.gapangle / 2
            for (let k = 0; k < this.raymake; k++) {
                this.currentangle += (this.gapangle / Math.ceil(this.raymake / 2))
                const ray = new Circle(this.body.x, this.body.y, 1, "white", ((this.rayrange * (Math.cos(this.globalangle + this.currentangle)))) / this.rayrange * 5.5, ((this.rayrange * (Math.sin(this.globalangle + this.currentangle)))) / this.rayrange * 5.5)
                ray.collided = 0
                ray.lifespan = this.rayrange - 1
                this.ray.push(ray)
            }


            if (Math.random() < .1) {
                this.obstaclesstorage = []


                for (let q = 0; q < this.obstacles.length; q++) {
                    let linker = new Line(this.body.x, this.body.y, this.obstacles[q].x, this.obstacles[q].y, "black", 2)
                    if (linker.hypotenuse() < (this.obstacles[q].width + this.obstacles[q].height) + (this.rayrange * 5.5)) {
                        this.obstaclesstorage.push(this.obstacles[q])
                    }
                }
            }

            for (let f = 3; f < this.rayrange / 2; f++) {
                for (let t = 0; t < this.ray.length; t++) {
                    if (this.ray[t].collided < 1) {
                        this.ray[t].move()
                        for (let q = 0; q < this.obstaclesstorage.length; q++) {

                            if (this.obstaclesstorage[q].isPointInside(this.ray[t])) {
                                
                                if (this.obstaclesstorage[q] !== pomao.body) {
                                this.ray[t].collided = 1
                                }
                                if (this.obstaclesstorage[q] == pomao.body) {
                                    if(pomao.checkPomao(this.ray[t]) == true){
                                        this.ray[t].collided = 1
                                        this.shook = 1
                                        this.body.color = "red"
                                        this.smack = 5
                                        if (this.raymake == 1) {
                                            if (this.body.x > pomao.body.x) {
                                                this.bump = 1
                                            } else {
                                                this.bump = -1
                                            }
                                            if (this.body.radius >= 1) {
                                                if (pomao.disabled != 1) {
                                                    if (pomao.pounding != 10) {
                                                        pomao.body.xmom = -4 * (this.bump)
                                                        pomao.disabled = 1
                                                        pomao.hits--
                                                        //  pomao.body.ymom = -1.8
                                                        this.body.xmom = -pomao.body.xmom * 2.5
    
                                                    }
    
    
                                                    this.beamdisp += (Math.random()) * .02
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (this.body.x > pomao.body.x) {
                this.bump = 1
            } else {
                this.bump = -1
            }
            if (this.body.repelCheck(pomao.body)) {
                if (this.body.radius >= 1) {
                    if (pomao.disabled != 1) {
                        if (pomao.pounding != 10) {
                            pomao.body.xmom = -4 * (this.bump)
                            pomao.disabled = 1
                            pomao.hits -= 2
                            pomao.body.ymom = -1.8
                            this.health -= 10
                            this.rayrange -= 1
                            this.body.xmom = -pomao.body.xmom * 2.5

                        }
                    }
                }
            }
        }

        draw() {
            if (this.health > 0) {
                if (this.shook == 1) {
                    let dist = new Line(this.body.x, this.body.y, pomao.body.x, pomao.body.y, "red", 1)
                    if (dist.hypotenuse() > 340) {
                        this.body.xmom -= (this.body.x - pomao.body.x) / 1700
                        this.body.ymom -= (this.body.y - pomao.body.y) / 1700

                    } else {

                        this.body.xmom *= .9
                        this.body.ymom *= .9
                    }
                    this.body.xmom *= .979
                    this.body.ymom *= .979
                } else {

                    this.body.xmom -= (this.body.x - pomao.body.x) / 20000
                    this.body.ymom -= (this.body.y - pomao.body.y) / 20000
                    this.body.xmom += Math.random() - .5
                    this.body.ymom += Math.random() - .5
                    this.body.xmom *= .98
                    this.body.ymom *= .98
                    this.globalangle += this.dir * .05
                    if (Math.random() < .09) {
                        this.dir *= -1
                    }
                }
                if (this.body.y + this.body.radius > (-10300 - 6550) + 350) {
                    if (this.body.ymom > 0) {
                        this.body.ymom *= -1
                    }
                }

                for (let t = 0; t < pomao.thrown.length; t++) {
                    if (this.body.repelCheck(pomao.thrown[t])) {
                        this.health -= 1.9
                        this.rayrange -= .4
                        let angleRadians = Math.atan2(pomao.body.y - this.body.y, pomao.body.x - this.body.x);
                        this.globalangle = ((angleRadians - (this.gapangle * 1.5)))
                    }
                }
                for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                    if (this.body.repelCheck(shockfriendly.shocksl[t])) {
                        this.health -= .5
                        this.rayrange -= .08
                    }
                    if (this.body.repelCheck(shockfriendly.shocksr[t])) {
                        this.health -= .5
                        this.rayrange -= .08
                    }
                }
                if (this.body.x + this.body.radius > 9100) {
                    if (this.body.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.x + this.body.radius < -2100) {
                    if (this.body.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                this.body.move()
                this.beam()
                //678

                // this.body.draw()

                // if(this.ray.length> 1){
                //     tutorial_canvas_context.lineWidth = 1
                //     if(this.ray.length == 2){
                //         tutorial_canvas_context.lineWidth = 5
                //     }
                //     if(this.ray.length == 3){
                //         tutorial_canvas_context.lineWidth = 3
                //     }
                // }else{
                //     tutorial_canvas_context.lineWidth = 10
                // }


                tutorial_canvas_context.lineWidth = 12 / this.raymake
                tutorial_canvas_context.fillStyle = "red"
                tutorial_canvas_context.strokeStyle = "red"
                tutorial_canvas_context.beginPath()
                tutorial_canvas_context.moveTo(this.body.x, this.body.y)
                for (let y = 0; y < this.ray.length; y++) {
                    tutorial_canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
                    tutorial_canvas_context.lineTo(this.body.x, this.body.y)
                }
                tutorial_canvas_context.stroke()
                tutorial_canvas_context.fill()

                tutorial_canvas_context.closePath();
                this.ray = []

                if (this.body.color == "red") {
                    tutorial_canvas_context.drawImage(eyeimgred, 0, 0, eyeimgred.width, eyeimgred.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
                } else {
                    tutorial_canvas_context.drawImage(eyeimg, 0, 0, eyeimg.width, eyeimg.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)

                }
            } else {
                if (this.bopped == 0) {
                    this.pop()
                }
                this.popdraw()
            }

            this.ray = []
        }
    }

    class Buggle {
        constructor(wall = 0) {
            this.wall1 = wall
            this.counter = 0
            this.hashit = 10
            this.body = new Circle(9280, -1650, 38, "white")
            this.legs = []
            this.tips = []
            this.joints = []
            this.limbs = 8
            this.xforce = 450 * (this.limbs / 10)
            this.yforce = 450 * (this.limbs / 10)
            this.leg = 0
            this.smack = 0
            this.tipsOn = []
            this.legshotclock = 0
            this.dead = 0
            this.arms = []
            this.pops = []
            this.cleared = 0
            this.metashape = []

            for (let t = 0; t < this.limbs; t++) {


                if (t % 3 !== 0) {

                    let rigradius = 20
                    let spring = new ChSpring(this.body)
                    spring.health = 1650  //1150 //1350
                    spring.anchor.radius = rigradius
                    this.joints.push(spring.anchor)
                    this.legs.push(spring)
                    spring.length = .1



                    for (let k = 0; k < 8; k++) {
                        spring = new ChSpring(spring.anchor)
                        spring.anchor.radius = rigradius
                        spring.health = rigradius * 10 //8
                        rigradius -= 2.4
                        if (k % 2 == 0) {
                            spring.anchor.color = "red"
                        } else {
                            spring.anchor.color = "purple"
                        }
                        this.legs.push(spring)
                        this.joints.push(spring.anchor)
                    }
                    this.tips.push(spring.anchor)
                } else {

                    let rigradius = 20
                    let spring = new ChSpring(this.body)
                    spring.health = 1650 //1150  //1350
                    spring.anchor.radius = rigradius
                    this.joints.push(spring.anchor)
                    this.legs.push(spring)
                    spring.length = .1



                    for (let k = 0; k < 8; k++) {
                        spring = new ChSpring(spring.anchor)
                        spring.anchor.radius = rigradius
                        if (k % 2 == 0) {
                            spring.anchor.color = "red"
                        } else {
                            spring.anchor.color = "#090909"
                        }
                        spring.health = rigradius * 10 // 8
                        rigradius -= 2.4
                        this.legs.push(spring)
                        this.joints.push(spring.anchor)
                    }
                    this.arms.push(spring.anchor)
                }
            }
            for (let t = 0; t < this.tips.length; t++) {
                this.tips[t].radius = 24
                this.tips[t].color = "green"
            }
            for (let t = 0; t < this.arms.length; t++) {
                this.arms[t].radius = 18
                this.arms[t].color = "black"
            }
            for (let t = 0; t < this.joints.length; t++) {
                if (this.joints[t].radius <= 13) {
                    this.joints[t].radius = 13

                }
            }

        }

        castBetween(from, to, granularity = 10, radius = 1, target) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
            let limit = new LineOP(from, to).hypotenuse() / (to.radius * 2)
            // console.log(from, to, target)
            radius = to.radius
            let shape_array = []
            for (let t = 0; t < limit; t++) {
                let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "gray")
                circ.target = target
                shape_array.push(circ)
            }
            this.metashape.push((new Shape(shape_array)))
            return true;
        }
        pop() {
            this.bopped = 1
            let rotx = 0
            let roty = 0

            for (let g = 0; g < 17; g++) {
                let color = "white"
                const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 17
                roty += 2 * Math.PI / 17
            }


            if (this.cleared == 0) {

                this.cleared = 1
                walls.splice(walls.indexOf(this.wall1), 1)
                floors.splice(floors.indexOf(this.wall1), 1)
                roofs.splice(roofs.indexOf(this.wall1), 1)
                ungrapplable.splice(ungrapplable.indexOf(this.wall1), 1)
                beamrocks.splice(beamrocks.indexOf(this.wall1), 1)
                floormpf.splice(floormpf.indexOf(this.wall1), 1)
            }

        }
        popseg(seg) {
            // this.bopped = 1
            let rotx = 0
            let roty = 0

            for (let g = 0; g < 13; g++) {
                let color = "red"
                const dot1 = new Circlec(seg.x, seg.y, seg.radius, seg.color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 13
                roty += 2 * Math.PI / 13
            }


            // if(this.cleared == 0){

            //     this.cleared = 1
            //     walls.splice(walls.indexOf(this.wall1),1)
            //     floors.splice(floors.indexOf(this.wall1),1)
            //     roofs.splice(roofs.indexOf(this.wall1),1)
            //     ungrapplable.splice(ungrapplable.indexOf(this.wall1),1)
            //     beamrocks.splice(beamrocks.indexOf(this.wall1),1)
            //     floormpf.splice(floormpf.indexOf(this.wall1),1)
            // }

        }
        micropopseg(seg) {

            if (Math.random() < .3) {
                // this.bopped = 1
                let start = Math.random() * 6.28
                let rotx = start
                let roty = start

                // for(let g = 0; g < 5; g++){
                let color = "yellow"
                const dot1 = new Circlec(seg.x, seg.y, seg.radius / 3, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                // rotx += 2*Math.PI/5
                // roty += 2*Math.PI/5
                // }


                // if(this.cleared == 0){

                //     this.cleared = 1
                //     walls.splice(walls.indexOf(this.wall1),1)
                //     floors.splice(floors.indexOf(this.wall1),1)
                //     roofs.splice(roofs.indexOf(this.wall1),1)
                //     ungrapplable.splice(ungrapplable.indexOf(this.wall1),1)
                //     beamrocks.splice(beamrocks.indexOf(this.wall1),1)
                //     floormpf.splice(floormpf.indexOf(this.wall1),1)
                // }

            }
        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }
        walk() {

            this.hashit--

            for (let g = 0; g < orbs.length; g++) {
                orbs[g].companion = []

            }

            let minimum = 100000
            let minreset = 0

            let mark = {}
            if (Math.random() < .001) {

                for (let t = 0; t < orbs.length; t++) {
                    orbs[t].body.mark = []
                }

            }
            if (Math.random() < .001) {

            }
            this.legshotclock++
            for (let t = 0; t < orbs.length; t++) {

                let link
                if (this.legshotclock < 255) {  //55 //255
                    link = new Line(this.body.x, this.body.y, orbs[t].body.x, orbs[t].body.y, "red", 2)// let link = new Line(this.tips[this.leg].x, this.tips[this.leg].y, orbs[t].body.x, orbs[t].body.y, "red", 2)
                } else {
                    if (minreset == 0) {
                        minreset = 1
                        minimum = 1000
                    }
                    link = new Line(this.tips[this.leg].x, this.tips[this.leg].y, orbs[t].body.x, orbs[t].body.y, "red", 2)
                }
                this.tipsOn = []

                for (let g = 0; g < this.tips.length; g++) {
                    for (let h = 0; h < orbs.length; h++) {
                        if (g != this.leg) {
                            let linker = new Line(this.tips[this.leg].x, this.tips[this.leg].y, orbs[h].body.x, orbs[h].body.y, "red", 2)
                            if (linker.hypotenuse() < 500) {
                                // linker.draw()
                                if (orbs[h].body.repelCheck(this.tips[g])) {
                                    this.tipsOn.push(orbs[h].body)
                                    if (!orbs[h].companion.includes(this.tips[g])) {

                                        orbs[h].companion.push(this.tips[g])
                                    }
                                }
                            }
                        }
                    }
                }
                for (let t = 0; t < orbs.length; t++) {
                    orbs[t].body.gravity = .0
                }
                for (let t = 0; t < this.tipsOn.length; t++) {
                    this.tipsOn[t].gravity = .1
                }

                if (!this.tipsOn.includes(orbs[t].body)) {
                    if (!orbs[t].body.mark.includes(this.leg)) {
                        if (link.hypotenuse() < minimum) {
                            dummypin = orbs[t].body
                            minimum = link.hypotenuse()

                            // mark = orbs[t].body
                        }
                    }
                }
            }

            this.tipsOn.push(dummypin)
            // //console.log(this.tipsOn)
            let link = new Line(this.tips[this.leg].x, this.tips[this.leg].y, dummypin.x, dummypin.y, "red", 2)
            // link.draw()
            this.tips[this.leg].symom -= (this.tips[this.leg].y - dummypin.y) / 150  //350  //250
            this.tips[this.leg].sxmom -= (this.tips[this.leg].x - dummypin.x) / 150

            // for(let t = 0;(Math.abs(this.tips[this.leg].symom) + Math.abs(this.tips[this.leg].sxmom)) < 15; t++){
            //     this.tips[this.leg].symom *=1.101
            //     this.tips[this.leg].sxmom *=1.101
            //     if(t>1000){
            //         break
            //     }
            // }

            for (let t = 0; (Math.abs(this.tips[this.leg].sxmom) + Math.abs(this.tips[this.leg].symom)) < ((Math.abs(this.tips[this.leg].xmom) + Math.abs(this.tips[this.leg].ymom)) - 3.55); t++) {  //.55  //+3.55
                this.tips[this.leg].symom *= 1.01
                this.tips[this.leg].sxmom *= 1.01
                if (t > 1000) {
                    break
                }
            }
            // this.tips[this.leg].xmom = 0
            // this.tips[this.leg].ymom = 0
            this.tips[this.leg].drive()
            this.tips[this.leg].chmove()

            if (this.tips[this.leg].repelCheck(dummypin)) {
                this.smack = 1
                dummypin.mark.push(this.leg)
            } else if (dummypin.repelCheck(this.tips[this.leg])) {
                this.smack = 1
                dummypin.mark.push(this.leg)
            }

            for (let t = 0; t < this.tips.length; t++) {
                if (this.leg !== t) {
                    this.tips[t].xmom = 0
                    this.tips[t].ymom = 0
                    this.tips[t].chmove()
                }
            }

            // for(let  t= 0; t<this.tips.length;t++){
            //     for(let  k= 0; k<this.tips.length;k++){
            //         if(t!=k){
            //             if(this.tips[t].repelCheck(this.tips[k])){
            //                 let distance = ((new Line(this.tips[k].x, this.tips[k].y, this.tips[t].x, this.tips[t].y, 1, "red")).hypotenuse())-(2*this.tips[k].radius+this.tips[t].radius)
            //                 let angleRadians = Math.atan2(this.tips[k].y - this.tips[t].y, this.tips[k].x - this.tips[t].x);
            //                 if(t == this.leg){

            //                     // this.tips[t].xrepel += (Math.cos(angleRadians)*distance)/10
            //                     // this.tips[t].yrepel += (Math.sin(angleRadians)*distance)/10

            //                 }
            //                 // this.tips[k].xrepel += -(Math.cos(angleRadians)*distance)/10
            //                 // this.tips[k].yrepel += -(Math.sin(angleRadians)*distance)/10
            //             }
            //         }
            //     }
            // } //check later
            for (let t = 0; t < this.tips.length; t++) {
                this.tips[t].x += this.tips[t].xrepel
                this.tips[t].y += this.tips[t].yrepel
                this.tips[t].xrepel = 0
                this.tips[t].yrepel = 0
            }
            // for(let t = 0;t<this.tips.length;t++){
            //     if(this.tips[t].sxmom == 0 && this.tips[t].symom == 0){
            //         this.tips.splice(t,1)
            //     }
            // }
        }
        draw() {

            if (this.dead == 0) {
                // this.counter++
                // if(this.counter%12 == 0){

                // }
                if (this.smack == 1) {
                    this.leg += 1
                    this.leg %= this.tips.length
                    this.smack = 0
                    // //console.log(this.legshotclock)
                    this.legshotclock = 0
                }
                this.control()
                this.walk()
                // this.body.draw()
                for (let t = 0; t < this.legs.length; t++) {
                    this.legs[t].balance()
                }
                for (let t = 0; t < this.legs.length; t++) {
                    if (!this.tips.includes(this.joints[t])) {
                        this.legs[t].move()
                    }
                }
                for (let t = 0; t < this.legs.length; t++) {
                    this.legs[t].xdraw()
                }
                for (let t = 0; t < this.tips.length; t++) {
                    this.tips[t].chdraw()
                }

                for (let t = 0; t < this.arms.length; t++) {
                    this.arms[t].chdraw()
                }



                for (let t = 0; t < this.joints.length; t++) {
                    for (let k = 0; k < this.joints.length; k++) {
                        if (t != k) {
                            let guide = new Line(this.joints[t].x, this.joints[t].y, this.joints[k].x, this.joints[k].y, "red", .1)
                            // guide.draw()
                            if (guide.hypotenuse() == 0) {

                            } else {

                                if (this.legs[0].health > 0) {
                                    if (!this.arms.includes(this.joints[k]) && !this.arms.includes(this.joints[t])) {
                                        //     if(!this.tips.includes(this.joints[k]) && !this.tips.includes(this.joints[t]) ){
                                        this.joints[k].xmom -= ((this.joints[t].x - this.joints[k].x) / guide.hypotenuse()) / this.xforce
                                        this.joints[k].ymom -= ((this.joints[t].y - this.joints[k].y) / guide.hypotenuse()) / this.yforce
                                        this.joints[t].xmom += ((this.joints[t].x - this.joints[k].x) / guide.hypotenuse()) / this.xforce
                                        this.joints[t].ymom += ((this.joints[t].y - this.joints[k].y) / guide.hypotenuse()) / this.yforce
                                        //     }

                                    }
                                }
                            }
                        }
                    }
                    for (let t = 0; t < this.tips.length; t++) {
                        if (this.leg !== t) {
                            this.tips[t].xmom = 0
                            this.tips[t].ymom = 0
                        }
                    }
                    if (!this.tips.includes(this.joints[t])) {
                        this.joints[t].chmove()

                    }
                }
                this.metashape = []
                for (let f = 0; f < this.legs.length; f++) {
                    this.castBetween(this.legs[f].anchor, this.legs[f].body, 10, 1, this.legs[f])
                }
                for (let r = 0; r < pomao.thrown.length; r++) {
                    for (let z = 0; z < this.metashape.length; z++) {
                        if (this.metashape[z].isPointInsideTargeted(pomao.thrown[r])) {
                            this.metashape[z].isPointInsideTargeted(pomao.thrown[r]).health -= .1
                        }
                    }
                }
                this.metashape = []

                for (let f = 0; f < this.legs.length; f++) {
                    for (let r = 0; r < pomao.thrown.length; r++) {
                        if (this.legs[f].anchor.repelCheck(pomao.thrown[r])) {
                            this.legs[f].health -= .75
                            this.legs[f].anchor.radius *= 1.015
                            this.micropopseg(this.legs[f].anchor)
                            if (this.legs[f].anchor.radius >= 25) {
                                this.legs[f].anchor.radius = 25
                            }
                        }
                        if (this.legs[f].body.repelCheck(pomao.thrown[r])) {
                            this.legs[f].health -= 3
                        }

                        if (this.legs[f].health <= 0) {
                            for (let n = 0; n < 20; n++) {

                                if (!this.tips.includes(this.legs[f].anchor) && !this.arms.includes(this.legs[f].anchor)) {
                                    this.popseg(this.legs[f].anchor)
                                    this.legs.splice(f, 1)
                                } else {

                                    if (f != 0) {
                                        if (this.tips.includes(this.legs[f].anchor)) {
                                            if (this.legs[f - 1].anchor != this.body) {
                                                this.legs[f - 1].anchor.color = "green"
                                                this.legs[f - 1].anchor.radius *= 1.3
                                                // this.tips.push(this.legs[f-1].anchor)
                                                // //console.log( this.tips[this.tips.indexOf(this.legs[f].anchor)] )
                                                this.tips[this.tips.indexOf(this.legs[f].anchor)] = this.legs[f - 1].anchor

                                            }
                                            this.popseg(this.legs[f].anchor)
                                            //   this.tips.splice(this.tips.indexOf(this.legs[f].anchor))
                                            this.legs.splice(f, 1)
                                            //   //console.log(this)
                                            break
                                        } else if (this.arms.includes(this.legs[f].anchor)) {
                                            if (this.legs[f - 1].anchor != this.body) {
                                                this.legs[f - 1].anchor.color = "black"
                                                this.legs[f - 1].anchor.radius *= 1.3

                                                this.arms[this.arms.indexOf(this.legs[f].anchor)] = this.legs[f - 1].anchor
                                                // this.arms.push(this.legs[f-1].anchor)
                                            }
                                            this.popseg(this.legs[f].anchor)
                                            //   this.arms.splice(this.arms.indexOf(this.legs[f].anchor))
                                            this.legs.splice(f, 1)
                                            //   //console.log(this)
                                            break
                                        }
                                    }


                                }
                            }
                            if (this.legs.length < 10) {
                                this.dead = 1
                                this.pop()
                            }
                            if (f == 0) {
                                this.dead = 1
                                this.pop()
                            } else {
                                this.legs[0].health -= 25
                            }
                            break
                        }
                        if (f > this.legs.length) {
                            break
                        }
                    }
                    if (f > this.legs.length) {
                        break
                    }
                }



                for (let f = 0; f < this.legs.length; f++) {
                    for (let g = 0; g < shockfriendly.shocksl.length; g++) {
                        if (this.legs[f].anchor.repelCheck(shockfriendly.shocksl[g])) {
                            this.legs[f].health -= .4  //05
                            this.legs[f].anchor.radius *= 1.015  //9985
                            this.micropopseg(this.legs[f].anchor)
                            if (this.legs[f].anchor.radius >= 25) {
                                this.legs[f].anchor.radius = 25
                            }
                        }

                        if (this.legs[f].anchor.repelCheck(shockfriendly.shocksr[g])) {
                            this.legs[f].health -= .4
                            this.legs[f].anchor.radius *= 1.015
                            this.micropopseg(this.legs[f].anchor)
                            if (this.legs[f].anchor.radius >= 25) {
                                this.legs[f].anchor.radius = 25
                            }
                        }

                    }
                }

                for (let f = 0; f < this.legs.length; f++) {
                    if (this.legs[f].anchor.repelCheck(pomao.body)) {
                        if (this.legs[f].anchor.x > pomao.body.x) {
                            this.bump = 1
                        } else {
                            this.bump = -1
                        }
                        if (this.legs[f].anchor.radius >= 9) {
                            if (pomao.disabled != 1) {
                                if (pomao.pounding != 10) {
                                    pomao.body.xmom = -3 * (this.bump)
                                    pomao.disabled = 1
                                    if (this.hashit <= 0) {
                                        pomao.hits -= 3
                                        this.hashit = 4
                                    }
                                    pomao.body.ymom = -1.8
                                    this.legs[f].anchor.xmom = pomao.body.xmom * -5
                                }
                            } else {
                                if (this.bump * pomao.body.xmom > 0) {
                                    pomao.body.xmom = -.8 * (this.bump)
                                    pomao.body.ymom = -1.8
                                    this.legs[f].anchor.xmom = pomao.body.xmom * -5
                                }
                            }
                        }
                    }
                    if (this.legs[f].body.repelCheck(pomao.bodytight)) {
                        if (this.legs[f].body.x > pomao.body.x) {
                            this.bump = 1
                        } else {
                            this.bump = -1
                        }
                        if (this.legs[f].body.radius >= 9) {
                            if (pomao.disabled != 1) {
                                if (pomao.pounding != 10) {
                                    pomao.body.xmom = -3 * (this.bump)
                                    pomao.disabled = 1
                                    if (this.hashit <= 0) {
                                        pomao.hits -= 3
                                        this.hashit = 4
                                    }
                                    pomao.body.ymom = -1.8
                                    this.legs[f].body.xmom = pomao.body.xmom * -5
                                }
                            } else {
                                if (this.bump * pomao.body.xmom > 0) {
                                    pomao.body.xmom = -.8 * (this.bump)
                                    pomao.body.ymom = -1.8
                                    this.legs[f].body.xmom = pomao.body.xmom * -5
                                }
                            }
                        }
                    }
                }


                this.popdraw()
            } else {
                spidermusic.pause()
                this.popdraw()
            }
        }
        control() {

            let linker = new Line(pomao.body.x, pomao.body.y, this.body.x, this.body.y, "red", 10)
            if (linker.hypotenuse() < 1500) {
                if (pomao.body.x > 7925) {
                    spidermusic.play()
                    if (this.joints.length > 10) {
                        this.body.xmom -= (this.body.x - pomao.body.x) / 45
                        this.body.ymom -= (this.body.y - pomao.body.y) / 45
                    }
                    for (let t = 0; t < this.arms.length; t++) {
                        if (this.arms[t] != this.body) {
                            this.arms[t].xmom -= (this.body.x - pomao.body.x) / 600  //700  //959
                            this.arms[t].ymom -= (this.body.y - pomao.body.y) / 600
                            this.arms[t].xmom += 11 * (Math.random() - .5)
                            this.arms[t].ymom += 11 * (Math.random() - .5)
                        }
                    }
                }
            }
        }
    }

    class ChSpring {
        constructor(body = 0) {
            if (body == 0) {
                this.body = new Circle(350, 350, 8, "red", 10, 10)
                this.anchor = new Circle(this.body.x, this.body.y + 5, 3, "red")
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", 5)
                this.length = .01
            } else {
                this.body = body
                this.length = .1
                this.anchor = new Circle(this.body.x - ((Math.random() - .5) * 10), this.body.y - ((Math.random() - .5) * 10), 8, "red")
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", 5)
            }
            this.health = 160

        }
        balance() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", 5)

            if (this.beam.hypotenuse() != 0) {
                if (this.beam.hypotenuse() < this.length) {
                    if (this.body != chafer.body) {
                        this.body.xmom += (this.body.x - this.anchor.x) / (this.length) / 300
                        this.body.ymom += (this.body.y - this.anchor.y) / (this.length) / 300
                        this.anchor.xmom -= (this.body.x - this.anchor.x) / (this.length) / 300
                        this.anchor.ymom -= (this.body.y - this.anchor.y) / (this.length) / 300
                    } else {

                        this.body.xmom += (this.body.x - this.anchor.x) / (this.length) / 300
                        this.body.ymom += (this.body.y - this.anchor.y) / (this.length) / 300
                        this.anchor.xmom -= (this.body.x - this.anchor.x) / (this.length) / 300
                        this.anchor.ymom -= (this.body.y - this.anchor.y) / (this.length) / 300
                    }
                } else if (this.beam.hypotenuse() > this.length) {

                    if (this.body != chafer.body) {
                        this.body.xmom -= (this.body.x - this.anchor.x) / (this.length) / 300
                        this.body.ymom -= (this.body.y - this.anchor.y) / (this.length) / 300
                        this.anchor.xmom += (this.body.x - this.anchor.x) / (this.length) / 300
                        this.anchor.ymom += (this.body.y - this.anchor.y) / (this.length) / 300
                    } else {

                        this.body.xmom -= (this.body.x - this.anchor.x) / (this.length) / 300
                        this.body.ymom -= (this.body.y - this.anchor.y) / (this.length) / 300
                        this.anchor.xmom += (this.body.x - this.anchor.x) / (this.length) / 300
                        this.anchor.ymom += (this.body.y - this.anchor.y) / (this.length) / 300
                    }
                }

            }

            let xmomentumaverage
            let ymomentumaverage
            xmomentumaverage = ((this.body.xmom * 1.1) + this.anchor.xmom) / 2.1
            ymomentumaverage = ((this.body.ymom * 1.1) + this.anchor.ymom) / 2.1

            this.body.xmom = ((this.body.xmom) + xmomentumaverage) / 2
            this.body.ymom = ((this.body.ymom) + ymomentumaverage) / 2
            this.anchor.xmom = ((this.anchor.xmom) + xmomentumaverage) / 2
            this.anchor.ymom = ((this.anchor.ymom) + ymomentumaverage) / 2
        }
        draw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.anchor.radius)
            this.beam.draw()
            this.body.chdraw()
            this.anchor.chdraw()
        }
        xdraw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.anchor.radius)
            this.beam.draw()
            this.body.chdraw()
            // this.anchor.chdraw()
        }
        move() {
            // if(this.body != chafer.body){
            this.body.chmove()
            // }
            this.anchor.chmove()
        }

    }


    class Orb {
        constructor() {
            this.body = new Circle(8000 + (Math.random() * tutorial_canvas.width * 2.5), -(tutorial_canvas.height * 2.8) + (Math.random() * tutorial_canvas.height * 2.6), 40, "orange")
            this.origin = new Circle(this.body.x, this.body.y, 16, "transparent")
            this.body.gravity = .05
            this.companion = []
            // this.companion.x = -12345
            this.fly = false
            this.left = Math.floor(Math.random() * 2)
            ramps.push(this.body)
        }
        draw() {
            if (!ramps.includes(this.body)) {
                ramps.push(this.body)
            }
            this.body.xmom -= (this.body.x - this.origin.x) / 100
            this.body.ymom -= (this.body.y - this.origin.y) / 100
            this.body.ymom += this.body.gravity

            for (let t = 0; t < this.companion.length; t++) {
                // if(Math.random()<.001){

                // //console.log(this.companion[t])
                this.companion[t].y += this.body.ymom
                this.companion[t].x += this.body.xmom
                //     //console.log(this.companion[t])
                // }
            }
            // 


            this.body.chmove()

            if (this.fly == true) {
                this.body.color = "orange"
                this.body.radius = 40
            } else {

                this.body.color = "orange"
                this.body.radius = 40
            }

            if (this.left == 0) {

                tutorial_canvas_context.drawImage(orbsprite, 0, 0, orbsprite.width, orbsprite.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2.25)
            } else {

                tutorial_canvas_context.drawImage(orbspritel, 0, 0, orbsprite.width, orbsprite.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2.25)
            }
            // tutorial_canvas_context.drawImage(orbsprite, 0,0,orbsprite.width,orbsprite.height, this  =)
            // this.body.draw()
        }
    }
    let dummypin = new Circle(100, 100, 10, "blue")


    let orbs = []


    // for(let k = 0;k<6000;k++){
    //     let wet = 0

    //     for(let k=0;k<fruits.length;k++){
    //         if(fruits[k].body.repelCheck(fruit.body)){
    //             wet = 1
    //         }
    //     }
    //     for(let k=0;k<floors.length;k++){
    //         if(squarecircleedges(floors[k], fruit.body)){
    //             wet = 1
    //         }
    //         for(let k=0;k<ramps.length;k++){
    //             if(squarecircleedges(ramps[k], fruit.body)){
    //                 wet = 1
    //             }
    //     }
    //     if(wet == 0){
    //         fruits.push(fruit)
    //     }
    // }


    class Dangler {
        constructor(x, y) {
            // this.beingEaten = 0
            this.physflick = Math.floor(Math.random() * 100)
            this.licked = 0
            this.dangler = 1
            this.layer = 0
            this.body = new Circle(x, y, 10, "yellow", (Math.random() - .5) * 5)
            this.segments = []
            this.length = 9 + Math.floor(Math.random() * 8)
            this.joints = []
            this.dis = 30
            this.guide = new Circle(this.body.x + Math.sin(this.angle), this.body.y + Math.cos(this.angle), 5, "orange")
            this.box = new Shape()
            this.marked = 0
            this.yeet = 0
            this.dip = 0
            this.pops = []
            this.puncher = Math.floor(Math.random() * 100) + 100
            this.punchcap = Math.floor(Math.random() * 100) + 130
            this.rigradius = this.body.radius + 1
            let spring = new Spring(this.body)
            spring.anchor.radius = this.rigradius
            spring.length = 10
            spring.anchor.color = "#FFFF0044"
            spring.body.color = "#FFFF0044"

            spring.worm = this

            this.joints.push(spring.anchor)
            this.segments.push(spring)

            for (let k = 0; k < this.length; k++) {
                spring = new Spring(spring.anchor)
                spring.anchor.radius = this.rigradius
                spring.length = 10.5
                this.rigradius -= this.body.radius / (this.length + 3)
                spring.worm = this
                spring.anchor.color = "#FFFF0044"
                this.segments.push(spring)
                if (k > 0) {
                    if (k < this.length - 1) {
                        this.joints.push(spring.anchor)
                    }
                }
            }

            this.box = new Shape(this.joints)
            this.angle = Math.atan2(pomao.body.y - this.joints[0].y, pomao.body.x - this.joints[0].x);
            // console.log(this)

            this.joints[this.joints.length - 2].radius = 23  //20
            this.joints[this.joints.length - 2].color = "orange"

            this.bopped = 0
        }

        pop() {
            this.bopped = 1
            // console.log("hit")
            let rotx = 0
            let roty = 0

            for (let g = 0; g < 10; g++) {
                let color = this.joints[this.joints.length - 2].color
                const dot1 = new Circlec(this.joints[this.joints.length - 2].x, this.joints[this.joints.length - 2].y, this.joints[this.joints.length - 2].radius * .33, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 10
                roty += 2 * Math.PI / 10
            }
            for (let t = 0; t < this.joints.length - 2; t++) {

                for (let g = 0; g < 5; g++) {
                    let color = this.joints[t].color
                    const dot1 = new Circlec(this.joints[t].x, this.joints[t].y, this.joints[t].radius, color, Math.cos(rotx) * 2, Math.sin(roty) * 2)
                    this.pops.push(dot1)
                    rotx += 2 * Math.PI / 5
                    roty += 2 * Math.PI / 5
                }
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }
        eggrepel() {
            for (let t = 0; t < pomao.thrown.length; t++) {
                pomao.thrown[t].radius *= 1.5
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(pomao.thrown[t])) {
                        if (this.bopped == 0) {
                            this.pop()
                        }
                    }
                }
                pomao.thrown[t].radius *= .666666666666666
            }
            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(shockfriendly.shocksl[t])) {
                        this.joints[k].xmom += shockfriendly.shocksl[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksl[t].ymom * .2
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksl[t].ymom * .2
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksl[t].ymom * .2
                        }
                    }
                    if (this.joints[k].repelCheck(shockfriendly.shocksr[t])) {
                        this.joints[k].xmom += shockfriendly.shocksr[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksr[t].ymom * .2
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksr[t].ymom * .2
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksr[t].ymom * .2
                        }
                    }
                }
            }
        }
        draw() {
            this.physflick++
            if (this.bopped == 0) {
                if (this.physflick % 2 == 0) {

                    for (let t = 0; t < this.segments.length; t++) {
                        this.segments[t].dmove()
                    }



                    for (let t = 0; t < this.segments.length; t++) {
                        this.segments[t].wbalance()
                    }


                    for (let t = 0; t < this.segments.length; t++) {
                        if (t > 0) {
                            if (t < this.segments.length - 1) {
                                this.segments[t].ddraw()
                                this.segments[t].body.ddraw()
                            }
                        }
                    }
                } else {



                    this.box = new Shape(this.joints)
                    this.yeet = 0

                    for (let t = 0; t < this.joints.length; t++) {
                        for (let f = 0; f < floors.length; f++) {
                            if (squarecirclefeet(floors[f], (this.joints[t]))) {
                                // if(this.box.isInsideOf(floors[f])){

                                this.yeet = 1
                            }
                        }
                        for (let f = 0; f < ramps.length; f++) {
                            if (ramps[f].isPointInside(this.joints[t])) {
                                // if(this.box.isInsideOf(floors[f])){

                                this.yeet = 1
                            }
                        }
                    }

                    for (let t = 0; t < this.segments.length; t++) {
                        if (this.yeet == 0) {
                            this.segments[t].anchor.xmom *= .995
                            this.segments[t].anchor.ymom *= .998
                            this.segments[t].body.xmom *= .995
                            this.segments[t].body.ymom *= .998
                        } else {

                            this.segments[t].anchor.xmom *= .995
                            this.segments[t].anchor.ymom *= .995
                            this.segments[t].body.xmom *= .995
                            this.segments[t].body.ymom *= .995 //99
                        }
                        // if(this.yeet == 1){

                        this.segments[t].wbalance()
                        this.segments[t].wbalance()
                        this.segments[t].wbalance()
                        // this.segments[t].wbalance()
                        // }

                        if (this.yeet == 0) {
                            this.joints[0].ymom += .1
                            this.segments[t].anchor.ymom += .02 * (this.length - t)
                            this.segments[t].body.ymom += .02 * (this.length - t)
                        }


                    }


                    if (this.yeet == 0 || this.dip > 0) {
                        //   this.joints[0].ymom+=.13
                        //   for(let t = 1;t<this.joints.length;t++){
                        //       this.joints[t].ymom+=.03
                        //   }
                    }

                    if (this.joints[this.joints.length - 2].marked == 0) {
                        this.joints[0].xmom = 0
                        this.joints[0].ymom = 0
                    } else {
                        this.joints[0].xmom *= .3
                        this.joints[0].ymom *= .3
                    }
                    for (let t = 0; t < this.segments.length; t++) {
                        this.segments[t].dmove()
                    }

                    if (this.joints[this.joints.length - 2].marked == 0) {
                        this.joints[0].xmom = 0
                        this.joints[0].ymom = 0
                    } else {
                        this.joints[0].xmom *= .3
                        this.joints[0].ymom *= .3
                    }
                    // // let angleRadians = Math.atan2(this.joints[0].y-pomao.body.y ,  this.joints[0].x-pomao.body.x );
                    // this.angleRadians = Math.atan2(pomao.body.y-this.joints[0].y ,  pomao.body.x-this.joints[0].x );

                    // if(this.angleRadians - this.angle  > .17){
                    //     this.angle +=.07
                    // }else  if(this.angleRadians - this.angle  < -.17){
                    //     this.angle -=.07
                    // }else{
                    //     this.angle = this.angleRadians
                    // }


                    // this.angleRadians = Math.atan2(pomao.body.y-this.joints[0].y ,  pomao.body.x-this.joints[0].x ); //look at this seriously, why did I let this last this long? been working on this dangler for like... wait let me check, 8 hours and 20 minutes and I just figured this ou

                    this.angleRadians = Math.atan2(pomao.body.y - this.joints[this.joints.length - 2].y, pomao.body.x - this.joints[this.joints.length - 2].x);
                    this.angle = (this.angleRadians + this.angle * 2) / 3
                    this.puncher++
                    this.yeet = 0
                    this.angle += (Math.random() - .5) * .2  // *1
                    // this.angle = (this.angleRadians)
                    this.guide = new Circle(this.joints[this.joints.length - 2].x + (Math.cos(this.angle) * this.dis), this.joints[this.joints.length - 2].y + (Math.sin(this.angle) * this.dis), 5, "black")
                    // this.guide.draw()
                    if (this.yeet == 0) {
                        // console.log(this.yeet)
                        if (this.dip <= 0) {
                            // if(Math.random()<.005){
                            if (this.puncher % this.punchcap < 5) {
                                if (this.joints[this.joints.length - 2].marked == 0) {
                                    this.joints[this.joints.length - 2].xmom -= (this.joints[this.joints.length - 2].x - this.guide.x) / (.7 + ((Math.random() - .5) * .4))
                                    this.joints[this.joints.length - 2].ymom -= (this.joints[this.joints.length - 2].y - this.guide.y) / (.7 + ((Math.random() - .5) * .4))
                                    this.joints[this.joints.length - 2].xmom -= (Math.random() - .5) * .1
                                    this.joints[this.joints.length - 2].ymom -= (Math.random() - .5) * .1
                                }


                                if (this.joints[this.joints.length - 2].marked == 0) {
                                    this.joints[0].xmom = 0
                                    this.joints[0].ymom = 0
                                }
                                for (let t = 1; t < this.joints.length; t++) {
                                    if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                        for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 5; k++) { //3
                                            this.joints[t].xmom *= 1.1
                                            this.joints[t].ymom *= 1.1
                                            if (k > 500) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else if (Math.random() < .0005) {
                                if (this.joints[this.joints.length - 2].marked == 0) {
                                    this.joints[this.joints.length - 2].xmom -= (this.joints[this.joints.length - 2].x - this.guide.x) / (.5 + ((Math.random() - .5) * .1))
                                    this.joints[this.joints.length - 2].ymom -= (this.joints[this.joints.length - 2].y - this.guide.y) / (.5 + ((Math.random() - .5) * .1))
                                    this.joints[this.joints.length - 2].xmom -= (Math.random() - .5) * .1
                                    this.joints[this.joints.length - 2].ymom -= (Math.random() - .5) * .1
                                }


                                if (this.joints[this.joints.length - 2].marked == 0) {
                                    this.joints[0].xmom = 0
                                    this.joints[0].ymom = 0
                                }
                                for (let t = 1; t < this.joints.length; t++) {
                                    if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                        for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 5; k++) { //3
                                            this.joints[t].xmom *= 1.1
                                            this.joints[t].ymom *= 1.1
                                            if (k > 500) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else {
                                this.joints[0].xmom = 0
                                this.joints[0].ymom = 0

                                this.joints[this.joints.length - 2].xmom = 0
                                this.joints[this.joints.length - 2].ymom = 0
                            }

                            for (let t = 0; t < this.joints.length; t++) {
                                if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                    for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 1.3; k++) { //3
                                        this.joints[t].xmom *= 1.1
                                        this.joints[t].ymom *= 1.1
                                        if (k > 500) {
                                            break
                                        }
                                    }
                                }
                            }
                            for (let t = 0; t < 1; t++) {
                                if (t == 0) {
                                    if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                        for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 8; k++) { //3
                                            this.joints[t].xmom *= 1.1
                                            this.joints[t].ymom *= 1.1
                                            if (k > 500) {
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            this.dip--
                            for (let t = 0; t < this.segments.length; t++) {
                                this.segments[t].body.ymom *= .95
                                this.segments[t].body.xmom *= .95
                                this.segments[t].anchor.ymom *= .95
                                this.segments[t].anchor.xmom *= .95

                                //.5
                            }
                        }
                        // this.body.xmom *=.98
                        // this.body.ymom *=.98



                        for (let t = 0; (Math.abs(this.body.xmom) + Math.abs(this.body.ymom)) > 15; t++) {
                            this.body.xmom *= .98
                            this.body.ymom *= .98
                        }
                    } else { this.dip = 35 }  //15
                    // this.guide.radius = (this.joints[0].radius/3)+1
                    // this.guide.draw()
                    this.eggrepel()
                    for (let t = 0; t < this.segments.length; t++) {
                        if (t > 0) {
                            if (t < this.segments.length - 1) {
                                this.segments[t].ddraw()
                                this.segments[t].body.ddraw()
                            }
                        }
                    }

                    // for(let t = 0;t<this.joints.length;t++){
                    //     this.joints[t].wdraw()
                    // }

                }
            } else {

                this.popdraw()

                if (this.pops.length == 0) {
                    this.marked = 1
                }

            }

        }
    }


    class Waggler {
        constructor(x, y) {
            // this.beingEaten = 0

            this.physflick = Math.floor(Math.random() * 100)
            this.licked = 0
            this.dangler = 1
            this.layer = 0
            this.body = new Circle(x, y, 10, "yellow")
            this.segments = []
            this.length = 16
            this.joints = []
            this.dis = 30
            this.guide = new Circle(this.body.x + Math.sin(this.angle), this.body.y + Math.cos(this.angle), 5, "orange")
            this.box = new Shape()
            this.marked = 0
            this.yeet = 0
            this.dip = 0
            this.pops = []
            this.puncher = Math.floor(Math.random() * 100) + 100
            this.punchcap = Math.floor(Math.random() * 100) + 130
            this.rigradius = this.body.radius + 1
            let spring = new Spring(this.body)
            spring.anchor.radius = this.rigradius
            spring.length = 10
            spring.anchor.color = "#00FFFF44"
            spring.body.color = "#00FFFF44"

            spring.worm = this

            this.joints.push(spring.anchor)
            this.segments.push(spring)

            for (let k = 0; k < this.length; k++) {
                spring = new Spring(spring.anchor)
                spring.anchor.radius = this.rigradius
                spring.length = 10.5
                this.rigradius -= this.body.radius / (this.length + 3)
                spring.worm = this
                spring.anchor.color = "#00FFFF44"
                this.segments.push(spring)
                if (k > 0) {
                    if (k < this.length - 1) {
                        this.joints.push(spring.anchor)
                    }
                }
            }

            this.box = new Shape(this.joints)
            this.angle = Math.atan2(pomao.body.y - this.joints[0].y, pomao.body.x - this.joints[0].x);
            // console.log(this)

            this.joints[this.joints.length - 2].radius = 20
            this.joints[this.joints.length - 2].color = "#00FF00"

            this.bopped = 0
        }

        pop() {
            this.bopped = 1
            // console.log("jit")
            let rotx = 0
            let roty = 0

            for (let g = 0; g < 10; g++) {
                let color = this.joints[this.joints.length - 2].color
                const dot1 = new Circlec(this.joints[this.joints.length - 2].x, this.joints[this.joints.length - 2].y, this.joints[this.joints.length - 2].radius * .33, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 10
                roty += 2 * Math.PI / 10
            }
            for (let t = 0; t < this.joints.length - 2; t++) {

                for (let g = 0; g < 5; g++) {
                    let color = this.joints[t].color
                    const dot1 = new Circlec(this.joints[t].x, this.joints[t].y, this.joints[t].radius, color, Math.cos(rotx) * 2, Math.sin(roty) * 2)
                    this.pops.push(dot1)
                    rotx += 2 * Math.PI / 5
                    roty += 2 * Math.PI / 5
                }
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }
        eggrepel() {
            for (let t = 0; t < pomao.thrown.length; t++) {
                pomao.thrown[t].radius *= 1.5
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(pomao.thrown[t])) {
                        if (this.bopped == 0) {
                            this.pop()
                        }
                    }
                }
                pomao.thrown[t].radius *= .666666666666666
            }
            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(shockfriendly.shocksl[t])) {
                        this.joints[k].xmom += shockfriendly.shocksl[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksl[t].ymom * .2
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksl[t].ymom * .2
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksl[t].ymom * .2
                        }
                    }
                    if (this.joints[k].repelCheck(shockfriendly.shocksr[t])) {
                        this.joints[k].xmom += shockfriendly.shocksr[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksr[t].ymom * .2
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksr[t].ymom * .2
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksr[t].ymom * .2
                        }
                    }
                }
            }
        }
        draw() {

            this.physflick++
            if (this.bopped == 0) {

                if (this.physflick % 2 == 0) {

                    for (let t = 0; t < this.segments.length; t++) {
                        this.segments[t].dmove()
                    }
                    for (let t = 0; t < this.segments.length; t++) {
                        this.segments[t].wbalance()
                    }
                    for (let t = 0; t < this.segments.length; t++) {
                        if (t > 0) {
                            if (t < this.segments.length - 1) {
                                this.segments[t].ddraw()
                                this.segments[t].body.ddraw()
                            }
                        }
                    }

                } else {

                    this.box = new Shape(this.joints)
                    this.yeet = 0

                    for (let t = 0; t < this.joints.length; t++) {
                        for (let f = 0; f < floors.length; f++) {
                            if (squarecirclefeet(floors[f], (this.joints[t]))) {
                                // if(this.box.isInsideOf(floors[f])){

                                this.yeet = 1
                            }
                        }
                        for (let f = 0; f < ramps.length; f++) {
                            if (ramps[f].isPointInside(this.joints[t])) {
                                // if(this.box.isInsideOf(floors[f])){

                                this.yeet = 1
                            }
                        }
                    }

                    for (let t = 0; t < this.segments.length; t++) {
                        if (this.yeet == 0) {
                            this.segments[t].anchor.xmom *= .995
                            this.segments[t].anchor.ymom *= .998
                            this.segments[t].body.xmom *= .995
                            this.segments[t].body.ymom *= .998
                        } else {

                            this.segments[t].anchor.xmom *= .995
                            this.segments[t].anchor.ymom *= .995
                            this.segments[t].body.xmom *= .995
                            this.segments[t].body.ymom *= .995 //99
                        }
                        // if(this.yeet == 1){

                        this.segments[t].wbalance()
                        this.segments[t].wbalance()
                        this.segments[t].wbalance()
                        // this.segments[t].wbalance()
                        // }

                        if (this.yeet == 0) {
                            this.joints[0].ymom -= .1
                            this.segments[t].anchor.ymom -= .02 * (this.length - t)
                            this.segments[t].body.ymom -= .02 * (this.length - t)
                        }


                    }


                    if (this.yeet == 0 || this.dip > 0) {
                        //   this.joints[0].ymom+=.13
                        //   for(let t = 1;t<this.joints.length;t++){
                        //       this.joints[t].ymom+=.03
                        //   }
                    }

                    if (this.joints[this.joints.length - 2].marked == 0) {
                        this.joints[0].xmom = 0
                        this.joints[0].ymom = 0
                    } else {
                        this.joints[0].xmom *= .3
                        this.joints[0].ymom *= .3
                    }
                    for (let t = 0; t < this.segments.length; t++) {
                        this.segments[t].dmove()
                    }

                    if (this.joints[this.joints.length - 2].marked == 0) {
                        this.joints[0].xmom = 0
                        this.joints[0].ymom = 0
                    } else {
                        this.joints[0].xmom *= .3
                        this.joints[0].ymom *= .3
                    }
                    // // let angleRadians = Math.atan2(this.joints[0].y-pomao.body.y ,  this.joints[0].x-pomao.body.x );
                    // this.angleRadians = Math.atan2(pomao.body.y-this.joints[0].y ,  pomao.body.x-this.joints[0].x );

                    // if(this.angleRadians - this.angle  > .17){
                    //     this.angle +=.07
                    // }else  if(this.angleRadians - this.angle  < -.17){
                    //     this.angle -=.07
                    // }else{
                    //     this.angle = this.angleRadians
                    // }


                    // this.angleRadians = Math.atan2(pomao.body.y-this.joints[0].y ,  pomao.body.x-this.joints[0].x ); //look at this seriously, why did I let this last this long? been working on this dangler for like... wait let me check, 8 hours and 20 minutes and I just figured this ou

                    this.angleRadians = Math.atan2(pomao.body.y - this.joints[this.joints.length - 2].y, pomao.body.x - this.joints[this.joints.length - 2].x);
                    this.angle = (this.angleRadians + this.angle * 2) / 3
                    this.puncher++
                    this.yeet = 0
                    this.angle += (Math.random() - .5) * .2  // *1
                    // this.angle = (this.angleRadians)
                    this.guide = new Circle(this.joints[this.joints.length - 2].x + (Math.cos(this.angle) * this.dis), this.joints[this.joints.length - 2].y + (Math.sin(this.angle) * this.dis), 5, "black")
                    // this.guide.draw()
                    if (this.yeet == 0) {
                        // console.log(this.yeet)
                        if (this.dip <= 0) {
                            // if(Math.random()<.005){
                            if (this.puncher % this.punchcap < 5) {
                                if (this.joints[this.joints.length - 2].marked == 0) {
                                    this.joints[this.joints.length - 2].xmom -= (this.joints[this.joints.length - 2].x - this.guide.x) / (.7 + ((Math.random() - .5) * .4))
                                    this.joints[this.joints.length - 2].ymom -= (this.joints[this.joints.length - 2].y - this.guide.y) / (.7 + ((Math.random() - .5) * .4))
                                    this.joints[this.joints.length - 2].xmom -= (Math.random() - .5) * .1
                                    this.joints[this.joints.length - 2].ymom -= (Math.random() - .5) * .1
                                }


                                if (this.joints[this.joints.length - 2].marked == 0) {
                                    this.joints[0].xmom = 0
                                    this.joints[0].ymom = 0
                                }
                                for (let t = 1; t < this.joints.length; t++) {
                                    if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                        for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 5; k++) { //3
                                            this.joints[t].xmom *= 1.1
                                            this.joints[t].ymom *= 1.1
                                            if (k > 500) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else if (Math.random() < .0005) {
                                if (this.joints[this.joints.length - 2].marked == 0) {
                                    this.joints[this.joints.length - 2].xmom -= (this.joints[this.joints.length - 2].x - this.guide.x) / (.5 + ((Math.random() - .5) * .1))
                                    this.joints[this.joints.length - 2].ymom -= (this.joints[this.joints.length - 2].y - this.guide.y) / (.5 + ((Math.random() - .5) * .1))
                                    this.joints[this.joints.length - 2].xmom -= (Math.random() - .5) * .1
                                    this.joints[this.joints.length - 2].ymom -= (Math.random() - .5) * .1
                                }


                                if (this.joints[this.joints.length - 2].marked == 0) {
                                    this.joints[0].xmom = 0
                                    this.joints[0].ymom = 0
                                }
                                for (let t = 1; t < this.joints.length; t++) {
                                    if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                        for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 5; k++) { //3
                                            this.joints[t].xmom *= 1.1
                                            this.joints[t].ymom *= 1.1
                                            if (k > 500) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else {
                                this.joints[0].xmom = 0
                                this.joints[0].ymom = 0

                                this.joints[this.joints.length - 2].xmom = 0
                                this.joints[this.joints.length - 2].ymom = 0
                            }

                            for (let t = 0; t < this.joints.length; t++) {
                                if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                    for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 1.3; k++) { //3
                                        this.joints[t].xmom *= 1.1
                                        this.joints[t].ymom *= 1.1
                                        if (k > 500) {
                                            break
                                        }
                                    }
                                }
                            }
                            for (let t = 0; t < 1; t++) {
                                if (t == 0) {
                                    if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                        for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 8; k++) { //3
                                            this.joints[t].xmom *= 1.1
                                            this.joints[t].ymom *= 1.1
                                            if (k > 500) {
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            this.dip--
                            for (let t = 0; t < this.segments.length; t++) {
                                this.segments[t].body.ymom *= .95
                                this.segments[t].body.xmom *= .95
                                this.segments[t].anchor.ymom *= .95
                                this.segments[t].anchor.xmom *= .95

                                //.5
                            }
                        }
                        // this.body.xmom *=.98
                        // this.body.ymom *=.98



                        for (let t = 0; (Math.abs(this.body.xmom) + Math.abs(this.body.ymom)) > 15; t++) {
                            this.body.xmom *= .98
                            this.body.ymom *= .98
                        }
                    } else { this.dip = 35 }  //15
                    // this.guide.radius = (this.joints[0].radius/3)+1
                    // this.guide.draw()
                    this.eggrepel()
                    for (let t = 0; t < this.segments.length; t++) {
                        if (t > 0) {
                            if (t < this.segments.length - 1) {
                                this.segments[t].ddraw()
                                this.segments[t].body.ddraw()
                            }
                        }
                    }

                    // for(let t = 0;t<this.joints.length;t++){
                    //     this.joints[t].wdraw()
                    // }



                }

            } else {

                this.popdraw()

                if (this.pops.length == 0) {
                    this.marked = 1
                }

            }

        }
    }

    class Wagglersubunit {
        constructor(x, y, anchor) {
            // this.beingEaten = 0
            this.boss = 1
            this.licked = 0
            this.dangler = 1
            this.layer = 0
            this.body = new Circle(anchor.x, anchor.y, anchor.radius, anchor.color)//new Circle(x, y, 10, "yellow")
            this.wormanchor = anchor
            this.segments = []
            this.length = 10
            this.joints = []
            this.dis = 30
            this.guide = new Circle(this.body.x + Math.sin(this.angle), this.body.y + Math.cos(this.angle), 5, "orange")
            this.box = new Shape()
            this.marked = 0
            this.yeet = 0
            this.dip = 0
            this.pops = []
            this.puncher = Math.floor(Math.random() * 50) + 50
            this.punchcap = Math.floor(Math.random() * 150) + 165
            this.rigradius = this.body.radius + 1
            let spring = new Spring(this.body)
            spring.anchor.radius = this.rigradius
            spring.length = 10
            spring.anchor.color = "#00FFFF44"
            spring.body.color = "#00FFFF44"

            spring.worm = this

            this.joints.push(spring.anchor)
            this.segments.push(spring)

            for (let k = 0; k < this.length; k++) {
                spring = new Spring(spring.anchor)
                spring.anchor.radius = this.rigradius
                spring.length = 18.5
                this.rigradius += this.body.radius / (this.length + 3)
                spring.worm = this
                spring.anchor.color = "#00FFFF44"
                this.segments.push(spring)
                if (k > 0) {
                    if (k < this.length - 1) {
                        this.joints.push(spring.anchor)
                    }
                }
            }

            this.box = new Shape(this.joints)
            this.angle = Math.atan2(pomao.body.y - this.joints[0].y, pomao.body.x - this.joints[0].x);
            // console.log(this)

            // this.joints[this.joints.length - 2].radius = 20
            // this.joints[this.joints.length - 2].color = "#00FF00"

            this.bopped = 0
        }

        pop() {
            this.bopped = 1
            // console.log("jit")
            let rotx = 0
            let roty = 0

            for (let g = 0; g < 10; g++) {
                let color = "#191919" //this.joints[this.joints.length - 2].color
                const dot1 = new Circlec(this.joints[this.joints.length - 2].x, this.joints[this.joints.length - 2].y, this.joints[this.joints.length - 2].radius * .33, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 10
                roty += 2 * Math.PI / 10
            }
            for (let t = 0; t < this.joints.length - 2; t++) {

                for (let g = 0; g < 5; g++) {
                    let color = this.joints[t].color
                    const dot1 = new Circlec(this.joints[t].x, this.joints[t].y, this.joints[t].radius, color, Math.cos(rotx) * 2, Math.sin(roty) * 2)
                    this.pops.push(dot1)
                    rotx += 2 * Math.PI / 5
                    roty += 2 * Math.PI / 5
                }
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .8
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }
        eggrepel() {
            for (let t = 0; t < pomao.thrown.length; t++) {
                pomao.thrown[t].radius *= 1.5
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(pomao.thrown[t])) {
                        if (this.bopped == 0) {
                            // this.pop()
                        }
                    }
                }
                pomao.thrown[t].radius *= .666666666666666
            }
            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(shockfriendly.shocksl[t])) {
                        this.joints[k].xmom += shockfriendly.shocksl[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksl[t].ymom * .2
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksl[t].ymom * .2
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksl[t].ymom * .2
                        }
                    }
                    if (this.joints[k].repelCheck(shockfriendly.shocksr[t])) {
                        this.joints[k].xmom += shockfriendly.shocksr[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksr[t].ymom * .2
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksr[t].ymom * .2
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksr[t].ymom * .2
                        }
                    }
                }
            }
        }
        draw() {

            this.body.x = this.wormanchor.x
            this.body.y = this.wormanchor.y
            if (this.bopped == 0) {


                this.box = new Shape(this.joints)
                this.yeet = 0

                for (let t = 0; t < this.joints.length; t++) {
                    for (let f = 0; f < floors.length; f++) {
                        if (squarecirclefeet(floors[f], (this.joints[t]))) {
                            // if(this.box.isInsideOf(floors[f])){

                            this.yeet = 1
                        }
                    }
                    for (let f = 0; f < ramps.length; f++) {
                        if (ramps[f].isPointInside(this.joints[t])) {
                            // if(this.box.isInsideOf(floors[f])){

                            this.yeet = 1
                        }
                    }
                }

                for (let t = 0; t < this.segments.length; t++) {
                    if (this.yeet == 0) {
                        this.segments[t].anchor.xmom *= .995
                        this.segments[t].anchor.ymom *= .998
                        this.segments[t].body.xmom *= .995
                        this.segments[t].body.ymom *= .998
                    } else {

                        this.segments[t].anchor.xmom *= .995
                        this.segments[t].anchor.ymom *= .995
                        this.segments[t].body.xmom *= .995
                        this.segments[t].body.ymom *= .995 //99
                    }
                    // if(this.yeet == 1){

                    this.body.x = this.wormanchor.x
                    this.body.y = this.wormanchor.y
                    // if(t < this.segments.length-1){
                    this.segments[t].wbalance()
                    this.segments[t].wbalance()
                    this.segments[t].wbalance()
                    // }

                    this.body.x = this.wormanchor.x
                    this.body.y = this.wormanchor.y
                    // this.segments[t].wbalance()
                    // }

                    // if (this.yeet == 0) {
                    //     this.joints[0].ymom -= .1
                    //     this.segments[t].anchor.ymom -= .02 * (this.length - t)
                    //     this.segments[t].body.ymom -= .02 * (this.length - t)
                    // }


                }


                if (this.yeet == 0 || this.dip > 0) {
                    //   this.joints[0].ymom+=.13
                    //   for(let t = 1;t<this.joints.length;t++){
                    //       this.joints[t].ymom+=.03
                    //   }
                }

                // if (this.joints[this.joints.length - 2].marked == 0) {
                //     this.joints[0].xmom = 0
                //     this.joints[0].ymom = 0
                // } else {
                //     this.joints[0].xmom *= .3
                //     this.joints[0].ymom *= .3
                // }
                for (let t = 0; t < this.segments.length; t++) {

                    this.body.x = this.wormanchor.x
                    this.body.y = this.wormanchor.y
                    this.segments[t].dbmove()

                    this.body.x = this.wormanchor.x
                    this.body.y = this.wormanchor.y
                }

                if (this.joints[this.joints.length - 2].marked == 0) {
                    this.joints[0].xmom = 0
                    this.joints[0].ymom = 0
                } else {
                    this.joints[0].xmom *= .3
                    this.joints[0].ymom *= .3
                }
                // // let angleRadians = Math.atan2(this.joints[0].y-pomao.body.y ,  this.joints[0].x-pomao.body.x );
                // this.angleRadians = Math.atan2(pomao.body.y-this.joints[0].y ,  pomao.body.x-this.joints[0].x );

                // if(this.angleRadians - this.angle  > .17){
                //     this.angle +=.07
                // }else  if(this.angleRadians - this.angle  < -.17){
                //     this.angle -=.07
                // }else{
                //     this.angle = this.angleRadians
                // }


                // this.angleRadians = Math.atan2(pomao.body.y-this.joints[0].y ,  pomao.body.x-this.joints[0].x ); //look at this seriously, why did I let this last this long? been working on this dangler for like... wait let me check, 8 hours and 20 minutes and I just figured this ou

                this.angleRadians = Math.atan2(pomao.body.y - this.joints[this.joints.length - 2].y, pomao.body.x - this.joints[this.joints.length - 2].x);
                this.angle = (this.angleRadians + this.angle * 2) / 3
                this.puncher++
                this.yeet = 0
                this.angle += (Math.random() - .5) * .2  // *1
                // this.angle = (this.angleRadians)
                this.guide = new Circle(this.joints[this.joints.length - 2].x + (Math.cos(this.angle) * this.dis), this.joints[this.joints.length - 2].y + (Math.sin(this.angle) * this.dis), 5, "black")
                // this.guide.draw()
                if (this.yeet == 0) {
                    // console.log(this.yeet)
                    if (this.dip <= 0) {
                        // if(Math.random()<.005){
                        if (this.puncher % this.punchcap < 5) {
                            if (this.joints[this.joints.length - 2].marked == 0) {
                                this.joints[this.joints.length - 2].xmom -= (this.joints[this.joints.length - 2].x - this.guide.x) / (.59 + ((Math.random() - .5) * .4))
                                this.joints[this.joints.length - 2].ymom -= (this.joints[this.joints.length - 2].y - this.guide.y) / (.59 + ((Math.random() - .5) * .4))
                                this.joints[this.joints.length - 2].xmom -= (Math.random() - .5) * .1
                                this.joints[this.joints.length - 2].ymom -= (Math.random() - .5) * .1
                            }


                            if (this.joints[this.joints.length - 2].marked == 0) {
                                this.joints[0].xmom = 0
                                this.joints[0].ymom = 0
                            }
                            for (let t = 1; t < this.joints.length; t++) {
                                if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                    for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 5; k++) { //3
                                        this.joints[t].xmom *= 1.1
                                        this.joints[t].ymom *= 1.1
                                        if (k > 500) {
                                            break
                                        }
                                    }
                                }
                            }

                        } else if (Math.random() < .0005) {
                            if (this.joints[this.joints.length - 2].marked == 0) {
                                this.joints[this.joints.length - 2].xmom -= (this.joints[this.joints.length - 2].x - this.guide.x) / (.5 + ((Math.random() - .5) * .1))
                                this.joints[this.joints.length - 2].ymom -= (this.joints[this.joints.length - 2].y - this.guide.y) / (.5 + ((Math.random() - .5) * .1))
                                this.joints[this.joints.length - 2].xmom -= (Math.random() - .5) * .1
                                this.joints[this.joints.length - 2].ymom -= (Math.random() - .5) * .1
                            }


                            if (this.joints[this.joints.length - 2].marked == 0) {
                                this.joints[0].xmom = 0
                                this.joints[0].ymom = 0
                            }
                            for (let t = 1; t < this.joints.length; t++) {
                                if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                    for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 5; k++) { //3
                                        this.joints[t].xmom *= 1.1
                                        this.joints[t].ymom *= 1.1
                                        if (k > 500) {
                                            break
                                        }
                                    }
                                }
                            }

                        } else {
                            this.joints[0].xmom = 0
                            this.joints[0].ymom = 0

                            this.joints[this.joints.length - 2].xmom = 0
                            this.joints[this.joints.length - 2].ymom = 0
                        }

                        for (let t = 0; t < this.joints.length; t++) {
                            if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 1.3; k++) { //3
                                    this.joints[t].xmom *= 1.1
                                    this.joints[t].ymom *= 1.1
                                    if (k > 500) {
                                        break
                                    }
                                }
                            }
                        }
                        for (let t = 0; t < 1; t++) {
                            if (t == 0) {
                                if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                    for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 8; k++) { //3
                                        this.joints[t].xmom *= 1.1
                                        this.joints[t].ymom *= 1.1
                                        if (k > 500) {
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        this.dip--
                        for (let t = 0; t < this.segments.length; t++) {
                            this.segments[t].body.ymom *= .95
                            this.segments[t].body.xmom *= .95
                            this.segments[t].anchor.ymom *= .95
                            this.segments[t].anchor.xmom *= .95

                            //.5
                        }
                    }
                    // this.body.xmom *=.98
                    // this.body.ymom *=.98



                    for (let t = 0; (Math.abs(this.body.xmom) + Math.abs(this.body.ymom)) > 15; t++) {
                        this.body.xmom *= .98
                        this.body.ymom *= .98
                    }
                } else { this.dip = 35 }  //15
                // this.guide.radius = (this.joints[0].radius/3)+1
                // this.guide.draw()
                this.eggrepel()
                this.body.x = this.wormanchor.x
                this.body.y = this.wormanchor.y
                this.beam = new Line(this.joints[0].x, this.joints[0].y, this.wormanchor.x, this.wormanchor.y, "#191919", this.wormanchor.radius * 1.1)
                this.beam.draw()
                this.wormanchor.wbsdraw()
                for (let t = 0; t < this.segments.length; t++) {
                    if (t > 0) {
                        if (t < this.segments.length - 1) {
                            this.body.x = this.wormanchor.x
                            this.body.y = this.wormanchor.y
                            this.segments[t].wbsdraw()
                            this.segments[t].body.wbsdraw()
                            this.body.x = this.wormanchor.x
                            this.body.y = this.wormanchor.y
                        }
                    }
                }

                // for(let t = 0;t<this.joints.length;t++){
                //     this.joints[t].wdraw()
                // }

            } else {

                this.popdraw()

                if (this.pops.length == 0) {
                    this.marked = 1
                }

            }

        }
    }

    class Worm {
        constructor(x = 0, y = 0) {
            this.physflick = Math.floor(Math.random() * 100)
            this.licked = 0
            this.beingEaten = 0
            this.layer = Math.floor(Math.random() * 2)
            if (Math.random() < .999) {
                this.layer = 0
            }
            this.dangler = 0
            this.length = 9 + Math.floor(Math.random() * 9)
            this.body = new Circle(x, y, 9 + (Math.random() * 7), "yellow")
            this.segments = []
            this.joints = []
            this.dis = 22
            this.guide = new Circle(this.body.x + Math.sin(this.angle), this.body.y + Math.cos(this.angle), 5, "orange")
            this.box = new Shape()
            this.marked = 0
            this.yeet = 0
            this.dip = 0
            this.rigradius = this.body.radius + 1
            let spring = new Spring(this.body)
            spring.anchor.radius = this.rigradius
            spring.length = 12

            spring.worm = this

            this.joints.push(spring.anchor)
            this.segments.push(spring)

            for (let k = 0; k < this.length; k++) {
                spring = new Spring(spring.anchor)
                spring.anchor.radius = this.rigradius
                spring.length = 5 + (20 - this.length)  //11.5
                this.rigradius -= this.body.radius / (this.length + 4)
                spring.worm = this
                this.segments.push(spring)
                if (k > 0) {
                    if (k < this.length - 1) {
                        this.joints.push(spring.anchor)
                    }
                }
            }

            this.box = new Shape(this.joints)
            this.angle = Math.atan2(pomao.body.y - this.joints[0].y, pomao.body.x - this.joints[0].x);
            // console.log(this)
            this.bopped = 0
        }
        eggrepel() {
            for (let t = 0; t < pomao.thrown.length; t++) {
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(pomao.thrown[t])) {
                        this.joints[k].xmom += pomao.thrown[t].xmom * .3
                        pomao.thrown[t].xmom *= .945
                        if (pomao.thrown[t].ymom < 0) {

                            this.joints[k].ymom += pomao.thrown[t].ymom * .3
                            pomao.thrown[t].ymom *= .945
                        } else {
                            this.joints[k].ymom += pomao.thrown[t].ymom * .3
                        }

                        if (k > 0) {
                            this.joints[k - 1].xmom += pomao.thrown[t].xmom * .3
                            pomao.thrown[t].xmom *= .945
                            if (pomao.thrown[t].ymom < 0) {

                                this.joints[k - 1].ymom += pomao.thrown[t].ymom * .3
                                pomao.thrown[t].ymom *= .945
                            } else {
                                this.joints[k - 1].ymom += pomao.thrown[t].ymom * .3
                            }
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += pomao.thrown[t].xmom * .3
                            pomao.thrown[t].xmom *= .945
                            if (pomao.thrown[t].ymom < 0) {

                                this.joints[k + 1].ymom += pomao.thrown[t].ymom * .3
                                pomao.thrown[t].ymom *= .945
                            } else {
                                this.joints[k + 1].ymom += pomao.thrown[t].ymom * .3
                            }
                        }
                    }
                }
            }
            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(shockfriendly.shocksl[t])) {
                        this.joints[k].xmom += shockfriendly.shocksl[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksl[t].ymom * .2
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksl[t].ymom * .2
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksl[t].ymom * .2
                        }
                    }
                    if (this.joints[k].repelCheck(shockfriendly.shocksr[t])) {
                        this.joints[k].xmom += shockfriendly.shocksr[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksr[t].ymom * .2
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksr[t].ymom * .2
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksr[t].ymom * .2
                        }
                    }
                }
            }
        }
        draw() {
            this.physflick++
            // if(this.physflick%2 == 0){
            this.box = new Shape(this.joints)
            this.yeet = 0

            for (let t = 0; t < this.joints.length; t++) {
                for (let f = 0; f < floors.length; f++) {
                    if (squarecirclefeet(floors[f], (this.joints[t]))) {
                        // if(this.box.isInsideOf(floors[f])){

                        this.yeet = 1
                    }
                }
                for (let f = 0; f < ramps.length; f++) {
                    if (ramps[f].isPointInside(this.joints[t])) {
                        // if(this.box.isInsideOf(floors[f])){

                        this.yeet = 1
                    }
                }
            }

            for (let t = 0; t < this.segments.length; t++) {
                if (this.yeet == 0) {
                    this.segments[t].anchor.xmom *= .995
                    this.segments[t].anchor.ymom *= .998
                    this.segments[t].body.xmom *= .995
                    this.segments[t].body.ymom *= .998
                } else {

                    this.segments[t].anchor.xmom *= .995
                    this.segments[t].anchor.ymom *= .995
                    this.segments[t].body.xmom *= .995
                    this.segments[t].body.ymom *= .995 //99
                }
                // if(this.yeet == 1){

                this.segments[t].wbalance()
                this.segments[t].wbalance()
                // }

                // if(this.yeet == 0){
                //     this.joints[0].ymom+=.1
                // this.segments[t].anchor.ymom += .0002*(this.length-t)
                // this.segments[t].body.ymom +=  .0002*(this.length-t)
                // }


            }


            if (this.yeet == 0 || this.dip > 0) {
                this.joints[0].ymom += .13
                for (let t = 1; t < this.joints.length; t++) {
                    this.joints[t].ymom += .03
                }
            }
            for (let t = 0; t < this.segments.length; t++) {
                this.segments[t].wmove(t)
            }

            // let angleRadians = Math.atan2(this.joints[0].y-pomao.body.y ,  this.joints[0].x-pomao.body.x );
            this.angleRadians = Math.atan2(pomao.body.y - this.joints[0].y, pomao.body.x - this.joints[0].x);

            // if(this.angleRadians - this.angle  > .17){
            //     this.angle +=.07
            // }else  if(this.angleRadians - this.angle  < -.17){
            //     this.angle -=.07
            // }else{
            //     this.angle = this.angleRadians
            // }

            this.angle = (this.angleRadians + this.angle * 2) / 3

            this.angle += (Math.random() - .5)
            this.guide = new Circle(this.joints[0].x + (Math.cos(this.angle) * this.dis), this.joints[0].y + (Math.sin(this.angle) * this.dis), 5, "orange")
            if (this.guide.y > 500) {
                this.guide.y = 500
            }
            if (this.yeet == 1) {
                // console.log(this.yeet)
                if (this.dip <= 0) {
                    this.body.xmom -= (this.body.x - this.guide.x) / 3
                    this.body.ymom -= (this.body.y - this.guide.y) / 3
                    this.body.xmom -= (Math.random() - .5) * .1
                    this.body.ymom -= (Math.random() - .5) * .1

                    for (let t = 0; t < this.joints.length; t++) {
                        if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                            for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 3; k++) { //3
                                this.joints[t].xmom *= 1.1
                                this.joints[t].ymom *= 1.1
                                if (k > 500) {
                                    break
                                }
                            }
                        }
                    }
                    for (let t = 0; t < 1; t++) {
                        if (t == 0) {
                            if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 8; k++) { //3
                                    this.joints[t].xmom *= 1.1
                                    this.joints[t].ymom *= 1.1
                                    if (k > 500) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                } else {
                    this.dip--
                    for (let t = 0; t < this.segments.length; t++) {
                        this.segments[t].body.ymom *= .95
                        this.segments[t].body.xmom *= .95
                        this.segments[t].anchor.ymom *= .95
                        this.segments[t].anchor.xmom *= .95

                        //.5
                    }
                }
                // this.body.xmom *=.98
                // this.body.ymom *=.98



                for (let t = 0; (Math.abs(this.body.xmom) + Math.abs(this.body.ymom)) > 15; t++) {
                    this.body.xmom *= .98
                    this.body.ymom *= .98
                }
            } else { this.dip = 35 }  //15
            // this.guide.radius = (this.joints[0].radius/3)+1
            // this.guide.draw()
            this.eggrepel()
            for (let t = 0; t < this.segments.length - 1; t++) {
                if (t > 0) {
                    if (t < this.segments.length - 2) {
                        this.segments[t].wdraw()
                        this.segments[t].body.wdraw()
                    } else if (t < this.segments.length - 1) {
                        // this.segments[t].wdraw()
                        this.segments[t].body.wdraw()
                    }
                }
            }

            // for(let t = 0;t<this.joints.length;t++){
            //     this.joints[t].wdraw()
            // }

            // }else{

            //     for (let t = 0; t < this.segments.length; t++) {
            //         this.segments[t].wmove(t) 
            //     }
            //     for (let t = 0; t < this.segments.length - 1; t++) {
            //         if (t > 0) {
            //             if (t < this.segments.length - 2) {
            //                 this.segments[t].wdraw()
            //                 this.segments[t].body.wdraw()
            //             } else if (t < this.segments.length - 1) {
            //                 // this.segments[t].wdraw()
            //                 this.segments[t].body.wdraw()
            //             }
            //         }
            //     }


            // }

        }
    }
    class Wormboss {
        constructor(x = 0, y = 0) {
            this.boss = 1
            this.licked = 0
            this.beingEaten = 0
            this.layer = Math.floor(Math.random() * 2)
            if (Math.random() < .999) {
                this.layer = 0
            }
            this.wall1 = new Rectangle(-2100 + door.width, -11070, 2000, 50)
            this.wall2 = new Rectangle(-2100, -11070, 50, door.width)
            floors.push(this.wall1)
            walls.push(this.wall1)
            roofs.push(this.wall1)
            floors.push(this.wall2)
            walls.push(this.wall2)
            roofs.push(this.wall2)
            floormpf.push(this.wall1)
            floormpf.push(this.wall2)
            this.dead = 0
            this.health = 7777
            this.maxhealth = 7777
            this.dangler = 0
            this.body = new Circle(x, y, 22, "yellow")
            this.segments = []
            this.length = 35
            this.joints = []
            this.dis = 22
            this.guide = new Circle(this.body.x + Math.sin(this.angle), this.body.y + Math.cos(this.angle), 5, "orange")
            this.box = new Shape()
            this.marked = 0
            this.yeet = 0
            this.dip = 0
            this.rigradius = this.body.radius + 1
            let spring = new Spring(this.body)
            spring.anchor.radius = this.rigradius
            spring.length = 12
            this.metashape = []

            spring.worm = this

            this.joints.push(spring.anchor)
            this.segments.push(spring)

            for (let k = 0; k < this.length; k++) {
                spring = new Spring(spring.anchor)
                spring.anchor.radius = this.rigradius
                spring.length = 24.5
                this.rigradius -= this.body.radius / (this.length + 15)
                spring.worm = this
                this.segments.push(spring)
                if (k > 0) {
                    if (k < this.length - 1) {
                        this.joints.push(spring.anchor)
                    }
                }
            }

            for (let n = 0; n < this.segments.length; n++) {
                this.segments[n].body.storad = this.segments[n].body.radius
            }
            for (let n = 0; n < this.segments.length; n++) {
                this.segments[n].anchor.storad = this.segments[n].anchor.radius
            }

            this.box = new Shape(this.joints)
            this.angle = Math.atan2(pomao.body.y - this.joints[0].y, pomao.body.x - this.joints[0].x);
            // console.log(this)
            this.bopped = 0
        }

        castBetween(from, to) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
            let limit = new LineOP(from, to).hypotenuse() / (to.radius * 2)
            // console.log(from, to, target)
            let radius = to.radius
            let shape_array = []
            for (let t = 0; t < limit; t++) {
                let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "gray")
                circ.target = this
                // circ.draw()
                shape_array.push(circ)
            }
            this.metashape.push((new Shape(shape_array)))
            return true;
        }
        eggrepel() {


            // pomao.eggmake = 100000 //x//
            // for (let k = 0; k < this.metashape.length; k++) {
            //     for (let t = 0; t < pomao.thrown.length; t++) {
            //         if (this.metashape[k].isPointInside(pomao.thrown[t])) {
            //             this.health -= .5
            //         }
            //     }
            // }
            for (let t = 0; t < pomao.thrown.length; t++) {
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(pomao.thrown[t])) {
                        // this.health -= 10

                        // this.joints[k].xmom += pomao.thrown[t].xmom * .3
                        // pomao.thrown[t].xmom *= .945
                        // if (pomao.thrown[t].ymom < 0) {

                        //     this.joints[k].ymom += pomao.thrown[t].ymom * .3
                        //     pomao.thrown[t].ymom *= .945
                        // } else {
                        //     this.joints[k].ymom += pomao.thrown[t].ymom * .3
                        // }

                        // if (k > 0) {
                        //     this.joints[k - 1].xmom += pomao.thrown[t].xmom * .3
                        //     pomao.thrown[t].xmom *= .945
                        //     if (pomao.thrown[t].ymom < 0) {

                        //         this.joints[k - 1].ymom += pomao.thrown[t].ymom * .3
                        //         pomao.thrown[t].ymom *= .945
                        //     } else {
                        //         this.joints[k - 1].ymom += pomao.thrown[t].ymom * .3
                        //     }
                        // }
                        // if (k < this.joints.length - 1) {
                        //     this.joints[k + 1].xmom += pomao.thrown[t].xmom * .3
                        //     pomao.thrown[t].xmom *= .945
                        //     if (pomao.thrown[t].ymom < 0) {

                        //         this.joints[k + 1].ymom += pomao.thrown[t].ymom * .3
                        //         pomao.thrown[t].ymom *= .945
                        //     } else {
                        //         this.joints[k + 1].ymom += pomao.thrown[t].ymom * .3
                        //     }
                        // }

                        this.health -= 4
                        for (let n = 0; n < this.segments.length; n++) {
                            this.segments[n].body.radius = ((this.health / this.maxhealth) * this.segments[n].body.storad) + 6
                            this.segments[n].anchor.radius = ((this.health / this.maxhealth) * this.segments[n].anchor.storad) + 6
                        }
                    }
                }
            }


            for (let k = 0; k < this.metashape.length; k++) {   //still busted? was thrown not metashape
                for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                    if (this.metashape[k].isPointInside(shockfriendly.shocksl[t])) {
                        this.health -= .5
                    }
                    if (this.metashape[k].isPointInside(shockfriendly.shocksr[t])) {
                        this.health -= .5
                    }
                }
            }
            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                for (let k = 0; k < this.joints.length; k++) {
                    if (this.joints[k].repelCheck(shockfriendly.shocksl[t])) {
                        this.joints[k].xmom += shockfriendly.shocksl[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksl[t].ymom * .5
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksl[t].ymom * .5
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksl[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksl[t].ymom * .5
                        }

                        this.health -= 1
                        for (let n = 0; n < this.segments.length; n++) {
                            this.segments[n].body.radius = ((this.health / this.maxhealth) * this.segments[n].body.storad) + 6
                            this.segments[n].anchor.radius = ((this.health / this.maxhealth) * this.segments[n].anchor.storad) + 6
                        }
                    }
                    if (this.joints[k].repelCheck(shockfriendly.shocksr[t])) {
                        this.joints[k].xmom += shockfriendly.shocksr[t].xmom * .2
                        this.joints[k].ymom += shockfriendly.shocksr[t].ymom * .5
                        if (k > 0) {
                            this.joints[k - 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k - 1].ymom += shockfriendly.shocksr[t].ymom * .5
                        }
                        if (k < this.joints.length - 1) {
                            this.joints[k + 1].xmom += shockfriendly.shocksr[t].xmom * .2
                            this.joints[k + 1].ymom += shockfriendly.shocksr[t].ymom * .5
                        }

                        this.health -= 10
                        for (let n = 0; n < this.segments.length; n++) {
                            this.segments[n].body.radius = ((this.health / this.maxhealth) * this.segments[n].body.storad) + 6
                            this.segments[n].anchor.radius = ((this.health / this.maxhealth) * this.segments[n].anchor.storad) + 6
                        }
                    }
                }
            }
        }
        draw() {
            if (this.health <= 0) {
                // this.health = 0
                if (this.dead == 0) {
                    this.dead = 1

                    walls.splice(walls.indexOf(this.wall1), 1)
                    floors.splice(floors.indexOf(this.wall1), 1)
                    roofs.splice(roofs.indexOf(this.wall1), 1)
                    walls.splice(walls.indexOf(this.wall2), 1)
                    floors.splice(floors.indexOf(this.wall2), 1)
                    roofs.splice(roofs.indexOf(this.wall2), 1)
                    floormpf.splice(floormpf.indexOf(this.wall1), 1)
                    floormpf.splice(floormpf.indexOf(this.wall2), 1)
                    for (let t = 0; t < worms.length; t++) {
                        if (worms[t].pop) {
                            worms[t].pop()
                        }
                    }
                }
                lvl6bossmusic.pause()
            } else {

                lvl6bossmusic.playbackRate = .5 + (1 - (.5 * (this.health / this.maxhealth)));
                lvl6bossmusic.play()

                this.box = new Shape(this.joints)
                this.yeet = 0

                for (let t = 0; t < this.joints.length; t++) {
                    for (let f = 0; f < floors.length; f++) {
                        if (squarecirclefeet(floors[f], (this.joints[t]))) {
                            // if(this.box.isInsideOf(floors[f])){

                            this.yeet = 1
                        }
                    }
                    for (let f = 0; f < ramps.length; f++) {
                        if (ramps[f].isPointInside(this.joints[t])) {
                            // if(this.box.isInsideOf(floors[f])){

                            this.yeet = 1
                        }
                    }
                }

                for (let t = 0; t < this.segments.length; t++) {
                    if (this.yeet == 0) {
                        this.segments[t].anchor.xmom *= .995
                        this.segments[t].anchor.ymom *= .998
                        this.segments[t].body.xmom *= .995
                        this.segments[t].body.ymom *= .998
                    } else {

                        this.segments[t].anchor.xmom *= .995
                        this.segments[t].anchor.ymom *= .995
                        this.segments[t].body.xmom *= .995
                        this.segments[t].body.ymom *= .995 //99
                    }
                    // if(this.yeet == 1){

                    this.segments[t].wbalance()
                    this.segments[t].wbalance()
                    // }

                    // if(this.yeet == 0){
                    //     this.joints[0].ymom+=.1
                    // this.segments[t].anchor.ymom += .0002*(this.length-t)
                    // this.segments[t].body.ymom +=  .0002*(this.length-t)
                    // }


                }


                if (this.yeet == 0 || this.dip > 0) {
                    this.joints[0].ymom += .1
                    for (let t = 1; t < this.joints.length; t++) {
                        this.joints[t].ymom += .02
                        if (this.joints[t].x < -2100) {
                            this.joints[t].x = -2100
                        }
                        if (this.joints[t].y > -8870) {
                            this.joints[t].y = -8870
                        }
                    }
                }
                for (let t = 0; t < this.segments.length; t++) {
                    // this.segments[t].wmove(t)
                    this.segments[t].wbmove(t)
                }

                this.metashape = []

                for (let t = 1; t < this.joints.length; t++) {
                    this.castBetween(this.joints[t], this.joints[t - 1])
                }
                // let angleRadians = Math.atan2(this.joints[0].y-pomao.body.y ,  this.joints[0].x-pomao.body.x );
                this.angleRadians = Math.atan2(pomao.body.y - this.joints[0].y, pomao.body.x - this.joints[0].x);

                // if(this.angleRadians - this.angle  > .17){
                //     this.angle +=.07
                // }else  if(this.angleRadians - this.angle  < -.17){
                //     this.angle -=.07
                // }else{
                //     this.angle = this.angleRadians
                // }

                this.angle = this.angleRadians // (this.angleRadians + this.angle * 2) / 3

                this.angle += (Math.random() - .5)
                this.guide = new Circle(this.joints[0].x + (Math.cos(this.angle) * this.dis), this.joints[0].y + (Math.sin(this.angle) * this.dis * 2), 5, "orange")
                if (this.yeet == 1) {
                    // console.log(this.yeet)
                    if (this.dip <= 0) {
                        this.body.xmom -= (this.body.x - this.guide.x) / 2
                        this.body.ymom -= (this.body.y - this.guide.y) / 2
                        this.body.xmom -= (Math.random() - .5) * .1
                        this.body.ymom -= (Math.random() - .5) * .1

                        for (let t = 0; t < this.joints.length; t++) {
                            if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 3; k++) { //3
                                    this.joints[t].xmom *= 1.1
                                    this.joints[t].ymom *= 1.1
                                    if (k > 500) {
                                        break
                                    }
                                }
                            }
                        }
                        for (let t = 0; t < 1; t++) {
                            if (t == 0) {
                                if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                    for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 8; k++) { //3
                                        this.joints[t].xmom *= 1.1
                                        this.joints[t].ymom *= 1.1
                                        if (k > 500) {
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        this.dip--

                        this.body.xmom -= (this.body.x - this.guide.x) / 300
                        this.body.ymom -= (this.body.y - this.guide.y) / 300
                        this.body.xmom -= (Math.random() - .5) * .1
                        this.body.ymom -= (Math.random() - .5) * .1

                        for (let t = 0; t < this.joints.length; t++) {
                            if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 3; k++) { //3
                                    this.joints[t].xmom *= 1.1
                                    this.joints[t].ymom *= 1.1
                                    if (k > 500) {
                                        break
                                    }
                                }
                            }
                        }
                        for (let t = 0; t < 1; t++) {
                            if (t == 0) {
                                if ((Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) != 0) {
                                    for (let k = 0; (Math.abs(this.joints[t].xmom) + Math.abs(this.joints[t].ymom)) < 8; k++) { //3
                                        this.joints[t].xmom *= 1.1
                                        this.joints[t].ymom *= 1.1
                                        if (k > 500) {
                                            break
                                        }
                                    }
                                }
                            }
                        }
                        for (let t = 0; t < this.segments.length; t++) {
                            this.segments[t].body.ymom *= .95
                            this.segments[t].body.xmom *= .95
                            this.segments[t].anchor.ymom *= .95
                            this.segments[t].anchor.xmom *= .95

                            //.5
                        }
                    }
                    // this.body.xmom *=.98
                    // this.body.ymom *=.98



                    for (let t = 0; (Math.abs(this.body.xmom) + Math.abs(this.body.ymom)) > 15; t++) {
                        this.body.xmom *= .98
                        this.body.ymom *= .98
                    }
                } else { this.dip = 35 }  //15
                // this.guide.radius = (this.joints[0].radius/3)+1
                // this.guide.draw()

                this.eggrepel()
                for (let n = 0; n < this.segments.length; n++) {
                    this.segments[n].body.radius = ((this.health / this.maxhealth) * this.segments[n].body.storad) + 6
                    this.segments[n].anchor.radius = ((this.health / this.maxhealth) * this.segments[n].anchor.storad) + 6
                }
                for (let t = 0; t < this.segments.length - 1; t++) {
                    if (t > 0) {
                        if (t < this.segments.length - 2) {
                            this.segments[t].wbdraw()
                            this.segments[t].body.wbdraw()
                        } else if (t < this.segments.length - 1) {
                            // this.segments[t].wdraw()
                            this.segments[t].body.wbdraw()
                        }
                    }
                }

                // for(let t = 0;t<this.joints.length;t++){
                //     this.joints[t].wdraw()
                // }

                if (this.health <= 0) {
                    // this.health = 0
                    if (this.dead == 0) {
                        this.dead = 1
                        walls.splice(walls.indexOf(this.wall1), 1)
                        floors.splice(floors.indexOf(this.wall1), 1)
                        roofs.splice(roofs.indexOf(this.wall1), 1)
                        walls.splice(walls.indexOf(this.wall2), 1)
                        floors.splice(floors.indexOf(this.wall2), 1)
                        roofs.splice(roofs.indexOf(this.wall2), 1)
                        floormpf.splice(floormpf.indexOf(this.wall1), 1)
                        floormpf.splice(floormpf.indexOf(this.wall2), 1)
                        for (let t = 0; t < worms.length; t++) {
                            if (worms[t].pop) {
                                worms[t].pop()
                            }
                        }
                    }
                }
            }

        }
    }

    class Bossspringhand {
        constructor(x, y, body = 0, anchor = 0) {
            if (body == 0) {
                this.body = new Bosscircle(x, y, 2, "red")
            } else {
                this.body = body
            }
            if (anchor == 0) {
                this.anchor = new Bosscircle(x + 1, y + 1, 2, "red")
            } else {
                this.anchor = anchor
            }
            this.length = 3

        }
        balance() {

            let xmomavg = (this.body.sxmom + this.anchor.sxmom) * .5
            let ymomavg = (this.body.symom + this.anchor.symom) * .5

            this.body.sxmom = (this.body.sxmom + xmomavg) * .5
            this.body.symom = (this.body.symom + ymomavg) * .5

            this.anchor.sxmom = (this.anchor.sxmom + xmomavg) * .5
            this.anchor.symom = (this.anchor.symom + ymomavg) * .5

            let link = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "white", 4)


            let xvec = this.body.x - this.anchor.x
            let yvec = this.body.y - this.anchor.y

            for (let t = 0; (Math.abs(xvec) + Math.abs(yvec)) > .5; t++) {
                xvec *= .99
                yvec *= .99
                if (t > 1000) {
                    break
                }
            }

            for (let t = 0; (Math.abs(xvec) + Math.abs(yvec)) < .5; t++) {
                xvec *= 1.01
                yvec *= 1.01
                if (t > 1000) {
                    break
                }
            }

            if (link.hypotenuse() < this.length - 5) {
                this.body.sxmom += xvec
                this.body.symom += yvec
                this.anchor.sxmom -= xvec
                this.anchor.symom -= yvec


            } else if (link.hypotenuse() > this.length + 5) {

                this.body.sxmom -= xvec
                this.body.symom -= yvec
                this.anchor.sxmom += xvec
                this.anchor.symom += yvec

            } else {
                this.body.sxmom *= .99
                this.body.symom *= .99
                this.anchor.sxmom *= .99
                this.anchor.symom *= .99
            }

            if (this.body != starboss.start) {
                this.body.smove()
            }
            if (this.anchor != starboss.start) {
                this.anchor.smove()
            }
        }
        draw() {

            this.balance()
            let link = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "white", 1)

            link.draw()
            this.body.draw()
            if (this.body != starboss.start) {
                this.body.move()

            }
            this.anchor.draw()
        }
    }



    class Finger {
        constructor(center) {
            this.center = center

            this.dis = 50
            this.dis2 = 50
            this.angle = Math.PI / 4
            this.angle2 = Math.PI / 6

            this.tip1 = new Bosscircle(0, 0, 10, "yellow")

            this.tip2 = new Bosscircle(0, 0, 10, "orange")
            this.tip12 = new Bosscircle(0, 0, 10, "yellow")

            this.tip22 = new Bosscircle(0, 0, 10, "orange")

            this.link1 = new Line(this.tip1.x, this.tip1.y, this.center.x, this.center.y, "red", 3)
            this.link2 = new Line(this.tip2.x, this.tip2.y, this.center.x, this.center.y, "red", 3)
            this.link12 = new Line(this.tip1.x, this.tip1.y, this.tip12.x, this.tip12.y, "red", 3)
            this.link22 = new Line(this.tip2.x, this.tip2.y, this.tip22.x, this.tip22.y, "red", 3)
            this.tip12 = new Bosscircle(this.tip1.x + (Math.sin(0 + this.angle2) * this.dis2), this.tip1.y + (Math.cos(0 + this.angle2) * this.dis2), 10, "purple")
            this.tip22 = new Bosscircle(this.tip2.x + (Math.sin(0 - this.angle2) * this.dis2), this.tip2.y + (Math.cos(0 - this.angle2) * this.dis2), 10, "pink")
        }

        draw() {

            this.tip1 = new Bosscircle(this.center.x + (Math.sin(0 + this.angle) * this.dis), this.center.y + (Math.cos(0 + this.angle) * this.dis), 10, "yellow")
            this.tip2 = new Bosscircle(this.center.x + (Math.sin(0 - this.angle) * this.dis), this.center.y + (Math.cos(0 - this.angle) * this.dis), 10, "orange")

            this.tip12 = new Bosscircle(this.tip1.x + (Math.sin(0 - this.angle2) * this.dis2), this.tip1.y + (Math.cos(0 - this.angle2) * this.dis2), 10, "purple")
            this.tip22 = new Bosscircle(this.tip2.x + (Math.sin(0 + this.angle2) * this.dis2), this.tip2.y + (Math.cos(0 + this.angle2) * this.dis2), 10, "pink")


            this.link1 = new Line(this.tip1.x, this.tip1.y, this.center.x, this.center.y, "red", 3)
            this.link2 = new Line(this.tip2.x, this.tip2.y, this.center.x, this.center.y, "red", 3)
            this.link12 = new Line(this.tip1.x, this.tip1.y, this.tip12.x, this.tip12.y, "red", 3)
            this.link22 = new Line(this.tip2.x, this.tip2.y, this.tip22.x, this.tip22.y, "red", 3)
            this.link1.draw()
            this.link2.draw()
            this.link12.draw()
            this.link22.draw()
            this.tip1.draw()
            this.tip2.draw()
            this.tip12.draw()
            this.tip22.draw()


        }
    }

    class Arm {
        constructor(x, y) {

            this.start = new Bosscircle(350, 0, 2, "yellow")
            this.end = new Bosscircle(350, 350, 2, "purple")
            this.segments = []

            this.size = 20

            let spring = new Bossspringhand(350, 350, this.start, this.end)
            this.segments.push(spring)
            let spraing
            for (let t = 0; t < this.size; t++) {
                if (t == 0) {
                    spraing = new Bossspringhand(350, 350, 0, spring.body)
                    spraing.body.color = "teal"
                    this.segments.push(spraing)
                } else {
                    spraing = new Bossspringhand(350, 350, 0, spraing.body)
                    spraing.body.color = "gray"
                    this.segments.push(spraing)
                }
            }


            this.joint = this.segments[this.segments.length - 1].body


            // this.grip = []

            this.hand1 = new Finger(this.joint)



        }
        draw() {
            for (let t = 0; t < this.segments.length; t++) {
                this.segments[t].anchor.ymom += .01
                this.start.sxmom = 0
                this.start.symom = 0
                this.segments[t].draw()
                this.start.sxmom = 0
                this.start.symom = 0
            }
            this.hand1.draw()
            this.joint.draw()

            if (keysPressed['y']) {
                this.hand1.angle += .05
                this.hand1.angle2 -= .05
            }

            if (keysPressed['u']) {
                this.hand1.angle -= .05
                this.hand1.angle2 += .05
            }

            if (keysPressed['w']) {
                this.hand1.center.y -= 1
            }
            if (keysPressed['a']) {
                this.hand1.center.x -= 1
            }
            if (keysPressed['s']) {
                this.hand1.center.y += 1
            }
            if (keysPressed['d']) {
                this.hand1.center.x += 1
            }
        }
    }



    class Starboss {
        constructor() {
            this.links = []
            this.centroid = new Circle()
        }
    }

    class Tutorial {
        constructor() {
            this.body = new Circle(100, -20, 0, "transparent")
            this.frame = 0
            this.triggers = []
            let trigger1 = new Circle(800, 360, 1, "red")
            this.triggers.push(trigger1)
            let trigger2 = new Circle(0, 470, 1, "red")
            this.triggers.push(trigger2)
            let trigger3 = new Circle(-300, 250, 1, "red")
            this.triggers.push(trigger3)
            let trigger4 = new Circle(2715, -40, 1, "red")
            this.triggers.push(trigger4)
            let trigger5 = new Circle(2915, 600, 1, "red")
            this.triggers.push(trigger5)
            let trigger6 = new Circle(4400, -600, 1, "red")
            this.triggers.push(trigger6)
            let trigger7 = new Circle(12000, -7100, 1, "red")
            this.triggers.push(trigger7)
            let trigger8 = new Circle(11000, 500, 1, "red")
            this.triggers.push(trigger8)
            this.chat = new Dialogue(this.body.x, this.body.y)
            this.box1 = new Rectangle(this.chat.box.x + 50, this.chat.box.y + 50, 50, 50, "red")
            this.box2 = new Rectangle(this.chat.box.x + 150, this.chat.box.y + 50, 50, 50, "blue")
            this.controller = 0
            this.picked = 0


        }
        draw() {

            let triggerfinder = {}
            let link = new Line(pomao.body.x, pomao.body.y, this.body.x, this.body.y, "red", 1)
            // link.draw()
            triggerfinder.length = link.hypotenuse()
            for (let t = 0; t < this.triggers.length; t++) {
                let blink = new Line(pomao.body.x, pomao.body.y, this.triggers[t].x, this.triggers[t].y, "red", 1)
                if (blink.hypotenuse() <= triggerfinder.length) {
                    triggerfinder.length = blink.hypotenuse()
                    triggerfinder.index = t
                }
            }

            this.body.x = this.triggers[triggerfinder.index].x
            this.body.y = this.triggers[triggerfinder.index].y
            switch (triggerfinder.index) {
                case 0:

                    if (this.picked < 1) {
                        if (!this.chat.words.includes("Jomao: ...ait.")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: P..ma.. can ..u. .ear me?")
                            this.chat.words.push("Pomao: Jomao? What are you doing here?")
                            this.chat.words.push("Jomao: Pom.o ..u dopey f..., ... not ...eally here")
                            this.chat.words.push("Pomao: I can't really hear you.")
                            this.chat.words.push("Jomao: ...ait.")
                            this.chat.words.push("Jomao: wait.")
                            this.chat.words.push("Jomao: Ok yeah, that should fix the sound.")
                            this.chat.words.push("Jomao: Pomao! Listen, there isn't much time")
                            this.chat.words.push("Jomao: The pomarines are enforcing a curfew tonight!")
                            this.chat.words.push("Jomao: You need to get home!")
                            this.chat.words.push("Jomao: Are you feeling controllery? or keyboardy?")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    }

                    break
                case 1:

                    if (this.controller == 1) {
                        if (!this.chat.words.includes("Jomao: You can use the right stick to direct your tongue.")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: You can use the right stick to direct your tongue.")
                            this.chat.words.push("Jomao: Your tongue can get you moving fast, or jumping high ")
                            this.chat.words.push("Jomao: A loose tongue can get you into tight places")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    } else {
                        if (!this.chat.words.includes("Jomao: You can use the space bar and IJKL to direct your tongue.")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: You can use the space bar and IJKL to direct your tongue.")
                            this.chat.words.push("Jomao: Your tongue can get you moving fast, or jumping high ")
                            this.chat.words.push("Jomao: A loose tongue can get you into tight places")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    }
                    break
                case 2:


                    if (this.controller == 1) {
                        if (!this.chat.words.includes("Jomao: You can hold the right-trigger to spit eggs with the right stick")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: You can hold the right-trigger to spit eggs with the right stick")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    } else {
                        if (!this.chat.words.includes("Jomao: You can press M to spit eggs, and aim with IJKL")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: You can press M to spit eggs, and aim with IJKL")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    }
                    break
                case 3:


                    if (this.controller == 1) {
                        if (!this.chat.words.includes("Jomao: You can hold down on the left stick to pass through floors,")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: You can hold down on the left stick to pass through floors,")
                            this.chat.words.push("and you can press X to slam toward the ground")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    } else {
                        if (!this.chat.words.includes("Jomao: You can hold S to pass through floors,")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: You can hold S to pass through floors,")
                            this.chat.words.push("Jomao: and you can press N to slam toward the ground")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    }
                    break
                case 4:


                    if (this.controller == 1) {
                        if (!this.chat.words.includes("Jomao: You climb walls with your tongue, try tapping away from the wall with the left stick")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: You climb walls with your tongue, try tapping away from the wall with the left stick")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    } else {
                        if (!this.chat.words.includes("Jomao: You climb walls with your tongue, try tapping away from the wall with A and D")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: You climb walls with your tongue, try tapping away from the wall with A and D")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    }
                    break
                case 5:
                    if (switches[0].button.state == 1) {

                        if (!this.chat.words.includes("Jomao: Nice, but keep moving, you gotta go up!")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: Nice, but keep moving, you gotta go up!")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }

                    } else {

                        if (!this.chat.words.includes("Jomao: Put an egg in the switch!")) {
                            this.chat = new Dialogue(this.body.x, this.body.y - 50)
                            this.chat.words.push("Jomao: Put an egg in the switch!")
                            this.chat.body.radius = 160
                            this.chat.timerbase = 200
                        }
                    }

                    break
                case 6:

                    if (!this.chat.words.includes("Jomao: You can't grapple ice! gotta pogo on your tongue and flutter up, be careful.")) {
                        this.chat = new Dialogue(this.body.x, this.body.y - 50)
                        this.chat.words.push("Jomao: You can't grapple ice! gotta pogo on your tongue and flutter up, be careful.")
                        this.chat.body.radius = 160
                        this.chat.timerbase = 200
                    }


                    break
                case 7:

                    if (!this.chat.words.includes("Jomao: The king of the targoys lair... Be brave Pomao! You need to defeat him to get through!")) {
                        this.chat = new Dialogue(this.body.x, this.body.y - 50)
                        this.chat.words.push("Jomao: The king of the targoys lair... Be brave Pomao! You need to defeat him to get through!")
                        this.chat.body.radius = 160
                        this.chat.timerbase = 200
                    }


                    break

            }

            if (pomao.body.x > this.body.x) {
                this.left = 0
            } else {
                this.left = 1
            }

            if (this.left == 0) {

                if (Math.random() < .4) {
                    this.height = 64
                    this.width = 64
                    tutorial_canvas_context.globalAlpha = Math.random()
                    tutorial_canvas_context.drawImage(jomaoholoimg, this.frame * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                    tutorial_canvas_context.drawImage(jomaoholoimg, this.frame * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                    tutorial_canvas_context.globalAlpha = 1

                } else {
                    if (Math.random() < .1) {
                        tutorial_canvas_context.globalAlpha = Math.random()
                        tutorial_canvas_context.drawImage(jomaoholoimg, 0, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                        tutorial_canvas_context.globalAlpha = 1

                        if (Math.random() < .5) {
                            tutorial_canvas_context.globalAlpha = Math.random()
                            tutorial_canvas_context.drawImage(jomaoholoimg, 0, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                            tutorial_canvas_context.globalAlpha = 1
                        }
                    } else {

                        if (Math.random() < .1) {
                            this.frame = (Math.floor(Math.random() * 19))
                        }
                        this.height = 64 + (.4 * Math.cos(Math.sin(pomao.timeloop + Math.PI))) + (Math.random() - .5) * 12
                        this.width = 64 + (Math.random() - .5) * 12
                        tutorial_canvas_context.globalAlpha = Math.random()
                        tutorial_canvas_context.drawImage(jomaoholoimg, this.frame * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                        tutorial_canvas_context.globalAlpha = 1
                        if (Math.random() > .7) {
                            tutorial_canvas_context.globalAlpha = Math.random()
                            tutorial_canvas_context.drawImage(jomaoholoimg, (this.frame + (Math.random() * .1)) * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                            tutorial_canvas_context.globalAlpha = 1
                        } if (Math.random() > .7) {
                            tutorial_canvas_context.globalAlpha = Math.random()
                            tutorial_canvas_context.drawImage(jomaoholoimg, (2 + this.frame + (Math.random() * .2)) * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                            tutorial_canvas_context.globalAlpha = 1
                        } if (Math.random() > .7) {
                            tutorial_canvas_context.globalAlpha = Math.random()
                            tutorial_canvas_context.drawImage(jomaoholoimg, (3 + this.frame + (Math.random() * .3)) * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                            tutorial_canvas_context.globalAlpha = 1
                        }
                    }

                }

            } else {

                if (Math.random() < .4) {
                    this.height = 64
                    this.width = 64
                    tutorial_canvas_context.drawImage(jomaoholoimgl, this.frame * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                    tutorial_canvas_context.drawImage(jomaoholoimgl, this.frame * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)

                } else {
                    if (Math.random() < .1) {
                        tutorial_canvas_context.drawImage(jomaoholoimgl, 0, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)

                        if (Math.random() < .5) {
                            tutorial_canvas_context.drawImage(jomaoholoimgl, 0, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                        }
                    } else {

                        if (Math.random() < .1) {
                            this.frame = (Math.floor(Math.random() * 19))
                        }
                        this.height = 64 + (.4 * Math.cos(Math.sin(pomao.timeloop + Math.PI))) + (Math.random() - .5) * 12
                        this.width = 64 + (Math.random() - .5) * 12
                        tutorial_canvas_context.drawImage(jomaoholoimgl, this.frame * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                        if (Math.random() > .7) {
                            tutorial_canvas_context.drawImage(jomaoholoimgl, (this.frame + (Math.random() * .1)) * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                        } if (Math.random() > .7) {
                            tutorial_canvas_context.drawImage(jomaoholoimgl, (2 + this.frame + (Math.random() * .2)) * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                        } if (Math.random() > .7) {
                            tutorial_canvas_context.drawImage(jomaoholoimgl, (3 + this.frame + (Math.random() * .3)) * 103, 0, 103, 121, this.body.x - (103 / 2), this.body.y - (121 / 2), this.width, this.height)
                        }
                    }

                }

            }

            this.chat.draw()
            if (this.chat.complete == 1) {
                if (triggerfinder.index == 0) {
                    if (this.picked < 1) {

                        this.box1 = new Rectangle(this.chat.box.x + 350, this.chat.box.y + 50, 100, 130, "red")
                        this.box2 = new Rectangle(this.chat.box.x + 570, this.chat.box.y + 50, 100, 130, "blue")
                        this.box1.draw()
                        this.box2.draw()
                    } else {

                    }
                }
            }
        }
    }

    class Flopper {
        constructor(x, y) {
            this.body = new Bosscircle(x, y, 14, "red")
            this.lump = new Bosscircle(x, y, 40, "transparent")
            this.link = new LineOP(this.body, this.lump, "yellow", 10)
            this.bodystopped = 0
            this.lumpstopped = 0
            this.metashape = []
            this.blockedbody = 0
            this.blockedlump = 0
            this.walker = 0
            this.walkcap = 76 + Math.floor(Math.random() * 17) * 2
            this.foot = 0
            this.dead = 0
            this.ratio = 1
            this.gravity = .15
            this.pops = []
            this.spin = 0
            this.castBetween(this.body, this.lump)
        }

        pop() {
            let rotx = 0
            let roty = 0
            let dots = Math.floor(Math.random() * 9) + 7
            for (let g = 0; g < dots; g++) {
                let color = "red"
                if (Math.random() < .3) {
                    color = "orange"
                }
                const dot1 = new Circlec(this.body.x, this.body.y, this.body.radius / 2, color, Math.cos(rotx) * 4, Math.sin(roty) * 4)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 17
                roty += 2 * Math.PI / 17
            }

        }
        popline() {
            let rotx = 0
            let roty = 0
            let dots = Math.floor(Math.random() * 8) + 6
            for (let t = 0; t < this.metashape[0].shapes.length; t++) {
                for (let g = 0; g < dots; g++) {
                    let color = "yellow"
                    if (Math.random() < .3) {
                        color = "orange"
                    }
                    const dot1 = new Circlec(this.metashape[0].shapes[t].x, this.metashape[0].shapes[t].y, this.metashape[0].shapes[t].radius / 1.2 + (Math.random() * 2), color, Math.cos(rotx) * 4 + Math.random(), Math.sin(roty) * 4 + Math.random())
                    this.pops.push(dot1)
                    // console.log(dot1)
                    rotx += 2 * Math.PI / 17 + Math.random()
                    roty += 2 * Math.PI / 17 + Math.random()
                }
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .79
                this.pops[t].move()
                if (Math.random() < .5) {
                    this.pops[t].draw()
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .11) {
                    this.pops.splice(t, 1)
                }
            }
        }
        castBetween(from, to) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
            let limit = new LineOP(from, to).hypotenuse() / (from.radius / 1.5)
            // console.log(from, to, target)
            let radius = from.radius
            let shape_array = []
            for (let t = 0; t < limit; t++) {
                let circ = new Bosscircle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "yellow")
                circ.target = this
                // circ.draw()
                circ.radius = this.body.radius / 3
                // circ.draw()
                circ.radius = from.radius
                shape_array.push(circ)
            }
            this.metashape.push((new Shape(shape_array)))
            return true;
        }
        draw() {

            // if(this.spin != 0){
            this.angleRadians = Math.atan2(this.lump.y - this.body.y, this.lump.x - this.body.x);

            this.lump.xmom += Math.cos(this.angleRadians + (Math.PI * .5)) * this.spin
            this.lump.ymom += Math.sin(this.angleRadians + (Math.PI * .5)) * this.spin
            // }


            if (this.dead == 1) {
                this.link.width = this.body.radius / 2
            } else {
                this.link.width = this.body.radius
            }
            if (Math.random() < .1) {

                for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                    if (this.lump.repelCheck(shockfriendly.shocksl[t])) {
                        this.lump.xmom += shockfriendly.shocksl[t].xmom * .9
                        this.lump.ymom += shockfriendly.shocksl[t].ymom * .9
                        break
                    }
                    if (this.lump.repelCheck(shockfriendly.shocksr[t])) {
                        this.lump.xmom += shockfriendly.shocksr[t].xmom * .9
                        this.lump.ymom += shockfriendly.shocksr[t].ymom * .9
                        break
                    }
                }
                for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                    if (this.body.repelCheck(shockfriendly.shocksl[t])) {
                        this.body.xmom += shockfriendly.shocksl[t].xmom * .9
                        this.body.ymom += shockfriendly.shocksl[t].ymom * .9
                        break
                    }
                    if (this.body.repelCheck(shockfriendly.shocksr[t])) {
                        this.body.xmom += shockfriendly.shocksr[t].xmom * .9
                        this.body.ymom += shockfriendly.shocksr[t].ymom * .9
                        break
                    }
                }

            }
            this.bodystopped = 0
            this.lumpstopped = 0
            this.body.ymom += .2
            if (this.spin == 0) {
                this.lump.ymom += this.gravity  // .2
            }
            if (this.body == this.lump) {
                this.spin = 0
            }
            this.walker++
            if (this.foot == 0) {
                this.foot = 1
                if (this.walker % this.walkcap == 0) {
                    if (pomao.body.x < this.lump.x) {
                        if (this.dead == 0) {
                            this.lump.xmom -= 4.9
                            this.lump.ymom -= 3.8
                        }
                    } else {
                        if (this.dead == 0) {
                            this.lump.xmom += 4.9
                            this.lump.ymom -= 3.8
                        }
                    }
                }
            } else {
                this.foot = 0
                if (this.dead != 1) {
                    if (this.walker % this.walkcap == 0) {
                        if (pomao.body.x < this.body.x) {
                            if (this.dead == 0) {
                                this.body.xmom -= 6.9
                                this.body.ymom -= 8.8
                            }
                        } else {
                            if (this.dead == 0) {
                                this.body.xmom += 6.9
                                this.body.ymom -= 8.8
                            }
                        }
                    }
                }
            }
            this.body.xmom *= .99
            this.lump.xmom *= .99
            this.lump.ymom *= .99
            if (Math.abs(this.lump.xmom) + Math.abs(this.lump.ymom) > 20) {
                this.lump.xmom *= .9
                this.lump.ymom *= .9
            }
            for (let t = 0; t < floors.length; t++) {
                if (squarecirclefeet(floors[t], this.body)) {
                    if (this.body.ymom > 0) {
                        this.body.ymom = 0
                        this.lumpstopped = 1
                    }
                }
                if (squarecirclefeet(floors[t], this.lump)) {
                    if (this.lump.ymom > 0) {
                        this.lump.ymom = 0
                        this.lumpstopped = 1
                    }
                }
            }
            for (let t = 0; t < floors.length; t++) {
                if (squarecirclehead(floors[t], this.body)) {
                    if (this.body.ymom < 0) {
                        this.body.ymom = 0
                        this.lumpstopped = 1
                    }
                }
                if (squarecirclehead(floors[t], this.lump)) {
                    if (this.lump.ymom < 0) {
                        this.lump.ymom = 0
                        this.lumpstopped = 1
                    }
                }
            }

            this.blockedbody = 0
            this.blockedlump = 0
            this.lump.xmom -= (this.lump.x - this.body.x) / 300
            this.lump.ymom -= (this.lump.y - this.body.y) / 300
            this.body.xmom -= (this.body.x - this.lump.x) / 200
            this.body.ymom -= (this.body.y - this.lump.y) / 200
            for (let t = 0; t < walls.length; t++) {
                if (squarecircleface(walls[t], this.body)) {

                    if (this.body.x > walls[t].x) {
                        this.blockedbody = 1
                    } else {
                        this.blockedbody = -1
                    }
                }
                if (squarecircleface(walls[t], this.lump)) {

                    if (this.lump.x > walls[t].x) {
                        this.blockedlump = 1
                    } else {
                        this.blockedlump = -1
                    }
                }
            }


            if (this.dead != 1) {
                this.body.move()
            }
            // this.lump.move()
            // if(this.dead == 0){
            this.lump.y += this.lump.ymom
            // }else{
            //     if(this.lump.ymom > 0){
            //         this.lump.y += this.lump.ymom
            //     }
            // }

            this.lump.xrepel = 0
            this.lump.yrepel = 0
            for (let f = 0; f < floppers.length; f++) {
                if (this !== floppers[f]) {
                    if (this.lump.repelCheck(floppers[f].lump)) {
                        const distance = ((new Line(floppers[f].lump.x, floppers[f].lump.y, this.lump.x, this.lump.y, 1, "red")).hypotenuse()) - (this.lump.radius * 2)
                        const angleRadians = Math.atan2(floppers[f].lump.y - this.lump.y, floppers[f].lump.x - this.lump.x);
                        this.lump.xrepel += (Math.cos(angleRadians) * distance) / 2
                        this.lump.yrepel += (Math.sin(angleRadians) * distance) / 2
                        // floppers[f].xrepelled = 1
                    }
                }
            }


            if (this.dead != 1) {
                if (this.blockedbody == 0) {
                    if (this.dead == 0) {
                        this.body.x += this.body.xmom
                    }
                    this.body.x += this.body.xrepel
                } else if (this.blockedbody == 1) {
                    if (this.body.xmom > 0) {
                        if (this.dead == 0) {
                            this.body.x += this.body.xmom
                        }
                    }
                    if (this.body.xrepel > 0) {
                        this.body.x += this.body.xrepel
                    }
                } else {
                    if (this.body.xmom < 0) {
                        if (this.dead == 0) {
                            this.body.x += this.body.xmom
                        }
                    }

                    if (this.body.xrepel < 0) {
                        this.body.x += this.body.xrepel
                    }
                }
            }

            if (this.blockedlump == 0) {
                // if(this.dead == 0){
                this.lump.x += this.lump.xmom
                // }
                this.lump.x += this.lump.xrepel
            } else if (this.blockedlump == 1) {
                if (this.lump.xmom > 0) {
                    // if(this.dead == 0){
                    this.lump.x += this.lump.xmom * 2
                    // }
                }
                if (this.lump.xrepel > 0) {
                    this.lump.x += this.lump.xrepel
                }
            } else {
                if (this.lump.xmom < 0) {
                    // if(this.dead == 0){
                    this.lump.x += this.lump.xmom * 2
                    // }
                }

                if (this.lump.xrepel < 0) {
                    this.lump.x += this.lump.xrepel
                }
            }
            if (this.lump.x > pomao.body.x) {
                this.bump = 1
            } else {
                this.bump = -1
            }
            this.rbody = this.body.radius
            this.body.radius *= 1.5
            this.psto = pomao.body.radius
            pomao.body.radius *= 5

            this.shadowstrike = new Circlec(pomao.body.x, pomao.body.y + 22, 33, "blue")
            if (this.shadowstrike.isPointInside(this.body)) {
                if (this.body.y > pomao.body.y + 3) {
                    pomao.body.ymom = 0
                    pomao.hng *= .5
                    pomao.body.symom += -5
                    this.lump.ymom += 2
                    if (pomao.pounding == 10) {
                        this.lump.ymom += 1
                    }
                }
            }
            pomao.body.radius = this.psto
            this.body.radius = this.rbody
            this.metashape = []
            this.castBetween(this.body, this.lump)
            if (this.lump.repelCheck(pomao.body)) {
                if (pomao.disabled != 1) {
                    if (pomao.pounding != 10) {
                        pomao.body.xmom = -3 * (this.bump)
                        pomao.disabled = 1
                        pomao.hits -= 2
                        pomao.body.ymom = -1.8
                        this.lump.xmom += -pomao.body.xmom * 5 * this.ratio
                        this.lump.ymom += 2.8  //1.8
                        if (this.dead != 1) {
                            this.body.xmom += -pomao.body.xmom * 5 * this.ratio
                            this.lump.ymom += 1.8
                        }
                    } else {
                        pomao.body.xmom = -3 * (this.bump)
                        pomao.disabled = 1
                        pomao.hits -= 2
                        pomao.body.ymom = -1.8
                        pomao.pounding = 0
                        this.lump.xmom += -pomao.body.xmom * 3 * this.ratio
                        this.lump.ymom += 2.8
                        if (this.dead != 1) {
                            this.body.xmom += -pomao.body.xmom * 3 * this.ratio
                            this.lump.ymom += 1.8
                        }
                    }
                } else {
                    if (this.bump * pomao.body.xmom > 0) {
                        pomao.body.xmom = -1.8 * (this.bump)
                        pomao.body.ymom = -1.8
                        this.lump.xmom += -pomao.body.xmom * 3 * this.ratio
                        this.lump.ymom += 2.8
                        if (this.dead != 1) {
                            this.body.xmom += -pomao.body.xmom * 3 * this.ratio
                            this.lump.ymom += 2.8
                        }
                    }
                }
            }

            this.psto = pomao.body.radius
            pomao.body.radius *= .25
            for (let t = 0; t < this.metashape.length; t++) {

                for (let k = 0; k < pomao.thrown.length; k++) {
                    if (this.dead == 0) {
                        if (this.lump.isPointInside(pomao.thrown[k])) {
                            this.pop()
                            this.popline()
                            this.body = this.lump
                            this.walker += .5
                            this.link.color = "transparent"
                            this.dead = 1
                        }
                        if (this.body.isPointInside(pomao.thrown[k])) {
                            this.pop()
                            this.popline()
                            this.body = this.lump
                            this.walker += .5
                            this.link.color = "transparent"
                            this.dead = 1
                        }
                    } else {
                        if (this.body != this.lump) {
                            if (this.lump.isPointInside(pomao.thrown[k])) {
                                this.body.radius *= .955
                            }
                            if (this.body.isPointInside(pomao.thrown[k])) {
                                this.body.radius *= .955
                            }

                            if (this.body.radius < 5) {
                                this.body = this.lump
                                this.walker += .5
                                this.link.color = "transparent"
                                this.dead = 1
                            }
                        }
                    }
                }
                if (this.dead == 0) {
                    // if (this.metashape[0].shapes[0].x > pomao.body.x) {
                    //     this.bump = 1
                    // } else {
                    //     this.bump = -1
                    // }
                } else {
                    this.bump = 0
                }

                if (this.metashape[t].isPointInside(pomao.body)) {
                    if (pomao.disabled != 1) {
                        if (pomao.pounding != 10) {
                            pomao.body.xmom = -2 * (this.bump)
                            // pomao.disabled = 1
                            // pomao.hits--
                            pomao.body.ymom = -1.1
                            this.lump.xmom += -pomao.body.xmom * 5 * this.ratio
                            // this.lump.ymom += 1.8 // culprit?
                            if (this.dead != 1) {
                                this.body.xmom += -pomao.body.xmom * 5 * this.ratio
                                // this.lump.ymom += 1.8
                            }
                        } else {
                            pomao.body.xmom = -2 * (this.bump)
                            // pomao.disabled = 1
                            // pomao.hits--
                            pomao.body.ymom = -1.1
                            pomao.pounding = 0
                            this.lump.xmom += -pomao.body.xmom * 3 * this.ratio
                            // this.lump.ymom += 1.8
                            if (this.dead != 1) {
                                this.body.xmom += -pomao.body.xmom * 3 * this.ratio
                                // this.lump.ymom += 1.8
                            }
                        }
                    } else {
                        if (this.bump * pomao.body.xmom > 0) {
                            pomao.body.xmom = -1.1 * (this.bump)
                            pomao.body.ymom = -1.1
                            this.lump.xmom += -pomao.body.xmom * 3 * this.ratio
                            // this.lump.ymom += 1.8
                            if (this.dead != 1) {
                                this.body.xmom += -pomao.body.xmom * 3 * this.ratio
                                // this.lump.ymom += 1.8
                            }
                        }
                    }


                }
                for (let k = 0; k < pomao.thrown.length; k++) {
                    if (this.dead == 0) {
                        if (this.metashape[t].isPointInside(pomao.thrown[k])) {
                            this.pop()
                            this.popline()
                            this.body = this.lump
                            this.walker += .5
                            this.link.color = "transparent"
                            this.dead = 1
                        }
                        if (this.lump.isPointInside(pomao.thrown[k])) {
                            this.pop()
                            this.popline()
                            this.body = this.lump
                            this.walker += .5
                            this.link.color = "transparent"
                            this.dead = 1
                        }
                        if (this.body.isPointInside(pomao.thrown[k])) {
                            this.pop()
                            this.popline()
                            this.body = this.lump
                            this.walker += .5
                            this.link.color = "transparent"
                            this.dead = 1
                        }
                    } else {
                        if (this.body != this.lump) {
                            if (this.metashape[t].isPointInside(pomao.thrown[k])) {
                                this.body.radius *= .955
                            }
                            if (this.lump.isPointInside(pomao.thrown[k])) {
                                this.body.radius *= .955
                            }
                            if (this.body.isPointInside(pomao.thrown[k])) {
                                this.body.radius *= .955
                            }
                            if (this.body.radius < 5) {
                                this.body = this.lump
                                this.walker += .5
                                this.link.color = "transparent"
                                this.dead = 1
                            }
                        }
                    }
                }
                pomao.body.radius = this.psto
            }
            this.popdraw()
            // this.link.draw()
            // this.lump.draw()
            // this.body.draw()


            for (let t = 0; t < this.metashape[0].shapes.length; t++) {
                this.metashape[0].shapes[t].radius = this.body.radius * .35
                tutorial_canvas_context.drawImage(smallyellowcircle, 0, 0, smallyellowcircle.width, smallyellowcircle.height, this.metashape[0].shapes[t].x - this.metashape[0].shapes[t].radius, this.metashape[0].shapes[t].y - this.metashape[0].shapes[t].radius, this.metashape[0].shapes[t].radius * 2, this.metashape[0].shapes[t].radius * 2)
                this.metashape[0].shapes[t].radius = this.body.radius
            }

            if (this.body != this.lump) {
                tutorial_canvas_context.drawImage(redcircleimg, 0, 0, redcircleimg.width, redcircleimg.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
            }
            tutorial_canvas_context.drawImage(spikeenemyimg, 0, 0, spikeenemyimg.width, spikeenemyimg.height, this.lump.x - (this.lump.radius * 1.1), this.lump.y - (this.lump.radius * 1.1), this.lump.radius * 2.2, this.lump.radius * 2.2)

            // if(this.dead == 1){

            this.boing = 0
            for (let t = 0; t < this.metashape.length; t++) {
                if (this.metashape[t].isPointInside(pomao.tongue)) {
                    this.boing = 1
                }
            }

            if ((this.lump.isPointInside(pomao.tongue) || ((typeof this.lump.radius == "number") && (pomao.tonguebox.isInsideOf(this.lump) || this.lump.repelCheck(pomao.tongue)))) || this.boing) {
                this.boing = 1
            }
            if ((this.body.isPointInside(pomao.tongue) || ((typeof this.body.radius == "number") && (pomao.tonguebox.isInsideOf(this.body) || this.body.repelCheck(pomao.tongue)))) || this.boing) {
                if (pomao.tongueymom < 0) {
                    if (Math.abs(pomao.tonguey) > 1) {
                        pomao.body.symom += pomao.tongueymom * 1.1
                    }
                    if (Math.abs(pomao.tonguex) > 15) {
                        if (pomao.dir == -1) {
                            pomao.body.sxmom -= Math.abs(pomao.tonguexmom * 3)
                        } else {
                            pomao.body.sxmom += Math.abs(pomao.tonguexmom * 3)
                        }
                    }
                    pomao.tongueymom *= .49
                    pomao.tonguexmom *= .49
                } else {
                    if (Math.abs(pomao.tonguey) > 1) {
                        pomao.body.symom -= pomao.tongueymom * 1.1
                    }
                    if (Math.abs(pomao.tonguex) > 15) {
                        if (pomao.dir == -1) {
                            pomao.body.sxmom -= Math.abs(pomao.tonguexmom * 3)
                        } else {
                            pomao.body.sxmom += Math.abs(pomao.tonguexmom * 3)
                        }
                    }

                }
                if (pomao.body.ymom > 0) {
                    pomao.body.ymomstorage = pomao.body.ymom + pomao.body.symom
                }
                pomao.body.ymom = 0
                pomao.body.xmom *= .975
                // pomao.hng = 0  // infiinite flutter?
                pomao.dry = 1
                pomao.body.symom -= .0005
                if (this.lump.isPointInside(pomao.tongue)) {
                    this.lump.xmom += pomao.body.sxmom * .5
                }
            }
            // }
        }


    }

    class FlopperNoGravity {
        constructor(x, y) {
            this.body = new Bosscircle(x, y, 14, "transparent")
            this.lump = new Bosscircle(x, y, 40, "transparent")
            this.link = new LineOP(this.body, this.lump, "transparent", 10)
            this.bodystopped = 0
            this.lumpstopped = 0
            this.metashape = []
            this.blockedbody = 0
            this.blockedlump = 0
            this.walker = 0
            this.walkcap = 76 + Math.floor(Math.random() * 17) * 2
            this.foot = 0
            this.dead = 1
        }
        castBetween(from, to) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
            let limit = new LineOP(from, to).hypotenuse() / (from.radius * 2)
            // console.log(from, to, target)
            let radius = from.radius
            let shape_array = []
            for (let t = 0; t < limit; t++) {
                let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "gray")
                circ.target = this
                // circ.draw()
                // circ.draw()
                shape_array.push(circ)
            }
            this.metashape.push((new Shape(shape_array)))
            return true;
        }
        draw() {




            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                if (this.lump.repelCheck(shockfriendly.shocksl[t])) {
                    this.lump.xmom += shockfriendly.shocksl[t].xmom * .09
                    this.lump.ymom += shockfriendly.shocksl[t].ymom * .09
                    break
                }
                if (this.lump.repelCheck(shockfriendly.shocksr[t])) {
                    this.lump.xmom += shockfriendly.shocksr[t].xmom * .09
                    this.lump.ymom += shockfriendly.shocksr[t].ymom * .09
                    break
                }
            }
            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                if (this.body.repelCheck(shockfriendly.shocksl[t])) {
                    this.body.xmom += shockfriendly.shocksl[t].xmom * .09
                    this.body.ymom += shockfriendly.shocksl[t].ymom * .09
                    break
                }
                if (this.body.repelCheck(shockfriendly.shocksr[t])) {
                    this.body.xmom += shockfriendly.shocksr[t].xmom * .09
                    this.body.ymom += shockfriendly.shocksr[t].ymom * .09
                    break
                }
            }

            this.bodystopped = 0
            this.lumpstopped = 0

            this.body.ymom += .2
            this.lump.ymom += .15  // .2

            this.walker++

            if (this.foot == 0) {
                this.foot = 1
                if (this.walker % this.walkcap == 0) {
                    if (pomao.body.x < this.lump.x) {
                        if (this.dead == 0) {
                            this.lump.xmom -= 4.9
                            this.lump.ymom -= 3.8
                        }
                    } else {
                        if (this.dead == 0) {
                            this.lump.xmom += 4.9
                            this.lump.ymom -= 3.8
                        }
                    }
                }
            } else {
                this.foot = 0
                if (this.dead != 1) {
                    if (this.walker % this.walkcap == 0) {
                        if (pomao.body.x < this.body.x) {
                            if (this.dead == 0) {
                                this.body.xmom -= 6.9
                                this.body.ymom -= 8.8
                            }
                        } else {
                            if (this.dead == 0) {
                                this.body.xmom += 6.9
                                this.body.ymom -= 8.8
                            }
                        }
                    }
                }
            }
            this.body.xmom *= .99
            this.lump.xmom *= .99
            for (let t = 0; t < floors.length; t++) {
                if (squarecirclefeet(floors[t], this.body)) {
                    if (this.body.ymom > 0) {
                        this.body.ymom = 0
                        this.lumpstopped = 1
                    }
                }
                if (squarecirclefeet(floors[t], this.lump)) {
                    if (this.lump.ymom > 0) {
                        this.lump.ymom = 0
                        this.lumpstopped = 1
                    }
                }
            }

            this.blockedbody = 0
            this.blockedlump = 0
            this.lump.xmom -= (this.lump.x - this.body.x) / 300
            this.lump.ymom -= (this.lump.y - this.body.y) / 300
            this.body.xmom -= (this.body.x - this.lump.x) / 200
            this.body.ymom -= (this.body.y - this.lump.y) / 200
            for (let t = 0; t < walls.length; t++) {
                if (squarecircleface(walls[t], this.body)) {

                    if (this.body.x > walls[t].x) {
                        this.blockedbody = 1
                    } else {
                        this.blockedbody = -1
                    }
                }
                if (squarecircleface(walls[t], this.lump)) {

                    if (this.lump.x > walls[t].x) {
                        this.blockedlump = 1
                    } else {
                        this.blockedlump = -1
                    }
                }
            }


            if (this.dead != 1) {
                this.body.move()
            }
            // this.lump.move()
            // if(this.dead == 0){
            this.lump.y += this.lump.ymom
            // }else{
            //     if(this.lump.ymom > 0){
            //         this.lump.y += this.lump.ymom
            //     }
            // }

            this.lump.xrepel = 0
            this.lump.yrepel = 0
            for (let f = 0; f < floppers.length; f++) {
                if (this !== floppers[f]) {
                    if (this.lump.repelCheck(floppers[f].lump)) {
                        const distance = ((new Line(floppers[f].lump.x, floppers[f].lump.y, this.lump.x, this.lump.y, 1, "red")).hypotenuse()) - (this.lump.radius * 2)
                        const angleRadians = Math.atan2(floppers[f].lump.y - this.lump.y, floppers[f].lump.x - this.lump.x);
                        this.lump.xrepel += (Math.cos(angleRadians) * distance) / 2
                        this.lump.yrepel += (Math.sin(angleRadians) * distance) / 2
                        // floppers[f].xrepelled = 1
                    }
                }
            }


            if (this.dead != 1) {
                if (this.blockedbody == 0) {
                    if (this.dead == 0) {
                        this.body.x += this.body.xmom
                    }
                    this.body.x += this.body.xrepel
                } else if (this.blockedbody == 1) {
                    if (this.body.xmom > 0) {
                        if (this.dead == 0) {
                            this.body.x += this.body.xmom
                        }
                    }
                    if (this.body.xrepel > 0) {
                        this.body.x += this.body.xrepel
                    }
                } else {
                    if (this.body.xmom < 0) {
                        if (this.dead == 0) {
                            this.body.x += this.body.xmom
                        }
                    }

                    if (this.body.xrepel < 0) {
                        this.body.x += this.body.xrepel
                    }
                }
            }

            if (this.blockedlump == 0) {
                // if(this.dead == 0){
                this.lump.x += this.lump.xmom
                // }
                this.lump.x += this.lump.xrepel
            } else if (this.blockedlump == 1) {
                if (this.lump.xmom > 0) {
                    // if(this.dead == 0){
                    this.lump.x += this.lump.xmom * 2
                    // }
                }
                if (this.lump.xrepel > 0) {
                    this.lump.x += this.lump.xrepel
                }
            } else {
                if (this.lump.xmom < 0) {
                    // if(this.dead == 0){
                    this.lump.x += this.lump.xmom * 2
                    // }
                }

                if (this.lump.xrepel < 0) {
                    this.lump.x += this.lump.xrepel
                }
            }
            if (this.lump.x > pomao.body.x) {
                this.bump = 1
            } else {
                this.bump = -1
            }
            this.metashape = []
            this.castBetween(this.body, this.lump)
            if (this.lump.repelCheck(pomao.body)) {
                if (pomao.disabled != 1) {
                    if (pomao.pounding != 10) {
                        pomao.body.xmom = -3 * (this.bump)
                        pomao.disabled = 1
                        pomao.hits -= 2
                        pomao.body.ymom = -1.8
                        this.lump.xmom += -pomao.body.xmom * 5
                        if (this.dead != 1) {
                            this.body.xmom += -pomao.body.xmom * 5
                        }
                    } else {
                        pomao.body.xmom = -3 * (this.bump)
                        pomao.disabled = 1
                        pomao.hits -= 2
                        pomao.body.ymom = -1.8
                        pomao.pounding = 0
                        this.lump.xmom += -pomao.body.xmom * 3
                        if (this.dead != 1) {
                            this.body.xmom += -pomao.body.xmom * 3
                        }
                    }
                } else {
                    if (this.bump * pomao.body.xmom > 0) {
                        pomao.body.xmom = -1.8 * (this.bump)
                        pomao.body.ymom = -1.8
                        this.lump.xmom += -pomao.body.xmom * 3
                        if (this.dead != 1) {
                            this.body.xmom += -pomao.body.xmom * 3
                        }
                    }
                }
            }
            // this.psto = pomao.body.radius
            // pomao.body.radius *= .25
            for (let t = 0; t < this.metashape.length; t++) {

                for (let k = 0; k < pomao.thrown.length; k++) {
                    if (this.lump.isPointInside(pomao.thrown[k])) {
                        this.body = this.lump
                        this.walker += .5
                        this.link.color = "transparent"
                        this.dead = 1
                    }
                    if (this.body.isPointInside(pomao.thrown[k])) {
                        this.body = this.lump
                        this.walker += .5
                        this.link.color = "transparent"
                        this.dead = 1
                    }
                }
                if (this.metashape[0].x > pomao.body.x) {
                    this.bump = 1
                } else {
                    this.bump = -1
                }
                if (this.metashape[t].isPointInside(pomao.body)) {
                    if (pomao.disabled != 1) {
                        if (pomao.pounding != 10) {
                            pomao.body.xmom = -2 * (this.bump)
                            // pomao.disabled = 1
                            // pomao.hits--
                            pomao.body.ymom = -1.1
                            this.lump.xmom += -pomao.body.xmom * 5
                            if (this.dead != 1) {
                                this.body.xmom += -pomao.body.xmom * 5
                            }
                        } else {
                            pomao.body.xmom = -2 * (this.bump)
                            // pomao.disabled = 1
                            // pomao.hits--
                            pomao.body.ymom = -1.1
                            pomao.pounding = 0
                            this.lump.xmom += -pomao.body.xmom * 3
                            if (this.dead != 1) {
                                this.body.xmom += -pomao.body.xmom * 3
                            }
                        }
                    } else {
                        if (this.bump * pomao.body.xmom > 0) {
                            pomao.body.xmom = -1.1 * (this.bump)
                            pomao.body.ymom = -1.1
                            this.lump.xmom += -pomao.body.xmom * 3
                            if (this.dead != 1) {
                                this.body.xmom += -pomao.body.xmom * 3
                            }
                        }
                    }
                    for (let k = 0; k < pomao.thrown.length; k++) {
                        if (this.metashape[t].isPointInside(pomao.thrown[k])) {
                            this.body = this.lump
                            this.walker += .5
                            this.link.color = "transparent"
                            this.dead = 1
                        }
                        if (this.lump.isPointInside(pomao.thrown[k])) {
                            this.body = this.lump
                            this.walker += .5
                            this.link.color = "transparent"
                            this.dead = 1
                        }
                        if (this.body.isPointInside(pomao.thrown[k])) {
                            this.body = this.lump
                            this.walker += .5
                            this.link.color = "transparent"
                            this.dead = 1
                        }
                    }
                }
            }
            // pomao.body.radius = this.psto
            this.link.draw()
            // this.lump.draw()
            this.body.draw()
            tutorial_canvas_context.drawImage(spikeenemyimg, 0, 0, spikeenemyimg.width, spikeenemyimg.height, this.lump.x - this.lump.radius, this.lump.y - this.lump.radius, this.lump.radius * 2, this.lump.radius * 2)

        }


    }


    class ObserverLaser {
        constructor(x, y, radius, color, range = 40000, rays = 10, angle = (Math.PI * .125)) {
            this.body = new Bosscircle(x, y, radius, color)
            this.color = color
            this.ray = []
            this.rayrange = range
            this.globalangle = Math.PI
            this.gapangle = angle
            this.currentangle = 0
            this.obstacles = []
            this.raymake = rays
            this.points = [[this.body.x, this.body.y]]
            this.pomaosighted = 0
            this.sight = {}
            this.sight.x = 0
            this.sight.y = 0
        }
        beam() {

            this.pomaosighted = 0
            this.obstacles = [...beamrocks]
            this.obstacles.push(pomao.body)

            this.points = [[this.body.x, this.body.y]]
            this.currentangle = this.gapangle / 2
            for (let k = 0; k < this.raymake; k++) {
                this.currentangle += (this.gapangle / Math.ceil(this.raymake / 2))
                let ray = new Circle(this.body.x, this.body.y, 1, "white", (((Math.cos(this.globalangle + this.currentangle)))), (((Math.sin(this.globalangle + this.currentangle)))))
                ray.collided = 0
                ray.lifespan = this.rayrange - 1
                this.ray.push(ray)
            }
            for (let f = 0; f < this.rayrange; f++) {
                for (let t = 0; t < this.ray.length; t++) {
                    if (this.ray[t].collided < 1) {
                        this.ray[t].move()
                        for (let q = 0; q < this.obstacles.length; q++) {
                            if (this.obstacles[q].isPointInside(this.ray[t])) {
                                if (this.obstacles[q] == pomao.body) {
                                    this.ray[t].xmom = 0
                                    this.ray[t].ymom = 0

                                    this.pomaosighted = 1
                                }
                                // this.ray[t].collided = 1
                                if (Math.abs(this.obstacles[q].x - this.ray[t].x) <= Math.abs(this.ray[t].xmom * 1.1) || Math.abs((this.obstacles[q].x + this.obstacles[q].width) - this.ray[t].x) <= Math.abs(this.ray[t].xmom * 1.1)) {
                                    this.ray[t].x -= this.ray[t].xmom
                                    this.ray[t].x -= this.ray[t].xmom
                                    this.ray[t].xmom *= -1
                                    this.ray[t].x += this.ray[t].xmom
                                    this.ray[t].x += this.ray[t].xmom
                                }
                                if (Math.abs(this.obstacles[q].y - this.ray[t].y) <= Math.abs(this.ray[t].ymom * 1.1) || Math.abs((this.obstacles[q].y + this.obstacles[q].height) - this.ray[t].y) <= Math.abs(this.ray[t].ymom * 1.1)) {
                                    this.ray[t].y -= this.ray[t].ymom
                                    this.ray[t].y -= this.ray[t].ymom
                                    this.ray[t].ymom *= -1
                                    this.ray[t].y += this.ray[t].ymom
                                    this.ray[t].y += this.ray[t].ymom
                                }
                                this.points.push([this.ray[t].x, this.ray[t].y])
                                // this.ray[t].ymom*=-1

                                if (this.points.length > 1) {
                                    this.sight.x = this.points[1][0]
                                    this.sight.y = this.points[1][1]
                                }

                            }
                        }
                    }
                    if (f == this.rayrange - 1) {
                        this.points.push([this.ray[t].x, this.ray[t].y])
                    }
                }
            }
        }
        draw() {
            this.beam()
            // this.body.draw()


            tutorial_canvas_context.lineWidth = 5.5
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.strokeStyle = this.color


            if (this.body.color == "#FF0000") {
                tutorial_canvas_context.strokeStyle = "#FF000088"
                tutorial_canvas_context.fillStyle = "#FF000088"
            }
            if (this.body.color == "#FFFF00") {
                tutorial_canvas_context.strokeStyle = "#FFFF0088"
                tutorial_canvas_context.fillStyle = "#FFFF0088"
            }
            if (this.body.color == "#0000FF") {
                tutorial_canvas_context.strokeStyle = "#0000FF88"
                tutorial_canvas_context.fillStyle = "#0000FF88"
            }
            tutorial_canvas_context.beginPath()
            tutorial_canvas_context.moveTo(this.body.x, this.body.y)
            // for (let y = 0; y < this.ray.length; y++) {
            //     canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
            //     canvas_context.lineTo(this.body.x, this.body.y)
            // }
            for (let t = 1; t < this.points.length; t++) {
                tutorial_canvas_context.lineTo(this.points[t][0], this.points[t][1])
                // canvas_context.lineTo(this.body.x, this.body.y)
            }


            tutorial_canvas_context.stroke()
            tutorial_canvas_context.closePath()

            if (this.body.color == "#FF0000") {
                tutorial_canvas_context.drawImage(redcircleimg, 0, 0, redcircleimg.width, redcircleimg.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
            }
            if (this.body.color == "#FFFF00") {
                tutorial_canvas_context.drawImage(smallyellowcircle, 0, 0, smallyellowcircle.width, smallyellowcircle.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
            }
            if (this.body.color == "#0000FF") {
                tutorial_canvas_context.drawImage(bluecircleimg, 0, 0, bluecircleimg.width, bluecircleimg.height, this.body.x - this.body.radius, this.body.y - this.body.radius, this.body.radius * 2, this.body.radius * 2)
            }
            // canvas_context.fill()
            this.ray = []
        }
    }
    function setUp(canvas_pass, style = "#050505") {
        canvas = canvas_pass
        canvas_context = canvas.getContext('2d');
        canvas.style.background = style
        window.setInterval(function () {
            main()
        }, 18)
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });
        window.addEventListener('pointerdown', e => {
            // for(let t = 0;t<enemies.length;t++){
            //     enemies[t].type += 1
            // }
        });
        // window.addEventListener('pointerup', e => {
        //     window.removeEventListener("pointermove", continued_stimuli);
        // })

        canvas.addEventListener('pointermove', continued_stimuli);
        function continued_stimuli(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine




        }
    }
    function gamepad_control(object, speed = 1) { // basic control for objects using the controler
        console.log(gamepadAPI.axesStatus[1] * gamepadAPI.axesStatus[0])
        if (typeof object.body != 'undefined') {
            if (typeof (gamepadAPI.axesStatus[1]) != 'undefined') {
                if (typeof (gamepadAPI.axesStatus[0]) != 'undefined') {
                    object.body.x += (gamepadAPI.axesStatus[2] * speed)
                    object.body.y += (gamepadAPI.axesStatus[1] * speed)
                }
            }
        } else if (typeof object != 'undefined') {
            if (typeof (gamepadAPI.axesStatus[1]) != 'undefined') {
                if (typeof (gamepadAPI.axesStatus[0]) != 'undefined') {
                    object.x += (gamepadAPI.axesStatus[0] * speed)
                    object.y += (gamepadAPI.axesStatus[1] * speed)
                }
            }
        }
    }
    function control(object, speed = 1) { // basic control for objects
        if (typeof object.body != 'undefined') {
            if (keysPressed['w']) {
                object.body.y -= speed
            }
            if (keysPressed['d']) {
                object.body.x += speed
            }
            if (keysPressed['s']) {
                object.body.y += speed
            }
            if (keysPressed['a']) {
                object.body.x -= speed
            }
        } else if (typeof object != 'undefined') {
            if (keysPressed['w']) {
                object.y -= speed
            }
            if (keysPressed['d']) {
                object.x += speed
            }
            if (keysPressed['s']) {
                object.y += speed
            }
            if (keysPressed['a']) {
                object.x -= speed
            }
        }
    }

    class Rocketbox {
        constructor(x, y) {
            this.body = new Rectangle(x, y, 50, 50, "white")
            this.angle = 0
            this.dead = 0
            this.bodysize = 40
            this.maxhealth = 1800
            this.observer = new ObserverLaser(this.body.x + (this.body.width * .5), this.body.y + (this.body.height * .5), this.bodysize, "#FF0000", 4000, 1, 0)
            this.observer.type = 1
            this.observer.health = this.maxhealth
            this.observer2 = new ObserverLaser(this.body.x + (this.body.width * .5), this.body.y + (this.body.height * .5), this.bodysize, "#0000FF", 4000, 1, 0)
            this.observer2.type = 2
            this.observer2.health = this.maxhealth
            this.observer3 = new ObserverLaser(this.body.x + (this.body.width * .5), this.body.y + (this.body.height * .5), this.bodysize, "#FFFF00", 4000, 1, 0)
            this.observer3.type = 3
            this.observer3.health = this.maxhealth
            this.center = new Point(this.observer.body.x, this.observer.body.y)
            this.dis = 120 //90
            this.links = []
            let link1 = new LineOP(this.observer.body, this.observer2.body, "#191919", 15)
            this.links.push(link1)
            let link2 = new LineOP(this.observer.body, this.observer3.body, "#191919", 15)
            this.links.push(link2)
            let link3 = new LineOP(this.observer2.body, this.observer3.body, "#191919", 15)
            this.links.push(link3)
            this.rockets = []
            this.shot = 0
            this.pops = []
        }
        pop() {
            let rotx = 0
            let roty = 0
            let dots = Math.floor(Math.random() * 19) + 17
            for (let g = 0; g < dots; g++) {
                let color = this.observer.body.color
                let dot1 = new Circlec(this.observer.body.x, this.observer.body.y, this.observer.body.radius, color, Math.cos(rotx) * 14, Math.sin(roty) * 14)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 17
                roty += 2 * Math.PI / 17
                // }
                // for (let g = 0; g < dots; g++) {
                color = this.observer2.body.color
                dot1 = new Circlec(this.observer2.body.x, this.observer2.body.y, this.observer2.body.radius, color, Math.cos(rotx) * 14, Math.sin(roty) * 14)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 17
                roty += 2 * Math.PI / 17
                // }
                // for (let g = 0; g < dots; g++) {
                color = this.observer3.body.color
                dot1 = new Circlec(this.observer3.body.x, this.observer3.body.y, this.observer3.body.radius, color, Math.cos(rotx) * 14, Math.sin(roty) * 14)
                this.pops.push(dot1)
                rotx += 2 * Math.PI / 17
                roty += 2 * Math.PI / 17
            }

        }
        popdraw() {
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
            for (let t = 0; t < this.pops.length; t++) {
                this.pops[t].radius *= .97
                this.pops[t].move()
                this.pops[t].draw()
            }
            for (let t = 0; t < this.pops.length; t++) {
                if (this.pops[t].radius < .1) {
                    this.pops.splice(t, 1)
                }
            }
        }
        draw() {
            // this.body.draw()



            this.kicker = 0
            if (this.observer.health <= 0) {
                this.kicker += 1
                this.observer.health = 0
            }
            if (this.observer2.health <= 0) {
                this.kicker += 1
                this.observer2.health = 0
            }
            if (this.observer3.health <= 0) {
                this.kicker += 1
                this.observer3.health = 0
            }
            if (this.kicker >= 2) {
                if (this.dead == 0) {
                    this.pop()
                }
                if (this.dead == 10) {
                    this.pop()
                }
                if (this.dead == 20) {
                    this.pop()
                }
                if (this.dead == 30) {
                    this.pop()
                }
                this.dead++
                lvl7bosssong.pause()
            } else {
                if (this.rockets.length > 0) {

                    lvl7bosssong.playbackRate = .5 + (1 - (.5 * ((this.observer.health + this.observer2.health + this.observer3.health) / (3 * this.maxhealth))));
                    lvl7bosssong.play()
                }
            }


            if (this.dead == 0) {


                this.obstacles = [...beamrocks]
                this.shot++
                this.shot %= 6

                this.observer.body.x = this.center.x + (Math.cos(this.observer.globalangle) * this.dis)
                this.observer.body.y = this.center.y + (Math.sin(this.observer.globalangle) * this.dis)

                this.observer2.body.x = this.center.x + (Math.cos(this.observer2.globalangle) * this.dis)
                this.observer2.body.y = this.center.y + (Math.sin(this.observer2.globalangle) * this.dis)

                this.observer3.body.x = this.center.x + (Math.cos(this.observer3.globalangle) * this.dis)
                this.observer3.body.y = this.center.y + (Math.sin(this.observer3.globalangle) * this.dis)


                if (this.observer.health > 0) {
                    this.observer.globalangle += 0.00725
                }

                if (this.observer2.health > 0) {
                    this.observer2.globalangle -= 0.00725  //((this.observer2.globalangle*9)+(Math.PI*1)+(Math.atan2(this.observer2.body.y-pomao.body.y,this.observer2.body.x-pomao.body.x)))/10
                }


                if (this.observer3.health > 0) {
                    this.observer3.globalangle = ((this.observer3.globalangle * 99) + (Math.PI * 1) + (Math.atan2(this.observer3.body.y - pomao.body.y, this.observer3.body.x - pomao.body.x))) / 100
                }


                if (this.shot == 0) {
                    if (this.observer.pomaosighted == 1) {
                        let link = new LineOP(this.observer.sight, this.observer.body).hypotenuse()
                        let rocket = new Bosscircle(this.observer.body.x, this.observer.body.y, 10, "red", (this.observer.body.x - this.observer.sight.x) / (link * -0.18), (this.observer.body.y - this.observer.sight.y) / (link * -0.18))
                        rocket.type = 1
                        if (this.observer.health > 0) {
                            this.rockets.push(rocket)
                        }
                    }
                    if (this.observer2.pomaosighted == 1) {
                        let link = new LineOP(this.observer2.sight, this.observer2.body).hypotenuse()
                        let rocket = new Bosscircle(this.observer2.body.x, this.observer2.body.y, 10, "blue", (this.observer2.body.x - this.observer2.sight.x) / (link * -0.18), (this.observer2.body.y - this.observer2.sight.y) / (link * -0.18))
                        rocket.type = 2
                        if (this.observer2.health > 0) {
                            this.rockets.push(rocket)
                        }
                    }
                    if (this.observer3.pomaosighted == 1) {
                        let link = (new LineOP(this.observer3.sight, this.observer3.body)).hypotenuse()
                        let rocket = new Bosscircle(this.observer3.body.x, this.observer3.body.y, 10, "yellow", (this.observer3.body.x - this.observer3.sight.x) / (link * -0.18), (this.observer3.body.y - this.observer3.sight.y) / (link * -0.18))
                        rocket.type = 3
                        if (this.observer3.health > 0) {
                            this.rockets.push(rocket)
                        }
                    }
                }

                for (let t = 0; t < this.links.length; t++) {
                    this.links[t].draw()
                }

                for (let t = 0; t < this.rockets.length; t++) {
                    if (this.rockets[t].repelCheck(pomao.body)) {
                        if (this.rockets[t].x < pomao.body.x - 3) {
                            this.bump = -1
                        } else if (this.rockets[t].x > pomao.body.x + 3) {
                            this.bump = 1
                        } else {
                            this.bump = Math.random() - .5
                        }

                        if (pomao.disabled != 1) {
                            if (pomao.pounding != 10) {
                                pomao.body.xmom = -4 * (this.bump)
                                pomao.disabled = 1
                                pomao.hits--
                                pomao.body.ymom = -1.8
                            } else {
                                pomao.pounding = 0
                                pomao.body.ymom = -1.8
                            }
                        } else {
                            if (this.bump * pomao.body.xmom > 0) {
                                pomao.body.xmom = -2.8 * (this.bump)
                                pomao.body.ymom = -1.8
                            }
                        }


                        // pomao.body.xmom = this.rockets[t].xmom * 1.1
                        // pomao.body.ymom = this.rockets[t].ymom * 1.1
                    }
                }

                for (let t = 0; t < this.rockets.length; t++) {
                    this.rockets[t].fmove()
                    this.rockets[t].draw()
                    for (let q = 0; q < this.obstacles.length; q++) {
                        if (this.obstacles[q].doesPerimeterTouch(this.rockets[t])) {
                            if (Math.abs(this.obstacles[q].x - this.rockets[t].x) <= Math.abs(this.rockets[t].xmom * 3.1) || Math.abs((this.obstacles[q].x + this.obstacles[q].width) - this.rockets[t].x) <= Math.abs(this.rockets[t].xmom * 3.1)) {
                                this.rockets[t].x -= this.rockets[t].xmom
                                this.rockets[t].x -= this.rockets[t].xmom
                                this.rockets[t].xmom *= -1
                                this.rockets[t].x += this.rockets[t].xmom
                                this.rockets[t].x += this.rockets[t].xmom
                            }
                            if (Math.abs(this.obstacles[q].y - this.rockets[t].y) <= Math.abs(this.rockets[t].ymom * 3.1) || Math.abs((this.obstacles[q].y + this.obstacles[q].height) - this.rockets[t].y) <= Math.abs(this.rockets[t].ymom * 3.1)) {
                                this.rockets[t].y -= this.rockets[t].ymom
                                this.rockets[t].y -= this.rockets[t].ymom
                                this.rockets[t].ymom *= -1
                                this.rockets[t].y += this.rockets[t].ymom
                                this.rockets[t].y += this.rockets[t].ymom
                            }
                        }
                    }
                }
                for (let t = 0; t < this.rockets.length; t++) {
                    if (this.observer.body.repelCheck(this.rockets[t])) {
                        if (this.rockets[t].type != this.observer.type) {
                            this.observer.health -= (Math.abs(this.rockets[t].xmom) + Math.abs(this.rockets[t].ymom)) * 1
                            this.observer.body.radius = ((this.bodysize - 16) * (this.observer.health / this.maxhealth)) + 16
                        }
                    }
                    if (this.observer2.body.repelCheck(this.rockets[t])) {
                        if (this.rockets[t].type != this.observer2.type) {
                            this.observer2.health -= (Math.abs(this.rockets[t].xmom) + Math.abs(this.rockets[t].ymom)) * 1
                            this.observer2.body.radius = ((this.bodysize - 16) * (this.observer2.health / this.maxhealth)) + 16
                        }
                    }
                    if (this.observer3.body.repelCheck(this.rockets[t])) {
                        if (this.rockets[t].type != this.observer3.type) {
                            this.observer3.health -= (Math.abs(this.rockets[t].xmom) + Math.abs(this.rockets[t].ymom)) * 1
                            this.observer3.body.radius = ((this.bodysize - 16) * (this.observer3.health / this.maxhealth)) + 16
                        }
                    }
                }
                for (let t = 0; t < pomao.thrown.length; t++) {
                    if (this.observer.body.repelCheck(pomao.thrown[t])) {
                        if (pomao.thrown[t].type != this.observer.type) {
                            this.observer.health -= 6
                            this.observer.body.radius = ((this.bodysize - 16) * (this.observer.health / this.maxhealth)) + 16
                        }
                    }
                    if (this.observer2.body.repelCheck(pomao.thrown[t])) {
                        if (pomao.thrown[t].type != this.observer2.type) {
                            this.observer2.health -= 6
                            this.observer2.body.radius = ((this.bodysize - 16) * (this.observer2.health / this.maxhealth)) + 16
                        }
                    }
                    if (this.observer3.body.repelCheck(pomao.thrown[t])) {
                        if (pomao.thrown[t].type != this.observer3.type) {
                            this.observer3.health -= 6
                            this.observer3.body.radius = ((this.bodysize - 16) * (this.observer3.health / this.maxhealth)) + 16
                        }
                    }
                }


                for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                    if (this.observer.body.repelCheck(shockfriendly.shocksl[t])) {
                        this.observer.health -= 2
                        this.observer.body.radius = ((this.bodysize - 16) * (this.observer.health / this.maxhealth)) + 16
                    }
                    if (this.observer2.body.repelCheck(shockfriendly.shocksl[t])) {
                        this.observer2.health -= 2
                        this.observer2.body.radius = ((this.bodysize - 16) * (this.observer2.health / this.maxhealth)) + 16
                    }
                    if (this.observer3.body.repelCheck(shockfriendly.shocksl[t])) {
                        this.observer3.health -= 2
                        this.observer3.body.radius = ((this.bodysize - 16) * (this.observer3.health / this.maxhealth)) + 16
                    }
                    if (this.observer.body.repelCheck(shockfriendly.shocksr[t])) {
                        this.observer.health -= 2
                        this.observer.body.radius = ((this.bodysize - 16) * (this.observer.health / this.maxhealth)) + 16
                    }
                    if (this.observer2.body.repelCheck(shockfriendly.shocksr[t])) {
                        this.observer2.health -= 2
                        this.observer2.body.radius = ((this.bodysize - 16) * (this.observer2.health / this.maxhealth)) + 16
                    }
                    if (this.observer3.body.repelCheck(shockfriendly.shocksr[t])) {
                        this.observer3.health -= 2
                        this.observer3.body.radius = ((this.bodysize - 16) * (this.observer3.health / this.maxhealth)) + 16
                    }
                }




                this.observer.draw()
                this.observer2.draw()
                this.observer3.draw()

            } else {

                this.popdraw()
                if (this.pops.length == 0) {
                    door.height = 1000
                    door.x = 0 - (door.width * .5)
                    door.y = (-14172 + 33) - door.height
                    door.draw()
                    if (door.isPointInside(pomao.body)) {
                        loadlvl8()
                    }
                }
            }

        }


    }
    class Dialogue {
        constructor(x, y) {
            this.timerbase = 120
            this.timer = 200
            this.body = new Circle(x, y, 100, "transparent")
            this.words = ["Talk"]
            this.active = -1
            this.box = new Rectangle(x - 50, y - 50, 40, 90, "white")
            this.complete = 0

        }
        draw() {
            if (!this.body.repelCheck(pomao.body)) {
                this.active = -1
            }
            if (this.active == -1) {
                if (this.body.repelCheck(pomao.body)) {
                    this.active = 0
                }
            }
            if (this.active > 0) {
                this.timer--
                if (this.timer < 0) {
                    this.timer = this.timerbase
                    this.active += 1
                    if (this.active >= this.words.length) {
                        this.active = this.words.length - 1
                        this.complete = 1
                    }
                }
                this.box.x = pomao.body.x - 640
                this.box.y = pomao.body.y + 60
                tutorial_canvas_context.fillStyle = "black";
                tutorial_canvas_context.font = "30px Arial";
                this.box.width = getTextWidth(`${this.words[this.active]}`, tutorial_canvas_context.font) + 80
                this.box.height = 50
                this.box.draw()
                tutorial_canvas_context.fillStyle = "black";
                tutorial_canvas_context.font = "30px Arial";
                tutorial_canvas_context.fillText(`${this.words[this.active]}`, this.box.x + 40, this.box.y + 40);
            } else if (this.active == 0) {
                this.box = new Rectangle(this.body.x - 50, this.body.y - 50, 20, 38, "white")
                this.box.draw()
                tutorial_canvas_context.fillStyle = "black";
                tutorial_canvas_context.font = "14px Arial";
                tutorial_canvas_context.fillText(`${this.words[this.active]}`, this.box.x + 6, this.box.y + 14);
                if (keysPressed['e'] || gamepadAPI.buttonsStatus.includes('Axis-Right')) {
                    this.active = 1
                }
            }
        }
    }


    const tutorialholo = new Tutorial()
    // const seep

    // const seep = new Seed(pomao.eggs[pomao.eggs.length-1])
    // const seeds = []

    // pomao.eggs.push(seep)

    // tutorial_canvas_context.fillStyle = "Yellow";
    // tutorial_canvas_context.font = `${130}px Arial`;
    // tutorial_canvas_context.fillText("Pomao's Quest!", 220, 200)
    // tutorial_canvas_context.drawImage(title, 0,0, title.width, title.height, 0,0, 1280,720)

    tutorial_canvas_context.fillStyle = "magenta";
    tutorial_canvas_context.font = `${40}px Arial`;
    tutorial_canvas_context.fillText("Press A to start!", 1080 - (getTextWidth("Press A to start!", tutorial_canvas_context.font) * .5), 680)
    tutorial_canvas_context.strokeStyle = "black";
    tutorial_canvas_context.strokeStyle = 3
    tutorial_canvas_context.font = `${40}px Arial`;
    tutorial_canvas_context.strokeText("Press A to start!", 1080 - (getTextWidth("Press A to start!", tutorial_canvas_context.font) * .5), 680)

    let chafer
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


    //abracadabra
    loadlvl1()
    // loadlvl2()
    // loadlvl3()
    // loadlvl4()
    // loadlvl5()
    // loadlvl6()
    // loadlvl7()
    // loadlvl8()
    // loadlvl9()
    // loadlvl10()

    // for(let t=0;t<10;t++){
    //     chafer.draw()
    // }
    let started = 0
    setTimeout(function () {



        window.setInterval(function () {

            if (started == 1 || gamepadAPI.buttonsStatus.includes('A') || keysPressed['a']) {
                started = 1
            } else {

                tutorial_canvas_context.drawImage(title, 0, 0, title.width, title.height, 40, 20, 1200, 680)

                gamepadAPI.update()

            }
            if (started == 1) {
                if (pomao.paused == 10) {

                    // "#AAAAFF"
                    if (pomao.high > 1 && pomao.tripping > 0) {

                        tutorial_canvas_context.fillStyle = `rgba(85, 125, 178,${15 / 255})`

                        if (level == 1) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 2) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.drawImage(wallpaperimg, 955, -2970, 1280 * 1.54, (720 * 3) + 10)
                            tutorial_canvas_context.drawImage(wallpaperimg, -75, -990, 1280 * 2.35, (720 * 2) - 12)
                            tutorial_canvas_context.drawImage(redwallpaperimg, 2442, -3475, 500, 525)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 3) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackgroundlvl3, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 4) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackgroundlvl4, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 5) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.drawImage(dessertimg, -2075, -800, 15000, 1300)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 6) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 7) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.fillStyle = `rgba(205, 105, 85,${15 / 255})`
                            tutorial_canvas_context.drawImage(volcbg, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 9) {

                            tutorial_canvas.style.background = `rgba(0, 0, 0,${1})` // "#8888CC"
                            tutorial_canvas_context.fillStyle = `rgba(0, 0, 0,${31 / 255})`
                            tutorial_canvas_context.fillRect(-1000000000, -1000000000, tutorial_canvas.width * 100000000, tutorial_canvas.height * 100000000)
                        }
                        // tutorial_canvas_context.fillStyle = `rgba(85, 85, 128,${15 / 255})`
                        tutorial_canvas_context.fillRect(-1000000000, -1000000000, tutorial_canvas.width * 100000000, tutorial_canvas.height * 100000000)

                        //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
                    } else if (pomao.high > 1) {

                        tutorial_canvas_context.fillStyle = `rgba(153, 193, 230,${63 / 255})`
                        if (level == 1) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 2) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.drawImage(wallpaperimg, 955, -2970, 1280 * 1.54, (720 * 3) + 10)
                            tutorial_canvas_context.drawImage(wallpaperimg, -75, -990, 1280 * 2.35, (720 * 2) - 12)
                            tutorial_canvas_context.drawImage(redwallpaperimg, 2442, -3475, 500, 525)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 3) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackgroundlvl3, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 4) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackgroundlvl4, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 5) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.drawImage(dessertimg, -2075, -800, 15000, 1300)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 6) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 7) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.fillStyle = `rgba(205, 105, 85,${63 / 255})`
                            tutorial_canvas_context.drawImage(volcbg, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 8) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.fillStyle = `rgba(205, 105, 85,${63 / 255})`
                            tutorial_canvas_context.drawImage(volcbg, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 9) {
                            tutorial_canvas.style.background = `rgba(0, 0, 0,${1})` // "#8888CC"
                            tutorial_canvas_context.fillStyle = `rgba(0, 0, 0,${31 / 255})`
                            tutorial_canvas_context.fillRect(-1000000000, -1000000000, tutorial_canvas.width * 100000000, tutorial_canvas.height * 100000000)
                        } else if (level == 10) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        }
                        // tutorial_canvas_context.fillStyle = `rgba(153, 153, 230,${63 / 255})`
                        tutorial_canvas_context.fillRect(-1000000000, -1000000000, tutorial_canvas.width * 100000000, tutorial_canvas.height * 100000000)

                        //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
                    } else if (pomao.tripping > 0) {


                        tutorial_canvas_context.fillStyle = `rgba(190, 190, 255,${14 / 255})`
                        if (level == 1) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 2) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.drawImage(wallpaperimg, 955, -2970, 1280 * 1.54, (720 * 3) + 10)
                            tutorial_canvas_context.drawImage(wallpaperimg, -75, -990, 1280 * 2.35, (720 * 2) - 12)
                            tutorial_canvas_context.drawImage(redwallpaperimg, 2442, -3475, 500, 525)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 3) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackgroundlvl3, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 4) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackgroundlvl4, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 5) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.drawImage(dessertimg, -2075, -800, 15000, 1300)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 6) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 7) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.fillStyle = `rgba(205, 105, 85,${14 / 255})`
                            tutorial_canvas_context.drawImage(volcbg, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 8) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.fillStyle = `rgba(205, 105, 85,${14 / 255})`
                            tutorial_canvas_context.drawImage(volcbg, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 9) {
                            tutorial_canvas.style.background = `rgba(0, 0, 0,${1})` // "#8888CC"
                            tutorial_canvas_context.fillStyle = `rgba(0, 0, 0,${31 / 255})`
                            tutorial_canvas_context.fillRect(-1000000000, -1000000000, tutorial_canvas.width * 100000000, tutorial_canvas.height * 100000000)
                        } else if (level == 10) {
                            tutorial_canvas_context.globalAlpha = 0.2;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.globalAlpha = 1;
                        }
                        tutorial_canvas_context.fillRect(-1000000000, -1000000000, tutorial_canvas.width * 100000000, tutorial_canvas.height * 100000000)

                        //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
                    } else {
                        tutorial_canvas_context.fillStyle = `rgba(170, 170, 255,${1})`

                        if (level == 7) {
                            tutorial_canvas_context.fillStyle = `rgba(205, 105, 85,${1})`
                        }
                        if (level != 9) {
                            tutorial_canvas_context.fillRect(-1000000000, -1000000000, tutorial_canvas.width * 100000000, tutorial_canvas.height * 100000000)
                        } else {
                            tutorial_canvas.style.background = `rgba(0, 0, 0,${1})` // "#8888CC"
                            tutorial_canvas_context.fillStyle = `rgba(0, 0, 0,${31 / 255})`
                            tutorial_canvas_context.fillRect(-1000000000, -1000000000, tutorial_canvas.width * 100000000, tutorial_canvas.height * 100000000)

                        }
                        //pictures

                        if (level == 1) {
                            // tutorial_canvas_context.globalAlpha = 0.1;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            // tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 2) {
                            // tutorial_canvas_context.globalAlpha = 0.1;
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.drawImage(wallpaperimg, 955, -2970, 1280 * 1.54, (720 * 3) + 10)
                            tutorial_canvas_context.drawImage(wallpaperimg, -75, -990, 1280 * 2.35, (720 * 2) - 12)
                            tutorial_canvas_context.drawImage(redwallpaperimg, 2442, -3475, 500, 525)
                            // tutorial_canvas_context.globalAlpha = 1;
                        } else if (level == 3) {
                            tutorial_canvas_context.drawImage(paintedbackgroundlvl3, pomao.body.x - 640, pomao.body.y - 360)
                        } else if (level == 4) {
                            tutorial_canvas_context.drawImage(paintedbackgroundlvl4, pomao.body.x - 640, pomao.body.y - 360)
                        } else if (level == 5) {
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                            tutorial_canvas_context.drawImage(dessertimg, -2075, -800, 15000, 1300)
                        } else if (level == 6) {
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                        } else if (level == 7) {
                            tutorial_canvas_context.drawImage(volcbg, pomao.body.x - 640, pomao.body.y - 360)
                        } else if (level == 8) {
                            tutorial_canvas_context.drawImage(volcbg, pomao.body.x - 640, pomao.body.y - 360)
                        } else if (level == 9) {

                            tutorial_canvas.style.background = `rgba(0, 0, 0,${1})` // "#8888CC"
                            tutorial_canvas_context.fillStyle = `rgba(0, 0, 0,${31 / 255})`
                            tutorial_canvas_context.fillRect(-1000000000, -1000000000, tutorial_canvas.width * 100000000, tutorial_canvas.height * 100000000)
                        } else if (level == 10) {
                            tutorial_canvas_context.drawImage(paintedbackground, pomao.body.x - 640, pomao.body.y - 360)
                        }
                        // if(keysPressed['p']){
                        //     tutorial_canvas_context.clearRect(-100000,-100000,tutorial_canvas.width*1000, tutorial_canvas.height*1000)
                        // }
                        //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
                    }
                    if (pomao.hits > -1) {
                        // tutorial_canvas_context.drawImage(jumpometer, 0, 0, 10, 1000, -2200, -350, 10, 1000)

                        drawFractal()

                        // swinger1move()
                        pomao.draw()


                        if (pomao.pounding > 0) {
                            shockfriendly.shock()
                        }

                        //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)
                        // block.draw()

                        for (let t = 0; t < blocks.length; t++) {
                            blocks[t].touch = false
                            // blocks[t].ymom +=.1
                            for (let f = 0; f < floors.length; f++) {
                                if (blocks[t] != floors[f]) {
                                    if (squaresquare(floors[f], blocks[t])) {
                                        // if(blocks[t].ymom > 0){
                                        //     blocks[t].ymom *= .1
                                        //     }
                                        blocks[t].touch = true
                                    }
                                }
                            }

                            if (blocks[t].touch == false) {

                                // if(blocks[t].ymom > -.09){
                                blocks[t].ymom += .2
                                // }
                            } else {
                                if (blocks[t].ymom > 0) {
                                    blocks[t].ymom = 0
                                }
                            }


                            // blocks[t].xmom*=.99
                            // blocks[t].ymom*=.99
                        }


                        for (let t = 0; t < blocks.length; t++) {

                            if (!nails.includes(blocks[t])) {
                                let blockblock = 0
                                for (let n = 0; n < walls.length; n++) {
                                    if (blocks[t] !== walls[n]) {
                                        if (walls[n].overlaps(blocks[t])) {
                                            if (!blocks.includes(walls[n])) {
                                                blockblock = 1
                                            }
                                        }
                                    }
                                }
                                let floorfloor = 0
                                for (let n = 0; n < floors.length; n++) {
                                    if (blocks[t] !== floors[n]) {
                                        if (floors[n].overlaps(blocks[t])) {
                                            // floorfloor = 1
                                        }
                                    }
                                }
                                if (blockblock == 0 && floorfloor == 0) {
                                    blocks[t].isBlocked = false
                                } else {
                                    blocks[t].isBlocked = true
                                    if (!walls.includes(blocks[t])) {
                                        walls.push(blocks[t])
                                    }
                                    if (!roofs.includes(blocks[t])) {
                                        roofs.push(blocks[t])
                                    }
                                    blocks.splice(t, 1)
                                }
                                if (!blocks[t].isBlocked) {
                                    blocks[t].move()
                                }

                                blocks[t].ymove()
                            } else {
                                blocks[t].ymove()
                            }
                        }



                        for (let t = 0; t < boys.length; t++) {
                            boys[t].clean()
                        }
                        // floor.draw()
                        for (let t = 0; t < fruits.length; t++) {
                            fruits[t].clean()
                        }

                        for (let t = 0; t < pomao.eggs.length; t++) {
                            if (pomao.thrown.includes(pomao.eggs[t])) {
                                pomao.eggs.splice(t, 1)
                            }
                        }


                        for (let t = 0; t < jellys.length; t++) {
                            // if(!jellys.includes(floors[t])){

                            // tutorial_canvas_context.drawImage(floorimg, floors[t].x, floors[t].y, floors[t].width, floors[t].height)
                            // }else{

                            // jellys[t].draw()
                            tutorial_canvas_context.globalAlpha = 0.5
                            tutorial_canvas_context.drawImage(paintedbackground, jellys[t].x, jellys[t].y, jellys[t].width, jellys[t].height)

                            tutorial_canvas_context.globalAlpha = 0.3
                            jellys[t].draw()
                            tutorial_canvas_context.globalAlpha = 1
                            // }
                        }

                        //     for(let t = 0; t<shocks.length; t++){
                        //         if(shocks[t].shocksr.length == 0){
                        //             shocks.splice(t,1)
                        //         }
                        //    }
                        for (let t = 0; t < shocks.length; t++) {
                            shocks[t].draw()
                        }



                        for (let k = 0; k < boys.length; k++) {
                            for (let t = 0; t < pomao.thrown.length; t++) {
                                // //////console.log(boys[k])
                                // //////console.log(pomao.thrown[t])
                                boys[k].body.radius *= 1.333333
                                if (boys[k].body.repelCheck(pomao.thrown[t])) {
                                    boys[k].pop()
                                    deadboys.push(boys[k])
                                    boys.splice(k, 1)
                                    break
                                } else {
                                    boys[k].body.radius *= .75
                                }

                            }
                            for (let t = 0; t < shockfriendly.shocksl.length; t++) {
                                // //////console.log(boys[k])
                                // //////console.log(pomao.thrown[t])
                                boys[k].body.radius *= 1.333333
                                if (boys[k].body.repelCheck(shockfriendly.shocksl[t])) {
                                    boys[k].pop()
                                    deadboys.push(boys[k])
                                    boys.splice(k, 1)
                                    break
                                } else {
                                    boys[k].body.radius *= .75
                                }

                                //             }
                                // for(let t = 0; t<shockfriendly.shocksr.length; t++){
                                // //////console.log(boys[k])
                                // //////console.log(pomao.thrown[t])
                                boys[k].body.radius *= 1.333333
                                if (boys[k].body.repelCheck(shockfriendly.shocksr[t])) {
                                    boys[k].pop()
                                    deadboys.push(boys[k])
                                    boys.splice(k, 1)
                                    break
                                } else {
                                    boys[k].body.radius *= .75
                                }

                            }
                        }

                        fractal.draw()
                        fracta2l.draw()
                        fracta3l.draw()
                        //tutorial_canvas_context.clearRect(-1000000,680,tutorial_canvas.width*1000000, tutorial_canvas.height)

                        // fracta4l.draw()
                        loader = 200
                    } else {

                        spidermusic.pause()
                        loader--
                        if (loader == 1) {
                            loader = 0
                            pomao.hits = 9
                            if (level == 1) {
                                loadlvl1()
                            }
                            if (level == 2) {
                                loadlvl2()
                            }
                            if (level == 3) {
                                loadlvl3()
                            }
                            if (level == 4) {
                                loadlvl4()
                            }
                            if (level == 5) {
                                loadlvl5()
                            }
                            if (level == 6) {
                                loadlvl6()
                            }
                            if (level == 7) {
                                loadlvl7()
                            }
                            if (level == 8) {
                                loadlvl8()
                            }
                            if (level == 9) {
                                loadlvl9()
                            }
                            if (level == 10) {
                                loadlvl10()
                            }
                        }

                        tutorial_canvas_context.fillStyle = "White";
                        tutorial_canvas_context.font = "30px Arial";
                        tutorial_canvas_context.fillText(`Pomao fell asleep and went home`, pomao.body.x - 200, pomao.body.y);
                        tutorial_canvas_context.fillText(`(Loading level)`, pomao.body.x - 100, pomao.body.y + 50);
                        tutorial_canvas.style.background = `rgba(170, 170, 255,${1})`  // "#8888CC"
                    }


                    for (let t = 0; t < pomao.thrown.length; t++) {
                        if (pomao.thrown[t].markedx == 3) {
                            pomao.thrown.splice(t, 1)
                        }
                    }
                    for (let t = 0; t < switches.length; t++) {
                        if (switches[t].button.state == 1) {
                            switches[t].clear()
                        }
                    }

                    // if(pomao.eggs.length < 10){

                    //     const seepx = new Seed(pomao.eggs[pomao.eggs.length-1])
                    //         pomao.eggs.push(seepx)
                    //     }

                    if (level == 6) { // 6
                        tutorial_canvas_context.drawImage(transfloor, 0, 0, 500, 500, -12100, 33, 42000, 1000)
                        tutorial_canvas_context.drawImage(transfloor, 0, 0, 500, 500, -12100, 35, 42000, 1000)
                        tutorial_canvas_context.drawImage(hillshadowbad, 0, 0, hillshadowbad.width, hillshadowbad.height, ramps[0].x - ramps[0].length * 10.9, -1250, ramps[0].length * 21.8, 1550)
                        tutorial_canvas_context.drawImage(hillshadowbad, 0, 0, hillshadowbad.width, hillshadowbad.height, ramps[0].x - ramps[0].length * 10.9, -1250, ramps[0].length * 21.8, 1550)

                    }
                    for (let t = 0; t < chats.length; t++) {
                        chats[t].draw()
                    }

                    if (level == 1) {

                        tutorialholo.draw()
                    }
                } else {
                    pomao.pausetimer++
                    gamepadAPI.update()

                    if (gamepadAPI.buttonsStatus.includes('RB') || keysPressed['p']) {
                        if (pomao.pausetimer > 40) {
                            pomao.paused = 10
                            pomao.pausetimer = 10
                        }
                    }

                    tutorial_canvas_context.fillStyle = "magenta";
                    tutorial_canvas_context.fillText("paused", pomao.body.x - 50, pomao.body.y - 70)
                    tutorial_canvas_context.fillStyle = "black";
                    tutorial_canvas_context.fillText("Level Select", pomao.body.x - 500, pomao.body.y - 70)


                    loadlvl1button = new Rectangle(pomao.body.x - 500, pomao.body.y, 50, 50, "brown")
                    loadlvl2button = new Rectangle(pomao.body.x - 400, pomao.body.y, 50, 50, "red")
                    loadlvl3button = new Rectangle(pomao.body.x - 300, pomao.body.y, 50, 50, "gray")
                    loadlvl4button = new Rectangle(pomao.body.x - 200, pomao.body.y, 50, 50, "purple")
                    loadlvl5button = new Rectangle(pomao.body.x - 100, pomao.body.y, 50, 50, "orange")
                    loadlvl6button = new Rectangle(pomao.body.x, pomao.body.y, 50, 50, "green")
                    loadlvl7button = new Rectangle(pomao.body.x + 100, pomao.body.y, 50, 50, "yellow")
                    loadlvl8button = new Rectangle(pomao.body.x + 200, pomao.body.y, 50, 50, "teal")
                    loadlvl9button = new Rectangle(pomao.body.x + 300, pomao.body.y, 50, 50, "blue")
                    loadlvl10button = new Rectangle(pomao.body.x + 400, pomao.body.y, 50, 50, "white")

                    loadlvl1button.draw()
                    loadlvl2button.draw()
                    loadlvl3button.draw()
                    loadlvl4button.draw()
                    loadlvl5button.draw()
                    loadlvl6button.draw()
                    loadlvl7button.draw()
                    loadlvl8button.draw()
                    loadlvl9button.draw()
                    loadlvl10button.draw()
                }

                // for(let t =0;t<ungrapplable.length;t++){
                //     ungrapplable[t].draw()
                // }
                // swinger1move()
                // encoder.add(tutorial_canvas_context)
            }
            if (level == 7) {
                for (let t = 0; t < lavas.length; t++) {
                    if (pomao.paused == 10) {
                        lavas[t].y -= .5
                    }
                    if (squarecirclefeet(lavas[t], pomao.body)) {
                        pomao.body.symom -= 5
                        if (pomao.body.ymom > 0) {
                            pomao.body.ymom = 0
                        }
                        pomao.body.ymom -= 5
                        pomao.hits -= 3
                        pomao.body.move()
                        pomao.body.smove()
                        pomao.disabled = 1
                        pomao.hng = 0
                    }
                    lavas[t].draw()
                    // console.log("lava")
                }
            }
            lvl9rotationalvariable++
        }, 11)

    }, 1);  //6969

    function squarecirclefaceblockjump(square, circle) {
        const squareendh = square.y + square.height
        const squareendw = square.x + square.width
        if (square.x <= circle.x + circle.radius - 3) {
            if (square.y <= circle.y) {
                if (squareendw + circle.radius - 5 >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }

    function squarecirclefeet(square, circle) {

        const squareendh = square.y + square.height
        const squareendw = square.x + square.width

        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        //test
        if (square.x <= circle.x + (circle.radius * .65)) {
            if (square.y <= circle.y + circle.radius) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius) {
                if (squareendw + (circle.radius * .65) >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }


    function squarecirclefeetwavy(square, circle) {

        const squareendh = square.y + square.height
        const squareendw = square.x + square.width

        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        //test
        if (square.x <= circle.x + (circle.radius * .85)) {
            if (square.y <= circle.y >= (circle.radius * 1.4)) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        if (square.x <= circle.x) {
            if (square.y <= circle.y >= (circle.radius * 1.4)) {
                if (squareendw + (circle.radius * .85) >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }


    function squarecirclefeetspinx(square, circle) {

        let squareendh = square.y + square.height
        let squareendw = square.x + square.width

        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius + .1) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y + (circle.radius - 1)) {
                        return true
                    }
                }
            }
        }
        //test
        if (square.x <= circle.x + (circle.radius * .65)) {
            if (square.y <= circle.y + circle.radius + .1) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius + .1) {
                if (squareendw + (circle.radius * .65) >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }
    function squarecirclefeetspinxdeep(square, circle) {

        let squareendh = square.y + square.height
        let squareendw = square.x + square.width

        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius + 3.5) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y + (circle.radius - 1)) {
                        return true
                    }
                }
            }
        }
        //test
        if (square.x <= circle.x + (circle.radius * .65)) {
            if (square.y <= circle.y + circle.radius + 3.5) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius + 3.5) {
                if (squareendw + (circle.radius * .65) >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }

    function squarecirclefacetopbottom(square, circle) {

        const squareendh = square.y + square.height
        const squareendw = square.x + square.width

        if (square.x <= circle.x + (circle.radius - 12)) {
            if (square.y <= circle.y + (circle.radius)) {
                if (squareendw >= circle.x - (circle.radius - 12)) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }

    function squarecirclefeetdeep(square, circle) {


        const squareendh = square.y + square.height
        const squareendw = square.x + square.width

        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius + 2) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        //test
        if (square.x <= circle.x + (circle.radius * .65)) {
            if (square.y <= circle.y + circle.radius + 2) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius) {
                if (squareendw + (circle.radius * .65) + 2 >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }


    function squarecirclehead(square, circle) {

        const squareendh = square.y + square.height
        const squareendw = square.x + square.width

        if (square.x <= circle.x) {
            if (square.y <= circle.y) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y - circle.radius) {
                        return true
                    }
                }
            }
        }

        //beneath here is expiriment
        if (square.x <= circle.x + (circle.radius * .9)) {
            if (square.y <= circle.y) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y - circle.radius) {
                        return true
                    }
                }
            }
        }
        if (square.x <= circle.x) {
            if (square.y <= circle.y) {
                if (squareendw + (circle.radius * .9) >= circle.x) {
                    if (squareendh >= circle.y - circle.radius) {
                        return true
                    }
                }
            }
        }
        return false
    }

    function squarecircleface(square, circle) {
        const squareendh = square.y + square.height
        const squareendw = square.x + square.width
        if (square.x <= circle.x + circle.radius) {
            if (square.y <= circle.y) {
                if (squareendw + circle.radius >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }
    function squarecirclefaceball(square, circle) {
        const squareendh = square.y + square.height
        const squareendw = square.x + square.width
        if (square.x <= circle.x + circle.radius) {
            if (square.y <= circle.y) {
                if (squareendw + circle.radius >= circle.x) {
                    if (squareendh >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }

    function squarecirclefeetspin(square, circle) {

        let squareendh = square.y + square.height
        let squareendw = square.x + square.width

        if (square.x <= circle.x) {
            if (square.y <= circle.y + circle.radius + 3.5) {
                if (squareendw >= circle.x) {
                    if (squareendh >= circle.y + (circle.radius - 1)) {
                        return true
                    }
                }
            }
        }
        return false
    }


    function squarecircleedges(square, circle) {
        const squareendh = square.y + square.height
        const squareendw = square.x + square.width
        if (square.x <= circle.x + circle.radius) {
            if (square.y <= circle.y + circle.radius) {
                if (squareendw + circle.radius >= circle.x) {
                    if (squareendh + circle.radius >= circle.y) {
                        return true
                    }
                }
            }
        }
        return false
    }
    function getRandomDarkColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 13) + 1)];
        }
        return color;
    }
    function getRandomDarkerColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 7) + 1)];
        }
        return color;
    }

    function getRandomLightColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 15) + 1)];
        }
        return color;
    }

    function getRandomLightColortp() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12) + 3)];
        }
        color += "11"
        return color;
    }
    function drawFractal() {
        if (pomao.tripping > 0) {
            // if(Math.random()<.5){
            // //////console.time("frac")
            const sheetwidtht = zimgs[0].width
            const sheetheightt = zimgs[0].height
            const colst = 3
            const rowst = 3
            const widtht = sheetwidtht / colst
            const heightt = sheetheightt / rowst
            const srcxt = Math.floor(fractal.runnerx % colst) * widtht
            const srcyt = Math.floor(fractal.runnery % rowst) * heightt

            if (fractal.sheet < 0) {
                fractal.sheet = 0
            }
            // //console.log(fractal.sheet, zimgs[fractal.sheet%zimgs.length])
            tutorial_canvas_context.drawImage(zimgs[fractal.sheet % zimgs.length], srcxt, srcyt, widtht, heightt, pomao.body.x - 640, pomao.body.y - 360, 1280, 720)
            //tutorial_canvas_context.drawImage(zimgs[fractal.sheet], 0, 0, widtht*3, heightt*3, pomao.body.x-640, pomao.body.y-360, 1280, 720)

            //  //////console.timeEnd("frac")
            // }
        }
    }
    function squaresquare(a, b) {

        a.left = a.x
        b.left = b.x
        a.right = a.x + a.width
        b.right = b.x + b.width
        a.top = a.y
        b.top = b.y
        a.bottom = a.y + a.height
        b.bottom = b.y + b.height



        if (a.left > b.right || a.top > b.bottom ||
            a.right < b.left || a.bottom < b.top) {
            return false
        }
        else {
            return true
        }
    }

    function Rax(isn) {
        let out = isn * (180 / Math.PI)
        for (let i = 0; out < 0; i++) {
            out += 360
        }
        out = out % 360
        // ////console.log(out)
        return out
    }


    function resettonguediff() {
        for (let g = 0; g < fruits.length; g++) {
            if (fruits[g].marked == 1) {
                fruits[g].anchor.xdif = 0
                fruits[g].anchor.ydif = 0
            }
        }
        for (let g = 0; g < boys.length; g++) {
            if (boys[g].marked == 1) {
                boys[g].anchor.xdif = 0
                boys[g].anchor.ydif = 0
            }
        }
        for (let g = 0; g < swimmers.length; g++) {
            if (swimmers[g].marked == 1) {
                swimmers[g].anchor.xdif = 0
                swimmers[g].anchor.ydif = 0
            }
        }
        for (let g = 0; g < bats.length; g++) {
            if (bats[g].marked == 1) {
                bats[g].anchor.xdif = 0
                bats[g].anchor.ydif = 0
            }
        }
    }
    function swinger1move() {
        for (let s = 0; s < springs.length; s++) {
            if (pegged == 1) {
                // pin2.xmom = 0
                // pin2.ymom = 0
            } else {
            }
            springs[s].balance()
            // springs[s].balance()
            // springs[s].balance()
            if (pegged == 1) {
                // pin2.xmom = 0
                pin2.ymom += .01
            }
            if (pegged == 1) {
            }
        }
        for (let s = 0; s < springs.length; s++) {
            springs[s].move()
            springs[s].move()
            springs[s].move()
        }
        for (let s = 0; s < springs.length; s++) {

            springs[s].draw()
        }
        pin.xmom *= .1
        pin.ymom *= .1

        pin2.xmom *= .98
        pin2.ymom *= .98

        pin.draw()
    }

    function loadlvl1() {

        pomao.tonguex = 0
        pomao.tonguey = 0

        pin = new Circle(9900, -8100, 10, "blue")
        pin2 = new Circle(9900, -8100 + (7 * 220), 100, "orange")
        springs = []
        objsprings = []
        pomao.cutscene = 0
        pomao.eggs = [pomao.body]

        beamrocks = []
        tutorial_canvas_context.translate(pomao.body.x - 640, pomao.body.y - 360)
        pomao.body.x = 640
        pomao.body.y = 360
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        springs = []
        objsprings = []
        spinnys.splice(0, spinnys.length)
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        lavas.splice(0, lavas.length)
        level = 1
        snowfloors.splice(0, snowfloors.length)
        pomao.thrown = []
        door = new Rectangle(4550, 450, 200, 200, "#090909")

        const floor = new Rectangle(-100000000, 650, 500, 100000000 - 12000, "red")
        walls.push(floor)
        roofs.push(floor)
        floors.push(floor)
        for (let t = 0; t < 30; t++) {
            const floor2 = new Rectangle(-12000 + (t * 2000), 650, 500, 2000, "red")
            walls.push(floor2)
            roofs.push(floor2)
            floors.push(floor2)
        }

        boss = new Bossbeam()


        for (let t = 0; t < 10; t++) {
            const boy = new Boys(3750 + (t * 80), 0, 50, 50, "red")
            boys.push(boy)
        }


        for (let t = 0; t < 4; t++) {
            const boy = new Boys(-1000 + (t * 100), 550, 50, 50, "red")
            boys.push(boy)
        }


        for (let t = 0; t < 90; t++) {
            const fruit = new Fruit(4200 + (Math.random() * 330), -4450 + (Math.random() * 330), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }

        for (let t = 0; t < 50; t++) {
            const fruit = new Fruit(9800 + (Math.random() * 1150), -3490 + (Math.random() * 740), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.bodybig.repelCheck(fruits[k].body)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }

        for (let t = 0; t < 30; t++) {
            let bossfloors = new Rectangle(4800 + (t * 200), Math.round(300 + Math.random() * 200), 20, 120, "red")
            floors.push(bossfloors)
            let bossfloors2 = new Rectangle(4800 + (t * 200), Math.round(-500 + Math.random() * 200), 20, 120, "red")
            floors.push(bossfloors2)
            let bossfloors3 = new Rectangle(4800 + (t * 200), Math.round(-100 + Math.random() * 200), 20, 120, "red")
            floors.push(bossfloors3)
        }

        for (let t = 0; t < 500; t++) {
            const fruit = new Fruit(-2000 + boss.body1.x + ((Math.random() - .5) * 9500), boss.body1.y - 800 + (Math.random() * 1250), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }



        objsprings.push(pin2)

        let spring = new Spring(pin)
        springs.push(spring)
        for (let k = 0; k < 33; k++) {
            spring = new Spring(spring.anchor)
            if (k < 32) {
                springs.push(spring)
            } else if (k == 32) {
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
        for (let t = 0; t < 10; t++) {
            if (t != 0) {
                const width = (((100 * 60) - (t * (600 + t))) / 400)
                const lvl1floorloop = new Rectangle(4200, -4480 + (t * 350), 20, 400 + (Math.round(width) * 400), "red")
                floors.push(lvl1floorloop)
                const lvl1floorloopsolid = new Rectangle(lvl1floorloop.x + lvl1floorloop.width - 10, lvl1floorloop.y, 50, Math.round((t * t * 70) * .0025) * 400, "red")
                for (let t = lvl1floorloopsolid.x + 750; t < lvl1floorloopsolid.x + lvl1floorloopsolid.width; t += 300) {
                    const boy = new Boys(t - 50, lvl1floorloopsolid.y - 50, 50, 50, 'red')
                    boys.push(boy)
                }
                floors.push(lvl1floorloopsolid)
                roofs.push(lvl1floorloopsolid)
                walls.push(lvl1floorloopsolid)
                for (let k = 0; k < floors.length; k++) {
                    if (k != floors.indexOf(lvl1floorloopsolid)) {
                        if (lvl1floorloopsolid.x + lvl1floorloopsolid.width == floors[k].x + floors[k].width) {
                            const lvl1wallloopsolid = new Rectangle(lvl1floorloopsolid.x + lvl1floorloopsolid.width, floors[k].y, Math.abs(floors[k].y - lvl1floorloopsolid.y) + 50, 50, "red")
                            floors.push(lvl1wallloopsolid)
                            roofs.push(lvl1wallloopsolid)
                            walls.push(lvl1wallloopsolid)
                        }
                    }
                }
            } else {
                const lvl1floorloop = new Rectangle(4200, -4480 + (t * 330), 50, 6850 - (t * 90), "red")
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
        const block = new Rectangle(-1500, 200, 60, 60, "orange")
        const block2 = new Rectangle(2200, 200, 60, 60, "orange")
        const nail = new Rectangle(-1950, 200, 200, 200, "orange")
        nails.push(nail)
        const floor2 = new Rectangle(-100, 500, 20, 550, "red")
        const ramp2 = new Trianglex(1300, 651, "red", 40)
        ramps.push(ramp2)
        const ramp = new Triangle(800, 651, "red", 40)
        ramps.push(ramp)
        const ramp4 = new Circle(1900, 700, 120, "red")
        ramps.push(ramp4)
        const ramp3 = new Circle(1900, 1200, 600, "red")
        ramps.push(ramp3)
        floors.push(floor2)
        floors.push(block)
        walls.push(block)
        blocks.push(block)
        // roofs.push(block)
        // roofs.push(block2)
        floors.push(block2)
        walls.push(block2)
        blocks.push(block2)
        floors.push(nail)

        for (let t = 0; t < 20; t++) {
            const blockx = new Rectangle(-3000 + (t * 345), -1000, 60, 60, "orange")
            floors.push(blockx)
            walls.push(blockx)
            blocks.push(blockx)
            // roofs.push(blockx)
        }
        // walls.push(nail)
        blocks.push(nail)
        const buttonswitch = new Switchfloor(4500, -640, 4500 - 2000, -800, 50, 2050)
        const lvl1buttonswitch = new Switchfloor(6500, -3540, 9800, -3540, 50, 1300)
        const lvl1buttonswitch1 = new Switchfloor(4080, -2540, 4200, -4150, 50, 380)
        const lvl1buttonswitchwall2 = new Switchfloor(4080, -2540, 4550, -4450, 330, 50)
        lvl1buttonswitchwall2.button = lvl1buttonswitch1.button
        const lvl1fooroverhang = new Rectangle(10800, -2800, 50, 250, "red")
        floors.push(lvl1fooroverhang)
        walls.push(lvl1fooroverhang)
        roofs.push(lvl1fooroverhang)
        const lvl1fooroverhangwall = new Rectangle(11000, -3540, 3900, 50, "red")
        floors.push(lvl1fooroverhangwall)
        walls.push(lvl1fooroverhangwall)
        roofs.push(lvl1fooroverhangwall)
        const ramp5 = new Triangle90(lvl1fooroverhangwall.x + 1300, lvl1fooroverhangwall.y, "red", 100)
        ramps.push(ramp5)
        ramps90.push(ramp5)
        const ramp6 = new Triangle90l(lvl1fooroverhangwall.x, lvl1fooroverhangwall.y - 530, "red", 75)
        ramps.push(ramp6)
        ramps.push(pin2)
        for (let t = ramp6.y - 1000; t < ramp6.y - 150; t += 150) {
            let ladderfloor = new Rectangle(ramp6.x, t, 20, 150)
            floors.push(ladderfloor)
        }
        const trapswitch1 = new Switchfloor(ramp6.x - 120, ramp6.y - 350, ramp6.x - 500, ramp6.y, 50, 550)
        const trapswitch2 = new Switchfloor(ramp6.x - 120, ramp6.y - 350, ramp6.x - 500, ramp6.y - 400, 450, 50)
        trapswitch1.button = trapswitch2.button
        for (let t = 0; t < 10000; t++) {
            const fruit = new Fruit(ramp6.x - 550 + (Math.random() * 400), ramp6.y - 350 + (Math.random() * 400), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }
        const lvl1fooroverhangwallramp = new Rectangle(ramp6.x - 40, ramp6.y, 50, 790, "red")
        floors.push(lvl1fooroverhangwallramp)
        walls.push(lvl1fooroverhangwallramp)
        roofs.push(lvl1fooroverhangwallramp)
        const lvl1fooroverhangwallfar = new Rectangle(ramp6.x + 2000, -8100, 8850, 50, "red")
        floors.push(lvl1fooroverhangwallfar)
        walls.push(lvl1fooroverhangwallfar)
        roofs.push(lvl1fooroverhangwallfar)
        const lvl1fooroverhangwallfarzig = new Rectangle(ramp6.x + 300, -3100, 50, 1750, "red")
        floors.push(lvl1fooroverhangwallfarzig)
        walls.push(lvl1fooroverhangwallfarzig)
        roofs.push(lvl1fooroverhangwallfarzig)
        const lvl1fooroverhangwallfarzag = new Rectangle(ramp6.x, -2700, 50, 1750, "red")
        floors.push(lvl1fooroverhangwallfarzag)
        walls.push(lvl1fooroverhangwallfarzag)
        roofs.push(lvl1fooroverhangwallfarzag)
        const lvl1fooroverhangwallfarzug = new Rectangle(ramp6.x, -1400, 50, 1750, "red")
        floors.push(lvl1fooroverhangwallfarzug)
        walls.push(lvl1fooroverhangwallfarzug)
        roofs.push(lvl1fooroverhangwallfarzug)
        const lvl1fooroverhangwallfarzyg = new Rectangle(ramp6.x + 300, -1900, 50, 500, "red")
        floors.push(lvl1fooroverhangwallfarzyg)
        walls.push(lvl1fooroverhangwallfarzyg)
        roofs.push(lvl1fooroverhangwallfarzyg)
        const lvl1fooroverhangwallfarzag2 = new Rectangle(ramp6.x + 300, -2300, 600, 50, "red")
        floors.push(lvl1fooroverhangwallfarzag2)
        walls.push(lvl1fooroverhangwallfarzag2)
        roofs.push(lvl1fooroverhangwallfarzag2)
        const lvl1fooroverhangwallfarzag4 = new Rectangle(ramp6.x + 1700, -2000, 600, 50, "red")
        floors.push(lvl1fooroverhangwallfarzag4)
        walls.push(lvl1fooroverhangwallfarzag4)
        roofs.push(lvl1fooroverhangwallfarzag4)
        const lvl1fooroverhangwallfarzag4x = new Rectangle(ramp6.x + 1350, -1800, 400, 50, "red")
        floors.push(lvl1fooroverhangwallfarzag4x)
        walls.push(lvl1fooroverhangwallfarzag4x)
        roofs.push(lvl1fooroverhangwallfarzag4x)
        const lvl1fooroverhangwallfarzag4y = new Rectangle(ramp6.x + 1000, -1600, 200, 50, "red")
        floors.push(lvl1fooroverhangwallfarzag4y)
        walls.push(lvl1fooroverhangwallfarzag4y)
        roofs.push(lvl1fooroverhangwallfarzag4y)
        for (let t = 0; t < 400; t++) {
            const fruit = new Fruit(ramp6.x + (Math.random() * 2000), ramp5.y + (Math.random() * 4000), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }
        const lvl1fooroverhangwallfarzag3 = new Rectangle(ramp6.x + 300, -2300, 50, 1750, "red")
        floors.push(lvl1fooroverhangwallfarzag3)
        walls.push(lvl1fooroverhangwallfarzag3)
        roofs.push(lvl1fooroverhangwallfarzag3)
        const lvl1fooroverhangwallfarroof = new Rectangle(4200, -8100, 50, 10050, "cyan")
        floors.push(lvl1fooroverhangwallfarroof)
        walls.push(lvl1fooroverhangwallfarroof)
        roofs.push(lvl1fooroverhangwallfarroof)
        ungrapplable.push(lvl1fooroverhangwallfarroof)
        const lvl1fooroverhangwallrampxnograp = new Rectangle(ramp5.x - 20, ramp5.y - 4000, 2050, 50, "cyan")
        floors.push(lvl1fooroverhangwallrampxnograp)
        walls.push(lvl1fooroverhangwallrampxnograp)
        roofs.push(lvl1fooroverhangwallrampxnograp)
        ungrapplable.push(lvl1fooroverhangwallrampxnograp)
        const backwall = new Rectangle(-5000, -10000, 12000, 50, "cyan")
        floors.push(backwall)
        walls.push(backwall)
        roofs.push(backwall)
        ungrapplable.push(backwall)
        ungrapplable.push(lvl1fooroverhangwallrampxnograp)
        const topwall = new Rectangle(-5000, -5000, 50, 9150, "cyan")
        floors.push(topwall)
        walls.push(topwall)
        roofs.push(topwall)
        ungrapplable.push(topwall)
        const lvl1fooroverhangwallrampx = new Rectangle(ramp5.x - 20, ramp5.y - 2000, 2050, 50, "red")
        floors.push(lvl1fooroverhangwallrampx)
        walls.push(lvl1fooroverhangwallrampx)
        roofs.push(lvl1fooroverhangwallrampx)
        const lvl1fooroverhangwallrampy = new Rectangle(ramp6.x, ramp6.y - 1000, 1000, 50, "red")
        floors.push(lvl1fooroverhangwallrampy)
        walls.push(lvl1fooroverhangwallrampy)
        roofs.push(lvl1fooroverhangwallrampy)
        const lvl1fooroverhangwall2z = new Rectangle(lvl1fooroverhangwall.x, lvl1fooroverhangwall.y, 50, 1350, "red")
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
        const lvl1fooroverhangthin = new Rectangle(9800, -2800, 20, 1000, "red")
        floors.push(lvl1fooroverhangthin)
        for (let t = 0; t < 4; t++) {
            const floor3 = new Rectangle(-130 + 600 * t, 500 - (t * 90), 20, 400, "red")
            floors.push(floor3)
            for (let t = 0; t < 10; t++) {
                const fruit = new Fruit(floor3.x + (Math.random() * 400), floor3.y - (100 + Math.random() * 400), 60, 60, "red")
                let wet = 0
                for (let s = 0; s < floors.length; s++) {
                    if (squarecircleedges(floors[s], fruit.body)) {
                        wet = 1
                        break
                    }
                }
                for (let k = 0; k < fruits.length; k++) {
                    if (fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800)) {
                        wet = 1
                        break
                    }
                }
                if (wet == 0) {
                    fruits.push(fruit)
                }
            }
        }
        for (let t = 1; t < 15; t++) {
            let topfloorlvl1 = new Rectangle(4300 + (t * 530), -7000 + t * 140, 20, 330, "red")
            for (let t = 0; t < 15; t++) {
                const fruit = new Fruit(topfloorlvl1.x + topfloorlvl1.width * Math.random(), (-30) + topfloorlvl1.y - topfloorlvl1.width * Math.random(), 60, 60, "transparent")
                let wet = 0
                for (let s = 0; s < floors.length; s++) {
                    if (squarecircleedges(floors[s], fruit.body)) {
                        wet = 1
                        break
                    }
                }
                for (let k = 0; k < fruits.length; k++) {
                    if (fruit.body.repelCheck(fruits[k].body)) {
                        wet = 1
                        break
                    }
                }
                if (wet == 0) {
                    fruits.push(fruit)
                }
            }
            floors.push(topfloorlvl1)
        }
        for (let t = 1; t < 10; t++) {
            let topfloorlvl1 = new Rectangle(4300 + (t * 530), -6300 + t * 140, 20, 330, "red")
            for (let t = 0; t < 15; t++) {
                const fruit = new Fruit(topfloorlvl1.x + topfloorlvl1.width * Math.random(), (-30) + topfloorlvl1.y - topfloorlvl1.width * Math.random(), 60, 60, "transparent")
                let wet = 0
                for (let s = 0; s < floors.length; s++) {
                    if (squarecircleedges(floors[s], fruit.body)) {
                        wet = 1
                        break
                    }
                }
                for (let k = 0; k < fruits.length; k++) {
                    if (fruit.body.repelCheck(fruits[k].body)) {
                        wet = 1
                        break
                    }
                }
                if (wet == 0) {
                    fruits.push(fruit)
                }
            }
            if (t != 5) {
                floors.push(topfloorlvl1)
            }
        }
        for (let t = 0; t < 10; t++) {
            let topfloorlvl1 = new Rectangle(4300 + (t * 530), -7840 + t * 140, 20, 330, "red")
            if (t != 0) {
                for (let t = 0; t < 15; t++) {
                    const fruit = new Fruit(topfloorlvl1.x + topfloorlvl1.width * Math.random(), (-30) + topfloorlvl1.y - topfloorlvl1.width * Math.random(), 60, 60, "transparent")
                    let wet = 0
                    for (let s = 0; s < floors.length; s++) {
                        if (squarecircleedges(floors[s], fruit.body)) {
                            wet = 1
                            break
                        }
                    }
                    for (let k = 0; k < fruits.length; k++) {
                        if (fruit.body.repelCheck(fruits[k].body)) {
                            wet = 1
                            break
                        }
                    }
                    if (wet == 0) {
                        fruits.push(fruit)
                    }
                }
            }
            if (t != 5) {
                floors.push(topfloorlvl1)
            }
        }
        for (let t = 0; t < 14; t++) {
            const topfloorlvl1 = new Rectangle(4300 + (t * 530), -4800 - t * 140, 20, 330, "red")
            for (let t = 0; t < 15; t++) {
                const fruit = new Fruit(topfloorlvl1.x + topfloorlvl1.width * Math.random(), (-30) + topfloorlvl1.y - topfloorlvl1.width * Math.random(), 60, 60, "transparent")
                let wet = 0
                for (let s = 0; s < floors.length; s++) {
                    if (squarecircleedges(floors[s], fruit.body)) {
                        wet = 1
                        break
                    }
                }
                for (let k = 0; k < fruits.length; k++) {
                    if (fruit.body.repelCheck(fruits[k].body)) {
                        wet = 1
                        break
                    }
                }
                if (wet == 0) {
                    fruits.push(fruit)
                }
            }
            if (t != 8 && t != 10) {
                floors.push(topfloorlvl1)
            }
        }
        const topfloorlvl1x = new Rectangle(4300 + (14 * 530), -5100 - (14 * 140), 20, 330, "red")
        floors.push(topfloorlvl1x)

        for (let t = 0; t < 101; t++) {
            let swimmertop = new Swimmer(4300 + Math.random() * 6700, -7000 + Math.random() * 2200)
            swimmertop.type = 1
            swimmers.push(swimmertop)
        }
        for (let t = 0; t < 4; t++) {
            const floor3 = new Rectangle(-90 - 300 * t, 500 - (t * 200), 20, 400, "red")
            floors.push(floor3)
            for (let t = 0; t < 10; t++) {
                const fruit = new Fruit(floor3.x + (Math.random() * 400), floor3.y - (100 + Math.random() * 320), 60, 60, "red")
                let wet = 0
                for (let s = 0; s < floors.length; s++) {
                    if (squarecircleedges(floors[s], fruit.body)) {
                        wet = 1
                        break
                    }
                }
                for (let k = 0; k < fruits.length; k++) {
                    if (fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800)) {
                        wet = 1
                        break
                    }
                }
                if (wet == 0) {
                    fruits.push(fruit)
                }
            }
        }
        for (let t = 0; t < 456; t++) {
            const fruit = new Fruit(4250 + (Math.random() * 6000), -4300 + (Math.random() * 3500), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }
        for (let t = 0; t < 30; t++) {
            const swimmer = new Swimmer(4250 + (Math.random() * 6000), -4300 + (Math.random() * 1350))
            swimmer.type = 1
            swimmers.push(swimmer)
        }
        for (let t = 0; t < 30; t++) {
            const swimmer = new Swimmer(4250 + (Math.random() * 6000), -3475 + (Math.random() * 1350))
            swimmer.type = 0
            swimmers.push(swimmer)
        }
        for (let t = 0; t < 30; t++) {
            const swimmer = new Swimmer(4250 + (Math.random() * 6000), -2700 + (Math.random() * 1350))
            swimmer.type = 2
            swimmers.push(swimmer)
        }
        for (let t = 0; t < 100; t++) {
            const fruit = new Fruit(-2450 + (Math.random() * 4850), 225 + (Math.random() * 315), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }
        for (let t = 0; t < 30; t++) {
            const fruit = new Fruit(3740 + (Math.random() * 650), -470 + (Math.random() * 730), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 500 && fruit.body.x < 800)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }



        for (let k = 0; k < fruits.length * 5; k++) {
            swinger1move()
        }

        for (let k = 0; k < fruits.length; k++) {
            if (fruits[k].body.x > 11500 && fruits[k].body.y > -700) {
                fruits.splice(k, 1)
            }
        }
        for (let k = 0; k < fruits.length; k++) {
            if (fruits[k].body.x > 11800 && fruits[k].body.y > -900) {
                fruits.splice(k, 1)
            }
        }

        for (let t = 0; t < floors.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (squarecircleedges(floors[t], fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }
        for (let t = 0; t < ramps.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (ramps[t].isPointInside(fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }

        const fruitx = new Fruit(510, 340, 60, 60, "red")
        const fruity = new Fruit(-3200, 600, 60, 60, "red")
        fruity.type = 11
        fruity.type2 = 11
        fruits.push(fruitx)
        fruits.push(fruity)

        const cake2 = new Fruit(4458, -7890, 60, 60, "red")
        cake2.type = 11
        cake2.type2 = 11
        fruits.push(cake2)

        floormpf = [...floors]
    }

    function loadlvl2() {

        pomao.tonguex = 0
        pomao.tonguey = 0

        pin = new Circle(9900, -8100, 10, "transparent")
        pin2 = new Circle(9900, -8100 + (7 * 220), 100, "transparent")


        beamrocks = []
        pomao.cutscene = 0
        level = 2
        tutorial_canvas_context.translate(pomao.body.x, pomao.body.y)
        pomao.body.x = 0
        pomao.body.y = 0
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        //  shocks =[]
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        spinnys.splice(0, spinnys.length)
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        lavas.splice(0, lavas.length)
        snowfloors.splice(0, snowfloors.length)

        pomao.thrown = []

        const floor = new Rectangle(-1000, 33, 645, 20000)
        floors.push(floor)
        walls.push(floor)
        roofs.push(floor)

        boss = new Circle(0, 0, 0, "transparent")

        // boss = new Bossbeam()

        const lvl2wall1 = new Rectangle(-83, -1000, 1033, 50)
        floors.push(lvl2wall1)
        roofs.push(lvl2wall1)
        walls.push(lvl2wall1)
        const lvl2roof1 = new Rectangle(-83, -1000, 50, 1050)
        floors.push(lvl2roof1)
        roofs.push(lvl2roof1)
        walls.push(lvl2roof1)
        const lvl2roof2 = new Rectangle(917, -3000, 50, 1550)
        floors.push(lvl2roof2)
        roofs.push(lvl2roof2)
        walls.push(lvl2roof2)
        const lvl2roofstudy = new Rectangle(2417, -3500, 50, 550)
        floors.push(lvl2roofstudy)
        roofs.push(lvl2roofstudy)
        walls.push(lvl2roofstudy)
        const lvl2floorstudy = new Rectangle(2417, -2970, 20, 550)
        floors.push(lvl2floorstudy)
        const lvl2wallstudy1 = new Rectangle(2417, -3500, 550, 50)
        floors.push(lvl2wallstudy1)
        roofs.push(lvl2wallstudy1)
        walls.push(lvl2wallstudy1)
        const lvl2wall2 = new Rectangle(917, -3000, 2520, 50)
        floors.push(lvl2wall2)
        roofs.push(lvl2wall2)
        walls.push(lvl2wall2)
        const lvl2wall3 = new Rectangle(2917, -3500, 3350, 50)
        floors.push(lvl2wall3)
        roofs.push(lvl2wall3)
        walls.push(lvl2wall3)
        const lvl2entrywayfloor = new Rectangle(-33, -220, 20, 250)
        floors.push(lvl2entrywayfloor)
        const lvl2parentfloor = new Rectangle(-33, -520, 20, 950)
        floors.push(lvl2parentfloor)
        const lvl2midwayfloor1 = new Rectangle(1667, -290, 20, 500)
        floors.push(lvl2midwayfloor1)

        let momdialogue = new Dialogue(505, -585)
        momdialogue.words.push("Hello Pomao!")
        momdialogue.words.push("Pa wants to talk to you.")
        momdialogue.words.push("He is in his study in the tower.")
        chats.push(momdialogue)

        const momblock = new Rectangle(505, -585, 90, 60)
        floors.push(momblock)
        walls.push(momblock)
        roofs.push(momblock)
        invisblocks.push(momblock)





        const joblock = new Rectangle(1225, -1070, 90, 60)
        floors.push(joblock)
        walls.push(joblock)
        roofs.push(joblock)
        invisblocks.push(joblock)



        // chats must be after padialogue to function after this point
        let padialogue = new Dialogue(2505, -3035)
        padialogue.words.push("Pomao!")
        padialogue.words.push("I need to talk to you.")
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



        let pomarinedialogue = new Dialogue(5505, -3035)
        pomarinedialogue.words.push("You!!")
        pomarinedialogue.words.push("Stop what you are doing!")
        pomarinedialogue.words.push("Where is your egg-laying license?")
        pomarinedialogue.words.push("What is your permitted eggs-limit?")
        pomarinedialogue.words.push("...")
        pomarinedialogue.words.push("Can't you count!?")
        pomarinedialogue.words.push("You're way over!")
        pomarinedialogue.words.push("You're coming with me kid...")
        chats.push(pomarinedialogue)



        let jodialogue = new Dialogue(1225, -1070)
        jodialogue.words.push("Jomao: Pomao!")
        jodialogue.words.push("Jomao: I'd hug you but...")
        jodialogue.words.push("Jomao: Ya know, no arms.")
        chats.push(jodialogue)

        const pawblock = new Rectangle(2505, -3035, 90, 60)
        floors.push(pawblock)
        walls.push(pawblock)
        roofs.push(pawblock)
        invisblocks.push(pawblock)

        for (let t = 0; t < 32; t++) {
            let wet = 0
            const fruit = new Fruit(3000 + Math.random() * 1000, -60 - (Math.random() * 570), 60, 60, "transparent")
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }

        for (let t = 1; t < 12; t++) {
            const livingfloor = new Rectangle(967, -3000 + (t * 250), 20, 500, "red")
            if (t % 2 == 1) {
                livingfloor.x += 1450
            }
            floors.push(livingfloor)
        }

        floormpf = [...floors]
    }
    function loadlvl3() {

        pomao.tonguex = 0
        pomao.tonguey = 0
        pin = new Circle(9900, -8100, 10, "transparent")
        pin2 = new Circle(9900, -8100 + (7 * 220), 100, "transparent")

        beamrocks = []
        pomao.eggs = [pomao.body]
        pomao.cutscene = 0
        level = 3
        tutorial_canvas_context.translate(pomao.body.x, pomao.body.y)
        pomao.body.x = 0
        pomao.body.y = 0
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        spinnys.splice(0, spinnys.length)
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        lavas.splice(0, lavas.length)
        snowfloors.splice(0, snowfloors.length)
        pomao.thrown = []


        boss = new Circle(0, 0, 0, "transparent")
        // boss = new Bossbeam()

        const lvl3wall1 = new Rectangle(-183, -1000, 1033, 50)
        floors.push(lvl3wall1)
        roofs.push(lvl3wall1)
        walls.push(lvl3wall1)
        const floor = new Rectangle(-1000, 33, 1030, 2840)
        floors.push(floor)
        walls.push(floor)
        roofs.push(floor)


        const guardfloor = new Rectangle(3100, 33, 200, 2100)
        floors.push(guardfloor)
        walls.push(guardfloor)
        roofs.push(guardfloor)
        const guardfloorx = new Rectangle(3100, 233, 830, 2100, "cyan")
        floors.push(guardfloorx)
        walls.push(guardfloorx)
        roofs.push(guardfloorx)
        ungrapplable.push(guardfloorx)
        const guardfloorroof = new Rectangle(3100, -1233, 50, 2100, "cyan")
        floors.push(guardfloorroof)
        walls.push(guardfloorroof)
        roofs.push(guardfloorroof)
        ungrapplable.push(guardfloorroof)
        const guardfloorwall = new Rectangle(5150, -1233, 2063, 50, "cyan")
        floors.push(guardfloorwall)
        walls.push(guardfloorwall)
        roofs.push(guardfloorwall)
        ungrapplable.push(guardfloorwall)

        const lvl3basefloor = new Rectangle(-1000, 1030, 645, 20000)
        floors.push(lvl3basefloor)
        walls.push(lvl3basefloor)
        roofs.push(lvl3basefloor)

        const lvl3roof1 = new Rectangle(-183, -1000, 50, 1050)
        floors.push(lvl3roof1)
        roofs.push(lvl3roof1)
        walls.push(lvl3roof1)
        ungrapplable.push(lvl3roof1)


        const prisoner1block = new Rectangle(200, -34, 90, 60)
        floors.push(prisoner1block)
        walls.push(prisoner1block)
        roofs.push(prisoner1block)
        invisblocks.push(prisoner1block)

        const prisoner2block = new Rectangle(600, -34, 90, 60)
        floors.push(prisoner2block)
        walls.push(prisoner2block)
        roofs.push(prisoner2block)
        invisblocks.push(prisoner2block)


        const prisoner3block = new Rectangle(900, -34, 90, 60)
        floors.push(prisoner3block)
        walls.push(prisoner3block)
        roofs.push(prisoner3block)
        invisblocks.push(prisoner3block)

        let prisoner1dialogue = new Dialogue(200, -34)
        prisoner1dialogue.words.push("What are ya in fer?")
        prisoner1dialogue.words.push("Let me guess...")
        prisoner1dialogue.words.push("Over your egg limit?")
        prisoner1dialogue.words.push("Doesn't take much these days.")
        prisoner1dialogue.words.push("I'm in here since six years ago for playing music in public.")
        chats.push(prisoner1dialogue)

        let prisoner2dialogue = new Dialogue(600, -34)
        prisoner2dialogue.words.push("Fresh meat...")
        chats.push(prisoner2dialogue)

        let prisoner3dialogue = new Dialogue(900, -34)
        prisoner3dialogue.words.push("If only I werent so fat...")
        prisoner3dialogue.words.push("I would flutter-stutter across the gap...")
        prisoner3dialogue.words.push("... knock out the guard...")
        prisoner3dialogue.words.push("... and flip the switch...")
        chats.push(prisoner3dialogue)



        const switcher = new Rectangle(4800, -95, 128, 128)
        floors.push(switcher)
        walls.push(switcher)
        roofs.push(switcher)
        ungrapplable.push(switcher)
        invisblocks.push(switcher)


        const guardblock = new Rectangle(4500, -34, 90, 60)
        floors.push(guardblock)
        walls.push(guardblock)
        roofs.push(guardblock)
        invisblocks.push(guardblock)

        door = new Rectangle(-10000, -10000, 20000, 9500, "#090909")

        floormpf = [...floors]
    }

    function loadlvl4() {

        pomao.tonguex = 0
        pomao.tonguey = 0
        pin = new Circle((-1950 + (30 * 180)), (-9100 - (30 * 57)), 10, "transparent")
        pin2 = new Circle((-1950 + (30 * 180)), (-9800 - (30 * 57)) + (7 * 220), 100, "transparent")
        springs = []
        objsprings = []

        objsprings.push(pin2)

        let spring = new Spring(pin)
        springs.push(spring)
        for (let k = 0; k < 33; k++) {
            spring = new Spring(spring.anchor)
            if (k < 32) {
                springs.push(spring)
            } else if (k == 32) {
                spring.anchor = pin2
                springs.push(spring)
            }
        }

        beamrocks = []

        pomao.cutscene = 0
        level = 4

        // tutorial_canvas_context.translate(pomao.body.x-640, pomao.body.y+17360)
        // pomao.body.x = 640
        // pomao.body.y = -17360
        tutorial_canvas_context.translate(pomao.body.x, pomao.body.y)//+18000)
        pomao.body.x = 0
        pomao.body.y = 0//-18000
        spinnys.splice(0, spinnys.length)
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        lavas.splice(0, lavas.length)
        snowfloors.splice(0, snowfloors.length)
        pomao.thrown = []

        //  pomao.eggmake = 161



        ramps.push(pin2)

        const floor = new Rectangle(-10000, 33, 1030, 28400)
        floors.push(floor)
        walls.push(floor)
        roofs.push(floor)


        const platform1 = new Rectangle(183, -340, 20, 2000)
        floors.push(platform1)

        const platform2 = new Rectangle(-1111, -170, 20, 1000)
        floors.push(platform2)

        const platform3 = new Rectangle(-1111, -670, 20, 1000)
        floors.push(platform3)

        const platform4 = new Rectangle(-83, -940, 20, 2000)
        floors.push(platform4)

        const platform5 = new Rectangle(-1511, -1300, 20, 1000)
        floors.push(platform5)

        const platform6 = new Rectangle(-1911, -1660, 20, 1000)
        floors.push(platform6)

        const platform7 = new Rectangle(1500, -680, 20, 1000)
        floors.push(platform7)

        const platform8 = new Rectangle(2500, -980, 20, 1000)
        floors.push(platform8)

        const platform9 = new Rectangle(3500, -1380, 20, 1000)
        floors.push(platform9)

        const platform10 = new Rectangle(4500, -1700, 20, 1000)
        floors.push(platform10)

        const platform11 = new Rectangle(5500, -2100, 20, 1000)
        floors.push(platform11)

        const platform12 = new Rectangle(1500, -3450, 20, 1000)
        floors.push(platform12)

        const platform13 = new Rectangle(2500, -3100, 20, 1000)
        floors.push(platform13)

        const platform14 = new Rectangle(3500, -2800, 20, 1000)
        floors.push(platform14)

        const platform15 = new Rectangle(4500, -2400, 20, 1000)
        floors.push(platform15)


        const platform16 = new Rectangle(-1511, -1900, 20, 1000)
        floors.push(platform16)

        const platform17 = new Rectangle(-1911, -2160, 20, 1000)
        floors.push(platform17)

        const platform18 = new Rectangle(-1511, -2460, 20, 1000)
        floors.push(platform18)

        const platform19 = new Rectangle(-1911, -3060, 20, 1000)
        floors.push(platform19)

        const platform20 = new Rectangle(-1511, -3390, 20, 1000)
        floors.push(platform20)

        const platform21 = new Rectangle(-111, -3390, 20, 1000) // prisoner floor
        floors.push(platform21)



        const platformcake = new Rectangle(700, -2040, 20, 1300)
        floors.push(platformcake)

        const platformsafe = new Rectangle(7400, -2040, 20, 1700)
        floors.push(platformsafe)


        const shaft1 = new Rectangle(0, -7000, 1000, 50, "red")
        floors.push(shaft1)
        walls.push(shaft1)
        roofs.push(shaft1)

        const shaft2 = new Rectangle(0, -5000, 1000, 50, "red")
        floors.push(shaft2)
        walls.push(shaft2)
        roofs.push(shaft2)

        const shaft3 = new Rectangle(-400, -5850, 500, 50, "red")
        floors.push(shaft3)
        walls.push(shaft3)
        roofs.push(shaft3)

        const shaft4 = new Rectangle(400, -5650, 500, 50, "red")
        floors.push(shaft4)
        walls.push(shaft4)
        roofs.push(shaft4)

        const shaft5 = new Rectangle(-2050, -6950, 1200, 20, "red")
        floors.push(shaft5)
        walls.push(shaft5)
        roofs.push(shaft5)



        for (let t = 0; t < 7; t++) {
            const shaft7 = new Rectangle(-1900 + t * 200, -5800 - t * 10, 20, 40, "red")
            floors.push(shaft7)
        }


        for (let t = 0; t < 36; t++) {
            const shaft6 = new Rectangle(-1950 + t * 144, -6800 - t * 57, 20, 36, "red")
            floors.push(shaft6)
        }


        for (let t = 0; t < 30; t++) {
            const shaft6 = new Rectangle((-1950 + (30 * 180)) + t * 20, (-6800 - (30 * 57)) + t * 100, 20, 30, "red")
            floors.push(shaft6)
        }


        const shaft8 = new Rectangle(300, -7000, 20, 1000, "red")
        floors.push(shaft8)

        const shaft9 = new Rectangle(1600, -6500, 20, 1000, "red")
        floors.push(shaft9)

        const shaft10 = new Rectangle(2800, -5900, 20, 1000, "red")
        floors.push(shaft10)


        const shaft13 = new Rectangle(3800, -5400, 20, 1000, "red")
        floors.push(shaft13)


        const pinblock = new Rectangle((-1950 + (30 * 180)) - 25, (-9100 - (30 * 57)) - 25, 50, 50, "blue")
        floors.push(pinblock)
        walls.push(pinblock)
        roofs.push(pinblock)




        const shaft11 = new Rectangle(4850, -8900, 20, 1000, "red")
        floors.push(shaft11)



        const shaft12 = new Rectangle(5850, -9300, 20, 2000, "red")
        floors.push(shaft12)



        const shaft14 = new Rectangle(4800, -9700, 20, 1000, "red")
        floors.push(shaft14)

        const shaft18 = new Rectangle(4100, -10100, 20, 500, "red")
        floors.push(shaft18)


        const shaft28 = new Rectangle(3800, -10400, 20, 300, "red")
        floors.push(shaft28)


        const shaft34 = new Rectangle(3950, -10900, 20, 300, "red")
        floors.push(shaft34)


        const shaft35 = new Rectangle(4450, -11300, 20, 300, "red")
        floors.push(shaft35)


        const shaft36 = new Rectangle(4850, -11700, 20, 300, "red")
        floors.push(shaft36)

        const shaft37 = new Rectangle(4250, -12000, 20, 300, "red")
        floors.push(shaft37)

        const shaft38 = new Rectangle(4850, -12400, 20, 300, "red")
        floors.push(shaft38)

        const shaft39 = new Rectangle(5250, -12700, 20, 500, "red")
        floors.push(shaft39)

        const shaft40 = new Rectangle(5750, -12900, 20, 500, "red")
        floors.push(shaft40)


        const shaft15 = new Rectangle(5500, -5700, 20, 1000, "red")
        floors.push(shaft15)


        const shaft16 = new Rectangle(6500, -5200, 20, 1000, "red")
        floors.push(shaft16)

        const shaft17 = new Rectangle(7500, -4700, 20, 1000, "red")
        floors.push(shaft17)


        for (let t = 1; t < floors.length; t++) {
            for (let k = 0; k < 44; k++) {
                let wet = 0
                const fruit = new Fruit(floors[t].x + Math.random() * floors[t].width, floors[t].y - Math.random() * 340, 60, 60, "transparent")

                for (let k = 0; k < fruits.length; k++) {
                    if (fruits[k].body.repelCheck(fruit.body)) {
                        wet = 1
                    }
                }
                for (let k = 0; k < floors.length; k++) {
                    if (squarecircleedges(floors[k], fruit.body)) {
                        wet = 1
                    }
                }
                if (wet == 0) {
                    fruits.push(fruit)
                }
            }
        }



        //  const platform21 = new Rectangle(-111,-3390,20,1000) // prisoner floor
        const prisoner3block = new Rectangle(213, -3450, 90, 60)
        floors.push(prisoner3block)
        walls.push(prisoner3block)
        roofs.push(prisoner3block)
        invisblocks.push(prisoner3block)


        let prisoner3dialogue = new Dialogue(213, -3450)
        prisoner3dialogue.words.push("If only I werent so fat...")
        prisoner3dialogue.words.push("I would pogo flutter up to those walls...")
        prisoner3dialogue.words.push("... those guys left me behind...")
        prisoner3dialogue.words.push("... Hey, thanks for flipping the switch.")
        chats.push(prisoner3dialogue)

        const shaft19 = new Rectangle(9050, -5700, 500, 50, "red")
        floors.push(shaft19)
        walls.push(shaft19)
        roofs.push(shaft19)

        const shaft20 = new Rectangle(8550, -6300, 500, 50, "red")
        floors.push(shaft20)
        walls.push(shaft20)
        roofs.push(shaft20)

        const shaft21 = new Rectangle(9050, -6900, 500, 50, "red")
        floors.push(shaft21)
        walls.push(shaft21)
        roofs.push(shaft21)

        const shaft22 = new Rectangle(8550, -7500, 500, 50, "red")
        floors.push(shaft22)
        walls.push(shaft22)
        roofs.push(shaft22)

        const shaft23 = new Rectangle(9050, -8100, 500, 50, "red")
        floors.push(shaft23)
        walls.push(shaft23)
        roofs.push(shaft23)

        const shaft24 = new Rectangle(8550, -8700, 500, 50, "red")
        floors.push(shaft24)
        walls.push(shaft24)
        roofs.push(shaft24)

        const shaft25 = new Rectangle(9050, -9400, 600, 50, "red")
        floors.push(shaft25)
        walls.push(shaft25)
        roofs.push(shaft25)

        const shaft26 = new Rectangle(8550, -10300, 600, 50, "red")
        floors.push(shaft26)
        walls.push(shaft26)
        roofs.push(shaft26)

        const shaft27 = new Rectangle(8250, -11000, 300, 50, "red")
        floors.push(shaft27)
        walls.push(shaft27)
        roofs.push(shaft27)

        const shaft29 = new Rectangle(7950, -11500, 300, 50, "red")
        floors.push(shaft29)
        walls.push(shaft29)
        roofs.push(shaft29)

        const shaft30 = new Rectangle(7550, -12000, 300, 50, "red")
        floors.push(shaft30)
        walls.push(shaft30)
        roofs.push(shaft30)

        const shaft31 = new Rectangle(7050, -12500, 300, 50, "red")
        floors.push(shaft31)
        walls.push(shaft31)
        roofs.push(shaft31)

        const shaft32 = new Rectangle(7550, -13000, 300, 50, "red")
        floors.push(shaft32)
        walls.push(shaft32)
        roofs.push(shaft32)

        const shaft33 = new Rectangle(7050, -13500, 300, 50, "red")
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


        for (let t = 0; t < 11; t++) {

            const rockfloor = new Rectangle(400 + t * 600, (-10300 - 4950) + 60 * t, 50, 50)
            floors.push(rockfloor)
            walls.push(rockfloor)
            roofs.push(rockfloor)

        }


        const rockfloor = new Rectangle(1000 + 6000, (-10300 - 4950) + 350, 20, 1050)
        floors.push(rockfloor)
        // walls.push(rockfloor)
        // roofs.push(rockfloor)

        const bossfloor = new Rectangle(-2100, (-10300 - 6550) + 350, 50, 10100)
        floors.push(bossfloor)
        walls.push(bossfloor)
        roofs.push(bossfloor)
        beamrocks.push(bossfloor)

        const bossgap1 = new Rectangle(8000, (-10300 - 6050) + 350, 20, 1100)
        floors.push(bossgap1)

        const bossgap3 = new Rectangle(8000, (-10300 - 5550) + 350, 20, 1100)
        floors.push(bossgap3)

        const bossgap2 = new Rectangle(8000, (-10300 - 6550) + 350, 20, 1100)
        floors.push(bossgap2)
        beamrocks.push(bossgap2)

        door = new Rectangle(-2050, (-10300 - 6550) + 150, 200, 200, "#090909")

        for (let k = 1; k < floors.length; k++) {
            if (floors[k].width > 99) {
                for (let t = 0; t < 2; t++) {
                    const bat = new Bat(floors[k].x + (Math.random() * floors[k].width), floors[k].y - (Math.random() * 400))
                    bats.push(bat)
                }
            }
        }

        for (let k = 1; k < floors.length; k++) {
            if (floors[k].width < 99) {
                for (let t = 0; t < 1; t++) {
                    const bat = new Cloud(floors[k].x + (Math.random() * floors[k].width), floors[k].y - (Math.random() * 400))
                    if (Math.random() < .5) {
                        bats.push(bat)
                    }
                }
            }
        }



        for (let k = 0; k < fruits.length; k++) {
            fruits[k].x -= 20
            fruits[k].body.radius *= 1.8
        }


        for (let t = 0; t < floors.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (squarecircleedges(floors[t], fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }

        for (let t = 0; t < floors.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (squarecirclehead(floors[t], fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }
        for (let t = 0; t < floors.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (squarecirclefeet(floors[t], fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }
        for (let t = 0; t < ramps.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (ramps[t].isPointInside(fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }

        for (let k = 0; k < fruits.length * 5; k++) {
            swinger1move()
        }


        for (let t = 0; t < 300; t++) {
            const bossrock = new Rectangle(-1750 + Math.random() * 10000, (-10300 - 8950) + Math.random() * 2650, 60 + ((Math.random() - .5) * 50), 60 + ((Math.random() - .5) * 50), "red")
            let bang = 0
            for (let k = 0; k < beamrocks.length; k++) {
                let link = new Line(bossrock.x, bossrock.y, beamrocks[k].x, beamrocks[k].y, "red", 2)
                if (link.hypotenuse() < 245) {
                    bang = 1
                }
            }
            if (bang == 0) {
                floors.push(bossrock)
                roofs.push(bossrock)
                walls.push(bossrock)
                beamrocks.push(bossrock)
            }
        }


        for (let k = 0; k < 600; k++) {
            let wet = 0
            const fruit = new Fruit(-1750 + Math.random() * 10000, (-10300 - 8950) + Math.random() * 2500, 60 + ((Math.random() - .5) * 10), 60, 60, "transparent")

            for (let k = 0; k < fruits.length; k++) {
                if (fruits[k].body.repelCheck(fruit.body)) {
                    wet = 1
                }
            }
            for (let k = 0; k < floors.length; k++) {
                if (squarecircleedges(floors[k], fruit.body)) {
                    wet = 1
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }


        floormpf = [...floors]
        for (let t = 0; t < 5; t++) {

            let spinny = new Spinwheel(2600 - t * 700, -11300 - t * 990)
            spinnys.push(spinny)

        }


        boss = new Observer(3000, (-10300 - 6950))


        boss.obstacles = [...beamrocks]
        boss.obstacles.push(wall2)
        boss.obstacles.push(pomao.body)
    }

    function loadlvl5() {

        pomao.tonguex = 0
        pomao.tonguey = 0
        pin = new Circle((-1950 + (30 * 180)), (-9100 - (30 * 57)), 10, "transparent")
        pin2 = new Circle((-1950 + (30 * 180)), (-9800 - (30 * 57)) + (7 * 220), 100, "transparent")
        springs = []
        objsprings = []

        // objsprings.push(pin2)

        // let spring = new Spring(pin)
        // springs.push(spring)
        // for(let k = 0; k<33;k++){
        //     spring = new Spring(spring.anchor)
        //     if(k < 32){
        //         springs.push(spring)
        //     }else if(k == 32 ){
        //         spring.anchor = pin2
        //         springs.push(spring)
        //     }
        // }

        beamrocks = []
        pomao.cutscene = 0
        level = 5


        tutorial_canvas_context.translate(pomao.body.x, pomao.body.y)
        // tutorial_canvas_context.translate(pomao.body.x-8000, pomao.body.y)
        pomao.body.x = 0 //0
        // pomao.body.x = 8000
        pomao.body.y = 0
        spinnys.splice(0, spinnys.length)
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        lavas.splice(0, lavas.length)
        snowfloors.splice(0, snowfloors.length)
        pomao.thrown = []

        //  pomao.eggmake = 161
        boss = new Circle(0, 0, 0, "transparent")


        const wall1 = new Rectangle(-2100, -30000, 30033, 50, "cyan")
        walls.push(wall1)
        floors.push(wall1)
        roofs.push(wall1)
        // ungrapplable.push(wall1)

        const wall2 = new Rectangle(11600, -30000, 30033, 50, "cyan")
        walls.push(wall2)
        floors.push(wall2)
        roofs.push(wall2)
        // ungrapplable.push(wall2)

        chafer = new Buggle(wall2)


        const wall3 = new Rectangle(11900, -30000, 30033, 50, "cyan")
        walls.push(wall3)
        floors.push(wall3)
        roofs.push(wall3)

        door = new Rectangle(11650, 33 - 200, 200, 200, "#090909")


        const floor = new Rectangle(-10000, 33, 1030, 28400)
        floors.push(floor)
        walls.push(floor)
        roofs.push(floor)

        for (let k = 0; k < fruits.length; k++) {
            fruits[k].x -= 20
            fruits[k].body.radius *= 1.8
        }


        for (let t = 0; t < floors.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (squarecircleedges(floors[t], fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }

        for (let t = 0; t < floors.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (squarecirclehead(floors[t], fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }
        for (let t = 0; t < floors.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (squarecirclefeet(floors[t], fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }
        for (let t = 0; t < ramps.length; t++) {
            for (let k = 0; k < fruits.length; k++) {
                if (ramps[t].isPointInside(fruits[k].body)) {
                    fruits.splice(k, 1)
                }
            }
        }

        // pomao.eggmake = 161000
        for (let k = 1; k < 7; k++) {

            let cactus = new Cactus(500 + (k * 1280), 0, 40, 40, "orange")
            boys.push(cactus)
            for (let t = 0; t < 25; t++) {
                cactus = new Cactus(500 + (k * 1280), 0, 40, 40, "red")
                cactus.parent = boys[boys.length - 1]
                boys[boys.length - 1].child = cactus
                boys.push(cactus)
            }


        }
        for (let k = 1; k < 28; k++) {


            let cactus = new Cactus(500 + (k * 300), 0, 40, 40, "red")
            boys.push(cactus)
            for (let t = 0; t < 5 + Math.floor(Math.random() * 5); t++) {
                cactus = new Cactus(500 + (k * 300), 0, 40, 40, "red")
                cactus.parent = boys[boys.length - 1]
                boys[boys.length - 1].child = cactus
                boys.push(cactus)
            }


        }

        const lvl5roof = new Rectangle(-2100, -(tutorial_canvas.height * 3.1), 50, 17550, "red")
        floors.push(lvl5roof)
        walls.push(lvl5roof)
        roofs.push(lvl5roof)

        for (let t = 1; t < 14; t++) {
            const lvl5struts = new Rectangle(-500 + t * 642, (-(tutorial_canvas.height * 3.1)) + ((t % 2) * 300), (tutorial_canvas.height * 3.1) - 267, 50, "red")
            if (t !== 1) {
                walls.push(lvl5struts)
                floors.push(lvl5struts)
                roofs.push(lvl5struts)
            }
        }


        // let cactus2  = new Cactus(500+(80),0,40,40,"red")
        // boys.push(cactus2)
        // for(let t = 0; t<14; t++){
        //     cactus2 = new Cactus(500,0,40,40,"red")
        //     cactus2.parent = boys[boys.length-1]
        //     boys[boys.length-1].child = cactus2
        //     boys.push(cactus2)
        // }



        // for(let k = 0;k<fruits.length*5;k++){
        //     swinger1move()
        //     }

        // floormpf = [...floors]
        // for(let t = 0;t<5;t++){

        //     spinny = new Spinwheel(2600-t*700, -11300-t*990)
        //     spinnys.push(spinny)

        // }



        for (let t = 0; t < 2000; t++) {
            let orb = new Orb()
            let click = 0
            for (let k = 0; k < orbs.length; k++) {
                let link = new Line(orb.body.x, orb.body.y, orbs[k].body.x, orbs[k].body.y, "green", 3)
                if (link.hypotenuse() < 350) {
                    click = 1
                }
            }
            if (click == 0) {
                orbs.push(orb)
            } else {
                ramps.splice(ramps.indexOf(orb.body), 1)
            }
        }


        for (let t = 0; t < orbs.length; t++) {
            for (let k = 0; k < orbs.length; k++) {

                if (k !== t) {
                    let link = new Line(orbs[t].body.x, orbs[t].body.y, orbs[k].body.x, orbs[k].body.y, "white", .3)

                    // //console.log(link)
                    if (link.hypotenuse() < 685) {
                        links.push([t, k])
                    }
                }
            }
        }


        for (let k = 0; k < 400; k++) {
            let wet = 0
            const fruit = new Fruit(8000 + (Math.random() * tutorial_canvas.width * 2.5), -(tutorial_canvas.height * 3) + (Math.random() * tutorial_canvas.height * 3), 60, 60, "transparent")

            for (let k = 0; k < fruits.length; k++) {
                if (fruits[k].body.repelCheck(fruit.body)) {
                    wet = 1
                }
            }
            for (let k = 0; k < floors.length; k++) {
                if (squarecircleedges(floors[k], fruit.body)) {
                    wet = 1
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }
        for (let k = 0; k < 100; k++) {
            let wet = 0
            const fruit = new Fruit(-1200 + (Math.random() * tutorial_canvas.width * 8), -(tutorial_canvas.height * .71) + (Math.random() * tutorial_canvas.height * .71), 60, 60, "transparent")

            for (let k = 0; k < fruits.length; k++) {
                if (fruits[k].body.repelCheck(fruit.body)) {
                    wet = 1
                }
            }
            for (let k = 0; k < floors.length; k++) {
                if (squarecircleedges(floors[k], fruit.body)) {
                    wet = 1
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }

    }


    function loadlvl6() {

        lvl6bossmusic.pause()
        pomao.tonguex = 0
        pomao.tonguey = 0
        pin = new Circle((-1950 + (30 * 180)), (-9100 - (30 * 57)), 10, "transparent")
        pin2 = new Circle((-1950 + (30 * 180)), (-9800 - (30 * 57)) + (7 * 220), 100, "transparent")
        springs = []
        objsprings = []

        // objsprings.push(pin2)

        // let spring = new Spring(pin)
        // springs.push(spring)
        // for(let k = 0; k<33;k++){
        //     spring = new Spring(spring.anchor)
        //     if(k < 32){
        //         springs.push(spring)
        //     }else if(k == 32 ){
        //         spring.anchor = pin2
        //         springs.push(spring)
        //     }
        // }

        beamrocks = []
        pomao.cutscene = 0
        level = 6


        tutorial_canvas_context.translate(pomao.body.x + 1000, pomao.body.y + 0)
        pomao.body.x = -1000
        pomao.body.y = 0
        spinnys.splice(0, spinnys.length)
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        lavas.splice(0, lavas.length)
        snowfloors.splice(0, snowfloors.length)
        pomao.thrown = []

        boss = new Circle(0, 0, 0, "transparent")
        //  pomao.eggmake = 161
        // boss = new Bossbeam()


        const floor = new Rectangle(-10000, 33, 103000, 28400)
        floors.push(floor)
        walls.push(floor)
        roofs.push(floor)

        const wall1 = new Rectangle(-2100, -30000, 30033, 50, "cyan")
        walls.push(wall1)
        floors.push(wall1)
        roofs.push(wall1)
        // ungrapplable.push(wall1)

        const wall2 = new Rectangle(11600, -30000, 30033, 50, "cyan")
        walls.push(wall2)
        floors.push(wall2)
        roofs.push(wall2)

        for (let t = 2; t < 22; t++) {
            const ladder = new Rectangle(11300, 130 + (t * -130), 20, 300, "red")
            if (t % 3 == 0) {
                ladder.x -= 300
            }
            if (t % 5 == 0) {
                ladder.x -= 600
            }
            floors.push(ladder)
        }


        // 11600

        for (let t = 2; t < 22; t++) {
            const ladder2 = new Rectangle(11230, -5600 - (t * 170), 20, 370, "red")
            if (t % 3 == 0) {
                ladder2.x -= 305
            }
            if (t % 5 == 0) {
                ladder2.x -= 605
            }
            if (t != 19) {
                floors.push(ladder2)
            }
            // if(t == 21 || t== 22){
            //     console.log(ladder2)
            // }
        }

        const ladderx = new Rectangle(10030, -8870, 20, 2000, "red")
        floors.push(ladderx)

        const lvl6layer3 = new Rectangle(-2100, -9170, 500, (10925 + 2100) - 605)
        floors.push(lvl6layer3)
        walls.push(lvl6layer3)
        roofs.push(lvl6layer3)


        const wormboss = new Wormboss(0, -10250)
        const wagglersubunit = new Wagglersubunit(wormboss.joints[2].x, wormboss.joints[2].y, wormboss.joints[2])
        const wagglersubunit2 = new Wagglersubunit(wormboss.joints[2].x, wormboss.joints[2].y, wormboss.joints[2])

        worms.push(wagglersubunit)
        worms.push(wagglersubunit2)
        worms.push(wormboss)

        for (let t = 0; t < 14; t++) {

            const lvl6layer3walls = new Rectangle(-1600 + (t * 850), -11170, 1800, 300)
            if (t % 2 == 0) {
                lvl6layer3walls.y -= 480
            }

            floors.push(lvl6layer3walls)
            walls.push(lvl6layer3walls)
            roofs.push(lvl6layer3walls)

        }

        const ramp5 = new Triangle90(5300, 53, "red", 500)
        ramps.push(ramp5)
        ramps90.push(ramp5)
        const ramp6 = new Triangle90l(5300, 53, "red", 500)
        ramps.push(ramp6)
        ramps90.push(ramp6)


        const layer1soft = new Rectangle(9900, -2600, 20, 1700, "red")
        floors.push(layer1soft)

        const layer1 = new Rectangle(-2100, -2600, 600, 12300, "red")
        walls.push(layer1)
        floors.push(layer1)
        roofs.push(layer1)
        const layer1mountain1 = new Triangle90(3900, -2580, "red", 580)
        ramps.push(layer1mountain1)
        ramps90.push(layer1mountain1)
        const layer1mountain2 = new Triangle90l(3900, -2580, "red", 580)
        ramps.push(layer1mountain2)
        ramps90.push(layer1mountain2)



        const layer2 = new Rectangle(0, -5200, 600, 11700, "red")
        walls.push(layer2)
        floors.push(layer2)
        roofs.push(layer2)
        const layer2mountain1 = new Triangle90(4100, -5200, "red", 100)
        ramps.push(layer2mountain1)
        ramps90.push(layer2mountain1)
        const layer2mountain2 = new Triangle90l(4100, -5200, "red", 100)
        ramps.push(layer2mountain2)
        ramps90.push(layer2mountain2)

        let island1 = new FloatingIsland(-1000, -1000, 300, .8)
        let island2 = new FloatingIsland(-300, -400, 100, .8)
        let island3 = new FloatingIsland(-20, -1200, 400, .6, .65)
        let island4 = new FloatingIsland(500, -600, 50, .6)
        let island5 = new FloatingIsland(600, -400, 70, .9)
        let island6 = new FloatingIsland(1000, -700, 170, .9)
        let island7 = new FloatingIsland(1600, -1300, 200, .5, 2.55)
        let island8 = new FloatingIsland(2800, -1400, 600, .5, .5)
        let island9 = new FloatingIsland(7800, -1200, 600, .5, .5)
        let island10 = new FloatingIsland(9300, -1500, 400, .5, .5)
        let island11 = new FloatingIsland(9800, -700, 290, .4, .9)
        let island12 = new FloatingIsland(10250, -1270, 160, .5, .5)
        let island13 = new FloatingIsland(10250, -1270, 160, .5, .5)
        let island14 = new FloatingIsland(10250, -3070, 160, .5, .5)
        let island15 = new FloatingIsland(9250, -3570, 160, .5, .8)
        let island16 = new FloatingIsland(8050, -3670, 260, .2, .8)
        let island17 = new FloatingIsland(6500, -3870, 100, .2, .525)
        let island18 = new FloatingIsland(7300, -3970, 100, .2, 1.525)
        let island19 = new FloatingIsland(9850, -4070, 160, .5, 3.5)
        let island20 = new FloatingIsland(9550, -3270, 180, .35, 1)
        let island21 = new FloatingIsland(8650, -3970, 100, .35, 1)
        let island22 = new FloatingIsland(-1600, -5000, 20, 1, 25)


        const layer1mountain3 = new Trianglex(8100, -2580, "red", 200)
        ramps.push(layer1mountain3)
        ramps90.push(layer1mountain3)

        const layer1mountain4 = new Trianglex(7100, -2580, "red", 300)
        ramps.push(layer1mountain4)
        ramps90.push(layer1mountain4)

        const layer1mountain5 = new Trianglex(6200, -2580, "red", 350)
        ramps.push(layer1mountain5)
        ramps90.push(layer1mountain5)
        // const layer1mountain4 = new Triangle90l(8100,-2580, "red", 200)
        // ramps.push(layer1mountain4)
        // ramps90.push(layer1mountain4)


        // pomao.eggmake = 161000000000

        const layer2ramp = new Triangle90(11600, -5200, "red", 190)
        ramps.push(layer2ramp)
        ramps90.push(layer2ramp)


        for (let t = 0; t < 24; t++) {
            const dangler = new Dangler(-2000 + (500 * t), -2010)
            worms.push(dangler)
        }

        for (let t = 0; t < 15; t++) {
            const waggler = new Waggler(250 + (280 * t), -5200)
            worms.push(waggler)
        }


        for (let t = 0; t < 28; t++) {
            const worm = new Worm(300 + Math.random() * 5000, -1250 + Math.random() * 2000)
            // const wagglersubunit = new Wagglersubunit(worm.joints[2].x, worm.joints[2].y, worm.joints[2])
            // const wagglersubunit2 = new Wagglersubunit(worm.joints[2].x, worm.joints[2].y, worm.joints[2])
            let dirty = 0
            for (let t = 0; t < floors.length; t++) {
                if (floors[t].isPointInside(worm.joints[0])) {
                    dirty = 1
                }
            }
            for (let t = 0; t < ramps.length; t++) {
                if (ramps[t].isPointInside(worm.joints[0])) {
                    dirty = 1
                }
            }
            if (dirty == 1) {
                worms.push(worm)
                // worms.push(wagglersubunit)
                // worms.push(wagglersubunit2)
            }
        }
        for (let t = 0; t < 50; t++) {  //54
            const worm = new Worm(-2100 + Math.random() * 5000, -4100 + Math.random() * 3500)
            let dirty = 0
            for (let t = 0; t < floors.length; t++) {
                if (floors[t].isPointInside(worm.joints[0])) {
                    dirty = 1
                }
            }
            for (let t = 0; t < ramps.length; t++) {
                if (ramps[t].isPointInside(worm.joints[0])) {
                    dirty = 1
                }
            }
            if (dirty == 1) {
                worms.push(worm)
            }
        }


        for (let t = 0; t < 14; t++) {
            const step = new FloatingIsland(-1500 + t * 200, -4500 + t * 50, 50, 0, 1.4)   //0 = 0.02
            // floors.push(step)
            // walls.push(step)
            // walls.push(step)

        }


        for (let t = 0; t < 19; t++) {
            const step = new FloatingIsland(-1200 + t * 300, -5050 - t * 75, 50, 0, 1.4)
            // floors.push(step)
            // walls.push(step)
            // walls.push(step)

        }


        for (let t = 0; t < 900; t++) {
            const fruit = new Fruit(-2100 + (Math.random() * (11600 + 2100)), -5000 + (Math.random() * 5000), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < ramps.length; k++) {
                if (ramps[k].isPointInside(fruit.body)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }

        for (let t = 0; t < 1100; t++) {
            const fruit = new Fruit(-5100 + (Math.random() * (11600 + 2400)), -11200 + (Math.random() * 6000), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < ramps.length; k++) {
                if (ramps[k].isPointInside(fruit.body)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }




        floormpf = [...floors]

        let spinny = new BigSeeSaw(-1200, -301, 5)
        spinnys.push(spinny)


        let spinny1 = new BigSeeSaw(6500 - 1200, -5600, 5)
        spinnys.push(spinny1)

        let spinny2 = new BigSeeSaw(7700 - 1200, -6300, 7.5)
        spinnys.push(spinny2)

        let spinny3 = new BigSeeSaw(9700 - 1200, -7200, 10)
        spinnys.push(spinny3)

        // let spinny4 = new BigSeeSaw(12700-1200, -8400,10)
        // spinnys.push(spinny4)

    }

    function loadlvl7() {

        pomao.tonguex = 0
        pomao.tonguey = 0
        pin = new Circle((-1950 + (30 * 180)), (-9100 - (30 * 57)), 10, "transparent")
        pin2 = new Circle((-1950 + (30 * 180)), (-9800 - (30 * 57)) + (7 * 220), 100, "transparent")
        springs = []
        objsprings = []

        // objsprings.push(pin2)

        // let spring = new Spring(pin)
        // springs.push(spring)
        // for(let k = 0; k<33;k++){
        //     spring = new Spring(spring.anchor)
        //     if(k < 32){
        //         springs.push(spring)
        //     }else if(k == 32 ){
        //         spring.anchor = pin2
        //         springs.push(spring)
        //     }
        // }

        beamrocks = []
        pomao.cutscene = 0
        level = 7


        tutorial_canvas_context.translate(pomao.body.x + 1, pomao.body.y + 0)
        pomao.body.x = -1
        pomao.body.y = 0
        spinnys.splice(0, spinnys.length)
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        lavas.splice(0, lavas.length)
        snowfloors.splice(0, snowfloors.length)
        pomao.thrown = []

        boss = new Circle(0, 0, 0, "transparent")
        //  pomao.eggmake = 161
        // boss = new Bossbeam()

        let heighttrap = 0

        for (let t = 1; t < 40; t++) {
            let flopper = new Flopper(-305 + (t * 305), -310 + t * (-120))
            if (t == 30) {
                flopper.spin = -.75
            }
            // if(Math.random()<.95){
            flopper.dead = 1
            flopper.body.radius *= 1.4
            flopper.lump.radius *= 1 + (Math.random() * .5)
            flopper.gravity += .05 + (Math.random() * .5)
            flopper.ratio = (Math.random() * .5) + .25
            // }
            if (t % 5 !== 0) {
                floppers.push(flopper)
            } else if (t % 3 !== 0) {
                const safefloor = new Rectangle(flopper.body.x - 25, flopper.body.y, 50, 50)
                safefloor.type = 1
                floors.push(safefloor)
                walls.push(safefloor)
                roofs.push(safefloor)
            } else {
                flopper.body.y -= 300
                flopper.lump.y -= 300
                flopper.gravity += .55
                floppers.push(flopper)
            }
            heighttrap = flopper.body.y - 450
        }
        for (let t = 1; t < 40; t++) {
            let flopper = new Flopper(-305 - (t * 305), -310 + t * (-120))
            // if(Math.random()<.95){
            // }
            const safefloor = new Rectangle(flopper.body.x - 25, flopper.body.y, 50, 50)
            safefloor.type = 1
            floors.push(safefloor)
            walls.push(safefloor)
            roofs.push(safefloor)
        }

        for (let t = 0; t < 10; t++) {
            let flopper = new Flopper(-2100 + (Math.random() * 5000), -2100 + (Math.random() * 2000))
            // flopper.spin = 1
            // if(Math.random()<.5){
            //     flopper.spin = -1
            // }
            floppers.push(flopper)
        }

        for (let t = 0; t < 30; t++) {
            let flopper = new Flopper(-11500 + (Math.random() * 24000), heighttrap - (100 + (Math.random() * 400)))
            floppers.push(flopper)
        }

        for (let t = 0; t < 450; t++) {
            const safefloor = new Rectangle(-11500 + (t * 50), heighttrap, 50, 50)
            safefloor.type = 1

            if (t % 20 == 0) {
                safefloor.y -= 60
                safefloor.height += 60
            }
            if (t % 20 == 10) {
                if (t > 100 && t < 350) {
                    const safefloor2 = new Rectangle(-11500 + (t * 50), heighttrap - 800, 50, 500)
                    floors.push(safefloor2)
                    walls.push(safefloor2)
                    roofs.push(safefloor2)
                }
            }
            if (t % 20 == 15) {
                if (t > 150 && t < 300) {
                    const safefloor3 = new Rectangle(-11500 + (t * 50), heighttrap - 750, 450, 50)
                    floors.push(safefloor3)
                    walls.push(safefloor3)
                    roofs.push(safefloor3)

                } else {
                    let flopper = new Flopper(250 - 11500 + (t * 50), heighttrap - 400)

                    flopper.spin = -.75
                    if (t > 225) {
                        flopper.spin *= -1
                    }

                    // if(Math.random()<.95){
                    flopper.dead = 1
                    flopper.body.radius *= 1.4
                    flopper.lump.radius *= 1 + (Math.random() * .5)
                    flopper.gravity += .05 + (Math.random() * .5)
                    flopper.ratio = (Math.random() * .5) + .25
                    floppers.push(flopper)
                }
            }
            floors.push(safefloor)
            walls.push(safefloor)
            roofs.push(safefloor)
        }

        for (let t = 0; t < 13; t++) {
            const safefloory = new Rectangle(-30, (heighttrap - 900) - (t * 400), 60, 60)
            safefloory.type = 1
            floors.push(safefloory)
            walls.push(safefloory)
            roofs.push(safefloory)
        }
        let angulos = 0
        let dismin = 0
        for (let t = 0; t < 100000; t++) {
            let centerer = new Point(0, heighttrap - 3000)
            angulos += .001
            dismin += .05

            const safefloorx = new Rectangle(centerer.x + (Math.cos(angulos) * dismin), centerer.y + (Math.sin(angulos) * dismin), 60, 60)

            safefloorx.type = 1
            let stopper = 0
            for (let k = 0; k < floors.length; k++) {
                let link = (new LineOP(safefloorx, floors[k])).hypotenuse()
                if (link < 300) {
                    stopper = 1
                }
            }

            if (safefloorx.x < -1800) {
                stopper = 1
            }
            if (safefloorx.x > 1800) {
                stopper = 1
            }
            if (safefloorx.y > heighttrap - 900) {
                stopper = 1
            }
            if (safefloorx.x < heighttrap - 5900) {
                stopper = 1
            }


            if (stopper == 0) {
                floors.push(safefloorx)
                walls.push(safefloorx)
                roofs.push(safefloorx)
                // if(t%4 == 0){
                //     let flopper = new Flopper(-2000+(Math.random()*4000),  (heighttrap-900) - (Math.random()*5000))
                //     flopper.dead = 1
                //     flopper.body.radius *= 1.4
                //     flopper.lump.radius *= 1 + (Math.random() * .5)
                //     flopper.gravity += .05 + (Math.random() * .5)
                //     flopper.ratio = (Math.random() * .5) + .25
                //     if(Math.random()<.1){
                //         flopper.spin = .76// .5+(Math.random()*.5)
                //     if(Math.random()<.5){
                //         flopper.spin*=-1
                //     }
                //     }
                //     floppers.push(flopper)
                // }
            }
        }

        let heightbumper = 0
        for (let k = 0; k < 600; k++) {
            let flopper = new Flopper(-2000 + ((1 + (k % 6)) * 600), (heighttrap - 9900) + (heightbumper))
            if (k % 6 == 0) {
                heightbumper += 600
            }
            flopper.dead = 1
            flopper.body.radius *= 1.4
            flopper.lump.radius *= 1 + (Math.random() * .5)
            flopper.gravity += .05 + (Math.random() * .5)
            flopper.ratio = (Math.random() * .5) + .25
            if (Math.random() < .1) {
                flopper.spin = .5 + (Math.random() * .5)
                if (Math.random() < .5) {
                    flopper.spin *= -1
                }
            }
            if (flopper.body.y < heighttrap) {
                if (flopper.body.y > heighttrap - 8500) {
                    floppers.push(flopper)
                }
            }
        }

        let centerer = new Point(0, heighttrap - 3000)
        boss = new Rocketbox(centerer.x, centerer.y - 6300)
        // for(let t= 0; t<200;t++){

        //     const safefloorx = new Rectangle(-2000+(Math.random()*4000), (heighttrap-900) - (Math.random()*5000), 60, 60)
        //     if(t%3 == 0){
        //         let flopper = new Flopper(-2000+(Math.random()*4000),  (heighttrap-900) - (Math.random()*5000))
        //         flopper.dead = 1
        //         flopper.body.radius *= 1.4
        //         flopper.lump.radius *= 1 + (Math.random() * .5)
        //         flopper.gravity += .05 + (Math.random() * .5)
        //         flopper.ratio = (Math.random() * .5) + .25
        //         if(Math.random()<.1){
        //             flopper.spin = .76// .5+(Math.random()*.5)
        //         if(Math.random()<.5){
        //             flopper.spin*=-1
        //         }
        //         }
        //         floppers.push(flopper)
        //     }
        //     safefloorx.type = 1
        //     let stopper = 0
        //     for(let k=0;k<floors.length;k++){
        //         let link = (new LineOP(safefloorx, floors[k])).hypotenuse()
        //         if(link < 200){
        //             stopper = 1
        //         }
        //     }


        //     if(stopper == 0){
        //         floors.push(safefloorx)
        //         walls.push(safefloorx)
        //         roofs.push(safefloorx)
        //     }
        // }
        const safewall1 = new Rectangle(-2050, heighttrap - 10700, 9500, 50)
        const safewall2 = new Rectangle(2050, heighttrap - 10700, 9500, 50)
        floors.push(safewall1)
        walls.push(safewall1)
        roofs.push(safewall1)
        floors.push(safewall2)
        walls.push(safewall2)
        roofs.push(safewall2)
        beamrocks.push(safewall1)
        beamrocks.push(safewall2)

        const centerbossfloor = new Rectangle(-850, heighttrap - 8700, 20, 1600)
        const bosssafefloorleft = new Rectangle(-2050, heighttrap - 8700, 50, 1200)
        const bosssafefloorright = new Rectangle(-2050 + (1200 + 1600), heighttrap - 8700, 50, 1300)

        floors.push(centerbossfloor)
        floors.push(bosssafefloorright)
        walls.push(bosssafefloorright)
        roofs.push(bosssafefloorright)
        floors.push(bosssafefloorleft)
        walls.push(bosssafefloorleft)
        roofs.push(bosssafefloorleft)

        beamrocks.push(centerbossfloor)
        beamrocks.push(bosssafefloorright)
        beamrocks.push(bosssafefloorleft)


        const bossroff = new Rectangle(-2050, heighttrap - 10700, 50, 4100)
        floors.push(bossroff)
        walls.push(bossroff)
        roofs.push(bossroff)

        beamrocks.push(bossroff)

        const safecap1 = new Rectangle(2050, heighttrap - 1200, 50, 14050)

        floors.push(safecap1)
        walls.push(safecap1)
        roofs.push(safecap1)

        const safecap2 = new Rectangle(-12050, heighttrap - 1200, 50, 10050)

        floors.push(safecap2)
        walls.push(safecap2)
        roofs.push(safecap2)

        let lava = new Rectangle(-12000, 500, 1000000, 24000, "#FFAA0088")
        let lava2 = new Rectangle(-12000, 520, 1000000, 24000, "#FF000088")
        lavas.push(lava)
        lavas.push(lava2)
        for (let t = 0; t < 100; t++) {
            const floor = new Rectangle(-12000 + (333 * t), 33, 333, 333)
            floors.push(floor)
            walls.push(floor)
            roofs.push(floor)
            // floor.type = 1
        }

        const wall1 = new Rectangle(-12000, -30000, 30033, 50, "cyan")
        walls.push(wall1)
        floors.push(wall1)
        roofs.push(wall1)
        // ungrapplable.push(wall1)

        const wall2 = new Rectangle(11600, -30000, 30033, 50, "cyan")
        walls.push(wall2)
        floors.push(wall2)
        roofs.push(wall2)


        for (let t = 0; t < 3500; t++) {
            const fruit = new Fruit(-12000 + (Math.random() * (23600)), (heighttrap - 10700) + (Math.random() * Math.abs(heighttrap - 10700)), 60, 60, "red")
            let wet = 0
            for (let s = 0; s < floors.length; s++) {
                if (squarecircleedges(floors[s], fruit.body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body)) {
                    wet = 1
                    break
                }
            }
            for (let k = 0; k < ramps.length; k++) {
                if (ramps[k].isPointInside(fruit.body)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }

        floormpf = [...floors]
    }


    function loadlvl8() {

        pomao.tonguex = 0
        pomao.tonguey = 0
        pin = new Circle((-1950 + (30 * 180)), (-9100 - (30 * 57)), 10, "transparent")
        pin2 = new Circle((-1950 + (30 * 180)), (-9800 - (30 * 57)) + (7 * 220), 100, "transparent")
        springs = []
        objsprings = []

        // objsprings.push(pin2)

        // let spring = new Spring(pin)
        // springs.push(spring)
        // for(let k = 0; k<33;k++){
        //     spring = new Spring(spring.anchor)
        //     if(k < 32){
        //         springs.push(spring)
        //     }else if(k == 32 ){
        //         spring.anchor = pin2
        //         springs.push(spring)
        //     }
        // }

        beamrocks = []
        pomao.cutscene = 0
        level = 8


        tutorial_canvas_context.translate(pomao.body.x + 1000, pomao.body.y)
        pomao.body.x = -1000
        pomao.body.y = 0
        spinnys.splice(0, spinnys.length)
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        lavas.splice(0, lavas.length)
        snowfloors.splice(0, snowfloors.length)
        pomao.thrown = []

        boss = new Circle(0, 0, 0, "transparent")
        //  pomao.eggmake = 161
        // boss = new Bossbeam()

        let magnet = new Magneato(-100, -500)
        magnets.push(magnet)

        let leaderblock = new Rectangle(112, -33, 68, 50)

        walls.push(leaderblock)
        floors.push(leaderblock)
        roofs.push(leaderblock)

        let floorlvl8 = new Rectangle(-2100, 33, 500, 22000)
        floors.push(floorlvl8)
        walls.push(floorlvl8)
        roofs.push(floorlvl8)


        // for (let t = 0; t < 100; t++) {
        //     const floor = new Rectangle(-13000 + (150 * t), 66, 600, 333)
        //     floors.push(floor)
        //     walls.push(floor)
        //     roofs.push(floor)
        //     floor.type = 1
        // }


        let rebellionleaderdiailogue = new Dialogue(105, -68)
        rebellionleaderdiailogue.words.push("???: What the...")
        rebellionleaderdiailogue.words.push("???: How did you find us?")
        rebellionleaderdiailogue.words.push("???: Who do you work for?")
        rebellionleaderdiailogue.words.push("???: Oh no! The security system!")
        rebellionleaderdiailogue.words.push("???: No no no no! don't tell me you smashed it!")
        rebellionleaderdiailogue.words.push("Pomao: Maybe.")
        rebellionleaderdiailogue.words.push("Pomao: I'm Pomao. Who are you?")
        rebellionleaderdiailogue.words.push("???: Look kid, you don't want any part of this.")
        rebellionleaderdiailogue.words.push("???: But you know where we are.")
        rebellionleaderdiailogue.words.push("???: Plus you owe us for the security system.")
        rebellionleaderdiailogue.words.push("???: I don't think we can let you leave.")
        rebellionleaderdiailogue.words.push("Pomao: When?")
        rebellionleaderdiailogue.words.push("???: Now.")
        rebellionleaderdiailogue.words.push("Pomao: Oh.")
        rebellionleaderdiailogue.words.push("???: Welcome to the resistance I guess.")
        chats.push(rebellionleaderdiailogue)



        const wall1 = new Rectangle(-2100, -30000, 30033, 50, "cyan")
        walls.push(wall1)
        floors.push(wall1)
        roofs.push(wall1)
        // ungrapplable.push(wall1)

        const wall2 = new Rectangle(11600, -30000, 30033, 50, "cyan")
        walls.push(wall2)
        floors.push(wall2)
        roofs.push(wall2)

        floormpf = [...floors]

        // let spinny = new BigSeeSaw(-1200, -301, 5)
        // spinnys.push(spinny)

        // let spinny2 = new BigSeeSaw(-100, -701, 7.5)
        // spinnys.push(spinny2)

        // let spinny3 = new BigSeeSaw(1600, -1401, 10)
        // spinnys.push(spinny3)
    }

    function loadlvl9() {

        pomao.tonguex = 0
        pomao.tonguey = 0
        pin = new Circle((-1950 + (30 * 180)), (-9100 - (30 * 57)), 10, "transparent")
        pin2 = new Circle((-1950 + (30 * 180)), (-9800 - (30 * 57)) + (7 * 220), 100, "transparent")
        springs = []
        objsprings = []

        // objsprings.push(pin2)

        // let spring = new Spring(pin)
        // springs.push(spring)
        // for(let k = 0; k<33;k++){
        //     spring = new Spring(spring.anchor)
        //     if(k < 32){
        //         springs.push(spring)
        //     }else if(k == 32 ){
        //         spring.anchor = pin2
        //         springs.push(spring)
        //     }
        // }

        beamrocks = []
        pomao.cutscene = 0
        level = 9


        tutorial_canvas_context.translate(pomao.body.x + 1000, pomao.body.y)
        pomao.body.x = -1000
        pomao.body.y = 0
        spinnys.splice(0, spinnys.length)
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        lavas.splice(0, lavas.length)
        snowfloors.splice(0, snowfloors.length)
        pomao.thrown = []

        boss = new Circle(0, 0, 0, "transparent")
        //  pomao.eggmake = 161
        // boss = new Bossbeam()

        let clickercos = 0
        let clickersin = 0
        let clickertan = 0
        for (let t = 0; t < 3000; t++) {
            clickercos += (Math.PI * 2 * 310) / 3000
            clickersin += (Math.PI * 2 * 370) / 3000
            clickertan += (Math.PI * 2 * 410) / 3000
            let floor = new Rectangle(-2100 + (t * 3), 0, 30000000, 3.1, "blue")
            floor.waggle = floor.y //+(Math.sin(clickercos)*.2)+(Math.cos(clickersin)*.3)+(Math.sin(clickertan)*.5)
            walls.push(floor)
            floors.push(floor)
            roofs.push(floor)
        }


        // for (let t = 0; t < 100; t++) {
        //     const floor = new Rectangle(-13000 + (150 * t), 66, 600, 333)
        //     floors.push(floor)
        //     walls.push(floor)
        //     roofs.push(floor)
        //     floor.type = 1
        // }




        const wall1 = new Rectangle(-2100, -30000, 30033, 50, "#FFFFFF05")
        walls.push(wall1)
        floors.push(wall1)
        roofs.push(wall1)
        ungrapplable.push(wall1)
        // ungrapplable.push(wall1)

        const wall2 = new Rectangle(6500, -30000, 31033, 50, "#FFFFFF05")
        walls.push(wall2)
        floors.push(wall2)
        roofs.push(wall2)
        ungrapplable.push(wall2)

        for (let t = 0; t < 5000; t++) {
            let atom = new Atomdebris(-2150 + (Math.random() * 13700), -5000 + (Math.random() * 6000), "purple")
            debris.push(atom)
        }


        for (let t = 0; t < 154; t++) {
            let magnet = new Magneato(-100 + (t * 400), -100 - (t * 200))
            let runner = Math.random() * 10000
            for (let k = 0; k < runner; k++) {
                magnet.physics()
            }
            magnets.push(magnet)
        }
        for (let t = 0; t < 154; t++) {
            let magnet = new Magneato(600 + (t * 400), -200 - (t * 200))
            let runner = Math.random() * 10000
            for (let k = 0; k < runner; k++) {
                magnet.physics()
            }
            magnets.push(magnet)
        }

        const plug = magnets.length
        for (let t = 0; t < 10; t++) {
            let magnet = new Magneato(-1600 + (t * 400), -200 - (t * 200))
            let runner = Math.random() * 10000
            if (t % 2 == 1) {
                // magnet.electron = magnets[Math.floor(t-1)+plug].positron
                // if(Math.random()<.3){
                //     magnet.electron = magnets[Math.floor(Math.random()*t-2)+plug].electron
                // }
            }
            for (let k = 0; k < runner; k++) {
                magnet.physics()
            }
            magnets.push(magnet)
        }

        for (let t = 0; t < 240; t++) {
            let radiator = new Radiator(-2050 + (Math.random() * 13700), -5000 + (Math.random() * 6000))
            debris.push(radiator)
        }



        for (let t = 0; t < 900; t++) {
            const fruit = new Fruit(-2050 + (Math.random() * 13700), -8000 + (Math.random() * 9000), 60, 60, "red")
            let wet = 0
            // for (let s = 0; s < floors.length; s++) {
            //     if (squarecircleedges(floors[s], fruit.body)) {
            //         wet = 1
            //         break
            //     }
            // }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }



        floormpf = [...floors]

        // let spinny = new BigSeeSaw(-1200, -301, 5)
        // spinnys.push(spinny)

        // let spinny2 = new BigSeeSaw(-100, -701, 7.5)
        // spinnys.push(spinny2)

        // let spinny3 = new BigSeeSaw(1600, -1401, 10)
        // spinnys.push(spinny3)
    }

    function loadlvl10() {

        pomao.tonguex = 0
        pomao.tonguey = 0
        pin = new Circle((-1950 + (30 * 180)), (-9100 - (30 * 57)), 10, "transparent")
        pin2 = new Circle((-1950 + (30 * 180)), (-9800 - (30 * 57)) + (7 * 220), 100, "transparent")
        springs = []
        objsprings = []

        // objsprings.push(pin2)

        // let spring = new Spring(pin)
        // springs.push(spring)
        // for(let k = 0; k<33;k++){
        //     spring = new Spring(spring.anchor)
        //     if(k < 32){
        //         springs.push(spring)
        //     }else if(k == 32 ){
        //         spring.anchor = pin2
        //         springs.push(spring)
        //     }
        // }

        beamrocks = []
        pomao.cutscene = 0
        level = 10


        tutorial_canvas_context.translate(pomao.body.x + 1000, pomao.body.y)
        pomao.body.x = -1000
        pomao.body.y = 0
        spinnys.splice(0, spinnys.length)
        ramps90 = []
        swimmers = []
        bats = []
        floors.splice(0, floors.length)
        ramps = []
        boys.splice(0, boys.length)
        deadboys.splice(0, deadboys.length)
        fruits.splice(0, fruits.length)
        walls.splice(0, walls.length)
        invisblocks = []
        ungrapplable = []
        jellys = []
        roofs.splice(0, roofs.length)
        switches = []
        blocks = []
        nails = []
        chats = []
        orbs = []
        links = []
        worms.splice(0, worms.length)
        debris.splice(0, debris.length)
        magnets.splice(0, magnets.length)

        floppers.splice(0, floppers.length)
        snowfloors.splice(0, snowfloors.length)
        lavas.splice(0, lavas.length)
        pomao.thrown = []

        boss = new Circle(0, 0, 0, "transparent")
        //  pomao.eggmake = 161
        // boss = new Bossbeam()

        let clickercos = 0
        let clickersin = 0
        let clickertan = 0
        // for (let t = 0; t < 1861; t++) {
        // clickercos += (Math.PI * 2 * 310) / 3000
        // clickersin += (Math.PI * 2 * 370) / 3000
        // clickertan += (Math.PI * 2 * 410) / 3000
        // for(let t = 0;t<10;t++){
            let driftfloor = new Snowfloor(-2100+(0*(1861 * 5)), 0, 400, (1861 * 5))  //snowfloor

            snowfloors.push(driftfloor)
        // }
        let driftfloor2 = new Snowfloor(-2100+(1*(1861 * 5)), 0, 400, (1861 * 5))  //snowfloor

        snowfloors.push(driftfloor2)
    // }

        // floor.waggle = floor.y //+(Math.sin(clickercos)*.2)+(Math.cos(clickersin)*.3)+(Math.sin(clickertan)*.5)
        // walls.push(floor)
        // floors.push(floor)
        // roofs.push(floor)
        // }


        // let snowfloor1 = new Rectangle(400, -320, 20, 720, "white")

        // floors.push(snowfloor1)

        // for (let t = 0; t < 100; t++) {
        //     const floor = new Rectangle(-13000 + (150 * t), 66, 600, 333)
        //     floors.push(floor)
        //     walls.push(floor)
        //     roofs.push(floor)
        //     floor.type = 1
        // }




        const wall1 = new Rectangle(-2100, -30000, 30033, 50, "#FFFFFF35")
        walls.push(wall1)
        floors.push(wall1)
        roofs.push(wall1)
        ungrapplable.push(wall1)
        // ungrapplable.push(wall1)

        const wall2 = new Rectangle(67000, -30000, 30033, 50, "#FFFFFF35")
        walls.push(wall2)
        floors.push(wall2)
        roofs.push(wall2)
        ungrapplable.push(wall2)

        // for (let t = 0; t < 10000; t++) {
        //     let atom = new Atomdebris(-2150 + (Math.random() * 13700), -5000 + (Math.random() * 6000), "purple")
        //     debris.push(atom)
        // }


        // for (let t = 0; t < 154; t++) {
        //     let magnet = new Magneato(-100 + (t * 400), -100 - (t * 200))
        //     let runner = Math.random() * 10000
        //     for (let k = 0; k < runner; k++) {
        //         magnet.physics()
        //     }
        //     magnets.push(magnet)
        // }
        // for (let t = 0; t < 154; t++) {
        //     let magnet = new Magneato(600 + (t * 400), -200 - (t * 200))
        //     let runner = Math.random() * 10000
        //     for (let k = 0; k < runner; k++) {
        //         magnet.physics()
        //     }
        //     magnets.push(magnet)
        // }

        // const plug = magnets.length
        // for (let t = 0; t < 10; t++) {
        //     let magnet = new Magneato(-1600 + (t * 400), -200 - (t * 200))
        //     let runner = Math.random() * 10000
        //     if(t%2 == 1){
        //         // magnet.electron = magnets[Math.floor(t-1)+plug].positron
        //         // if(Math.random()<.3){
        //         //     magnet.electron = magnets[Math.floor(Math.random()*t-2)+plug].electron
        //         // }
        //     }
        //     for (let k = 0; k < runner; k++) {
        //         magnet.physics()
        //     }
        //     magnets.push(magnet)
        // }

        // for (let t = 0; t < 240; t++) {
        //     let radiator = new Radiator(-2050 + (Math.random() * 13700), -5000 + (Math.random() * 6000))
        //     debris.push(radiator)
        // }



        const drift1 = new Snowfloor(400, -320, 20, 720)

        snowfloors.push(drift1)

        const drift2 = new Snowfloor(700, -520, 20, 720)

        snowfloors.push(drift2)

        // const drift3 = new Snowfloor(-300, -720, 20, 720)

        // snowfloors.push(drift3)

        // const drift4 = new Snowfloor(300, -1120, 20, 720)

        // snowfloors.push(drift4)

        const snokloan = new Snowclone(-300, -700, 500, 6)
        snokloan.dir = .25
        snowfloors.push(snokloan)
        // let snokloon2 = new Snowclone(-300, -700, 100, 6)
        // for (let t = 0; t < 10; t++) {
        //     snokloon2.draw()
        // }
        // snokloon2.dir *= 4
        // snowfloors.push(snokloon2)

        const snokloan3 =  new Snowclone(1300, -1100, 200, 6)
        snowfloors.push(snokloan3)


        const snokloan4 =  new Snowclone(2200, -1100, 200, 6)
        snokloan4.dir = -.5
        snowfloors.push(snokloan4)


        const snokloan5 =  new Snowclone(2900, -1700, 200, 6, 10)
        snokloan5.dir = 0
        snowfloors.push(snokloan5)


        const snokloan6 =  new Snowclone(4400, -1200, 800, 6, 22)
        snokloan6.dir = .75
        snowfloors.push(snokloan6)


        const drift3 = new Snowfloor(2550, -1100, 20, 1000, -1)

        snowfloors.push(drift3)



        // const drift4 = new Snowfloor(5300, -1500, 50, 1100, -.1)
        // snowfloors.push(drift4)
        const drift5 = new Snowfloor(5300, -1500, 1100, 50)
        snowfloors.push(drift5)


        // const drift6 = new Snowfloor(6400, -1522, 50, 1100, -.2)
        // snowfloors.push(drift6)


        // const drift7 = new Snowfloor(7500, -1566, 50, 1100, -.4)
        // snowfloors.push(drift7)

        // const drift8 = new Snowfloor(8600, -1654, 50, 1100, -.8)
        // snowfloors.push(drift8)

        // const drift9 = new Snowfloor(9700, -1830, 50, 1100, -1.6)
        // snowfloors.push(drift9)

        const bigdrift = new Snowfloor(5300, -1500, 50, 6600, -.1)
        snowfloors.push(bigdrift)

        const snokloan7 =  new Snowclone(12890, -2815, 900, 8, 40)
        snokloan7.dir = .75
        snowfloors.push(snokloan7)

        const snokloan8 =  new Snowclone(12890, -4315, 600, 8, 33)
        snokloan8.dir = -.75
        snowfloors.push(snokloan8)

        for(let t = 0;t < 10; t++){
            const drift4 = new Snowfloor(13890 +((t%2) * 200) + (t*10), -2815-(t*(1500/8)), 20, 200, (Math.random()-.5)*1.8)

            snowfloors.push(drift4)
        }


        for (let t = 0; t < 900; t++) {
            const fruit = new Fruit(-2050 + (Math.random() * 9000), -8000 + (Math.random() * 7900), 60, 60, "red")
            let wet = 0
            // for (let s = 0; s < floors.length; s++) {
            //     if (squarecircleedges(floors[s], fruit.body)) {
            //         wet = 1
            //         break
            //     }
            // }
            for (let k = 0; k < fruits.length; k++) {
                if (fruit.body.repelCheck(fruits[k].body)) {
                    wet = 1
                    break
                }
            }
            if (wet == 0) {
                fruits.push(fruit)
            }
        }



        floormpf = [...floors]

        // let spinny = new BigSeeSaw(-1200, -301, 5)
        // spinnys.push(spinny)

        // let spinny2 = new BigSeeSaw(-100, -701, 7.5)
        // spinnys.push(spinny2)

        // let spinny3 = new BigSeeSaw(1600, -1401, 10)
        // spinnys.push(spinny3)
        // snowfloor = new Shape(floormpf)
    }

    function getTextWidth(text, font) {
        // re-use canvas object for better performance
        var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
    }

    function castBetween(from, to, granularity = 10, radius = 1, color = "gray") { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
        let limit = granularity
        let shape_array = []
        for (let t = 0; t < limit; t++) {
            let circ = new Bosscircle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, color)
            shape_array.push(circ)
        }
        return (new Shape(shape_array))
    }
})


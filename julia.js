
window.addEventListener('DOMContentLoaded', (event) =>{

let r = 5

    let tutorial_canvas = document.getElementById("tutorial");
    let tutorial_canvas_context = tutorial_canvas.getContext('2d');

    tutorial_canvas.style.background = "black"


    class Rectangle {
        constructor(x, y, height, width, step) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.complex = new Complex(((x-tutorial_canvas.width/2)/tutorial_canvas.width)*3.5((y-tutorial_canvas.height/2)/tutorial_canvas.height)*3.5 )
            this.color = 'rgb(0,0,0)'//`rgb(${Math.min(step*12),255)},${Math.max(255-(step*12),0)},${Math.min(step*2),255)})`
        }
        draw(){
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
        }
    }


class Julia{
    constructor(){
        this.points = []
    }
    draw(){
        for(let t = 0; t<this.points; t++){
            this.points[t].draw()
        }
    }
}
class Complex{
    constructor(r = 0,i = 0){
        this.imaginary = i
        this.real = r
    }
    add(target){
        this.imaginary+=target.imaginary
        this.real+=target.real
        return this.clone()
    }
    subtract(target){
        this.imaginary-=target.imaginary
        this.real-=target.real
        return this.clone()
    }
    multiply(target){
       let loss =  this.imaginary*target.imaginary 
       let igain1 =  this.real*target.imaginary 
       let igain2 =  this.imaginary*target.real 
       let gain =  this.real*target.real 
       let out = new Complex(gain-loss, igain1+igain2)
       return out
    }
    clone(){
        return new Complex(this.real, this.imaginary)
    }
    divide(target){
        let num1, num2;
        num1 = this.clone()
        num2 = target.clone()
        var denom = num2.imaginary * num2.imaginary + num2.real * num2.real;
        var real = (num1.real * num2.real + num1.imaginary * num2.imaginary) /denom;
        var imaginary = (num2.real * num1.imaginary - num1.real * num2.imaginary) /denom; 
        return new Complex(real, imaginary)
     }
}


let runner = new Complex(.5, 1)

let punch = new Complex(-.91,.2675)

        console.log(runner)

// let f = new Rectangle(5,5,5,5,"red")

// let boxes = []
// for(let t = 0; t<tutorial_canvas.height; t++){
//     let f = []
//     boxes.push(f)
// }
// let box 
// for(let t = 0; t<boxes.length; t++){
//     for(let k = 0; k<tutorial_canvas.width;k++){
//         box = new Rectangle(k,t, 1,1, "red")
//         boxes[t].push(box)
//     }
// }



// for(let t = 0; t<boxes.length; t++){
//     for(let k = 0; k<boxes[t].length;k++){
//         let iet = 0
//         while( iet<1255 && ((boxes[t][k].complex.real*boxes[t][k].complex.real)-(boxes[t][k].complex.imaginary*boxes[t][k].complex.imaginary))<r*r){
//         iet++
//         let xtemp = (boxes[t][k].complex.real  * boxes[t][k].complex.real)  - (boxes[t][k].complex.imaginary  * boxes[t][k].complex.imaginary) 
//         boxes[t][k].complex.imaginary = (2 * boxes[t][k].complex.real  * boxes[t][k].complex.imaginary)   + punch.imaginary 
//         boxes[t][k].complex.real = xtemp + punch.real
//         boxes[t][k].color = `rgb(${Math.min((iet*15),255)},${Math.max(255-(iet*3),0)},0)`

//         }
//     }
// }




// for(let t = 0; t<boxes.length; t++){
//     for(let k = 0; k<boxes[t].length;k++){
//         boxes[t][k].draw()
//     }
// }


// console.log(boxes)


let boxes = []

for(let t = 0; t<tutorial_canvas.height; t++){
    let f = []
    boxes.push(f)
}
    // window.setInterval(function(){ 
        tutorial_canvas_context.clearRect(0,0,tutorial_canvas.width, tutorial_canvas.height)
    boxes = []

for(let t = 0; t<tutorial_canvas.height; t++){
    
    boxes[t] = []
}
let box 
for(let t = 0; t<boxes.length; t++){
    for(let k = 0; k<tutorial_canvas.width;k++){
        box = new Rectangle(k,t, 1,1, "red")
        boxes[t].push(box)
    }
}



for(let t = 0; t<boxes.length; t++){
    for(let k = 0; k<boxes[t].length;k++){
        let iet = 0
         let a = 0
        while( iet<1255 && ((boxes[t][k].complex.real*boxes[t][k].complex.real)-(boxes[t][k].complex.imaginary*boxes[t][k].complex.imaginary))<r*r){
        iet++
        let xtemp = (boxes[t][k].complex.real  * boxes[t][k].complex.real)  - (boxes[t][k].complex.imaginary  * boxes[t][k].complex.imaginary) 
        boxes[t][k].complex.imaginary = (2 * boxes[t][k].complex.real  * boxes[t][k].complex.imaginary)   + punch.imaginary 
        boxes[t][k].complex.real = xtemp + punch.real
       
        a+=.06
        if(a>.48){
            a=1
        }

        }
        if(a < .5){
            a=0
        }
        boxes[t][k].color = `rgb(${Math.min((iet*15),255)},${Math.max(255-(iet*3),0)}, ${0}, ${a}`

    }
}




for(let t = 0; t<boxes.length; t++){
    for(let k = 0; k<boxes[t].length;k++){
        boxes[t][k].draw()
    }
}

// punch.real-=.01
punch.imaginary+=.01
        // tutorial_canvas_context.translate(350,350)
        // tutorial_canvas_context.rotate(.001)
        // tutorial_canvas_context.translate(-350,-350)
        // tutorial_canvas_context.scale(1.01,1.01)
// console.log(boxes)
    // },  200) 

})
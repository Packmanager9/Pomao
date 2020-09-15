
window.addEventListener('DOMContentLoaded', (event) =>{
    let hot = 0


    let floors = []
    let ramps = []

    let dry = 0

    let jazz = new Audio('gulpnoise.wav');
    let jazz2 = new Audio('gulpnoise2.wav');

    let fruitsprites = new Image()
    fruitsprites.src = 'fruitsprites3.png'

    let pomaospit = new Image()
    pomaospit.src = 'pomaospit.png'

    let pomaospitb = new Image()
    pomaospitb.src = 'pomaospitb.png'

    let pomaospitl = new Image()
    pomaospitl.src = 'pomaospitl.png'
    let pomaospitlb = new Image()
    pomaospitlb.src = 'pomaospitbl.png'

    let pomaospitf = new Image()
    pomaospitf.src = 'pomaospitf.png'

    let pomaospitfb = new Image()
    pomaospitfb.src = 'pomaospitfb.png'

    let pomaospitfl = new Image()
    pomaospitfl.src = 'pomaospitfl.png'


    let pomaospitflb = new Image()
    pomaospitflb.src = 'pomaospitflb.png'

    let pomaoflb = new Image()
    pomaoflb.src = 'pomaoflb.png'

    let boysprites = new Image()
    boysprites.src = 'boisterousboys.png'

    let pomaoimg = new Image()
    pomaoimg.src = 'pomao.png'
    let pomaoimgb = new Image()
    pomaoimgb.src = 'pomaob.png'

    let seedegg = new Image()
    seedegg.src = 'seedegg.png'
    let seedeggf = new Image()
    seedeggf.src = 'eggf.png'
    let seedeggfl = new Image()
    seedeggfl.src = 'eggfl.png'
    let pomaoimgl = new Image()
    pomaoimgl.src = 'pomaol.png'
    let pomaoimgbl = new Image()
    pomaoimgbl.src = 'pomaobl.png'
    // let mangosteen = new Image()
    // mangosteen.src = 'Fruit 03 - Mangosteen.png'
    
    let pomaoimgup = new Image()
    pomaoimgup.src = 'pomaoup.png'
    let pomaoimglup = new Image()
    pomaoimglup.src = 'pomaoupl.png'
    
    let pomaoimgupb = new Image()
    pomaoimgupb.src = 'pomaoupb.png'
    let pomaoimglupb = new Image()
    pomaoimglupb.src = 'pomaoupbl.png'
    let pomaof = new Image()
    pomaof.src = 'pomaof.png'
    let pomaofl = new Image()
    pomaofl.src = 'pomaofl.png'
    let pomaofb = new Image()
    pomaofb.src = 'pomaofb.png'
    
    let keysPressed = {}

    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;
     });
     
     document.addEventListener('keyup', (event) => {
         delete keysPressed[event.key];
      });

    let tutorial_canvas = document.getElementById("tutorial");
    let tutorial_canvas_context = tutorial_canvas.getContext('2d');

    tutorial_canvas.style.background = "#AAAAFF"


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
            for(let t = 0; t<floors.length; t++){

                if(squarecirclefeet(floors[t], this.body)){
                    if(Math.abs((this.y+this.height)-floors[t].y) <= this.height){
                        this.y = floors[t].y-Math.abs((this.y)-floors[t].y)
                        this.dry = 1
                        break
                    }
                }
            }


        }
        move(){
            this.x+=this.xmom
            this.y+=this.ymom
            this.ymom*=.99
            this.xmom*=.99
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
            // console.log(this)
          }
          if(this.body.repelCheck(pomao.body) && this.body.repelCheck(pomao.tongue)){
            // this.x  -= (((this.body.x-(this.width/2))-pomao.body.x)/100)
            // this.y -= (((this.body.y-(this.height/2))-pomao.body.y)/100)
            this.width*=.91
            this.height*=.91
            this.marked = 2
            pomao.diry = 1
          }else if (this.body.repelCheck(pomao.body) && !this.body.repelCheck(pomao.tongue )){
            //   console.log(pomao.dir)

            if(pomao.body.ymom == 0){

                // if(pomao.body.isPointInside(pomao.tongue)){
                    if(this.width >= 50){
                        pomao.body.xmom = -3*(pomao.dir)
                        pomao.disabled = 1
                        pomao.hits--
                         pomao.body.ymom = -1.5
                    }
                // }
            }
            // console.log(pomao.dir, pomao.body.xmom)
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


            // console.log(pomao)
          }
        //   if(this.marked == 3){
        //     this.x  -= ((this.body.x-pomao.body.x)/3.5)
        //     this.y -= ((this.body.y-pomao.body.y)/3.5)
        //     this.marked = 3
        //     // pomao.diry = 1


        //     // console.log(pomao)
        //   }


        }
        clean(){
          if(this.body.repelCheck(pomao.body)){
            if(this.width < 30){
                boys.splice(boys.indexOf(this),1)
                //sound (obnoxious)
                // if (jazz.duration > 0 && !jazz.paused) {
                //     console.log("top")
                //         jazz2.play()
                // }else{
                //     console.log("bottom")
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
            this.type2 = Math.floor(Math.random()*9)
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
            let rows = 9
        
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

          if(this.type < 10){


            tutorial_canvas_context.drawImage(fruitsprites, srcx, srcy, width, height, this.x, this.y, this.width, this.height)
   


          }


        
          if(this.body.repelCheck(pomao.tongue)){
            // this.x += pomao.tonguexmom -(((this.body.x-(this.width/2))-pomao.body.x)/100)
            // this.y += pomao.tongueymom -(((this.body.y-(this.height/2))-pomao.body.y)/100)
            // this.move()
            this.marked = 1  
            this.width*=.995
            this.height*=.995
            // console.log(this)
          }
          if(this.body.repelCheck(pomao.body)){
            // this.x  -= (((this.body.x-(this.width/2))-pomao.body.x)/100)
            // this.y -= (((this.body.y-(this.height/2))-pomao.body.y)/100)
            this.width*=.9
            this.height*=.9
            this.marked = 2
            pomao.diry = 1
            // console.log(pomao)
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


            // console.log(pomao)
          }


        }
        clean(){
          if(this.body.repelCheck(pomao.body)){
            if(this.width < 20){
                if(this.type == 1){
                    if(this.type2 == 4){
                        pomao.high = 500
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
                //     console.log("top")
                //         jazz2.play()
                // }else{
                //     console.log("bottom")
                //     jazz.play()
                // }
                // jazz2.play()
                pomao.hits+=2
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
            this.y+=this.ymom
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
            tutorial_canvas_context.lineWidth = 4
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.arc(this.x, this.y, this.radius-1, 0, (Math.PI*2), true)
            if(!ramps.includes(this)){
            tutorial_canvas_context.fillStyle = "cyan" //this.color
            }else{
            tutorial_canvas_context.fillStyle = this.color
            }
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
            tutorial_canvas_context.lineWidth = 4
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
            if(!ramps.includes(this)){
            tutorial_canvas_context.fillStyle = this.color
            }else{
            tutorial_canvas_context.fillStyle = this.color
            }
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
                tutorial_canvas_context.translate(-this.xmom, -this.ymom)
            }
            this.smove()
        }
        smove(){
            this.x += this.sxmom
            this.y += this.symom
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

    class Spring{
        constructor(body = 0){
            if(body == 0){
                this.body = new Circle(350, 350, 5, "red",10,10)
                this.anchor = new Circle(this.body.x, this.body.y+5, 3, "red")
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", 5)
                this.length = 1
            }else{
                this.body = body
                this.length = .1
                this.anchor = new Circle(this.body.x-((Math.random()-.5)*10), this.body.y-((Math.random()-.5)*10), 3, "red")
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", 5)
            }

        }
        balance(){
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", 5)

                if(this.beam.hypotenuse() !=0){
            if(this.beam.hypotenuse() < this.length){
                    this.body.xmom += (this.body.x-this.anchor.x)/(this.length)/300
                    this.body.ymom += (this.body.y-this.anchor.y)/(this.length)/300
                    this.anchor.xmom -= (this.body.x-this.anchor.x)/(this.length)/300
                    this.anchor.ymom -= (this.body.y-this.anchor.y)/(this.length)/300
            }else if(this.beam.hypotenuse() > this.length){
                    this.body.xmom -= (this.body.x-this.anchor.x)/(this.length)/300
                    this.body.ymom -= (this.body.y-this.anchor.y)/(this.length)/300
                    this.anchor.xmom += (this.body.x-this.anchor.x)/(this.length)/300
                    this.anchor.ymom += (this.body.y-this.anchor.y)/(this.length)/300
            }

        }

        let xmomentumaverage 
        let ymomentumaverage
        xmomentumaverage = ((this.body.xmom)+this.anchor.xmom)/2
        ymomentumaverage = ((this.body.ymom)+this.anchor.ymom)/2

                this.body.xmom = ((this.body.xmom)+xmomentumaverage)/2
                this.body.ymom = ((this.body.ymom)+ymomentumaverage)/2
                this.anchor.xmom = ((this.anchor.xmom)+xmomentumaverage)/2
                this.anchor.ymom = ((this.anchor.ymom)+ymomentumaverage)/2
        }
        draw(){
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", 5)
            this.beam.draw()
            this.body.draw()
            this.anchor.draw()
        }
        move(){
                    this.body.move()
                    this.anchor.move()
        }

    }


    class Observer{
        constructor(){
            this.body = new Circle( 500, 500, 5, "white")
            this.ray = []
            this.rayrange = 220
            this.globalangle = Math.PI
            this.gapangle = Math.PI/8
            this.currentangle = 0
            this.obstacles = []
            this.raymake = 40
        }

        beam(){
            this.currentangle  = this.gapangle/2
            for(let k = 0; k<this.raymake; k++){
                this.currentangle+=(this.gapangle/Math.ceil(this.raymake/2))
                let ray = new Circle(this.body.x, this.body.y, 1, "white",((this.rayrange * (Math.cos(this.globalangle+this.currentangle))))/this.rayrange*2, ((this.rayrange * (Math.sin(this.globalangle+this.currentangle))))/this.rayrange*2 )
                ray.collided = 0
                ray.lifespan = this.rayrange-1
                this.ray.push(ray)
            }
            for(let f = 3; f<this.rayrange/2; f++){
                for(let t = 0; t<this.ray.length; t++){
                    if(this.ray[t].collided < 1){
                        this.ray[t].move()
                    for(let q = 0; q<this.obstacles.length; q++){
                        if(this.obstacles[q].isPointInside(this.ray[t])){
                            this.ray[t].collided = 1
                        }
                      }
                    }
                }
            }
        }

        draw(){
            this.beam()
            this.body.draw()
            tutorial_canvas_context.lineWidth = 1
            tutorial_canvas_context.fillStyle = "red"
            tutorial_canvas_context.strokeStyle = "red"
            tutorial_canvas_context.beginPath()
            tutorial_canvas_context.moveTo(this.body.x, this.body.y)
            for(let y = 0; y<this.ray.length; y++){
                    tutorial_canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
                        tutorial_canvas_context.lineTo(this.body.x, this.body.y)
                }
            tutorial_canvas_context.stroke()
            tutorial_canvas_context.fill()
            this.ray =[]
        }

        control(){
            if(keysPressed['t']){
                this.globalangle += .05
            }
            if(keysPressed['r']){
                this.globalangle -= .05
            }
            if(keysPressed['w']){
                this.body.y-=2
            }
            if(keysPressed['d']){
                this.body.x+=2
            }
            if(keysPressed['s']){
                this.body.y+=2
            }
            if(keysPressed['a']){
                this.body.x-=2
            }
        }
    }

    class Shape{
        constructor(shapes){
            this.shapes = shapes
        }
        isPointInside(point){
            for(let t = 0; t<this.shapes.length;t++){
                if(this.shapes[t].isPointInside(point)){
                    return true
                }
            }
        
            return false
        }

    }
    class Health{
        constructor(pomao){
            this.pomao = pomao
            this.rays = []
            this.body = new Circle(this.pomao.body.x - 375, this.pomao.body.y - 300, 25, "red" )
        }
        draw(){
            this.body = new Circle(this.pomao.body.x - 375, this.pomao.body.y - 300, 25, "red" )
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
            this.blush = 0
            this.high = 0
            this.eggtimer = 10
            this.body = new Circlex(425,350, 32, "red")
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
        }
        gravity(){
            this.flapstep++
            if(this.flapstep%3 ==0){

                this.flap++
                this.flap %= 3
            }

            if(dry == 1){
                if(this.body.ymom > 0){
                    this.body.ymom = 0
                }
                if(this.jumping == 0){
                     this.timeloopx = 0
                }
                this.pounding = 0
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
                
                if(t > 0 && keysPressed['s']){

                }else{

                    if(squarecirclefeet(floors[t], this.body)){
                        if(Math.abs(this.body.y-floors[t].y) <= this.body.radius){
                            tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-this.body.radius))
                            this.body.y = floors[t].y-this.body.radius
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
                    }else if(floors[t].isPointInside(pomao.tongue)){
                        // tutorial_canvas_context.translate(0,  this.body.y-(floors[t].y-this.body.radius))
                        // this.body.y = floors[t].y-this.body.radius
                        if(this.tongueymom <0){
                            this.body.symom +=this.tongueymom*1.1
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
                            this.body.symom -=this.tongueymom*1.1
                            if(Math.abs(this.tonguex) >15){
                                if( this.dir == -1){
                                    this.body.sxmom -=Math.abs(this.tonguexmom*3)
                                }else{
                                    this.body.sxmom +=Math.abs(this.tonguexmom*3)
                                }
                            }
                            this.tongueymom*=.5
                            this.tonguexmom*=.5
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
                this.pounding = 0
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
            this.blush--
            this.timeloop+=.05
            this.timeloops+=.01
            this.bodytight = new Circle(this.body.x,this.body.y, 10, "yellow")
            this.bodyloose = new Circle(this.body.x,this.body.y, 25, "yellow")
            this.control()
            this.body.move()
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
            if(this.tongue.y > this.body.y){
                this.tongueymom -=.5
            }
            if(this.tongue.y < this.body.y){
                this.tongueymom +=.5
            }

            if(this.body.isPointInside(this.tongue)){
                // if(!keysPressed[' ']){
                    // if(Math.abs(this.tongueymom) > 20  || Math.abs(this.tonguexmom) > 20 ){
                        this.tonguexmom*=.5
                        this.tongueymom*=.5
                    // }
                // }
            }else{
            this.tonguexmom*=.91
            this.tongueymom*=.91
            }
            this.tongue = new Circle(this.body.x+this.tonguex, this.body.y+this.tonguey, 5, "blue")
            this.tongue.draw()
            this.link = new Line(this.body.x, 3+this.body.y-(Math.sin(this.timeloop)*1), this.tongue.x, this.tongue.y, "blue", 3)
            this.link.draw()

            if(this.tongue.y > this.body.y - 14){
                this.diry = -1
            }else{
                this.diry = 0
            }


            for(let t = 0; t<fruits.length; t++){
                if(fruits[t].x > this.body.x-(tutorial_canvas.width) && fruits[t].x < this.body.x+(tutorial_canvas.width) ){
    
                    fruits[t].draw()
                }
            }



            for(let t = 0; t<boys.length; t++){
                if(boys[t].x > this.body.x-(tutorial_canvas.width) && boys[t].x < this.body.x+(tutorial_canvas.width) ){
                    boys[t].draw()
                }
            }
        
            for(let t = 0; t<deadboys.length; t++){
              deadboys[t].popdraw()
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
            this.height  = 68+this.pounding
        }
        if(this.jumping == 1){
            this.width  = 60-this.pounding
        }

        for(let t = 0; t<pomao.thrown.length; t++){
            pomao.thrown[t].draw()
        }
        if(this.diry == -1){
            hot--
            for(let t = 0;t<this.thrown.length; t++){
                if(this.body.isPointInside(this.thrown[t])){
                    hot=20
                }
            }
            if(hot<=0){

                if(this.blush <= 1){
                if(this.dir == 1){
                    if(this.hng != 0 && this.pounding == 0 && keysPressed['w']){
                        tutorial_canvas_context.drawImage(pomaof, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimg, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }else{
                    if(this.hng != 0 && this.pounding == 0 && keysPressed['w']){
                        tutorial_canvas_context.drawImage(pomaofl, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimgl, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }

            }else{
                if(this.dir == 1){
                    if(this.hng != 0 && this.pounding == 0 && keysPressed['w']){
                        tutorial_canvas_context.drawImage(pomaofb, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimgb, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                      }
                }else{
                    if(this.hng != 0 && this.pounding == 0 && keysPressed['w']){
                        tutorial_canvas_context.drawImage(pomaoflb, (pomaof.width/3*this.flap), 0, pomaof.width/3, pomaof.height, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
                       }else{  
                            tutorial_canvas_context.drawImage(pomaoimgbl, this.body.x-(this.width/2), this.body.y-(this.height/2)-(Math.sin(this.timeloop)*1.5),  this.width ,  this.height )
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
            // console.log(pomao)
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


            if(keysPressed['f'] || keysPressed['n']){
                if(this.jumping == 1){
                    if(this.body.ymom > -3.5){
                        this.pounding = 10
                        this.body.ymom = 17
                        this.timeloop = Math.PI
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
            if(keysPressed['w']){
                if(this.jumping == 0){
                    this.body.ymom = -5.1
                    this.runner = 0
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
                if(this.hng > 0){
                    this.hng *= .997
                }
            }
            if(this.disabled == 0){

                if(keysPressed['d']){
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
            }

            if(keysPressed['a']  || keysPressed['d'] || (this.body.symom !== 0 || this.body.sxmom !== 0)){
        for(let t = 1; t<this.eggs.length; t++){
            if(this.eggs[t].marked == 0){
            this.eggs[t].steer()
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


            if(this.disabled == 0){
            if(keysPressed['a']){
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
        }
            // if(keysPressed['f']){
            //     // tutorial_canvas_context.clearRect(0,0,tutorial_canvas.width, tutorial_canvas.height)
            // }

            if(keysPressed[' ']){
            this.tongue = new Circle(this.body.x+this.tonguex, this.body.y+this.tonguey, 5, "blue")
                if(this.bodytight.isPointInside(this.tongue)){
                    if(keysPressed['ArrowDown'] || keysPressed['k'] ){
                        this.ydir = 1
                        // this.tongueymom = 33
                        } if(keysPressed['ArrowUp'] || keysPressed['i'] ){
                            this.ydir = -1
                            // console.log('hit')
                            // this.tongueymom = -33
                            } if(keysPressed['ArrowLeft'] || keysPressed['j'] ){
                                this.xdir = -1
                                // this.tonguexmom = -33
                                } if(keysPressed['ArrowRight'] || keysPressed['l'] ){
                                    this.xdir = 1
                                    // this.tonguexmom = 33
                                    }
                    if(this.xdir == 1){
                        this.tonguexmom = 33
                        this.dir = 1
                    }
                    if(this.ydir == 1){
                        this.tongueymom = 33
                    }
                    if(this.xdir == -1){
                        this.tonguexmom = -33
                        this.dir = -1
                    }
                    if(this.ydir == -1){
                        this.tongueymom = -33
                    }
                    if(this.xdir*this.ydir != 0){
                        this.tonguexmom *= .8
                        this.tongueymom *= .8
                    }

                    if(this.xdir == 0 && this.ydir ==0){
                        if(this.dir == 1){
                        this.tonguexmom = 33
                        }else{
                        this.tonguexmom = -33
                        }
                    }


                }
            }else if (this.body.isPointInside(this.tongue)){
                this.tonguey *=.5
                this.tonguex *=.5
            }


            this.ydir = 0
            this.xdir = 0
            this.eggtimer++
            if(this.eggs[this.eggs.length-1] != this.body){

                if(this.eggs.length > 1 && this.eggtimer > 10){
                    this.eggtimer = 0
                    if(keysPressed['m']){

                            if(keysPressed['ArrowDown'] || keysPressed['k'] ){
                                this.ydir = 1
                                // this.tongueymom = 33
                                } if(keysPressed['ArrowUp'] || keysPressed['i'] ){
                                    this.ydir = -1
                                    // console.log('hit')
                                    // this.tongueymom = -33
                                    } if(keysPressed['ArrowLeft'] || keysPressed['j'] ){
                                        this.xdir = -1
                                        // this.tonguexmom = -33
                                        } if(keysPressed['ArrowRight'] || keysPressed['l'] ){
                                            this.xdir = 1
                                            // this.tonguexmom = 33
                                            }

                            if(this.xdir == -1){
                                this.eggs[this.eggs.length-1].x  = this.body.x
                                this.eggs[this.eggs.length-1].y  = this.body.y
                                this.eggs[this.eggs.length-1].marked  = 1
                                this.eggs[this.eggs.length-1].xmom  = -12
                                this.eggs[this.eggs.length-1].ymom = -3
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                                this.dir = -1
                            }
                            if(this.xdir == 1){
                                this.eggs[this.eggs.length-1].x  = this.body.x
                                this.eggs[this.eggs.length-1].y  = this.body.y
                                this.eggs[this.eggs.length-1].marked  = 1
                                this.eggs[this.eggs.length-1].xmom  = 12
                                this.eggs[this.eggs.length-1].ymom = -3
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                                this.dir = 1
                            }
                            if(this.ydir == 1){
                                this.eggs[this.eggs.length-1].x  = this.body.x
                                this.eggs[this.eggs.length-1].y  = this.body.y
                                this.eggs[this.eggs.length-1].marked  = 1
                                this.eggs[this.eggs.length-1].xmom += this.dir
                                this.eggs[this.eggs.length-1].ymom = 8
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                            }
                            if(this.ydir == -1){
                                this.eggs[this.eggs.length-1].x  = this.body.x
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
                                this.eggs[this.eggs.length-1].x  = this.body.x
                                this.eggs[this.eggs.length-1].y  = this.body.y
                                this.eggs[this.eggs.length-1].xmom *= .8
                                this.eggs[this.eggs.length-1].ymom *= .8
                                // this.thrown.push(this.eggs[this.eggs.length-1])
                                // this.eggs.pop()
                            }
        
                            if(this.xdir == 0 && this.ydir ==0){
                                if(this.dir == 1){
    
                                this.eggs[this.eggs.length-1].x  = this.body.x
                                this.eggs[this.eggs.length-1].y  = this.body.y
                                this.eggs[this.eggs.length-1].marked  = 1
                                this.eggs[this.eggs.length-1].xmom = 12
                                this.eggs[this.eggs.length-1].ymom = -.95
                                    // this.thrown.push(this.eggs[this.eggs.length-1])
                                    // this.eggs.pop()
                                }else{
    
                                this.eggs[this.eggs.length-1].x  = this.body.x
                                this.eggs[this.eggs.length-1].y  = this.body.y
                                this.eggs[this.eggs.length-1].marked  = 1
                                    this.eggs[this.eggs.length-1].xmom= -12
                                    this.eggs[this.eggs.length-1].ymom = -.95
                                    // this.thrown.push(this.eggs[this.eggs.length-1])
                                    // this.eggs.pop()
                                }





                        // console.log(this.eggs)
                        // this.eggs.splice(this.eggs.length-1, 1)
                        // console.log(this.eggs)
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

    let pomao = new Pomao()

    let boys = []
    let deadboys = []
    let fruits = []
    let floor = new Rectangle(-10000, 650, 500, 7000000, "red")

    let floor2 = new Rectangle(-100, 500, 20, 550, "red")

    let ramp = new Triangle(800, 650, "red", 40)
    ramps.push(ramp)

    let ramp2 = new Trianglex(1300, 650, "red", 40)
    ramps.push(ramp2)

    let ramp4 = new Circle(1900,700, 120, "red")
    ramps.push(ramp4)
    let ramp3 = new Circle(1900,1200, 600, "red")
    ramps.push(ramp3)
    floors.push(floor)
    floors.push(floor2)

    for(let t = 0 ; t< 100; t++){
        let floor3 = new Rectangle(-100+600*t, 500-(t*100), 20, 400, "red")
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
                if(fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 320 && fruit.body.x < 530) ){
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
    fruitx.type = 7
    fruitx.type2 = 7
    fruits.push(fruitx)

    for(let t = 0;t<10000; t++){
        let fruit = new Fruit(-200000+(Math.random()*400000),225+(Math.random()*315), 60,60, "red")
        let wet = 0
        for(let s = 0; s<floors.length; s++){
            if(floors[s].isPointInside(fruit.body)){
                wet = 1
                break
            }
        }
        for(let k = 0;k<fruits.length; k++){
            if(fruit.body.repelCheck(fruits[k].body) || (fruit.body.x > 320 && fruit.body.x < 530) ){
                wet = 1
                break
            }
        }
        if(wet == 0){
            fruits.push(fruit)
        }
    }

    class Seed{
        constructor(target){
            // console.log(pomao)
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
        }
        steer(){

            if(pomao.eggs.includes(this)){
                this.marked = 0
            }
            if(pomao.thrown.includes(this)){
                this.marked = 1
            }
            if(this.marked == 0){
            if(Math.abs(this.x-this.target.x) > 8){
                this.pos.push(this.target.x)
            }

            if((this.pos.length-15) > this.count){
                this.x = this.pos[this.count]
                this.count++
            }
        }
        }
        steery(){

            if(pomao.eggs.includes(this)){
                this.marked = 0
            }
            if(pomao.thrown.includes(this)){
                this.marked = 1
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
            // console.log(pomao.eggs, pomao.thrown)

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

    for(let t = 0; t<4; t++){
        let boy = new Boys(0+(t*100),100,50,50,"red")
        boys.push(boy)
    }
    

    setTimeout(function(){
    window.setInterval(function(){ 
        "#AAAAFF"
        if(pomao.high > 1){
            tutorial_canvas_context.fillStyle =`rgba(0, 0, 0,${15/255})`
            tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)
            }else{
                tutorial_canvas_context.fillStyle =`rgba(170, 170, 255,${255/255})`
                tutorial_canvas_context.fillRect(-1000000000,-1000000000,tutorial_canvas.width*100000000, tutorial_canvas.height*100000000)
               }
        if(pomao.hits > -1){

            for(let t = 0; t<floors.length; t++){
                floors[t].draw()
            }
            for(let t = 0; t<ramps.length; t++){
                ramps[t].draw()
            }
    
            pomao.draw()
            // for(let t = 0; t<boys.length; t++){
            //     boys[t].draw()
            // }
            for(let t = 0; t<boys.length; t++){
                boys[t].clean()
            }
            // floor.draw()
            for(let t = 0; t<fruits.length; t++){
                fruits[t].clean()
            }
            for(let t = 0; t<pomao.eggs.length; t++){
                pomao.eggs[t].draw()
            }
    
            for(let t = 0; t<pomao.eggs.length; t++){
                if(pomao.thrown.includes(pomao.eggs[t])){
                    pomao.eggs.splice(t,1)
                }
            }
    
    
    
    
            
    
            for(let k = 0; k<boys.length; k++){
            for(let t = 0; t<pomao.thrown.length; t++){
                // console.log(boys[k])
                // console.log(pomao.thrown[t])
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
            }
    
        }else{
            tutorial_canvas_context.fillStyle = "White";
            tutorial_canvas_context.font = "30px Arial";
            tutorial_canvas_context.fillText(`Pomao fell asleep and went home`, pomao.body.x-200, pomao.body.y);
              tutorial_canvas.style.background = "#8888CC"
        }
    },  14) 
}, 1000); 



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
        
function getRandomLightColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[(Math.floor(Math.random() * 15)+1)];
    }
    return color;
  }

})
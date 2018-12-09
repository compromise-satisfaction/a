enchant()

window.onload = function(){
    var core = new Core(1280,722)
    core.preload('a.png','b.png')
    core.fps = 100
    core.onload = function(){
        
        var a = new Sprite(1280,722)
        a.image = core.assets['a.png']
        a.x = 0
        a.y = 0
        core.rootScene.addChild(a)
        
        var b = new Sprite(1280,722)
        b.image = core.assets['b.png']
        b.x = 0
        b.y = 0
        core.rootScene.addChild(b)
        
        function idou(name){
            if (core.input.down){
                name.y+=5
            }
            if (core.input.up){
                name.y-=5
            }
            if (core.input.left){
                name.x-=5
            }
            if (core.input.right){
                name.x+=5
            }
        }
        
         a.addEventListener('enterframe',function(){
                            idou(a)
                            if(a.x<-40){
                            a.x=-40
                            }
                            if(a.x>50){
                            a.x=50
                            }
                            if(a.y<-40){
                            a.y=-40
                            }
                            if(a.y>60){
                            a.y=60
                            }
                            })
        
        core.rootScene.on('touchstart',function(e){
                          a.x=e.x-545
                          a.y=e.y-412
                          })
        
    }
    core.start()
}

enchant()

window.onload = function(){
    var core = new Core(1280,722)
    core.preload('a.png','b.png','c.png')
    core.fps = 50
    core.onload = function(){
        
        var spead=0;
        var Initial_speed=0;
        var gravity = 9.8;
        var time = 0;
        var time_c = 0;
        
        var a = new Sprite(1280,722)
        a.image = core.assets['a.png']
        a.x = 0
        a.y = 0
        core.rootScene.addChild(a)
        
        var b = new Sprite(1280,722)
        b.image = core.assets['b.png']
        b.x = 0
        b.y = 0
        b.frame = 0;
        core.rootScene.addChild(b)
        
        var c = new Sprite(1280,722)
        c.image = core.assets['c.png']
        c.x = 0
        c.y = 0
        c.opacity = 0;
        core.rootScene.addChild(c)
        
        var label1 = new Label();
        label1.x = 0;
        label1.y = 0;
        label1.color = 'red';
        label1.font = '40px "Arial"';
        label1.on('enterframe', function(){
                  label1.text = ('経過時間　= '+Math.floor(time));
                  });
        core.rootScene.addChild(label1)
        
        function idou(name){
            if (core.input.down){
                name.y+=1
            }
            if (core.input.up){
                name.y-=1
            }
            if (core.input.left){
                name.x-=1
            }
            if (core.input.right){
                name.x+=1
            }
        }
        
         a.addEventListener('enterframe',function(){
                            idou(this)
                            time+=0.02;
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
        
        b.addEventListener('enterframe',function(){
                           if(time<5){
                           this.frame=0;
                           spead=0;
                           c.y=0;
                           c.opacity += 0.01;
                           }
                           else if(time>5 && time<5.2){
                           time_c+=0.02;
                           this.frame=1;
                           }
                           else if(time>5.2 && time<5.4){
                           time_c+=0.02;
                           this.frame=2;
                           }
                           else if(time>5.4 && time<5.6){
                           time_c+=0.02;
                           this.frame=1;
                           }
                           else if(time>5.6 && time<7){
                           time_c+=0.02;
                           this.frame=0;
                           }
                           else if(time>7){
                           time=0;
                           time_c=0;
                           c.opacity = 0;
                           }
                           })
        
        c.addEventListener('enterframe',function(){
                           spead = Initial_speed+gravity*time_c
                           this.y+=spead
                           })
        
        core.rootScene.on('touchstart',function(e){
                          a.x=e.x-545
                          a.y=e.y-412
                          })
        
    }
    core.start()
}

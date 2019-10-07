enchant()

window.onload = function(){
    var core = new Core(1280,722)
    core.preload('image/a.png','image/a2.png','image/b.png','image/b2.png');
    core.preload('image/c.png','image/d.png','image/e.png','image/f.png');
    core.preload('image/z.png');
    core.fps = 50
    core.onload = function(){

        var spead=0;
        var Initial_speed=0;
        var gravity = 9.8;
        var time = 0;
        var time_a2 = 0;
        var time_d2 = 0;
        var time_c = 0;
        var time_d = 0;
        var i = 1;
        var i2 = 1;
        var i3 = 1;

        var a = new Sprite(1280,722)
        a.image = core.assets['image/a.png']
        a.x = 0
        a.y = 0
        a.frame = 0
        core.rootScene.addChild(a)

        var a2 = new Sprite(1280,722)
        a2.image = core.assets['image/a2.png']
        a2.x = 0
        a2.y = 0
        a2.frame = 0
        core.rootScene.addChild(a2)

        var b = new Sprite(1280,722)
        b.image = core.assets['image/b.png']
        b.x = 0
        b.y = 0
        b.frame = 0;
        core.rootScene.addChild(b)

        var b2 = new Sprite(1280,722)
        b2.image = core.assets['image/b2.png']
        b2.x = 0
        b2.y = 5000
        core.rootScene.addChild(b2)

        var c = new Sprite(1280,722)
        c.image = core.assets['image/c.png']
        c.x = 0
        c.y = 0
        core.rootScene.addChild(c)

        var e = new Sprite(1280,722)
        e.image = core.assets['image/e.png']
        e.x = 0
        e.y = 0
        core.rootScene.addChild(e)

        var d = new Sprite(1280,722)
        d.image = core.assets['image/d.png']
        d.x = 0
        d.y = 0
        d.opacity = 0;
        core.rootScene.addChild(d)

        var f = new Sprite(1280,722)
        f.image = core.assets['image/f.png']
        f.x = 0
        f.y = 0
        f.opacity = 0;
        core.rootScene.addChild(f)

        var z = new Sprite(173,129)
        z.image = core.assets['image/z.png']
        z.x = 0
        z.y = 5000
        core.rootScene.addChild(z)

        var label1 = new Label();
        label1.x = 0;
        label1.y = 0;
        label1.color = 'red';
        label1.font = '40px "Arial"';
        label1.on('enterframe', function(){
                  label1.text = ('涙　= '+Math.floor(d.opacity*40));
                  });
        core.rootScene.addChild(label1)

        var label2 = new Label();
        label2.x = 0;
        label2.y = 40;
        label2.color = 'red';
        label2.font = '40px "Arial"';
        label2.on('enterframe', function(){
                  label2.text = ('石　= '+Math.floor(f.opacity*100));
                  });
        core.rootScene.addChild(label2)

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
                            idou(a2)
                            a2.x-=time_a2
                            time_a2+=0.01*i2
                            if(time_a2>0.2){
                            i2*=-1;
                            }
                            if(time_a2<-0.2){
                            i2*=-1;
                            }
                            time+=0.02;
                            if(a.x<-40){
                            a.x=-40
                            a2.x=-40
                            }
                            if(a.x>50){
                            a.x=50
                            a2.x=50
                            }
                            if(a.y<-40){
                            a.y=-40
                            a2.y=-40
                            }
                            if(a.y>60){
                            a.y=60
                            a2.y=60
                            }
                            })

        b.addEventListener('enterframe',function(){
                           if(time<5){
                           this.frame=0;
                           spead=0;
                           d.x-=time_d2
                           time_d2+=0.05*i3
                           if(time_d2>0.2){
                           i3*=-1;
                           }
                           if(time_d2<-0.2){
                           i3*=-1;
                           }
                           d.y=0;
                           d.opacity += 0.01;
                           }
                           else if(time>5 && time<5.2){
                           time_d+=0.02;
                           this.frame=1;
                           }
                           else if(time>5.2 && time<5.4){
                           time_d+=0.02;
                           this.frame=2;
                           }
                           else if(time>5.4 && time<5.6){
                           time_d+=0.02;
                           this.frame=1;
                           }
                           else if(time>5.6 && time<7){
                           time_d+=0.02;
                           this.frame=0;
                           }
                           else if(time>7){
                           time=0;
                           time_d=0;
                           d.opacity = 0.01;
                           }
                           })

        b2.addEventListener('enterframe',function(){
                            if(a.y==-40){
                            if(a.x>-5){
                            if(a.x<5){
                            time-=0.02
                            spead=0
                            time_d=0
                            a2.y = 5000
                            this.y=0
                            f.opacity=0
                            }
                            else{
                            this.y=5000
                            a2.y = a.y
                            }
                            }
                            else{
                            this.y=5000
                            a2.y = a.y
                            }
                            }
                            else{
                            this.y=5000
                            a2.y = a.y
                            }
                            z. rotation = time_a2*100
                           })

        c.addEventListener('enterframe',function(){
                           this.y+=time_c
                           time_c+=0.01*i
                           if(time_c>0.2){
                           i*=-1;
                           }
                           if(time_c<-0.2){
                           i*=-1;
                           }
                           })

        d.addEventListener('enterframe',function(){
                           spead = Initial_speed+gravity*time_d
                           this.y+=spead
                           })

        f.addEventListener('enterframe',function(){
                           if(z.x>430 && z.x<450 && z.y>500 && z.y<520){
                            if(this.opacity*100<100){
                                this.opacity+=0.01
                            }
                           }
                           else if(this.opacity*100<100){
                           this.opacity=0
                           }
                           })

        core.rootScene.on('touchstart',function(e){
                          a.x=e.x-545
                          a.y=e.y-412
                          a2.x=e.x-545
                          a2.y=e.y-412
                          a.frame+=1
                          a2.frame+=1
                          z.x=e.x-89
                          z.y=e.y-59
                          })

    }
    core.start()
}

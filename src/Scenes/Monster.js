class Monster extends Phaser.Scene {

    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        this.load.image("1", "icons8-1-key-50.png");
        // console.log("1 added")
        this.load.image("2", "icons8-2-key-50.png");
        // console.log("2 added")
        this.load.image("3", "icons8-3-key-50.png");
        // console.log("3 added")
        this.load.image("4", "icons8-4-key-50.png");
        // console.log("4 added")
        this.load.image("5", "icons8-5-key-50.png");
        // console.log("5 added")

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Loading Screen (Keyboard Required)<br>Press 6 to begin short loading screen. Press 7 to begin long loading screen.</h2>'
    }

    create() {

        this.key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
    
        this.key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        
        this.key3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        
        this.key4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);

        this.key5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);

        this.key6 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);

        this.key7 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);

        this.gameFrame = 0;
        this.trueGameFrame = 0;
        this.gameActive = false;
        this.gameActivePrev = false;
        this.gameType = 0;
        this.buttonArr = [];

    }

    spawn_button(x, y) {
        var randomNumber = Phaser.Math.Between(1, 5);
        switch(randomNumber) {
            case 1:
                this.my.sprite.one = this.add.sprite(x, y, "1");
                this.my.sprite.one.id = 1;
                this.buttonArr.push(this.my.sprite.one);
                // this.my.sprite.one.visible = true
                // console.log(this.my.sprite.one)
                // console.log("1", this.my.sprite.one != null)
                break;
            case 2:
                this.my.sprite.two = this.add.sprite(x, y, "2");
                this.my.sprite.two.id = 2;
                this.buttonArr.push(this.my.sprite.two);
                // this.my.sprite.two.visible = true
                // console.log(this.my.sprite.two)
                // console.log("2", this.my.sprite.two != null)
                break;
            case 3:
                this.my.sprite.three = this.add.sprite(x, y, "3");
                this.my.sprite.three.id = 3;
                this.buttonArr.push(this.my.sprite.three);
                // this.my.sprite.three.visible = true
                // console.log(this.my.sprite.three)
                // console.log("3", this.my.sprite.three != null)
                break;
            case 4:
                this.my.sprite.four = this.add.sprite(x, y, "4");
                this.my.sprite.four.id = 4;
                this.buttonArr.push(this.my.sprite.four);
                // this.my.sprite.four.visible = true
                // console.log(this.my.sprite.four)
                // console.log("4", this.my.sprite.four != null)
                break;
            case 5:
                this.my.sprite.five = this.add.sprite(x, y, "5");
                this.my.sprite.five.id = 5;
                this.buttonArr.push(this.my.sprite.five);
                // this.my.sprite.five.visible = true
                // console.log(this.my.sprite.five)
                // console.log("5", this.my.sprite.five != null)
                break;
        }
    }
    
    update() {
        if(this.gameActive == true) {
            if(this.gameActivePrev == false) {this.children.removeAll(true); this.gameActivePrev = true}
            this.txt = this.add.text(550, 550, "Loading...", { font: '32px Press Start 2P', color: "#000000"});
            this.gameFrame++;
            this.trueGameFrame++;
            //console.log(this.gameFrame)
            
            
            if(this.gameFrame >= 80 && this.buttonArr.length == 0) this.gameFrame = 0;

            switch(this.gameFrame) {
                case 30:
                    this.spawn_button(100, 450);
                    // console.log("button spawned");
                    break;
                case 40:
                    this.spawn_button(150, 450);
                    // console.log("button spawned");
                    break;
                case 50:
                    this.spawn_button(200, 450);
                    // console.log("button spawned");
                    break;
                case 60:
                    this.spawn_button(250, 450);
                    // console.log("button spawned");
                    break;
                case 70:
                    this.spawn_button(300, 450);
                    // console.log("button spawned");
                    break;
            }

            // Iterate over each child in the scene using forEach
            //console.log(this.buttonArr)
            if (this.buttonArr && this.buttonArr.length > 0) {
                let toRemove = [];
                this.buttonArr.forEach(sprite => {
                    if (sprite instanceof Phaser.GameObjects.Sprite && sprite.y < 550) {
                        //console.log(sprite.y);
                        sprite.y += 10; // Increment the y position by 5
                    }

                    switch(sprite.id) {
                        case 1:
                            if(Phaser.Input.Keyboard.JustDown(this.key1)) toRemove.push(sprite);
                            break;
                        case 2:
                            if(Phaser.Input.Keyboard.JustDown(this.key2)) toRemove.push(sprite);
                            break;
                        case 3:
                            if(Phaser.Input.Keyboard.JustDown(this.key3)) toRemove.push(sprite);
                            break;
                        case 4:
                            if(Phaser.Input.Keyboard.JustDown(this.key4)) toRemove.push(sprite);
                            break;
                        case 5:
                            if(Phaser.Input.Keyboard.JustDown(this.key5)) toRemove.push(sprite);
                            break;
                    }
                    
                });

                                
                // Remove the marked sprites from the main array
                this.buttonArr = this.buttonArr.filter(sprite => !toRemove.includes(sprite));

                // Optionally, you can destroy the sprites if you no longer need them
                toRemove.forEach(sprite => {
                    sprite.destroy();
                });
            }

{}
            if(this.trueGameFrame > 300 && this.gameType == 1) { this.gameActivePrev = true; this.gameActive = false; }
            else if(this.trueGameFrame > 750 && this.gameType == 2) { this.gameActivePrev = true; this.gameActive = false; }

        }
        else {
            this.children.removeAll(true);
            this.trueGameFrame = 0;
            this.gameFrame = 0;
            this.txt = this.add.text(550, 550, "Loading Complete", { font: '32px Press Start 2P', color: "#000000"});
            if(this.key6.isDown) {this.gameActive = true; this.gameActivePrev = false; this.gameType = 1;}
            else if(this.key7.isDown) {this.gameActive = true; this.gameActivePrev = false; this.gameType = 2;}
            // this.add.circle(100, 100, 50, 0xff0000)
        }
        
    }

}
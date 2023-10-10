var gameStart = false;
var count = 1;
var sound = ["red", "green", "blue", "yellow", "wrong"];
var sounds = [];
var len = 0;

    if(!gameStart){
        game();
    }

function game(){
    $(document).on("keydown", function(event){
            $("h1").text("Level " + count);
            randomSound();
            $(document).unbind("keydown");
            gameStart = true;
            // for(var i=0; i<sounds.length; i++){
                $(".btn").on("click", function(event){
                    if(len < sounds.length){
                        if(event.target.id === sounds[len]){
                            makeSound(event.target.id);
                            boxPressed(event.target.id);
                            len++;
                            if(sounds.length === len){
                                count++;
                                $("h1").text("Level " + count);
                                setTimeout(function(){
                                    randomSound();
                                }, 1000)
                                // randomSound();
                                len = 0;
                            }                         
                        }else{
                            makeSound("wrong");
                            // gameStart = false;
                            $("h1").text("Press A Key to Start");
                            sounds = [];
                            count = 1;
                            game();
                        }
                    }
                    
                    
                    
                    console.log("event", event.target.id);
                });
            // }
            // if(gameStart){
            //     count++;
            //     $("h1").text("Level " + count);
            //     randomSound();
            // }
           
        });     
    }




function randomSound(){
    var randInt = Math.floor(Math.random()*(sound.length-1));
    console.log(randInt);
    makeSound(sound[randInt]);
    sounds.push(sound[randInt]);
    boxPressed(sound[randInt]);
    console.log(sounds);
    // return sound[randInt];
}

function boxPressed(key){
    $("#"+key).addClass("pressed");
    setTimeout(function(){
        $("#"+key).removeClass("pressed");
    }, 300);
}


function makeSound(key){
    switch(key){
        case "red":
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "green":
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            break;
        case "wrong":
            var audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            break;
        default: 
            break;
    }
}

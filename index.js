var noOfDrumButtons = 7;

// When button is pressed
for(var i = 0; i < noOfDrumButtons; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var letter = this.innerHTML;
        playSound(letter);
        addAmimation(letter);

    });
}

// When button is pressed
document.addEventListener("keydown", function(event){
    playSound(event.key);
    addAmimation(event.key);
})



function playSound(key)
{
    switch(key)
        {
            case 'w':
                var audio1 = new Audio('crash.mp3');
                audio1.play();
                break;
            case 'a':
                var audio2 = new Audio('kick-bass.mp3');
                audio2.play();
                break;
            case 's':
                var audio3 = new Audio('snare.mp3');
                audio3.play();
                break;
            case 'd':
                var audio4 = new Audio('tom-1.mp3');
                audio4.play();
                break;
            case 'j':
                var audio5 = new Audio('tom-2.mp3');
                audio5.play();
                break;
            case 'k':
                var audio6 = new Audio('tom-3.mp3');
                audio6.play();
                break;
            case 'l':
                var audio7 = new Audio('tom-4.mp3');
                audio7.play();
                break;
            default:
                console.log("Error!!");
        }
}

function addAmimation(key){
    document.querySelector("."+ key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ key).classList.remove("pressed");
    }, 100);
}
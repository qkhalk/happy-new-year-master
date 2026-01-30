var buttonActive = document.querySelector('.button button')
var slider3 = document.querySelector(".slider3")
var mySong = document.getElementById("song")

mySong.loop = true

function tryPlaySong() {
    if (mySong.paused) {
        mySong.play().catch(function(error) {
            console.log("Autoplay was prevented by the browser. Interaction required to play audio.");
        });
    }
}

window.onload = function() {
    // Try autoplay, then retry shortly after load
    tryPlaySong();
    setTimeout(tryPlaySong, 2000);
}

// Guarantee looping even on browsers that ignore the loop attribute
mySong.addEventListener('ended', function() {
    mySong.currentTime = 0;
    tryPlaySong();
});

// Start audio on first user interaction if autoplay is blocked
document.addEventListener('click', tryPlaySong, { once: true });
document.addEventListener('touchstart', tryPlaySong, { once: true });

buttonActive.onclick = function(){
    // Show letter immediately
    slider3.classList.add("active")
    
    if(mySong.paused){
        mySong.play()
    }
}

var mail = document.querySelector(".mail")
var closeSlider3 = document.querySelector(".fa-xmark")
mail.onclick = function(){
    slider3.classList.add("active")
}
closeSlider3.addEventListener('click', function(){
    slider3.classList.remove('active')
})


// ------audio------------
var buttonSong = document.querySelector('.button')
buttonSong.onclick= function(){
    if(mySong.paused){
        mySong.play()
    }
}

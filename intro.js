var buttonActive = document.querySelector('.button button')
var slider3 = document.querySelector(".slider3")
var mySong = document.getElementById("song")

window.onload = function() {
    // Attempt to play immediately
    mySong.play().catch(function(error) {
        console.log("Autoplay was prevented by the browser. Interaction required to play audio.");
    });

    // Also attempt to play after 2 seconds
    setTimeout(function() {
        if (mySong.paused) {
            mySong.play().catch(function(error) {
                console.log("Autoplay after 2s was prevented by the browser.");
            });
        }
    }, 2000);
}

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
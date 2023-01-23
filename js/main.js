const playButton = document.getElementById("play-button");
const video = document.querySelector('.boratoma');

playButton.addEventListener("click", function(){
    video.muted = false;
    video.play();
    playButton.remove();
});

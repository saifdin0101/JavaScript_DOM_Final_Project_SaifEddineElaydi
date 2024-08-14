let playButton = document.querySelector(".hihi");
let video = document.querySelector("video");
playButton.addEventListener("click", ()=> {
    video.play();
    playButton.style.display = "none";
    video.style.position="relative"
    video.style.right= "-45px"
    video.style.bottom= "7px"


});
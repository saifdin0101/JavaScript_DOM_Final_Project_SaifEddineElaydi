let playButton = document.querySelector(".hihi");
let video = document.querySelector("video");
playButton.addEventListener("click", ()=> {
    video.play();
    playButton.style.display = "none";
    video.style.position="relative"
    video.style.right= "-45px"
    video.style.bottom= "7px"


});




let imgg = document.querySelectorAll(".imgg")
let starTers = document.querySelector(".click-1")
let breakfast = document.querySelector(".click-2")
let lunch = document.querySelector(".click-3")
let dinner = document.querySelector(".click-4")
let hh = document.querySelector(".verybig")

breakfast.addEventListener("click",()=>{
    hh.textContent="breakfast"
    
    imgg.forEach(element => {
        
        element.setAttribute("src","./public/images/menu-item-2.png")
        
    });

})
lunch.addEventListener("click",()=>{
    hh.textContent="Lunch"
    imgg.forEach(element => {
        element.setAttribute("src","./public/images/menu-item-3.png")
    });

})
dinner.addEventListener("click",()=>{
    hh.textContent="Dinner"
    imgg.forEach(element => {
        element.setAttribute("src","./public/images/menu-item-4.png")
    });

})
starTers.addEventListener("click",()=>{
    hh.textContent="Starters"
    imgg.forEach(element => {
        element.setAttribute("src","./public/images/menu-item-1.png")
    });

})



let login = document.querySelector(".log");
let mybody = document.body;
let mdl = document.querySelector(".hohoho");
let backdrop = document.createElement("div"); 
backdrop.className = "backdrop";

document.body.appendChild(backdrop); 

login.addEventListener("click", () => {
    mdl.innerHTML = `
        <div class="modal">
            <h1>Log In Section</h1>
            <div>
                <label for="">Username&#160;</label>
                <input placeholder="&#160;&#160;&#160;Type Your Username" type="text">
            </div>
            <div>
                <label for="">Password&#160;&#160;</label>
                <input placeholder="&#160;&#160;&#160;&#160;Type your Password" type="password">
            </div>
            <div>
                <label for="">Email&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</label>
                <input placeholder="&#160;&#160;&#160;Type Your Email" type="email">
            </div>
            <button class="save">Send</button>
        </div>
    `;
    
    backdrop.style.display = "block"; 
    login.style.display = "none";
    mdl.style.position="relative"
    mdl.style.top="100px"
    
    
    let sent = document.querySelector(".save");
    sent.addEventListener("click", () => {
        mdl.style.display = "none";
        login.style.display = "block";
        backdrop.style.display = "none"; 

    });
});







document.addEventListener('DOMContentLoaded', ()=> {
  let carousel = document.querySelector('.carousel');
  let slides = document.querySelectorAll('.slide');
  let totalSlides = slides.length;
  let index = 0;
let indicatorsGrp = document.querySelector('.indicators-grp');

let indicators = document.querySelectorAll('.indicator');

function updateIndicators() {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}
  function goToSlide(n) {
    if (n >= totalSlides) {
      index = 0;
    } else if (n < 0) {
      index = totalSlides - 1;
    } else {
      index = n;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;

updateIndicators();
  }
  function nextSlide() {
    goToSlide(index + 1);
  }
  setInterval(nextSlide, 4000);
updateIndicators();
});

let nav = document.querySelector("nav")
let watch = document.querySelector(".watch");
let vid = document.querySelector(".vv");
let bigdiv =document.querySelector(".bigDiv")
let closee =document.querySelector(".close")
watch.addEventListener("click", () => {
    vid.style.display = "block"
    nav.style.display="none"
    closee.addEventListener("click",(e)=>{
      vid.style.display="none"
      nav.style.display="flex"


    })
   
    
});


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







let nextBtns = document.querySelectorAll(".next")
let previousBtns = document.querySelectorAll(".previous")
let containers = document.querySelectorAll(".carousel-container")

let currentIndex = 0
const slideImage = (index, myBtn) => {
  let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")
  containers.forEach(container => {
    if (container.id == carouselBtnAttribute) {
      let slides = container.querySelectorAll(".slide")
      let camera = container.querySelector(".carousel")
      let slideWidth = slides[0].clientWidth
      let indicators = container.querySelectorAll('.indicator')

      if (index < 0) {
        index = slides.length - 1
      } else if (index >= slides.length) {
        index = 0
      }

      indicators.forEach(indicator => {
        indicator.classList.remove('activeIndicator')
      });
      indicators[index].classList.add("activeIndicator")

      camera.style.transform = `translateX(-${slideWidth * index}px)`
      currentIndex = index
    }
  });
}

nextBtns.forEach(next => {
  next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
});

previousBtns.forEach(previous => {
  previous.addEventListener("click", (event) => { slideImage(currentIndex - 1, event.target) })
});

containers.forEach(container => {
  if (container.getAttribute("autoslide")) {
    let nextBtn = container.querySelector(".next")
    setInterval(() => {
      nextBtn.click()
    }, 5000); 
  }
});

containers.forEach(container => {
  let slides = container.querySelectorAll(".slide")
  let indicatorsGrp = document.createElement("div")
  indicatorsGrp.classList.add("indicators-grp")
  container.appendChild(indicatorsGrp)

  slides.forEach(slide => {
    let indicator = document.createElement("div")
    indicator.classList.add("indicator")
    indicatorsGrp.appendChild(indicator)
  });
  indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
});
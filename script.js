
// active hamburger menu 
let navlist = document.querySelector(".navlist")

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    document.body.classList.remove("open");
})


// Initialize swiperjs 

  
var swiper2 = new Swiper(".portfolio__container", {
    cssMode: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 150 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

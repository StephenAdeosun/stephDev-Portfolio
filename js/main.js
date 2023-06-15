const preLoader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  preLoader.classList.add("remove");
}); 
 
 
 //---------Typing-------//
 var typed = new Typed(".typing",{
    strings:["Stephen Adeosun","a Web Developer", "a Front-End Developer", "a React Developer"],
    typeSpeed:50,
    backSpeed:50,
    loop:true

}
)


//============scrollToTop Button==========//
window.addEventListener("DOMContentLoaded", function() {
  var previousPageYOffset = window.pageYOffset;

  window.addEventListener("scroll", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    
    if (window.pageYOffset > previousPageYOffset) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }

    previousPageYOffset = window.pageYOffset;
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// =========== Hamburger menu =========//

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}





//=====================================Gallery=====================================//
/*=====--- Filterable Gallery with Lightbox ---=====*/

const body = document.body;
const galleryTabs = document.querySelectorAll(".gallery_tabs li");
const galleryItems = document.querySelectorAll(".gallery_item");
const galleryImgs = document.querySelectorAll(".gallery_item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox_img");
const lightboxCloseBtn = document.querySelector(".lightbox_close");

/*===== 01) Gallery Filtering functionality =====*/

galleryTabs.forEach((currTab) => {
  currTab.addEventListener("click", (e) => {
    // removing the existing 'active' class from the tabs.
    e.target.parentElement.querySelector(".active").classList.remove("active");

    // adding the 'active' class to the currently clicked tab.
    e.target.classList.add("active");

    let filterValue = e.target.getAttribute("data-filter");

    galleryItems.forEach((currItem) => {
      if (filterValue === "all" || currItem.classList.contains(filterValue)) {
        currItem.classList.remove("hide");
        currItem.classList.add("show");
      } else {
        currItem.classList.remove("show");
        currItem.classList.add("hide");
      }
    });
  });
});

/*===== 02) Lightbox functionality =====*/

galleryImgs.forEach((currImg) => {
  currImg.addEventListener("click", (e) => {
    let imgSrc = e.target.getAttribute("src");

    lightboxImg.setAttribute("src", imgSrc);

    lightbox.classList.add("open");
    body.classList.add("overflow_hide");
  });
});

// Function for closing the Lightbox
const lightboxClose = () => {
  lightbox.classList.remove("open");
  body.classList.remove("overflow_hide");
};

// closing the lightbox on clicking the lightboxClose btn.
lightboxCloseBtn.addEventListener("click", lightboxClose);

// closing the lightbox on clicking outside of it.
window.addEventListener("click", (e) => {
  if (e.target.className === "lightbox_wrapper") {
    lightboxClose();
  }
});

// closing the lightbox on pressing the Escape key.
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightboxClose();
  }
});



 





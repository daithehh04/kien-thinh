// Slide text
var swiper1 = new Swiper(".slideText", {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 16,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 8000,
  breakpoints: {
    768: {
        slidesPerView: 'auto',
    }
  }
});

// Slide About
var swiper2 = new Swiper(".slideAbout", {
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
  breakpoints: {
    768: {
        // spaceBetween: 'auto',
        centeredSlides: false,
        slidesPerView: 1.2,
    }
}
});
// Slide Partners
var swiper3 = new Swiper(".slidePartner", {
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  breakpoints: {
    768: {
        slidesPerView: 4,
    }
}
});

// Slide Constructor
var swiper4 = new Swiper(".slideConstructor", {
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  slideToClickedSlide: true,
  speed: 1000,
  breakpoints: {
    768: {
        loop: true,
        centeredSlides: true,
        spaceBetween: 24,
        slidesPerView: 3,
        speed: 400,
    }
  }
});

// Slide Banners
var swiper5 = new Swiper(".slideBanners", {
  direction: 'horizontal',
  initialSlide: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500
  },
  speed: 1500,
});

var dataCount = document.querySelector('.banner .num-slide')

swiper5.on('slideChange', (swiper) => {
  let swiperIndex = swiper.realIndex + 1
  if (swiperIndex < 10) {
    dataCount.innerText = `0${swiperIndex}`
  } else {
    dataCount.innerText = swiperIndex
  }
  })

// Footer - mobile
const headingsIcon = document.querySelectorAll('.footer .row-footer .arr-down')
const listUl = document.querySelectorAll('.footer .col-item ul')
headingsIcon.forEach((heading,index) => {
  heading.addEventListener('click', function() {
    listUl[index].classList.toggle('hide')
    this.classList.toggle('active')
  })
})

// Menu

const listMenu = document.querySelectorAll('.mega-menu .menu-item .row')

listMenu.forEach((menu) => {
  menu.addEventListener('click', function() {
    this.classList.toggle('active')
  })
})

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//? =========================== Animation ===========================

const bottomBrand = document.querySelector('.brand .bottom')
const brand = document.querySelector('.brand')

const eleBottomPositionTop = brand.getBoundingClientRect().top;


// Play video
let videoElem = document.getElementById("video");

window.addEventListener("scroll", function () {
      var scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosition >= eleBottomPositionTop ) {
        brand.classList.add("active");
        videoElem.play()
      } else {
        brand.classList.remove("active");
        videoElem.pause()
      }
});

function playVideo(ele) {
  ele[index].play()
  this.style.display = 'none'
}
function pauseVideo(ele) {
  this.pause()
  ele[index].style.display = 'block'
}
const autoPlay = document.querySelectorAll('.constructor .auto-play')
const listVideo = document.querySelectorAll('.constructor .video-constructor')
const overlayVideo = document.querySelectorAll('.constructor .overlay-video')

listVideo.forEach(item => {
  item.controls = false
})
autoPlay.forEach(((aPlay,index) => {
  aPlay.addEventListener('click',function() {
    listVideo[index].play()
    aPlay.style.display = 'none'
    overlayVideo[index].style.display = 'none'
    listVideo[index].controls = true
  })
}))
listVideo.forEach((video,index) => {
  video.addEventListener('click',function() {
    video.pause()
    autoPlay[index].style.display = 'block'
    overlayVideo[index].style.display = 'block'
    listVideo[index].controls = false
  })
})

const autoPlayAb = document.querySelectorAll('.video-about__wrapper .auto-play')
const listVideoAb = document.querySelectorAll('.video-about__wrapper .video-about')
const overlayVideoAb = document.querySelectorAll('.slide-about .overlay-video')

listVideoAb.forEach(item => {
  item.controls = false
})
autoPlayAb.forEach(((aPlay,index) => {
  aPlay.addEventListener('click',function() {
    listVideoAb[index].play()
    aPlay.style.display = 'none'
    overlayVideoAb[index].style.display = 'none'
    listVideoAb[index].controls = true
  })
}))
listVideoAb.forEach((video,index) => {
  video.addEventListener('click',function() {
    video.pause()
    autoPlayAb[index].style.display = 'block'
    overlayVideoAb[index].style.display = 'block'
    listVideoAb[index].controls = false
  })
})

// ? ================================== Merge =====================================
// section3

var swiper = new Swiper(".mySwipersc3", {
  slidesPerView: 4,
  freeMode: true,
  spaceBetween: 20,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    350: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});



// section4//

var swiper = new Swiper(".mySwiperSc4", {
  slidesPerView: 3,
  spaceBetween: 0,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1.2,
    },
    350: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Custom slide
var slideDemo = new Swiper(".slideDemo", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    768: {
      centeredSlides: false,
      slidesPerView: 7,
      spaceBetween: 24,
    },
  },
});

// custom js swiper
var classNameForSlideItem = document.getElementsByClassName("item-slideDemo");

for (let index = 0; index < 7; index++) {
  var numberItemActive = slideDemo.activeIndex + index;
  classNameForSlideItem[numberItemActive].classList.add("active_" + index);
  for (let j = 0; j < classNameForSlideItem.length; j++) {
    if (numberItemActive != j) {
      classNameForSlideItem[j].classList.remove("active_" + index);
    }
  }
}

slideDemo.on("slideChange", function () {
  for (let index = 0; index < 7; index++) {
    var numberItemActive = slideDemo.activeIndex + index;
    classNameForSlideItem[numberItemActive].classList.add("active_" + index);
    for (let j = 0; j < classNameForSlideItem.length; j++) {
      if (numberItemActive != j) {
        classNameForSlideItem[j].classList.remove("active_" + index);
      }
    }
  }
});

// ? ============ Header ============

// open mobile menu

let mobileMenu = document.getElementsByClassName("menu-mobile")[0];

let modalListActions = document.getElementsByClassName("list-actions")[0];

// let btnClose = document.querySelector("header .mega-menu > ul .home::after");

let aboutHeader = document.querySelector(".about-header");
function openModal() {
  modalListActions.style.display = "flex";
  modalListActions.style.transform = "translateX(0)";
  aboutHeader.style.display = "none";
}

function closeModal() {
  modalListActions.style.transform = "translateX(-100%)";
  aboutHeader.style.display = "flex";
}

mobileMenu.addEventListener("click", openModal);
// btnClose.addEventListener("click", closeModal);

// -----toggle dropdown-----//

let action = document.querySelectorAll(".action");
if (window.innerWidth < 769) {
  action.forEach((a) => {
    let ul = a.querySelector("ul");
    let p = a.querySelector("p");
    let span = p.querySelector("span");
    if (ul) {
      p.addEventListener("click", () => {
        ul.classList.toggle("active");
        ul.style.height = "auto";
        if (ul.classList.contains("active")) {
          ul.style.display = "flex";
          let ulActive = a.querySelector("ul.active");
          let heightSubMenu2 = getComputedStyle(ulActive).height;
          span.style.transform = "rotate(-90deg)";
          ul.style.height = heightSubMenu2;
        } else {
          span.style.transform = "rotate(0deg)";
          ul.style.height = "0";
        }
      });
    }
  });
}

// toggle search area
let searchArea = document.querySelector(".search-area");

let search = document.querySelector(".search");
let btnCloseSearch = document.querySelector(".btn-closeSearch");
search.addEventListener("click", (event) => {
  searchArea.classList.toggle("activeSearch");
  searchArea.style.transform = "translateY(0)";
  event.stopPropagation();
});
searchArea.addEventListener("click", (event) => {
  event.stopPropagation();
});
window.addEventListener("click", (event) => {
  if (!searchArea.contains(event.target) || search.contains(event.target)) {
    searchArea.classList.remove("activeSearch");
  }
});
btnCloseSearch.addEventListener("click", () => {
  searchArea.classList.remove("activeSearch");
  searchArea.style.transform = "translateY(-100%)";
});

// open submenu mobile
const subMenuStruct2 = document.querySelectorAll(".sub-menu-struct-2");
const subMenuStruct3 = document.querySelectorAll(".sub-menu-struct-3");
const subMenuActions = document.querySelectorAll(".sub-menu-actions");
subMenuStruct2.forEach((str) => {
  const strLi = str.querySelectorAll(".list-sub-struct-2");
  strLi.forEach((strLi) => {
    const strP = strLi.querySelector("p");
    strP.addEventListener("click", () => {
      if (window.outerWidth < "769") {
        strLi.classList.toggle("activeSubMenu");
        if (strLi.classList.contains("activeSubMenu")) {
          subMenuStruct3.forEach((str3) => {
            var parentElement = str3.parentNode;
            if (parentElement.classList.contains("activeSubMenu")) {
              str3.style.display = "flex";
            }
          });
        } else {
          subMenuStruct3.forEach((str3) => {
            str3.style.display = "none";
          });
        }
      }
    });
  });
});

subMenuStruct3.forEach((str3) => {
  const str3Li = str3.querySelectorAll("li");
  str3Li.forEach((str3Li) => {
    const str3A = str3Li.querySelectorAll("a");
    str3Li.addEventListener("click", () => {
      str3Li.classList.toggle("activeSubStruct3");
      str3A.forEach((str3A) => {
        let parentElement = str3A.parentNode;
        if (parentElement.classList.contains("activeSubStruct3")) {
          str3A.style.setProperty("color", "#743e00", "important");
        } else {
          str3A.style.color = "#a1a1a1";
        }
      });
    });
  });
});

subMenuActions.forEach((subAc) => {
  const subAcLi = subAc.querySelectorAll("li");
  subAcLi.forEach((subAcLi) => {
    subAcLi.addEventListener("click", () => {
      subAcLi.classList.toggle("active");
    });
  });
});
// Parallax
jarallax(document.querySelectorAll(".jarallax"), {
  speed: 0.4,
});

const sections = document.querySelectorAll("[data-section]");
window.addEventListener("scroll", scrollReveal)

function scrollReveal() {
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight / 2) {
            section.classList.add("active");
        }
    })
}
scrollReveal();

// 
const slidesAbout = document.querySelectorAll('.slide-about')
const slidesContent = document.querySelectorAll('.content-item')

swiper2.on('slideChange', (swiper) => {
  document.querySelector('.content-item.show').classList.remove('show')
  let swiperIndex = swiper.realIndex
  slidesContent[swiperIndex].classList.add('show')
})

// =======================
    const nav = document.querySelector('.mega-menu')

    window.addEventListener('scroll', function () {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (scrollPosition >= 200) {
        nav.classList.add('nav-active')
      } else {
        nav.classList.remove('nav-active')
      }
    })
    // ===========================
    window.addEventListener('scroll', headerSticky)
    let lastScrolledPos = 0
    function headerSticky() {
      if (lastScrolledPos >= window.scrollY) {
        nav.classList.remove('header-hide')
      } else {
        nav.classList.add('header-hide')
      }
      lastScrolledPos = window.scrollY
    }

  const menuMobile = document.querySelector('.mega-menu > ul')
  
  menuMobile.addEventListener('scroll', function() {
    if (nav.classList.contains('header-hide')) {
      nav.classList.remove('header-hide')
    }
  })

  let text = document.querySelector(".profile .heading-1");
      let contentText = text.textContent;
      let arrText = contentText.split("");
      let newArr = arrText.map(
        (item, index) => `<span style='--i:${index + 1}'>${item}</span>`
      );
      text.innerHTML = newArr.join("");

 
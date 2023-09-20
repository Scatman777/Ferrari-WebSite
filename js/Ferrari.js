function buttonMap() {
	document.getElementById("Map").style.backgroundImage = "url('/css/img/Mapsicle Map Black.svg')"
	document.getElementById("Display").style.display = "block"
}

var swiper = new Swiper(".swiper", {
	spaceBetween: 10,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	watchOverflow: true,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	dots: false,
	mousewheel: true,
	keyboard: true,
	breakpoints: {
		630: {
			spaceBetween: 20,
			mousewheel: false
		}
	}
  });

  
var swiper = new Swiper(".swiper-work", {
	spaceBetween: 20,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	watchOverflow: true,
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	dots: false,
	mousewheel: true,
	keyboard: true,
	630: {
		mousewheel: false
	}
  });
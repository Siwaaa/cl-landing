

const isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
const isiPad = (navigator.userAgent.match(/iPad/i) != null);
const isiPod = (navigator.userAgent.match(/iPod/i) != null);
if (isiPhone || isiPad || isiPod) {
	// Smooth scroll to link
	let smoothScroll = () => {
		let linkNav = document.querySelectorAll('[href^="#"]'),
			V = 0.2;
		for (let i = 0; i < linkNav.length; i++) {
			linkNav[i].addEventListener('click', function (e) {
				e.preventDefault();
				let w = window.pageYOffset,
					hash = this.href.replace(/[^#]*(.*)/, '$1');
				t = document.querySelector(hash).getBoundingClientRect().top,
					start = null;
				requestAnimationFrame(step);
				function step(time) {
					if (start === null) start = time;
					let progress = time - start,
						r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
					window.scrollTo(0, r);
					if (r != w + t) {
						requestAnimationFrame(step)
					} else {
						location.hash = hash
					}
				}
			}, false);
		}
	}
	smoothScroll();
	// -- //
}


// Video 
// const instruction = document.querySelector('.instruction');
const heroVideoWrapp = document.querySelector('.hero-video');
const heroVideo = document.querySelector('.hero-video__video');
const videoBtn = document.querySelector('.hero-video__button');
const videoOverlay = document.querySelector('.hero-video__media');
const videoBtns = document.querySelector('.instruction__watch');
const videoSpeed = document.querySelector('.hero-video__btn-speed');

const videoPlay = () => {
	heroVideo.play();

	heroVideo.setAttribute('controls', 'controls');
	videoBtn.classList.add('hero-video__button--hidden');
	videoOverlay.classList.add('hero-video__media--hidden');
}
const videoPaused = () => {
	heroVideo.removeAttribute('controls');
	videoSpeed.classList.remove('hero-video__btn-speed--visible')
	videoBtn.classList.remove('hero-video__button--hidden');
	videoOverlay.classList.remove('hero-video__media--hidden');
}
const addClassVideoSpeed = () => {
	videoSpeed.classList.add('hero-video__btn-speed--visible');
}
// instruction.addEventListener('click', (e) => {
// 	if (e.target === videoBtn || e.target === videoBtns) {
// 		videoPlay();
// 	} else if (e.target === videoSpeed) {
// 		if (heroVideo.playbackRate === 1) {
// 			heroVideo.playbackRate = 2;
// 			videoSpeed.textContent = 'x1';
// 		} else {
// 			heroVideo.playbackRate = 1;
// 			videoSpeed.textContent = 'x2';
// 		}
// 	}
// })

// heroVideo.addEventListener('play', () => {
// 	heroVideoWrapp.addEventListener('mouseover', addClassVideoSpeed)
// 	heroVideoWrapp.addEventListener('mouseleave', () => {
// 		videoSpeed.classList.remove('hero-video__btn-speed--visible');
// 	})
// })
// heroVideo.addEventListener('pause', () => {
// 	videoPaused();
// 	heroVideoWrapp.removeEventListener('mouseover', addClassVideoSpeed);
// })
// heroVideo.addEventListener('ended', () => {
// 	videoPaused();
// })
// -- //


// const prices = ["590 ???/??????", "540 ???/??????", "475 ???/??????", "410 ???/??????"]
// const price = document.querySelector('#month')
// const select = document.querySelector('.select__calc')
// const currentSelect = document.querySelector('.select__calc').getElementsByTagName('option')

// select.addEventListener('change', () => {
// 	for (let i = 0; i < currentSelect.length; i++) {
// 		if (currentSelect[i].selected === true) {
// 			price.textContent = prices[i]
// 		}
// 	}
// })







const swiper = new Swiper(".swiper", {
	containerModifierClass: "swiper",
	wrapperClass: "swiper__wrapper",
	slideClass: "swiper__slide",
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	pagination: {
		el: ".swiper__pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".swiper__button--next",
		prevEl: ".swiper__button--prev"
	},
	breakpoints: {
		400: {

		},
		767: {

		},
		992: {

		},
		1200: {

		}
	},

});

const swiperVideosBtns = document.querySelectorAll('.video-button');
const swiperVideos = document.querySelectorAll('.swiper-slide__video');
swiperVideosBtns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.target.closest('.swiper-slide__video-wrapp').querySelector('.swiper-slide__video');
		video.play();
		video.setAttribute('controls', 'controls');
		el.classList.add('hero-video__button--hidden');
	})
});
swiperVideos.forEach((el) => {
	el.addEventListener('pause', () => {
		el.removeAttribute('controls');
		const videosButtons = el.parentNode.querySelector('.video-button');
		videosButtons.classList.remove('hero-video__button--hidden');
	})
	el.addEventListener('ended', () => {
		el.removeAttribute('controls');
		const videosButtons = el.parentNode.querySelector('.video-button');
		videosButtons.classList.remove('hero-video__button--hidden');
	})
});

//??????????????????
const functionInfo = document.querySelectorAll(".function__info")
// const functionImage = document.querySelectorAll(".function__image")

const visibleGif = (infoBlocks) => {
	infoBlocks.forEach((el) => {
		if ((document.documentElement.clientWidth > 991) && (el.nextElementSibling !== null)) {
			el.addEventListener("mouseover", () => {
				el.nextElementSibling.style.opacity = "1"
				el.nextElementSibling.style.height = "auto"
			});
			el.addEventListener("mouseout", () => {
				el.nextElementSibling.style.opacity = "0"
			});
		}
	});
};
visibleGif(functionInfo);


// Accrdions
const accordionTrigger = document.querySelectorAll(".accordion__trigger"),
	accordionBody = document.querySelectorAll(".accordion__body");

const accordionsToggle = (triggers, bodyElements) => {
	triggers.forEach((el) => {
		el.addEventListener("click", () => {
			// el.disabled = true;
			// setTimeout(() => {
			// 	el.disabled = false;
			// }, 500);
			const elBody = el.closest(".accordion__item").querySelector(".accordion__body");
			el.classList.toggle('accordion__trigger--active');
			elBody.style.height = `${elBody.scrollHeight}px`;
			if (elBody.style.height === "0px" || window.getComputedStyle(elBody).height === "0px") {
				el.setAttribute("aria-expanded", "true");
				elBody.setAttribute("aria-hidden", "false");
			} else {
				elBody.style.height = "0";
				el.setAttribute("aria-expanded", "false");
				elBody.setAttribute("aria-hidden", "true");
			}
		});
	});
	bodyElements.forEach((el) => {
		el.addEventListener("transitionend", () => {
			if (el.style.height !== "0px") {
				el.style.height = "auto";
			}
		});
	});
};
accordionsToggle(accordionTrigger, accordionBody);
// -- //

// Parallax
if (window.matchMedia("(min-width: 993px)").matches) {
	const scenes = document.querySelectorAll('.parallax-scene');
	scenes.forEach((el) => {
		const scene = new Parallax(el);
	});
}
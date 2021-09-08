// Get element to scroll down
const arrow_scroll = document.querySelector('.button-scroll');
const logo_link = document.querySelector('.logo-link');
const about_link = document.querySelector('.about-link');
const skills_link = document.querySelector('.skills-link');
const works_link = document.querySelector('.works-link');
const contact_link = document.querySelector('.contact-link');

// Get size of home part
const home = document.querySelector('.home');
var home_rect = home.getBoundingClientRect();
console.log(home_rect);

// Get size of about part
const about = document.querySelector('.about');
var about_rect = about.getBoundingClientRect();
console.log(about_rect);

// Get size of skills part
const skills = document.querySelector('.skills');
var skills_rect = skills.getBoundingClientRect();
console.log(skills_rect);

// Get size of works part
const works = document.querySelector('.works');
var works_rect = works.getBoundingClientRect();
console.log(works_rect);

// Get size of contact part
const contact = document.querySelector('.contact');
var contact_rect = works.getBoundingClientRect();
console.log(contact_rect);


// Scrolling action when click on an element

logo_link.addEventListener('click', () => {
	window.scrollTo({
		top: 1,
		behavior: "smooth"
	});
});

arrow_scroll.addEventListener('click', () => {
	window.scrollTo({
		top: home_rect.height - 62,
		behavior: "smooth"
	});
});

about_link.addEventListener('click', () => {
	window.scrollTo({
		top: home_rect.height - 62,
		behavior: "smooth"
	});
});

skills_link.addEventListener('click', () => {
	window.scrollTo({
		top: (home_rect.height - 62) + (about_rect.height),
		behavior: "smooth"
	});
});

works_link.addEventListener('click', () => {
	window.scrollTo({
		top: (home_rect.height - 62) + (about_rect.height - 85) + (skills_rect.height - 90),
		behavior: "smooth"
	});
});

contact_link.addEventListener('click', () => {
	window.scrollTo({
		top: (home_rect.height - 62) + (about_rect.height - 85) + (skills_rect.height - 90) + works_rect.height,
		behavior: "smooth"
	});
});

// Change the color of nav link

jQuery(function() {
	$(function() {
		$(window).scroll(function() {
			var scrollTop = $(this).scrollTop();
			$('.logo-span').removeClass('active');
			$('.nav-underline').removeClass('active');
			$('.nav-underline').addClass('inactive');

			//console.log(scrollTop);

			if (scrollTop < 825) {
				$('.logo-span').addClass('active');
			}

			if (scrollTop >= 825 && scrollTop < 1480) {
				$('.link-1').removeClass('inactive');
				$('.link-1').addClass('active');
			}

			if (scrollTop >= 1480 & scrollTop < 3255) {
				$('.link-2').removeClass('inactive');
				$('.link-2').addClass('active');
			}

			if (scrollTop >= 3255 & scrollTop < 4078) {
				$('.link-3').removeClass('inactive');
				$('.link-3').addClass('active');
			}

			if (scrollTop >= 4078) {
				$('.link-4').removeClass('inactive');
				$('.link-4').addClass('active');
			}
		});
	});
});

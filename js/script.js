const body = document.querySelector('body');
const btnHamburger = document.getElementById('btnHamburger');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.header__links');
const mobileMenuLinks = document.querySelectorAll('.header__links a');

openMenu = () => {
	body.classList.add('noscroll');
	btnHamburger.classList.add('open');
	overlay.classList.add('display-overlay');
	mobileMenu.classList.add('display-mobile-menu', 'transition-all-mobile-menu');
}

closeMenu = () => {
	body.classList.remove('noscroll');
	btnHamburger.classList.remove('open');
	overlay.classList.remove('display-overlay');
	mobileMenu.classList.remove('display-mobile-menu');
	setTimeout(function() {
		mobileMenu.classList.remove('transition-all-mobile-menu');
	  }, 250);
}

btnHamburger.addEventListener('click', () => {
	btnHamburger.classList.contains('open') ? closeMenu() : openMenu();
});

mobileMenuLinks.forEach(link => {
	link.addEventListener('click', () => {
		closeMenu();
	});
});
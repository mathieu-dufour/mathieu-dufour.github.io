// Call fullPage.js
new fullpage('#fullpage', {
	//options
	autoScrolling: true,
	responsiveWidth: 824,
	anchors: ["home", "education", "skills", "experience", "more", "contact"],
	licenseKey: '40319E3A-196B4662-8916DF4C-3753A081',
	// responsiveWidth: 600,
});

// disable scrolling during intro
// fullpage_api.setAllowScrolling(false);
// setTimeout(() => {  fullpage_api.setAllowScrolling(true); }, 10000);

// To completely remove intro element from dom when it is done
var animEndCount = 0;
$('.intro').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
	animEndCount++;
	// remove intro element from dom after the 9 intro animations have completed
	if (animEndCount === 9) {
		$(this).remove();
	}
});

var currentYear = new Date().getFullYear();
document.getElementById('copyright').innerHTML = "&copy; Copyright " + currentYear + ", Mathieu Dufour";

function flipCard(cardName, side, axis) {
	var cardID = cardName + '-flip-card';
	var element = document.getElementById(cardID)
	console.log(cardID);
	if (side == 'back') element.classList.add('flipped-card-' + axis)
	else element.classList.remove('flipped-card-' + axis)
}

// Remove default outline if user is not using tab (accessibility)
function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}
window.addEventListener('keydown', handleFirstTab);
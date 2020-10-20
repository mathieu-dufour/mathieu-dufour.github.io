// Website timeline
const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

//Chain animations one by one
tl.to('.hide span', { y: "0%", duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.8 });
tl.to('.intro', { y: "-100%", duration: 1 }, "-=1.1"); // Starts 1.1 second earlier; same time as slider animation
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=0.55");
tl.fromTo(".page-title-container", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1.5");


// Call fullPage.js
new fullpage('#fullpage', {
	//options
	autoScrolling:true,
	anchors:["home", "education", "skills", "experience", "more", "contact"],
	licenseKey: '40319E3A-196B4662-8916DF4C-3753A081',
});

//methods
//fullpage_api.setAllowScrolling(false);
const navAbout = document.querySelector('.nav-aboutme');
const navProjects = document.querySelector('.nav-projects');
const navContact = document.querySelector('.nav-contact');

console.log(navAbout);
console.log(navProjects);
console.log(navContact);

// SCROLLING BETWEEN SECTIONS 

function smoothScroll(target, time) {
    var target = document.querySelector(target),
        targetPos = target.getBoundingClientRect().top,
        startPos = window.pageYOffset,
        distance = targetPos - startPos,
        startTime = null;


    function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPos, distance, time);
        window.scrollTo(0, run);
        if (timeElapsed < time) requestAnimationFrame(scrollAnimation);
    }

    //EASING FUNCTION 
    function ease(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);

}

// EVENT LISTENERS
navAbout.addEventListener('click', function () {
    smoothScroll('.aboutme', 400);
});

navProjects.addEventListener('click', function () {
    smoothScroll('.projects', 400);
});

navContact.addEventListener('click', function () {
    smoothScroll('.contact', 400);
});
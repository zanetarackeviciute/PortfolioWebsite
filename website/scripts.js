gsap.registerPlugin(ScrollTrigger)

gsap.to(".about-me", {
    scrollTrigger: {
        trigger: ".about-me",
        start: "top 80%",
    },
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
})

gsap.to(".icon", {
    scrollTrigger: {  // !!!! ScrollTrigger wouldn't work!
        trigger: ".skills-list", // when this part appears on the screen
        start: "top 70%" // when it reaches 70% of the screen
    },
    opacity: 1,    // becomes visible
    scale: 1,   // becomes normal size
    duration: 0.75,    // duration for one icon 
    stagger: 0.5,   //    time between each icon
    ease: "back.out(1.7)"   // "pop" effect
})

gsap.to(".skill", {
    scrollTrigger: {
        trigger: ".skills-list",
        start: "top 70%"
    },
    opacity: 1,
    scale: 1,
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
    duration: 0.75,
    stagger: 0.5,
    ease: "back.out(1.7)"
})

document.querySelectorAll('.project').forEach(project => {
    ScrollTrigger.create({
        trigger: project,
        start: "top 80%",
        once: true,
        onEnter: () => {
            // for letters animation: letter by letter
            project.querySelectorAll('[data-animate="type"]').forEach(elem => {
                const text = elem.textContent;
                let index = 0;
                elem.textContent = '';
                const interval = setInterval(() => {
                    elem.textContent += text[index];
                    index++;
                    if (index === text.length) clearInterval(interval);
                }, 30);
            })

            // fro span and a appearance
            gsap.to(project.querySelectorAll('[data-animate="fade"]'), {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            })

            // for a whole project block
            gsap.to(project, {
                opacity: 1,
                clearProps: "transform", // if I leave y: 0 - project:hover doesn't work
                duration: 0.8,
                ease: "power2.out"
            })
        }
    })
})

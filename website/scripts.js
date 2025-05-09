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

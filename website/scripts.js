gsap.registerPlugin(ScrollTrigger)

gsap.to(".icon", {
    scrollTrigger: {  // !!!! ScrollTrigger wouldn't work!
        trigger: ".skills-list", // when this part appearsm on the screen
        start: "top 70%" // when it reaches 70% of the screen
    },
    opacity: 1,    // becomes visible
    scale: 1,   // becomes normal size
    duration: 1,    // duration for one icon 
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
    duration: 1,
    stagger: 0.5,
    ease: "back.out(1.7)"
})

fetch('http://localhost:7788/projects')
.then(response => response.json())
.then(dataProjects => {

    let blockProjects = document.querySelector('.new-projects .projects')
    block.innerHTML = ''
    
    for (const project of dataProjects) {
        blockProjects.innerHTML += `<div class="project">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p>
                ${project.technologies.map(x => '<span class="tag">' + x + '</span>').join(' ')}
            </p>
            <a href="${project.link}" class="btn btn-blue">Watch the project</a>
        </div>`
    }
})

// fetch('http://localhost:7788/education')
//     .then(response => response.json())
//     .then(dataEducation => {
//         let blockEducation = document.querySelector('')
//     })
// ????? MAYBE WILL BE ADDED LATER
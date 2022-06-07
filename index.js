const faders = document.querySelectorAll(".fade-in")
const sliders = document.querySelectorAll(".slide-in")
const fadeups = document.querySelectorAll(".fade-up")


document.onload = setTimeout( function () {
    const left = document.querySelectorAll(".section-left")[0]
    const right = document.querySelectorAll(".section-right")[0]
    const loading = document.querySelectorAll(".loading")[0]

    left.classList.add("opening")
    right.classList.add("opening")
    loading.classList.add("opening")
    setTimeout(function() {
        left.classList.add("none")
        right.classList.add("none")
        loading.classList.add("none")

        const appearOptions = {

            threshold: 0,
            rootMargin: "0px 0px -250px 0px"
        }
        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target.classList.remove('appear')
                    
                } else {
                    entry.target.classList.add('appear')
                }
            })
        }, appearOptions)
        
        faders.forEach(fader => {
            appearOnScroll.observe(fader)
        })
        sliders.forEach(slider => {
            appearOnScroll.observe(slider)
        })
        fadeups.forEach(fadeup => {
            appearOnScroll.observe(fadeup)
        })

    }, 1100)
}, 2500)

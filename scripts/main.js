gsap.registerPlugin(ScrollTrigger) 

var mq = window.matchMedia( "(min-width: 320px) and (max-width: 768px)" );
if (mq.matches) {
    document.querySelector("#pathmaker").classList.remove("selected")
}
else {
    document.querySelector("#pathmaker").classList.add("selected")
}

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".trig",
        start: "center center",
        scrub: 1,
    }
})
tl.to(".cover", {y: 420, duration: 8})

document.querySelector("#allbtn").addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((p) => {
        p.classList.remove("sel")
    })
    document.querySelector("#allbtn").classList.add("sel")

    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("filtered")
    })
})

document.querySelector("#profbtn").addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((p) => {
        p.classList.remove("sel")
    })
    document.querySelector("#profbtn").classList.add("sel")
    
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("filtered")
    })
    document.querySelectorAll(".prof").forEach((p) => {
        p.classList.add("filtered")
    })
})

document.querySelector("#persbtn").addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((p) => {
        p.classList.remove("sel")
    })
    document.querySelector("#persbtn").classList.add("sel")
    
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("filtered")
    })
    document.querySelectorAll(".pers").forEach((p) => {
        p.classList.add("filtered")
    })
})

document.querySelector("#databtn").addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((p) => {
        p.classList.remove("sel")
    })
    document.querySelector("#databtn").classList.add("sel")
    
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("filtered")
    })
    document.querySelectorAll(".data").forEach((p) => {
        p.classList.add("filtered")
    })
})

document.querySelector("#aibtn").addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((p) => {
        p.classList.remove("sel")
    })
    document.querySelector("#aibtn").classList.add("sel")
    
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("filtered")
    })
    document.querySelectorAll(".ai").forEach((p) => {
        p.classList.add("filtered")
    })
})

document.querySelector("#gamebtn").addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((p) => {
        p.classList.remove("sel")
    })
    document.querySelector("#gamebtn").classList.add("sel")
    
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("filtered")
    })
    document.querySelectorAll(".game").forEach((p) => {
        p.classList.add("filtered")
    })
})



let coverImg = document.querySelector(".cover_img")
let workSection = document.querySelector(".work")

document.querySelector("#pathmaker").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/pathmakercover.gif")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#pathmaker").classList.add("selected")
})

document.querySelector("#tc").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/tccover.gif")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#tc").classList.add("selected")
})

document.querySelector("#msp").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/mspcover.jpg")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#msp").classList.add("selected")
})

document.querySelector("#pcrit").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/pcritcover.jpg")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#pcrit").classList.add("selected")
})

document.querySelector("#mc").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/mccover.png")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#mc").classList.add("selected")
})

document.querySelector("#wbse").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/wbsecover.gif")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#wbse").classList.add("selected")
})

document.querySelector("#sap").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/sapcover.png")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#sap").classList.add("selected")
})

document.querySelector("#ct").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/ctcover.gif")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#ct").classList.add("selected")
})

document.querySelector("#fc").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/fccover.gif")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#fc").classList.add("selected")
})

document.querySelector("#cc").addEventListener("mouseover", () => {
    coverImg.setAttribute("src", "./assets/image/cccover.gif")
    document.querySelectorAll(".project").forEach((p) => {
        p.classList.remove("selected")
    })
    document.querySelector("#cc").classList.add("selected")
})
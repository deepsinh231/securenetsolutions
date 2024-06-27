const docloader = document.getElementById('doc-loader')
window.addEventListener("load", function () {
    setTimeout(() => {
        docloader.style.display = "none"
    }, 1000);
})

const inputnav = document.getElementById("input-nav")
const mainclass = document.getElementsByClassName("main-class")[0];
function chekbox() {
    if (inputnav.checked) {
        mainclass.classList.add("active");
    } else {
        mainclass.classList.remove("active");
    }
}


const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
};

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let headernav = document.getElementById("header-nav");
    // let progressValue = document.getElementById("progress-value");
    let toplinght = document.getElementById("toplinght");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
        headernav.classList.add("posifix")
    }
    else {
        scrollProgress.style.display = "none";
        headernav.classList.remove("posifix")
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#ed1d61 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    toplinght.style.height = `${scrollValue}%`;
    // document.getElementById("deepsinh").style.background = `conic-gradient(yellow ${scrollValue}%,black ${scrollValue}%,teal ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// releav 
// && (revealElements[i].getBoundingClientRect().bottom > window.innerHeight / 3)
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
            revealElements[i].classList.add("revealed");
        }
        // else {
        //     revealElements[i].classList.remove("revealed");

        // }
    }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
    revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// releav opacity 
const opacity = document.querySelectorAll("[data-opacity]");
const opacityDelayElements = document.querySelectorAll("[data-opacity-delay]");
// && (opacity[i].getBoundingClientRect().bottom > window.innerHeight / 3)
const opacity1 = function () {
    for (let i = 0, len = opacity.length; i < len; i++) {
        if (opacity[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
            opacity[i].classList.add("Portano");
        }
        // else {
        //     opacity[i].classList.remove("Portano");

        // }
    }
}

for (let i = 0, len = opacityDelayElements.length; i < len; i++) {
    opacityDelayElements[i].style.transitionDelay = opacityDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", opacity1);
window.addEventListener("load", opacity1);


const currentDate = new Date();
document.getElementById("date").value = currentDate

const scriptURL = 'https://script.google.com/macros/s/AKfycbzkIw62pMxYFWxQgHsGPeYm5xqGpE-2-IIYSr2bpqpsoOSZhz4BQ7kSWDAJsQYQjvWY/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    document.getElementById("thisis").style.display = "block"
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => Showtos())
        .catch(error => Showtoserro())
})

let toastbox = document.getElementById('toastbox')
let Successmsg = '<i class="fa-solid fa-circle-check"></i> Success Fullu Submitted';
let Errormsg = '<i class="fa-solid fa-circle-xmark"></i> Send Data Error';

function Showtos() {
    document.getElementById("thisis").style.display = "none"
    let creadiv = document.createElement('div')
    creadiv.innerHTML = Successmsg;
    creadiv.classList.add('toast')
    toastbox.appendChild(creadiv);
    form.reset();

    setTimeout(() => {
        creadiv.remove()
    }, 5000);
}
function Showtoserro() {
    document.getElementById("thisis").style.display = "none"
    let creadiv = document.createElement('div')
    creadiv.innerHTML = Errormsg;
    creadiv.classList.add('toast');
    creadiv.classList.add('Error');
    toastbox.appendChild(creadiv);

    setTimeout(() => {
        creadiv.remove()
    }, 5000);
}
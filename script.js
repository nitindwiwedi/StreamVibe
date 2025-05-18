const navbar = document.getElementById("navbar");
const plus = document.querySelectorAll("#plus");
const logo_image = document.querySelector(".logo-image");
const menu = document.getElementById("menu");
const cross = document.querySelector(".cross");
const menu_list = menuu.querySelectorAll("li");
let menu_arr = Array.from(menu_list);

menu_arr.forEach((e) => {
    e.addEventListener("click", function () {
        gsap.to(".menu-content", {
            x: "200%",
            duration: 0.3
        })
    })
})

let content_arr = [
    'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing.'
]

const card = document.querySelectorAll(".card1");
let card_arr = Array.from(card);

document.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.position = "fixed"
        navbar.style.backgroundColor = "black"
        navbar.style.zIndex = "100"
    } else {
        navbar.style.position = "absolute"
        navbar.style.backgroundColor = "transparent"
    }
})

let arr = Array.from(plus);
arr.forEach((e, i) => {
    e.addEventListener("click", function () {
        var newP = document.createElement("p");
        let p = card_arr[i].querySelector("p");
        if (!p) {
            newP.textContent = content_arr[i] + `${i + 1}`;
            card_arr[i].appendChild(newP);
            e.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        } else {
            p.remove();
            e.innerHTML = `<i class="fa-solid fa-plus"></i>`
        }
    })
})

let toggled = false;

logo_image.addEventListener("click", function () {
    if (!toggled) {
        gsap.to("#img", {
            x: "-450%",
            duration: 1,
            delay: 0.2,
        });

        gsap.to("#img1", {
            x: "450%",
            duration: 1,
            delay: 0.2,
        });

        toggled = true;
    } else {
        gsap.to("#img", {
            x: "0%",
            duration: 1,
            delay: 0.2
        });

        gsap.to("#img1", {
            x: "0%",
            duration: 1,
            delay: 0.2
        });
        toggled = false;
    }
});

var tl = gsap.timeline();

menu.addEventListener("click", function () {

    tl.to(".menu-content", {
        x: "0",
        duration: 0.5
    })
        .from("#list", {
            x: "-50",
            opacity: 0,
            stagger: 1
        });

})

cross.addEventListener("click", function () {
    gsap.to(".menu-content", {
        x: "200%",
        duration: 0.3
    })
})


// ===================================slider==========================================




// const card_container = document.querySelectorAll(".card");
// let cards_arr = Array.from(card_container);
// // const slideCount = document.querySelectorAll('.card').length;
// const slideCount = 9;
// let currentIndex = 0;

//     document.querySelector('#arrow_left').addEventListener('click', () => {
//         if (currentIndex != 0) {
//             currentIndex = (currentIndex - 1 + slideCount) % slideCount;
//             updateSlide();
//         } else {
//             return;
//         }

//     });

// document.querySelector('#arrow_right').addEventListener('click', () => {
//     if (currentIndex < cards_arr.length) {
//         currentIndex = (currentIndex + 1) % slideCount;
//         updateSlide();
//     }else{
//         card.style.transform = `translateX(-${220}%)`
//     }
// });

// function updateSlide() {
//     console.log(cards_arr.length);
//     cards_arr.forEach((e, i) => {
//         if (i < cards_arr.length) {
//             e.style.transform = `translateX(-${currentIndex * 100}%)`;
//         } else {
//             currentIndex = 0;
//         }
//     })
// }

const card_container = document.querySelectorAll(".card");
let cards_arr = Array.from(card_container);
let currentIndex = 0;

    document.querySelector('#arrow_left').addEventListener('click', () => {
        if (currentIndex != 0) {
            currentIndex--;
            updateSlide();
        } else {
            return;
        }

    });

document.querySelector('#arrow_right').addEventListener('click', () => {
    if (currentIndex < cards_arr.length) {
        currentIndex++;
        updateSlide();
        arr
    }else{
        return;
    }
});

function updateSlide() {
    console.log(cards_arr.length);
    cards_arr.forEach((e, i) => {
        if (currentIndex < 4) {
            e.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else {
            e.style.transform = `translateX(0%)`
            currentIndex=0;
        }
    })
}
// plus.map((e)=>{
//     console.log(e.target);
// })
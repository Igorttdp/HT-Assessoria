function showElements() {
    const navbar = document.querySelector("#navbar");
    const floatBtn = document.querySelector('#float-btn');
    const navContainer = document.querySelector(".nav-container");
    const menuBtn = document.querySelector("#menu-btn");
    const linkList = document.querySelector(".link-list");

    window.onscroll = () => {
        if(document.documentElement.scrollTop > 100) {
            navbar.style.visibility = 'initial'
            navbar.style.opacity = '1'
            floatBtn.style.transform = 'translateY(0%)'
        } else {
            navbar.style.visibility = 'collapse'
            navbar.style.opacity = '0'
            floatBtn.style.transform = 'translateY(200%)'
        }
    }

    menuBtn.onclick = () => {
        if(!linkList.classList.contains("active")) {
            linkList.classList.add("active");
        } else {
            linkList.classList.remove("active");
        }
    }
}

showElements()
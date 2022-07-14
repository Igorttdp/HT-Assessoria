function showElements() {
    const navbar = document.querySelector("#navbar");
    const floatBtn = document.querySelector('#float-btn');
    const menuBtn = document.querySelector("#menu-btn");
    const linkList = document.querySelector(".link-list");

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 100) {
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
        if (!linkList.classList.contains("active")) {
            linkList.classList.add("active");
        } else {
            linkList.classList.remove("active");
        }
    }

    document.addEventListener('click', (e) => {
        el = e.target;

        console.log(el)
        if(el.classList.contains('a-link')) {
            linkList.classList.remove("active");
        }
    });

}

showElements()
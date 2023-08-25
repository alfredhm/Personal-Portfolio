window.onload = function() {
    // Enable hidden header
    const nav = document.querySelector<HTMLElement>('header');
    if (window.scrollY === 0) {
        nav?.classList.add("shadow-out")
        nav?.classList.add("no-shadow")
    }
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        console.log("scroll")
        if (lastScrollY < window.scrollY) {
            nav?.classList.add("hidden")
        } else {
            nav?.classList.remove("hidden")
        }

        if (window.scrollY === 0) {
            nav?.classList.add("shadow-out")
            nav?.classList.add("no-shadow")
        } else {
            nav?.classList.remove("shadow-out")
            nav?.classList.remove("no-shadow")
        }
        lastScrollY = window.scrollY;
        if (window.scrollY <= 0) {
            nav?.classList.remove("hidden")
        }
    }); 

}
